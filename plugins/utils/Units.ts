import idMap from '@/static/data/unit/idMap';
import { Unit } from '@/interface/unit';
import { Discipline } from '@/interface/unit/discipline';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';
import { Puzzle } from '@/interface/unit/puzzle';
import { SkillSet } from '@/interface/unit/skillset';
import { CANNOT_FIND_CHARACTER } from './Error';

export default {
    getAllUnitGeneralData(): Unit[]{
        try {
            const result: Unit[] = [];
            Object.entries(idMap).forEach((character) => {
                const id = character[1] 
                result.push(this.getGeneralUnitData(id))               
            });
            return result
        } catch (error) {
            console.error(error);
            return [];
        }
    },
    getUnitsByIDs(ids: number[]): Unit[]{
        try {
            const result: Unit[] = [];
            ids.forEach(id => {
                result.push(this.getGeneralUnitData(id))               
            });
            return result
        } catch (error) {
            return []
        }
    },
    getUnitByMetacode(metaCode: string): Unit {
        try {
            const id = idMap[metaCode];
            return {
                ...this.getGeneralUnitData(id),
                discipline: this.getDisciplineData(id),
                liberateSkillSet: this.getLiberateSkillSetData(id),
                puzzle: this.getPuzzleData(id),
                skillSet: this.getSkillSetData(id),
            };
        } catch (error) {
            throw error;
        }
    },
    getGeneralUnitData(id: number): Unit {
        try {
            return require(`@/static/data/unit/general/${id}`).default as Unit;
        } catch (error) {
            console.log(require(`@/static/data/unit/general/${id}`));
            console.log(id);
            
            throw new Error(CANNOT_FIND_CHARACTER);
        }
    },
    getSkillSetData(id: number): SkillSet[] {
        try {
            return require(`@/static/data/unit/skillset/${id}`).default as SkillSet[];
        } catch (error) {
            throw new Error(CANNOT_FIND_CHARACTER);
        }
    },
    getDisciplineData(id: number): Discipline[] {
        try {
            return require(`@/static/data/unit/discipline/${id}`).default as Discipline[];
        } catch (error) {
            return [];
        }
    },
    getLiberateSkillSetData(id: number): LiberateSkillSet[] {
        try {
            return require(`@/static/data/unit/liberate/${id}`).default as LiberateSkillSet[];
        } catch (error) {
            return [];
        }
    },
    getPuzzleData(id: number): Puzzle[] {
        try {
            return require(`@/static/data/unit/puzzle/${id}`).default as Puzzle[];
        } catch (error) {
            return [];
        }
    }
}
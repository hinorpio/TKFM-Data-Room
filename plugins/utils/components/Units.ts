import { ErrorMessage, UnitID } from '../enums'
import { Unit } from '@/interface/unit';
import { Discipline } from '@/interface/unit/discipline';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';
import { SkillSet } from '@/interface/unit/skillset';
import { DefaultUnit, UnitGeneral, UnitSkillSet, UnitLiberateSkillSet, UnitDiscipline } from '@/static/data/unit'

export default {
    getAllUnitGeneralData(): Unit[]{
        try {
            const result: Unit[] = [];
            Object.entries(UnitID).forEach((character) => {
                const id = character[1] 
                result.push(this.getGeneralUnitData(id))               
            });
            return result
        } catch (error) {
            console.error(error);
            return [];
        }
    },
    getUnitsByIDs(ids: UnitID[]): Unit[]{
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
            console.log();
            if((UnitID as any)[metaCode] === undefined)
                throw new Error(ErrorMessage.CANNOT_FIND_CHARACTER);
            return {
                ...this.getGeneralUnitData((UnitID as any)[metaCode]),
                discipline: this.getDisciplineData((UnitID as any)[metaCode]),
                liberateSkillSet: this.getLiberateSkillSetData((UnitID as any)[metaCode]),
                skillSet: this.getSkillSetData((UnitID as any)[metaCode]),
            };
        } catch (error) {
            throw error;
        }
    },
    getGeneralUnitData(code: UnitID): Unit {
        return UnitGeneral[code] ?? DefaultUnit;
    },
    getSkillSetData(code: UnitID): SkillSet[] {
        return UnitSkillSet[code] ?? [];
    },
    getDisciplineData(code: UnitID): Discipline[] {
        return UnitDiscipline[code] ?? [];
    },
    getLiberateSkillSetData(code: UnitID): LiberateSkillSet[] {
        return UnitLiberateSkillSet[code] ?? [];
    },
}
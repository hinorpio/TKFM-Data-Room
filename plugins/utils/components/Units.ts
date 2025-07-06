import { ErrorMessage, UnitCode } from '../enums'
import { Unit } from '@/interface/unit';
import { Discipline } from '@/interface/unit/discipline';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';
import { SkillSet } from '@/interface/unit/skillset';
import { DefaultUnit, UnitGeneral, UnitSkillSet, UnitLiberateSkillSet, UnitDiscipline } from '@/static/data/unit'


export default {
    getAllUnitData(): Unit[]{
        try {
            const result: Unit[] = [];
            Object.entries(UnitCode).forEach((character) => {
                const metaCode = character[0] 
                result.push(this.getUnitByMetacode(metaCode))               
            });
            return result
        } catch (error) {
            console.error(error);
            return [];
        }
    },
    getAllUnitGeneralData(): Unit[]{
        try {
            const result: Unit[] = [];
            Object.entries(UnitCode).forEach((character) => {
                const id = character[1] 
                result.push(this.getGeneralUnitData(id))               
            });
            return result
        } catch (error) {
            console.error(error);
            return [];
        }
    },
    getUnitsByIDs(ids: UnitCode[]): Unit[]{
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
            if((UnitCode as any)[metaCode] === undefined)
                throw new Error(ErrorMessage.CANNOT_FIND_CHARACTER);
            return {
                ...this.getGeneralUnitData((UnitCode as any)[metaCode]),
                discipline: this.getDisciplineData((UnitCode as any)[metaCode]),
                liberateSkillSet: this.getLiberateSkillSetData((UnitCode as any)[metaCode]),
                skillSet: this.getSkillSetData((UnitCode as any)[metaCode]),
            };
        } catch (error) {
            throw error;
        }
    },
    getGeneralUnitData(code: UnitCode): Unit {
        return UnitGeneral[code] ?? DefaultUnit;
    },
    getSkillSetData(code: UnitCode): SkillSet[] {
        return UnitSkillSet[code] ?? [];
    },
    getDisciplineData(code: UnitCode): Discipline[] {
        return UnitDiscipline[code] ?? [];
    },
    getLiberateSkillSetData(code: UnitCode): LiberateSkillSet[] {
        return UnitLiberateSkillSet[code] ?? [];
    },
    
}
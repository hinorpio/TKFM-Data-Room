import { ErrorMessage, UnitCode } from '../enums'
import { Unit, StatGroup } from '@/interface/unit';
import { Discipline } from '@/interface/unit/discipline';
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet';
import { SkillSet } from '@/interface/unit/skillset';
import { DefaultUnit, UnitGeneral, UnitSkillSet, UnitLiberateSkillSet, UnitDiscipline } from '@/static/data/unit'
import { CalculatedSummary, StatSummary } from '~/interface/potential';
import Potential from './Potential';

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
    getInitStatGroup(unit: Unit): StatGroup {
        const hp: number = 3345.5997594279465;
        const atk: number = 1052.7977991802477;
        return {
            initHP: hp,
            initATK: atk,
            initStar: (unit.rarity == 'SSR')? 3 :(unit.rarity == 'SR')? 2 :(unit.rarity == 'R')? 1 :0,
            rarity: unit.rarity,
            level: 1,
            star: (unit.rarity == 'SSR')? 3 :(unit.rarity == 'SR')? 2 :(unit.rarity == 'R')? 1 :0,
            room: (unit.discipline != undefined && unit.discipline?.length > 0) ? 0 : null,
            pot: { level: 1, slot: [false, false, false, false, false, false] },
            lib: (unit.liberateSkillSet != undefined && unit.liberateSkillSet?.length > 0) ? 0 : null
        }
    },
    getCalculateStat(unit: Unit, stat: StatGroup, type: string): number {
        const levelBuff: number = Math.pow(1.1, stat.level-1)
        const libBuff: number = (stat.lib != null && stat.lib > 1) ? 1.1 : 1
        const starBuff: number = 1 + 0.125 * (stat.star - stat.initStar)
        const roomBuff: number = (stat.room === 1) ? 1.05 : (stat.room === 2) ? 1.15 : (stat.room === 3) ? 1.3 : 1
        const potBuff: number =   1 + ((Potential.getCalculatedPotResult(
            Potential.getPotential(unit.potential),
            this.getInitStatGroup(unit).pot,
            stat.pot,
            false
        ).statSummary.find(f => f.code == type)?.value ?? 0) / 100);

        console.log(stat);
        console.log(levelBuff);
        console.log(libBuff);
        console.log(starBuff);
        console.log(roomBuff);
        console.log(potBuff);
        
        const buffBase = (type == 'HP')?stat.initHP :stat.initATK
        return Math.floor(buffBase * levelBuff * libBuff * starBuff * roomBuff * potBuff)
    }
}
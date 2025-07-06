import { Unit, StatGroup } from '@/interface/unit';
import PotentialService from './Potential';

export default {

    getInitStatGroup(unit: Unit): StatGroup {
        return {
            initHP: unit.initHP,
            initATK: unit.initATK,
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
        const starBuff: number = (1 + 0.2 * stat.star) / (1 + 0.2 * stat.initStar)
        const roomBuff: number = (stat.room === 1) ? 1.05 : (stat.room === 2) ? 1.15 : (stat.room === 3) ? 1.3 : 1
        const potBuff: number =   1 + ((PotentialService.getCalculatedPotResult(
            PotentialService.getPotential(unit.potential),
            this.getInitStatGroup(unit).pot,
            stat.pot,
            false
        ).statSummary.find(f => f.code == type)?.value ?? 0) / 100);

        const buffBase = (type == 'HP')?stat.initHP :stat.initATK
        return Math.floor(buffBase * levelBuff * libBuff * starBuff * roomBuff * potBuff)
    },
    
};
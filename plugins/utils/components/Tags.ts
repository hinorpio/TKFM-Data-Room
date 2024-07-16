import { Tag } from '@/interface/tag';
import { Unit } from '@/interface/unit';
import { Rarity, TagID } from '@/plugins/utils/enums';
import tagData from '@/static/data/tags';

export default {
    getTag(id: TagID): Tag {
        const foundTag = tagData.find((tag: Tag) => tag.ID === id);
        if (foundTag) {
            return foundTag;
        } else {
            throw new Error("TAG_NOT_FOUND");
        }
    },

    getTagByIDs(ids: TagID[]): Tag[] {
        return tagData.filter((tag: Tag) => ids.includes(tag.ID));
    },

    getAllTag(): Tag[] {
        return tagData;
    },

    getFilterUnitByTag(ids: TagID[], unitList: Unit[], isSSR: boolean): Unit[]{
        const result: Unit[] = unitList.filter((unit: Unit) => ids.every(tagID => unit.tagList.includes(tagID)))
        return (isSSR)? result :result.filter(unit => unit.rarity !== Rarity.SSR)
    },

    checkIsTagListUnique(ids: TagID[], unitList: Unit[], isSSR: boolean): boolean {
        return this.getFilterUnitByTag(ids, unitList, isSSR).length === 1;
    },

    checkIsTagListGuaranteeSR(ids: TagID[], unitList: Unit[]): boolean {
        const list = this.getFilterUnitByTag(ids, unitList, false).filter(unit => unit.rarity !== Rarity.SSR)
        for (const unit of list) {
            if (unit.rarity !== Rarity.SR) {
                return false;
            }
        }
        return true;
    },

    extractCombination(ids: TagID[]){ // Get all combination of tagIDs e.g. [a, b, c, d] => [[a, b, c], [a, b, d], [a, c, d], ...] 
        const result: TagID[][] = [];

        // Get all combinations of 3 elements
        for (let i = 0; i < ids.length - 2; i++) {
            for (let j = i + 1; j < ids.length - 1; j++) {
                for (let k = j + 1; k < ids.length; k++) {
                    result.push([ids[i], ids[j], ids[k]]);
                }
            }
        }

        // Get all combinations of 2 elements
        for (let i = 0; i < ids.length - 1; i++) {
            for (let j = i + 1; j < ids.length; j++) {
                result.push([ids[i], ids[j]]);
            }
        }

        // Get all single-element combinations
        for (const item of ids) {
            result.push([item]);
        }

        return result;
    },

    getTagCombination(ids: TagID[], unit: Unit, unitList: Unit[]): {}{ // Trigger when IsTagListUnique or IsTagListGuaranteeSR
        const combination = this.extractCombination(ids)
        const uniqueResult: TagID[][] = [];
        const guaranteeSRResult: TagID[][] = [];

        combination.forEach(tagIDs => {
            if((unit.rarity !== Rarity.SSR || (unit.rarity === Rarity.SSR && tagIDs.includes(TagID.CLASS_LEADER)))  // Check if combination return unique and filter no LEADER tag if unit is SSR
                && this.checkIsTagListUnique(tagIDs, unitList, unit.rarity === Rarity.SSR)
            )
                uniqueResult.push(tagIDs);
            if(unit.rarity === Rarity.SR  // Check if combination return guarantee SR and filter non SR unit
                && this.checkIsTagListGuaranteeSR(tagIDs, unitList)
            )
                guaranteeSRResult.push(tagIDs);
        });
        
        return {
            uniqueList: uniqueResult, // Unique combination for the unit
            SRList: guaranteeSRResult
        };
    }
}
import { Tag } from '@/interface/global/tag';
import { Unit } from '@/interface/unit';
import tagData from '@/static/data/tags';

export default {
    getTag(id: number): Tag {
        const foundTag = tagData.find((tag: Tag) => tag.ID === id);
        if (foundTag) {
            return foundTag;
        } else {
            throw new Error("TAG_NOT_FOUND");
        }
    },

    getTagByIDs(ids: number[]): Tag[] {
        return tagData.filter((tag: Tag) => ids.includes(tag.ID));
    },

    getAllTag(): Tag[] {
        return tagData;
    },

    checkIsTagListUnique(ids: number[], unitList: Unit[]): boolean {
        return unitList.filter((unit: Unit) => ids.every(tagID => unit.tagList.includes(tagID))).length === 1;
    },

    checkIsTagListGuaranteeSR(ids: number[], unitList: Unit[]): boolean {
        const list = unitList.filter(unit => ids.every(tagID => unit.tagList.includes(tagID)));
        for (const unit of list) {
            if (unit.rarity !== 'SSR') {   // testing
                return false;
            }
        }
        return true;
    }
}
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

    checkIsTagListUnique(ids: TagID[], unitList: Unit[]): boolean {
        return unitList.filter((unit: Unit) => ids.every(tagID => unit.tagList.includes(tagID))).length === 1;
    },

    checkIsTagListGuaranteeSR(ids: TagID[], unitList: Unit[]): boolean {
        const list = unitList.filter(unit => ids.every(tagID => unit.tagList.includes(tagID)) && unit.rarity !== Rarity.SSR)
        for (const unit of list) {
            if (unit.rarity !== Rarity.SR) {
                return false;
            }
        }
        return true;
    }
}
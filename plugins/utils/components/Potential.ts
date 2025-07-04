import { PotentialType, ItemType, ItemCode, PotentialBuffType } from '../enums';
import { Potential, Slot, CalculatedSummary, MaterialSummary, StatSummary, PotentialSelectGroup } from '@/interface/potential';
import { Item, CombinedItem } from '@/interface/item';
import potentialData from '@/static/data/potential';
import ItemService from './Items';

export default {
    getPotential(type: PotentialType): Potential | undefined{
        return potentialData.find(p => {return p.type == type})
    },

    getAllPotential(): Potential[]{
        return potentialData;
    },
    
    getCalculatedPotResult(potentialData: any, currentPotential: PotentialSelectGroup, targetPotential: PotentialSelectGroup, showCombined: boolean) {
        const requiredSlotList = [];
        const startIndex = currentPotential.level - 1;
        const endIndex = targetPotential.level - 1;
        const detail = potentialData.detail;

        for (let level = startIndex; level <= endIndex; level++) {
            let condition: 'SAME_LEVEL' | 'FIRST_LEVEL' | 'LAST_LEVEL' | 'BETWEEN_LEVEL';
            if (startIndex === endIndex) {
                condition = 'SAME_LEVEL';
            } else if (level === startIndex) {
                condition = 'FIRST_LEVEL';
            } else if (level === endIndex) {
                condition = 'LAST_LEVEL';
            } else {
                condition = 'BETWEEN_LEVEL';
            }

            for (let index = 0; index < detail[level].length; index++) {
                if (this.getCalculateCondition(condition, index, currentPotential.slot, targetPotential.slot)) {
                    requiredSlotList.push(detail[level][index]);
                }
            }
        }

        return this.getCalculatedSummary(requiredSlotList, showCombined);
    },

    getCalculateCondition(type: string, index: number, currentSlot: boolean[], targetSlot: boolean[]){
        switch (type) {
            case 'SAME_LEVEL':
                return !currentSlot[index] && targetSlot[index] //  if the slot is not selected in current slot but selected in target slot
            case 'FIRST_LEVEL':
                return !currentSlot[index]                      //  if the slot is not selected in current 
            case 'LAST_LEVEL':
                return targetSlot[index]                        //  if the slot is selected in target
            case 'BETWEEN_LEVEL':
                return true                                     //  pass all 6 slot required materials
            default:
                break;
        }
    },

    getCalculatedSummary(data: Slot[], showCombined: boolean): CalculatedSummary{
        const materialList: { [key: string]: number } = {};
        const statList: { [key: string]: number } = {};

        const handleItem = (item: Item, quantity: number) => {
            if (item.type === ItemType.POTENTIAL_ADVANCED && showCombined && item.combined) {
                item.combined.forEach((combinedItem: CombinedItem) => {
                    const itemCode = combinedItem.code as ItemCode
                    const combinedItemData = ItemService.getItem(itemCode);
                    if (combinedItemData) {
                        handleItem(combinedItemData, combinedItem.quantity * quantity);
                    }
                });
            } else {
                materialList[item.code] = (materialList[item.code] ?? 0) + quantity;
            }
        };
        
        data.forEach((slot) => {
            statList[slot.type] = (statList[slot.type] ?? 0) + slot.value;
        
            slot.required.forEach((requiredItem) => {
                const item = ItemService.getItem(requiredItem.code);
                if (item) {
                    handleItem(item, requiredItem.quantity);
                }
            });
        });
        
        const materialSummary: MaterialSummary[] = this.sortNonPotentialItemToLast(
            Object.entries(materialList).map(([code, quantity]) => ({ 
                code: code as ItemCode, 
                quantity 
            }))
        )
        const statSummary: StatSummary[] = this.sortBuffArray(
            Object.entries(statList).map(([code, value]) => ({ 
                code: code as PotentialBuffType, 
                value 
            }))
        )
        
        return { 
            materialSummary, 
            statSummary,
        };   
    },

    sortNonPotentialItemToLast(summary: MaterialSummary[]): MaterialSummary[]{
        const generalItemList = summary.filter(item => item.code !== ItemCode.SLIVER_COIN && item.code !== ItemCode.SKILL_STONE && item.code !== ItemCode.SKILL_FRAGMENT )
        const notGeneralItemList = summary.filter(item => item.code === ItemCode.SLIVER_COIN || item.code === ItemCode.SKILL_STONE || item.code === ItemCode.SKILL_FRAGMENT )

        const order: { [key: string]: number } = {
            [ItemCode.SKILL_FRAGMENT]: 1,
            [ItemCode.SKILL_STONE]: 2,
            [ItemCode.SLIVER_COIN]: 3,
          };
        
        notGeneralItemList.sort((a, b) => {
            const orderA = order[a.code];
            const orderB = order[b.code];
            return orderA - orderB;
        });

        return generalItemList.concat(notGeneralItemList);
    },

    sortBuffArray(summary: StatSummary[]): StatSummary[]{
        const order = {
            ATK: 1,
            HP: 2,
            PASSIVE: 3,
        };
        
        return summary.sort((a, b) => {
            const orderA = order[a.code];
            const orderB = order[b.code];
            return orderA - orderB;
        });
    }
};
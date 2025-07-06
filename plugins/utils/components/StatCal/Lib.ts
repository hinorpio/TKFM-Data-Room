import { CalculatedLibSummary } from '~/interface/stat/lib';
import { ItemQty } from '~/interface/item';
import { Unit } from '~/interface/unit';
import { ItemCode } from '../../enums';

export default {
    getCalculatedLibResult(unit: Unit, startLib: number | null, endLib: number | null): CalculatedLibSummary{
        if(startLib == null || endLib == null) return { summary: [] }
        const libData = unit.liberateSkillSet
        const summary: ItemQty[] = [];

        if(libData && libData.length > 0){
            const currentLib = libData[0]
            const stageItemList = []
            for(const [key, stage] of Object.entries(currentLib.detail)){
                if(stage)
                    stageItemList.push(stage.material)
            }

            const requiredLib = stageItemList
                .filter((f, index) => index >= startLib && index < endLib)

            for (const lib of requiredLib) { // Calculating the qty of each item
                for(const item of lib){
                    const existing = summary.find(s => s.code === item.code);
                    if(existing)
                        existing.quantity = (existing.quantity as number) + (item.quantity as number)
                    else
                        summary.push({ code: item.code, quantity: item.quantity });
                }
            }
        }
        for (let i = 0; i < summary.length; i++) {
            const item = summary[i];
            item.code = ( item.code === 'ESSENCE')?unit.essence :item.code
        }

        return { summary: this.sortLibItemList(summary) }
    },

    sortLibItemList(summary: ItemQty[]): ItemQty[]{
        const generalItemList = summary.filter(item => item.code !== ItemCode.SKILL_FRAGMENT && item.code !== ItemCode.FLAWLESS && item.code !== ItemCode.LIBERATE_STONE && item.code !== ItemCode.SLIVER_COIN )
        const notGeneralItemList = summary.filter(item => item.code === ItemCode.SKILL_FRAGMENT || item.code === ItemCode.FLAWLESS || item.code === ItemCode.LIBERATE_STONE || item.code === ItemCode.SLIVER_COIN )

        const order: { [key: string]: number } = {
            [ItemCode.SKILL_FRAGMENT]: 1,
            [ItemCode.FLAWLESS]: 2,
            [ItemCode.LIBERATE_STONE]: 3,
            [ItemCode.SLIVER_COIN]: 4,
        };
        
        notGeneralItemList.sort((a, b) => {
            const orderA = order[a.code];
            const orderB = order[b.code];
            return orderA - orderB;
        });

        return generalItemList.concat(notGeneralItemList);
    },
};
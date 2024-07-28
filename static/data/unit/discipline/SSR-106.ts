import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10136: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.angelina][0],
        name: {
            [Locale.tc]: `超划算的委託`,
            [Locale.sc]: `超划算的委托`,
            [Locale.en]: `Cost-effective Commission`,
            [Locale.jp]: `お得な依頼`,
            [Locale.kr]: `가성비 최고의 의뢰`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.angelina][1],
        name: {
            [Locale.tc]: `性愛外送`,
            [Locale.sc]: `性爱外送`,
            [Locale.en]: `Sex Delivery`,
            [Locale.jp]: `エッチデリバリー`,
            [Locale.kr]: `섹스 배달`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.angelina][2],
        name: {
            [Locale.tc]: `賞金獵人終成獵物`,
            [Locale.sc]: `赏金猎人终成猎物`,
            [Locale.en]: `Bounty Hunter Becomes Prey`,
            [Locale.jp]: `賞金ハンターが獲物に`,
            [Locale.kr]: `먹이로 전락한 현상금 사냥꾼`
        },
    },
]

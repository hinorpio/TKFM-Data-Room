import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10062: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.sherana][0],
        name: {
            [Locale.tc]: `有償初夜`,
            [Locale.sc]: `有偿初夜`,
            [Locale.en]: `Not for Free`,
            [Locale.jp]: `有料の初夜`,
            [Locale.kr]: `유료 첫경험`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.sherana][1],
        name: {
            [Locale.tc]: `狐娘的枕營業`,
            [Locale.sc]: `狐娘的枕营业`,
            [Locale.en]: `Foxy Business`,
            [Locale.jp]: `狐娘の枕営業`,
            [Locale.kr]: `요호의 베개영업`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.sherana][2],
        name: {
            [Locale.tc]: `令人羞恥的快感`,
            [Locale.sc]: `令人羞耻的快感`,
            [Locale.en]: `A Shy Pleasure`,
            [Locale.jp]: `羞恥心と快感`,
            [Locale.kr]: `수치심에서 비롯된 쾌감`
        },
    },
]

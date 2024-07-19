import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10123: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.d_miru][0],
        name: {
            [Locale.tc]: "似曾相識的大享堡",
            [Locale.sc]: "似曾相识的大享堡",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.d_miru][1],
        name: {
            [Locale.tc]: "惡魔貓娘的逆襲",
            [Locale.sc]: "恶魔猫娘的逆袭",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.d_miru][2],
        name: {
            [Locale.tc]: "在直播裡直播直播",
            [Locale.sc]: "在直播里直播直播",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]

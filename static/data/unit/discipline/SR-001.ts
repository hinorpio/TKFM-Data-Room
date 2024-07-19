import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10009: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.aiko][0],
        name: {
            [Locale.tc]: "對女僕的惡作劇",
            [Locale.sc]: "对女仆的恶作剧",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.aiko][1],
        name: {
            [Locale.tc]: "女僕的口交侍奉",
            [Locale.sc]: "女仆的口交侍奉",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.aiko][2],
        name: {
            [Locale.tc]: "凱薩大人不甘寂寞",
            [Locale.sc]: "凯萨大人不甘寂寞",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]

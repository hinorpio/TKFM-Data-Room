import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10001: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.baal][0],
        name: {
            [Locale.tc]: "監禁懲罰",
            [Locale.sc]: "监禁惩罚",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.baal][1],
        name: {
            [Locale.tc]: "抖M的覺醒",
            [Locale.sc]: "抖M的觉醒",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.baal][2],
        name: {
            [Locale.tc]: "過久的放置",
            [Locale.sc]: "过久的放置",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]

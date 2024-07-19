import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10020: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.muila][0],
        name: {
            [Locale.tc]: "玩具沒有的溫度",
            [Locale.sc]: "玩具没有的温度",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.muila][1],
        name: {
            [Locale.tc]: "拷問機器人君",
            [Locale.sc]: "拷问机器人君",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.muila][2],
        name: {
            [Locale.tc]: "殘念系美人",
            [Locale.sc]: "残念系美人",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]

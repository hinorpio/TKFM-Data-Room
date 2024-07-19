import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10131: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.inase][0],
        name: {
            [Locale.tc]: "被史萊姆襲擊了？！",
            [Locale.sc]: "被史莱姆袭击了？ ！",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.inase][1],
        name: {
            [Locale.tc]: "恥辱課堂",
            [Locale.sc]: "耻辱课堂",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.inase][2],
        name: {
            [Locale.tc]: "羞恥的回憶",
            [Locale.sc]: "羞耻的回忆",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]

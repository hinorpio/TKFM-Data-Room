import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10047: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.didi][0],
        name: {
            [Locale.tc]: "落敗的暗殺者",
            [Locale.sc]: "落败的暗杀者",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.didi][1],
        name: {
            [Locale.tc]: "不情願的認識",
            [Locale.sc]: "不情愿的认识",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.didi][2],
        name: {
            [Locale.tc]: "臣服的傭兵者",
            [Locale.sc]: "臣服的佣兵者",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]

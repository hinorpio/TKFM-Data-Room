import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10801: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.irene][0],
        name: {
            [Locale.tc]: "門後的景象",
            [Locale.sc]: "门后的景象",
            [Locale.en]: "Behind the Door",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.irene][1],
        name: {
            [Locale.tc]: "艾琳的禮物",
            [Locale.sc]: "艾琳的礼物",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.irene][2],
        name: {
            [Locale.tc]: "背棄丈夫的女人",
            [Locale.sc]: "背弃丈夫的女人",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]

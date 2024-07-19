import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10022: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.noma][0],
        name: {
            [Locale.tc]: "狂犬的洗浴時間",
            [Locale.sc]: "狂犬的洗浴时间",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.noma][1],
        name: {
            [Locale.tc]: "賭局的勝利者",
            [Locale.sc]: "赌局的胜利者",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.noma][2],
        name: {
            [Locale.tc]: "幼犬屈服",
            [Locale.sc]: "幼犬屈服",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]

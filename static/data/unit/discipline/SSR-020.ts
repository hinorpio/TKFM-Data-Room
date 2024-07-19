import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10034: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.asida][0],
        name: {
            [Locale.tc]: "和好的儀式",
            [Locale.sc]: "和好的仪式",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.asida][1],
        name: {
            [Locale.tc]: "姐妹要平等",
            [Locale.sc]: "姐妹要平等",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.asida][2],
        name: {
            [Locale.tc]: "喜歡妹妹…還有凱薩",
            [Locale.sc]: "喜欢妹妹…还有凯萨",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]

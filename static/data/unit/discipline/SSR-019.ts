import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10007: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.milae][0],
        name: {
            [Locale.tc]: `天使折翼`,
            [Locale.sc]: `天使折翼`,
            [Locale.en]: `Broken Wings`,
            [Locale.jp]: `翼の折れた天使`,
            [Locale.kr]: `날개 잃은 천사`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.milae][1],
        name: {
            [Locale.tc]: `信仰污染`,
            [Locale.sc]: `信仰污染`,
            [Locale.en]: `Polluted Faith`,
            [Locale.jp]: `汚された信仰`,
            [Locale.kr]: `오염된 신앙`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.milae][2],
        name: {
            [Locale.tc]: `墮落天使`,
            [Locale.sc]: `堕落天使`,
            [Locale.en]: `Fallen Angel`,
            [Locale.jp]: `堕天使`,
            [Locale.kr]: `타락 천사`
        },
    },
]

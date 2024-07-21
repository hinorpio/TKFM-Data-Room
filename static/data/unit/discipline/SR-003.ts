import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10011: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.fiora][0],
        name: {
            [Locale.tc]: "新神的使者",
            [Locale.sc]: "新神的使者",
            [Locale.en]: "New Disciple",
            [Locale.jp]: "新たな神の使い",
            [Locale.kr]: "새로운 신의 사자"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.fiora][1],
        name: {
            [Locale.tc]: "性的傳教",
            [Locale.sc]: "性的传教",
            [Locale.en]: "Sexual Missionary",
            [Locale.jp]: "性の布教",
            [Locale.kr]: "섹스 전도"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.fiora][2],
        name: {
            [Locale.tc]: "性愛之神官",
            [Locale.sc]: "性爱之神官",
            [Locale.en]: "High Priestess of Sex",
            [Locale.jp]: "セックス神官",
            [Locale.kr]: "애욕의 신관"
        },
    },
]

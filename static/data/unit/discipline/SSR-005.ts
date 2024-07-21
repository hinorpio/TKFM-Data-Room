import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10005: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.lana][0],
        name: {
            [Locale.tc]: "性愛對決",
            [Locale.sc]: "性爱对决",
            [Locale.en]: "Flowery Battle",
            [Locale.jp]: "セックスバトル",
            [Locale.kr]: "섹스 대결"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.lana][1],
        name: {
            [Locale.tc]: "絕不認輸",
            [Locale.sc]: "绝不认输",
            [Locale.en]: "Sore Loser",
            [Locale.jp]: "負けん気",
            [Locale.kr]: "항복은 절대 못해"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.lana][2],
        name: {
            [Locale.tc]: "高潮勝負",
            [Locale.sc]: "高潮胜负",
            [Locale.en]: "Cum Queen",
            [Locale.jp]: "絶頂勝負",
            [Locale.kr]: "오르가즘 승부"
        },
    },
]

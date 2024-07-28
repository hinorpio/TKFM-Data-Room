import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10006: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.lulu][0],
        name: {
            [Locale.tc]: `性的啟蒙`,
            [Locale.sc]: `性的启蒙`,
            [Locale.en]: `Awakened Desire`,
            [Locale.jp]: `性教育`,
            [Locale.kr]: `성(性)의 이해`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.lulu][1],
        name: {
            [Locale.tc]: `味覺調教`,
            [Locale.sc]: `味觉调教`,
            [Locale.en]: `Tasteful Punishment`,
            [Locale.jp]: `味覚調教`,
            [Locale.kr]: `미각의 조련`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.lulu][2],
        name: {
            [Locale.tc]: `嗜精王女`,
            [Locale.sc]: `嗜精王女`,
            [Locale.en]: `Cum Princess`,
            [Locale.jp]: `ビッチ王女`,
            [Locale.kr]: `정액을 먹는 왕녀`
        },
    },
]

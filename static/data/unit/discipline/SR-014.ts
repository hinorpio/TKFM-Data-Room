import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10055: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.tanocia][0],
        name: {
            [Locale.tc]: "淫靡之舞",
            [Locale.sc]: "淫靡之舞",
            [Locale.en]: "Dirty Dancin",
            [Locale.jp]: "淫靡の舞",
            [Locale.kr]: "음녀의 춤"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.tanocia][1],
        name: {
            [Locale.tc]: "仍嫌不足的贊助",
            [Locale.sc]: "仍嫌不足的赞助",
            [Locale.en]: "Slipping Support",
            [Locale.jp]: "足りない協賛",
            [Locale.kr]: "부족한 후원"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.tanocia][2],
        name: {
            [Locale.tc]: "白濁的舞姬",
            [Locale.sc]: "白浊的舞姬",
            [Locale.en]: "Moist Moves",
            [Locale.jp]: "白濁の踊り子",
            [Locale.kr]: "백탁의 무희"
        },
    },
]

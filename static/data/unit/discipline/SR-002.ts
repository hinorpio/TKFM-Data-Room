import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10010: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.leona][0],
        name: {
            [Locale.tc]: "觸手關押",
            [Locale.sc]: "触手关押",
            [Locale.en]: "Jail of Tentacles",
            [Locale.jp]: "触手で拘束",
            [Locale.kr]: "촉수"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.leona][1],
        name: {
            [Locale.tc]: "破碎的信仰",
            [Locale.sc]: "破碎的信仰",
            [Locale.en]: "Shattered Faith",
            [Locale.jp]: "砕けた信仰心",
            [Locale.kr]: "부숴진 신앙"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.leona][2],
        name: {
            [Locale.tc]: "虛假的贖罪",
            [Locale.sc]: "虚假的赎罪",
            [Locale.en]: "False Redemption",
            [Locale.jp]: "偽りの贖罪",
            [Locale.kr]: "거짓된 속죄"
        },
    },
]

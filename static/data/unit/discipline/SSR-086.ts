import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10120: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.o_lana][0],
        name: {
            [Locale.tc]: `協力轉駝`,
            [Locale.sc]: `协力转驼`,
            [Locale.en]: `Helping to Steer`,
            [Locale.jp]: `二人でかじ取り`,
            [Locale.kr]: `협력 전타`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.o_lana][1],
        name: {
            [Locale.tc]: `船頭的羅曼蒂克`,
            [Locale.sc]: `船头的罗曼蒂克`,
            [Locale.en]: `Romantic Bow`,
            [Locale.jp]: `船首のロマンチック`,
            [Locale.kr]: `뱃머리 로맨스`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.o_lana][2],
        name: {
            [Locale.tc]: `船長間的駕駛比試`,
            [Locale.sc]: `船长间的驾驶比试`,
            [Locale.en]: `Captain's Sailing Contest`,
            [Locale.jp]: `船長同士の操縦勝負`,
            [Locale.kr]: `선장 간의 운전 대결`
        },
    },
]

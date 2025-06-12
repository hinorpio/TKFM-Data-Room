import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10171: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.ss_iblis][0],
        name: {
            [Locale.tc]: `海上夜景`,
            [Locale.sc]: `海上夜景`,
            [Locale.en]: `Seaside Night View`,
            [Locale.jp]: `海上の夜景`,
            [Locale.kr]: `해상의 야경`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ss_iblis][1],
        name: {
            [Locale.tc]: `起床的問候`,
            [Locale.sc]: `起床的问候`,
            [Locale.en]: `Morning Greeting`,
            [Locale.jp]: `朝のあいさつ`,
            [Locale.kr]: `아침 문안 인사`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ss_iblis][2],
        name: {
            [Locale.tc]: `有你就行`,
            [Locale.sc]: `有你就行`,
            [Locale.en]: `With You Is Enough`,
            [Locale.jp]: `あなたがいれば十分`,
            [Locale.kr]: `너만 있으면 돼`
        },
    },
]

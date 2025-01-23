import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10161: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.zaskia][0],
        name: {
            [Locale.tc]: `慾火初燃`,
            [Locale.sc]: `欲火初燃`,
            [Locale.en]: `First Spark of a Burning Desire`,
            [Locale.jp]: `欲望の炎`,
            [Locale.kr]: `타오르는 정욕`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.zaskia][1],
        name: {
            [Locale.tc]: `不完全燃燒`,
            [Locale.sc]: `不完全燃烧`,
            [Locale.en]: `Incomplete Combustion`,
            [Locale.jp]: `不完全燃焼`,
            [Locale.kr]: `불완전 연소`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.zaskia][2],
        name: {
            [Locale.tc]: `得以釋放的感情`,
            [Locale.sc]: `得以释放的感情`,
            [Locale.en]: `Liberating One's Feelings`,
            [Locale.jp]: `解き放たれた感情`,
            [Locale.kr]: `해방감`
        },
    },
]

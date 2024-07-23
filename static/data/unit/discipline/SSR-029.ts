import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10043: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.h_salucia][0],
        name: {
            [Locale.tc]: `期間限定精靈王`,
            [Locale.sc]: `期间限定精灵王`,
            [Locale.en]: `Limited-Time Elf Queen`,
            [Locale.jp]: `期間限定エルフ王`,
            [Locale.kr]: `기간 한정 엘프의 왕`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.h_salucia][1],
        name: {
            [Locale.tc]: `自我得意`,
            [Locale.sc]: `自我得意`,
            [Locale.en]: `Self-satisfaction`,
            [Locale.jp]: `自信満々`,
            [Locale.kr]: `자신만만`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.h_salucia][2],
        name: {
            [Locale.tc]: `銘刻於基因`,
            [Locale.sc]: `铭刻于基因`,
            [Locale.en]: `Slutty DNA`,
            [Locale.jp]: `遺伝子に刻まれる`,
            [Locale.kr]: `유전자에 각인`
        },
    },
]

import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10030: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.s_lulu][0],
        name: {
            [Locale.tc]: `公主逃走中`,
            [Locale.sc]: `公主逃走中`,
            [Locale.en]: `Princess in Hiding`,
            [Locale.jp]: `姫、逃走中`,
            [Locale.kr]: `공주는 도망 중`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_lulu][1],
        name: {
            [Locale.tc]: `單蠢公主不會夢到魔王`,
            [Locale.sc]: `单蠢公主不会梦到魔王`,
            [Locale.en]: `Caesar Dreams`,
            [Locale.jp]: `あほ姫は魔王の夢を見ない`,
            [Locale.kr]: `단순한 공주는 마왕을 꿈꾸지 않아`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_lulu][2],
        name: {
            [Locale.tc]: `坦率的勇氣`,
            [Locale.sc]: `坦率的勇气`,
            [Locale.en]: `New Courage`,
            [Locale.jp]: `率直な勇気`,
            [Locale.kr]: `솔직한 용기`
        },
    },
]

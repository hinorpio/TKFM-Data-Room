import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10027: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.e_satan][0],
        name: {
            [Locale.tc]: `鋼管with魔王`,
            [Locale.sc]: `钢管with魔王`,
            [Locale.en]: `Demonic Pole Dance`,
            [Locale.jp]: `鋼管with魔王`,
            [Locale.kr]: `강철 파이프 with 마왕`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.e_satan][1],
        name: {
            [Locale.tc]: `撒旦的禮物`,
            [Locale.sc]: `撒旦的礼物`,
            [Locale.en]: `Easter Bunny's Gift`,
            [Locale.jp]: `イースターバニーの贈り物`,
            [Locale.kr]: `부활절 바니걸의 선물`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.e_satan][2],
        name: {
            [Locale.tc]: `發情小兔兔`,
            [Locale.sc]: `发情小兔兔`,
            [Locale.en]: `Rabbit in Heat`,
            [Locale.jp]: `発情した子うさぎ`,
            [Locale.kr]: `발정난 토끼`
        },
    },
]

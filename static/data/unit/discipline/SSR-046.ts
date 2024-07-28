import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10076: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.w_lulu][0],
        name: {
            [Locale.tc]: `被兔子襲擊了？！`,
            [Locale.sc]: `被兔子袭击了？！`,
            [Locale.en]: `Rabbit Attack!?`,
            [Locale.jp]: `ウサギに襲撃された！？`,
            [Locale.kr]: `토끼의 습격?!`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.w_lulu][1],
        name: {
            [Locale.tc]: `懲罰問答`,
            [Locale.sc]: `惩罚问答`,
            [Locale.en]: `Question, Answer`,
            [Locale.jp]: `お仕置きクイズ`,
            [Locale.kr]: `퀴즈 타임`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.w_lulu][2],
        name: {
            [Locale.tc]: `在夢中獨佔最愛的他`,
            [Locale.sc]: `在梦中独占最爱的他`,
            [Locale.en]: `My Dream Love`,
            [Locale.jp]: `夢で最愛の彼を独占`,
            [Locale.kr]: `꿈속에서 사랑을 독차지하다`
        },
    },
]

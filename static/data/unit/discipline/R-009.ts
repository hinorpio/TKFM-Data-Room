import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10812: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.panana][0],
        name: {
            [Locale.tc]: `嫌棄的騎乘侍奉`,
            [Locale.sc]: `嫌弃的骑乘侍奉`,
            [Locale.en]: `Disgusting Service`,
            [Locale.jp]: `嫌がりながらのご奉仕`,
            [Locale.kr]: `불쾌한 기승 봉사`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.panana][1],
        name: {
            [Locale.tc]: `帕奈奈的禮物`,
            [Locale.sc]: `帕奈奈的礼物`,
            [Locale.en]: `Panana Present`,
            [Locale.jp]: `パナナの贈り物`,
            [Locale.kr]: `파나나의 선물`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.panana][2],
        name: {
            [Locale.tc]: `仙子自慰套`,
            [Locale.sc]: `仙子自慰套`,
            [Locale.en]: `Panana Panini`,
            [Locale.jp]: `妖精オナホ`,
            [Locale.kr]: `페어리 오나홀`
        },
    },
]

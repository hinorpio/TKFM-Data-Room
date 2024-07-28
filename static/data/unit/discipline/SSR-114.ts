import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10144: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.s_caesar][0],
        name: {
            [Locale.tc]: `魔王飛機杯`,
            [Locale.sc]: `魔王飞机杯`,
            [Locale.en]: `Archdemon Fleshlight`,
            [Locale.jp]: `魔王オナホール`,
            [Locale.kr]: `마왕 오나홀`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_caesar][1],
        name: {
            [Locale.tc]: `高潮競賽`,
            [Locale.sc]: `高潮竞赛`,
            [Locale.en]: `Orgasm Competition`,
            [Locale.jp]: `絶頂競争`,
            [Locale.kr]: `오르가즘 경쟁`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_caesar][2],
        name: {
            [Locale.tc]: `做愛誓言`,
            [Locale.sc]: `做爱誓言`,
            [Locale.en]: `Oath of Sex`,
            [Locale.jp]: `セックスの誓い`,
            [Locale.kr]: `섹스의 언약`
        },
    },
]

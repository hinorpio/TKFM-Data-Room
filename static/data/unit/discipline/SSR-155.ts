import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10184: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.h_momDaphne][0],
        name: {
            [Locale.tc]: `與平時不一樣的情境`,
            [Locale.sc]: `与平时不一样的情境`,
            [Locale.en]: `A Different Situation Than Usual`,
            [Locale.jp]: `いつもと違うシチュエーション`,
            [Locale.kr]: `평소와 다른 상황극`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.h_momDaphne][1],
        name: {
            [Locale.tc]: `兔子洞`,
            [Locale.sc]: `兔子洞`,
            [Locale.en]: `Rabbit Hole`,
            [Locale.jp]: `ウサギの穴`,
            [Locale.kr]: `토끼굴`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.h_momDaphne][2],
        name: {
            [Locale.tc]: `雙棒競賽`,
            [Locale.sc]: `双棒竞赛`,
            [Locale.en]: `Duel Rod Competition`,
            [Locale.jp]: `チンコ勝負`,
            [Locale.kr]: `쌍봉 대결`
        },
    },
]

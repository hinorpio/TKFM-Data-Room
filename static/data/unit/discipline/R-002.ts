import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10802: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.nana][0],
        name: {
            [Locale.tc]: `貓娘的發情期`,
            [Locale.sc]: `猫娘的发情期`,
            [Locale.en]: `Cat in Heat`,
            [Locale.jp]: `猫娘の発情期`,
            [Locale.kr]: `고양이녀의 발정기`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.nana][1],
        name: {
            [Locale.tc]: `娜娜的禮物`,
            [Locale.sc]: `娜娜的礼物`,
            [Locale.en]: `Nana's Gift`,
            [Locale.jp]: `ナナの贈り物`,
            [Locale.kr]: `나나의 선물`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.nana][2],
        name: {
            [Locale.tc]: `嬌蠻的心腹`,
            [Locale.sc]: `娇蛮的心腹`,
            [Locale.en]: `Barbaric Pussy`,
            [Locale.jp]: `ツンデレ部下`,
            [Locale.kr]: `츤데레의 심복`
        },
    },
]

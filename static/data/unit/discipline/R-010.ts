import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10810: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.sophie][0],
        name: {
            [Locale.tc]: `人馬女僕的初侍寢`,
            [Locale.sc]: `人马女仆的初侍寝`,
            [Locale.en]: `The Centaur Maid's First Day`,
            [Locale.jp]: `ケンタウロスメイドの初夜伽`,
            [Locale.kr]: `켄타우로스 메이드의 첫 침실 봉사`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.sophie][1],
        name: {
            [Locale.tc]: `蘇菲的禮物`,
            [Locale.sc]: `苏菲的礼物`,
            [Locale.en]: `Sophie's Present`,
            [Locale.jp]: `ソフィーのプレゼント`,
            [Locale.kr]: `소피의 선물`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.sophie][2],
        name: {
            [Locale.tc]: `只是長度是不行的`,
            [Locale.sc]: `只是长度是不行的`,
            [Locale.en]: `Size Doesn't Matter...?`,
            [Locale.jp]: `長さが足りない`,
            [Locale.kr]: `사이즈가 조금...`
        },
    },
]

import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10176: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.bedard][0],
        name: {
            [Locale.tc]: `為了聯盟`,
            [Locale.sc]: `为了联盟`,
            [Locale.en]: `For the Alliance`,
            [Locale.jp]: `連盟のために`,
            [Locale.kr]: `연맹을 위하여`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.bedard][1],
        name: {
            [Locale.tc]: `我獨自整形`,
            [Locale.sc]: `我独自整形`,
            [Locale.en]: `My Plastic Surgery`,
            [Locale.jp]: `一人整形`,
            [Locale.kr]: `셀프 성형`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.bedard][2],
        name: {
            [Locale.tc]: `甜蜜寶貝`,
            [Locale.sc]: `甜蜜宝贝`,
            [Locale.en]: `Sweet Baby`,
            [Locale.jp]: `スイートベイビー`,
            [Locale.kr]: `스위트 베이비`
        },
    },
]

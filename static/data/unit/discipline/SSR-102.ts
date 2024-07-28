import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10023: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.belladonna][0],
        name: {
            [Locale.tc]: `難以抑制的戀慕之情`,
            [Locale.sc]: `难以抑制的恋慕之情`,
            [Locale.en]: `An Uncontrollable Crushe`,
            [Locale.jp]: `抑えられない恋の気持ち`,
            [Locale.kr]: `억누를 수 없는 사랑이란 감정`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.belladonna][1],
        name: {
            [Locale.tc]: `副官的好奇心`,
            [Locale.sc]: `副官的好奇心`,
            [Locale.en]: `Curious Lieutenant`,
            [Locale.jp]: `助手の好奇心`,
            [Locale.kr]: `부관의 호기심`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.belladonna][2],
        name: {
            [Locale.tc]: `恥辱的交換條件`,
            [Locale.sc]: `耻辱的交换条件`,
            [Locale.en]: `Humiliating Quid Pro Quo`,
            [Locale.jp]: `羞恥の交換条件`,
            [Locale.kr]: `치욕의 교환 조건`
        },
    },
]

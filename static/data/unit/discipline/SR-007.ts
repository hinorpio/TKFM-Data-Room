import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10015: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.juneau][0],
        name: {
            [Locale.tc]: "污穢的忠誠",
            [Locale.sc]: "污秽的忠诚",
            [Locale.en]: "Dirty Loyalty",
            [Locale.jp]: "穢れた忠誠",
            [Locale.kr]: "더럽혀진 충성심"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.juneau][1],
        name: {
            [Locale.tc]: "最棒的自慰杯",
            [Locale.sc]: "最棒的自慰杯",
            [Locale.en]: "The Best Fleshlight",
            [Locale.jp]: "最高のオナホール",
            [Locale.kr]: "최강의 오나홀"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.juneau][2],
        name: {
            [Locale.tc]: "沉溺愛慾的主僕",
            [Locale.sc]: "沉溺爱欲的主仆",
            [Locale.en]: "Filthy Servant",
            [Locale.jp]: "愛欲に溺れたメイド",
            [Locale.kr]: "애욕에 빠진 주인과 시중"
        },
    },
]

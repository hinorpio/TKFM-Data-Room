import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10801: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.irene][0],
        name: {
            [Locale.tc]: "門後的景象",
            [Locale.sc]: "门后的景象",
            [Locale.en]: "Behind the Door",
            [Locale.jp]: "ドアの裏の景色",
            [Locale.kr]: "문 안에 있는 장면"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.irene][1],
        name: {
            [Locale.tc]: "艾琳的禮物",
            [Locale.sc]: "艾琳的礼物",
            [Locale.en]: "Irene's Gift",
            [Locale.jp]: "エリンの贈り物",
            [Locale.kr]: "아이린의 선물"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.irene][2],
        name: {
            [Locale.tc]: "背棄丈夫的女人",
            [Locale.sc]: "背弃丈夫的女人",
            [Locale.en]: "A Wife's Betrayal",
            [Locale.jp]: "夫に背いた女",
            [Locale.kr]: "남편을 배신하는 여자"
        },
    },
]

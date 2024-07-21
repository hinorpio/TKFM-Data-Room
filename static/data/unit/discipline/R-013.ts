import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10813: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.iyan][0],
        name: {
            [Locale.tc]: "娚人的愛♡",
            [Locale.sc]: "娚人的爱♡",
            [Locale.en]: "Lady Love♡",
            [Locale.jp]: "男の娘の愛♡",
            [Locale.kr]: "그대가 사랑하는 법♡"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.iyan][1],
        name: {
            [Locale.tc]: "伊艾的禮物",
            [Locale.sc]: "伊艾的礼物",
            [Locale.en]: "Iyan's Gift",
            [Locale.jp]: "イアの贈り物",
            [Locale.kr]: "이아의 선물"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.iyan][2],
        name: {
            [Locale.tc]: "雜魚雄性（？）",
            [Locale.sc]: "杂鱼雄性（？）",
            [Locale.en]: "Manly Men",
            [Locale.jp]: "雑魚のオス（？）",
            [Locale.kr]: "잔챙이의 그것(?)"
        },
    },
]

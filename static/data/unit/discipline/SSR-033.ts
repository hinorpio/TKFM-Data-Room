import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10053: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.x_lana][0],
        name: {
            [Locale.tc]: `聖誕魔力加持`,
            [Locale.sc]: `圣诞魔力加持`,
            [Locale.en]: `Magical Christmas Blessings`,
            [Locale.jp]: `クリスマスの魔力`,
            [Locale.kr]: `크리스마스의 마력`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.x_lana][1],
        name: {
            [Locale.tc]: `感謝的夜襲騎乘位`,
            [Locale.sc]: `感谢的夜袭骑乘位`,
            [Locale.en]: `Late Night Gratitude`,
            [Locale.jp]: `感謝の夜這い騎乗位`,
            [Locale.kr]: `감사함의 야간 기습`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.x_lana][2],
        name: {
            [Locale.tc]: `超巨大肉棒襲來`,
            [Locale.sc]: `超巨大肉棒袭来`,
            [Locale.en]: `Gargantuan`,
            [Locale.jp]: `巨大な肉棒の襲来`,
            [Locale.kr]: `거대 육봉의 기습`
        },
    },
]

import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10192: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.b_shizuka][0],
        name: {
            [Locale.tc]: `新婚初夜`,
            [Locale.sc]: `新婚初夜`,
            [Locale.en]: `Fresh Wedding Night`,
            [Locale.jp]: `新婚初夜`,
            [Locale.kr]: `신혼 첫날밤`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.b_shizuka][1],
        name: {
            [Locale.tc]: `煩惱消除`,
            [Locale.sc]: `烦恼消除`,
            [Locale.en]: `Worry Elimination`,
            [Locale.jp]: `煩悩を消す`,
            [Locale.kr]: `사라지는 번뇌`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.b_shizuka][2],
        name: {
            [Locale.tc]: `做愛時也不能放下美食！`,
            [Locale.sc]: `做爱时也不能放下美食！`,
            [Locale.en]: `Can't Let Go of Food During Sex!`,
            [Locale.jp]: `セックスの時もグルメはかかせない！`,
            [Locale.kr]: `섹스 중에도 맛있는 건 포기 못 해!`
        },
    },
]

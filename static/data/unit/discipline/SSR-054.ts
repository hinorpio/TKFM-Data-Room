import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10085: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.kana][0],
        name: {
            [Locale.tc]: `魔王城的茶屋`,
            [Locale.sc]: `魔王城的茶屋`,
            [Locale.en]: `Palace Tea House`,
            [Locale.jp]: `魔王城の茶屋`,
            [Locale.kr]: `마왕성의 찻집`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.kana][1],
        name: {
            [Locale.tc]: `花魁的乳侍奉`,
            [Locale.sc]: `花魁的乳侍奉`,
            [Locale.en]: `Oiran Oppai`,
            [Locale.jp]: `花魁の乳奉仕`,
            [Locale.kr]: `카나의 파이즈리 봉사`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.kana][2],
        name: {
            [Locale.tc]: `花魁的戲耍`,
            [Locale.sc]: `花魁的戏耍`,
            [Locale.en]: `Playful Geisha`,
            [Locale.jp]: `花魁のイタズラ`,
            [Locale.kr]: `카나의 희롱`
        },
    },
]

import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10096: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.h_lotiya][0],
        name: {
            [Locale.tc]: `吸血鬼公開處刑`,
            [Locale.sc]: `吸血鬼公开处刑`,
            [Locale.en]: `Vampunishment`,
            [Locale.jp]: `吸血鬼公開処刑`,
            [Locale.kr]: `흡혈귀의 공개처형`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.h_lotiya][1],
        name: {
            [Locale.tc]: `夜襲聖騎士`,
            [Locale.sc]: `夜袭圣骑士`,
            [Locale.en]: `Knight Rider`,
            [Locale.jp]: `聖騎士を夜襲`,
            [Locale.kr]: `성기사 야습`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.h_lotiya][2],
        name: {
            [Locale.tc]: `公共玩具吸血鬼`,
            [Locale.sc]: `公共玩具吸血鬼`,
            [Locale.en]: `Vampire's Plaything`,
            [Locale.jp]: `公共のおもちゃと化した吸血鬼`,
            [Locale.kr]: `공공변소 흡혈귀`
        },
    },
]

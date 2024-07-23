import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10075: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.w_chizuru][0],
        name: {
            [Locale.tc]: `兔兔與野餐`,
            [Locale.sc]: `兔兔与野餐`,
            [Locale.en]: `Picnic Pounce`,
            [Locale.jp]: `ウサギとピクニック`,
            [Locale.kr]: `토끼와의 피크닉`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.w_chizuru][1],
        name: {
            [Locale.tc]: `有溫度的擁抱`,
            [Locale.sc]: `有温度的拥抱`,
            [Locale.en]: `A Warm Hug`,
            [Locale.jp]: `温かい抱擁`,
            [Locale.kr]: `포옹의 온도`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.w_chizuru][2],
        name: {
            [Locale.tc]: `做愛展示`,
            [Locale.sc]: `做爱展示`,
            [Locale.en]: `A Dirty Display`,
            [Locale.jp]: `公開セックス`,
            [Locale.kr]: `공개 섹스`
        },
    },
]

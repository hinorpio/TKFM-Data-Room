import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10181: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.l_ayane][0],
        name: {
            [Locale.tc]: `課堂中的意外`,
            [Locale.sc]: `课堂中的意外`,
            [Locale.en]: `Class Shenanigans`,
            [Locale.jp]: `授業中のハプニング`,
            [Locale.kr]: `수업 중 뜻밖의 사고`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.l_ayane][1],
        name: {
            [Locale.tc]: `遭遇火車痴漢`,
            [Locale.sc]: `遭遇火车痴汉`,
            [Locale.en]: `Train O' Pervs`,
            [Locale.jp]: `痴漢に遭遇`,
            [Locale.kr]: `기차 치한과의 만남`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.l_ayane][2],
        name: {
            [Locale.tc]: `自我催眠`,
            [Locale.sc]: `自我催眠`,
            [Locale.en]: `Self-Hypnotis`,
            [Locale.jp]: `自己催眠`,
            [Locale.kr]: `자기 최면`
        },
    },
]

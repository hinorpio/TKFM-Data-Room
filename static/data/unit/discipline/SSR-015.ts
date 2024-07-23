import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10029: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.s_shizuka][0],
        name: {
            [Locale.tc]: `意外事故`,
            [Locale.sc]: `意外事故`,
            [Locale.en]: `Emergency!`,
            [Locale.jp]: `意外な出来事`,
            [Locale.kr]: `의외의 사고`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_shizuka][1],
        name: {
            [Locale.tc]: `分期高潮`,
            [Locale.sc]: `分期高潮`,
            [Locale.en]: `Orgasm Installments`,
            [Locale.jp]: `分けてイかせる`,
            [Locale.kr]: `단계적으로 오는 절정`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_shizuka][2],
        name: {
            [Locale.tc]: `奇怪的性癖增加了`,
            [Locale.sc]: `奇怪的性癖增加了`,
            [Locale.en]: `More Weird Fetishes`,
            [Locale.jp]: `おかしな性癖が増加`,
            [Locale.kr]: `이상한 성적 취향 증가`
        },
    },
]

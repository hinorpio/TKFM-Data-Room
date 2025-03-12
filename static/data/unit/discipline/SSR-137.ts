import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10166: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.star_annee][0],
        name: {
            [Locale.tc]: `特訓試煉`,
            [Locale.sc]: `特训试炼`,
            [Locale.en]: `Training Trial`,
            [Locale.jp]: `特訓試練`,
            [Locale.kr]: `특훈의 시련`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.star_annee][1],
        name: {
            [Locale.tc]: `失敗的懲罰`,
            [Locale.sc]: `失败的惩罚`,
            [Locale.en]: `Punishment for Failure`,
            [Locale.jp]: `失敗のお仕置き`,
            [Locale.kr]: `패자의 징계`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.star_annee][2],
        name: {
            [Locale.tc]: `主動求愛`,
            [Locale.sc]: `主动求爱`,
            [Locale.en]: `Actively Seeking Love`,
            [Locale.jp]: `積極的な求愛`,
            [Locale.kr]: `적극적인 구애`
        },
    },
]

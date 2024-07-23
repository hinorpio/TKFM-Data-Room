import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10804: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.dora][0],
        name: {
            [Locale.tc]: `無法抗拒的氣味`,
            [Locale.sc]: `无法抗拒的气味`,
            [Locale.en]: `Irresistible Odor`,
            [Locale.jp]: `抵抗できない匂い`,
            [Locale.kr]: `저항할 수 없는 냄새`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.dora][1],
        name: {
            [Locale.tc]: `朵拉的禮物`,
            [Locale.sc]: `朵拉的礼物`,
            [Locale.en]: `Dora's Gift`,
            [Locale.jp]: `ドラの贈り物`,
            [Locale.kr]: `도라의 선물`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.dora][2],
        name: {
            [Locale.tc]: `最愛的味道`,
            [Locale.sc]: `最爱的味道`,
            [Locale.en]: `Favorite Smell`,
            [Locale.jp]: `大好きな味`,
            [Locale.kr]: `최애 냄새`
        },
    },
]

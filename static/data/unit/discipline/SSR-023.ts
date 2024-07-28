import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10039: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.lotiya][0],
        name: {
            [Locale.tc]: `厭男症治療偏方`,
            [Locale.sc]: `厌男症治疗偏方`,
            [Locale.en]: `Gross Men are Gross!`,
            [Locale.jp]: `男嫌いの治療法`,
            [Locale.kr]: `남자혐오증 처방전`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.lotiya][1],
        name: {
            [Locale.tc]: `被襲擊的是…？`,
            [Locale.sc]: `被袭击的是…？`,
            [Locale.en]: `Who Got Attacked?`,
            [Locale.jp]: `襲われたのは……？`,
            [Locale.kr]: `습격을 당한 건...?`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.lotiya][2],
        name: {
            [Locale.tc]: `治療成果`,
            [Locale.sc]: `治疗成果`,
            [Locale.en]: `The Cure`,
            [Locale.jp]: `治療の効果`,
            [Locale.kr]: `치료의 효과`
        },
    },
]

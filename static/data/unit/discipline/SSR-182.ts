import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10211: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.calibur][0],
        name: {
            [Locale.tc]: `挑釁魔王的下場`,
            [Locale.sc]: `挑衅魔王的下场`,
            [Locale.en]: `After Provoking the Archdemon`,
            [Locale.jp]: `魔王を挑発した末路`,
            [Locale.kr]: `마왕을 도발한 자의 최후`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.calibur][1],
        name: {
            [Locale.tc]: `被魔王挑釁的下場`,
            [Locale.sc]: `被魔王挑衅的下场`,
            [Locale.en]: `After the Archdemon's Provocations`,
            [Locale.jp]: `魔王に挑発された末路`,
            [Locale.kr]: `마왕에게 도발당한 자의 최후`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.calibur][2],
        name: {
            [Locale.tc]: `挑戰魔王失敗的下場`,
            [Locale.sc]: `挑战魔王失败的下场`,
            [Locale.en]: `After Losing to the Archdemon`,
            [Locale.jp]: `魔王に返り討ちにされた末路`,
            [Locale.kr]: `마왕에게 도전한 패배자의 최후`
        },
    },
]

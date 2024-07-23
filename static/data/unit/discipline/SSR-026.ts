import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10056: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.karina][0],
        name: {
            [Locale.tc]: `初診`,
            [Locale.sc]: `初诊`,
            [Locale.en]: `Cum-sultation`,
            [Locale.jp]: `初診`,
            [Locale.kr]: `초진`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.karina][1],
        name: {
            [Locale.tc]: `吸魔療法`,
            [Locale.sc]: `吸魔疗法`,
            [Locale.en]: `Magic Medicine`,
            [Locale.jp]: `魔力吸引療法`,
            [Locale.kr]: `마력 흡수 요법`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.karina][2],
        name: {
            [Locale.tc]: `活著的意義`,
            [Locale.sc]: `活着的意义`,
            [Locale.en]: `Meaning of Life`,
            [Locale.jp]: `生きる意味`,
            [Locale.kr]: `살아가야 할 의미`
        },
    },
]

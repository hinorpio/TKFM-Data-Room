import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10189: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.fifth_satan][0],
        name: {
            [Locale.tc]: `情感喪失`,
            [Locale.sc]: `情感丧失`,
            [Locale.en]: `Emotional Loss`,
            [Locale.jp]: `死んだ心`,
            [Locale.kr]: `감정 상실`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.fifth_satan][1],
        name: {
            [Locale.tc]: `真實的慾望`,
            [Locale.sc]: `真实的欲望`,
            [Locale.en]: `True Desire`,
            [Locale.jp]: `真の欲望`,
            [Locale.kr]: `진정한 욕망`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.fifth_satan][2],
        name: {
            [Locale.tc]: `死灰復燃`,
            [Locale.sc]: `死灰复燃`,
            [Locale.en]: `Embers Reignited`,
            [Locale.jp]: `再燃`,
            [Locale.kr]: `점화된 불꽃`
        },
    },
]

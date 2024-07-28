import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10018: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.uruta][0],
        name: {
            [Locale.tc]: `勇者的鍛鍊`,
            [Locale.sc]: `勇者的锻炼`,
            [Locale.en]: `A Hero's Training`,
            [Locale.jp]: `勇者の鍛錬`,
            [Locale.kr]: `용자 단련`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.uruta][1],
        name: {
            [Locale.tc]: `詛咒裝備`,
            [Locale.sc]: `诅咒装备`,
            [Locale.en]: `Cursed Armor`,
            [Locale.jp]: `呪いの装備`,
            [Locale.kr]: `저주의 장비`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.uruta][2],
        name: {
            [Locale.tc]: `這樣也不壞`,
            [Locale.sc]: `这样也不坏`,
            [Locale.en]: `I'll Take It`,
            [Locale.jp]: `これも悪く無い`,
            [Locale.kr]: `이래도 안 죽어`
        },
    },
]

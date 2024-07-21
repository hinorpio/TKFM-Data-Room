import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10809: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.mia][0],
        name: {
            [Locale.tc]: "拘禁調教",
            [Locale.sc]: "拘禁调教",
            [Locale.en]: "Snack Thief",
            [Locale.jp]: "拘束調教",
            [Locale.kr]: "구금조교"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.mia][1],
        name: {
            [Locale.tc]: "米雅的禮物",
            [Locale.sc]: "米雅的礼物",
            [Locale.en]: "Miya's Gift",
            [Locale.jp]: "ミアの贈り物",
            [Locale.kr]: "미아의 선물"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.mia][2],
        name: {
            [Locale.tc]: "怪盜的淫謀",
            [Locale.sc]: "怪盗的淫谋",
            [Locale.en]: "Steal Your Heart",
            [Locale.jp]: "怪盗の淫謀",
            [Locale.kr]: "괴도의 음모"
        },
    },
]

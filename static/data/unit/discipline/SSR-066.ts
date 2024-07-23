import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10024: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.elizabeth][0],
        name: {
            [Locale.tc]: `活著的實感`,
            [Locale.sc]: `活着的实感`,
            [Locale.en]: `The Feeling of Life`,
            [Locale.jp]: `生きている実感`,
            [Locale.kr]: `살아있다는 실감`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.elizabeth][1],
        name: {
            [Locale.tc]: `生者的喜悅`,
            [Locale.sc]: `生者的喜悦`,
            [Locale.en]: `Love of the Living`,
            [Locale.jp]: `生者の喜び~フッ`,
            [Locale.kr]: `살아있다는 기쁨`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.elizabeth][2],
        name: {
            [Locale.tc]: `反差萌死靈女王`,
            [Locale.sc]: `反差萌死灵女王`,
            [Locale.en]: `Death Queen`,
            [Locale.jp]: `ギャップ萌え嬢王`,
            [Locale.kr]: `반전미의 네크로맨서`
        },
    },
]

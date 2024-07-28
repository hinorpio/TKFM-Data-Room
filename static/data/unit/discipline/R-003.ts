import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10803: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.iris][0],
        name: {
            [Locale.tc]: `大人的玩具`,
            [Locale.sc]: `大人的玩具`,
            [Locale.en]: `Adult Toy`,
            [Locale.jp]: `大人のおもちゃ`,
            [Locale.kr]: `어른의 장난감`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.iris][1],
        name: {
            [Locale.tc]: `伊維絲的禮物`,
            [Locale.sc]: `伊维丝的礼物`,
            [Locale.en]: `Iris' Gift`,
            [Locale.jp]: `アイヴィスの贈り物`,
            [Locale.kr]: `아이리스의 선물`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.iris][2],
        name: {
            [Locale.tc]: `步向大人的階梯`,
            [Locale.sc]: `步向大人的阶梯`,
            [Locale.en]: `Stairway to Adulthood`,
            [Locale.jp]: `大人の階段上る`,
            [Locale.kr]: `어른으로 가는 계단`
        },
    },
]

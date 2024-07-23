import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10025: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.i_iblis][0],
        name: {
            [Locale.tc]: `演出後的餘興節目`,
            [Locale.sc]: `演出后的余兴节目`,
            [Locale.en]: `Sideshow after the performance`,
            [Locale.jp]: `公演後のアンコールステージ`,
            [Locale.kr]: `공연 후의 앵콜 프로그램`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.i_iblis][1],
        name: {
            [Locale.tc]: `伊布力斯的禮物`,
            [Locale.sc]: `伊布力斯的礼物`,
            [Locale.en]: `A Gift from Iblis`,
            [Locale.jp]: `イブリースのプレゼント`,
            [Locale.kr]: `이블리스의 선물`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.i_iblis][2],
        name: {
            [Locale.tc]: `開演前的淫亂`,
            [Locale.sc]: `开演前的淫乱`,
            [Locale.en]: `The Licentiousness Before the Show`,
            [Locale.jp]: `開演前の戯れ`,
            [Locale.kr]: `공연 전의 음란행위`
        },
    },
]

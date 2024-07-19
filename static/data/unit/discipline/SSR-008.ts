import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10025: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.i_iblis][0],
        name: {
            [Locale.tc]: "演出後的餘興節目",
            [Locale.sc]: "演出后的余兴节目",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.i_iblis][1],
        name: {
            [Locale.tc]: "伊布力斯的禮物",
            [Locale.sc]: "伊布力斯的礼物",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.i_iblis][2],
        name: {
            [Locale.tc]: "開演前的淫亂",
            [Locale.sc]: "开演前的淫乱",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]

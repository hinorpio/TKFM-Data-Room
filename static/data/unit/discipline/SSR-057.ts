import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10063: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.emily][0],
        name: {
            [Locale.tc]: "女僕的侍奉範本",
            [Locale.sc]: "女仆的侍奉范本",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.emily][1],
        name: {
            [Locale.tc]: "女僕的實戰考核",
            [Locale.sc]: "女仆的实战考核",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.emily][2],
        name: {
            [Locale.tc]: "女僕貫徹之道",
            [Locale.sc]: "女仆贯彻之道",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]

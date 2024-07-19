import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10122: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.a_usagihime][0],
        name: {
            [Locale.tc]: "對壞兔子的懲罰",
            [Locale.sc]: "对坏兔子的惩罚",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.a_usagihime][1],
        name: {
            [Locale.tc]: "密室逃脫",
            [Locale.sc]: "密室逃脱",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.a_usagihime][2],
        name: {
            [Locale.tc]: "雙人逆襲挑戰！",
            [Locale.sc]: "双人逆袭挑战！",
            [Locale.en]: "",
            [Locale.jp]: "",
            [Locale.kr]: ""
        },
    },
]

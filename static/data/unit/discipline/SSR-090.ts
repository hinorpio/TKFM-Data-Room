import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10122: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.a_usagihime][0],
        name: {
            [Locale.tc]: `對壞兔子的懲罰`,
            [Locale.sc]: `对坏兔子的惩罚`,
            [Locale.en]: `Punishing a Bad Bunny`,
            [Locale.jp]: `いたずらウサギにお仕置き`,
            [Locale.kr]: `못된 토끼에게 벌을`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.a_usagihime][1],
        name: {
            [Locale.tc]: `密室逃脫`,
            [Locale.sc]: `密室逃脱`,
            [Locale.en]: `Leaving the Secret Room`,
            [Locale.jp]: `脱出ゲーム`,
            [Locale.kr]: `밀실 탈출`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.a_usagihime][2],
        name: {
            [Locale.tc]: `雙人逆襲挑戰！`,
            [Locale.sc]: `双人逆袭挑战！`,
            [Locale.en]: `Counterattack Challenge!`,
            [Locale.jp]: `二人の逆襲！`,
            [Locale.kr]: `듀오 역습 도전!`
        },
    },
]

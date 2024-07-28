import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10119: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.s_aiko][0],
        name: {
            [Locale.tc]: `『神秘客』的考驗`,
            [Locale.sc]: `『神秘客』的考验`,
            [Locale.en]: `The Test of "Mystery Shopper"`,
            [Locale.jp]: `『神秘の客』のテスト`,
            [Locale.kr]: `『어느 손님』의 시험`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_aiko][1],
        name: {
            [Locale.tc]: `更衣室的遊戲`,
            [Locale.sc]: `更衣室的游戏`,
            [Locale.en]: `Locker Room Game`,
            [Locale.jp]: `更衣室のゲーム`,
            [Locale.kr]: `탈의실 게임`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_aiko][2],
        name: {
            [Locale.tc]: `打烊後的VIP時間`,
            [Locale.sc]: `打烊后的VIP时间`,
            [Locale.en]: `VIP Time`,
            [Locale.jp]: `営業終了後のVIPタイム`,
            [Locale.kr]: `마감 후의 VIP 타임`
        },
    },
]

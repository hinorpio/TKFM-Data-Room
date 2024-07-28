import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10020: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.muila][0],
        name: {
            [Locale.tc]: `玩具沒有的溫度`,
            [Locale.sc]: `玩具没有的温度`,
            [Locale.en]: `Real Warmth`,
            [Locale.jp]: `オモチャにはない温かみ<ああれ`,
            [Locale.kr]: `장난감에게 온도 따윈 없다`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.muila][1],
        name: {
            [Locale.tc]: `拷問機器人君`,
            [Locale.sc]: `拷问机器人君`,
            [Locale.en]: `Go Go Gadget`,
            [Locale.jp]: `拷問ロボット君`,
            [Locale.kr]: `고문 로봇`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.muila][2],
        name: {
            [Locale.tc]: `殘念系美人`,
            [Locale.sc]: `残念系美人`,
            [Locale.en]: `What a Pity`,
            [Locale.jp]: `残念な美人`,
            [Locale.kr]: `잔념의 미인`
        },
    },
]

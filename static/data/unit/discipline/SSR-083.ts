import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10117: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.s_baal][0],
        name: {
            [Locale.tc]: `『水槍』大戰的獎品`,
            [Locale.sc]: `『水枪』大战的奖品`,
            [Locale.en]: `Prize of the "Water Gun" Battle`,
            [Locale.jp]: `「水鉄砲」大会の賞品`,
            [Locale.kr]: `『물총』 싸움 상품`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_baal][1],
        name: {
            [Locale.tc]: `速度與激情`,
            [Locale.sc]: `速度与激情`,
            [Locale.en]: `Speed and Passion`,
            [Locale.jp]: `ワイルド・スピード`,
            [Locale.kr]: `속도와 격정`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_baal][2],
        name: {
            [Locale.tc]: `犯錯了就要懲罰！`,
            [Locale.sc]: `犯错了就要惩罚！`,
            [Locale.en]: `Punishment for Mistakes!`,
            [Locale.jp]: `悪い子にはお仕置き必須`,
            [Locale.kr]: `죄를 지었으면 벌을 받아야지`
        },
    },
]

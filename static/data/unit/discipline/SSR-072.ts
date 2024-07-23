import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10108: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.v_baal][0],
        name: {
            [Locale.tc]: `乳量不足`,
            [Locale.sc]: `乳量不足`,
            [Locale.en]: `Overflowing Cup`,
            [Locale.jp]: `足りない乳量`,
            [Locale.kr]: `모유량 부족`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.v_baal][1],
        name: {
            [Locale.tc]: `性技競賽 ─ 魔王巴爾`,
            [Locale.sc]: `性技竞赛 ─ 魔王巴尔`,
            [Locale.en]: `Sex Battle - Ba'al`,
            [Locale.jp]: `夜伽テク勝負―魔王バル`,
            [Locale.kr]: `섹스 테크닉 경기 - 마왕 바알`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.v_baal][2],
        name: {
            [Locale.tc]: `共感玩偶`,
            [Locale.sc]: `共感玩偶`,
            [Locale.en]: `Dual Sense Controller`,
            [Locale.jp]: `コネクトしたマスコット`,
            [Locale.kr]: `공감 인형`
        },
    },
]

import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10110: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.v_satan][0],
        name: {
            [Locale.tc]: `不像樣的假女僕`,
            [Locale.sc]: `不像样的假女仆`,
            [Locale.en]: `Fake Maid`,
            [Locale.jp]: `みっともない偽者メイド`,
            [Locale.kr]: `형편없는 가짜 메이드`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.v_satan][1],
        name: {
            [Locale.tc]: `性技競賽 ─ 魔王撒旦`,
            [Locale.sc]: `性技竞赛 ─ 魔王撒旦`,
            [Locale.en]: `Sex Battle - Satan`,
            [Locale.jp]: `夜伽テク勝負―魔王サタン`,
            [Locale.kr]: `섹스 테크닉 경기 - 마왕 사탄`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.v_satan][2],
        name: {
            [Locale.tc]: `甜蜜熱吻`,
            [Locale.sc]: `甜蜜热吻`,
            [Locale.en]: `Sweet Kisses`,
            [Locale.jp]: `甘いキス`,
            [Locale.kr]: `달콤한 키스`
        },
    },
]

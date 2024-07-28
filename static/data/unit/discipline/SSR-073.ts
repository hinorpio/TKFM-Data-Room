import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10109: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.v_iblis][0],
        name: {
            [Locale.tc]: `巧克力味肉棒`,
            [Locale.sc]: `巧克力味肉棒`,
            [Locale.en]: `Chocolate Meat Stick`,
            [Locale.jp]: `チョコ味の肉棒`,
            [Locale.kr]: `초코맛 육봉`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.v_iblis][1],
        name: {
            [Locale.tc]: `性技競賽 ─ 魔王伊布力斯`,
            [Locale.sc]: `性技竞赛 ─ 魔王伊布力斯`,
            [Locale.en]: `Sex Battle - Iblis`,
            [Locale.jp]: `夜伽テク勝負―魔王イブリース`,
            [Locale.kr]: `섹스 테크닉 경기 - 마왕 이블리스`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.v_iblis][2],
        name: {
            [Locale.tc]: `純情少女的禮物`,
            [Locale.sc]: `纯情少女的礼物`,
            [Locale.en]: `An Innocent Gift`,
            [Locale.jp]: `純粋な少女のプレゼント`,
            [Locale.kr]: `순수한 소녀의 선물`
        },
    },
]

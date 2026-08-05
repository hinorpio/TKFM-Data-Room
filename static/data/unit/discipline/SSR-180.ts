import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10209: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.w_noma][0],
        name: {
            [Locale.tc]: `獵犬的地盤標記`,
            [Locale.sc]: `猎犬的地盘标记`,
            [Locale.en]: `Hound Hunter's Turf Marker`,
            [Locale.jp]: `ハウンドのマーキング`,
            [Locale.kr]: `하운드의 영역 표시`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.w_noma][1],
        name: {
            [Locale.tc]: `雌狼的發情期`,
            [Locale.sc]: `雌狼的发情期`,
            [Locale.en]: `Female Wolf's Heat`,
            [Locale.jp]: `メス狼の発情期`,
            [Locale.kr]: `암컷 늑대의 발정기`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.w_noma][2],
        name: {
            [Locale.tc]: `寵物狗的散步時間`,
            [Locale.sc]: `宠物狗的散步时间`,
            [Locale.en]: `Pet Dog's Walk Time`,
            [Locale.jp]: `ペット犬のお散歩タイム`,
            [Locale.kr]: `애완견의 산책 시간`
        },
    },
]

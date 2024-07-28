import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10084: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.miru][0],
        name: {
            [Locale.tc]: `魔王的隱藏任務`,
            [Locale.sc]: `魔王的隐藏任务`,
            [Locale.en]: `A Hidden Quest`,
            [Locale.jp]: `魔王のシークレットミッション`,
            [Locale.kr]: `마왕의 시크릿 퀘스트`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.miru][1],
        name: {
            [Locale.tc]: `咪嚕的美食Time`,
            [Locale.sc]: `咪噜的美食Time`,
            [Locale.en]: `Miru's Meal`,
            [Locale.jp]: `ミルのグルメタイム`,
            [Locale.kr]: `미루의 먹방타임`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.miru][2],
        name: {
            [Locale.tc]: `發情功能Open`,
            [Locale.sc]: `发情功能Open`,
            [Locale.en]: `Heat Mode`,
            [Locale.jp]: `発情機能`,
            [Locale.kr]: `발정 기능 오픈`
        },
    },
]

import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10116: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.s_ayane][0],
        name: {
            [Locale.tc]: `打工勇者的自慰教學`,
            [Locale.sc]: `打工勇者的自慰教学`,
            [Locale.en]: `Party-Time Warrior's Masturbation Lesson`,
            [Locale.jp]: `ボランティア勇者のオナニーレクチャー`,
            [Locale.kr]: `아르바이트 용자의 자위 수업X정말 심상치 않아`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_ayane][1],
        name: {
            [Locale.tc]: `義務勞動`,
            [Locale.sc]: `义务劳动`,
            [Locale.en]: `Physical Duty`,
            [Locale.jp]: `義務労働`,
            [Locale.kr]: `의무 노동`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_ayane][2],
        name: {
            [Locale.tc]: `實彈訓練`,
            [Locale.sc]: `实弹训练`,
            [Locale.en]: `Live Fire Exercise`,
            [Locale.jp]: `実弾訓練`,
            [Locale.kr]: `실탄 훈련`
        },
    },
]

import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10078: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.c_lulu][0],
        name: {
            [Locale.tc]: `不要洗澡！`,
            [Locale.sc]: `不要洗澡！`,
            [Locale.en]: `Don't take a bath!`,
            [Locale.jp]: `お風呂は嫌にゃ！`,
            [Locale.kr]: `샤워 싫어!`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.c_lulu][1],
        name: {
            [Locale.tc]: `投降姿勢`,
            [Locale.sc]: `投降姿势`,
            [Locale.en]: `Submission posture`,
            [Locale.jp]: `降伏の姿勢`,
            [Locale.kr]: `투항 자세`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.c_lulu][2],
        name: {
            [Locale.tc]: `發情泡泡浴`,
            [Locale.sc]: `发情泡泡浴`,
            [Locale.en]: `Bubble bath in heat`,
            [Locale.jp]: `発情ソープ`,
            [Locale.kr]: `발정 거품 목욕`
        },
    },
]

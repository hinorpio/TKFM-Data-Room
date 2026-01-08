import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10193: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.m_usagihime][0],
        name: {
            [Locale.tc]: `特殊成就`,
            [Locale.sc]: `特殊成就`,
            [Locale.en]: `Special Achievement`,
            [Locale.jp]: `特別なアチーブメント`,
            [Locale.kr]: `특수 업적`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.m_usagihime][1],
        name: {
            [Locale.tc]: `展現繪師之力`,
            [Locale.sc]: `展现绘师之力`,
            [Locale.en]: `Illustrator's Power`,
            [Locale.jp]: `絵師の力を見せつけろ`,
            [Locale.kr]: `화가의 힘을 보여주겠어`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.m_usagihime][2],
        name: {
            [Locale.tc]: `再次挑戰！攻略魔王凱薩！`,
            [Locale.sc]: `再次挑战！攻略魔王凯萨！`,
            [Locale.en]: `Challenge Again! Archdemon Caesar!`,
            [Locale.jp]: `再挑戦！魔王シーザーを攻略せよ！`,
            [Locale.kr]: `재도전! 마왕 시저 공략!`
        },
    },
]

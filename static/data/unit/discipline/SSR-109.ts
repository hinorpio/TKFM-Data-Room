import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10139: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.p_tyrella][0],
        name: {
            [Locale.tc]: `魔法少女特訓中`,
            [Locale.sc]: `魔法少女特训中`,
            [Locale.en]: `Magic Knight Special Training`,
            [Locale.jp]: `魔法少女の特訓中`,
            [Locale.kr]: `마법소녀 특훈 중`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.p_tyrella][1],
        name: {
            [Locale.tc]: `屢戰屢敗`,
            [Locale.sc]: `屡战屡败`,
            [Locale.en]: `Another Day, Another Defeat`,
            [Locale.jp]: `連戦連敗`,
            [Locale.kr]: `연전연패`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.p_tyrella][2],
        name: {
            [Locale.tc]: `魔王的亂入特訓`,
            [Locale.sc]: `魔王的乱入特训`,
            [Locale.en]: `Archdemon Slips In`,
            [Locale.jp]: `魔王の乱入特訓`,
            [Locale.kr]: `마왕의 난입`
        },
    },
]

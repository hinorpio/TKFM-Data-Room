import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10049: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.faya][0],
        name: {
            [Locale.tc]: `少女的初夜是魔王的權利`,
            [Locale.sc]: `少女的初夜是魔王的权利`,
            [Locale.en]: `A Lady's First Night`,
            [Locale.jp]: `少女の初体験は魔王の権利`,
            [Locale.kr]: `소녀의 첫날밤은 마왕의 권리`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.faya][1],
        name: {
            [Locale.tc]: `侵犯的藉口`,
            [Locale.sc]: `侵犯的借口`,
            [Locale.en]: `Excuse to Explore`,
            [Locale.jp]: `乱暴の言い訳`,
            [Locale.kr]: `핑계`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.faya][2],
        name: {
            [Locale.tc]: `真實的一面`,
            [Locale.sc]: `真实的一面`,
            [Locale.en]: `True Self`,
            [Locale.jp]: `真の姿`,
            [Locale.kr]: `진실`
        },
    },
]

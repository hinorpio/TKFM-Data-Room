import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10118: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.s_fiora][0],
        name: {
            [Locale.tc]: `聖女的性技教學`,
            [Locale.sc]: `圣女的性技教学`,
            [Locale.en]: `Maiden's Sexual Techniques`,
            [Locale.jp]: `聖女のセックスレクチャー`,
            [Locale.kr]: `성녀의 섹스 테크닉 수업`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_fiora][1],
        name: {
            [Locale.tc]: `童貞救贖`,
            [Locale.sc]: `童贞救赎`,
            [Locale.en]: `Virginity Redemption`,
            [Locale.jp]: `童貞の贖い`,
            [Locale.kr]: `동정 구원`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_fiora][2],
        name: {
            [Locale.tc]: `性愛教皇的播種指導`,
            [Locale.sc]: `性爱教皇的播种指导`,
            [Locale.en]: `Pope of Sex's Seeding Instruction`,
            [Locale.jp]: `セックス教皇のレクチャー`,
            [Locale.kr]: `섹스 교황의 지도`
        },
    },
]

import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10063: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.emily][0],
        name: {
            [Locale.tc]: `女僕的侍寢範本`,
            [Locale.sc]: `女仆的侍寝范本`,
            [Locale.en]: `Service Manual`,
            [Locale.jp]: `模範的なメイドの夜伽`,
            [Locale.kr]: `메이드 침실 봉사 메뉴얼`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.emily][1],
        name: {
            [Locale.tc]: `女僕的實技考核`,
            [Locale.sc]: `女仆的实技考核`,
            [Locale.en]: `Maid's Test`,
            [Locale.jp]: `メイドの実技試験`,
            [Locale.kr]: `메이드 실기 시험`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.emily][2],
        name: {
            [Locale.tc]: `女僕貫徹之道`,
            [Locale.sc]: `女仆贯彻之道`,
            [Locale.en]: `Maid's Way`,
            [Locale.jp]: `メイド貫徹の道`,
            [Locale.kr]: `메이드의 길`
        },
    },
]

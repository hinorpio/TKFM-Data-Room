import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10199: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.egypt_fiora][0],
        name: {
            [Locale.tc]: `決鬥者特訓`,
            [Locale.sc]: `决斗者特训`,
            [Locale.en]: `Duelist Special Training`,
            [Locale.jp]: `デュエリストの特訓`,
            [Locale.kr]: `듀얼리스트 특훈`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.egypt_fiora][1],
        name: {
            [Locale.tc]: `融合召喚`,
            [Locale.sc]: `融合召唤`,
            [Locale.en]: `Fusion Summon`,
            [Locale.jp]: `融合召喚`,
            [Locale.kr]: `융합 소환`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.egypt_fiora][2],
        name: {
            [Locale.tc]: `性愛之決鬥`,
            [Locale.sc]: `性爱之决斗`,
            [Locale.en]: `Duel of Sex`,
            [Locale.jp]: `セックス・デュエル`,
            [Locale.kr]: `섹스 듀얼`
        },
    },
]

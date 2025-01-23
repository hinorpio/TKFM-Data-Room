import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10159: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.ny_fiora][0],
        name: {
            [Locale.tc]: `迎接來自神的祝福`,
            [Locale.sc]: `迎接来自神的祝福`,
            [Locale.en]: `Welcoming His Godly Blessing`,
            [Locale.jp]: `神の祝福を授かる`,
            [Locale.kr]: `신의 축복`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ny_fiora][1],
        name: {
            [Locale.tc]: `祈福儀式開始`,
            [Locale.sc]: `祈福仪式开始`,
            [Locale.en]: `The Blessing Ceremony Begins`,
            [Locale.jp]: `祈りの儀式の開始`,
            [Locale.kr]: `축복 의식 시작`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ny_fiora][2],
        name: {
            [Locale.tc]: `凱薩的信仰特訓`,
            [Locale.sc]: `凯萨的信仰特训`,
            [Locale.en]: `Caesar's Special Faith Training`,
            [Locale.jp]: `シーザーの信仰特訓`,
            [Locale.kr]: `시저의 신앙 특훈`
        },
    },
]

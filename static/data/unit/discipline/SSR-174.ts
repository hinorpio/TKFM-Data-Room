import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10203: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.otohime][0],
        name: {
            [Locale.tc]: `魔導人偶的貼身研究`,
            [Locale.sc]: `魔导人偶的贴身研究`,
            [Locale.en]: `Automaton's's Intimate Research`,
            [Locale.jp]: `魔導人形の密着研究`,
            [Locale.kr]: `마도 인형 밀착 연구`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.otohime][1],
        name: {
            [Locale.tc]: `魔導兵裝的性能品鑑`,
            [Locale.sc]: `魔导兵装的性能品鉴`,
            [Locale.en]: `Appraisal of Automaton Suit`,
            [Locale.jp]: `魔導兵装の性能テスト`,
            [Locale.kr]: `마도 전투복 성능 평가`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.otohime][2],
        name: {
            [Locale.tc]: `魔導實驗室中的性愛體驗`,
            [Locale.sc]: `魔导实验室中的性爱体验`,
            [Locale.en]: `Sex in an Automaton Lab`,
            [Locale.jp]: `魔導実験室のセックス体験`,
            [Locale.kr]: `마도 실험실 섹스 체험`
        },
    },
]

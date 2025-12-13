import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10190: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.fifth_baal][0],
        name: {
            [Locale.tc]: `弱點的詳細檢查`,
            [Locale.sc]: `弱点的详细检查`,
            [Locale.en]: `Weak Point Detailed Check`,
            [Locale.jp]: `弱点の精密検査`,
            [Locale.kr]: `약점 심층 검사`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.fifth_baal][1],
        name: {
            [Locale.tc]: `安定民心的方法`,
            [Locale.sc]: `安定民心的方法`,
            [Locale.en]: `Stabilizing People's Hearts`,
            [Locale.jp]: `人を落ち着かせる方法`,
            [Locale.kr]: `민심 안정 방법`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.fifth_baal][2],
        name: {
            [Locale.tc]: `槍械特殊醫療法`,
            [Locale.sc]: `枪械特殊医疗法`,
            [Locale.en]: `Gun Special Medical Treatment`,
            [Locale.jp]: `銃を使った特殊な治療`,
            [Locale.kr]: `총기 특수 치료법`
        },
    },
]

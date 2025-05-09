import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10165: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.star_mia][0],
        name: {
            [Locale.tc]: `魔法道具實驗`,
            [Locale.sc]: `魔法道具实验`,
            [Locale.en]: `Magic Item Experiment`,
            [Locale.jp]: `魔法道具の実験`,
            [Locale.kr]: `마법 도구 실험`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.star_mia][1],
        name: {
            [Locale.tc]: `尋寶大作戰`,
            [Locale.sc]: `寻宝大作战`,
            [Locale.en]: `Treasure Hunt Battle`,
            [Locale.jp]: `宝探し大作戦`,
            [Locale.kr]: `보물 찾기 대작전`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.star_mia][2],
        name: {
            [Locale.tc]: `解放的快感`,
            [Locale.sc]: `解放的快感`,
            [Locale.en]: `Pleasure Unleashed`,
            [Locale.jp]: `解放の快感`,
            [Locale.kr]: `해방의 쾌감`
        },
    },
]

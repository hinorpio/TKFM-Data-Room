import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10036: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.nafrala][0],
        name: {
            [Locale.tc]: `人類的色色遊戲`,
            [Locale.sc]: `人类的色色游戏`,
            [Locale.en]: `Pervy Human Games`,
            [Locale.jp]: `人間のHなお遊戯`,
            [Locale.kr]: `어른들의 놀이`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.nafrala][1],
        name: {
            [Locale.tc]: `乳穴開發`,
            [Locale.sc]: `乳穴开发`,
            [Locale.en]: `Breast Development`,
            [Locale.jp]: `乳首開発`,
            [Locale.kr]: `가슴골 개발`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.nafrala][2],
        name: {
            [Locale.tc]: `繁殖季節`,
            [Locale.sc]: `繁殖季节`,
            [Locale.en]: `Mating Season`,
            [Locale.jp]: `繁殖の季節`,
            [Locale.kr]: `번식의 계절`
        },
    },
]

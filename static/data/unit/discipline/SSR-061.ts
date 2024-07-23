import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10068: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.lotus][0],
        name: {
            [Locale.tc]: `開胃小菜`,
            [Locale.sc]: `开胃小菜`,
            [Locale.en]: `Appetizer`,
            [Locale.jp]: `前菜`,
            [Locale.kr]: `애피타이저`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.lotus][1],
        name: {
            [Locale.tc]: `廚娘的主動侍寢`,
            [Locale.sc]: `厨娘的主动侍寝`,
            [Locale.en]: `Silver Service`,
            [Locale.jp]: `料理人の夜伽`,
            [Locale.kr]: `셰프의 적극적인 침실 봉사`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.lotus][2],
        name: {
            [Locale.tc]: `蛋白質是牛肉的六倍！`,
            [Locale.sc]: `蛋白质是牛肉的六倍！`,
            [Locale.en]: `Mmm, Protein`,
            [Locale.jp]: `タンパク質は牛肉の6倍！`,
            [Locale.kr]: `프로틴이 소고기에 6배!`
        },
    },
]

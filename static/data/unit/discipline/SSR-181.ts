import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10210: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.ciel][0],
        name: {
            [Locale.tc]: `犬娘強制發情`,
            [Locale.sc]: `犬娘强制发情`,
            [Locale.en]: `Dog-Girl Forced Heat`,
            [Locale.jp]: `犬娘強制発情`,
            [Locale.kr]: `암캐의 강제 발정`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ciel][1],
        name: {
            [Locale.tc]: `寵物母狗調教`,
            [Locale.sc]: `宠物母狗调教`,
            [Locale.en]: `Pet Dog Training`,
            [Locale.jp]: `ペットのメス犬調教`,
            [Locale.kr]: `암캐 조교`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ciel][2],
        name: {
            [Locale.tc]: `雌犬肉體開發`,
            [Locale.sc]: `雌犬肉体开发`,
            [Locale.en]: `Female Dog Development`,
            [Locale.jp]: `メス犬の肉体開発`,
            [Locale.kr]: `암캐의 육체 개발`
        },
    },
]

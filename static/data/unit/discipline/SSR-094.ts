import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10126: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.h_shiro][0],
        name: {
            [Locale.tc]: `搗蛋之夜`,
            [Locale.sc]: `捣蛋之夜`,
            [Locale.en]: `Night o' Tricks`,
            [Locale.jp]: `イタズラナイト`,
            [Locale.kr]: `장난의 밤`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.h_shiro][1],
        name: {
            [Locale.tc]: `惡作劇被抓到了！`,
            [Locale.sc]: `恶作剧被抓到了！`,
            [Locale.en]: `Schemes Uncovered!`,
            [Locale.jp]: `イタズラ捕まえた！`,
            [Locale.kr]: `잡았다 요놈!`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.h_shiro][2],
        name: {
            [Locale.tc]: `學習大人的性技巧`,
            [Locale.sc]: `学习大人的性技巧`,
            [Locale.en]: `Learning from the Best`,
            [Locale.jp]: `大人のテクニックを学ぶ`,
            [Locale.kr]: `섹스 테크닉 학습`
        },
    },
]

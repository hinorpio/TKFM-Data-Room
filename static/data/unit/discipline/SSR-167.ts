import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10196: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.b_lana][0],
        name: {
            [Locale.tc]: `事前鍛鍊`,
            [Locale.sc]: `事前锻炼`,
            [Locale.en]: `Pre-Wedding Training`,
            [Locale.jp]: `事前鍛錬`,
            [Locale.kr]: `사전 훈련`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.b_lana][1],
        name: {
            [Locale.tc]: `新婚矮人王`,
            [Locale.sc]: `新婚矮人王`,
            [Locale.en]: `Newlywed Dwarf Queen`,
            [Locale.jp]: `新婚の小人王`,
            [Locale.kr]: `신혼 난쟁이 왕`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.b_lana][2],
        name: {
            [Locale.tc]: `初婚之夜`,
            [Locale.sc]: `初婚之夜`,
            [Locale.en]: `First Wedding Night`,
            [Locale.jp]: `新婚初夜`,
            [Locale.kr]: `첫날밤`
        },
    },
]

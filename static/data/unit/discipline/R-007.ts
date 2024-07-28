import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10807: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.yoi][0],
        name: {
            [Locale.tc]: `為了研究`,
            [Locale.sc]: `为了研究`,
            [Locale.en]: `For Research`,
            [Locale.jp]: `研究のため`,
            [Locale.kr]: `연구를 위해서`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.yoi][1],
        name: {
            [Locale.tc]: `尤依的禮物`,
            [Locale.sc]: `尤依的礼物`,
            [Locale.en]: `Yoi's Gift`,
            [Locale.jp]: `ユイの贈り物`,
            [Locale.kr]: `유이의 선물`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.yoi][2],
        name: {
            [Locale.tc]: `魔女的淪陷`,
            [Locale.sc]: `魔女的沦陷`,
            [Locale.en]: `Demoness' Trap`,
            [Locale.jp]: `魔女の陥落`,
            [Locale.kr]: `마녀의 함락`
        },
    },
]

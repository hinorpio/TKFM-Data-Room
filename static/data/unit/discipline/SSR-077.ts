import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10114: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.m_juneau][0],
        name: {
            [Locale.tc]: `對魔法少女專用陷阱`,
            [Locale.sc]: `对魔法少女专用陷阱`,
            [Locale.en]: `Magical Maiden Trap`,
            [Locale.jp]: `魔法少女専用の罠`,
            [Locale.kr]: `마법소녀 전용 함정`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.m_juneau][1],
        name: {
            [Locale.tc]: `雌性高潮`,
            [Locale.sc]: `雌性高潮`,
            [Locale.en]: `Female Orgasm`,
            [Locale.jp]: `雌の絶頂`,
            [Locale.kr]: `암컷의 오르가즘`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.m_juneau][2],
        name: {
            [Locale.tc]: `『它』回來了`,
            [Locale.sc]: `『它』回来了`,
            [Locale.en]: `"It's" Back`,
            [Locale.jp]: `「アレ」が戻って来た`,
            [Locale.kr]: `『그것』이 돌아왔다`
        },
    },
]

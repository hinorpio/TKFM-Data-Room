import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10201: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.m_momDaphne][0],
        name: {
            [Locale.tc]: `淨化邪惡`,
            [Locale.sc]: `净化邪恶`,
            [Locale.en]: `Purifying Evil`,
            [Locale.jp]: `邪悪を浄化`,
            [Locale.kr]: `사악함 정화`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.m_momDaphne][1],
        name: {
            [Locale.tc]: `魔法少女戰敗的下場`,
            [Locale.sc]: `魔法少女战败的下场`,
            [Locale.en]: `Fate of a Defeated Magic Knight`,
            [Locale.jp]: `魔法少女が敗れた末路`,
            [Locale.kr]: `패배한 마법소녀의 말로`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.m_momDaphne][2],
        name: {
            [Locale.tc]: `魔法癡女`,
            [Locale.sc]: `魔法痴女`,
            [Locale.en]: `Magic Nympho`,
            [Locale.jp]: `魔法痴女`,
            [Locale.kr]: `마법치녀`
        },
    },
]

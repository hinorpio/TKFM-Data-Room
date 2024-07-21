import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10046: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.janelle][0],
        name: {
            [Locale.tc]: "適合刺針的衣裝",
            [Locale.sc]: "适合刺针的衣装",
            [Locale.en]: "Stinger's Perfect Outfit",
            [Locale.jp]: "鋭い針に似合う服",
            [Locale.kr]: "최적의 옷"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.janelle][1],
        name: {
            [Locale.tc]: "乳頭調教",
            [Locale.sc]: "乳头调教",
            [Locale.en]: "Nipple Play",
            [Locale.jp]: "乳首調教",
            [Locale.kr]: "유두 조교"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.janelle][2],
        name: {
            [Locale.tc]: "請按照順序來",
            [Locale.sc]: "请按照顺序来",
            [Locale.en]: "Follow the Order",
            [Locale.jp]: "順番通りに",
            [Locale.kr]: "순번대로"
        },
    },
]

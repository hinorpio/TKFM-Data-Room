import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10195: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.b_ayane][0],
        name: {
            [Locale.tc]: `背德的惡作劇`,
            [Locale.sc]: `背德的恶作剧`,
            [Locale.en]: `Immoral Prank`,
            [Locale.jp]: `背徳的なイタズラ`,
            [Locale.kr]: `배덕의 장난`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.b_ayane][1],
        name: {
            [Locale.tc]: `窒息之吻`,
            [Locale.sc]: `窒息之吻`,
            [Locale.en]: `Suffocating Kiss`,
            [Locale.jp]: `窒息のキス`,
            [Locale.kr]: `질식의 키스`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.b_ayane][2],
        name: {
            [Locale.tc]: `特別的賠禮`,
            [Locale.sc]: `特别的赔礼`,
            [Locale.en]: `Special Apology Gift`,
            [Locale.jp]: `特別サービス`,
            [Locale.kr]: `특별한 사죄`
        },
    },
]

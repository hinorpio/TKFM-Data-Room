import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10213: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.fujihana][0],
        name: {
            [Locale.tc]: `走繩綑綁調教`,
            [Locale.sc]: `走绳捆绑调教`,
            [Locale.en]: `Tightrope Bondage Training`,
            [Locale.jp]: `緊縛調教`,
            [Locale.kr]: `밧줄 결박 조교`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.fujihana][1],
        name: {
            [Locale.tc]: `開鋒儀式`,
            [Locale.sc]: `开锋仪式`,
            [Locale.en]: `The Sharpening Ceremony`,
            [Locale.jp]: `刃付けの儀式`,
            [Locale.kr]: `칼날 벼리기 의식`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.fujihana][2],
        name: {
            [Locale.tc]: `與魔王比劃劍技`,
            [Locale.sc]: `与魔王比划剑技`,
            [Locale.en]: `Clashing Swords with the Archdemon`,
            [Locale.jp]: `魔王と剣技比べ`,
            [Locale.kr]: `마왕과의 검술 겨루기`
        },
    },
]

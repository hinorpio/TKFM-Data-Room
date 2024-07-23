import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10082: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.b_satan][0],
        name: {
            [Locale.tc]: `純情的撒旦？`,
            [Locale.sc]: `纯情的撒旦？`,
            [Locale.en]: `Shy Satan?`,
            [Locale.jp]: `純情サタン？`,
            [Locale.kr]: `청순한 사탄?`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.b_satan][1],
        name: {
            [Locale.tc]: `將負數歸零`,
            [Locale.sc]: `将负数归零`,
            [Locale.en]: `Hero to Zero`,
            [Locale.jp]: `マイナスをゼロに`,
            [Locale.kr]: `마이너스를 0으로`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.b_satan][2],
        name: {
            [Locale.tc]: `魔王正室的資格`,
            [Locale.sc]: `魔王正室的资格`,
            [Locale.en]: `Whatever it Takes`,
            [Locale.jp]: `魔王の正室の資格`,
            [Locale.kr]: `마왕 정실의 자격`
        },
    },
]

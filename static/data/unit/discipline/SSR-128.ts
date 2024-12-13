import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10157: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.x_muila][0],
        name: {
            [Locale.tc]: `公開約會`,
            [Locale.sc]: `公开约会`,
            [Locale.en]: `Public Date`,
            [Locale.jp]: `公開デート`,
            [Locale.kr]: `공개 데이트`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.x_muila][1],
        name: {
            [Locale.tc]: `預料外的驚喜禮物`,
            [Locale.sc]: `预料外的惊喜礼物`,
            [Locale.en]: `An Unexpected Gift`,
            [Locale.jp]: `予想外のサプライズ`,
            [Locale.kr]: `예상 밖의 서프라이즈`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.x_muila][2],
        name: {
            [Locale.tc]: `無限量的寵愛`,
            [Locale.sc]: `无限量的宠爱`,
            [Locale.en]: `Unlimited Doting`,
            [Locale.jp]: `無限の寵愛`,
            [Locale.kr]: `무한한 총애`
        },
    },
]

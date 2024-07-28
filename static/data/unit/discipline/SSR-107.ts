import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10137: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.w_lillane][0],
        name: {
            [Locale.tc]: `樹下的幽會`,
            [Locale.sc]: `树下的幽会`,
            [Locale.en]: `Secret Meeting`,
            [Locale.jp]: `木の下の密会`,
            [Locale.kr]: `나무 아래 밀회`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.w_lillane][1],
        name: {
            [Locale.tc]: `擁抱溫暖`,
            [Locale.sc]: `拥抱温暖`,
            [Locale.en]: `Embrace for Warmth`,
            [Locale.jp]: `抱っこの温もり`,
            [Locale.kr]: `포옹으로 따뜻하게`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.w_lillane][2],
        name: {
            [Locale.tc]: `雙穴都要填滿喔♡`,
            [Locale.sc]: `双穴都要填满喔♡`,
            [Locale.en]: `Fill Up Both Holes ♡`,
            [Locale.jp]: `二穴をいっぱいにして♡`,
            [Locale.kr]: `앞뒤 구멍 모두 가득히♡`
        },
    },
]

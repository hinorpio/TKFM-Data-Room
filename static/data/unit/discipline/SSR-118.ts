import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10148: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.d_shizuka][0],
        name: {
            [Locale.tc]: `比慶典更期待的事情`,
            [Locale.sc]: `比庆典更期待的事情`,
            [Locale.en]: `More Exciting than the Festival`,
            [Locale.jp]: `祭典よりも楽しみなこと`,
            [Locale.kr]: `축제보다 더 기대되는 일`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.d_shizuka][1],
        name: {
            [Locale.tc]: `家庭的溫暖`,
            [Locale.sc]: `家庭的温暖`,
            [Locale.en]: `A Family's Warmth`,
            [Locale.jp]: `家族の温かさ`,
            [Locale.kr]: `가족의 따뜻함`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.d_shizuka][2],
        name: {
            [Locale.tc]: `酒後亂性`,
            [Locale.sc]: `酒后乱性`,
            [Locale.en]: `Drunken Debauchery`,
            [Locale.jp]: `酒乱`,
            [Locale.kr]: `취중난동`
        },
    },
]

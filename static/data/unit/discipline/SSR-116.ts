import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10146: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.d_minayomi][0],
        name: {
            [Locale.tc]: `凱薩流收筋操`,
            [Locale.sc]: `凯萨流收筋操`,
            [Locale.en]: `Caesar-Style Muscle Stretching`,
            [Locale.jp]: `シーザー流ストレッチ`,
            [Locale.kr]: `시저의 스트레칭`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.d_minayomi][1],
        name: {
            [Locale.tc]: `無法抗拒溫柔對待`,
            [Locale.sc]: `无法抗拒温柔对待`,
            [Locale.en]: `Irresistible Gentle Treatment`,
            [Locale.jp]: `抗えない優しさ`,
            [Locale.kr]: `거스를 수 없는 따뜻함`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.d_minayomi][2],
        name: {
            [Locale.tc]: `逐步淪陷的鬼人劍聖`,
            [Locale.sc]: `逐步沦陷的鬼人剑圣`,
            [Locale.en]: `Falling Oni Blademaster`,
            [Locale.jp]: `落ちぶれていく鬼人の剣聖`,
            [Locale.kr]: `함락되어 가는 오니족 검성`
        },
    },
]

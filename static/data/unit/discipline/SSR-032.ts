import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10052: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.x_aiko][0],
        name: {
            [Locale.tc]: `聖誕復仇者再來`,
            [Locale.sc]: `圣诞复仇者再来`,
            [Locale.en]: `Return of the Christmas Exterminator Christmas`,
            [Locale.jp]: `クリスマスの復讐者再来`,
            [Locale.kr]: `크리스마스의 복수자가 다시 돌아왔다`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.x_aiko][1],
        name: {
            [Locale.tc]: `為了玷污聖誕節`,
            [Locale.sc]: `为了玷污圣诞节`,
            [Locale.en]: `Defiling Christmas`,
            [Locale.jp]: `クリスマスを穢すために`,
            [Locale.kr]: `크리스마스를 더럽히기 위해`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.x_aiko][2],
        name: {
            [Locale.tc]: `與憎恨道別`,
            [Locale.sc]: `与憎恨道别`,
            [Locale.en]: `Bid Hatred Farewell`,
            [Locale.jp]: `憎しみとの別れ`,
            [Locale.kr]: `증오와의 작별`
        },
    },
]

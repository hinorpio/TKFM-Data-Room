import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10172: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.s_evie][0],
        name: {
            [Locale.tc]: `更好玩的地方`,
            [Locale.sc]: `更好玩的地方`,
            [Locale.en]: `More Interesting Place`,
            [Locale.jp]: `もっと面白い場所`,
            [Locale.kr]: `더 재밌는 곳`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_evie][1],
        name: {
            [Locale.tc]: `脹奶治療`,
            [Locale.sc]: `胀奶治疗`,
            [Locale.en]: `Breast Swelling Treatment`,
            [Locale.jp]: `胸の張り治療`,
            [Locale.kr]: `유방 팽창증 치료`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_evie][2],
        name: {
            [Locale.tc]: `產奶專用馴鹿`,
            [Locale.sc]: `产奶专用驯鹿`,
            [Locale.en]: `Milk-Producing Reindeer`,
            [Locale.jp]: `母乳トナカイ`,
            [Locale.kr]: `모유 생산 전용 순록`
        },
    },
]

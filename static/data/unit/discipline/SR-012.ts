import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10051: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.pulicia][0],
        name: {
            [Locale.tc]: "不過是性交",
            [Locale.sc]: "不过是性交",
            [Locale.en]: "It's Only Sex",
            [Locale.jp]: "たかがセックス",
            [Locale.kr]: "섹스일 뿐"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.pulicia][1],
        name: {
            [Locale.tc]: "兌現賭注",
            [Locale.sc]: "兑现赌注",
            [Locale.en]: "Deal's a Deal",
            [Locale.jp]: "約束は果たす",
            [Locale.kr]: "내기는 내기"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.pulicia][2],
        name: {
            [Locale.tc]: "為了繁衍",
            [Locale.sc]: "为了繁衍",
            [Locale.en]: "For Reproduction",
            [Locale.jp]: "子孫繁栄のため",
            [Locale.kr]: "번식을 위해"
        },
    },
]

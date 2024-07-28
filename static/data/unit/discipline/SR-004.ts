import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10012: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.ritsuki][0],
        name: {
            [Locale.tc]: `媚藥吊繩`,
            [Locale.sc]: `媚药吊绳`,
            [Locale.en]: `Aphrodisiatic Leash`,
            [Locale.jp]: `媚薬の縄`,
            [Locale.kr]: `최음제 밧줄`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ritsuki][1],
        name: {
            [Locale.tc]: `超絕敏感女忍`,
            [Locale.sc]: `超绝敏感女忍`,
            [Locale.en]: `Super Sensitive Ninja`,
            [Locale.jp]: `超絶敏感な女忍者`,
            [Locale.kr]: `초절정 민감도의 여닌자`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ritsuki][2],
        name: {
            [Locale.tc]: `新的使命`,
            [Locale.sc]: `新的使命`,
            [Locale.en]: `A New Mission`,
            [Locale.jp]: `新たな使命`,
            [Locale.kr]: `새로운 사명`
        },
    },
]

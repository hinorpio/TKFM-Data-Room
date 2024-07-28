import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10067: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.tm_minayomi][0],
        name: {
            [Locale.tc]: `教育奴隸`,
            [Locale.sc]: `教育奴隶`,
            [Locale.en]: `Student/Slave`,
            [Locale.jp]: `奴隷調教`,
            [Locale.kr]: `노예 교육`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.tm_minayomi][1],
        name: {
            [Locale.tc]: `讓女人墮落的辦法`,
            [Locale.sc]: `让女人堕落的办法`,
            [Locale.en]: `That Sinking Feeling`,
            [Locale.jp]: `女を堕落させる方法`,
            [Locale.kr]: `타락녀로 만드는 방법`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.tm_minayomi][2],
        name: {
            [Locale.tc]: `喚醒本能`,
            [Locale.sc]: `唤醒本能`,
            [Locale.en]: `Self Realization`,
            [Locale.jp]: `本能の目覚め`,
            [Locale.kr]: `본능 각성`
        },
    },
]

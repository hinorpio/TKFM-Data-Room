import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10147: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.oniyoiki][0],
        name: {
            [Locale.tc]: `待宰羔羊`,
            [Locale.sc]: `待宰羔羊`,
            [Locale.en]: `Sitting Lamb`,
            [Locale.jp]: `屠られる羊`,
            [Locale.kr]: `도축 예정의 어린양`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.oniyoiki][1],
        name: {
            [Locale.tc]: `特製女體盛`,
            [Locale.sc]: `特制女体盛`,
            [Locale.en]: `Special Nyotaimori`,
            [Locale.jp]: `特製女体盛`,
            [Locale.kr]: `특제 뇨타이모리`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.oniyoiki][2],
        name: {
            [Locale.tc]: `品嘗做愛的滋味`,
            [Locale.sc]: `品尝做爱的滋味`,
            [Locale.en]: `Savoring the Taste of Sex`,
            [Locale.jp]: `セックスの味わい`,
            [Locale.kr]: `섹스의 맛 품평`
        },
    },
]

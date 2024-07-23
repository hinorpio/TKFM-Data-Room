import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10077: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.bayliss][0],
        name: {
            [Locale.tc]: `魔王城一日遊`,
            [Locale.sc]: `魔王城一日游`,
            [Locale.en]: `Day Trip to Caesar's Palace`,
            [Locale.jp]: `魔王城日帰り旅行`,
            [Locale.kr]: `마왕성 일일 견학`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.bayliss][1],
        name: {
            [Locale.tc]: `被凱薩大人騙了！`,
            [Locale.sc]: `被凯萨大人骗了！`,
            [Locale.en]: `Master Caesar's Trick!`,
            [Locale.jp]: `シーザー様に騙された！`,
            [Locale.kr]: `시저 님 거짓말쟁이!`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.bayliss][2],
        name: {
            [Locale.tc]: `性愛探驗家♡`,
            [Locale.sc]: `性爱探验家♡`,
            [Locale.en]: `Sex Explorer♡`,
            [Locale.jp]: `セックス探検家♡`,
            [Locale.kr]: `섹스 모험가♡`
        },
    },
]

import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10094: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.geneva][0],
        name: {
            [Locale.tc]: `未知生物的初次性愛`,
            [Locale.sc]: `未知生物的初次性爱`,
            [Locale.en]: `Unidentified Bangin`,
            [Locale.jp]: `未知の生物の初エッチ`,
            [Locale.kr]: `미지의 생명체의 첫 경험`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.geneva][1],
        name: {
            [Locale.tc]: `乳頭尋寶`,
            [Locale.sc]: `乳头寻宝`,
            [Locale.en]: `Boob Huntin`,
            [Locale.jp]: `乳首宝探`,
            [Locale.kr]: `보물찾기`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.geneva][2],
        name: {
            [Locale.tc]: `純真少女的雌墮。`,
            [Locale.sc]: `纯真少女的雌堕。`,
            [Locale.en]: `Fall From Innocence`,
            [Locale.jp]: `純粋から堕落へ`,
            [Locale.kr]: `순진한 소녀의 타락`
        },
    },
]

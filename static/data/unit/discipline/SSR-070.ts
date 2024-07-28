import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10106: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.ny_salucia][0],
        name: {
            [Locale.tc]: `振『憤』人心的演講`,
            [Locale.sc]: `振『愤』人心的演讲`,
            [Locale.en]: `An Inspiring Speech`,
            [Locale.jp]: `奮い勃たせる演説`,
            [Locale.kr]: `감동의 『물』로 얼룩진 연설`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ny_salucia][1],
        name: {
            [Locale.tc]: `在祭典中插入`,
            [Locale.sc]: `在祭典中插入`,
            [Locale.en]: `Festival Insertion`,
            [Locale.jp]: `お祭りで挿入`,
            [Locale.kr]: `축제 중 삽입`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.ny_salucia][2],
        name: {
            [Locale.tc]: `難忘的回憶`,
            [Locale.sc]: `难忘的回忆`,
            [Locale.en]: `Unforgettable Memories`,
            [Locale.jp]: `忘れられぬ思い出`,
            [Locale.kr]: `잊을 수 없는 추억`
        },
    },
]

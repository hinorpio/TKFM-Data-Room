import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10090: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.s_milae][0],
        name: {
            [Locale.tc]: `以神之名降下懲罰♡`,
            [Locale.sc]: `以神之名降下惩罚♡`,
            [Locale.en]: `Punished by Sin`,
            [Locale.jp]: `神の名においてお仕置き♡`,
            [Locale.kr]: `신의 이름으로 내려준 체벌♡`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_milae][1],
        name: {
            [Locale.tc]: `性愛天使的逆搭訕`,
            [Locale.sc]: `性爱天使的逆搭讪`,
            [Locale.en]: `Shepherd Milae`,
            [Locale.jp]: `性愛天使の逆ナン`,
            [Locale.kr]: `천사의 헌팅`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.s_milae][2],
        name: {
            [Locale.tc]: `聖米勒無慘？`,
            [Locale.sc]: `圣米勒无惨？`,
            [Locale.en]: `Lost Lambs`,
            [Locale.jp]: `無惨な聖女ミラ？`,
            [Locale.kr]: `무자비한 밀레?`
        },
    },
]

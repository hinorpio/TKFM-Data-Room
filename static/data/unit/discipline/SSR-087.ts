import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10121: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.o_nana][0],
        name: {
            [Locale.tc]: `不誠實的懲罰`,
            [Locale.sc]: `不诚实的惩罚`,
            [Locale.en]: `Punishment for Dishonesty`,
            [Locale.jp]: `捻くれ者への罰`,
            [Locale.kr]: `불성실함의 징계`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.o_nana][1],
        name: {
            [Locale.tc]: `凱薩流『壁咚』`,
            [Locale.sc]: `凯萨流『壁咚』`,
            [Locale.en]: `Caesar's Kabedon`,
            [Locale.jp]: `シーザー流「壁ドン」`,
            [Locale.kr]: `시저의 『벽치기』`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.o_nana][2],
        name: {
            [Locale.tc]: `重要的回憶`,
            [Locale.sc]: `重要的回忆`,
            [Locale.en]: `Important Memories`,
            [Locale.jp]: `大切な思い出`,
            [Locale.kr]: `소중한 기억`
        },
    },
]

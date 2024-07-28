import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10079: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.tm_ritsuki][0],
        name: {
            [Locale.tc]: `速戰速決`,
            [Locale.sc]: `速战速决`,
            [Locale.en]: `Bush in the Bush`,
            [Locale.jp]: `速戦即決`,
            [Locale.kr]: `속전속결`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.tm_ritsuki][1],
        name: {
            [Locale.tc]: `性虐的回憶`,
            [Locale.sc]: `性虐的回忆`,
            [Locale.en]: `Masochistic Memories`,
            [Locale.jp]: `被虐の記憶`,
            [Locale.kr]: `성학대의 기억`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.tm_ritsuki][2],
        name: {
            [Locale.tc]: `魔王與殭屍的惡作劇`,
            [Locale.sc]: `魔王与僵尸的恶作剧`,
            [Locale.en]: `Zombies Ate my Ninjas`,
            [Locale.jp]: `魔王とゾンビのイタズラ`,
            [Locale.kr]: `마왕과 불사자의 장난`
        },
    },
]

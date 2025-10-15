import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10185: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.lilinor][0],
        name: {
            [Locale.tc]: `事前練習`,
            [Locale.sc]: `事前练习`,
            [Locale.en]: `Pre-Practice`,
            [Locale.jp]: `事前練習`,
            [Locale.kr]: `사전 연습`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.lilinor][1],
        name: {
            [Locale.tc]: `久遠的記憶`,
            [Locale.sc]: `久远的记忆`,
            [Locale.en]: `Distant Memories`,
            [Locale.jp]: `遥かなる記憶`,
            [Locale.kr]: `오랜 기억`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.lilinor][2],
        name: {
            [Locale.tc]: `飛機杯小仙子`,
            [Locale.sc]: `飞机杯小仙子`,
            [Locale.en]: `Pocket Pussy Fairy`,
            [Locale.jp]: `オナホの妖精`,
            [Locale.kr]: `페어리 오나홀`
        },
    },
]

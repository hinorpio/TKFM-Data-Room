import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10038: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.tyrella][0],
        name: {
            [Locale.tc]: `VS觸手怪`,
            [Locale.sc]: `VS触手怪`,
            [Locale.en]: `VS Tentacle Monsters`,
            [Locale.jp]: `VS触手`,
            [Locale.kr]: `VS촉수괴물`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.tyrella][1],
        name: {
            [Locale.tc]: `VS電動按摩器`,
            [Locale.sc]: `VS电动按摩器`,
            [Locale.en]: `VS Vibrator`,
            [Locale.jp]: `VS電マB私の杖が……`,
            [Locale.kr]: `VS 바이브레이터`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.tyrella][2],
        name: {
            [Locale.tc]: `魔法少女陷落`,
            [Locale.sc]: `魔法少女陷落`,
            [Locale.en]: `The Sorceress Falls`,
            [Locale.jp]: `魔法少女の堕落`,
            [Locale.kr]: `마법소녀의 타락`
        },
    },
]

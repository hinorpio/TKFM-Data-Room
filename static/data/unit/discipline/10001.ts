import { Locale, UnitID } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '@/static/data/ImageSrc';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10001: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitID.baal][0],
        name: {
            [Locale.zh]: "監禁懲罰",
            [Locale.cn]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.ko]: ''
        },
    },
    {
        preview: UnitDisciplinePreview[UnitID.baal][1],
        name: {
            [Locale.zh]: "抖M的覺醒",
            [Locale.cn]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.ko]: ''
        },
    },
    {
        preview: UnitDisciplinePreview[UnitID.baal][2],
        name: {
            [Locale.zh]: "過久的放置",
            [Locale.cn]: '',
            [Locale.en]: '',
            [Locale.jp]: '',
            [Locale.ko]: ''
        },
    },
]

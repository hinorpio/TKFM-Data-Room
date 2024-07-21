import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10001: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.baal][0],
        name: {
            [Locale.tc]: "監禁懲罰",
            [Locale.sc]: "监禁惩罚",
            [Locale.en]: "Imprisonment",
            [Locale.jp]: "監禁してお仕置き",
            [Locale.kr]: "감금하여 조련"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.baal][1],
        name: {
            [Locale.tc]: "抖M的覺醒",
            [Locale.sc]: "抖M的觉醒",
            [Locale.en]: "Masochistic Awakening",
            [Locale.jp]: "ドMの覚醒",
            [Locale.kr]: "극단적 M 성향으로 각성"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.baal][2],
        name: {
            [Locale.tc]: "過久的放置",
            [Locale.sc]: "过久的放置",
            [Locale.en]: "The Long Wait",
            [Locale.jp]: "長時間放置",
            [Locale.kr]: "장기간 방치"
        },
    },
]

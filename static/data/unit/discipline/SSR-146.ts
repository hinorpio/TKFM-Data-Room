import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10174: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.forneusa][0],
        name: {
            [Locale.tc]: `鯊魚籠潛水活動`,
            [Locale.sc]: `鲨鱼笼潜水活动`,
            [Locale.en]: `Shark Cage Diving Event`,
            [Locale.jp]: `シャークケージダイビング`,
            [Locale.kr]: `상어 케이지 다이빙 행사`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.forneusa][1],
        name: {
            [Locale.tc]: `牙齒是掠食者的本錢`,
            [Locale.sc]: `牙齿是掠食者的本钱`,
            [Locale.en]: `Predator's Key Teeth`,
            [Locale.jp]: `牙こそが捕食者の命`,
            [Locale.kr]: `이빨은 포식자의 자본`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.forneusa][2],
        name: {
            [Locale.tc]: `「巨鯊」警告！`,
            [Locale.sc]: `「巨鲨」警告！`,
            [Locale.en]: `Megalodon Warning!`,
            [Locale.jp]: `「メガシャーク」警報！`,
            [Locale.kr]: `「거대 상어」경고!`
        },
    },
]

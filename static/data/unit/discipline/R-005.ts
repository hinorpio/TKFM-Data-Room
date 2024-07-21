import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10805: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.sable][0],
        name: {
            [Locale.tc]: "披著羊皮的狼",
            [Locale.sc]: "披着羊皮的狼",
            [Locale.en]: "Wolf in Sheep's Clothing",
            [Locale.jp]: "羊の皮をかぶったオオカミ",
            [Locale.kr]: "양의 탈을 쓴 늑대"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.sable][1],
        name: {
            [Locale.tc]: "撒芭絲的禮物",
            [Locale.sc]: "撒芭丝的礼物",
            [Locale.en]: "Sable's Gift",
            [Locale.jp]: "サバスの贈り物",
            [Locale.kr]: "세바스의 선물"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.sable][2],
        name: {
            [Locale.tc]: "魔性之女",
            [Locale.sc]: "魔性之女",
            [Locale.en]: "Demon Woman",
            [Locale.jp]: "魔性の女",
            [Locale.kr]: "마성의 여인"
        },
    },
]

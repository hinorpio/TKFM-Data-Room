import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10808: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.shiraka][0],
        name: {
            [Locale.tc]: `暗精靈的抵抗`,
            [Locale.sc]: `暗精灵的抵抗`,
            [Locale.en]: `The Dark Elf's Resistance`,
            [Locale.jp]: `ダークフェアリーの抵抗`,
            [Locale.kr]: `다크엘프의 저항`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.shiraka][1],
        name: {
            [Locale.tc]: `索拉卡的禮物`,
            [Locale.sc]: `索拉卡的礼物`,
            [Locale.en]: `Shiraka's Gift`,
            [Locale.jp]: `ソラカの贈り物`,
            [Locale.kr]: `소라카의 선물`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.shiraka][2],
        name: {
            [Locale.tc]: `強姦性愛中毒`,
            [Locale.sc]: `强奸性爱中毒`,
            [Locale.en]: `Penis Poison`,
            [Locale.jp]: `強姦セックス中毒`,
            [Locale.kr]: `강간 플레이 중독`
        },
    },
]

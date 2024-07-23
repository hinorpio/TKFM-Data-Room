import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10066: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.anjelica][0],
        name: {
            [Locale.tc]: `魔女與不速之客`,
            [Locale.sc]: `魔女与不速之客`,
            [Locale.en]: `The Unexpected Guest`,
            [Locale.jp]: `魔女と招かれざる客`,
            [Locale.kr]: `마녀와 불청객`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.anjelica][1],
        name: {
            [Locale.tc]: `魔女與性愛魔法`,
            [Locale.sc]: `魔女与性爱魔法`,
            [Locale.en]: `Sex Magic`,
            [Locale.jp]: `魔女とセックス魔法`,
            [Locale.kr]: `마녀와 섹스 마법`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.anjelica][2],
        name: {
            [Locale.tc]: `魔女與閒暇娛樂`,
            [Locale.sc]: `魔女与闲暇娱乐`,
            [Locale.en]: `Maid's Day Off`,
            [Locale.jp]: `魔女と娯楽`,
            [Locale.kr]: `마녀의 쾌락`
        },
    },
]

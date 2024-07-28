import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10017: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.f_baal][0],
        name: {
            [Locale.tc]: `魔王的枕營業`,
            [Locale.sc]: `魔王的枕营业`,
            [Locale.en]: `Pillow Business`,
            [Locale.jp]: `魔王の枕営業`,
            [Locale.kr]: `마왕의 베개영업`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.f_baal][1],
        name: {
            [Locale.tc]: `巴爾的禮物`,
            [Locale.sc]: `巴尔的礼物`,
            [Locale.en]: `Ba'al's Gift`,
            [Locale.jp]: `バルの贈り物`,
            [Locale.kr]: `바알의 선물`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.f_baal][2],
        name: {
            [Locale.tc]: `演出後的餘興節目`,
            [Locale.sc]: `演出后的余兴节目`,
            [Locale.en]: `Ceremony's End`,
            [Locale.jp]: `祭りの終わり`,
            [Locale.kr]: `축제의 피날레`
        },
    },
]

import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10806: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.marlene][0],
        name: {
            [Locale.tc]: `想變得更親近`,
            [Locale.sc]: `想变得更亲近`,
            [Locale.en]: `Getting Closer`,
            [Locale.jp]: `もっと仲良くなりたいな`,
            [Locale.kr]: `더 친해지고 싶다`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.marlene][1],
        name: {
            [Locale.tc]: `瑪蓮的禮物`,
            [Locale.sc]: `玛莲的礼物`,
            [Locale.en]: `Marlene's Gift`,
            [Locale.jp]: `マリンの贈り物`,
            [Locale.kr]: `마를렌의 선물`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.marlene][2],
        name: {
            [Locale.tc]: `為了快樂的結局`,
            [Locale.sc]: `为了快乐的结局`,
            [Locale.en]: `Happily Ever After`,
            [Locale.jp]: `ハッピーエンディングのために`,
            [Locale.kr]: `해피엔딩을 위해서`
        },
    },
]

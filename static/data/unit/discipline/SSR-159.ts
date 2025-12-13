import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10188: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.fifth_iblis][0],
        name: {
            [Locale.tc]: `如夢似幻`,
            [Locale.sc]: `如梦似幻`,
            [Locale.en]: `Dreamlike Illusion`,
            [Locale.jp]: `幻想のように`,
            [Locale.kr]: `꿈 같은 환상`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.fifth_iblis][1],
        name: {
            [Locale.tc]: `情不自禁`,
            [Locale.sc]: `情不自禁`,
            [Locale.en]: `Uncontrollable Feelings`,
            [Locale.jp]: `抑えきれない気持ち`,
            [Locale.kr]: `주체할 수 없는 마음`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.fifth_iblis][2],
        name: {
            [Locale.tc]: `別緻的臨別禮`,
            [Locale.sc]: `别致的临别礼`,
            [Locale.en]: `Exquisite Farewell Gift`,
            [Locale.jp]: `素敵な別れのプレゼント`,
            [Locale.kr]: `특별한 이별 선물`
        },
    },
]

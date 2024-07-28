import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10072: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.b_baal][0],
        name: {
            [Locale.tc]: `讓人窒色的愛`,
            [Locale.sc]: `让人窒色的爱`,
            [Locale.en]: `A Choking Love`,
            [Locale.jp]: `窒息の愛`,
            [Locale.kr]: `숨막히는 사랑`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.b_baal][1],
        name: {
            [Locale.tc]: `純白的侍奉`,
            [Locale.sc]: `纯白的侍奉`,
            [Locale.en]: `Pure Service`,
            [Locale.jp]: `純白の奉仕`,
            [Locale.kr]: `순백의 봉사`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.b_baal][2],
        name: {
            [Locale.tc]: `只是喜歡被粗暴對待`,
            [Locale.sc]: `只是喜欢被粗暴对待`,
            [Locale.en]: `I Like it Rough`,
            [Locale.jp]: `乱暴されるのが好き`,
            [Locale.kr]: `난폭하게 다루어지는 게 좋아`
        },
    },
]

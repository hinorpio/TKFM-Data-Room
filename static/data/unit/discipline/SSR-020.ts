import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10034: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.asida][0],
        name: {
            [Locale.tc]: `和好的儀式`,
            [Locale.sc]: `和好的仪式`,
            [Locale.en]: `The Ritual`,
            [Locale.jp]: `仲直りの儀式`,
            [Locale.kr]: `화해의 의식`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.asida][1],
        name: {
            [Locale.tc]: `姐妹要平等`,
            [Locale.sc]: `姐妹要平等`,
            [Locale.en]: `Sister Sister`,
            [Locale.jp]: `姉妹は平等に`,
            [Locale.kr]: `자매는 공평해야지`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.asida][2],
        name: {
            [Locale.tc]: `喜歡妹妹…還有凱薩`,
            [Locale.sc]: `喜欢妹妹…还有凯萨`,
            [Locale.en]: `I love my sister... and Master Caesar...`,
            [Locale.jp]: `妹も……シーザー様も好き……`,
            [Locale.kr]: `동생이 좋아...그리고 시저 님도`
        },
    },
]

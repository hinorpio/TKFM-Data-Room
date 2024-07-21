import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10016: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.britney][0],
        name: {
            [Locale.tc]: "天才軍師贏不了",
            [Locale.sc]: "天才军师赢不了",
            [Locale.en]: "The Failing Genius",
            [Locale.jp]: "天才軍師には勝てないよ",
            [Locale.kr]: "천재 군사도 못 이겨"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.britney][1],
        name: {
            [Locale.tc]: "天才軍師的妙計",
            [Locale.sc]: "天才军师的妙计",
            [Locale.en]: "Genius Planm",
            [Locale.jp]: "天才軍師の妙計",
            [Locale.kr]: "천재 군사의 계획"
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.britney][2],
        name: {
            [Locale.tc]: "贏不了就加入",
            [Locale.sc]: "赢不了就加入",
            [Locale.en]: "Join Up!",
            [Locale.jp]: "勝てないなら寝返っちゃえ",
            [Locale.kr]: "이길 수 없다면 합류한다"
        },
    },
]

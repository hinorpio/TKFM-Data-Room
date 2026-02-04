import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10194: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.b_aiko][0],
        name: {
            [Locale.tc]: `反對者的戰帖（？`,
            [Locale.sc]: `反对者的战帖（？`,
            [Locale.en]: `Challenge from the Opponent (?)`,
            [Locale.jp]: `反対者の果たし状（？`,
            [Locale.kr]: `반대자의 도전장(?)`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.b_aiko][1],
        name: {
            [Locale.tc]: `新娘與新郎的午休時光`,
            [Locale.sc]: `新娘与新郎的午休时光`,
            [Locale.en]: `Bride and Groom's Lunch Break`,
            [Locale.jp]: `新郎新婦の午後のひと時`,
            [Locale.kr]: `신부와 신랑의 휴식 시간`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.b_aiko][2],
        name: {
            [Locale.tc]: `主人？不，要叫親愛的！`,
            [Locale.sc]: `主人？不，要叫亲爱的！`,
            [Locale.en]: `Master? No, call me dear!`,
            [Locale.jp]: `ご主人様？じゃなくて、あなた！`,
            [Locale.kr]: `주인님? 아니, 여보라고 불러야겠죠!`
        },
    },
]

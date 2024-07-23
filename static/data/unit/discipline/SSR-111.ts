import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10141: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.a_nana][0],
        name: {
            [Locale.tc]: `秘密潛入調查`,
            [Locale.sc]: `秘密潜入调查`,
            [Locale.en]: `Secret Infiltration Search`,
            [Locale.jp]: `秘密の潜入捜査`,
            [Locale.kr]: `비밀 잠입 수사`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.a_nana][1],
        name: {
            [Locale.tc]: `睡眼惺忪的貓娘`,
            [Locale.sc]: `睡眼惺忪的猫娘`,
            [Locale.en]: `Sleepy-eyed Catgirl`,
            [Locale.jp]: `寝ぼけてる猫娘`,
            [Locale.kr]: `잠이 덜 깬 고양이`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.a_nana][2],
        name: {
            [Locale.tc]: `又是互相親熱的一天`,
            [Locale.sc]: `又是互相亲热的一天`,
            [Locale.en]: `Another Day of Intimacy`,
            [Locale.jp]: `またアツアツな1日`,
            [Locale.kr]: `다시 찾아온 뜨거운 하루`
        },
    },
]

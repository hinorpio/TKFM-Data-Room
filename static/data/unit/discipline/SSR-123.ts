import { Locale, UnitCode } from '@/plugins/utils/enums';
import { UnitDisciplinePreview } from '~/static/const';
import { Discipline } from '@/interface/unit/discipline';


export const Discipline_10152: Discipline[] = [
    {
        preview: UnitDisciplinePreview[UnitCode.susan][0],
        name: {
            [Locale.tc]: `倒吊的惡作劇陷阱`,
            [Locale.sc]: `倒吊的恶作剧陷阱`,
            [Locale.en]: `Upside-Down Prank Trap`,
            [Locale.jp]: `逆さまトラップ`,
            [Locale.kr]: `거꾸로 매달리는 함정`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.susan][1],
        name: {
            [Locale.tc]: `不願洩漏的過去`,
            [Locale.sc]: `不愿泄漏的过去`,
            [Locale.en]: `An Unspeakable Past`,
            [Locale.jp]: `明かされたくない過去`,
            [Locale.kr]: `드러내고 싶지 않은 과거`
        },
    },
    {
        preview: UnitDisciplinePreview[UnitCode.susan][2],
        name: {
            [Locale.tc]: `歡呼吧！吾歸來了！`,
            [Locale.sc]: `欢呼吧！吾归来了！`,
            [Locale.en]: `Hurray! I'm Back!`,
            [Locale.jp]: `叫べ！ワタシが帰還したぞ！`,
            [Locale.kr]: `환호하라! 내가 돌아왔다!`
        },
    },
]

import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10069: Unit = {
    ID: "10069",
    metaCode: "lillane",
    prefix: {
        [Locale.tc]: "尋情慾兔",
        [Locale.sc]: "寻情慾兔",
        [Locale.en]: "Lusty Bunny",
        [Locale.jp]: "情欲のウサギ",
        [Locale.kr]: "사랑을 찾아서"
    },
    name: {
        [Locale.tc]: "鈴蘭",
        [Locale.sc]: "铃兰",
        [Locale.en]: "Lillane",
        [Locale.jp]: "鈴蘭",
        [Locale.kr]: "스즈란"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `鈴蘭雖屬於獸人一族，卻是隻非常沒有威脅性的兔子。本身沒什麼戰鬥力，又容易受到驚嚇，偏偏還是個天天發情的性子。因兔族體質而產生的種種問題與歧視，都讓仰慕純情戀愛的鈴蘭困擾不已。為了能找到戀人，談上一場浪漫的戀愛，鈴蘭今天依然與自身的情慾努力奮鬥著。\n\n『雖然很弱小，但鈴蘭會努力幫上忙的！』`,
        [Locale.sc]: `铃兰虽属于兽人一族，却是只非常没有威胁性的兔子。本身没什么战斗力，又容易受到惊吓，偏偏还是个天天发情的性子。因兔族体质而产生的种种问题与歧视，都让仰慕纯情恋爱的铃兰困扰不已。为了能找到恋人，谈上一场浪漫的恋爱，铃兰今天依然与自身的情欲努力奋斗着。\n\n『虽然很弱小，但铃兰会努力帮上忙的！』`,
        [Locale.en]: `Lillane, although being a member of the beast race, is an extremely non-threatening rabbit. She has no combat experience and is easily startled, but still goes through every day in heat. All the issues and discrimination that arise from being a rabbit makes Lillane, who yearns for pure love, very troubled. In order to find her true love and experience real romance, Lillane wishes she could act out her passions.\n\n"Though weak, I will still try my best to help!"`,
        [Locale.jp]: `鈴蘭は獣人の一族ではあるが、攻撃性が全くないウサギ人間である。戦闘力もなく臆病なウサギ人間は、毎日発情してばかり。そんな体質が原因で様々な問題を起こし、軽蔑の目で見られる彼女だが、ずっと純愛にあこがれを抱いていた。彼女はお相手を見つけてロマンチックな恋をするために、今日も自分の性欲と戦うのであった。\n\n『弱くて臆病だけど、役に立てるように頑張る！』`,
        [Locale.kr]: `스즈란은 수인이며 조금도 위협적이지 않는 토끼족에 속한다. 전투력도 없고 쉽게 놀라는 데다 하필이면 또 매일 발정 상태에 처해있다. 토끼족의 천성적인 체질 때문에 일어나는 온갖 문제와 차별은 순애보를 추구하는 스즈란을 힘들게 만들 뿐이다. 진정한 로맨스를 위해 스즈란은 오늘도 자기 자신과의 욕망과 분투 중이다.\n\n『비록 약하지만 그래도 열심히 노력해볼게요!』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/03/08",
    essence: UnitEssence[UnitCode.lillane],
    thumbnail: UnitEssence[UnitCode.lillane],
    selection: UnitSelection[UnitCode.lillane],
    clothes: UnitFullImage[UnitCode.lillane],
    tagList: [],
    otherVersion: [ UnitCode.w_lillane ],
    puzzle: [],
    outfits: [],
    skillSet: []
}
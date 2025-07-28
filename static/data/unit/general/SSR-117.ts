import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10147: Unit = {
    ID: "10147",
    metaCode: "oniyoiki",
    prefix: {
        [Locale.tc]: "魔物終結",
        [Locale.sc]: "魔物终结",
        [Locale.en]: "Monster Slayer",
        [Locale.jp]: "魔物キラー",
        [Locale.kr]: "마물 종결자"
    },
    name: {
        [Locale.tc]: "鬼醉木",
        [Locale.sc]: "鬼醉木",
        [Locale.en]: "Oniyoiki",
        [Locale.jp]: "鬼酔木",
        [Locale.kr]: "오니요이키"
    },
    abbreviation: {
        [Locale.tc]: [ "廚娘", "鬼廚" ],
        [Locale.sc]: [ "厨娘", "鬼厨" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: [ "요이키" ]
    },
    background: {
        [Locale.tc]: `鬼醉木是在各地進行廚藝修行的流浪廚師。為了取得最新鮮的食材鑽研料理之道，她時常站在第一線與各種野獸搏鬥，所以廚藝跟戰鬥的技術都日益精進。如今已經沒有任何的料理能難得倒她，不管是哪種食材（魔物肉），在經過鬼醉木的手之後，都會變成讓人垂涎三尺的桌上佳餚，當然，前提是對方要能接受那些稀奇古怪的食材而且對魔物不會反感。鬼醉木身為魔物料理研究專家，她的存在讓魔物與食材的分界不再，這也是她魔物終結稱號的由來。\n\n『挑食是不好的，稍微吃一口吧，只要一小口就會讓你改觀喔！』`,
        [Locale.sc]: `鬼醉木是在各地进行厨艺修行的流浪厨师。为了取得最新鲜的食材鑽研料理之道，她时常站在第一线与各种野兽搏斗，所以厨艺跟战斗的技术都日益精进。如今已经没有任何的料理能难得倒她，不管是哪种食材（魔物肉），在经过鬼醉木的手之后，都会变成让人垂涎三尺的桌上佳餚，当然，前提是对方要能接受那些稀奇古怪的食材而且对魔物不会反感。鬼醉木身为魔物料理研究专家，她的存在让魔物与食材的分界不再，这也是她魔物终结称号的由来。\n\n『挑食是不好的，稍微吃一口吧，只要一小口就会让你改观喔！』`,
        [Locale.en]: `Trained in the culinary traditions of every corner of the world, Oniyoiki is a romantic chef.She has always been at the frontlines against monstrous beasts, all in the name of finding the freshest ingredients and honing her cooking techniques. It's no wonder her skills in inflicting major pain and in the kitchen have improved significantly. Having reached her professional zenith, no dish or monster meat can truly catch her unawares. Anything that passes through her hands is a mouth-watering wonder of culinary exquisiteness. Naturally, to enjoy her delicacies, the customer mustn't be put off by strange ingredients or eating monster flesh. Being an unrivaled expert in cooking up monster-based recipes, her title of "Monster Slayer" is certainly a fitting one.\n\n"Life's too short to be a picky eater. Come, just one bite and you will change your mind."`,
        [Locale.jp]: `鬼酔木は、各地で料理の修行を行うさすらいの料理人である。新鮮な食材や料理の道を追求し、しばしば第一線に立って様々な野獣と戦っている。そのため、料理と戦闘の腕の両方が日々進化している。今となっては彼女が難しいと感じる料理は存在しない。どのような食材（魔物の肉）でも、鬼酔木が料理すると誰もがヨダレを垂らす絶品料理となる。もちろん、相手がその珍しい食材を受け入れ、魔物に対する嫌悪感を持っていないことが前提である。鬼酔木は魔物料理研究の専門家として、魔物と食材の境界を取り払う存在であり、これが彼女の「魔物キラー」という称号の由来なのだ。\n\n『好き嫌いはいけないよ。少しだけ食べてみて。一口で考えが変わるから！』`,
        [Locale.kr]: `오니요이키는 각지에서 요리 수행을 하는 방랑 요리사다. 가장 신선한 식재료와 요리법 연구를 위해 항상 최전선에서 야수들과 싸워왔기 때문에 요리 기술은 물론 전투 실력도 나날이 향상되어 왔다. 이제 그녀가 만들지 못하는 요리는 존재하지 않는다. 어떤 식재료(마물 고기)든 그녀의 손을 거치기만 하면 군침이 도는 요리가 완성된다. 물론 상대방이 그 이상한 식재료와 마물에 거부감이 없어야 한다는 전제 하에. 오니요이키는 마물요리 전문 연구가로서 그녀의 존재로 인해 마물과 식재료의 경계가 희미해졌고 이것이 그녀가 마물 종결자로 불리는 이유이기도 하다.\n\n『편식은 좋지 않아요. 조금이라도 먹어보세요. 한 입 먹으면 생각이 바뀔 거예요!』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2024/07/17",
    essence: UnitEssence[UnitCode.oniyoiki],
    thumbnail: UnitEssence[UnitCode.oniyoiki],
    selection: UnitSelection[UnitCode.oniyoiki],
    clothes: UnitFullImage[UnitCode.oniyoiki],
    tagList: [],
    otherVersion: [],
    initHP: 3808,
    initATK: 924.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.oniyoiki],
    skillSet: []
}
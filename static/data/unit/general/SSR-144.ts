import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10172: Unit = {
    ID: "10172",
    metaCode: "s_evie",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "希依",
        [Locale.sc]: "希依",
        [Locale.en]: "Evie",
        [Locale.jp]: "リリー",
        [Locale.kr]: "릴리"
    },
    abbreviation: {
        [Locale.tc]: [ "夏鹿", "C3" ],
        [Locale.sc]: [ "夏鹿", "C3" ],
        [Locale.en]: [ "S.Evie" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수릴리" ]
    },
    background: {
        [Locale.tc]: `雖然大家都認為聖誕馴鹿只會在冬天才會出現，但即使是聖誕馴鹿，也會想要享受美好的夏日風情！趁著伊布力斯要出海度假的機會，希依換上泳裝，拿起水槍和泳圈，準備登上郵輪盡情玩耍～不論是有趣的沙灘遊戲、美味的夏日限定美食、還是其他精彩刺激的活動，希依都會抱持著好奇心，享受這些不曾體驗過的事物。當然，在享受之餘，她也絕對不會錯過和好朋友們一起玩耍的每一刻。畢竟對希依來說，除了自己開心之外，能和大家一起開心才是最重要的～\n\n『嘻嘻～能到海邊玩水真是太開心了，下次希依一定要帶小莎一起過來玩～』`,
        [Locale.sc]: `虽然大家都认为圣诞驯鹿只会在冬天才会出现，但即使是圣诞驯鹿，也会想要享受美好的夏日风情！趁着伊布力斯要出海度假的机会，希依换上泳装，拿起水枪和泳圈，准备登上邮轮尽情玩耍～不论是有趣的沙滩游戏、美味的夏日限定美食、还是其他精彩刺激的活动，希依都会抱持着好奇心，享受这些不曾体验过的事物。当然，在享受之馀，她也绝对不会错过和好朋友们一起玩耍的每一刻。毕竟对希依来说，除了自己开心之外，能和大家一起开心才是最重要的～\n\n『嘻嘻～能到海边玩水真是太开心了，下次希依一定要带小莎一起过来玩～』`,
        [Locale.en]: `Everyone thinks Christmas reindeer only show up in winter, but even reindeer crave a taste of summer vibes! With Iblis heading out for a sea vacation, Evie slips into a swimsuit, grabs a water gun and floatie, and hops aboard the cruise for some serious fun~ From thrilling beach games to mouthwatering summer-exclusive treats and other exciting activities, Evie dives into every new experience with boundless curiosity. Of course, amidst the fun, she never misses a moment to goof around with her best pals. To Evie, her own blissfulness can be quite fulfilling, but sharing that happiness with everyone else is what truly matters~\n\n"Heehee~ Playing at the beach is just too fun! I'm totally bringing little Sally along next time~"`,
        [Locale.jp]: `クリスマスのトナカイは冬にしか現れないと思われがちだが、クリスマスのトナカイだって、夏のバカンスを楽しみたいもの！イブリースがクルーズ船でバカンスに出かけると聞いたリリーは、すかさず水着に着替え、水鉄砲と浮き輪を手にして、船に乗り込む準備をした。楽しいビーチゲームに、夏限定の美味しいグルメ、さらには刺激的なアクティビティの数々。リリーは好奇心いっぱいに楽しんだのであった。もちろん、大好きな友だちと一緒に過ごす時間も大切である。リリーのモットーは、楽しいことはみんなで楽しむことだからだ～\n\n『えへへっ、海で遊べるなんて最高。今度はサリちゃんも連れてきてあげなきゃ～』`,
        [Locale.kr]: `모두가 X-mas 순록은 겨울에만 나타난다고 생각하지만, X-mas 순록이라도 멋진 여름 분위기를 즐기고 싶어한다! 이블리스가 바다로 휴가를 떠나는 기회를 틈타, 릴리는 수영복으로 갈아입고 물총과 수영 튜브를 챙겨 유람선에 올라 신나게 놀 준비를 마쳤다! 재미있는 해변 게임, 맛있는 여름 한정 음식, 그리고 짜릿하고 다양한 활동까지, 릴리는 호기심 가득한 마음으로 처음 경험하는 모든 것을 즐길 생각이다. 물론, 친구들과 함께 즐기겠단 마음도 절대 내려놓을 생각이 없다. 릴리에게 있어 스스로 노는 것도 중요하지만, 모두와 함께 행복한 시간을 보내는 것이 가장 소중하니까~\n\n『헤헷~ 해변에서 물놀이라니, 정말 너무 신나! 다음엔 셀리나도 꼭 데려와야지~』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/06/11",
    essence: UnitEssence[UnitCode.s_evie],
    thumbnail: UnitEssence[UnitCode.s_evie],
    selection: UnitSelection[UnitCode.s_evie],
    clothes: UnitFullImage[UnitCode.s_evie],
    tagList: [],
    otherVersion: [ UnitCode.evie, UnitCode.w_evie ],
    initHP: 0,
    initATK: 0,
    puzzle: [ PuzzleCode.EVENT_2025_SUMMER_2 ],
    outfits: [],
    skillSet: []
}
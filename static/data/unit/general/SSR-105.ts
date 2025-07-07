import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10135: Unit = {
    ID: "10135",
    metaCode: "w_mesmiia",
    prefix: {
        [Locale.tc]: "偶像經紀人",
        [Locale.sc]: "偶像经纪人",
        [Locale.en]: "Idol Agent",
        [Locale.jp]: "マネジャー",
        [Locale.kr]: "아이돌 매니저"
    },
    name: {
        [Locale.tc]: "梅絲米奈雅",
        [Locale.sc]: "梅丝米奈雅",
        [Locale.en]: "Mesmiia",
        [Locale.jp]: "メスミナヤ",
        [Locale.kr]: "메스미나"
    },
    abbreviation: {
        [Locale.tc]: [ "風蛇" ],
        [Locale.sc]: [ "风蛇" ],
        [Locale.en]: [ "W.Mesmiia" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "돌스미나" ]
    },
    background: {
        [Locale.tc]: `身為蛇女之后，就該坐擁金山銀山，享受榮華富貴和凡人的崇拜。只可惜，雖然有這樣的夢想，但卻沒有相對應的腦袋。窮困潦倒的梅絲米奈雅，某天意外和魔導人偶星空奈奈美相遇。兩人各取所需，一拍即合，於是，專屬於少女偶像星空奈奈美的超級經紀人梅絲米奈雅誕生了。只不過，名義上經紀人，但因為對方實在太能幹的關係，所以梅絲米奈雅其實也沒做什麼事，反而還因為合作拿到了很多分成，並以此買了大量的奢華服飾和戒指項鍊。雖然她完全沒發現自己身上的那些珠寶和包包其實都是便宜貨，但那也沒關係。因為她現在可是，超級有錢的蛇女之后梅絲米奈雅大人！\n\n『金錢就是力量，所以現在的妾身就是無敵的，哇哈哈哈！』`,
        [Locale.sc]: `身为蛇女之后，就该坐拥金山银山，享受荣华富贵和凡人的崇拜。只可惜，虽然有这样的梦想，但却没有相对应的脑袋。穷困潦倒的梅丝米奈雅，某天意外和魔导人偶星空奈奈美相遇。两人各取所需，一拍即合，于是，专属于少女偶像星空奈奈美的超级经纪人梅丝米奈雅诞生了。只不过，名义上经纪人，但因为对方实在太能干的关系，所以梅丝米奈雅其实也没做什么事，反而还因为合作拿到了很多分成，并以此买了大量的奢华服饰和戒指项链。虽然她完全没发现自己身上的那些珠宝和包包其实都是便宜货，但那也没关系。因为她现在可是，超级有钱的蛇女之后梅丝米奈雅大人！\n\n『金钱就是力量，所以现在的妾身就是无敌的，哇哈哈哈！』`,
        [Locale.en]: `As a Snake Queen, Mesmiia is destined to sit atop a mountain of gold and silver, basking in her glory and wealth, and enjoying the absolute admiration of mere mortals. It's a pity, however, that although she is convinced of such destiny, she lacks the brains to achieve it. Wallowing in poverty, Mesmiia one day suddenly encounters the idol automaton Nanami. The two hit it off immediately, and Mesmiia decides to become her new partner's personal super agent. But given the idol is such a talented and capable superstar, her agent is basically left with nothing to do, and instead spent her share of the profits on luxury clothes, rings, and necklaces. Despite the jewelry and designer bags actually being cheap knock-offs, it didn't really matter. Because she has finally reached the status of wealth she believes she, Snake Queen Mesmiia, was born to have!\n\n"Money is power, which means I, Messsmiia, am unstoppable! Mwahahahaha!!"`,
        [Locale.jp]: `ナーガ女王であるからには、多大な富と凡人の崇拝を楽しみに生きるべき。そんな夢を持つメスミナヤだが、残念ながらその頭が足りないようだ。ある日、困窮していたメスミナヤはひょんなことから魔導人形の星空ななみと出会う。それぞれ事情を抱えていた2人はすぐに意気投合し、その結果、少女アイドル星空ななみの専属スーパーマネジャーメスミナヤが誕生したのだ。マネジャーを名乗る彼女だったが、ななみがあまりの実力の持ち主だったため、仕事をするどころかコラボして分け前をもらい、高級な服や指輪、ネックレスを大量に購入した。彼女が身に着けているその宝石やバッグは、実はただの安物だということに気付いていないメスミナヤだが、それはもう関係ない。なぜなら今の彼女は、大富豪のナーガ女王メスミナヤ様だからだ！\n\n『金は力なり。だから今の私は無敵なのよ。あはははっ！』`,
        [Locale.kr]: `나가 퀸으로서, 황금과 은으로 가득 찬 곳에 앉아 부귀영화를 누리며 사람들의 존경을 받아 마땅하다. 그런 꿈을 꾸지만, 그에 걸맞은 머리를 가지지 못한 것이 안타깝다. 가난에 허덕이던 메스미나는 어느 날 우연찮게 마도 인형 나나미와 만나게 된다. 둘은 서로에게 필요한 것을 얻으며 완벽한 궁합을 만들어냈다. 그렇게 소녀 아이돌 나나미 전담 슈퍼 매니저 메스미나가 탄생하였다. 그러나, 명목상 매니저일 뿐이었다. 상대가 워낙 유능하여 사실 할 일은 별로 없었고, 오히려 협력으로 많은 몫을 챙길 수 있었다. 메스미나는 그것으로 비싼 옷과 반지, 목걸이를 많이 사들였다. 비록 그녀는 자신의 몸에 걸쳐진 보석과 가방들이 싸구려라는 것을 전혀 알아차리지 못했지만, 그래도 상관없었다. 왜냐하면 지금의 그녀는, 돈이 넘쳐나는 나가 퀸 메스미나 님이기 때문이다!\n\n『돈이 바로 힘이다. 그러니 지금의 나는 무적이니라. 와하하하!』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/02/05",
    essence: UnitEssence[UnitCode.w_mesmiia],
    thumbnail: UnitEssence[UnitCode.w_mesmiia],
    selection: UnitSelection[UnitCode.w_mesmiia],
    clothes: UnitFullImage[UnitCode.w_mesmiia],
    tagList: [],
    otherVersion: [ UnitCode.mesmiia ],
    initHP: 3305.6,
    initATK: 1065.6,
    puzzle: [],
    outfits: [],
    skillSet: []
}
import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10109: Unit = {
    ID: "10109",
    metaCode: "v_iblis",
    prefix: {
        [Locale.tc]: "純情可可",
        [Locale.sc]: "纯情可可",
        [Locale.en]: "Pure Cocoa",
        [Locale.jp]: "ピュアココア",
        [Locale.kr]: "순정의 코코아"
    },
    name: {
        [Locale.tc]: "伊布力斯",
        [Locale.sc]: "伊布力斯",
        [Locale.en]: "Iblis",
        [Locale.jp]: "イブリース",
        [Locale.kr]: "이블리스"
    },
    abbreviation: {
        [Locale.tc]: [ "可伊" ],
        [Locale.sc]: [ "可伊" ],
        [Locale.en]: [ "V.Iblis" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "코이블" ]
    },
    background: {
        [Locale.tc]: `贈送巧克力有向戀慕之人傳達自己愛意的意義？哼，巴爾難道以為偉大的伊布力斯會相信這種拙劣、只為推銷商品而說出口的謊言嗎。一邊說著這樣的話，一邊準備巧克力的材料，即便早已成年卻依舊有著一顆少女心的魔王攪拌醇香的巧克力。並不是因為自己想送，只是因為大家都送了自己要是不送那就太失禮了。而自己既然是正室，那自然要送出最高級、最美味的那一顆巧克力。會送凱薩只是出於禮節，絕不是因為自己很好奇他吃下巧克力之後會有什麼反應於是在那天，從來不曾自己下過廚的大小姐一邊羞紅著臉，一邊遞出巧克力邊說道。\n\n『這些巧克力才不是為你做的，只是本小姐剛好想練習一下廚藝而已，別誤會了！』`,
        [Locale.sc]: `赠送巧克力有向恋慕之人传达自己爱意的意义？哼，巴尔难道以为伟大的伊布力斯会相信这种拙劣、只为推销商品而说出口的谎言吗。一边说着这样的话，一边准备巧克力的材料，即便早已成年却依旧有着一颗少女心的魔王搅拌醇香的巧克力。并不是因为自己想送，只是因为大家都送了自己要是不送那就太失礼了。而自己既然是正室，那自然要送出最高级、最美味的那一颗巧克力。会送凯萨只是出于礼节，绝不是因为自己很好奇他吃下巧克力之后会有什么反应于是在那天，从来不曾自己下过厨的大小姐一边羞红着脸，一边递出巧克力边说道。\n\n『这些巧克力才不是为你做的，只是本小姐刚好想练习一下厨艺而已，别误会了！』`,
        [Locale.en]: `Giving someone chocolate shows them your love? Hmph~ Ba'al really thinks Iblis will buy that load of marketing? Iblis thinks that as she's toiling away, trying her best to make chocolate. Yeah it may be a load of marketing, but Iblis still has that little girl's heart deep inside. Not because she wants to give that chocolate to anyone, mind you. It's just... everyone elses is doing it, and she wants to be the best. Plus, as an archdemon, if she were to give Master Caesar chocolate, it better be the best chocolate he's ever eaten. And if she were to give Caesar chocolate, it's not like she'd expect him to have any kind of emotional reaction afterwards, or anything. And so Iblis, who's never cooked anything, keeps on toiling away in the kitchen, trying her best to make chocolate she's definitely not expecting to give to anyone... probably.\n\n"I didn't make this chocolate for you! I just wanted to practice my skills in the kitchen, that's all!"`,
        [Locale.jp]: `チョコレートを贈って愛を伝える？バルはイブリースがこんな商売根性丸出しの噂を信じるとでも思ったのだろうか。だが当のイブリースは、胡散臭いと言いつつもチョコレートの材料を準備し、乙女心を露わにしてチョコを作り始めたのだ。彼女曰く、他の人たちが皆プレゼントを贈る中、自分だけ贈らないのは失礼だかららしい。自分が正室であると主張する彼女は、最高級且つ最高の味のチョコを贈らないといけない。そしてシーザーへのプレゼントは礼儀であって、決してシーザーの反応を見たいからではないそうだ。そんな料理の経験がないお嬢様はバレンタイン当日、顔を赤らめチョコを差し出しながらこういった。\n\n『このチョコレートはあなたの為に作ったわけじゃないわ。ただスイーツ作りの練習をしたくなっただけよ。勘違いしないでくださる？』`,
        [Locale.kr]: `초콜릿으로 사랑하는 이에게 마음을 전한다고? 흥! 바알 녀석, 상품 판매를 위해 멋대로 지어낸 말 따위 내가 믿을 거라 생각한 건가? ...라고 말을 하면서 초콜릿 재료를 준비하는 이블리스. 이미 성인이 된 그녀지만 여전히 소녀와 같은 마음을 지닌 채 두근거리는 마음으로 초콜릿을 젓기 시작한다. 주고 싶어서 그러는 게 아니라 이미 모두가 자신에게 초콜릿을 줬는데 가만히 있으면 실례라고 생각한 이블리스. 그렇다면 자신이 정실인 이상 당연히 최상급의 초콜릿을 준비해야 하는 것은 당연한 일. 시저에게 초콜릿을 주는 것은 단지 반응이 궁금하기 때문이지 절대 자신의 마음을 전하기 위해서가 아니라고 되뇐 그녀였다. 그리고 그날, 요리라곤 해본 적 없던 그녀는 수줍은 얼굴로 초콜릿을 건네며 이런 말을 꺼낸다.\n\n『이 초콜릿은 널 위해 만든 게 아니다! 단지 연습용으로 만든 것뿐이니까 괜히 오해하지 말라고!』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/02/08",
    essence: UnitEssence[UnitCode.v_iblis],
    thumbnail: UnitEssence[UnitCode.v_iblis],
    selection: UnitSelection[UnitCode.v_iblis],
    clothes: UnitFullImage[UnitCode.v_iblis],
    tagList: [],
    otherVersion: [ UnitCode.iblis, UnitCode.i_iblis, UnitCode.b_iblis, UnitCode.s_iblis, UnitCode.x_iblis, UnitCode.bg_iblis ],
    puzzle: [],
    outfits: [],
    skillSet: []
}
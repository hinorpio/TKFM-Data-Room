import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10174: Unit = {
    ID: "10174",
    metaCode: "forneusa",
    prefix: {
        [Locale.tc]: "怒濤魔鯊",
        [Locale.sc]: "怒涛魔鲨",
        [Locale.en]: "Raging Shark",
        [Locale.jp]: "怒涛の魔鮫",
        [Locale.kr]: "노도의 마상어"
    },
    name: {
        [Locale.tc]: "芙紐絲",
        [Locale.sc]: "芙纽丝",
        [Locale.en]: "Forneusa",
        [Locale.jp]: "フォルネウス",
        [Locale.kr]: "포르네우스"
    },
    abbreviation: {
        [Locale.tc]: [ "鯊魚", "魔鯊" ],
        [Locale.sc]: [ "鲨鱼", "魔鲨" ],
        [Locale.en]: [ "Shark" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "포르네" ]
    },
    background: {
        [Locale.tc]: `身為統治大海的海洋魔族，芙紐絲十分擅長在危險的魔界海域中穿梭。她腳踢凶暴海獸、右踹深海巨魷，幾乎沒有任何生物能夠威脅到待在海中的她。只不過，芙紐絲雖然看起來是個優雅且精明的魔族，但實際上卻沒有多少複雜的心機。就好像她對開船一竅不通，卻因為很喜歡船，所以喜歡自稱船長一樣。而她對魔王的位置也同樣抱持著極大的興趣，希望有一天自己能成為魔王，登上至高的王座。\n\n『呵呵~魔王伊布力斯，請接受我芙紐絲的挑戰吧。』`,
        [Locale.sc]: `身为统治大海的海洋魔族，芙纽丝十分擅长在危险的魔界海域中穿梭。她脚踢凶暴海兽、右踹深海巨鱿，几乎没有任何生物能够威胁到待在海中的她。只不过，芙纽丝虽然看起来是个优雅且精明的魔族，但实际上却没有多少複杂的心机。就好像她对开船一窍不通，却因为很喜欢船，所以喜欢自称船长一样。而她对魔王的位置也同样抱持着极大的兴趣，希望有一天自己能成为魔王，登上至高的王座。\n\n『呵呵~魔王伊布力斯，请接受我芙纽丝的挑战吧。』`,
        [Locale.en]: `Ruler of the seas, the ocean demon Forneusa glides effortlessly through the perilous waters of the demon realm. She kicks ferocious sea beasts and stomps massive deep-sea squids, with hardly any creature able to threaten her in the ocean. Though Forneusa appears elegant and cunning, she's far less scheming than she seems. Take her love for ships—she knows nothing about sailing but calls herself a captain just because she adores them. Her fascination with the Archdemon's throne burns just as bright, dreaming of one day ascending to that supreme seat.\n\n"Heh~ Archdemon Iblis, accept my mighty challenge!"`,
        [Locale.jp]: `海を統治する魔族であるフォルネウスは、危険な魔界の海域を自在に行き来する術に長けている。荒ぶる海獣や深海のクラーケンを蹴散らす彼女を脅かす存在など、海中には存在しないと言っても過言ではない。見た目こそ優雅で聡明そうな魔族にみえるが、実のところあまり策を巡らせるタイプではない。たとえば、船の操縦など全くできないくせに、船が大好きという理由だけで自分を船長と名乗っていたりする。そして、魔王の座にも強い関心を抱いており、いつか自らが魔王なり、頂点に立つことを夢見ているのだ。\n\n『ふふっ、魔王イブリース、私フォルネウスの挑戦を受けていただきましょうか』`,
        [Locale.kr]: `대해를 다스리는 해양 마족 포르네우스는 위험한 마계 해역을 자유롭게 누빈다. 그녀는 사나운 해수들에게 킥을 날리고, 심해 오징어를 오른발로 걷어차며, 바다 속에서 그녀를 위협할 생물은 거의 없다고 봐도 무방하다. 겉보기엔 우아하고 영리한 마족처럼 보이지만, 사실 포르네우스는 생각을 깊게 하지 않는 단순한 성격이다. 배 운전에 대해선 문외한이지만, 배를 워낙 좋아해 스스로를 선장이라 부르는 걸 즐긴다. 마왕 자리에도 엄청난 관심을 가지고 있으며, 언젠가 마왕이 되어 최고의 왕좌에 오르는 것이 그녀의 꿈이다.\n\n『후훗~ 마왕 이블리스, 나 포르네우스의 도전을 받아주시길.』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2025/06/11",
    essence: UnitEssence[UnitCode.forneusa],
    thumbnail: UnitEssence[UnitCode.forneusa],
    selection: UnitSelection[UnitCode.forneusa],
    clothes: UnitFullImage[UnitCode.forneusa],
    tagList: [],
    otherVersion: [],
    initHP: 5464,
    initATK: 644.8,
    puzzle: [ PuzzleCode.EVENT_2025_SUMMER_4 ],
    outfits: [],
    skillSet: []
}
import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10148: Unit = {
    ID: "10148",
    metaCode: "beer_shizuka",
    prefix: {
        [Locale.tc]: "酩酊狂歡",
        [Locale.sc]: "酩酊狂欢",
        [Locale.en]: "Drunken Feaster",
        [Locale.jp]: "酔狂の宴",
        [Locale.kr]: "곤드레만드레"
    },
    name: {
        [Locale.tc]: "靜",
        [Locale.sc]: "静",
        [Locale.en]: "Shizuka",
        [Locale.jp]: "静",
        [Locale.kr]: "시즈카"
    },
    abbreviation: {
        [Locale.tc]: [ "酒靜" ],
        [Locale.sc]: [ "酒静" ],
        [Locale.en]: [ "Beer.Shiz", "Beer.Shizuka" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "곤즈카" ]
    },
    background: {
        [Locale.tc]: `喝不完的美酒、吃不完的點心，連續舉辦整整一個月的超長慶典！\n這麼好玩的慶典，靜怎麼能錯過呢！只能用盡全力，盡情的玩耍了對吧！\n而且還可以趁著大家都在享受慶典的時候偷偷惡作劇，簡直太棒了～\n然而，在慶典上偶然遇到的某位人物，卻意外的改變了靜的命運。\n面對那位和自己非常相似，卻又感到陌生的存在，靜會做出什麼樣的選擇呢？\n\n『大家一起來喝美味的氣泡酒吧！乾杯喏！』`,
        [Locale.sc]: `喝不完的美酒丶吃不完的点心，连续举办整整一个月的超长庆典！\n这麽好玩的庆典，静怎麽能错过呢！只能用尽全力，尽情的玩耍了对吧！\n而且还可以趁着大家都在享受庆典的时候偷偷恶作剧，简直太棒了～\n然而，在庆典上偶然遇到的某位人物，却意外的改变了静的命运。\n面对那位和自己非常相似，却又感到陌生的存在，静会做出什麽样的选择呢？\n\n『大家一起来喝美味的气泡酒吧！乾杯喏！』`,
        [Locale.en]: `The fine wine and delightful delicacies seem neverending in this continuous celebration that lasts an entire month!\nShizuka naturally would never miss such festivities! A prankster like her has no other choice but to party hardy till the sun comes up!\nEven better for her, she can sneak around and lay her traps while everyone is busy having fun. Easy prey for sure~\nHowever, an unexpected encounter in the midst of this debauchery changes her fate entirely.\nThis individual shares much in common with Shizuka, yet she seems strangely foreign as well. What ever will Shizuka do with this new acquaintance?\n\n"Come, everyone, let's have a cup of exquisite sparkling wine! Cheers!"`,
        [Locale.jp]: `飲みきれない酒、食べきれないお菓子、そして一ヶ月続く祭典！\nこんなに楽しい祭典を静が見逃すはずはない！全身全霊で思いっきり楽しむしかない！\nその上みんなが祭典を楽しんでいる間に、こっそりイタズラだってできてしまう。もう最高以外の言葉が見つからない。\nしかし、祭典で偶然出会った人物が静の運命を変えることに。\n自分とそっくりだけど馴染みのない存在を目の前に、静は一体どんな選択肢を選ぶのだろうか？\n\n『みんなで一緒にスパークリングワインを飲もう！カンパ〜イ！』`,
        [Locale.kr]: `마르지 않는 술, 마르지 않는 간식, 한 달 내내 이어지는 장기간의 축제!\n이렇게 재밌는 축제를 시즈카가 그냥 지나칠 리 없지! 전력으로, 온 힘을 다해 놀아야만 한다!\n게다가 모두가 축제를 즐기는 틈에 몰래 장난을 칠 수 있는 것도 최고의 여흥이 아닐 수 없지~\n하지만 축제에서 우연히 만난 한 인물로 인해 시즈카의 운명이 바뀌게 되는데.\n자신과 닮았으면서도 낯선 존재인 그녀를 마주한 시즈카는 과연 어떤 선택을 내릴는지?\n\n『우리 다 함께 스파클링 와인 한 잔 어때! 건배!』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/08/14",
    essence: UnitEssence[UnitCode.beer_shizuka],
    thumbnail: UnitEssence[UnitCode.beer_shizuka],
    selection: UnitSelection[UnitCode.beer_shizuka],
    clothes: UnitFullImage[UnitCode.beer_shizuka],
    tagList: [],
    otherVersion: [ UnitCode.shizuka, UnitCode.s_shizuka, UnitCode.x_shizuka ],
    puzzle: [],
    outfits: [],
    skillSet: []
}
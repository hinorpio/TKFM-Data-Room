import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10051: Unit = {
    ID: "10051",
    metaCode: "pulicia",
    prefix: {
        [Locale.tc]: "最後的銀龍",
        [Locale.sc]: "最后的银龙",
        [Locale.en]: "Last of the Silver Dragons",
        [Locale.jp]: "最後の銀龍",
        [Locale.kr]: "최후의 은룡"
    },
    name: {
        [Locale.tc]: "普莉希拉",
        [Locale.sc]: "普莉希拉",
        [Locale.en]: "Pulicia",
        [Locale.jp]: "プリシラ",
        [Locale.kr]: "프리실라"
    },
    abbreviation: {
        [Locale.tc]: [ "銀龍" ],
        [Locale.sc]: [ "银龙" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `銀龍一族的最後倖存者。世代居住於雪山的銀龍被視為當地的聖龍，領地意識極強的龍族無形中守護了當地的和平。但在與以宣洩暴力瘋狂的魔龍之間發生鬥爭，最後以銀龍一族的生命為代價，將魔龍封印至雪山深處。殘存下來的普莉希拉作為最後的銀龍，負責守護這個封印。\n\n『你好，如果沒有其他事情的話我先走了，並不是討厭你，只是我喜歡一個人獨處。』`,
        [Locale.sc]: `银龙一族的最后幸存者。世代居住于雪山的银龙被视为当地的圣龙，领地意识极强的龙族无形中守护了当地的和平。但在与以宣泄暴力疯狂的魔龙之间发生斗争，最后以银龙一族的生命为代价，将魔龙封印至雪山深处。残存下来的普莉希拉作为最后的银龙，负责守护这个封印。\n\n『你好，如果没有其他事情的话我先走了，并不是讨厌你，只是我喜欢一个人独处。』`,
        [Locale.en]: `Last of the Silver Dragons, those who live up in the snow-capped mountains and are looked on as holy ones, those who keep peace throughout the land. And yet, in their war with the Dark Dragons, the Silver Dragons ended up all but extinct, the last of them being sealed up on the mountain tops. Now, left to watch over her sealed brethren, Pulicia is the last living one of her kind.\n\n"Hello, I'll leave now if there's nothing else you'd like to discuss. I don't hate you, I just prefer to be alone."`,
        [Locale.jp]: `銀龍族の最後の生き残り。代々雪山に住み、縄張り意識が強い。そのため現地ではいつしか平和を守る聖龍とみなされてきた。しかしながら凶暴な魔龍との間で争いが起こり、銀龍一族は命と引き換えに魔龍を雪山深くに封印したのだった。プリシラは銀龍の末裔としてその封印を守っている。\n\n『お初にお目にかかる。用がないなら私は先に帰るぞ。お前を嫌いなわけではない。ただ一人でいるのが好きなだけだ。』`,
        [Locale.kr]: `은룡족의 최후의 생존자. 설산에 서식한다는 은룡족은 성스러운 존재로 여겨지며 그들의 강한 영역 의식은 자연스럽게 현지의 평화를 가져다주었다. 하지만 광폭한 마룡과의 전쟁에서 은룡족은 목숨을 대가로 마룡을 설산 깊은 곳에 봉인하게 된다. 그리고 은룡의 마지막 생존자 프리실라는 봉인을 수호하는 사명을 짊어지게 되었는데.\n\n『다른 볼일 없으면 난 이만. 네가 싫어서가 아니라 그냥 혼자 있는 걸 좋아해서』`
    },
    rarity: Rarity.SR,
    element: Element.DARK,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/09/29",
    essence: UnitEssence[UnitCode.pulicia],
    thumbnail: UnitEssence[UnitCode.pulicia],
    selection: UnitSelection[UnitCode.pulicia],
    clothes: UnitFullImage[UnitCode.pulicia],
    tagList: [
        TagID.ELEMENT_DARK,
        TagID.POSITION_OBSTRUCTER,
        TagID.SPECIES_DEMIHUMAN,
        TagID.BREAST_HOT_TITS,
        TagID.CLASS_ELITE,
        TagID.OTHER_WEAKEN,
    ], 
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
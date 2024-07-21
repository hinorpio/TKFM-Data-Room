import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10803: Unit = {
    ID: "10803",
    metaCode: "iris",
    prefix: {
        [Locale.tc]: "龍女",
        [Locale.sc]: "龙女",
        [Locale.en]: "Dragoon",
        [Locale.jp]: "龍女",
        [Locale.kr]: "용녀"
    },
    name: {
        [Locale.tc]: "伊維絲",
        [Locale.sc]: "伊维丝",
        [Locale.en]: "Iris",
        [Locale.jp]: "アイヴィス",
        [Locale.kr]: "아이리스"
    },
    abbreviation: {
        [Locale.tc]: [ "龍女", "龍", "焚化爐" ],
        [Locale.sc]: [ "龙女", "龙", "焚化炉" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `伊維絲是龍人族的少女，雖然已經活了三百多年，但依然不改孩子心性，個性開朗且親切。對於男女之間情感一點都不了解，更沒有性的概念，天真的伊維絲從別處得知了魔族大軍的侵略，本是為了勸說凱薩停止入侵而來，但不知怎麼的卻和凱薩打成一片，自然而然的成為了凱薩麾下的其中一員。據凱薩的親信推測，兩人異常投緣的原因可能是心理年齡相近……\n\n『今天要玩甚麼好呢？嘻嘻！』`,
        [Locale.sc]: `伊维丝是龙人族的少女，虽然已经活了三百多年，但依然不改孩子心性，个性开朗且亲切。对于男女之间情感一点都不了解，更没有性的概念，天真的伊维丝从别处得知了魔族大军的侵略，本是为了劝说凯萨停止入侵而来，但不知怎么的却和凯萨打成一片，自然而然的成为了凯萨麾下的其中一员。据凯萨的亲信推测，两人异常投缘的原因可能是心理年龄相近……\n\n『今天要玩什么好呢？嘻嘻！』`,
        [Locale.en]: `Iris is part of the Dragoon Clan. Even though she's over 300 years old, she still has the personality of a kid, playful and naive. Having no concept of sex, or man-woman relationships in general, Iris approached Caesar with aims of stopping his constant invasion of the human realm. Realizing she wasn't sure just how she could go about doing that, Iris ended up part of his harem. Maybe it's because they've both got the mental age of a 10 year old...\n\n"What game should we play today? Hehe!"`,
        [Locale.jp]: `アイヴィスは龍人族の少女。すでに300年以上生きているが、子供のような性格でとても明るく誰にでも親切だ。男女間の恋愛感情などは理解できないようで、性に関しても一切の知識が無い。そんな無邪気なアイヴィスが魔族軍の侵略を知ると、シーザーを説得しようとしたがなぜかシーザーの手下になってしまった。シーザーの側近によれば、精神年齢が同じくらいだから気が合ったのかもしれないとのことだ……\n\n『今日は何して遊ぼうかな？ははっ！』`,
        [Locale.kr]: `아이리스는 용족의 소녀이다. 벌써 300년을 살았지만 아직도 어린아이의 심성을 가지고 있으며 활발하고 친근한 성격의 소유자이다. 그녀는 남녀 사이의 감정에 대해 전혀 알지 못하며 이에 관해 어떠한 개념도 없다. 천친난만한 아이리스는 다른 곳에서 마족 대군의 침략 소식을 듣고는 시저에게 침략을 멈추라고 제안하려 했지만 그와의 전투를 겪은 후 시저 휘하의 부하가 되고 만다. 시저 측근의 추측에 의하면 이 둘이 이상하게 서로 통하는 이유는 심리적 연령이 서로 비슷하기 때문이라고 한다......\n\n『오늘은 뭘 하고 놀까나? 히히!』`
    },
    rarity: Rarity.R,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.iris],
    thumbnail: UnitEssence[UnitCode.iris],
    selection: UnitSelection[UnitCode.iris],
    clothes: UnitFullImage[UnitCode.iris],
    tagList: [ 
        TagID.ELEMENT_FIRE, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_SMALL_SIZED, 
        TagID.BREAST_FLAT_TITS, 
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_MORE_POWER,
        TagID.OTHER_AOE,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
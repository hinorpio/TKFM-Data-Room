import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10038: Unit = {
    ID: "10038",
    metaCode: "tyrella",
    prefix: {
        [Locale.tc]: "魔法少女",
        [Locale.sc]: "魔法少女",
        [Locale.en]: "Magical Knight",
        [Locale.jp]: "魔法少女",
        [Locale.kr]: "마법소녀"
    },
    name: {
        [Locale.tc]: "托特拉",
        [Locale.sc]: "托特拉",
        [Locale.en]: "Tyrella",
        [Locale.jp]: "トトラ",
        [Locale.kr]: "토타라"
    },
    abbreviation: {
        [Locale.tc]: [ "托" ],
        [Locale.sc]: [ "托" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `托特拉一直有個夢想，希望能行走於四處，幫助弱勢的人。因此當她發現自己有魔法的天賦時，決定踏上這條路，開始在各地流浪。也開始以魔法美少女之名行走於各處，貫徹自己的夢想。對於功名、利益等等一概沒有什麼興趣，只想要更加努力在自己的夢想之中。勇於挑戰各種事物，不管是任何的狀況，她都無畏無懼。\n\n『以魔法美少女之名，我會懲罰你！』`,
        [Locale.sc]: `托特拉一直有个梦想，希望能行走于四处，帮助弱势的人。因此当她发现自己有魔法的天赋时，决定踏上这条路，开始在各地流浪。也开始以魔法美少女之名行走于各处，贯彻自己的梦想。对于功名、利益等等一概没有什么兴趣，只想要更加努力在自己的梦想之中。勇于挑战各种事物，不管是任何的状况，她都无畏无惧。\n\n『以魔法美少女之名，我会惩罚你！』`,
        [Locale.en]: `Tyrella always had a dream of traveling to every corner of the world and helping those in need. Upon discovering that she was gifted with magic, she decided it was finally time to fulfill her dream. Roaming the world under the title of the Magical Knight, Tyrella is interested in neither fame nor fortune, instead seeking only to work as hard as she can to pursue her dream. Tyrella is fearless and always willing to take on any challenge regardless of how dire the situation may be.\n\n"I will punish you in the name of the Magical Knight!"`,
        [Locale.jp]: `トトラにはずっと夢がある。それは世界を渡り歩いて弱者を助けることだ。そこで自分に魔法の才能があると気づいた時、旅に出る決意をして夢に向かって歩み始めた。そう、魔法少女という名で各地を廻り、自分の夢を貫徹しようとしたのだ。名誉や利益などに一切興味なく、ただ自分の夢の為に努力する。様々なことに果敢に挑戦し、どんな状況でも何も恐れない勇敢な少女なのだ。\n\n『魔法少女の名の下に、お仕置きよ！』`,
        [Locale.kr]: `각지에 있는 모든 약자들에게 도움을 주는 것은 토타라의 꿈이다. 토타라는 자신이 마법에 천부적인 재능이 있다는 것을 발견한 후, 꿈을 꼭 이루겠다고 다짐하며 유랑길에 나섰다. 세계 각지를 돌아다니며 마법소녀의 이름으로 자신의 꿈을 관철하고 있다. 명예, 사리욕을 위해서가 아닌, 오직 자신의 꿈에 충실하려고 노력한다. 어떤 곤란한 상황에 닥치더라도 그녀는 절대 물러서지 않고 용감하게 싸운다.\n\n『마법소녀의 이름으로 널, 용서하지 않겠다!』`
    },
    rarity: Rarity.SR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/07/14",
    essence: UnitEssence[UnitCode.tyrella],
    thumbnail: UnitEssence[UnitCode.tyrella],
    selection: UnitSelection[UnitCode.tyrella],
    clothes: UnitFullImage[UnitCode.tyrella],
    tagList: [
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_ELITE,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_WEAKEN,
        TagID.OTHER_EXPLOSIVENESS,
    ], 
    otherVersion: [ UnitCode.p_tyrella ],
    puzzle: [],
    skillSet: []
}
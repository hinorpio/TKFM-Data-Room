import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10201: Unit = {
    ID: "10201",
    metaCode: "m_momDaphne",
    prefix: {
        [Locale.tc]: "魔法少女",
        [Locale.sc]: "魔法少女",
        [Locale.en]: "Magic MILF",
        [Locale.jp]: "魔法少女",
        [Locale.kr]: "마법소녀"
    },
    name: {
        [Locale.tc]: "達芙妮",
        [Locale.sc]: "达芙妮",
        [Locale.en]: "Daphne",
        [Locale.jp]: "ダフィー",
        [Locale.kr]: "더피"
    },
    abbreviation: {
        [Locale.tc]: [ "魔媽", "魔兔媽" ],
        [Locale.sc]: [ "魔妈", "魔兔妈" ],
        [Locale.en]: [ "M.MomDaphne" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "마더피" ]
    },
    background: {
        [Locale.tc]: `面對邪惡組織的侵擾，原本只是普通家庭主婦的達芙妮，在某人的勸說下自願成為了新的魔法少女。獲得神秘力量的她，在出戰擊倒邪惡組織後，馬上就擄獲了大量的人氣。由於達芙妮散發的溫柔與慈愛能量太過強勢，所有邪惡在她面前都會被輕鬆「淨化」，這讓她成為了邪惡組織最頭痛的存在。雖然也有被人吐槽這年齡應該要被稱作魔法熟女才對，但只要有顆少女心，人人都可以是魔法少女！\n\n『療癒溫暖，柔情滿溢～♪慈愛的兔兔魔法少女登場☆』`,
        [Locale.sc]: `面对邪恶组织的侵扰，原本只是普通家庭主妇的达芙妮，在某人的劝说下自愿成为了新的魔法少女。获得神秘力量的她，在出战击倒邪恶组织后，马上就掳获了大量的人气。由于达芙妮散发的温柔与慈爱能量太过强势，所有邪恶在她面前都会被轻松「淨化」，这让她成为了邪恶组织最头痛的存在。虽然也有被人吐槽这年龄应该要被称作魔法熟女才对，但只要有颗少女心，人人都可以是魔法少女！\n\n『疗癒温暖，柔情满溢～♪慈爱的兔兔魔法少女登场☆』`,
        [Locale.en]: `Faced with the encroaching threat of Evil Inc., Daphne, once just an ordinary housewife, volunteers to become the newest member of the knights after a little "persuasion" from a certain someone. After gaining her mysterious powers and successfully repelling the villainous evildoers, she instantly captures the hearts of the public, skyrocketing in popularity. The energy of kindness and maternal love radiating from Daphne is so overwhelming that all evil is easily "purified" in her presence, making her the ultimate headache for Evil Inc. While some critics tease that at her age, she should be called a "Magic MILF" instead, Daphne believes that as long as you have knightly courage, anyone can join their ranks!\n\n"Healing warmth, overflowing with tenderness~♪ The Bunny magic knight of Compassion makes her stage☆ ☆"`,
        [Locale.jp]: `邪悪な組織の侵攻に立ち向かうべく、ごく普通の主婦だったダフィーは、ある人物の説得を受け、自ら志願して魔法少女となった。神秘の力を手にした彼女は、邪悪な組織との戦いを制した後、瞬く間に多くの人を虜にした。ダフィーが放つ優しさと慈愛のエネルギーはあまりにも強力で、あらゆる邪悪が彼女の前であっさりと「浄化」されてしまう。そのため彼女は、邪悪な組織にとって一番厄介な存在となっている。「その年齢なら魔法少女じゃなくて魔法熟女では？」とツッコまれることもあるが、少女の心さえあれば、誰だって魔法少女になれるのだ！\n\n『ぬくっとキュアキュア、ふわふわキュ～ン♪慈愛のうさうさ魔法少女・見参☆』`,
        [Locale.kr]: `악의 조직의 침략에 맞서, 원래는 평범한 가정주부였던 더피는 누군가의 권유에 따라 자발적으로 마법소녀가 되었다. 신비한 힘을 얻은 그녀는 악의 조직을 쓰러뜨린 후, 곧바로 막대한 인기를 얻게 됐다. 더피가 발산하는 온화함과 자애의 에너지는 너무나도 강력했기에, 모든 사악함은 그녀 앞에서 손쉽게 「정화」되고 말았고, 이는 그녀를 악의 조직에게 있어 가장 까다로운 존재로 등극하게 만들었다. 비록 이 나이대라면 마법 유부녀라고 불려야 하는 것 아니냐는 딴지를 걸어오는 사람도 있지만, 소녀의 마음만 있다면 누구나 마법소녀가 될 수 있다는 사실!\n\n『치유와 따뜻함, 그리고 온정이 가득한~♪ 자애로운 토끼 마법소녀 등장☆』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/05/06",
    essence: UnitEssence[UnitCode.m_momDaphne],
    thumbnail: UnitEssence[UnitCode.m_momDaphne],
    selection: UnitSelection[UnitCode.m_momDaphne],
    clothes: UnitFullImage[UnitCode.m_momDaphne],
    tagList: [],
    otherVersion: [ UnitCode.momDaphne, UnitCode.h_momDaphne ],
    initHP: 4017.6,
    initATK: 920,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.m_momDaphne],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
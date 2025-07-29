import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10039: Unit = {
    ID: "10039",
    metaCode: "lotiya",
    prefix: {
        [Locale.tc]: "千年血族",
        [Locale.sc]: "千年血族",
        [Locale.en]: "Well-Respected Aristocrat",
        [Locale.jp]: "千年の血族",
        [Locale.kr]: "천년의 혈족"
    },
    name: {
        [Locale.tc]: "洛緹亞",
        [Locale.sc]: "洛缇亚",
        [Locale.en]: "Lotiya",
        [Locale.jp]: "ラティヤ",
        [Locale.kr]: "라티아"
    },
    abbreviation: {
        [Locale.tc]: [ "血族" ],
        [Locale.sc]: [ "血族" ],
        [Locale.en]: [ "OG.Lotiya" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `高等血族，用不拗口的話來說就是比一般吸血鬼能夠活更長時間的優良物種。對於活了千年的洛緹亞來說，世俗不斷重演的歷史使她感到厭惡，不願參與攪和並非她愛好和平，只是漠視著一切。洛緹亞體內流淌著傳承數千年的高等血液，即使很長一段時間不攝取也不會有任何影響。比起多數挑嘴的高等血族來說，洛緹亞對血液的需求並不高，對她來說吸血僅是為了維持正常的生理機能。直到她在某次機緣下遇到了魔王凱薩……`,
        [Locale.sc]: `高等血族，用不拗口的话来说就是比一般吸血鬼能够活更长时间的优良物种。对于活了千年的洛缇亚来说，世俗不断重演的历史使她感到厌恶，不愿参与搅和并非她爱好和平，只是漠视着一切。洛缇亚体内流淌着传承数千年的高等血液，即使很长一段时间不摄取也不会有任何影响。比起多数挑嘴的高等血族来说，洛缇亚对血液的需求并不高，对她来说吸血仅是为了维持正常的生理机能。直到她在某次机缘下遇到了魔王凯萨……`,
        [Locale.en]: `A well-respected aristocrat. To put it bluntly, Lotiya is basically a regular vampire who just happens to live much, much longer. Since she's been alive for over 1000 years, she's gotten well sick of the seemingly endless cycle of violence that plagues the realms. It's not that she loves peace or anything, she's just entirely bored of it all. Incredibly pure, high-class blood runs through Lotiya's veins. While most vampires need to feed periodically, Lotiya has no problem going a long, long time without any fresh victims. In fact, Lotiya's own lust for blood is much lower than most of her ancestors. For Lotiya, drinking blood is something of a crude necessity; she'll do it when she needs to, just to keep on living like normal. That is, until she came into contact with a certain Archdemon Caesar...`,
        [Locale.jp]: `高等血族、簡単に言えば、普通の吸血鬼より長く寿命を持つ、優秀な種族である。千年もの間生きてきたラティヤは、歴史を繰り返しているだけの世界に嫌悪感を抱き、何事に対しても無関心で、ただ冷淡に物事を見守るのだ。ラティヤの体内には数千年も継承してきた高等血族の血液が流れている為、長時間血を口にしなくても影響はない。血へのこだわりが強い他の高等血族と比べ、ラティヤはこだわりがあまりない。彼女にとって、血を吸うのはただ生理的欲求を満たすためであるからだ。そんな彼女だが、魔王シーザーに出会ってからは変わり始めたのである。`,
        [Locale.kr]: `고등 혈족을 굳이 일반 벰파이어와 구분해서 말하자면 수명이 조금 더 긴 우성 종족이랄까? 천년을 살아온 라티아에게 있어 반복되는 세상의 역사는 지긋지긋하기만 할 뿐. 어떤 일이든 무관심으로 일관하는 것은 그녀가 평화를 추구해서가 아니라 그냥 만사가 귀찮아서 그런 거다. 라티아의 몸에는 천년 동안 계승되어 온 고등 혈족의 피가 흐르고 있다. 그래서 장시간 피를 섭취하지 않아도 아무런 영향을 주지 않는다. 입이 까다로운 다수의 혈족에 비하면 라티아는 혈액에 대한 욕구가 많지 않은 편이다. 그녀에게 있어서 흡혈은 그저 생리 기능을 유지하기 위한 행동일 뿐. 우연으로 마왕 시저를 만나기 전까지는……`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/08/25",
    essence: UnitEssence[UnitCode.lotiya],
    thumbnail: UnitEssence[UnitCode.lotiya],
    selection: UnitSelection[UnitCode.lotiya],
    clothes: UnitFullImage[UnitCode.lotiya],
    tagList: [
        TagID.ELEMENT_DARK,
        TagID.POSITION_ATTACKER,
        TagID.SPECIES_DEMON,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_GIANT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
    ],
    otherVersion: [ UnitCode.h_lotiya ],
    initHP: 3368,
    initATK: 948.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.lotiya],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
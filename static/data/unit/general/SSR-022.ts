import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10033: Unit = {
    ID: "10033",
    metaCode: "aridya",
    prefix: {
        [Locale.tc]: "食夢",
        [Locale.sc]: "食梦",
        [Locale.en]: "Dreameater",
        [Locale.jp]: "夢喰い",
        [Locale.kr]: "드림이터"
    },
    name: {
        [Locale.tc]: "阿爾蒂雅",
        [Locale.sc]: "阿尔蒂雅",
        [Locale.en]: "Aridya",
        [Locale.jp]: "アルティア",
        [Locale.kr]: "아르티아"
    },
    abbreviation: {
        [Locale.tc]: [ "食夢", "睡蘿", "夢蘿" ],
        [Locale.sc]: [ "食梦", "睡萝", "梦萝" ],
        [Locale.en]: [ "OG.Aridya" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `總是沒睡飽的女孩子…其實是以其他生物的夢境為食的食夢獸！食夢獸能夠自由在虛實狀態切換，並且潛入他人的夢境，更改夢境內容，甚至將人永遠囚禁在夢中。但由於種族天生自帶的詛咒，食夢獸永遠會處於沒睡飽的狀態，自然也就對睡覺以外的一切都不感興趣了。食夢獸的一生往往只會在他人的夢境中不斷漂流。雖然沒有天敵，但因為總是在睡覺，連進食的慾望都很低，更別提說交配了。至今食夢獸數量已經非常稀少，據學者推測，或許在百年之內食夢獸就會徹底滅絕……\n\n『哈姆…好睏…好想睡……』`,
        [Locale.sc]: `总是没睡饱的女孩子…其实是以其他生物的梦境为食的食梦兽！食梦兽能够自由在虚实状态切换，并且潜入他人的梦境，更改梦境内容，甚至将人永远囚禁在梦中。但由于种族天生自带的诅咒，食梦兽永远会处于没睡饱的状态，自然也就对睡觉以外的一切都不感兴趣了。食梦兽的一生往往只会在他人的梦境中不断漂流。虽然没有天敌，但因为总是在睡觉，连进食的欲望都很低，更别提说交配了。至今食梦兽数量已经非常稀少，据学者推测，或许在百年之内食梦兽就会彻底灭绝……\n\n『哈姆…好困…好想睡……』`,
        [Locale.en]: `Aridya's always sleeping. How does she eat, you ask? She feeds on others' dreams, of course--she's a dreameater! Dreameaters can inhabit others' dreams, jumping between them freely, changing their content and even trapping people within their dreams forever. Unfortunately, due to a curse cast on the dreameaters, they are always in a sleep deprived state. Thus, they have very little interest in anything apart from sleeping. Their curse all but forces them to remain within their dreamscapes forever. As a result, dreameaters aren't the biggest social butterflies in the realm. They have no interest in eating normal food, and an even smaller interest in sex. Nowadays there aren't many dreameaters left, and are expected by some to be completely wiped out within the next hundred years or so......\n\n"Mmngg... I'm so sleepy..."`,
        [Locale.jp]: `いつも眠そうな女の子……その正体は他の生き物の夢を糧にする夢喰いだ。夢喰いは精神体と実体を自在に切り替えて、他人の夢に潜り込むことができる。さらには潜り込んだ夢の内容を変えることや、人を夢の中に永遠に閉じ込めることまでできるのだ。種族による生まれつきの呪いによって、夢喰いは四六時中寝不足で、睡眠以外には興味を示さない。その為、夢喰いの一生は他人の夢を漂流しつづけるのみである。また天敵がいないためか、いつも眠っていて、食欲はおろか性欲すらない。今では夢喰いの数は極めて少ない。学者によれば、もしかすると百年も待たずに絶滅する可能性も……\n\n『ふぁむ……眠いの……寝たい……』`,
        [Locale.kr]: `늘 잠이 모자란 소녀의 정체는... 다른 생물의 꿈을 먹고 사는 드림이터! 드림이터는 자유롭게 꿈과 현실 세계를 넘다들며 다른 이의 꿈속에 잠입할 수 있고 심지어 꿈의 내용을 바꾸거나 상대방을 영원히 꿈속에 가둬놓을 수도 있다. 종족의 저주로 드림이터는 영영 잠이 모자란 상태가 되었고 잠자는 것 빼고는 아무런 관심도 없다. 드림이터의 삶은 타인의 꿈에서 끊임없이 유랑한다. 천적이 없지만 늘 잠을 자는 바람에 식욕인 없은 편이며 성욕은 더 말할 나위가 없죠. 따라서 지금까지 드림이터의 수량이 매우 드물다. 생물학자는 드림이터가 100년 안에 멸종될 수 있다고 추측을 했다......\n\n『흠냐…졸려…나 잘래....』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2021/08/25",
    essence: UnitEssence[UnitCode.aridya],
    thumbnail: UnitEssence[UnitCode.aridya],
    selection: UnitSelection[UnitCode.aridya],
    clothes: UnitFullImage[UnitCode.aridya],
    tagList: [
        TagID.ELEMENT_DARK,
        TagID.POSITION_OBSTRUCTER,
        TagID.SPECIES_DEMIHUMAN,
        TagID.BREAST_FLAT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_WEAKEN,
    ],
    otherVersion: [ UnitCode.s_aridya, UnitCode.x_aridya ],
    initHP: 4729.6,
    initATK: 675.2,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.aridya],
    skillSet: []
}
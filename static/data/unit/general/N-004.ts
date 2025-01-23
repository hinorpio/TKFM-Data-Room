import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10904: Unit = {
    ID: "10904",
    metaCode: "manuella",
    prefix: {
        [Locale.tc]: "魔族法師",
        [Locale.sc]: "魔族法师",
        [Locale.en]: "Sorceress",
        [Locale.jp]: "魔族魔導士",
        [Locale.kr]: "마족 마법사"
    },
    name: {
        [Locale.tc]: "瑪努艾拉",
        [Locale.sc]: "玛努艾拉",
        [Locale.en]: "Manuella",
        [Locale.jp]: "マヌエラ",
        [Locale.kr]: "마누엘리"
    },
    abbreviation: {
        [Locale.tc]: [ "瑪努" ],
        [Locale.sc]: [ "玛努" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `瑪努艾拉從懂事起就理解自己所擔任的職務，壞人與反派，她也對此深信不疑。她經常入侵人類領地，並以屠殺人類村民為樂。對瑪努艾來說，只要不是魔族的傢伙都是敵人，就是這麼簡單。\n\n『嘻嘻，今天要殺幾個好呢？』`,
        [Locale.sc]: `玛努艾拉从懂事起就理解自己所担任的职务，坏人与反派，她也对此深信不疑。她经常入侵人类领地，并以屠杀人类村民为乐。对玛努艾来说，只要不是魔族的家伙都是敌人，就是这么简单。\n\n『嘻嘻，今天要杀几个好呢？』`,
        [Locale.en]: `Manuella knew what she wanted to be when she grew up before she could even walk—a badass mofo! She often ran off to the human realm as a teenager and killed humans just for fun. As far as she's concerned, if you're not a demon, you're an enemy.\n\n"Hehe! How many humans should I kill today?"`,
        [Locale.jp]: `魔族魔導士マヌエラは、物心ついた時から完全なるヴィランである。何度も人類の領地に侵入しては、人類を虐殺することで快楽を得ていた。彼女にとって、魔族以外の者は全員敵なのだ。\n\n『フフッ、今日は何人殺そうかなぁ？』`,
        [Locale.kr]: `마누엘라는 악당과 빌런이라는 자신의 임무에 대해 매우 잘 알고 있으며 이에 대해 의심해 본 적이 없다. 그녀는 자주 인간들의 영지에 침입해 마을 사람들을 도살하는 것을 취미로 여긴다. 마누엘라에게 있어, 마족이 아닌 자는 모두 적이다. 아주 간단한 이치이다.\n\n『히히. 오늘은 몇 명을 죽여 볼까나?』`
    },
    rarity: Rarity.N,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.manuella],
    thumbnail: UnitEssence[UnitCode.manuella],
    selection: UnitSelection[UnitCode.manuella],
    clothes: UnitFullImage[UnitCode.manuella],
    tagList: [ 
        TagID.ELEMENT_DARK, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.DEMON_MANUELLA ],
    skillSet: []
}
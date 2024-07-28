import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10015: Unit = {
    ID: "10015",
    metaCode: "juneau",
    prefix: {
        [Locale.tc]: "大將軍",
        [Locale.sc]: "大将军",
        [Locale.en]: "General",
        [Locale.jp]: "大将軍",
        [Locale.kr]: "대장군"
    },
    name: {
        [Locale.tc]: "朱諾安",
        [Locale.sc]: "朱诺安",
        [Locale.en]: "Juneau",
        [Locale.jp]: "ジュノアン",
        [Locale.kr]: "쥬노안"
    },
    abbreviation: {
        [Locale.tc]: [ "將軍", "將", "扶他" ],
        [Locale.sc]: [ "将军", "将", "扶他" ],
        [Locale.en]: [ "OG.Juneau" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `朱諾安是法斯帝國的大將軍，統率著帝國最強部隊。作為將軍的她熟讀兵法、擅於指揮，雖然身居高位也依然沒有放下劍術的訓練，文武雙全的朱諾安在帝國境內擁有很高的人望，是法斯皇帝最為倚賴的重臣。朱諾安一直以來對外都戴著張冷酷的面具，以掩飾她真實的內心以及想法，且對於所有異性的獻媚總是不假辭色，但在她被稱作難攻不落要塞的背後，其實是為了隱藏一個不可告人的祕密……\n\n『將勝利獻給陛下與帝國！』`,
        [Locale.sc]: `朱诺安是法斯帝国的大将军，统率着帝国最强部队。作为将军的她熟读兵法、擅于指挥，虽然身居高位也依然没有放下剑术的训练，文武双全的朱诺安在帝国境内拥有很高的人望，是法斯皇帝最为倚赖的重臣。朱诺安一直以来对外都戴着张冷酷的面具，以掩饰她真实的内心以及想法，且对于所有异性的献媚总是不假辞色，但在她被称作难攻不落要塞的背后，其实是为了隐藏一个不可告人的秘密……\n\n『将胜利献给陛下与帝国！』`,
        [Locale.en]: `Juneau is the Phasi Empire's top general. In charge of their strongest army, she's adept at strategy and the art of war. Highly adept with both a pen and a blade, she's seen as the full package, and the empire has been known to rely on her to bring victory in the toughest of times. Calm, cool and collected, Juneau covers up her true feelings and desires. She's always swift to shoot down any male suitors—but is she just playing 'hard to get', or is she concealing a deep, dark secret...?\n\n"For the empire!"`,
        [Locale.jp]: `将軍ジュノアンはフォス帝国の大将軍。帝国最強の部隊を率いている。将軍として兵法に精通しており、指揮官としての能力も高い。高い地位に就いているにもかかわらず剣術の訓練を怠る事は無く、文武両道のジュノアンは帝国内でも人望が厚く、最も信頼を置かれている重臣である。ジュノアンはいつも冷たく振舞い、内心と感情を隠している。異性の誘いにも気を惹かれることがなく、攻め落とすことのできない要塞と呼ばれる彼女だが、実は誰にも言えない秘密を隠しているのだ…….\n\n『勝利は陛下と帝国のため！』`,
        [Locale.kr]: `쥬노안은 파스제국의 대장군으로서 제국에서 가장 강력한 부대를 지휘하고 있다. 병법과 지휘에 능한 장군인 그녀는 높은 지위에도 불구하고 검술 훈련을 게을리하지 않는다. 문무에 모두 능한 쥬노안은 제국 내에서 높은 명성을 보유하고 있으며, 파스제국 황제의 가장 믿음직스러운 신하이다. 겉으론 언제나 차가운 가면을 쓰고 자신의 속마음을 감추고 있는 쥬노안. 이성의 수작에도 전혀 꿈쩍 않는 그녀는 철벽의 요새로까지 불리지만, 이는 사실 절대 누구에게도 말할 수 없는 비밀을 간직하고 있기 때문이다......\n\n『승리를 황제 폐하와 제국에 바치겠노라!』`
    },
    rarity: Rarity.SR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.juneau],
    thumbnail: UnitEssence[UnitCode.juneau],
    selection: UnitSelection[UnitCode.juneau],
    clothes: UnitFullImage[UnitCode.juneau],
    tagList: [
        TagID.ELEMENT_DARK, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_GIANT_TITS, 
        TagID.CLASS_ELITE, 
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_SUPPORT,
    ], 
    otherVersion: [ UnitCode.m_juneau ],
    puzzle: [],
    skillSet: []
}
import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10094: Unit = {
    ID: "10094",
    metaCode: "geneva",
    prefix: {
        [Locale.tc]: "未知生命體",
        [Locale.sc]: "未知生命体",
        [Locale.en]: "Unknown Organism",
        [Locale.jp]: "未知の生命体",
        [Locale.kr]: "미지의 생명체"
    },
    name: {
        [Locale.tc]: "基貝魯",
        [Locale.sc]: "基贝鲁",
        [Locale.en]: "Geneva",
        [Locale.jp]: "ジベール",
        [Locale.kr]: "키베루"
    },
    abbreviation: {
        [Locale.tc]: [ "基基" ],
        [Locale.sc]: [ "基基" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `跟隨隕石一同墜落，來自比天上更遙遠地方的未知生命。能夠吸收宇宙射線作為活動所需能量，但並不是缺少了宇宙能源就會餓死，只是會大幅的弱體化。自有記憶以來，就一直漂浮在遼闊無際的世界，直到「墜落」後才邂逅了自身以外的生命。有著強大的學習力、體魄、適應力，以及擬態能力，現在的樣貌就是擬態的成果，即使是未知的事物也能快速掌握。接觸了自身以外的生命後，基貝魯理解了何謂寂寞與孤單，一旦孤身一人就會感到焦慮。如果作為侵略者出現，對原物種帶來的威脅將是毀滅性的。不過幸運的是，她是個本性善良的孩子。\n\n『哼哼哼~哼哼哼~今天要去找誰玩好呢~』`,
        [Locale.sc]: `跟随陨石一同坠落，来自比天上更遥远地方的未知生命。能够吸收宇宙射线作为活动所需能量，但并不是缺少了宇宙能源就会饿死，只是会大幅的弱体化。自有记忆以来，就一直漂浮在辽阔无际的世界，直到「坠落」后才邂逅了自身以外的生命。有着强大的学习力、体魄、适应力，以及拟态能力，现在的样貌就是拟态的成果，即使是未知的事物也能快速掌握。接触了自身以外的生命后，基贝鲁理解了何谓寂寞与孤单，一旦孤身一人就会感到焦虑。如果作为侵略者出现，对原物种带来的威胁将是毁灭性的。不过幸运的是，她是个本性善良的孩子。\n\n『哼哼哼~哼哼哼~今天要去找谁玩好呢~』`,
        [Locale.en]: `Geneva comes from far, far away, crashing down to the Demon Realm on a comet. She absorbs cosmic rays as energy, making her super strong, becoming much weaker without them. As far as she can remember, she lived a solitary live somewhere in the cosmos, only breaking from that long routine after crashing down on this foreign planet. With a seemingly limitless ability to learn and adapt, Geneva quickly morphed her own appearance to resemble a local. No one knows what she actually looks like... Now, however, after crashing into the realm and living among others, Geneva has come to understand the concept of loneliness, and has come to dread this feeling. So here we have a super-strong extraterrestrial, one who can learn and adapt to anything and eats cosmic rays for breakfast. If Geneva came as an invader, the planet would surely be doomed. Good thing she's friendly!\n\n"Heheheh~ Who wantsta play with me today?"`,
        [Locale.jp]: `隕石の墜落とともに地上に降り立った未知の生命体。宇宙線をエネルギーに活動しているため、地上では弱体化している。物心ついたころから果ての無い宇宙をさまよっており、「墜落」がきっかけで初めて自分以外の生命体に遭遇した。大変優れた学習能力と擬態能力を持っており、現在の見た目も擬態によるものである。強靭な肉体と優れた適応能力を持つ彼女は、宇宙線を吸収すると無限に身体を強化できるのだ。自分以外の生命体と出会うと、ジベールは寂しさと孤独とは何かを理解し、一人でいると寂しいと感じるようになった。彼女が侵略者として出現したら、その脅威は計り知れない。しかし幸運なことに、彼女は心の優しい子だったのだ。\n\n『ふんふふ~ん、今日は誰と遊ぼうかな~』`,
        [Locale.kr]: `미지의 생명체－키베루. 운석의 추락과 함께 지상에 내려온 미지의 생명체우주 방사선을 흡수해 활동에 필요한 에너지로 사용할 수 있다. 또한 우주 에너지가 부족하다고 굶어 죽는 것은 아니지만 부족하게 될 경우 대폭 약화되고 만다.철들 무렵부터 줄곧 혼자 광활하고 무한한 우주를 떠돌아다녔기 때문에, 추락한 후에야 처음으로 자신 이외의 생명체를 만나게 됐다.매우 뛰어난 학습 능력과 의태 능력을 가지고 있으며 현재의 외형도 의태화 된 모습이다.강인한 육체와 뛰어난 학습 능력, 나아가 적응 능력까지 갖춘 그녀는 우주 방사선을 흡수하며 자신의 신체를 무한하게 강화할 수 있다.자신 이외의 생명체를 접하게 된 키베루는 외로움과 고독을 알게 되었고 혼자 있으면 불안감을 느끼게 되었다.만일 그녀가 침략자였다면 그 별 생명체에게 아주 큰 위협으로 다가왔겠지만다행스럽게도 마음씨는 누구보다 고운 아이었다.\n\n『후후후~오늘은 누구랑 놀까~』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/09/07",
    essence: UnitEssence[UnitCode.geneva],
    thumbnail: UnitEssence[UnitCode.geneva],
    selection: UnitSelection[UnitCode.geneva],
    clothes: UnitFullImage[UnitCode.geneva],
    tagList: [],
    otherVersion: [],
    initHP: 3635.2,
    initATK: 969.6,
    puzzle: [],
    outfits: [],
    skillSet: []
}
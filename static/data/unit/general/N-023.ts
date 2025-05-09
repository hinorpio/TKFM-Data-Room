import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10924: Unit = {
    ID: "10924",
    metaCode: "mumu",
    prefix: {
        [Locale.tc]: "木乃伊",
        [Locale.sc]: "木乃伊",
        [Locale.en]: "Mummy",
        [Locale.jp]: "ミイラ",
        [Locale.kr]: "미이라"
    },
    name: {
        [Locale.tc]: "穆穆",
        [Locale.sc]: "穆穆",
        [Locale.en]: "Mu-Mu",
        [Locale.jp]: "ムム",
        [Locale.kr]: "무무"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `雖然看起來是柔弱的少女模樣，但穆穆可是貨真價實的不死生物。身為木乃伊族的她，不只力大無窮，還能夠操控繃帶綑綁敵人。即使身軀被分離了，只要接起來也能夠立刻再生。若是因為外表而輕忽了她，可是會大吃苦頭的！\n\n『啊，繃帶又發潮了！』`,
        [Locale.sc]: `虽然看起来是柔弱的少女模样，但穆穆可是货真价实的不死生物。身为木乃伊族的她，不只力大无穷，还能够操控绷带綑绑敌人。即使身躯被分离了，只要接起来也能够立刻再生。若是因为外表而轻忽了她，可是会大吃苦头的！\n\n『啊，绷带又发潮了！』`,
        [Locale.en]: `Her girlish appearance serves as a foil to her endurance; she is truly a steadfast creature. As a mummy folk, she is both strong and adept at controlling her bandages. Even when severed into pieces, her body is capable of regeneration by rejoining its parts. Don't underestimate her for her raggy appearance or you'll regret it!\n\n"Oops! My bandages have knotted up again!"`,
        [Locale.jp]: `見た目はか弱い少女だが、ムムは正真正銘のアンデッドだ。ミイラ族の彼女は莫大な力を有しているだけではなく、敵を包帯でぐるぐる巻きにすることだってできるのだ。また、身体がバラバラになっても、すぐにくっ付いて再生できる。見た目だけで甘く見ると、痛い目に遭うぞ！\n\n『あっ、包帯また湿気ちゃった！』`,
        [Locale.kr]: `유약해 보이는 소녀의 모습을 하고 있지만, 무무는 사실 언데드이다. 미라인 그녀는 무궁무진한 힘을 지녔을 뿐만 아니라, 붕대로 적을 묶어버릴 수도 있다. 몸이 분리되더라도 금방 재생할 수도 있다. 겉모습만 보고 그녀를 얕보다간 큰코다치기 십상!\n\n『앗, 붕대가 또 눅눅해졌어!』`
    },
    rarity: Rarity.N,
    element: Element.DARK,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2023/12/13",
    essence: UnitEssence[UnitCode.mumu],
    thumbnail: UnitEssence[UnitCode.mumu],
    selection: UnitSelection[UnitCode.mumu],
    clothes: UnitFullImage[UnitCode.mumu],
    tagList: [ 
        TagID.ELEMENT_DARK, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_HOT_TITS,
        TagID.CLASS_SOLDIER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_INTERFERENCE,
        TagID.OTHER_SURVIVABILLITY,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.DEMON_MUMU ],
    outfits: [],
    skillSet: []
}
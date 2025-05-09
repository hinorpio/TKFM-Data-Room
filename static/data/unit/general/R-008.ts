import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10808: Unit = {
    ID: "10808",
    metaCode: "shiraka",
    prefix: {
        [Locale.tc]: "暗黑精靈",
        [Locale.sc]: "暗黑精灵",
        [Locale.en]: "Dark Elf",
        [Locale.jp]: "ダークエルフ",
        [Locale.kr]: "다크엘프"
    },
    name: {
        [Locale.tc]: "索拉卡",
        [Locale.sc]: "索拉卡",
        [Locale.en]: "Shiraka",
        [Locale.jp]: "ソラカ",
        [Locale.kr]: "소라카"
    },
    abbreviation: {
        [Locale.tc]: [ "暗精" ],
        [Locale.sc]: [ "暗精" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `索拉卡年幼時就曾經受過人類迫害，差點被奪去了處女。對人類的不信任以及暗黑精靈的種族因素，索拉卡不僅討厭人類，對其他族群的精靈或矮人等種族也異常排斥，最後她甚至產生了所有人都想要染指自己的錯覺。索拉卡有著姣好的外貌，但從未想要利用自己的美色爭取利益，然而對男性無比排斥的她最後卻反常的加入魔王軍，選擇為傳聞中最好色的魔王凱薩效力……\n\n『你、你也和其他人一樣，在覬覦我的身體對吧……！』`,
        [Locale.sc]: `索拉卡年幼时就曾经受过人类迫害，差点被夺去了处女。对人类的不信任以及暗黑精灵的种族因素，索拉卡不仅讨厌人类，对其他族群的精灵或矮人等种族也异常排斥，最后她甚至产生了所有人都想要染指自己的错觉。索拉卡有着姣好的外貌，但从未想要利用自己的美色争取利益，然而对男性无比排斥的她最后却反常的加入魔王军，选择为传闻中最好色的魔王凯萨效力……\n\n『你、你也和其他人一样，在觊觎我的身体对吧……！』`,
        [Locale.en]: `Shiraka was assaulted by humans when she was younger, almost losing her virginity in the process. This experience, coupled with her Dark Elf lineage, has caused her to not only detest humans, but also deeply mistrust other types of elves, dwarves, and a whole slew of other races. There's no denying Shiraka's beauty, but she's never wanted to use that beauty to her advantage, going so far as to push away all men. In a turn of events, then, after hearing rumors that Archdemon Caesar is the strongest man ever to walk the earth, Shiraka chooses to serve him as a part of his harem...\n\n"You're just like everyone else! You just want my body, don't you!?"`,
        [Locale.jp]: `ソラカは小さい頃人類に迫害を受け、危うく処女を奪われるとこだった。そのため人類を信頼しておらず、またダークエルフということもあり、ほかの種族のエルフや小人を非常に厭っている。さらには誰しもが彼女に手を出したいのではないかと疑っている。ソラカのルックスは美しいが、それをうまく利用しようとしたことはない。男が嫌いな彼女だが最後は魔王軍に加わり、最も性欲が強いと噂の魔王シーザーを選んだのだ……\n\n『あなたもアタシのカラダが目当てなんでしょ……っ！』`,
        [Locale.kr]: `소라카는 어렸을 때 인간에게 박해를 받아 하마터면 처녀성을 잃을 뻔했었다. 인간에 대한 불신과 다크 엘프라는 종족의 특성 때문에 소라카는 인간들을 싫어할 뿐만 아니라 다른 엘프나 난쟁이 같은 종족에 대해서도 이상한 증오심에 불타 있다. 결국 그녀는 그 누구든지 자신을 범하려 한다는 착란에 빠지게 되었다. 예쁜 외모를 가지고 있지만 한 번도 그것을 이용해 이익을 취하려는 생각은 해본 적이 없으며 남자에 대해 이상할 정도의 적대감에 불타 있는 그녀는 예상을 깨고 마왕 군에 입대해 그 누구보다도 호색한이라고 소문이 자자한 마왕 시저를 위해 싸우기로 한다......\n\n『너, 너도 다른 사람들하고 똑같아. 내 몸을 훔쳐보고 있는 것 맞지......!』`
    },
    rarity: Rarity.R,
    element: Element.DARK,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.shiraka],
    thumbnail: UnitEssence[UnitCode.shiraka],
    selection: UnitSelection[UnitCode.shiraka],
    clothes: UnitFullImage[UnitCode.shiraka],
    tagList: [ 
        TagID.ELEMENT_DARK, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.OTHER_WEAKEN,
    ],
    otherVersion: [],
    puzzle: [],
    outfits: [],
    skillSet: []
}
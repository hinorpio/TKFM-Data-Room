import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10047: Unit = {
    ID: "10047",
    metaCode: "didi",
    prefix: {
        [Locale.tc]: "夜星",
        [Locale.sc]: "夜星",
        [Locale.en]: "Night Star",
        [Locale.jp]: "夜星",
        [Locale.kr]: "밤의 별"
    },
    name: {
        [Locale.tc]: "狄",
        [Locale.sc]: "狄",
        [Locale.en]: "Didi",
        [Locale.jp]: "狄",
        [Locale.kr]: "테키"
    },
    abbreviation: {
        [Locale.tc]: [ "夜星" ],
        [Locale.sc]: [ "夜星" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `狄原本待在雙蛇軍團，經過數年磨練後，發覺自己與團內的理念不合因此決定離開。隨後以「夜星」之名，作為一名自由傭兵獨自過活。雖然會篩選接洽的任務內容，不喜歡太過無趣的委託。但是因為自己濫好人的個性，總是會因為惻隱之心而接下不必要的委託，讓自己相當勞累。某天，因為一場意外的遭遇，她接下了一個足以改變她人生的委託。那則委託的內容是，暗殺魔王凱薩。\n\n『總之，這個委託就交給我吧。以夜星之名，會俐落地完成這委託的。』`,
        [Locale.sc]: `狄原本待在双蛇军团，经过数年磨练后，发觉自己与团内的理念不合因此决定离开。随后以「夜星」之名，作为一名自由佣兵独自过活。虽然会筛选接洽的任务内容，不喜欢太过无趣的委托。但是因为自己滥好人的个性，总是会因为恻隐之心而接下不必要的委托，让自己相当劳累。某天，因为一场意外的遭遇，她接下了一个足以改变她人生的委托。那则委托的内容是，暗杀魔王凯萨。\n\n『总之，这个委托就交给我吧。以夜星之名，会俐落地完成这委托的。』`,
        [Locale.en]: `Didi originally joined the Caduceous Legion and trained with them for several years before she found that her values clashed with theirs and left. Thereafter she lived as a free mercenary by the name of "Night Star". Though she selects her missions carefully, she never enjoys taking boring assignments. But because of her people-pleasing personality, she's always taking on unnecessary assignments out of compassion, leaving her rather exhausted. Thus, she decided to take on a big mission that would let her rest for a while after. The objective of her mission was to assassinate Caesar.\n\n"Anyway, just leave this quest to me. This case is no match for the Night Star's agility."`,
        [Locale.jp]: `狄(てき)はもともとカドゥケウス軍団にいたが、軍団の理念に賛同できず離れることに。その後は自分を『夜星』と名乗り、一人の傭兵となった。つまらない仕事を引き受けたくないがために、仕事を選んではいるが、お人好しな性格が原因で、引き受けたくない仕事まで引き受け、結局自分が疲れることに。ある日とある出来事に遭遇したことがきっかけで、彼女のその後の人生を大きく変える依頼に出会った。その依頼こそがシーザー暗殺任務である。\n\n『とりあえずこの仕事は任せて。夜星の名において、完璧に遂行するから』`,
        [Locale.kr]: `테키는 몇 년 동안 카두케우스 군단에 머물면서 실력을 갈고닦았지만 군단의 이념에 수긍하지 못하고 군단을 떠났다. 그 후 그녀는 『밤의 별』이라는 이름으로 자유 용병의 삶을 살았다. 지루한 임무를 맡기 싫어해서 맡을 임무를 선별할 때는 신중하다. 하지만 남의 부탁을 거절 못하는 성격이다 보니, 불쌍한 사람을 보면 측은한 마음에 자잘한 임무까지 들어주고 과로로 힘들어한다. 어느 날 예상치 못한 일로 그녀는 자신의 인생을 송두리째 바꾸게 될 의뢰를 수락하게 되는데, 그 임무는 바로 '시저 암살'이었다.\n\n『어쨌든 그 의뢰는 내게 맡겨둬. 밤의 별이란 이름을 걸고 완벽하게 해결해줄 테니까.』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/10/12",
    essence: UnitEssence[UnitCode.didi],
    thumbnail: UnitEssence[UnitCode.didi],
    selection: UnitSelection[UnitCode.didi],
    clothes: UnitFullImage[UnitCode.didi],
    tagList: [
        TagID.ELEMENT_WIND,
        TagID.POSITION_ATTACKER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.CLASS_LEADER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_WEAKEN,
    ],
    otherVersion: [],
    initHP: 3425.6,
    initATK: 932.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.didi],
    skillSet: []
}
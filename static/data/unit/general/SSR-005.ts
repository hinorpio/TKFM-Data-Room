import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10005: Unit = {
    ID: "10005",
    metaCode: "lana",
    prefix: {
        [Locale.tc]: "矮人王",
        [Locale.sc]: "矮人王",
        [Locale.en]: "Dwarf Queen",
        [Locale.jp]: "小人王",
        [Locale.kr]: "난쟁이의 왕"
    },
    name: {
        [Locale.tc]: "蘭兒",
        [Locale.sc]: "兰儿",
        [Locale.en]: "Lana",
        [Locale.jp]: "ラン",
        [Locale.kr]: "란"
    },
    abbreviation: {
        [Locale.tc]: [ "矮人", "普矮", "解矮", "矮", "腫瘤" ],
        [Locale.sc]: [ "矮人", "普矮", "解矮", "矮", "肿瘤" ],
        [Locale.en]: [ "OG.Lana" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `石龍一族是矮人國度世代傳承的王，蘭兒‧石龍繼承了矮人王的血統，力大無窮，手持利斧的她即使是最堅固的黑曜石都能輕鬆劈開。蘭兒是矮人族中的最強者，個性開朗且直率，她對自己的實力充滿自信，比起傳說中邪惡的魔族，蘭兒更討厭總是藉故收取苛刻稅收，壓榨矮人的法斯帝國。當族軍隊兵臨城下，決定親自帶軍出征的蘭兒與凱薩在戰場上遭遇，而兩人單挑的結果是……\n\n『比力氣的話我是不會輸給任何人的！』`,
        [Locale.sc]: `石龙一族是矮人国度世代传承的王，兰儿‧石龙继承了矮人王的血统，力大无穷，手持利斧的她即使是最坚固的黑曜石都能轻松劈开。兰儿是矮人族中的最强者，个性开朗且直率，她对自己的实力充满自信，比起传说中邪恶的魔族，兰儿更讨厌总是借故收取苛刻税收，压榨矮人的法斯帝国。当族军队兵临城下，决定亲自带军出征的兰儿与凯萨在战场上遭遇，而两人单挑的结果是……\n\n『比力气的话我是不会输给任何人的！』`,
        [Locale.en]: `The Slone clan has ruled Smitheld, Kingdom of the Dwarves, for generations, with Lana Slone as its newest queen. She's also the fiercest warrior in all the land, able to smash a slab of the toughest obsidian to bits with her trusty axe! She knows she's strong, too! Lana overflows with confidence, and her to-the-point, take-no-crap attitude backs it up! Smitheld is under tight control by the Phasi Empire, and there's none Lana Sloan hates more than those slimy humans—she hates them even more than the demons! And yet, under attack by Caesar's forces, Lana decides to take matters into her own hands, meeting the archdemon himself face to face on the battlefield...\n\n"I'm stronger than the lot of ya, combined!"`,
        [Locale.jp]: `石龍一族は小人の国の王族。ラン・石龍は小人王の血統を受け継いでいる。そんな彼女は力が強く、手にもつ斧で固い黒曜石ですら軽々と割ってしまう。ランは小人族最強を誇り、明るく素直な性格で、自分の実力に溢れんばかりの自信を持っている。ランは伝説の邪悪な魔族よりも、何らかの理由をつけて税を搾取するフォス帝国の事を嫌っている。自ら軍隊を率いて出征したランは戦場でシーザーと遭遇し、一対一で勝負することに……\n\n『力比べならだれにも負けないんだから！』`,
        [Locale.kr]: `스톤 드래곤 가문은 난쟁이 왕국을 대대로 다스려온 왕족이다. 스톤 드래곤‧란은 난쟁이 왕의 혈통을 이어받아 무한한 힘을 지녔으며, 날카로운 도끼를 들고 있는 그녀는 가장 단단한 흑요석도 단숨에 베어버릴 수 있다. 란은 난쟁이족의 최강자로, 매사에 긍정적이고 솔직한 성격을 지녔으며 자신의 실력에 대해 자신감이 충만하다. 란은 사악하다고 전해지는 마족보다는 언제나 무거운 세금을 징수해 난쟁이족을 괴롭히는 파스제국을 오히려 더 싫어한다. 마족의 군대가 성문 밖을 포위해 직접 군대를 이끌고 출정한 란은 전장에서 시저와 한판 대결을 펼치는데......\n\n『힘으로 대결한다면 난 누구에게도 지지 않아!』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.lana],
    thumbnail: UnitEssence[UnitCode.lana],
    selection: UnitSelection[UnitCode.lana],
    clothes: UnitFullImage[UnitCode.lana],
    tagList: [
        TagID.ELEMENT_WATER,
        TagID.POSITION_ATTACKER,
        TagID.SPECIES_DEMIHUMAN,
        TagID.BODY_SMALL_SIZED,
        TagID.BREAST_FLAT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
        TagID.OTHER_MORE_POWER,
    ],
    otherVersion: [ UnitCode.x_lana, UnitCode.ny_lana, UnitCode.o_lana ],
    initHP: 3763.2,
    initATK: 849.6,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.lana],
    skillSet: []
}
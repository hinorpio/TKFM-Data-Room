import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10066: Unit = {
    ID: "10066",
    metaCode: "anjelica",
    prefix: {
        [Locale.tc]: "千咒魔女",
        [Locale.sc]: "千咒魔女",
        [Locale.en]: "Enchantress",
        [Locale.jp]: "千呪の魔女",
        [Locale.kr]: "천주의 마녀"
    },
    name: {
        [Locale.tc]: "安西莉卡",
        [Locale.sc]: "安西莉卡",
        [Locale.en]: "Anjelica",
        [Locale.jp]: "アンジェリカ",
        [Locale.kr]: "안젤리카"
    },
    abbreviation: {
        [Locale.tc]: [ "千咒", "魔女", "老師" ],
        [Locale.sc]: [ "千咒", "魔女", "老师" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `安西莉卡是活了千年以上，窮極魔道的魔法師。跨出常人範疇的她，已經不再是人類，而是名為「魔女」的種族。對於魔法的渴求以及好奇心，讓安西莉卡致力於收集魔導書以及遺失的古代魔法。她非常樂意將這些知識分享出去，而不是單純的收藏。唯有讓所有魔法師的水平提升，才有可能誕生更多嶄新的魔法。安西莉卡渴求於一切與魔法相關的知識，並熱衷於創新，在許多地方被視為魔道上的先驅被崇敬。然而在安西莉卡看來，她僅只是執念於魔法，專注於魔法，社會適應不良的求道者罷了。\n\n『這裡只是通往魔法極致的半途，不要在此駐足。』`,
        [Locale.sc]: `安西莉卡是活了千年以上，穷极魔道的魔法师。跨出常人范畴的她，已经不再是人类，而是名为「魔女」的种族。对于魔法的渴求以及好奇心，让安西莉卡致力于收集魔导书以及遗失的古代魔法。她非常乐意将这些知识分享出去，而不是单纯的收藏。唯有让所有魔法师的水平提升，才有可能诞生更多崭新的魔法。安西莉卡渴求于一切与魔法相关的知识，并热衷于创新，在许多地方被视为魔道上的先驱被崇敬。然而在安西莉卡看来，她仅只是执念于魔法，专注于魔法，社会适应不良的求道者罢了。\n\n『这里只是通往魔法极致的半途，不要在此驻足。』`,
        [Locale.en]: `Anjelica has lived for over a thousand years as a magician thoroughly versed in the dark arts. Having transcended normal categorizations, she's no longer even human, having become a demonic enchantress. Ever curious and hungering for more knowledge of sorcery, Anjelica devotes herself to collecting magical tomes and lost and ancient wizarding ways. More than just a simple collector, she's also delighted to be able to share what she knows. Only by raising the game of the whole world of magicians can more brand-new magicks be born. Anjelica thirsts for knowledge of anything and everything magical and enchanted, and craves for innovation. She's revered all over as a pioneer of the dark arts. The way she sees it, however, she's just a social misfit with a fanatical interest in magic.\n\n"We're only halfway to the summits of sorcery. We can't stop here."`,
        [Locale.jp]: `アンジェリカは千年以上も生きる魔道を極めた魔女である。常人の域を超えた彼女はもう人間ではなく、魔女と呼ばれるようになった。魔法に対する好奇心から、アンジェリカは魔導書や失われた古代魔法を集めている。ただ単純に集めているのでなく、魔導書で得た知識を共有することによって、魔術師のレベルが上がり、新たな魔法が生まれる可能性があると考えているためだ。魔法に関する知識を貪欲に求め、革新をもたらすアンジェリカは魔法界の先駆者として各地で尊敬されている。しかし、彼女にとって魔法に執着するだけの彼らは社会不適合の求道者に過ぎない。\n\n『これは魔法を極める道の途中に過ぎない。こんなところで立ち止まってられないわ』`,
        [Locale.kr]: `안젤리카는 천 년 이상 살아온 극악무도한 마법사다. 인간의 범주를 한참 넘어선 그녀는 더 이상 인간이 아닌 마녀라는 존재에 더욱 가까웠다. 마법에 대한 갈증과 호기심으로 가득한 안젤리카는 마법서와 잃어버린 고대 마법을 수집하는 데 주력한다. 그녀는 단순히 지식을 수집할 뿐 만아니라 기꺼이 다른 이들과 공유하기도 한다. 모든 마법사의 수준이 높아져야 새로운 훌륭한 마법이 탄생할 수 있다고 생각하기 때문이다. 마법에 관한 모든 지식을 갈구하며 혁신에 열을 올리는 안젤리카는 여러 곳에서 마법사 세계의 선구자로 숭배받는다. 하지만 막상 본인은 그저 마법에 과도하게 집착하는 사회 부적응자에 지나지 않는다고 생각하고 있다.\n\n『아직 멀었습니다, 마법의 경지를 위한 여정은 이제 시작이니까.』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/08/24",
    essence: UnitEssence[UnitCode.anjelica],
    thumbnail: UnitEssence[UnitCode.anjelica],
    selection: UnitSelection[UnitCode.anjelica],
    clothes: UnitFullImage[UnitCode.anjelica],
    tagList: [
        TagID.ELEMENT_DARK,
        TagID.POSITION_ATTACKER,
        TagID.CLASS_LEADER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
        TagID.OTHER_MORE_POWER,
    ],
    otherVersion: [],
    initHP: 3432,
    initATK: 931.2,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.anjelica],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
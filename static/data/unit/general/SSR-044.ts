import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10050: Unit = {
    ID: "10050",
    metaCode: "f_caesar",
    prefix: {
        [Locale.tc]: "異界",
        [Locale.sc]: "异界",
        [Locale.en]: "Otherworld",
        [Locale.jp]: "異世界",
        [Locale.kr]: '이세계'
    },
    name: {
        [Locale.tc]: "凱薩",
        [Locale.sc]: "凯萨",
        [Locale.en]: "Caesar",
        [Locale.jp]: "シーザー",
        [Locale.kr]: "시저"
    },
    abbreviation: {
        [Locale.tc]: [ "女凱", "異凱", "凱" ],
        [Locale.sc]: [ "女凯", "异凯", "凯" ],
        [Locale.en]: [ "F.Caesar", "F.Caez", "Caez" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "뷰저" ]
    },
    background: {
        [Locale.tc]: `侵略、征服，將眼中所見之物通通占為己有。破壞、掠奪，阻擋其稱霸之路者終將迎來毀滅。儘管在征服人間界時碰上了一點小變故，但那通通不要緊。不管發生了什麼事，她的目標都不會改變。她－就是為了征服全世界而生的強者，魔王凱薩。\n\n『余的東西就是余的東西，你的東西也是余的東西，所以少說廢話，快向余俯首稱臣！』`,
        [Locale.sc]: `侵略、征服，将眼中所见之物通通占为己有。破坏、掠夺，阻挡其称霸之路者终将迎来毁灭。尽管在征服人间界时碰上了一点小变故，但那通通不要紧。不管发生了什么事，她的目标都不会改变。她－就是为了征服全世界而生的强者，魔王凯萨。\n\n『余的东西就是余的东西，你的东西也是余的东西，所以少说废话，快向余俯首称臣！』`,
        [Locale.en]: `Invade, conquer, take everything you see for yourself. Destroy, devastate, don't let anyone else stand in your way. Even if you run into some setbacks, don't let that stop you. Doesn't matter what happens, keep fighting towards your goal. Her entire existence boils down to a single word - dominate. She is Archdemon Caesar.\n\n"What's mine is mine, what's yours is also mine... so shut up and give up already!"`,
        [Locale.jp]: `侵略、征服……目に入ったものはすべて自分の物にしてしまう。破壊、略奪……邪魔するものは皆殺し。人間界の侵略で意外な出来事に遭遇したが、心配はご無用。何が起ころうとも彼女の目的は変わらない。そう、彼女こそが世界征服のために生まれた強者、魔王シーザーだ。\n\n『私の物は私の物、あんたの物も私の物。例外はない！』`,
        [Locale.kr]: `침략, 정복. 눈앞에 보이는 모든 것을 자신의 것으로 만든다. 파괴, 약탈. 자신을 가로막는 모든 것들을 궤멸시킨다. 인간계 정복 과정에서 약간의 사고가 일어나긴 했지만 상관없다. 그렇다고 해서 그녀의 목표가 변하는 건 아니기 때문에... 그녀가 바로, 전세계를 정복하기 위해 태어난 마왕 시저.\n\n『내것도 내것이고 니것도 내것이다. 그러니까 헛소리 말고 당장 머리를 조아려라!』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2022/03/30",
    essence: UnitEssence[UnitCode.f_caesar],
    thumbnail: UnitEssence[UnitCode.f_caesar],
    selection: UnitSelection[UnitCode.f_caesar],
    clothes: UnitFullImage[UnitCode.f_caesar],
    tagList: [],
    otherVersion: [ UnitCode.n_caesar, UnitCode.s_caesar, UnitCode.ni_caesar ],
    initHP: 0,
    initATK: 0,
    puzzle: [ PuzzleCode.EVENT_2023_CNY_1 ],
    outfits: [],
    skillSet: []
}
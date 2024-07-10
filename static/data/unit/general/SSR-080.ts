import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10113: Unit = {
    ID: "10113",
    metaCode: "n_caesar",
    prefix: {
        [Locale.tc]: "嬌蠻兇護",
        [Locale.sc]: null,
        [Locale.en]: "Tsundere Nurse",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "凱薩",
        [Locale.sc]: null,
        [Locale.en]: "Caesar",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "護凱" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "來自異世界的嬌小魔王，自從來到這個世界之後，就整天無所事事的悠哉過活。「這種日子太無聊了，余想要做點更刺激有趣的事！」正好那個總是被自己欺負的貓娘向自己提出了熱烈的請求，身為魔王，偶爾還是要回應一下僕人的願望。換上純白的制服，拿起針具，來自異世界的護士魔王向著病人們冷冷發笑。他們究竟能否逃過魔王的『治療』，成功康復出院呢。\n\n『打針？哼，太簡單了，反正只要朝屁股扎進去就對了吧。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/05/10",
    essence: UnitEssence[UnitCode.n_caesar],
    thumbnail: UnitEssence[UnitCode.n_caesar],
    selection: UnitSelection[UnitCode.n_caesar],
    clothes: UnitFullImage[UnitCode.n_caesar],
    tagList: [],
    otherVersion: [ UnitCode.f_caesar ],
    puzzle: [],
    skillSet: []
}
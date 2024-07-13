import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10135: Unit = {
    ID: "10135",
    metaCode: "w_mesmiia",
    prefix: {
        [Locale.tc]: "偶像經紀人",
        [Locale.sc]: null,
        [Locale.en]: "Idol Agent",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "梅絲米奈雅",
        [Locale.sc]: null,
        [Locale.en]: "Mesmiia",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "風蛇" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "身為蛇女之后，就該坐擁金山銀山，享受榮華富貴和凡人的崇拜。只可惜，雖然有這樣的夢想，但卻沒有相對應的腦袋。窮困潦倒的梅絲米奈雅，某天意外和魔導人偶星空奈奈美相遇。兩人各取所需，一拍即合，於是，專屬於少女偶像星空奈奈美的超級經紀人梅絲米奈雅誕生了。只不過，名義上經紀人，但因為對方實在太能幹的關係，所以梅絲米奈雅其實也沒做什麼事，反而還因為合作拿到了很多分成，並以此買了大量的奢華服飾和戒指項鍊。雖然她完全沒發現自己身上的那些珠寶和包包其實都是便宜貨，但那也沒關係。因為她現在可是，超級有錢的蛇女之后梅絲米奈雅大人！\n\n『金錢就是力量，所以現在的妾身就是無敵的，哇哈哈哈！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/02/05",
    essence: UnitEssence[UnitCode.w_mesmiia],
    thumbnail: UnitEssence[UnitCode.w_mesmiia],
    selection: UnitSelection[UnitCode.w_mesmiia],
    clothes: UnitFullImage[UnitCode.w_mesmiia],
    tagList: [],
    otherVersion: [ UnitCode.mesmiia ],
    puzzle: [],
    skillSet: []
}
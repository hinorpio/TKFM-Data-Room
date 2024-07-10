import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10025: Unit = {
    ID: "10025",
    metaCode: "i_iblis",
    prefix: {
        [Locale.tc]: "偶像",
        [Locale.sc]: null,
        [Locale.en]: "Idol",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "伊布力斯",
        [Locale.sc]: null,
        [Locale.en]: "Iblis",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "偶伊" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "突如其然出現的諾艾莉擄獲了大量的民眾，讓民眾們沉溺於追星無心工作。既然如此，就只能推出新的偶像與她對抗了！貴族是能夠吸引他人追隨，並且高高在上的存在，而這一點偶像也是一樣的。自認為魔界未來的領袖，天生的領導者，魔王伊布力斯在凱薩的一時興起下被相中成為了魔界的代表。雖然整件事簡直莫名其妙，但既然被推選成為偶像，以伊布力斯好勝的性格，要做自然就要做到最好！好勝心數一數二強的伊布力斯為了拯救魔界的未來，正式出道！\n\n『獻上你們的忠誠，然後跪拜著欣賞本魔王的歌聲及曼妙舞姿吧！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2021/02/03",
    essence: UnitEssence[UnitCode.i_iblis],
    thumbnail: UnitEssence[UnitCode.i_iblis],
    selection: UnitSelection[UnitCode.i_iblis],
    clothes: UnitFullImage[UnitCode.i_iblis],
    tagList: [],
    otherVersion: [ UnitCode.iblis, UnitCode.b_iblis, UnitCode.s_iblis, UnitCode.v_iblis ],
    puzzle: [],
    skillSet: []
}
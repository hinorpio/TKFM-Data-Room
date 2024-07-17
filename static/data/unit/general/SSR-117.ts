import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10147: Unit = {
    ID: "10147",
    metaCode: "oniyoiki",
    prefix: {
        [Locale.tc]: "魔物終結",
        [Locale.sc]: null,
        [Locale.en]: "Monster Slayer",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "鬼醉木",
        [Locale.sc]: null,
        [Locale.en]: "Oniyoiki",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "廚娘", "鬼廚" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "鬼醉木是在各地進行廚藝修行的流浪廚師。為了取得最新鮮的食材鑽研料理之道，她時常站在第一線與各種野獸搏鬥，所以廚藝跟戰鬥的技術都日益精進。如今已經沒有任何的料理能難得倒她，不管是哪種食材（魔物肉），在經過鬼醉木的手之後，都會變成讓人垂涎三尺的桌上佳餚，當然，前提是對方要能接受那些稀奇古怪的食材而且對魔物不會反感。鬼醉木身為魔物料理研究專家，她的存在讓魔物與食材的分界不再，這也是她魔物終結稱號的由來。\n\n『挑食是不好的，稍微吃一口吧，只要一小口就會讓你改觀喔！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2024/07/17",
    essence: UnitEssence[UnitCode.oniyoiki],
    thumbnail: UnitEssence[UnitCode.oniyoiki],
    selection: UnitSelection[UnitCode.oniyoiki],
    clothes: UnitFullImage[UnitCode.oniyoiki],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
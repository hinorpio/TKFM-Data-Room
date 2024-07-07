import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10060: Unit = {
    ID: "10060",
    metaCode: "hm_fiora",
    prefix: {
        [Locale.tc]: "豐收聖女",
        [Locale.sc]: null,
        [Locale.en]: "Harvest Maid",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "菲歐菈",
        [Locale.sc]: null,
        [Locale.en]: "Fiora",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "聖女" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: '原主神教團的神官長，在凱薩的刻意誤導下，變成性愛之神的信徒。原本以為會變成扭曲的性愛奴隸，但是沒想到不但沒被信仰之神遺棄，依舊能施展神蹟，而且最後更自己悟出了一番道理，從信仰跟性愛享樂中取得了平衡。在信眾的邀約下，菲歐拉將在豐收祭上跳起讚揚豐收的舞蹈，以及參與之後的"同樂活動"。\n\n『用此舞讚揚讓萬物豐饒收成的性愛之神！』',
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2021/09/08",
    essence: UnitEssence[UnitCode.hm_fiora],
    thumbnail: UnitEssence[UnitCode.hm_fiora],
    selection: UnitSelection[UnitCode.hm_fiora],
    clothes: UnitFullImage[UnitCode.hm_fiora],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
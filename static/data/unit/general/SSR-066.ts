import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10024: Unit = {
    ID: "10024",
    metaCode: "elizabeth",
    prefix: {
        [Locale.tc]: "死靈女王",
        [Locale.sc]: null,
        [Locale.en]: "Undead Queen",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "艾莉莎白",
        [Locale.sc]: null,
        [Locale.en]: "Elizabeth",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "死靈", "小艾莉" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "艾莉莎白厭惡和平與他人的幸福，是不管在人界還是魔界都赫赫有名的戰爭犯。她似乎只能從他人的不幸中得到快樂，因此一直熱衷的捉弄他人。然而她的捉弄並不是讓人事後會心一笑的惡作劇，而是會將無數無關人士卷入，人生就此崩壞的惡質玩笑。操弄著亡靈的軍隊，賜予弱小的國家力量，並煽動他們發起戰爭。等到對方即將成功時，再一口氣把賜予的力量全數收回，看著變得兩敗俱傷的雙方樂得咯咯直笑。\n\n『若不是出於自我意志採取的行動，事後就不會感到悔恨還有空虛。』",
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
    releaseDate: "2022/11/30",
    essence: UnitEssence[UnitCode.elizabeth],
    thumbnail: UnitEssence[UnitCode.elizabeth],
    selection: UnitSelection[UnitCode.elizabeth],
    clothes: UnitFullImage[UnitCode.elizabeth],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
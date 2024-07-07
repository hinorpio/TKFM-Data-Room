import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const GENERAL_10027: Unit = {
    ID: "10027",
    metaCode: "e_satan",
    prefix: {
        [Locale.tc]: "復活兔",
        [Locale.sc]: null,
        [Locale.en]: "Easter",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "撒旦",
        [Locale.sc]: null,
        [Locale.en]: "Satan",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "兔撒", "蛋旦" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "復活節－－－這在魔界是屬於不死族的狂歡節慶。死去後獲得新生，以不同的生命形式重新回到世界上。這儀式的過程就如同雛鳥破殼一般，後來經過歲月變遷，魔界的住民也會在這天分送「復活蛋」作為慶祝。雖然以往撒旦沒有慶祝節日的興趣，但是復活節卻是例外！殺掉的人至今已經數不清，而這些死者中又有部分會化作不死生物來報復！本已經殺死的人竟然可以再殺第二次，啊啊，這是何等美妙的體驗啊～作為撒旦唯一願意慶祝的節日，在復活節當天，撒旦會換上特殊的服裝，不帶上隨從，四處發送「復活蛋」。輕飄飄的服裝沒有防禦力，分發復活蛋則是給予試圖襲擊她的人出手的機會。撒旦正滿心期待的等候著敵人送上門來，接受她第二次的蹂躪。\n\n『呵呵，來吧，來一起慶祝復活節這個美好的節日吧，呵呵呵呵。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2021/03/31",
    essence: UnitEssence[UnitCode.e_satan],
    thumbnail: UnitEssence[UnitCode.e_satan],
    selection: UnitSelection[UnitCode.e_satan],
    clothes: UnitFullImage[UnitCode.e_satan],
    tagList: [],
    otherVersion: [ UnitCode.satan, UnitCode.b_satan ],
    puzzle: [],
    skillSet: []
}
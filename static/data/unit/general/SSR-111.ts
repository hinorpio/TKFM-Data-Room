import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10141: Unit = {
    ID: "10141",
    metaCode: "a_nana",
    prefix: {
        [Locale.tc]: "調查員",
        [Locale.sc]: null,
        [Locale.en]: "Agent",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "娜娜",
        [Locale.sc]: null,
        [Locale.en]: "Nana",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "皮娜" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "接獲來自鄉間村落的奇怪報告，娜娜為了確認自己部下的安危，準備親自出動，開始執行機密調查任務。為此，她換上牧愛菈開發的高性能調查服，拿上最新型的武器，化身成搜查官開始了潛入行動。雖然作為魔王軍情報部隊隊長，娜娜對於自己的身手很有自信。可是…她這次要調查的地方，和以往遇到的似乎有些不一樣。在前方等待調查員娜娜的…究竟會是什麼樣的謎團…？\n\n『速戰速決喵，任務完成後，本喵就要趕回去做其他工作了。』",
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
    releaseDate: "2024/05/08",
    essence: UnitEssence[UnitCode.a_nana],
    thumbnail: UnitEssence[UnitCode.a_nana],
    selection: UnitSelection[UnitCode.a_nana],
    clothes: UnitFullImage[UnitCode.a_nana],
    tagList: [],
    otherVersion: [ UnitCode.nana, UnitCode.s_nana, UnitCode.c1_nana, UnitCode.o_nana ],
    puzzle: [],
    skillSet: []
}
import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10074: Unit = {
    ID: "10074",
    metaCode: "ichika",
    prefix: {
        [Locale.tc]: "雪姬",
        [Locale.sc]: null,
        [Locale.en]: "Yuki-Hime",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "初華",
        [Locale.sc]: null,
        [Locale.en]: "Ichika",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "雪姬" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "烈日國的居民一定都聽過一段故事：「在遙遠的雪山山頂，盛開著稀有且能實現願望的寒冰之花，唯有心地善良的人才能通過雪姬的考驗得到它，不敬的盜採者將受到懲罰，在孤獨的寒冷中走向死亡。」初華，便是人們口中的雪姬，她其實是一出生時就帶著強烈寒冰體質的妖怪。為了避免與生俱來的寒冰體質造成傷害，因此才定居在環境惡劣的雪山上，與世間保持距離。由於家喻戶曉的傳說，每天來訪雪山的人數不斷增多，且都帶著「要摘到寒冰之花」的意圖前來。初華不勝其擾，所以偶爾會嚴肅地給予懲罰，要來訪者適可而止。\n\n『雪女一族的體內寄宿著冰雪之力，太靠近可是會受傷的，麻煩您退開一些。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/07/13",
    essence: UnitEssence[UnitCode.ichika],
    thumbnail: UnitEssence[UnitCode.ichika],
    selection: UnitSelection[UnitCode.ichika],
    clothes: UnitFullImage[UnitCode.ichika],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
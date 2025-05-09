import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10910: Unit = {
    ID: "10910",
    metaCode: "martina",
    prefix: {
        [Locale.tc]: "聖光騎士",
        [Locale.sc]: "圣光骑士",
        [Locale.en]: "Holy Knight",
        [Locale.jp]: "聖光騎士",
        [Locale.kr]: "성기사"
    },
    name: {
        [Locale.tc]: "瑪蒂娜",
        [Locale.sc]: "玛蒂娜",
        [Locale.en]: "Martina",
        [Locale.jp]: "マルティナ",
        [Locale.kr]: "마티나"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `瑪蒂娜是虔誠的主神教團教徒，如果沒有加入騎士團，或許她就會成為修女。雖然她不曾見過神蹟，但她相信主神才是唯一的真神，比起刀劍，唯有堅定的信仰才是人類對抗魔族的最好武器。\n\n『聖光騎士團榮光永在！』`,
        [Locale.sc]: `玛蒂娜是虔诚的主神教团教徒，如果没有加入骑士团，或许她就会成为修女。虽然她不曾见过神迹，但她相信主神才是唯一的真神，比起刀剑，唯有坚定的信仰才是人类对抗魔族的最好武器。\n\n『圣光骑士团荣光永在！』`,
        [Locale.en]: `Martina is a devout member of the Excelsis Deo clergy. In fact, if she didn't become a member of the Holy Knights, she probably would have ended up as a nun. Although she hasn't seen God herself, she has true faith that he is the one true god, and she believes that faith is stronger than any sword or shield.\n\n"May God's light bless the Holy Knights!"`,
        [Locale.jp]: `マルティナは信仰篤き信徒。騎士団に入っていなければシスターになっていたかもしれないほどだ。彼女は神の奇跡を見た事は無いが、天帝こそが真の神様と信じ、篤い信仰こそが魔族に打ち勝てる最高の武器だと信じている。\n\n『聖光騎士団の栄光は永遠に！』`,
        [Locale.kr]: `마티나는 신앙심이 깊은 주신교단의 신도이다. 만약 기사단에 입대하지 않았다면 어쩌면 수녀가 되었을지도 모른다. 그녀는 비록 신의 기적을 직접 본 적은 없지만 주신은 진정한 유일 신이며, 검과 비교하면 견고한 신앙심이야말로 인간들이 마족에 대항할 수 있는 최고의 무기라고 굳게 믿고 있다.\n\n『성기사단의 명예는 영원하리!』`
    },
    rarity: Rarity.N,
    element: Element.LIGHT,
    position: Position.PROTECTOR,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.martina],
    thumbnail: UnitEssence[UnitCode.martina],
    selection: UnitSelection[UnitCode.martina],
    clothes: UnitFullImage[UnitCode.martina],
    tagList: [ 
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
        TagID.OTHER_SURVIVABILLITY,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_MARTINA ],
    outfits: [],
    skillSet: []
}
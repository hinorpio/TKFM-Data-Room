import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10908: Unit = {
    ID: "10908",
    metaCode: "kani",
    prefix: {
        [Locale.tc]: "矮人戰士",
        [Locale.sc]: "矮人战士",
        [Locale.en]: "Dwarven Soldier",
        [Locale.jp]: "小人戦士",
        [Locale.kr]: "난쟁이 전사"
    },
    name: {
        [Locale.tc]: "可兒",
        [Locale.sc]: "可儿",
        [Locale.en]: "Kani",
        [Locale.jp]: "コレット",
        [Locale.kr]: "콜레트"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `可兒是一名合格的矮人戰士，不管是戰鬥還是挖礦都得心應手。只是完美的可兒卻有著一處致命傷，那就是她與其他矮人不同，不僅滴酒不沾，還曾經說出自己討厭喝酒的話。在一部分的矮人中，可兒不是矮人，而是其他與矮人很相近種族的傳言被許多人相信著。\n\n『酒什麼的最難喝了！』"`,
        [Locale.sc]: `可儿是一名合格的矮人战士，不管是战斗还是挖矿都得心应手。只是完美的可儿却有着一处致命伤，那就是她与其他矮人不同，不仅滴酒不沾，还曾经说出自己讨厌喝酒的话。在一部分的矮人中，可儿不是矮人，而是其他与矮人很相近种族的传言被许多人相信着。\n\n『酒什么的最难喝了！』"`,
        [Locale.en]: `Kani is an exceptional Dwarf all around. Whether it's fighting or mining, she excels at all of it. There's only one thing that sets her apart from other Dwarves—Kani absolutely hates alcohol. That's caused some dwarves to spread the rumor that she isn't, in fact, a dwarf at all! A rumor that some have actually started to believe...\n\n"How could you drink that stuff? It's disgusting!"`,
        [Locale.jp]: `コレットは一人前の小人戦士。戦闘においても鉱山発掘においてもラクラクやり遂げる。そんな完璧なコレットの唯一の欠点は、ほかの小人と違って酒を飲まず、さらには酒が大嫌いだと口にしたことも。そのため一部の小人の間で、コレットは小人ではなく小人に似ているほかの種族だと噂されている。\n\n『お酒なんてこの世で一番まずい飲み物だから！』"`,
        [Locale.kr]: `콜레트는 걸맞은 자격을 갖춘 난쟁이 전사이다. 전투뿐만 아니라 광물을 캐는 것에도 매우 능하다. 모든 것이 완벽한 콜레트에게는 단 하나의 치명상이 있는데 그건 바로 다른 난쟁이들과는 다르게 술을 입에 대지도 않을뿐더러 자신이 술 마시는 것을 싫어한다고 한 적도 있다. 일부 난쟁이들은 콜레트는 사실 난쟁이가 아니라 난쟁이와 아주 비슷한 다른 종족이라는 소문을 굳게 믿고 있다. \n\n『술 따위는 세상에서 제일 맛없는 거라고!』`
    },
    rarity: Rarity.N,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.kani],
    thumbnail: UnitEssence[UnitCode.kani],
    selection: UnitSelection[UnitCode.kani],
    clothes: UnitFullImage[UnitCode.kani],
    tagList: [ 
        TagID.ELEMENT_WATER, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_SMALL_SIZED, 
        TagID.BREAST_FLAT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
    ],
    otherVersion: [],
    initHP: 2044.9998263862376,
    initATK: 494.99733457490606,
    puzzle: [ PuzzleCode.HUMAN_KANI ],
    outfits: [],
    skillSet: []
}
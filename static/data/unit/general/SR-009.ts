import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10036: Unit = {
    ID: "10036",
    metaCode: "nafrala",
    prefix: {
        [Locale.tc]: "史萊姆女王",
        [Locale.sc]: null,
        [Locale.en]: "Slime Queen",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "娜芙菈菈",
        [Locale.sc]: null,
        [Locale.en]: "Nafrala",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "奶綠", "史王" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "娜芙菈菈是新生的史萊姆女王，對人類充滿了好奇以及善意。在進化後，娜芙菈菈跳脫於過去還是史萊姆時單一以及本能佔據大多數的思考模式。為了能夠更靠近她喜歡的人類，她給自己取了「娜芙菈菈」這個像是人類的名字，並用黏液製造出了衣服。可是這無法改變娜芙菈菈作為魔物的本質，只要接近人類的村莊就會被提防、警戒，甚至被趕出來。不過這點挫折可阻撓不了娜芙菈菈，今天的她也在為了靠近人類村莊而努力！\n\n『我是娜芙菈菈，和人家好好相處吧～』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SR,
    element: Element.WIND,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: false,
    releaseDate: "2021/03/10",
    essence: UnitEssence[UnitCode.nafrala],
    thumbnail: UnitEssence[UnitCode.nafrala],
    selection: UnitSelection[UnitCode.nafrala],
    clothes: UnitFullImage[UnitCode.nafrala],
    tagList: [
        TagID.ELEMENT_WIND, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_GIANT_TITS, 
        TagID.CLASS_ELITE,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
        TagID.OTHER_RECOVERY,
        TagID.OTHER_SURVIVABILLITY,
    ], 
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10009: Unit = {
    ID: "10009",
    metaCode: "aiko",
    prefix: {
        [Locale.tc]: "魔管家",
        [Locale.sc]: "魔管家",
        [Locale.en]: "Demon Servant",
        [Locale.jp]: "メイド",
        [Locale.kr]: "마도 메이드"
    },
    name: {
        [Locale.tc]: "艾可",
        [Locale.sc]: "艾可",
        [Locale.en]: "Aiko",
        [Locale.jp]: "アイカ",
        [Locale.kr]: "아이카"
    },
    abbreviation: {
        [Locale.tc]: [ "普艾", "艾" ],
        [Locale.sc]: [ "普艾", "艾" ],
        [Locale.en]: [ "OG.Aiko" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `隨侍於魔王凱薩身邊的魔族侍女，同時也是備受凱薩信賴的內務總管，一直以來代替不擅經營的凱薩將領地內務打理的井井有序，足以證明艾可優秀的管理能力。艾可溫柔婉約，對凱薩忠心耿耿，將侍奉凱薩視為自己生命中最崇高的使命。對艾可來說只要凱薩能夠開心，其他一切都不重要，因此也被同為凱薩左右手的娜娜戲稱是「凱薩教」的狂信徒。對此艾可表示如果真有這個教派，請務必讓她擔任神官長一職。\n\n『凱薩大人…只要是為了您，我甚麼都願意的。』`,
        [Locale.sc]: `随侍于魔王凯萨身边的魔族侍女，同时也是备受凯萨信赖的内务总管，一直以来代替不擅经营的凯萨将领地内务打理的井井有序，足以证明艾可优秀的管理能力。艾可温柔婉约，对凯萨忠心耿耿，将侍奉凯萨视为自己生命中最崇高的使命。对艾可来说只要凯萨能够开心，其他一切都不重要，因此也被同为凯萨左右手的娜娜戏称是「凯萨教」的狂信徒。对此艾可表示如果真有这个教派，请务必让她担任神官长一职。\n\n『凯萨大人…只要是为了您，我什么都愿意的。』`,
        [Locale.en]: `Dressed like a maid, Aiko is Caesar's loyal servant. Since Caesar can't stand micro-management of any sort, Aiko is also something of a confidant and secretary, keeping Caesar's affairs in order. Warm and affectionate, Aiko's love for Caesar is undying. She'll sacrifice everything if it means making Caesar happy; her obsession with Caesar is so severe that Nana, Caesar's other 'right-hand woman' of sorts, likes to joke that Aiko worships at the "church of Caesar", to which Aiko wonders if there really is such a church, and that she would most-definitely join up.\n\n"Master Caesar... I'd do anything for you."`,
        [Locale.jp]: `魔王シーザーの専属メイドであり、信頼を置かれているため內務の責任者も務めている。シーザーに代わって領地の内務を執り行っており、そのアイカの管理能力は非常に優秀だ。アイカは優しくシーザーに忠実であり、彼女にとってシーザーは最も崇高な存在である。シーザーが喜べばそれでよいと思っているため、シーザーの右腕であるナナから「シーザー教」の信者と呼ばれている。アイカは宗教が実在すれば神官長を務めたいと口にしている。\n\n『シーザー様……貴方のためなら、何だっていたします』`,
        [Locale.kr]: `마왕 시저 곁을 모시고 있는 마족 메이드이며, 시저의 큰 신임을 받고 있는 내무 총관이다. 예전부터 경영에 익숙하지 않은 시저를 대신해 영지의 안의 일과 질서유지 힘쓰고 있으며, 우수한 관리 능력을 자랑한다. 부드럽고 온화한 성격의 아이카는 시저에게 대단한 충성심을 품고 있어 시저를 곁에서 모시는 것을 자신의 삶에서 가장 숭고한 사명으로 생각한다. 아이카에게 있어 시저의 기쁨 이외엔 다른 그 어떤 것도 중요치 않다. 이로 인해 시저의 오른팔이 나나에게「시저교」의 광신도라고 놀림받고 있다. 이에 대해 아이카는 만약 정말 이런 교파가 있다면 반드시 그녀가 대신관을 맡을 수 있기를 희망한다고 한다.\n\n『시저님… 당신을 위해서라면 전 어떤 것도 할 수 있어요.』`
    },
    rarity: Rarity.SR,
    element: Element.DARK,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.aiko],
    thumbnail: UnitEssence[UnitCode.aiko],
    selection: UnitSelection[UnitCode.aiko],
    clothes: UnitFullImage[UnitCode.aiko],
    tagList: [
        TagID.ELEMENT_DARK, 
        TagID.POSITION_SUPPORTER, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_ELITE, 
        TagID.OTHER_SUPPORT,
    ], 
    otherVersion: [ UnitCode.x_aiko, UnitCode.xx_aiko, UnitCode.s_aiko, UnitCode.p_aiko ],
    initHP: 3032.4,
    initATK: 767.2,
    puzzle: [ PuzzleCode.EVENT_2023_XMAS_2 ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.aiko],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
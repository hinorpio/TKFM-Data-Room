import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10010: Unit = {
    ID: "10010",
    metaCode: "leona",
    prefix: {
        [Locale.tc]: "聖騎士長",
        [Locale.sc]: "圣骑士长",
        [Locale.en]: "Holy Knight Capt.",
        [Locale.jp]: "聖騎士団長",
        [Locale.kr]: "성기사단장"
    },
    name: {
        [Locale.tc]: "雷歐娜",
        [Locale.sc]: "雷欧娜",
        [Locale.en]: "Leona",
        [Locale.jp]: "レオナ",
        [Locale.kr]: "레오나"
    },
    abbreviation: {
        [Locale.tc]: [ "聖騎" ],
        [Locale.sc]: [ "圣骑" ],
        [Locale.en]: [ "OG.Leona" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `聖光騎士團是直屬人類最大宗教—主神教團的精銳部隊，雷歐娜本人就是這精銳部隊的騎士團長。雷歐娜勇猛果敢，從不畏懼任何邪惡勢力，多次率領聖光騎士團遠征魔界並取得豐厚戰果，多年來戰無不勝，被譽為人類的英雄。在一次例行的魔界遠征中，雷歐娜率領著麾下騎士攻入了巴爾的領地，本以為這次遠征也會一如往常的順利，然而等著她的未來卻是……\n\n『魔王凱薩，賭上你的榮譽與信仰與我堂堂正正的一戰！』`,
        [Locale.sc]: `圣光骑士团是直属人类最大宗教—主神教团的精锐部队，雷欧娜本人就是这精锐部队的骑士团长。雷欧娜勇猛果敢，从不畏惧任何邪恶势力，多次率领圣光骑士团远征魔界并取得丰厚战果，多年来战无不胜，被誉为人类的英雄。在一次例行的魔界远征中，雷欧娜率领着麾下骑士攻入了巴尔的领地，本以为这次远征也会一如往常的顺利，然而等着她的未来却是……\n\n『魔王凯萨，赌上你的荣誉与信仰与我堂堂正正的一战！』`,
        [Locale.en]: `Leona is captain of the Holy Knights, elite forces of the human realm's largest religion—the Excelsis Deo. Leona is a paragon of bravery and righteousness, never giving in to her vices! She's come to be seen as a hero of the people, commanding multiple successful expeditions into the demon realm, never once suffering defeat! Until one such expedition... Leona sends her forces on the offensive within Ba'al's territory, thinking it'll be another easy victory. Little does she know what she's getting herself into...\n\n"Caesar! Swallow your pride and fight me like a man!"`,
        [Locale.jp]: `聖光騎士団は人類最大の宗教――主神教団直属の精鋭部隊である。レオナはその精鋭部隊の騎士団長だ。勇猛果敢でどんな邪悪な勢力も恐れない。聖光騎士団を率いて魔界へ遠征するたびに素晴らしい戦果をあげている。長年敗北したことが無く、人類の英雄と呼ばれている。今回の魔界遠征では、レオナ率いる騎士がバルの領地へと侵攻した。今回もまた全てが順調に進むと思われていたが、彼女を待ち受けていた未来は……\n\n『魔王シーザー、あなたの栄誉と信仰に賭けて、正々堂々戦おうじゃないの！』`,
        [Locale.kr]: `성스러운 빛의 기사단은 인간의 최대 종교인 주신교단의 정예 부대이며 레오나는 이 정예 부대의 기사단장이다. 그녀는 용맹하고 과감해 어떠한 사악한 세력의 공격도 두려워하지 않는다. 수차례 성기사단을 이끌고 마계 원정에 나서 혁혁한 전공을 세웠으며 수년간 모든 전투를 승리로 이끈 인간의 영웅이다. 또 한차례의 마계 원정에서 레오나는 휘하의 기사들을 이끌고 바알의 영지를 공격했고 이번 원정 역시 순조로울 것 같았다. 하지만 이번 원정에서 그녀를 기다리고 있던건......\n\n『마왕 시저, 너의 명예와 신념을 걸고, 나와 정정당당히 한판 겨루자!』`
    },
    rarity: Rarity.SR,
    element: Element.WATER,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.leona],
    thumbnail: UnitEssence[UnitCode.leona],
    selection: UnitSelection[UnitCode.leona],
    clothes: UnitFullImage[UnitCode.leona],
    tagList: [
        TagID.ELEMENT_WATER, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_ELITE, 
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
        TagID.OTHER_SURVIVABILLITY,
    ], 
    otherVersion: [ UnitCode.h_leona ],
    initHP: 4264.4,
    initATK: 546,
    puzzle: [ PuzzleCode.HUMAN_MARTINA ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.leona],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
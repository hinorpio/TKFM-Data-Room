import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10206: Unit = {
    ID: "10206",
    metaCode: "legora",
    prefix: {
        [Locale.tc]: "魔導巨獸",
        [Locale.sc]: "魔导巨兽",
        [Locale.en]: "Behemoth",
        [Locale.jp]: "魔導巨獣",
        [Locale.kr]: "마도 괴수"
    },
    name: {
        [Locale.tc]: "莉可菈",
        [Locale.sc]: "莉可菈",
        [Locale.en]: "Legora",
        [Locale.jp]: "リゴラ",
        [Locale.kr]: "리고라"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `莉可菈是利用魔導生物技術培養出來的魔導合成獸。她擁有讓體型迅速變大數百倍的強大力量，可以輕易毀滅一座城市，是作為生物兵器被創造出來的可怕存在。為了篩選出最強大的怪獸，她和眾多實驗體本來要被投入一場殘酷的實驗中……直到一場突如其來的意外，將整個實驗場地冰封。不知多少年後，結凍的冰層產生了裂痕，甦醒的莉可菈終於下定決心要反抗自己被設定的使命，阻止這場糟糕的實驗。\n\n『莉可菈是守護和平的好怪獸喔～！嘎喔！』`,
        [Locale.sc]: `莉可菈是利用魔导生物技术培养出来的魔导合成兽。她拥有让体型迅速变大数百倍的强大力量，可以轻易毁灭一座城市，是作为生物兵器被创造出来的可怕存在。为了筛选出最强大的怪兽，她和众多实验体本来要被投入一场残酷的实验中……直到一场突如其来的意外，将整个实验场地冰封。不知多少年后，结冻的冰层产生了裂痕，甦醒的莉可菈终于下定决心要反抗自己被设定的使命，阻止这场糟糕的实验。\n\n『莉可菈是守护和平的好怪兽喔～！嘎喔！』`,
        [Locale.en]: `Legora is an automaton chimeratron cultivated through advanced automaton biotech. She possesses the powerful strength to rapidly expand her body size a hundred times over, making her easily capable of destroying an entire city. In essence, she was created to be a terrifying biological weapon. To select the strongest monster, she and numerous other specimens were originally meant to be thrown into a cruel experiment... until a sudden accident froze the entire testing ground in ice. After an unknown number of years, cracks formed in the ice layers. The awakened Legora finally made up her mind to rebel against her programmed mission and stop this awful experiment.\n\n"Legora is a good-good monster who only wants peace~! D'ooh!"`,
        [Locale.jp]: `リゴラは魔導生物技術によって生み出された魔導合成獣である。彼女は自分の体型を瞬時に数百倍巨大化させる強い力を持っていて、街一つを容易く滅ぼすことのできる生物兵器として造られた恐るべき存在。最強の怪獣を選び出すため、彼女と実験体たちは残酷な実験に投入されるはずだった……しかし、突然起きたアクシデントにより、実験場が氷漬けとなってしまう。それから果てしない時が流れ、凍りついた氷に亀裂が入った。目覚めたリゴラは自分に課された使命に抗い、この最悪な実験を阻止することを決意したのだった。\n\n『リゴラは平和を守るいい怪獣なんだぞ～！がお～！』`,
        [Locale.kr]: `리고라는 마도 생체 기술로 배양된 마도 합성수다. 그녀는 몸집을 순식간에 수백 배까지 거대화시키는 강력한 힘을 지녔으며, 도시 하나쯤은 손쉽게 파괴할 수 있는 생체 병기로 만들어진 무시무시한 존재다. 최강의 괴수를 가려내기 위해, 그녀와 수많은 실험체들은 원래 잔혹한 실험에 투입될 예정이었으나... 갑작스러운 사고로 인해 실험장은 그대로 얼어붙고 말았다. 얼마나 긴 시간이 흘렀을까. 얼어붙은 빙층에 균열이 생겼고, 마침내 눈을 뜬 리고라는 자신에게 주어진 운명에 저항하기로 결심했다. 그리고 이 끔찍한 실험을 막아내기 위해 움직이기 시작하는데...\n\n『리고라는 평화를 지키는 착한 괴수라구~! 캬오~!』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2026/06/03",
    essence: UnitEssence[UnitCode.legora],
    thumbnail: UnitEssence[UnitCode.legora],
    selection: UnitSelection[UnitCode.legora],
    clothes: UnitFullImage[UnitCode.legora],
    tagList: [],
    otherVersion: [],
    initHP: 5160,
    initATK: 715.2,
    puzzle: [ PuzzleCode.EVENT_2026_SUMMER_1 ],
    outfits: UnitOutfits[UnitCode.legora],
    voiceSet: UnitVoice[UnitCode.legora],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}

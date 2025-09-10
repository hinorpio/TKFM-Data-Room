import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10160: Unit = {
    ID: "10160",
    metaCode: "bu_ayane",
    prefix: {
        [Locale.tc]: "聖劍覺醒",
        [Locale.sc]: "圣剑觉醒",
        [Locale.en]: "Blademaster Unleashed",
        [Locale.jp]: "聖剣覚醒",
        [Locale.kr]: "성검 해방"
    },
    name: {
        [Locale.tc]: "神田綾音",
        [Locale.sc]: "神田绫音",
        [Locale.en]: "Ayane",
        [Locale.jp]: "神田綾音",
        [Locale.kr]: "칸다 아야네"
    },
    abbreviation: {
        [Locale.tc]: [ "覺勇", "聖勇", "解勇" ],
        [Locale.sc]: [ "觉勇", "圣勇", "解勇" ],
        [Locale.en]: [ "Bu.Ayane", "U.Ayane" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "성야네" ]
    },
    background: {
        [Locale.tc]: `曾經，她只是一個生活在現代，過著無憂無慮日子的普通人。即使被召喚到異世界，獲得聖劍的認可，受賢者引導成為勇者，她也仍舊無法正視自己的處境。不過，如今的她已經不一樣了。在與無數強敵正面交鋒後，她重新認識了這個世界，聽從內心的聲音，醒悟了自己真正該做的事。身為勇者，她的使命從來都不是殺死魔王，而是守護世人，替這場漫長的人魔戰爭劃下句點。人類最後的勇者——神田綾音，終於找到屬於自己的道路。她緊握聖劍，決心貫徹命運的指引，為這片大地帶來真正的黎明。\n\n『卡利伯…請你陪我一起見證最後的結局吧。』`,
        [Locale.sc]: `曾经，她只是一个生活在现代，过着无忧无虑日子的普通人。即使被召唤到异世界，获得圣剑的认可，受贤者引导成为勇者，她也仍旧无法正视自己的处境。不过，如今的她已经不一样了。在与无数强敌正面交锋后，她重新认识了这个世界，听从内心的声音，醒悟了自己真正该做的事。身为勇者，她的使命从来都不是杀死魔王，而是守护世人，替这场漫长的人魔战争划下句点。人类最后的勇者——神田绫音，终于找到属于自己的道路。她紧握圣剑，决心贯彻命运的指引，为这片大地带来真正的黎明。\n\n『卡利伯…请你陪我一起见证最后的结局吧。』`,
        [Locale.en]: `Once, she was just an ordinary person living a carefree life in the modern world. Even when summoned to a strange new realm, chosen by the Blademaster sword, and guided by the Sage to become a Hero, she struggles to face her new reality. But now, she is no longer the same. After clashing head-on with countless formidable foes, she has come to understand this world anew, listening to the voice within her heart and awakening to her true purpose. As a Hero, her mission was never to slay an Archdemon, but to protect the people and bring an end to the long, grueling war between humanity and demons. The last Hero of mankind, Ayane, has finally found her calling. Gripping the holy sword tightly, she resolves to follow the call of destiny, determined to bring a true dawn to this land.\n\n"Calibur... please, stand by my side as we witness the final chapter together."`,
        [Locale.jp]: `かつて、神田綾音は現代で穏やかな日々を送る、至って普通の人だった。異世界に召喚され、聖剣に認められた後、賢者の導きで勇者となった彼女だったが、自分の置かれた状況と向き合うことができずにいた。しかし、今の彼女はもう違う。数え切れないほどの強敵と正面からぶつかった末に、彼女はこの世界を見直し、心の声に耳を傾け、自分が本当にやるべきことを悟った。勇者である彼女の使命は魔王を倒すことではなく、人々を守り、長く続いていた人と魔族の戦争に終止符を打つことだった。人類最後の勇者──神田綾音は、ついに自分の道を見つけた。この大地に本当の夜明けをもたらすため、聖剣を手に彼女は運命の導きに従う決意を固める。\n\n『カリバー……結末を一緒に見届けてくれるよね？』`,
        [Locale.kr]: `과거, 그녀는 현대에서 평범하고 근심 없는 일상을 살아가는 보통 사람에 불과했다. 이세계로 소환되고, 성검의 인정을 받아 용자가 되었음에도 그녀는 여전히 자신의 처지를 직시하지 못했다. 하지만 지금 그녀는 달라졌다. 수많은 강적과 정면으로 맞서며, 그녀는 이 세계를 새롭게 이해하고, 내면의 목소리에 귀 기울여 자신이 진정으로 해야 할 일을 깨달았다. 용자로서 그녀의 사명은 결코 마왕을 죽이는 것이 아니라, 사람들을 지키고 이 긴 인간과 마족의 전쟁에 종지부를 찍는 것이었다. 인류 최후의 용자——칸다 아야네는 마침내 자신만의 길을 찾았다. 그녀는 성검을 굳게 쥐고, 운명의 인도를 따르기로 결심하며, 이 대지에 진정한 여명을 가져오겠다고 다짐했다.\n\n『칼리버... 나와 함께 최후의 결말을 지켜봐 줘.』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/06/25",
    essence: UnitEssence[UnitCode.bu_ayane],
    thumbnail: UnitEssence[UnitCode.bu_ayane],
    selection: UnitSelection[UnitCode.bu_ayane],
    clothes: UnitFullImage[UnitCode.bu_ayane],
    tagList: [],
    otherVersion: [ UnitCode.ayane, UnitCode.s_ayane, UnitCode.h_ayane, UnitCode.bg_ayane, UnitCode.bu_ayane ],
    initHP: 3345.6,
    initATK: 1052.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.bu_ayane],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
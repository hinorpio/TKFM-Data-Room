import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10012: Unit = {
    ID: "10012",
    metaCode: "ritsuki",
    prefix: {
        [Locale.tc]: "女忍者",
        [Locale.sc]: "女忍者",
        [Locale.en]: "Ninja",
        [Locale.jp]: "女忍者",
        [Locale.kr]: "여닌자"
    },
    name: {
        [Locale.tc]: "凜月",
        [Locale.sc]: "凛月",
        [Locale.en]: "Ritsuki",
        [Locale.jp]: "凛月",
        [Locale.kr]: "리츠키"
    },
    abbreviation: {
        [Locale.tc]: [ "忍者", "普忍", "忍", "紅紅的上衣" ],
        [Locale.sc]: [ "忍者", "普忍", "忍", "紅紅的上衣" ],
        [Locale.en]: [ "OG.Ritsuki" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `凜月是烈日國的女忍者，以保護皇室為己任。她視忍者信條為第一行事守則，認為情感只會干擾任務，故拒絕將情感表露在外，多次守護皇家的她甚至得到了「日之影」這個只頒給最強忍者的稱號。凜月是烈日國公主「千鶴」的貼身護衛，兩人有著深厚的友情，然而當魔族進攻的消息傳來時，為了守護烈日國，凜月不得不接受命令，離開她的保護對象身邊……\n\n『忍者不需要自我，主人的意志，便是忍者的意志。』`,
        [Locale.sc]: `凛月是烈日国的女忍者，以保护皇室为己任。她视忍者信条为第一行事守则，认为情感只会干扰任务，故拒绝将情感表露在外，多次守护皇家的她甚至得到了「日之影」这个只颁给最强忍者的称号。凛月是烈日国公主「千鹤」的贴身护卫，两人有着深厚的友情，然而当魔族进攻的消息传来时，为了守护烈日国，凛月不得不接受命令，离开她的保护对象身边……\n\n『忍者不需要自我，主人的意志，便是忍者的意志。』`,
        [Locale.en]: `One of Isorath's ninjas, Ritsuki is tasked with protecting Princess Chizuru. She follows the ninja code to a T, believing emotion will only show her down. For her incredible work, the kingdom has even bestowed her with the rare, honorable title of "Sun's Shadow". Despite Ritsuki and Princess Chizuru's strong bond, Ritsuki must put her duty as ninja first and foremost, leaving Princess Chizuru behind in order to fight against the encroaching demon threat.\n\n"Ninjas don't need a will of their own. My master's will, is my will."`,
        [Locale.jp]: `凛月は烈陽国の女忍者。皇室の警護を務めている。忍者の信条を第一にし、感情は任務に影響を与えるとして、感情を表に出さないようにしている。幾度にわたり皇室を守ってきた彼女は、皇室に最強の忍者を意味する「日之影」に認められた。凛月は烈陽国の姫「千鶴」の身辺警護をしており、二人の間には厚い友情がある。魔族が信仰してきた際には、列陽国を守るために命令に従い、姫の傍を離れることになった。\n\n『忍者は自我を持つべからず。ご主人様の意志こそが忍者の意志』`,
        [Locale.kr]: `리츠키는 태양국의 여닌자로서 황실을 보호하는 임무를 맡고 있다. 그녀는 임무 수행 시 감정을 배제하는 닌자의 신조를 가장 중요한 행동 수칙으로 여겨 어떠한 감정도 밖으로 드러내지 않는다. 수차례 황실을 지켜낸 그녀는 최강의 닌자에게 수여되는 「히노카게」칭호까지 얻게 된다. 또한 리츠키는 태양국 공주 「치즈루」의 경호 호위를 담당하고 있으며 이 둘은 매우 각별한 사이이다. 최근 마족의 공격 소식을 접한 그녀는 태양국을 지키기 위해 어쩔 수 없이 명령을 받들고 치즈루의 곁을 떠나게 된다......\n\n『닌자에게 있어 자아는 필요 없다. 주인의 의지가 곧 닌자의 의지이다.』`
    },
    rarity: Rarity.SR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.ritsuki],
    thumbnail: UnitEssence[UnitCode.ritsuki],
    selection: UnitSelection[UnitCode.ritsuki],
    clothes: UnitFullImage[UnitCode.ritsuki],
    tagList: [
        TagID.ELEMENT_WIND, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_ELITE, 
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
        TagID.OTHER_AOE,
    ], 
    otherVersion: [ UnitCode.tm_ritsuki ],
    initHP: 2795.8,
    initATK: 831.6,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.ritsuki],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
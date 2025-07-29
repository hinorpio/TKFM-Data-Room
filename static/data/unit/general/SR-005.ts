import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10013: Unit = {
    ID: "10013",
    metaCode: "minayomi",
    prefix: {
        [Locale.tc]: "劍聖",
        [Locale.sc]: "剑圣",
        [Locale.en]: "Blademaster",
        [Locale.jp]: "剣聖",
        [Locale.kr]: "소드마스터"
    },
    name: {
        [Locale.tc]: "神無雪",
        [Locale.sc]: "神无雪",
        [Locale.en]: "Minayomi",
        [Locale.jp]: "神無雪",
        [Locale.kr]: "미나요미"
    },
    abbreviation: {
        [Locale.tc]: [ "劍聖", "普劍", "劍", "331" ],
        [Locale.sc]: [ "剑圣", "普剑", "剑", "331" ],
        [Locale.en]: [ "Mina", "OG.Mina", "OG.Minayomi" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `神無雪是烈日國的第一劍聖。異於常人的體質與優異的動態視力，加上天賦異稟，使神無雪在劍道的路上進步神速。她曾挑戰過無數的劍客，後來名聲漸起後從挑戰成為了被挑戰者，最後戰無不勝的神無雪開創出了屬於自己的流派，並被烈日國皇帝冊封為了劍聖。神無雪瞧不起比她弱小的其他人，但在這自負的背後，貌似藏著某種秘密……\n\n『連我一劍都接不下的弱者，沒資格對我指手畫腳！』`,
        [Locale.sc]: `神无雪是烈日国的第一剑圣。异于常人的体质与优异的动态视力，加上天赋异禀，使神无雪在剑道的路上进步神速。她曾挑战过无数的剑客，后来名声渐起后从挑战成为了被挑战者，最后战无不胜的神无雪开创出了属于自己的流派，并被烈日国皇帝册封为了剑圣。神无雪瞧不起比她弱小的其他人，但在这自负的背后，貌似藏着某种秘密……\n\n『连我一剑都接不下的弱者，没资格对我指手画脚！』`,
        [Locale.en]: `Minayomi is the #1 blademaster in Isorath. Incredibly gifted and strong, she learned to wield a sword at a speed unmatched by any of her peers. Starting out challenging all manner of warriors throughout the land, Ritsuki soon moved to the top of the ranks. Undefeated, she's created her own school of the blade, having been dubbed a "blademaster" by the Isori emperor himself. She looks down upon those weaker than her, and yet many feel she must be hiding something under her tough facade.\n\n"If you can't take my blade, then get out of my way!"`,
        [Locale.jp]: `神無雪は烈陽国の第一剣聖。常人離れした動体視力と身体能力、生まれつきの才能が剣術を飛躍的に伸ばしている。無数の剣客に挑戦し、後に挑戦される側になった。負けを知らない神無雪は自己流の流派を創り出し、烈陽国皇帝誌に剣聖として記された。神無雪は彼女より弱い人を見下すが、その背後には秘密が隠されているようだ……\n\n『私の剣を一振りもまともに受けられない弱者には、私に指図する資格など無い！』`,
        [Locale.kr]: `미나요미는 태양국 제일의 검성이다. 일반인을 훨씬 뛰어넘는 타고난 체력과 동체시력을 가진 미나요미는 천부적인 자질까지 갖춰 그녀, 그 때문에 미나요미가 걷는 검의 길은 남들보다 수배는 더 빨랐다. 수많은 검객들이 도전하였으나 결국 그들을 모두 꺾고 백전백승의 명성을 쌓은 그녀는 결국 자신만의 유파를 세우고 태양국 황제에게 검성으로 책봉된다. 미나요미는 언제나 자신보다 약한 다른 사람들을 무시하지만 이 강한 자존심의 배후에는 어떤 비밀이 숨겨져 있는 듯하다......\n\n『내 검격을 단 한 번도 당해낼 수 없는 약자는 내게 이래라 저래라 할 자격 없어!』`
    },
    rarity: Rarity.SR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.minayomi],
    thumbnail: UnitEssence[UnitCode.minayomi],
    selection: UnitSelection[UnitCode.minayomi],
    clothes: UnitFullImage[UnitCode.minayomi],
    tagList: [
        TagID.ELEMENT_FIRE, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_ELITE, 
        TagID.OTHER_WEAKEN,
        TagID.OTHER_MORE_POWER,
    ], 
    otherVersion: [ UnitCode.tm_minayomi, UnitCode.d_minayomi ],
    initHP: 2773.4,
    initATK: 838.6,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.minayomi],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
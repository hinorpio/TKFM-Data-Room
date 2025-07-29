import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10911: Unit = {
    ID: "10911",
    metaCode: "clarie",
    prefix: {
        [Locale.tc]: "主神教團僧兵",
        [Locale.sc]: "主神教团僧兵",
        [Locale.en]: "Excelsis Deo Monk",
        [Locale.jp]: "主神教団シスター",
        [Locale.kr]: "주신교단 승병"
    },
    name: {
        [Locale.tc]: "克蕾雅",
        [Locale.sc]: "克蕾雅",
        [Locale.en]: "Clarie",
        [Locale.jp]: "クレア",
        [Locale.kr]: "클레어"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `克蕾雅從小就因為戰亂而失去雙親，進而被送去給主神教團收養。雖然她失去了親情，但取而代之的是她得到了主神的青睞，她相信所有困難都是主神給予世人的試煉，並希望死後能進入主神所在的天界，繼續侍奉主神。\n\n『神吶，我是您忠心的僕人。』`,
        [Locale.sc]: `克蕾雅从小就因为战乱而失去双亲，进而被送去给主神教团收养。虽然她失去了亲情，但取而代之的是她得到了主神的青睐，她相信所有困难都是主神给予世人的试炼，并希望死后能进入主神所在的天界，继续侍奉主神。\n\n『神呐，我是您忠心的仆人。』`,
        [Locale.en]: `Claire lost both of her parents to war and was sent to be raised by the Excelsis Deo. As a result, she focused all her energy on the Lord, believing that every difficulty encountered in life is a test given by God. She hopes that when she dies, she'll be able to enter the heavenly realm and continue serving the Lord.\n\n"Lord, I am your loyal servant."`,
        [Locale.jp]: `クレアは幼い頃に戦乱で両親を失い、主神教団に養子として引き取られた。親を失ったが、神のご高配を預かった。全ての困難は神の試練だと信じ、誠心誠意神に仕え、天国へ行けることを願っている。\n\n『神よ、私はあなたの忠実なるしもべ……』`,
        [Locale.kr]: `클레어는 어려서부터 전란으로 인해 부모를 잃고 주신교단으로 보내져 그곳에서 성장했다. 비록 부모를 잃기는 했지만 주신의 총애를 받아 이 세상의 모든 어려움은 주신이 사람들에게 내려주시는 시련이라고 믿고 있으며, 죽음 이후에 주신이 계신 천계로 들어가 계속 주신을 모실 수 있기를 희망한다.\n\n『신이시어. 저는 당신의 충성스러운 종이랍니다.』`
    },
    rarity: Rarity.N,
    element: Element.LIGHT,
    position: Position.HEALER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.clarie],
    thumbnail: UnitEssence[UnitCode.clarie],
    selection: UnitSelection[UnitCode.clarie],
    clothes: UnitFullImage[UnitCode.clarie],
    tagList: [ 
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_HEALER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_RECOVERY,
    ],
    otherVersion: [],
    initHP: 1914,
    initATK: 528,
    puzzle: [ PuzzleCode.HUMAN_CLARIE ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.clarie],
    voiceException: [ 
        {
            version: 1,
            exception: [
                VoiceType.DISCIPLINE_1,
                VoiceType.DISCIPLINE_2,
                VoiceType.DISCIPLINE_3,
                VoiceType.ORGASM,
                VoiceType.SEX_MOANS,
                VoiceType.BLOWJOB,
                VoiceType.KISS
            ]
        }
    ],
    skillSet: []
}
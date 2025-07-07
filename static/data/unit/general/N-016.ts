import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';
import puzzles from '../../puzzle';

export const General_10916: Unit = {
    ID: "10916",
    metaCode: "anna",
    prefix: {
        [Locale.tc]: "法斯精銳近衛",
        [Locale.sc]: "法斯精锐近卫",
        [Locale.en]: "Phasi Guard",
        [Locale.jp]: "フォス精鋭近衛兵",
        [Locale.kr]: "파스제국 정예근위대"
    },
    name: {
        [Locale.tc]: "安娜",
        [Locale.sc]: "安娜",
        [Locale.en]: "Anna",
        [Locale.jp]: "アンナ",
        [Locale.kr]: "안나"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `近衛專指跟隨在皇室身邊，負責保護他們人身安全的衛兵。比起侵略性更強的騎士，近衛更擅長與敵人纏鬥，並保護特地對象的安全。安娜是法斯帝國皇室的近衛，個性溫和且擅長保密的她深受皇室所信賴。因為到了適婚期，最近正為了某名皇室成員動了要娶她當妾室的念頭而煩惱。\n\n『今天也聽到了不錯的小道消息呢。』`,
        [Locale.sc]: `近卫专指跟随在皇室身边，负责保护他们人身安全的卫兵。比起侵略性更强的骑士，近卫更擅长与敌人缠斗，并保护特地对象的安全。安娜是法斯帝国皇室的近卫，个性温和且擅长保密的她深受皇室所信赖。因为到了适婚期，最近正为了某名皇室成员动了要娶她当妾室的念头而烦恼。\n\n『今天也听到了不错的小道消息呢。』`,
        [Locale.en]: `Phasi Guards are tasked with guarding the royal chambers and all within the royal family. Unlike Knights, who are skilled at full-on offense, Guards are much better at protecting those behind them, waging battles of attrition with their enemies. Anna is one such guard; her unfailing loyalty and dedication to execellence has earned her the trust of the royal family. As she has recently come to the age where she should marry, Anna has come to realize that a certain man in the royal family has taken an interest in her, and hopes to make her his woman, something she isn't quite sure how to feel about just yet.`,
        [Locale.jp]: `近衛は皇室の近辺警護を務める者の総称である。侵略的な騎士に比べ、近衛は敵と戦いながら特定の対象の安全を守ることを得意とする。アンナはフォス帝国皇室の近衛で、優しく秘密保守主義の彼女は皇室から厚く信頼されている。結婚適齢期のため、とある皇室の者が彼女を嫁にしようとしていることに悩んでいる。\n\n『今日は良い噂を耳にしました』`,
        [Locale.kr]: `근위대는 황실을 지키며 그들의 안전을 보호하는 임무를 지닌 근위병들을 의미한다. 침투 능력이 더욱 강력한 기사에 비해, 근위대는 적과 소모전을 벌이는 것과 특정 대상의 안전을 보호하는 것에 능하다. 안나는 파스제국 황실의 근위대이다. 부드러운 성격을 지닌 그녀는 비밀을 지키는데 장점이 있어 황실의 신뢰를 한 몸에 받고 있다. 최근 결혼 적령기에 접어든 그녀는 어떤 황실 일원의 눈에 들어 자신을 첩으로 삼으려는 것 때문에 괴로워하고 있다.\n\n『오늘도 꽤 괜찮은 정보를 입수했어.』`
    },
    rarity: Rarity.N,
    element: Element.FIRE,
    position: Position.PROTECTOR,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2021/03/10",
    essence: UnitEssence[UnitCode.anna],
    thumbnail: UnitEssence[UnitCode.anna],
    selection: UnitSelection[UnitCode.anna],
    clothes: UnitFullImage[UnitCode.anna],
    tagList: [ 
        TagID.ELEMENT_FIRE, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
    ],
    otherVersion: [],
    initHP: 2700,
    initATK: 375,
    puzzle: [ PuzzleCode.HUMAN_ANNA, PuzzleCode.HUMAN_NATASHA ],
    outfits: [],
    skillSet: []
}
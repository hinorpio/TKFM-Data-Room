import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10901: Unit = {
    ID: "10901",
    metaCode: "saria",
    prefix: {
        [Locale.tc]: "法斯帝國士兵",
        [Locale.sc]: "法斯帝国士兵",
        [Locale.en]: "Phasi Soldier",
        [Locale.jp]: "フォス兵士",
        [Locale.kr]: "파스제국 병사"
    },
    name: {
        [Locale.tc]: "賽蓮",
        [Locale.sc]: "赛莲",
        [Locale.en]: "Saria",
        [Locale.jp]: "セイレーン",
        [Locale.kr]: "사이렌"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `法斯帝國士兵賽蓮在法斯帝國工作已久，是一位熟練的士兵。對於戰爭沒有特別的喜惡，單純就是為了賺錢才投入這個工作。一直希望自己有朝一日可以賺大錢並卸甲歸田，只是距離那一天的到來還相當遙遠。\n\n『存錢存錢！』`,
        [Locale.sc]: `法斯帝国士兵赛莲在法斯帝国工作已久，是一位熟练的士兵。对于战争没有特别的喜恶，单纯就是为了赚钱才投入这个工作。一直希望自己有朝一日可以赚大钱并卸甲归田，只是距离那一天的到来还相当遥远。\n\n『存钱存钱！』`,
        [Locale.en]: `Saria has worked for the Phasi Empire for much of her life, becoming quite an accomplished soldier. She doesn't care much for war, mind you, simply doing it for the paycheck. She hopes to one day ascend the ranks high enough, make bank, then return home to the farm. Too bad that day's still quite a ways away.\n\n"Money money money!!"`,
        [Locale.jp]: `フォス帝国兵士セイレーンはフォス帝国で長い間仕事をしている熟練兵士の一人だ。戦争に好き嫌いといった感情はなく、金稼ぎのためにこの仕事をしている。いつかきっと大金を稼いで、鎧を脱ぎ捨てて里帰りできる日を楽しみにしているが、その日はまだまだ遠くのようだ。\n\n『さあ貯金貯金！』`,
        [Locale.kr]: `파스제국의 병사 사이렌은 제국을 위해 오랫동안 일한 숙련된 병사이다. 전쟁에 대해 특별히 호불호가 없으며 단순히 돈을 벌기 위해 이 일을 맡고 있다. 언제나 어느 날 자신이 큰돈을 벌어 병사 일을 그만두고 고향으로 돌아가기만을 꿈꾸지만 실제로 그날이 오기까지는 아득히 멀뿐이다. \n\n『돈, 돈을 벌어야 해!』`
    },
    rarity: Rarity.N,
    element: Element.DARK,
    position: Position.PROTECTOR,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.saria],
    thumbnail: UnitEssence[UnitCode.saria],
    selection: UnitSelection[UnitCode.saria],
    clothes: UnitFullImage[UnitCode.saria],
    tagList: [ 
        TagID.ELEMENT_DARK, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
    ],
    otherVersion: [],
    initHP: 2812,
    initATK: 360,
    puzzle: [ PuzzleCode.HUMAN_SARIA, PuzzleCode.DEMON_FLAY ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.saria],
    skillSet: []
}
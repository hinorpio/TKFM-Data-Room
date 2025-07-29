import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10119: Unit = {
    ID: "10119",
    metaCode: "s_aiko",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "艾可",
        [Locale.sc]: "艾可",
        [Locale.en]: "Aiko",
        [Locale.jp]: "アイカ",
        [Locale.kr]: "아이카"
    },
    abbreviation: {
        [Locale.tc]: [ "夏艾" ],
        [Locale.sc]: [ "夏艾" ],
        [Locale.en]: [ "S.Aiko" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수이카" ]
    },
    background: {
        [Locale.tc]: `跟隨凱薩前來度假的艾可，在主人的授意下負責擔任餐廳的服務生。為了讓主人玩得開心，完美的女僕服務生除了要負責接待客人、烹調菜品，還必須隨時滿足凱薩的侍寢要求，即便如此，艾可依舊注意到了每個小細節，讓主人在愉快的玩耍之際，還同時將所有麻煩的事情打理的井井有條，同時身為凱薩大人的女僕和餐廳服務生，艾可會盡自己最大的努力，為大家創造美好的夏日時光。\n\n『歡迎光臨！我是您專屬的女僕服務生艾可，請問您要點什麼呢~』`,
        [Locale.sc]: `跟随凯萨前来度假的艾可，在主人的授意下负责担任餐厅的服务生。为了让主人玩得开心，完美的女仆服务生除了要负责接待客人、烹调菜品，还必须随时满足凯萨的侍寝要求，即便如此，艾可依旧注意到了每个小细节，让主人在愉快的玩耍之际，还同时将所有麻烦的事情打理的井井有条，同时身为凯萨大人的女仆和餐厅服务生，艾可会尽自己最大的努力，为大家创造美好的夏日时光。\n\n『欢迎光临！我是您专属的女仆服务生艾可，请问您要点什么呢~』`,
        [Locale.en]: `Following Caesar to the beach, Aiko becomes a waitress in her master's seaside restaurant. To keep him happy, the perfect maidservant and waitress doesn't just serve the customers, prepare the dishes, and indulge Caesar's every whim. She gives her full attention to every detail, so that her master can enjoy himself to the full while everything else is taken care of. At the same time, she always does her best to make the summer as beautiful and memorable as possible for all around.\n\n"Welcome! I'm Aiko, your personal maidservant. What can I do for you~?"`,
        [Locale.jp]: `シーザーと共に休暇に来たアイカ。ご主人様の意図の下、レストランのウェイトレスに。ご主人様を喜ばせようと、接客や料理の仕事の傍ら、シーザーの夜伽も担当することに。そんな状況でもアイカはミス一つせず、ご主人様を喜ばせながら、面倒な仕事をしっかりとこなしていった。シーザーのメイドでありウェイトレスでもあるアイカ。最大限の努力をして、美しい夏の思い出をみんなに届けるのであった。\n\n『いらっしゃいませ！あなたの専属メイド、アイカです。ご注文はお決まりですか？』`,
        [Locale.kr]: `시저를 따라 휴가를 나온 아이카. 주인의 지시에 따라 식당 종업원으로 일하게 되었다. 완벽한 메이드는 주인을 즐겁게 하기 위해 손님 접대, 요리, 섹스 요구를 늘 만족시켜야 하는 법. 사소한 것 하나까지 그냥 넘어가는 법이 없으며, 즐겁게 휴가를 즐기면서도 산재한 골칫거리를 수월하게 처리한다. 시저의 메이드이자 동시에 레스토랑 웨이터로서 아이카는 멋진 여름날의 추억을 만들기 위해 최선을 다할 것이다.\n\n『어서오세요! 전 당신의 전용 메이드 아이카랍니다~ 무엇을 주문하시겠어요~』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/06/07",
    essence: UnitEssence[UnitCode.s_aiko],
    thumbnail: UnitEssence[UnitCode.s_aiko],
    selection: UnitSelection[UnitCode.s_aiko],
    clothes: UnitFullImage[UnitCode.s_aiko],
    tagList: [],
    otherVersion: [ UnitCode.aiko, UnitCode.x_aiko, UnitCode.xx_aiko, UnitCode.p_aiko ],
    initHP: 3600,
    initATK: 979.2,
    puzzle: [ PuzzleCode.EVENT_2023_SUMMER_2 ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.s_aiko],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
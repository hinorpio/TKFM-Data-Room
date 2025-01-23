import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10811: Unit = {
    ID: "10811",
    metaCode: "jolina",
    prefix: {
        [Locale.tc]: "冷豔美醫",
        [Locale.sc]: "冷艳美医",
        [Locale.en]: "Cold Doctor",
        [Locale.jp]: "冷徹女医",
        [Locale.kr]: "시크한 미녀의사"
    },
    name: {
        [Locale.tc]: "嘉莉娜",
        [Locale.sc]: "嘉莉娜",
        [Locale.en]: "Jolina",
        [Locale.jp]: "カリナ",
        [Locale.kr]: "카리나"
    },
    abbreviation: {
        [Locale.tc]: [ "美醫" ],
        [Locale.sc]: [ "美医" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `法斯帝國的醫護官，會隨軍至最前線協助。標準的冰山美人，即使面對重傷病患也毫無感情的冷靜處理。醫術精湛，且因冷靜沉穩的手法讓傷患接受治療時的痛苦可以降到最低。沒有必要的話，一天開口說的話語可以不超過10句。但一旦說出口便是一針見血的真知灼見，並且不會顧及所說的話是否傷人自尊。\n\n『……又一個半殘是嗎？就放在那裡吧。』`,
        [Locale.sc]: `法斯帝国的医护官，会随军至最前线协助。标准的冰山美人，即使面对重伤病患也毫无感情的冷静处理。医术精湛，且因冷静沉稳的手法让伤患接受治疗时的痛苦可以降到最低。没有必要的话，一天开口说的话语可以不超过10句。但一旦说出口便是一针见血的真知灼见，并且不会顾及所说的话是否伤人自尊。\n\n『……又一个半残是吗？就放在那里吧。』`,
        [Locale.en]: `An official doctor of the Phasi Empire, Jolina provides assistance to military forces on the front lines. A classic beauty and a total ice queen, she treats even the most gruesome of injuries without the slightest hint of emotion. Her medical skills are second to none and due to her calm, steady hands, she always makes sure her patients feel as little pain as possible during treatment. The cold, silent type, it's not unusual for her to speak only a handful of sentences a day. However, when she does speak, she's always direct and straight to the point, not caring in the least whether she offends anyone or not.\n\n"... Another invalid? Put him over there."`,
        [Locale.jp]: `フォス帝国の医務官、軍隊とともに最前線で活躍している。いわゆる冷たい美人、たとえ患者が重傷であっても淡々と対処する。医術の腕は良く、またその冷静沈着なやり方のため、患者の治療時の負担を最小限に抑えることができる。必要がなければ、一日に数言しか話さないでいられる。しかし一度口を開けば、そのデリカシーに欠けた直接的すぎる物言いのため、相手を傷つけてしまう。\n\n『……また死にぞこない？そこに放っておいて』`,
        [Locale.kr]: `파스제국의 의사로, 최전선에서 군대를 지원한다.전형적인 차도녀. 중상을 입은 환자를 마주하더라도 아무런 감정 없이 담담하게 처리한다. 의술에 매우 뛰어나며, 차분하고 신중한 손길로 환자들이 치료할 때 느끼는 고통을 최소화한다. 불필요하다면 하루에 10마디 이상 말하지 않을 수도 있다. 그러나 한 번 입을 열면 독설을 마다하지 않으며 환자의 자존심이 상하든 말든 조금도 개의치 않는다.\n\n『......또 다 죽어가는 환자인가? 그냥 거기 둬.』`
    },
    rarity: Rarity.R,
    element: Element.FIRE,
    position: Position.HEALER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2021/12/01",
    essence: UnitEssence[UnitCode.jolina],
    thumbnail: UnitEssence[UnitCode.jolina],
    selection: UnitSelection[UnitCode.jolina],
    clothes: UnitFullImage[UnitCode.jolina],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
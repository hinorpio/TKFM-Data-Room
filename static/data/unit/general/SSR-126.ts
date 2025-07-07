import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10155: Unit = {
    ID: "10155",
    metaCode: "m_ks8",
    prefix: {
        [Locale.tc]: "冷淡女僕",
        [Locale.sc]: "冷淡女仆",
        [Locale.en]: "Cold Maid",
        [Locale.jp]: "冷酷メイド",
        [Locale.kr]: "냉담한 메이드"
    },
    name: {
        [Locale.tc]: "KS-Ⅷ",
        [Locale.sc]: "KS-Ⅷ",
        [Locale.en]: "KS-Ⅷ",
        [Locale.jp]: "KS-Ⅷ",
        [Locale.kr]: "KS-Ⅷ"
    },
    abbreviation: {
        [Locale.tc]: [ "僕K", "火機" ],
        [Locale.sc]: [ "仆K", "火机" ],
        [Locale.en]: [ "M.KS", "M.KS8" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "메섹돌" ]
    },
    background: {
        [Locale.tc]: `作為善於戰鬥的魔導人偶，不論是哪種困難的任務或危險狀況都難不倒KS-Ⅷ。事實上，就連戰鬥以外的事情，只要給KS-Ⅷ充足的資料學習，她都能快速掌握各種訣竅。看中這點的奈奈美決定委託KS-Ⅷ，邀請她參與自己主辦的一日限定女僕活動，宣傳自己全新的偶像專輯。然而，平常缺乏情緒起伏和表情變化的KS-Ⅷ，真的能扮演好這種熱情洋溢的角色，順利完成任務嗎？對戰鬥用魔導人偶KS-Ⅷ來說，或許這次會碰上真正的挑戰。\n\n『報告，蛋包飯已準備完成，請問需要添加番茄醬嗎？』`,
        [Locale.sc]: `作为善于战斗的魔导人偶，不论是哪种困难的任务或危险状况都难不倒KS-Ⅷ。事实上，就连战斗以外的事情，只要给KS-Ⅷ充足的资料学习，她都能快速掌握各种诀窍。看中这点的奈奈美决定委託KS-Ⅷ，邀请她参与自己主办的一日限定女僕活动，宣传自己全新的偶像专辑。然而，平常缺乏情绪起伏和表情变化的KS-Ⅷ，真的能扮演好这种热情洋溢的角色，顺利完成任务吗？对战斗用魔导人偶KS-Ⅷ来说，或许这次会碰上真正的挑战。\n\n『报告，蛋包饭已准备完成，请问需要添加番茄酱吗？』`,
        [Locale.en]: `As a combat-skilled automaton, KS-Ⅷ can handle any difficult mission or dangerous situation with ease. In fact, even tasks outside of combat can be quickly mastered by KS-Ⅷ as long as she is provided with sufficient information to learn from. Recognizing this, Nanami decides to enlist KS-Ⅷ's help, inviting her to participate in a one-day maid event she is hosting to promote her brand-new idol album. However, since KS-Ⅷ usually lacks emotional fluctuations and facial expressions, can she fit into her new role with enthusiasm and complete the task? For a combat-oriented automaton like KS-Ⅷ, this might be a true challenge.\n\n"Report: The omelette rice is ready. Would you like to add some ketchup?"`,
        [Locale.jp]: `戦闘が得意な魔導人形として、どんな困難な任務や危険な状況も難なくこなすKS-Ⅷ。実のところ、戦闘以外のことでも、必要なデータさえあれば素早くコツを掴むことができるのだ。この特性に目を付けたななみは、彼女の新しいアルバムの宣伝を兼ねた一日限定メイドイベントにKS-Ⅷを招くことにした。しかし、普段は感情の起伏や表情変化に乏しいKS-Ⅷが、このような熱意あふれる役をうまくこなせるのだろうか？戦闘用魔導人形のKS-Ⅷにとって、今回は真の挑戦になるかもしれない。\n\n『報告、オムライスの準備が完了しました。ケチャップの追加はご要望でしょうか？』`,
        [Locale.kr]: `전투에 특화된 마도 인형으로, 어떤 어려운 임무나 위험한 상황도 KS-Ⅷ에게는 문제가 되지 않는다. 사실, 전투 이외의 일들도 충분한 자료만 제공되면 KS-Ⅷ은 금방 여러 가지 기술을 익혀버린다. 이 점을 눈여겨본 나나미는 KS-Ⅷ에게 의뢰하여, 자신이 주최하는 하루 한정 메이드 이벤트에 초대해 함께 새 아이돌 음반을 홍보하기로 했다. 하지만 감정 변화도 거의 없고, 표정도 딱딱한 KS-Ⅷ이 과연 이런 열정 넘치는 역할을 잘 소화해낼 수 있을까? 전투용 마도 인형 KS-Ⅷ에게 있어 진짜 도전이 될지도 모른다.\n\n『보고합니다. 오므라이스가 준비되었습니다. 케첩을 추가하시겠습니까?』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2024/11/13",
    essence: UnitEssence[UnitCode.m_ks8],
    thumbnail: UnitEssence[UnitCode.m_ks8],
    selection: UnitSelection[UnitCode.m_ks8],
    clothes: UnitFullImage[UnitCode.m_ks8],
    tagList: [],
    otherVersion: [ UnitCode.ks8, UnitCode.s_ks8 ],
    initHP: 4000,
    initATK: 881.6,
    puzzle: [],
    outfits: [],
    skillSet: []
}
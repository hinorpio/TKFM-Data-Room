import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10031: Unit = {
    ID: "10031",
    metaCode: "s_ks8",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "KS-Ⅷ",
        [Locale.sc]: "KS-Ⅷ",
        [Locale.en]: "KS-Ⅷ",
        [Locale.jp]: "KS-Ⅷ",
        [Locale.kr]: "KS-Ⅷ"
    },
    abbreviation: {
        [Locale.tc]: [ "夏K", "夏機", "泳K", "泳機", "公瑾" ],
        [Locale.sc]: [ "夏K", "夏机", "泳K", "泳机", "公瑾" ],
        [Locale.en]: [ "S.KS", "S.KS8" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수섹돌" ]
    },
    background: {
        [Locale.tc]: `接受凱薩的命令，在海邊度假期間魔導人偶KS-VIII將負責露露與靜的護衛。為了完成任務，KS-VIII特別更換了水用特殊裝備。最大下潛極限1200米，航速44.7海里，並配有反雷達偵測機能。能夠以最快時間偵測落水目標，展開救援行動與進行急救。安心、安全，最值得信賴的魔導人偶海灘保鑣KS-VIII正式上線。\n\n『紫外線指數分析中…分析完畢，在正午太陽下有曬傷可能，建議塗抹防曬乳。』`,
        [Locale.sc]: `接受凯萨的命令，在海边度假期间魔导人偶KS-VIII将负责露露与静的护卫。为了完成任务，KS-VIII特别更换了水用特殊装备。最大下潜极限1200米，航速44.7海里，并配有反雷达侦测机能。能够以最快时间侦测落水目标，展开救援行动与进行急救。安心、安全，最值得信赖的魔导人偶海滩保镳KS-VIII正式上线。\n\n『紫外线指数分析中…分析完毕，在正午太阳下有晒伤可能，建议涂抹防晒乳。』`,
        [Locale.en]: `Following Caesar's orders, KS-VIII comes to the beach to keep watch over Lulu and Shizuka. To better protect them, KS installs some new beach-side functionalities. She can go to a depth of 1200 meters, swim at 44.7 knots, and has even equipped herself with radar... all to keep the water-inept Lulu from drowning. Safe and careful, KS-VIII is the best beach bodyguard one could hope for.\n\n"Initiating UV analysis... analysis complete. 68% probability of sunburn; I recommend applying sun screen."`,
        [Locale.jp]: `シーザーの命令を受け、バカンス中、魔導人形KS-VIIIはルルと静の護衛を請け負った。任務を達成するために、KS-VIIIは水用特殊装備を着た。最大1200メートルまで潜水でき、44.7ノットの速度で泳ぐことができるほか、レーダー感知機能を有している。最速で水に落ちた目標を察知し、救助を行う。安心、安全、最も信頼のおける魔導人形ライフガードKS-VIIIがオンライン。\n\n『紫外線指数を分析中…………分析完了。正午は日焼けの可能性あり、日焼け止めを塗ることを推奨します』`,
        [Locale.kr]: `시저의 명령을 접수한 후, 마도 인형KS-VIII는 바캉스 기간 동안 루루와 시즈카의 호위를 맡았다. 임무 완수에 착오가 없도록 KS-VIII는 특별히 해양용 장비로 교체한다. 최대 수심 1200미터까지 잠수할 수 있고 44.7해리의 항속거리를 보유하며 스텔스 기능 또한 탑재됐다. 가장 빠른 시간 안에 물에 빠진 타깃을 감지하여 재빠른 구원과 응급처치를 실시할 수 있다. 가장 믿음직스럽고 든든하며 안전을 책임지는 해변의 보디가드 마도 인형 KS-VIII 정식 등장!\n\n『자외선지수 분석 중... 분석 완료. 정오의 햇빛을 쬐면 화상을 입을 수 있으니 선크림을 바를 것을 권장합니다』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2021/05/28",
    essence: UnitEssence[UnitCode.s_ks8],
    thumbnail: UnitEssence[UnitCode.s_ks8],
    selection: UnitSelection[UnitCode.s_ks8],
    clothes: UnitFullImage[UnitCode.s_ks8],
    tagList: [],
    otherVersion: [ UnitCode.ks8, UnitCode.m_ks8 ],
    initHP: 3720,
    initATK: 947.2,
    puzzle: [ PuzzleCode.EVENT_2021_SUMMER_3 ],
    outfits: [],
    skillSet: []
}
import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10186: Unit = {
    ID: "10186",
    metaCode: "m_salucia",
    prefix: {
        [Locale.tc]: "優雅女僕",
        [Locale.sc]: "优雅女仆",
        [Locale.en]: "Splendid Maid",
        [Locale.jp]: "優雅なメイド",
        [Locale.kr]: "우아한 메이드"
    },
    name: {
        [Locale.tc]: "賽露西亞",
        [Locale.sc]: "赛露西亚",
        [Locale.en]: "Salucia",
        [Locale.jp]: "セルシア",
        [Locale.kr]: "살루시아"
    },
    abbreviation: {
        [Locale.tc]: [ "僕精", "僕王" ],
        [Locale.sc]: [ "仆精", "仆王" ],
        [Locale.en]: [ "M.Salucia", "M.Salu" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "메살루" ]
    },
    background: {
        [Locale.tc]: `賽露西亞按照凱薩的喜好訂製了女僕服裝，準備在適當的時機給凱薩一個驚喜。不過，隨心所欲的凱薩怎麼可能按照別人的預想來行動呢？在凱薩一時興起的提議下，賽露西亞回到了某個令她非常懷念的地方。看著眼前熟悉的景象，她心中埋藏許久的回憶也跟著被一一喚醒。為了讓停滯的時間重新轉動，讓蒙塵的回憶之地恢復色彩，賽露西亞捲起袖子，帶著自己的女僕和愛人，準備開始進行一場時隔千年的大掃除。\n\n『呵呵，您要來杯下午茶嗎？我的主人～』`,
        [Locale.sc]: `赛露西亚按照凯萨的喜好订製了女僕服装，准备在适当的时机给凯萨一个惊喜。不过，随心所欲的凯萨怎麽可能按照别人的预想来行动呢？在凯萨一时兴起的提议下，赛露西亚回到了某个令她非常怀念的地方。看着眼前熟悉的景象，她心中埋藏许久的回忆也跟着被一一唤醒。为了让停滞的时间重新转动，让蒙尘的回忆之地恢復色彩，赛露西亚捲起袖子，带着自己的女僕和爱人，准备开始进行一场时隔千年的大扫除。\n\n『呵呵，您要来杯下午茶吗？我的主人～』`,
        [Locale.en]: `Turns out, Salucia only ordered a tailor-made maid outfit so she can surprise her Caesar at just the right time. The Archdemon, however, is not one to act according to someone else's desperate expectations... As he makes one mention of her hometown, Salucia suddenly feels the urge to return to a place that she has greatly missed. Returning to that familiar location, a hidden memory reawakens something deep within her. To make a stagnant time kickstart once more and restore the colors to a dusty land filled with memories, Salucia rolls up her sleeves and takes her maid and lover to start a much-needed clean-up that had not been carried out for a thousand years.\n\n"Hihi. Would you like a cup of afternoon tea, my dear Master~?"`,
        [Locale.jp]: `もともとは、ちょうどいいタイミングでシーザーを驚かせるために、セルシアが彼の好みに合わせて特製のメイド服を仕立てただけだった。だが、気まぐれな魔王シーザーが、人の思惑どおりに動くはずもない。彼の突発的な提案によって、セルシアは久しく足を踏み入れていなかった、懐かしい場所へと戻ることになった。目の前に広がる見慣れた光景を見つめながら、彼女の胸の奥に眠っていた記憶が呼び覚まされていく。止まってしまった時間を再び動かし、色褪せた思い出の地に色を取り戻す。セルシアは袖をまくり上げ、自分のメイドと恋人を連れ、千年ぶりの大掃除をすることに決めたのだった。\n\n『ふふっ、午後のお茶はいかがですか？ご主人様～』`,
        [Locale.kr]: `원래는 적절한 타이밍에 시저에게 서프라이즈를 주기 위해, 살루시아가 시저의 취향에 맞춰 특별히 주문 제작한 메이드복이었다. 하지만 마음대로 행동하는 마왕 시저가 다른 사람의 예상대로 움직일 리 없었다. 시저의 갑작스러운 제안으로, 살루시아는 자신이 무척이나 그리워하던 어떤 장소로 돌아오게 되었다. 눈앞의 익숙한 풍경을 바라보며, 그녀의 마음속 깊이 묻혀있던 오랜 추억들이 하나둘씩 되살아나기 시작했다. 멈춰있던 시간을 다시 되돌리고, 먼지에 덮인 추억의 장소에 다시 색을 입히기 위해, 살루시아는 소매를 걷어붙이고 자신의 메이드와 연인을 데리고 천 년 만의 대청소를 시작할 준비를 했다.\n\n『후후, 에프터눈 티 한 잔 하시겠어요? 주인님~』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2025/11/12",
    essence: UnitEssence[UnitCode.m_salucia],
    thumbnail: UnitEssence[UnitCode.m_salucia],
    selection: UnitSelection[UnitCode.m_salucia],
    clothes: UnitFullImage[UnitCode.m_salucia],
    tagList: [],
    otherVersion: [ UnitCode.salucia, UnitCode.h_salucia, UnitCode.ny_salucia, UnitCode.s_salucia ],
    initHP: 4619.2,
    initATK: 763.2,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.m_salucia],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
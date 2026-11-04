import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10215: Unit = {
    ID: "10215",
    metaCode: "h_bedard",
    prefix: {
        [Locale.tc]: "不政確狼女",
        [Locale.sc]: "不政确狼女",
        [Locale.en]: "PC-Cancelled",
        [Locale.jp]: "不政確な狼女",
        [Locale.kr]: "비PC주의 울프걸"
    },
    name: {
        [Locale.tc]: "萊爾貝妲",
        [Locale.sc]: "莱尔贝妲",
        [Locale.en]: "Lér Bédard",
        [Locale.jp]: "ラベンダー",
        [Locale.kr]: "라벤더"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `自從多元守護者聯盟被擊潰後，萊爾貝妲就一直待在魔王城裡無所事事，靠著各種後宮福利過日子。雖然明顯是在揮霍自己的外貌紅利，但據本人所言，她只不過是在享用自己的正當權利，並養精蓄銳等待捲土重來的時機而已。而就在萬聖節這個神奇的日子裡，她終於等到了復仇的機會。就算因為意外換上了這副暴露又不政確的衣裝，但若這是為了將世界導正，她仍然義不容辭。心中懷著大志，多元守護者聯盟的聯盟長即將在惡作劇之夜東山再起！\n\n『不管我的外在變得如何，只要心中有多元，我就是多元的一分子，應該要享有多元的福利！』`,
        [Locale.sc]: `自从多元守护者联盟被击溃后，莱尔贝妲就一直待在魔王城里无所事事，靠着各种后宫福利过日子。虽然明显是在挥霍自己的外貌红利，但据本人所言，她只不过是在享用自己的正当权利，并养精蓄锐等待捲土重来的时机而已。而就在万圣节这个神奇的日子里，她终于等到了復仇的机会。就算因为意外换上了这副暴露又不政确的衣装，但若这是为了将世界导正，她仍然义不容辞。心中怀着大志，多元守护者联盟的联盟长即将在恶作剧之夜东山再起！\n\n『不管我的外在变得如何，只要心中有多元，我就是多元的一分子，应该要享有多元的福利！』`,
        [Locale.en]: `Ever since the Diversity Alliance was crushed, Lér Bédard has been idling away in Caesar's Palace, freeloading off harem privileges. Though clearly squandering her "beauty dividend", she insists she is merely exercising her rightful entitlements while gathering strength for an unprecedented comeback. On this magical occasion of Halloween, her opportunity for revenge finally arrives. Even if she ends up forced into an outfit that is both overly revealing and politically incorrect, she will not hesitate as long as it helps set the world right. Carrying grand ambitions in her heart, the leader of the Diversity Alliance is set to rise again on the Night of Mischief!\n\n"No matter how my appearance changes, as long as diversity resides in my heart, I remain a part of a diverse intersectionality and deserve to reap its benefits!"`,
        [Locale.jp]: `多様性保護連盟が壊滅してからというもの、魔王城にて後宮の恩恵を貪りながら自堕落な日々を送っていたラベンダー。完全にビジュの強さを乱用しているのだが、本人曰くこれは正当な権利の行使にすぎず、いつかの下剋上のため今は雌伏の時だとかなんとか。そして来る奇祭・ハロウィンにて、ついにそのチャンスが訪れた。うっかりこんなポリコレ的に不『政』確な露出の酷いコスチュームにされてはしまったが、これもすべては世界を正しく導くため。彼女の正義の心は依然揺らがない。胸に大志を秘めた多様性保護連盟長がこのイタズラの夜、ついに蜂起を企てる！\n\n『あたしがどんな姿になろうとも、多様性がこの胸にある限り、あたしも多様性の一部。多様性の恩恵を受ける権利はあるはずだ！』`,
        [Locale.kr]: `다양성 수호 연맹이 와해된 이후, 라벤더는 줄곧 마왕성에서 빈둥거리며 온갖 하렘 복지를 누려왔다. 누가 봐도 자신의 외모를 무기 삼아 호사를 누리는 모습이었지만, 본인은 그저 정당한 권리를 누리며 힘을 비축해 재기할 타이밍을 노리고 있었을 뿐이라고 주장한다. 그리고 마침내, 신비로운 할로윈의 밤에 복수의 기회가 찾아왔다. 본의 아니게 노출도 심하고 정치적으로 올바르지 않은 옷을 입게 되었지만, 세상을 바로 잡기 위해서라면 그녀는 기꺼이 나설 생각이다. 큰 뜻을 품은 다양성 수호 연맹의 연맹장이 장난으로 가득한 밤, 다시 한번 재기를 노린다!\n\n『내 겉모습이 어떻게 변하든 마음속에 다양성을 존중하는 마음이 있는 한, 나도 그 안에 속한 일원이야. 즉, 다양성의 복지를 누릴 권리가 있다는 얘기지!』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/10/07",
    essence: UnitEssence[UnitCode.h_bedard],
    thumbnail: UnitEssence[UnitCode.h_bedard],
    selection: UnitSelection[UnitCode.h_bedard],
    clothes: UnitFullImage[UnitCode.h_bedard],
    tagList: [],
    otherVersion: [ UnitCode.bedard ],
    initHP: 3873.6,
    initATK: 953.6,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.h_bedard],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}

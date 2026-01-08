import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10192: Unit = {
    ID: "10192",
    metaCode: "b_shizuka",
    prefix: {
        [Locale.tc]: "花嫁",
        [Locale.sc]: "花嫁",
        [Locale.en]: "Bride",
        [Locale.jp]: "花嫁",
        [Locale.kr]: "새신부"
    },
    name: {
        [Locale.tc]: "靜",
        [Locale.sc]: "静",
        [Locale.en]: "Shizuka",
        [Locale.jp]: "静",
        [Locale.kr]: "시즈카"
    },
    abbreviation: {
        [Locale.tc]: [ "花靜", "花狐" ],
        [Locale.sc]: [ "花静", "花狐" ],
        [Locale.en]: [ "B.Shiz", "B.Shizuka" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "신즈카" ]
    },
    background: {
        [Locale.tc]: `據說只要穿上純白的新娘服，就能變身成世界上最幸福的新娘子。因為想要體驗看看當新娘是什麼感覺，靜便在偶然路過某間神社時，許下了她的新年願望。令她想不到的是，願望竟然真的實現了！在好心的神明使者協助下，這隻調皮的小狐狸收起了調皮的一面，展現出不同於平常的端莊面貌。為了能夠抓住永遠的幸福，最熱衷惡作劇的狐狸新娘，今日準備出嫁了！\n\n『嘿嘿～狐狸新娘登場喏～！』`,
        [Locale.sc]: `据说只要穿上纯白的新娘服，就能变身成世界上最幸福的新娘子。因为想要体验看看当新娘是什麽感觉，静便在偶然路过某间神社时，许下了她的新年愿望。令她想不到的是，愿望竟然真的实现了！在好心的神明使者协助下，这隻调皮的小狐狸收起了调皮的一面，展现出不同于平常的端庄面貌。为了能够抓住永远的幸福，最热衷恶作剧的狐狸新娘，今日准备出嫁了！\n\n『嘿嘿～狐狸新娘登场喏～！』`,
        [Locale.en]: `They say that putting on a pure white wedding dress turns a young lady into the happiest bride in the world. Wanting to experience what it feels like to be a bride, Shizuka makes her New Year's wish while passing by a certain shrine. To her surprise, the wish actually comes true! With help from a kind divine messenger, this mischievous little fox puts away her playful side and reveals a graceful appearance that is highly unlike her usual self. To seize eternal happiness once and for all, the prank-loving fox bride prepares to get married on this special day!\n\n"Hehe~ The foxy bride is making her grand entrance~!"`,
        [Locale.jp]: `純白のウェディングドレスを身に纏えば、世界で一番幸せな花嫁になれると言われている。花嫁がどんな気持ちなのか体験してみたかった静は、たまたま通りかかった神社で新年の願い事をした。すると、その願いが本当に叶ってしまったのである！心優しい神の使者の助けを借りて、イタズラ好きな狐はいつものお茶目な一面を封印し、普段とは違う上品で淑やかな姿を見せている。永遠の幸せを掴むために、イタズラが大好きな狐の花嫁は、今日お嫁に行くのだ！\n\n『えへへ～狐の花嫁、参上だよ～！』`,
        [Locale.kr]: `순백의 웨딩드레스를 입기만 하면 세상에서 가장 행복한 신부로 변신할 수 있다는 이야기가 있다. 신부의 기분을 체험해보고 싶었던 시즈카는 우연히 지나가던 어느 신사에서 새해 소원을 빌었다. 그런데 뜻밖에도 소원이 정말로 이루어졌다! 친절한 신의 사자의 도움으로, 이 장난꾸러기 여우는 평소의 치던 장난을 멈추고, 평상시와는 사뭇 다른 단아한 모습을 보여주게 됐는데. 영원한 행복을 손에 넣기 위해, 장난에 가장 진심이었던 여우 신부는 오늘 시집갈 준비를 마쳤다!\n\n『헤헤~ 여우 신부 등장이요~!』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/01/07",
    essence: UnitEssence[UnitCode.b_shizuka],
    thumbnail: UnitEssence[UnitCode.b_shizuka],
    selection: UnitSelection[UnitCode.b_shizuka],
    clothes: UnitFullImage[UnitCode.b_shizuka],
    tagList: [],
    otherVersion: [ UnitCode.shizuka, UnitCode.s_shizuka, UnitCode.x_shizuka, UnitCode.beer_shizuka ],
    initHP: 3944,
    initATK: 936,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.b_shizuka],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
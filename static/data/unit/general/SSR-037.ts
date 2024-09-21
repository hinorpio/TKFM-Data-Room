import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10072: Unit = {
    ID: "10072",
    metaCode: "b_baal",
    prefix: {
        [Locale.tc]: "花嫁",
        [Locale.sc]: "花嫁",
        [Locale.en]: "Bride",
        [Locale.jp]: "花嫁",
        [Locale.kr]: "새신부"
    },
    name: {
        [Locale.tc]: "巴爾",
        [Locale.sc]: "巴尔",
        [Locale.en]: "Ba'al",
        [Locale.jp]: "バル",
        [Locale.kr]: "바알"
    },
    abbreviation: {
        [Locale.tc]: [ "花巴" ],
        [Locale.sc]: [ "花巴" ],
        [Locale.en]: [ "B.Baal" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "신바알" ]
    },
    background: {
        [Locale.tc]: `在情人節的這一天，換上了純白的禮服，即便如此還是無法掩蓋其與生俱來的古靈精怪。一開始巴爾只是嗅到了可以賺大錢的機會才會來參加活動。卻沒想到在換上了婚紗之後，心裡竟然湧現出一股奇妙的雀躍感。她實在無法分辨，這股令人心神蕩漾的歡喜究竟是來自於又找到了賺錢的好點子。還是因為隱藏在內心最深處，那個一直被掩蓋的心意，悄悄的冒了出來。\n\n『要先吃飯~先洗澡~還是......嘿嘿嘿，先付帳呢？』`,
        [Locale.sc]: `在情人节的这一天，换上了纯白的礼服，即便如此还是无法掩盖其与生俱来的古灵精怪。一开始巴尔只是嗅到了可以赚大钱的机会才会来参加活动。却没想到在换上了婚纱之后，心里竟然涌现出一股奇妙的雀跃感。她实在无法分辨，这股令人心神荡漾的欢喜究竟是来自于又找到了赚钱的好点子。还是因为隐藏在内心最深处，那个一直被掩盖的心意，悄悄的冒了出来。\n\n『要先吃饭~先洗澡~还是......嘿嘿嘿，先付帐呢？』`,
        [Locale.en]: `Ba'al puts on a lovely wedding dress for Valentine's day... but even then, she can't hide her conniving nature. Seeing the other women dressed up, Ba'al immediately gets the idea to use them as unpaid models. And yet, after putting on the dress herself, Ba'al can't tell if all her newfound attraction to "love" comes from a sense of novelty, or if she's really getting the marriage bug.\n\n"Eat, sleep, and get paid!"`,
        [Locale.jp]: `バレンタインの今日、バルは純白のドレスを身に着けていた。しかしそれでも、お転婆イメージを払しょくするのは無理そうだ。始めはお金稼ぎのチャンスを嗅ぎつけこのイベントに参加した。しかし実際にウェディングドレスを試着すると、どこからか喜びの気持ちが込み上がってきた。しかしバルは、それがお金稼ぎのチャンスを見つけた喜びなのか、はたまた心の奥深くに眠る乙女心の喜びなのか、分からないようだ。\n\n『ご飯にする？お風呂にする？それとも～えへへっ、先に支払いする？』`,
        [Locale.kr]: `발렌타이 데이! 아무리 순백의 옷으로 갈아입어도 감출 수 없는 요물의 기운! 원래는 그저 돈벌이가 될까하여 이번 행사에 참여한 바알. 그저 잠깐 웨딩드레스를 입어본 것만으로도 샘솟는 흥분감을 억누르기 힘들 줄은... 그녀는 사실 분간하지 못한다. 이 감정이 돈벌이를 찾았다는 사실에서 비롯된 기쁨인지, 아니면 마음속 깊은 곳에 숨겨두었던 본심이 조금씩 새어 나오고 있는 것인지를.\n\n『먼저 식사하시고 샤워하시겠어요?... 아니면...헤헷, 먼저 결제부터 하시겠어요?』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2022/02/16",
    essence: UnitEssence[UnitCode.b_baal],
    thumbnail: UnitEssence[UnitCode.b_baal],
    selection: UnitSelection[UnitCode.b_baal],
    clothes: UnitFullImage[UnitCode.b_baal],
    tagList: [],
    otherVersion: [ UnitCode.baal, UnitCode.f_baal, UnitCode.v_baal, UnitCode.s_baal ],
    puzzle: [],
    skillSet: []
}
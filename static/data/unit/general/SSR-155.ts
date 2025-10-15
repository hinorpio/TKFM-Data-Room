import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10184: Unit = {
    ID: "10184",
    metaCode: "h_momDaphne",
    prefix: {
        [Locale.tc]: "好色兔兔",
        [Locale.sc]: "好色兔兔",
        [Locale.en]: "Horny Bunny",
        [Locale.jp]: "えっちなうさぎ",
        [Locale.kr]: "밝히는 토끼"
    },
    name: {
        [Locale.tc]: "達芙妮",
        [Locale.sc]: "达芙妮",
        [Locale.en]: "Daphne",
        [Locale.jp]: "ダフィー",
        [Locale.kr]: "더피"
    },
    abbreviation: {
        [Locale.tc]: [ "幼媽", "幼兔媽", "小兔媽" ],
        [Locale.sc]: [ "幼妈", "幼兔妈", "小兔妈" ],
        [Locale.en]: [ "H.MomDaphne" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "농피" ]
    },
    background: {
        [Locale.tc]: `因為捲入了奇怪的事件，達芙妮被強行轉變成小仙子的型態。失去自己早已習慣戴著的仿真兔耳，身體也回到尚未找到歸屬的那個時期。但儘管身體變年輕了，她卻依然保有所有的記憶和個性。也就是說，達芙妮依然是那個溫柔可親、善解人意的好媽媽。不過在變成了這副身體之後，有些調皮的達芙妮似乎想到了某些大膽的想法要去嘗試。在這個時期沒有被正視及滿足的慾望，她打算趁這次機會好好體驗個夠。\n\n『不給糖就搗蛋～至於怎麼搗蛋嘛…你想不想親自體驗看看呢…？』`,
        [Locale.sc]: `因为捲入了奇怪的事件，达芙妮被强行转变成小仙子的型态。失去自己早已习惯戴着的彷真兔耳，身体也回到尚未找到归属的那个时期。但儘管身体变年轻了，她却依然保有所有的记忆和个性。也就是说，达芙妮依然是那个温柔可亲、善解人意的好妈妈。不过在变成了这副身体之后，有些调皮的达芙妮似乎想到了某些大胆的想法要去尝试。在这个时期没有被正视及满足的慾望，她打算趁这次机会好好体验个够。\n\n『不给糖就捣蛋～至于怎麽捣蛋嘛…你想不想亲自体验看看呢…？』`,
        [Locale.en]: `After stumbling into the strangest of predicaments, Daphne transforms into a small fairy version of herself. Now, stripped of her favorite fake funny ears, she is once again facing an identity crisis. Although her new appearance is more youthful, her memories and personality remain the same. That is to say, she is still the soothing momma with a warm embrace. But with her new body, Daphne has suddenly grown more daring to try novel and exciting experiences. In this time of intense desires, she intends to seize the day and grab life by the balls.\n\n"Trick or treeeat~ As for the tricking... Do you wanna experience it for yourself...?"`,
        [Locale.jp]: `奇妙な事件に巻き込まれたせいで、ダフィーは強制的に小さな妖精の姿へと変えられてしまった。長い間身につけてきた偽物のウサ耳を失い、体もまだ自分の居場所を見つけられなかった頃の姿に戻ってしまう。だが、体が若返ってしまっても、彼女の記憶や性格はそのまま。つまりダフィーは、今でも優しく親しみやすく、思いやり深い良き母のままだった。この姿になってからというもの、ちょっとお茶目なダフィーは何やら大胆なことを試そうとしていた。あの頃、向き合うことも満たされることのなかった欲望を、今回こそ思う存分味わってみることにしたのだった。\n\n『お菓子をくれなきゃイタズラするわよ～？どんなイタズラかって？……自分で体験してみたい？』`,
        [Locale.kr]: `이상한 사건에 휘말린 탓에, 더피는 강제로 페어리의 모습으로 변해버렸다. 늘 쓰던 가짜 토끼 귀도 잃고, 몸도 아직 제 자리를 찾지 못하던 그 시절로 돌아가 버린 것. 하지만 몸은 어려졌어도, 그녀는 여전히 모든 기억과 성격을 간직하고 있었다. 다시 말해, 더피는 여전히 다정하고 친근하며, 속 깊은 좋은 엄마였다. 다만 이 몸으로 변한 뒤, 장난기 많은 더피는 뭔가 대담한 생각들을 떠올리며 시험해 보고 싶은 듯했다. 그 시절 제대로 주목받지도, 채워지지도 못했던 욕망을, 이번 기회에 마음껏 느껴보려는 것이다.\n\n『트릭 오어 트릿~ 그 트릭이 어떤 건지, 직접 경험해 보고 싶지 않아...?』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/10/15",
    essence: UnitEssence[UnitCode.h_momDaphne],
    thumbnail: UnitEssence[UnitCode.h_momDaphne],
    selection: UnitSelection[UnitCode.h_momDaphne],
    clothes: UnitFullImage[UnitCode.h_momDaphne],
    tagList: [],
    otherVersion: [ UnitCode.momDaphne ],
    initHP: 3806.4,
    initATK: 926.4,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.h_momDaphne],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
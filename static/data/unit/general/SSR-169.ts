import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10198: Unit = {
    ID: "10198",
    metaCode: "cos_momo",
    prefix: {
        [Locale.tc]: "冷豔鋒刃",
        [Locale.sc]: "冷艳锋刃",
        [Locale.en]: "Cold-Blooded Blade",
        [Locale.jp]: "冷艶の刃",
        [Locale.kr]: "냉염의 칼날"
    },
    name: {
        [Locale.tc]: "毛毛",
        [Locale.sc]: "毛毛",
        [Locale.en]: "Momo",
        [Locale.jp]: "モモ",
        [Locale.kr]: "모모"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [ "Cos.Momo", "C.Momo" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "냉모모" ]
    },
    background: {
        [Locale.tc]: `身為一個職業殺手，毛毛是個非常獨特的存在。她總是迅速並確實的完成任務，並不留下過多的痕跡。但只要是認識毛毛的人都會知道，她並不如傳聞中那樣冷酷無情。對毛毛來說，消滅目標只是為了完成任務，自己並沒有特別喜歡戰鬥。身為殺手的她甚至會主動挑選目標，比起金錢她更看重人性。只是這點被她利用冷酷的形象給包裝了起來。\n\n『我成為殺手不是因為喜歡殺戮，只是工作剛好都是這方面的而已。』`,
        [Locale.sc]: `身为一个职业杀手，毛毛是个非常独特的存在。她总是迅速并确实的完成任务，并不留下过多的痕迹。但只要是认识毛毛的人都会知道，她并不如传闻中那样冷酷无情。对毛毛来说，消灭目标只是为了完成任务，自己并没有特别喜欢战斗。身为杀手的她甚至会主动挑选目标，比起金钱她更看重人性。只是这点被她利用冷酷的形象给包装了起来。\n\n『我成为杀手不是因为喜欢杀戮，只是工作刚好都是这方面的而已。』`,
        [Locale.en]: `As a professional assassin, Momo is a very unique existence. She always completes her missions swiftly and effectively, leaving behind no unnecessary traces. But anyone who knows Momo understands that she isn't nearly as cold and heartless as the rumors suggest. To Momo, eliminating a target is simply part of the job; she doesn't particularly enjoy combat itself. As an assassin, she even goes out of her way to select her targets, valuing humanity far more than money. It's just that she masks this trait behind a carefully crafted, icy persona.\n\n"I didn't become a killer because I enjoy slaughter; it's just that my work happens to involve it."`,
        [Locale.jp]: `プロの殺し屋として、モモは非常に独特な存在である。彼女は常に迅速かつ確実にミッションを完遂し、余計な痕跡を残すことはない。しかし、モモを知る者なら誰でも、彼女が噂されているほど冷酷無情ではないことを知っている。モモにとって、ターゲットを始末するのはミッション完遂のためであり、特に戦いを好んでいるわけではない。殺し屋でありながら、彼女は積極的にターゲットを選別し、金銭よりも人間性を重視している。ただ、この一面を冷酷なイメージで覆い隠しているのだ。\n\n『殺しが好きで殺し屋になったわけじゃない。たまたま仕事がこの分野だったってだけ』`,
        [Locale.kr]: `프로 킬러 모모는 매우 독특한 존재이다. 그녀는 언제나 신속하고 확실하게 임무를 완수하며, 그 어떤 흔적도 남기지 않는다. 하지만 모모를 아는 이들은 그녀가 소문처럼 냉혹하고 무정한 인물이 아님을 알고 있다. 모모에게 목표를 제거하는 것은 단지 임무 완수를 위한 과정일 뿐, 전투 자체를 특별히 즐기지는 않는다. 킬러임에도 불구하고 그녀는 스스로 대상을 선별하며, 금전보다 인성을 더욱 중시한다. 다만 이러한 면모는 그녀의 차가운 이미지 뒤에 철저히 감춰져 있을 뿐이다.\n\n『내가 킬러가 된 것은 살육을 즐기기 때문이 아니다. 단지 내 일이 우연히 이 분야였을 뿐이야.』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/03/11",
    essence: UnitEssence[UnitCode.cos_momo],
    thumbnail: UnitEssence[UnitCode.cos_momo],
    selection: UnitSelection[UnitCode.cos_momo],
    clothes: UnitFullImage[UnitCode.cos_momo],
    tagList: [],
    otherVersion: [],
    initHP: 3705.6,
    initATK: 996.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.cos_momo],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
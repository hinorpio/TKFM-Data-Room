import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10809: Unit = {
    ID: "10809",
    metaCode: "mia",
    prefix: {
        [Locale.tc]: "怪盜",
        [Locale.sc]: "怪盗",
        [Locale.en]: "Phantom Thief",
        [Locale.jp]: "怪盗",
        [Locale.kr]: "괴도"
    },
    name: {
        [Locale.tc]: "米雅",
        [Locale.sc]: "米雅",
        [Locale.en]: "Mia",
        [Locale.jp]: "ミア",
        [Locale.kr]: "미아"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `米雅是一位來無影去無蹤的神秘怪盜。她並不看重錢財，喜歡的只是在竊取珍寶時的緊張刺激，以及成功逃脫追捕，戲弄了所有人的成就感。除此之外，她還非常喜歡出風頭，認為寄送預告信是一種很重要的儀式。只不過，因為她有多次睡過頭，導致沒有在預告時間出現的前科，再加上腦袋不好，信函的謎題總是莫名其妙。所以她最近對於寄出的怪盜信總是不被重視而感到深深的煩惱。\n\n『下次的預告函該怎麼寫才好呢～』`,
        [Locale.sc]: `米雅是一位来无影去无踪的神秘怪盗。她并不看重钱财，喜欢的只是在窃取珍宝时的紧张刺激，以及成功逃脱追捕，戏弄了所有人的成就感。除此之外，她还非常喜欢出风头，认为寄送预告信是一种很重要的仪式。只不过，因为她有多次睡过头，导致没有在预告时间出现的前科，再加上脑袋不好，信函的谜题总是莫名其妙。所以她最近对于寄出的怪盗信总是不被重视而感到深深的烦恼。\n\n『下次的预告函该怎麽写才好呢～』`,
        [Locale.en]: `Hailing from parts unknown, Mia might be known as the "Phantom Thief", but she's not interested in money. What she loves more than anything is the thrill of snatching precious treasures and the satisfaction of using cunning tricks to escape her pursuers. A lover of the limelight, Mia always ensures to send warning to her unfortunate victims. However, she regularly oversleeps and doesn't show up when she says she will. She's also not the brightest, meaning her riddles tend to make little or no sense. As such, no one really pays attention to these warnings of hers, which has got Mia a little ticked off.\n\n"What should I write in my next warning letter, hmm~?"`,
        [Locale.jp]: `ミアは跡を残さぬ影なき不思議な怪盗。金目の物よりも、盗みを働く時の緊張感と刺激、そして逃げきったときの達成感が大好きなのだ。それ以外にも注目を浴びるのが大好きな彼女は、盗みを働く前に必ず予告状を送る。しかしいつも寝坊するため、予告をした時間に犯行を行うことはめったにない。そのうえお世辞にも頭がいいとは言えないため、予告状の謎はいつもでたらめである。これらのことが原因で予告状を本気にする人がいないため、ミアは頭を悩ませている。\n\n『次の予告状にはなんて書こうかな～』`,
        [Locale.kr]: `미야는 순식간에 흔적도 없이 종적을 감추는 신비한 괴도이다. 미야는 돈을 위해 괴도가 된 것이 아니다. 그녀가 원하는 건 보물을 훔쳤을 때 얻을 수 있는 스릴, 그리고 추격을 뿌리쳤을 때의 안도감이다. 이 밖에도 사람들 사이에 널리 회자되는 것을 좋아하여 예고장을 보내는 것을 굉장히 중요한 의식이라고 생각한다. 그러나 머리가 나빠 쉽게 까먹고 자주 늦잠을 자느라 본인이 예고한 시간에 나타난 적이 없어서 예고장은 언제나 수수께끼로 남는다. 최근 들어, 예고장을 보내도 항상 무시당해서 고민이 깊다.\n\n『다음 예고장은 뭐라고 쓰면 좋을까나~』`
    },
    rarity: Rarity.R,
    element: Element.WIND,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: true,
    releaseDate: "2022/07/13",
    essence: UnitEssence[UnitCode.mia],
    thumbnail: UnitEssence[UnitCode.mia],
    selection: UnitSelection[UnitCode.mia],
    clothes: UnitFullImage[UnitCode.mia],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
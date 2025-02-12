import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10163: Unit = {
    ID: "10163",
    metaCode: "ni_caesar",
    prefix: {
        [Locale.tc]: "夜之影",
        [Locale.sc]: "夜之影",
        [Locale.en]: "Night Shadow",
        [Locale.jp]: "夜ノ影",
        [Locale.kr]: "밤의 그림자"
    },
    name: {
        [Locale.tc]: "凱薩",
        [Locale.sc]: "凯萨",
        [Locale.en]: "Caesar",
        [Locale.jp]: "シーザー",
        [Locale.kr]: "시저"
    },
    abbreviation: {
        [Locale.tc]: [ "夜凱" ],
        [Locale.sc]: [ "夜凯" ],
        [Locale.en]: [ "Ni.Caesar", "Ni.Caez" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "닌저" ]
    },
    background: {
        [Locale.tc]: `魔王很帥氣，忍者也很帥氣。魔王會讓弱者發自內心的感到畏懼，忍者也會讓刺殺目標發自內心的感到害怕。魔王可以發射威力超強的魔力彈，忍者可以投擲命中率超高的手裏劍。魔王跟忍者有同時出現在戰場上過，但卻沒有魔王成為過忍者。也就是說，如果偉大的余成為了忍者，那余就會變成既帥氣又偉大的忍者魔王！在看完漫畫後腦中突然湧現如此念頭的異界凱薩，找上烈日國曾經的日之影，從她身上學習了許多關於忍者的專業知識。於是，烈日忍軍中最惡最強，同時也最不受拘束的忍者魔王誕生了！\n\n『余知道了，所謂的暗殺就是把所有目擊者通通解決對吧？這種事對余來說太簡單了～』`,
        [Locale.sc]: `魔王很帅气，忍者也很帅气。魔王会让弱者发自内心的感到畏惧，忍者也会让刺杀目标发自内心的感到害怕。魔王可以发射威力超强的魔力弹，忍者可以投掷命中率超高的手裏剑。魔王跟忍者有同时出现在战场上过，但却没有魔王成为过忍者。也就是说，如果伟大的余成为了忍者，那余就会变成既帅气又伟大的忍者魔王！在看完漫画后脑中突然涌现如此念头的异界凯萨，找上烈日国曾经的日之影，从她身上学习了许多关于忍者的专业知识。于是，烈日忍军中最恶最强，同时也最不受拘束的忍者魔王诞生了！\n\n『余知道了，所谓的暗杀就是把所有目击者通通解决对吧？这种事对余来说太简单了～』`,
        [Locale.en]: `The Archdemon is cool beyond measure, and so is the ninja. The Archdemon instills genuine fear in the weak, while the ninja makes their targets of assassination truly terrified. The Archdemon can shoot powerful magic bullets, while the ninja can throw shurikens with incredible accuracy. While both have appeared on the battlefield together, there has never been an Archdemon who is also a ninja. In other words, if the great Caesar were to become a ninja, then she would be the coolest Archdemon ninja to ever live! After reading a manga, Caesar is suddenly inspired to seek out Isorath's former Sun's Shadow to learn about ninjutsu. Thus, the most notorious, strongest, and least restrained ninja Archdemon in the Sun Ninja Army is born!\n\n"I understand now. Assassination means eliminating all witnesses, right? This is too easy for me~"`,
        [Locale.jp]: `魔王はかっこいいが、忍者もまたかっこいい。魔王は弱き者に心の底から恐怖を抱かせ、忍者は暗殺対象に心の底から恐れを抱かせる。魔王は強大な魔力弾を放ち、忍者は高い命中率を誇る手裏剣を投げる。戦場に魔王と忍者が同時に現れたことはあるが、忍者になった魔王はこれまでいなかった。つまり──偉大なる私が忍者になれば、「かっこよく、そして偉大なる忍者魔王」になるということではないか！漫画を読んだ直後にそんな考えが脳裏をよぎった異世界シーザーは、烈陽国の日之影を訪ね、忍者に関する知識を学んだ。こうして──烈陽忍軍最悪にして最強、そして最も自由奔放な忍者魔王が誕生したのであった！\n\n『わかったぞ！暗殺って目撃者を全員片付けることだろ？私からしたら朝飯前だ～』`,
        [Locale.kr]: `마왕은 멋지고 닌자도 멋지다. 마왕은 약자의 마음속 깊은 곳에 두려움을 심어주고, 닌자도 암살 대상의 마음속 깊은 곳에 공포를 심어준다. 마왕은 강력한 마력탄을 발사할 수 있고, 닌자는 명중률이 높은 수리검을 던질 수 있다. 마왕과 닌자가 전장에서 동시에 등장한 적은 있지만, 마왕이 닌자가 된 적은 한 번도 없었다. 즉, 위대한 이 몸이 닌자가 된다면, 나는 멋지고 위대한 닌자 마왕이 되는 것이다. 만화를 본 후, 이런 생각이 갑자기 떠오른 이세계 시저는 태양국의 전 닌자를 찾아가 닌자의 전문적인 지식을 배우기에 이른다. 이렇게, 태양국 닌자군에서 가장 사악하고 가장 강하며, 가장 자유로운 닌자 마왕이 탄생했다!\n\n『알고 있어. 암살은 모든 목격자를 없애면 되는 거지? 그런 건 나한테 식은 죽 먹기지~』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/02/12",
    essence: UnitEssence[UnitCode.ni_caesar],
    thumbnail: UnitEssence[UnitCode.ni_caesar],
    selection: UnitSelection[UnitCode.ni_caesar],
    clothes: UnitFullImage[UnitCode.ni_caesar],
    tagList: [],
    otherVersion: [ UnitCode.f_caesar, UnitCode.n_caesar, UnitCode.s_caesar ],
    puzzle: [],
    outfits: [],
    skillSet: []
}
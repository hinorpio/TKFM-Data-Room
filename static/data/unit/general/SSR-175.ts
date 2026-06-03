import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10204: Unit = {
    ID: "10204",
    metaCode: "s_britney",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "布蘭妮",
        [Locale.sc]: "布兰妮",
        [Locale.en]: "Britney",
        [Locale.jp]: "ブリトニー",
        [Locale.kr]: "브리트니"
    },
    abbreviation: {
        [Locale.tc]: [ "夏軍" ],
        [Locale.sc]: [ "夏军" ],
        [Locale.en]: [ "S.Britney" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수브리" ]
    },
    background: {
        [Locale.tc]: `趁著休假期間，布蘭妮打算徹底放下工作，好好享受難得的海灘度假旅程。然而，她美好的休閒時光又又又再次遭遇變故了！當她換上泳裝，準備到海灘玩耍時，眼前卻變成了冷得要命的冰天雪地。除此之外，凱薩毫無邏輯的要求、接連發生的各種意外、突然出現的怪獸，似乎都讓狀況更加雪上加霜。不過，對布蘭妮來說，這些都暫時不重要。此刻她聰明絕頂的大腦只思考著一件事情，那就如何在這酷寒的環境活下來！\n\n『嗚…好冷，為什麼本天才會跑到這種鬼地方啊！』`,
        [Locale.sc]: `趁着休假期间，布兰妮打算彻底放下工作，好好享受难得的海滩度假旅程。然而，她美好的休闲时光又又又再次遭遇变故了！当她换上泳装，准备到海滩玩耍时，眼前却变成了冷得要命的冰天雪地。除此之外，凯萨毫无逻辑的要求、接连发生的各种意外、突然出现的怪兽，似乎都让状况更加雪上加霜。不过，对布兰妮来说，这些都暂时不重要。此刻她聪明绝顶的大脑只思考着一件事情，那就如何在这酷寒的环境活下来！\n\n『呜…好冷，为什么本天才会跑到这种鬼地方啊！』`,
        [Locale.en]: `Taking advantage of her vacation time, Britney intends to completely put down her work and thoroughly enjoy a rare beach holiday. However, her precious leisure time has run into a mishap yet again! Just as she changed into her swimsuit and prepared to play on the beach, the scenery before her eyes turned into a freezing cold, snowy landscape. On top of that, Caesar's completely illogical demands, the succession of various accidents, and the monsters suddenly appearing all seem to make the situation even worse. However, to Britney, none of this matters for the time being. At this moment, her extraordinarily brilliant mind is only thinking about one thing: how to survive in this bitter, freezing environment!\n\n"Ooh... it's so cold! Why did a genius like me end up in a hellhole like this?!"`,
        [Locale.jp]: `久々の休暇に仕事のことは忘れ、めったにない海辺のリゾートツアーを満喫するつもりだったブリトニー。しかし、素敵なバカンスを過ごせると思った矢先、またしてもトラブルに見舞われることに！水着に着替え、いざビーチに向かった彼女の目の前に広がっていたのは、極寒の雪景色だった。それだけでなく、シーザーの無茶な要求、次々と巻き起こるハプニング、突然現れた怪獣のせいで、状況はますます悪化していくばかり。だが、今のブリトニーにとってそんなことはどうでもよかった。頭脳明晰の彼女がその時考えていたことはただ一つ──この極寒の地をどう生き延びるか！\n\n『うぅ……寒すぎ。どうして私がこんな寒い場所に来なきゃいけないの！』`,
        [Locale.kr]: `휴가를 맞아, 브리트니는 일 생각은 전부 내려놓고 오랜만의 해변 바캉스를 마음껏 즐길 생각이었다. 하지만 그녀의 평화로운 휴식은 또다시 예상치 못한 사건에 휘말리고 만다! 수영복으로 갈아입고 신나게 해변으로 나가려던 순간, 눈앞에 펼쳐진 건 얼어 죽을 것만 같은 추운 설원이었다. 거기에 시저의 불합리한 요구, 끊임없이 벌어지는 사고, 갑자기 나타난 괴수들까지. 상황은 점점 더 엉망이 되어간다. 하지만 브리트니에게 지금 그런 건 중요하지 않다. 현재 그녀의 천재적인 두뇌는 오직 단 한 가지, 이 혹한의 환경에서 살아남는 방법에 몰두해 있기에.\n\n『흑... 너무 추워, 왜 내가 이런 곳에 있는 거냐고!』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/06/03",
    essence: UnitEssence[UnitCode.s_britney],
    thumbnail: UnitEssence[UnitCode.s_britney],
    selection: UnitSelection[UnitCode.s_britney],
    clothes: UnitFullImage[UnitCode.s_britney],
    tagList: [],
    otherVersion: [],
    initHP: 3643.2,
    initATK: 1014.4,
    puzzle: [ PuzzleCode.EVENT_2026_SUMMER_4 ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.s_britney],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}

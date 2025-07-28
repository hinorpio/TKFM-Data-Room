import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10149: Unit = {
    ID: "10149",
    metaCode: "tsubaki",
    prefix: {
        [Locale.tc]: "千年靈狐",
        [Locale.sc]: "千年灵狐",
        [Locale.en]: "Millennium Fox",
        [Locale.jp]: "千年の妖狐",
        [Locale.kr]: "천년의 영호"
    },
    name: {
        [Locale.tc]: "椿",
        [Locale.sc]: "椿",
        [Locale.en]: "Tsubaki",
        [Locale.jp]: "椿",
        [Locale.kr]: "츠바키"
    },
    abbreviation: {
        [Locale.tc]: [ "狐媽" ],
        [Locale.sc]: [ "狐妈" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `雖然外表看不出來，本人也相當不喜歡提起這個話題，但椿其實已經活了將近上千年的時光。\n她的真身擁有九條巨大的尾巴，是在很久以前叱吒風雲的大妖怪。\n不過，隨著年歲增長，她也活得越來越隨興，不再與人逞兇鬥狠，反而喜歡用不同的手法捉弄別人，或是用能力帶給別人歡樂。\n雖然在因為一些事而失去力量，陷入沉睡之後，她銷聲匿跡了一段時間。\n但再次醒來的她，對這個幾乎被魔族統一，愈來愈好玩的世界，露出了非常大的興趣。\n\n『咦？問我今年幾歲？呵呵~怎麼能問淑女這種問題呢，那當然是永遠的十八歲囉~~』`,
        [Locale.sc]: `虽然外表看不出来，本人也相当不喜欢提起这个话题，但椿其实已经活了将近上千年的时光。\n她的真身拥有九条巨大的尾巴，是在很久以前叱咤风云的大妖怪。\n不过，随着年岁增长，她也活得越来越随兴，不再与人逞凶斗狠，反而喜欢用不同的手法捉弄别人，或是用能力带给别人欢乐。\n虽然在因为一些事而失去力量，陷入沉睡之後，她销声匿迹了一段时间。\n但再次醒来的她，对这个几乎被魔族统一，愈来愈好玩的世界，露出了非常大的兴趣。\n\n『咦？问我今年几岁？呵呵~怎麽能问淑女这种问题呢，那当然是永远的十八岁罗~~』`,
        [Locale.en]: `Though her visage does not show her age, she does not enjoy bringing it up. But then again, there is nothing to fear after having lived over a thousand years.\nTsubaki's true form possesses nine magnificent tails and was once a powerful monster many centuries ago.\nAs she grows older, however, she gradually lives a more casual existence and has forgone fighting with others. Instead, she now prefers to employ different techniques to tease her targets or use her innate abilities to bring about joyfulness.\nDespite having lost her powers after a series of unfortunate events and then withdrawing from the world as she fell into a deep sleep...\nShe eventually awoke to find herself in a new realm which has greatly sparked her interest; a realm practically dominated by Demonkind and exceedingly entertaining.\n\n"Hm? My age? My oh my~ One does not ask that of a lady. But of course, I'm forever 18~~"`,
        [Locale.jp]: `見た目からも分からない上、本人もこの話題を持ち出したくないようだが、椿はすでに千年近く生きている。\n彼女の真の姿は、九本の巨大な尾を持ち、昔は風雲を巻き起こしていた大妖怪なのだ。\nしかし、年を重ねるごとに気ままに生きるようになり、人と争うことを嫌うようになった。それどころか、さまざまな手法で他人をからかったり、能力を使って人々に楽しみを与えることを好むようになっていった。\nそんな彼女は、とある出来事で力を失い、長い間眠りについて姿を消していた。\nそして彼女が目を覚ました時、この世界が魔族に統一されてさらに面白くなっていることに気づき、興味を持ったのであった。\n\n『え？今年何歳かって？ウフフ~大人の女性に年齢を聞くもんじゃないわ。永遠の18歳に決まってるでしょ~』`,
        [Locale.kr]: `겉으로 보기에는 본인도 이 주제를 꺼내길 꺼려하는 듯하지만, 사실 츠바키는 수천 년에 가까운 세월을 살아왔다.\n사실 그녀의 진짜 정체는 9개의 커다란 꼬리를 지닌, 과거 엄청난 힘을 지녔던 대요괴.\n하지만 나이를 먹을수록 점점 더 여흥을 좇기 시작한 그녀는 타인과 싸우는 것을 멈추게 됐고, 갖가지 수단으로 다른 사람을 놀리거나 즐겁게 해 주는 것을 좋아하게 됐다.\n어떤 일로 인해 힘을 잃고 깊은 잠에 빠져 한동안 자취를 감췄던 그녀.\n그러나 다시 눈을 뜬 그녀는 마족에 의해 통일이 되어버리고 점점 더 재밌어지는 이 세계에 대해 큰 관심을 보이게 된다.\n\n『에? 올해 몇 살이냐고? 후훗~ 숙녀한테 그런 질문을 하다니~ 난 영원히 18세라고~~』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/08/14",
    essence: UnitEssence[UnitCode.tsubaki],
    thumbnail: UnitEssence[UnitCode.tsubaki],
    selection: UnitSelection[UnitCode.tsubaki],
    clothes: UnitFullImage[UnitCode.tsubaki],
    tagList: [],
    otherVersion: [ UnitCode.w_tsubaki ],
    initHP: 3528,
    initATK: 998.4,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.tsubaki],
    skillSet: []
}
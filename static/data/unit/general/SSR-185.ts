import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10214: Unit = {
    ID: "10214",
    metaCode: "h_baal",
    prefix: {
        [Locale.tc]: "無邪小惡魔",
        [Locale.sc]: "无邪小恶魔",
        [Locale.en]: "Undepraved Demon",
        [Locale.jp]: "無邪気な小悪魔",
        [Locale.kr]: "천진난만 소악마"
    },
    name: {
        [Locale.tc]: "巴爾",
        [Locale.sc]: "巴尔",
        [Locale.en]: "Ba'al",
        [Locale.jp]: "バル",
        [Locale.kr]: "바알"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `被萬聖魔力衝擊的巴爾，不僅失去了記憶，也回到了過往的姿態。楚楚可憐、天真無邪、乖巧可愛——這些原本和巴爾毫不相干的形容詞，如今全都體現在她的身上。曾經的狡詐與謀略消失無蹤，取而代之的是毫無防備的純真笑顏，讓人忍不住想將她好好保護起來。然而，在那看似無害的笑容背後，卻還是存有一絲難以言喻的違和感。\n\n『欸？陷阱？才沒有呢，人家只是要跟朋友玩而已～沒有要惡作劇啦～』`,
        [Locale.sc]: `被万圣魔力冲击的巴尔，不仅失去了记忆，也回到了过往的姿态。楚楚可怜、天真无邪、乖巧可爱——这些原本和巴尔毫不相干的形容词，如今全都体现在她的身上。曾经的狡诈与谋略消失无踪，取而代之的是毫无防备的纯真笑颜，让人忍不住想将她好好保护起来。然而，在那看似无害的笑容背后，却还是存有一丝难以言喻的违和感。\n\n『欸？陷阱？才没有呢，人家只是要跟朋友玩而已～没有要恶作剧啦～』`,
        [Locale.en]: `Struck by Halloween magic, Ba'al has not only lost her memories, but has also reverted to her past form. Pitiful, innocent, well-behaved, and adorable, adjectives once utterly foreign to her now undeniably describe her current state. Her past cunning and scheming have vanished without a trace, replaced by an unguarded, pure smile that makes everyone want to protect her. Yet, behind that seemingly harmless grin lingers an inexplicable sense of subtle dissonance.\n\n"Eh? A trap? Nah~ I'm just fooling around with a friend~ I'm not playing any tricks, promise~"`,
        [Locale.jp]: `ハロウィンの魔力に中てられ、記憶ごと昔の姿に巻き戻ってしまったバル。しおらしく、天真爛漫で、お利口さんなかわい子ちゃん──そんな本来のバルとは似ても似つかぬ形容詞が、今の姿にはよく似合う。今までの含みのあるずる賢さはどこかへとなりを潜め、その純粋で無防備な笑顔は見る者の庇護欲をどうしようもなくかきたてる。しかしその一見人畜無害な笑顔の裏には、何とも言えない違和感が見え隠れしていて……？\n\n『え？罠？そんなのあるわけないじゃん。お友達と遊んでるだけだも～ん、イタズラなんてしないよ～』`,
        [Locale.kr]: `할로윈 마력의 충격을 받은 바알은 기억을 잃었을 뿐만 아니라 과거의 모습으로 돌아가 버렸다. 가련하고, 천진난만하고, 얌전하고 귀여운——원래라면 바알과는 전혀 어울리지 않았을 표현들이 이제는 모두 그녀에게 딱 들어맞는다. 한때의 교활함과 비겁함은 자취를 감췄고, 그 자리를 아무런 경계심도 없는 순수한 미소가 대신하자 보는 이로 하여금 절로 그녀를 소중히 지켜주고 싶게 만든다. 하지만 그 무해해 보이는 미소 뒤에는 여전히 말로 설명하기 힘든 묘한 위화감이 남아 있다.\n\n『응? 함정? 그런 거 아니야. 그냥 친구랑 놀려고 한 것뿐인걸~ 장난치려는 건 아니야~』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/10/07",
    essence: UnitEssence[UnitCode.h_baal],
    thumbnail: UnitEssence[UnitCode.h_baal],
    selection: UnitSelection[UnitCode.h_baal],
    clothes: UnitFullImage[UnitCode.h_baal],
    tagList: [],
    otherVersion: [ UnitCode.baal, UnitCode.f_baal, UnitCode.b_baal, UnitCode.v_baal, UnitCode.s_baal, UnitCode.x_baal, UnitCode.sky_baal, UnitCode.fifth_baal ],
    initHP: 4134.4,
    initATK: 894.4,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.h_baal],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}

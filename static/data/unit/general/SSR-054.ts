import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10085: Unit = {
    ID: "10085",
    metaCode: "kana",
    prefix: {
        [Locale.tc]: "花魁",
        [Locale.sc]: "花魁",
        [Locale.en]: "Oiran",
        [Locale.jp]: "花魁",
        [Locale.kr]: "카구이"
    },
    name: {
        [Locale.tc]: "香奈",
        [Locale.sc]: "香奈",
        [Locale.en]: "Kana",
        [Locale.jp]: "香奈",
        [Locale.kr]: "카나"
    },
    abbreviation: {
        [Locale.tc]: [ "花魁", "魁", "香奈" ],
        [Locale.sc]: [ "花魁", "魁", "香奈" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `香奈曾經是烈日國歌舞伎町的首席遊女，素有「傳說中的花魁」之稱。不僅集書、畫、文、舞等才藝於一身，在她那美麗、端莊而知性的外貌底下，更是有著寢技高超、精通烈日國四十八手的一面。烈日國的貴族上至皇室下至諸大名，若想見她一面，都必須要先通過各式各樣的禮節測驗，並顯露充足的財力，才有機會一親芳澤。曾經有位皇子為了見到她，甚至不惜將搭建城堡的一半資金挪用到宴會上，就只為了博得美人歡心。然而，在烈日國覆滅之後，這位傾國傾城之女的下落也隨之不明。那些昔日的國民謠傳道，香奈也許正隱居在某處的山中也說不定。\n\n『不論何時都要保持優雅的姿態，是花魁的基本哦。』`,
        [Locale.sc]: `香奈曾经是烈日国歌舞伎町的首席游女，素有「传说中的花魁」之称。不仅集书、画、文、舞等才艺于一身，在她那美丽、端庄而知性的外貌底下，更是有着寝技高超、精通烈日国四十八手的一面。烈日国的贵族上至皇室下至诸大名，若想见她一面，都必须要先通过各式各样的礼节测验，并显露充足的财力，才有机会一亲芳泽。曾经有位皇子为了见到她，甚至不惜将搭建城堡的一半资金挪用到宴会上，就只为了博得美人欢心。然而，在烈日国覆灭之后，这位倾国倾城之女的下落也随之不明。那些昔日的国民谣传道，香奈也许正隐居在某处的山中也说不定。\n\n『不论何时都要保持优雅的姿态，是花魁的基本哦。』`,
        [Locale.en]: `Kana— the Isori oiran of legend, hailing from lively Kabukicho. With in-depth knowledge in the fields of art, literature, culture and dance, Kana is no ordinary courtesan. She possesses an unparalleled air of sophistication and wisdom and has even mastered each of Isorath's 48 legendary sex positions. Isori nobles, and even the royal family, must undergo a stringent series of etiquette tests if they wish to meet with Kana in person. Word has it there was a prince who spent half the funds for building a new palace on a lavish banquet just for a chance of a few minutes in Kana's presence. But following Isorath's demise, Kana's whereabouts became unknown... A rumor spread among the remaining Isori citizens that she may have retreated to the deep seclusion of the mountains...\n\n"I must maintain an air of grace and sophistication at all times. That's what it means to be an oiran."`,
        [Locale.jp]: `烈陽国の歌舞伎町でもてなしをしていた一流の花魁で、「伝説の花魁」の別名を持つ。高い教養を身につけており、その美しく知的な顔立ちの下には、烈陽国に伝わる優れた性のテクニックである四十八手を秘めている。烈陽国の貴族から皇室にいたるまでも、彼女に会おうとする者はまず最初に礼儀作法と羽振りの良さが彼女を満足させるレベルに達しているか審査される。かつてとある皇子は彼女に会うために城の建設費用の半分を宴の席で支払ったというから、彼女はまさに傾国の美女と呼ぶにふさわしいだろう。しかし烈陽国は滅んだ後、香奈の行方を知る者はいない。人々の間では、どこかの山中に隠居しているのではないかと噂されている。\n\n『どんなことがあっても優雅であり続けることが、花魁の在り方なのです』`,
        [Locale.kr]: `카나는 일찍이 예로부터 태양국의 가부키초에서 최고 유녀가 되어 '전설의 유녀'로 불렸다. 서(書), 화(畫), 문(文), 무(舞)에 모두 통달한 것은 물론, 아름답고 단정하고 지적인 외모에 침술도 뛰어나 태양국 전통의 '사십팔수' 까지 통달하였다. 태양국의 귀족부터 황실에 이르기까지 카나의 명성이 자자하여 그녀를 만나기 위해서는 우선 각종 예절을 섭렵하고 막대한 재물을 바쳐 충분한 재력을 드러내야만 비로소 그녀와 당면할 기회가 주어진다. 일찍이 카나를 한번 보기 위해서 성곽을 쌓을 자금 절반을 연회에 쓰면서까지 그녀의 환심을 사려고 했던 황자도 있었다. 그렇지만 태양국의 멸망 후에는 카나의 행방도 묘연해졌다...... 구태양국의 백성들 사이에서는 현재 그녀가 어느 산중에 은거하고 있는 게 아닌가 하는 소문이 떠돈다.\n\n『어떤 상황에서도 우아한 자태를 유지하는 것, 그것이 저 카구이 카나의 근본.』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2022/07/13",
    essence: UnitEssence[UnitCode.kana],
    thumbnail: UnitEssence[UnitCode.kana],
    selection: UnitSelection[UnitCode.kana],
    clothes: UnitFullImage[UnitCode.kana],
    tagList: [],
    otherVersion: [ UnitCode.f_kana ],
    initHP: 0,
    initATK: 0,
    puzzle: [],
    outfits: [],
    skillSet: []
}
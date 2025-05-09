import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10097: Unit = {
    ID: "10097",
    metaCode: "xx_aiko",
    prefix: {
        [Locale.tc]: "性誕兔女郎",
        [Locale.sc]: "性诞兔女郎",
        [Locale.en]: "Sexmas Bunny",
        [Locale.jp]: "セックスマスバニー",
        [Locale.kr]: "섹스마스 바니걸"
    },
    name: {
        [Locale.tc]: "艾可",
        [Locale.sc]: "艾可",
        [Locale.en]: "Aiko",
        [Locale.jp]: "アイカ",
        [Locale.kr]: "아이카"
    },
    abbreviation: {
        [Locale.tc]: [ "風艾", "性艾" ],
        [Locale.sc]: [ "风艾", "性艾" ],
        [Locale.en]: [ "XX.Aiko", "W.Aiko" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "바니카" ]
    },
    background: {
        [Locale.tc]: `『她』，誕生於艾可對聖誕節的怨恨。『她』，唯一的存在意義就是毀滅聖誕節。即便她和艾可的精神已經相互統一，但她依舊十分厭惡聖誕節。她遵循魔王凱薩的教誨，用性愛的概念將聖誕節傳統給全數替代，把聖誕節完全改造成了性誕節。然而，就在她的計畫即將成功之時，在她的眼皮底下竟然出現了渴望奪回聖誕傳統的骯髒老鼠。不可饒恕，這是絕對不可饒恕的事情。這一次，她要徹徹底底的，將那個令自己無比痛苦、憎恨的愚蠢節日給完全破壞掉！\n\n『呵呵呵～聖誕節這種愚蠢的節日，就讓我親自為它劃上句點吧』`,
        [Locale.sc]: `『她』，诞生于艾可对圣诞节的怨恨。『她』，唯一的存在意义就是毁灭圣诞节。即便她和艾可的精神已经相互统一，但她依旧十分厌恶圣诞节。她遵循魔王凯萨的教诲，用性爱的概念将圣诞节传统给全数替代，把圣诞节完全改造成了性诞节。然而，就在她的计画即将成功之时，在她的眼皮底下竟然出现了渴望夺回圣诞传统的肮脏老鼠。不可饶恕，这是绝对不可饶恕的事情。这一次，她要彻彻底底的，将那个令自己无比痛苦、憎恨的愚蠢节日给完全破坏掉！\n\n『呵呵呵～圣诞节这种愚蠢的节日，就让我亲自为它划上句点吧』`,
        [Locale.en]: `She was born out of Aiko's hate for Christmas. Her only mission: to destroy this wretched holiday. Even though her consciousness has melded together with Aiko's, her resentment for Christmas is as strong as it ever was. She obeys Master Caesar's teachings, replacing any holiday spirit with pure sexual desire, changing Christmas to Sexmas. And yet, just as her plans are about to come to fruition, she's stopped by some Santa-loving rat! Unforgivable!! This time, she's gonna make sure Christmas is eradicated 100%. Nobody's getting in her way!\n\n"Mehehe... Nobody's gonna 'miss' Christmas when I'm done with it!"`,
        [Locale.jp]: `『彼女』はクリスマスに対する憎しみから生まれた。『彼女』の存在意義はクリスマスを破滅させるため。ただそれだけなのだ。アイカと精神を統一した彼女だが、それでもなおクリスマスに対する憎しみが消えることはなかった。そこで彼女は魔王シーザーの教誨を尊重し、クリスマスの伝統をセックスの力でセックスマスに変えたのだ。彼女の計画は無事に成功を収めたと誰もが思ったが、アイカはその陰でクリスマスの伝統を奪い返そうとする人たちがいることに気付いた。許せない……絶対に許せない！彼女は自分に苦痛を与えた憎たらしいクリスマスを完全に破壊しようと立ち上がったのであった。\n\n『フフフッ、クリスマスなんて愚かな祝日は、私が消してあげようっと』`,
        [Locale.kr]: `『그녀』는 크리스마스를 향한 증오에서 비롯되었다. 『그녀』의 유일한 존재 의의는 크리스마스를 파멸시키는 것. 아이카와 정신을 통일한 그녀이지만 크리스마스를 향한 증오는 여전히 남아있다. 그녀는 마왕 시저의 가르침에 따라 크리스마스의 전통과 개념을 섹스로 물들여 섹스마스라는 기념일로 다시 태어나게 했다. 그녀의 계획이 성공하려 할 때쯤 크리스마스의 전통을 되찾으려 하는 자들이 나타났다. 절대로... 절대로 용서할 수 없어. 자신에게 큰 고통을 안겨준 크리스마스를 철저히 박살내버리겠다는 그녀!\n\n『후후훗~ 바보 같은 기념일 따위, 내 손으로 직접 끝장을 내주지』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/12/14",
    essence: UnitEssence[UnitCode.xx_aiko],
    thumbnail: UnitEssence[UnitCode.xx_aiko],
    selection: UnitSelection[UnitCode.xx_aiko],
    clothes: UnitFullImage[UnitCode.xx_aiko],
    tagList: [],
    otherVersion: [ UnitCode.aiko, UnitCode.x_aiko, UnitCode.s_aiko, UnitCode.p_aiko ],
    puzzle: [],
    outfits: [],
    skillSet: []
}
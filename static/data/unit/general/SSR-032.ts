import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10052: Unit = {
    ID: "10052",
    metaCode: "x_aiko",
    prefix: {
        [Locale.tc]: "暗黑聖誕",
        [Locale.sc]: "暗黑圣诞",
        [Locale.en]: "Dark Christmas",
        [Locale.jp]: "ダークサンタ",
        [Locale.kr]: "암흑의 산타"
    },
    name: {
        [Locale.tc]: "艾可",
        [Locale.sc]: "艾可",
        [Locale.en]: "Aiko",
        [Locale.jp]: "アイカ",
        [Locale.kr]: "아이카"
    },
    abbreviation: {
        [Locale.tc]: [ "黑艾", "聖艾" ],
        [Locale.sc]: [ "黑艾", "圣艾" ],
        [Locale.en]: [ "X.Aiko", "C.Aiko" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "산타카" ]
    },
    background: {
        [Locale.tc]: `魔管家艾可有一個人盡皆知的秘密，那就是每到聖誕節，她就會性情大變。原本像個依順小動物，就算凱薩臨幸他人也不以為意的她。一旦聽到聖誕節的字眼，她將會徹底轉變成另外一個人，性格180度大轉變。之所以會變成這樣，是因為艾可從小就沒有度過聖誕節過，一個人孤苦伶仃。所以極度厭恨聖誕節，身體產生了打從心底抗拒聖誕節的因子。艾可將會排除所有試圖誘惑凱薩過聖誕節的女人，破壞所有想要慶祝聖誕節的商店。就算對象是聖誕老人，她也照殺不誤。\n\n『聖誕節…令人憎恨的節日，這到底有什麼好慶祝的？』`,
        [Locale.sc]: `魔管家艾可有一个人尽皆知的秘密，那就是每到圣诞节，她就会性情大变。原本像个依顺小动物，就算凯萨临幸他人也不以为意的她。一旦听到圣诞节的字眼，她将会彻底转变成另外一个人，性格180度大转变。之所以会变成这样，是因为艾可从小就没有度过圣诞节过，一个人孤苦伶仃。所以极度厌恨圣诞节，身体产生了打从心底抗拒圣诞节的因子。艾可将会排除所有试图诱惑凯萨过圣诞节的女人，破坏所有想要庆祝圣诞节的商店。就算对象是圣诞老人，她也照杀不误。\n\n『圣诞节…令人憎恨的节日，这到底有什么好庆祝的？』`,
        [Locale.en]: `There's an open secret at Caesar's palace that says Aiko goes through a sudden mysterious change whenever Christmas time draws near. She turns from an obedient servant into a complete and utter maniac, unafraid of even Caesar himself. Just hearing the word Christmas sends her personality in a complete 180. The reason for this stems from Aiko's childhood. Growing up alone, she never got to experience a real Christmas. The extreme hatred she harbors for Christmas has caused some changes to occur deep within her psyche. Aiko will exterminate any woman who tries to seduce Caesar into celebrating Christmas. She'll bankrupt any store that puts up even the subtlest of Christmas decorations. Even if her opponent is Santa Claus himself, she'll cut his throat and leave him for dead without a moment's hesitation.\n\n"Christmas... What an utterly revolting, disgusting and downright nauseating idea for a holiday!"`,
        [Locale.jp]: `メイドアイカには誰もが知る秘密がある。それはクリスマスになると性格が急変することだ。普段は大人しい小動物のような彼女。シーザーが他の女性を可愛がったとしても、その女性に敵意を持つことは無い。しかしアイカは、クリスマスという単語を耳にするだけで、まるで人が変わったかのように性格が180度変わるのだ。こうなってしまったのは、アイカは小さいころからクリスマスを孤独に一人過ごしていたからである。そのせいでクリスマス嫌いの彼女は身体が本能的にクリスマスを拒否してしまうのだ。アイカはクリスマスの夜をシーザーと過ごそうと考える女性を排除し、さらにはクリスマスのお祝いモードのお店を破壊する。そして、サンタクロースであっても殺してしまうだろう。\n\n『クリスマス……憎たらしい日ですね。何がそんなに楽しくてこの日を過ごすんでしょう？』`,
        [Locale.kr]: `마족 메이드 아이카에겐 한 가지 비밀이 있다. 바로 크리스마스 시즌 때마다 성격이 완전히 뒤바뀐다는 것! 작은 애완동물과도 같은 그녀. 시저가 다른 여자와 잠자리에 들더라도 별다른 내색을 하지 않던 그녀이지만... [크리스마스]... 이 단어만 들으면 아이카의 성격은 180도 바뀌어 버린다. 어릴 때부터 줄곧 혼자 쓸쓸히 크리스마스를 보내왔던 아이카. 결국 그녀의 마음 깊은 곳엔 크리스마스를 향한 극도의 증오심이 자리 잡고 말았다. 아이카는 시저와 함께 크리스마스를 보내려 하는 여자들을 제거하고, 크리스마스 관련 상품을 파는 모든 판매점을 파괴해버릴 생각이다. 그녀는 심지어 산타까지 제거 대상으로 삼고 있다.\n\n『크리스마스... 대체 특별할 게 뭐가 있는 날이라고 그리도 유난을 떠는 거지!?』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2021/12/15",
    essence: UnitEssence[UnitCode.x_aiko],
    thumbnail: UnitEssence[UnitCode.x_aiko],
    selection: UnitSelection[UnitCode.x_aiko],
    clothes: UnitFullImage[UnitCode.x_aiko],
    tagList: [],
    otherVersion: [ UnitCode.aiko, UnitCode.xx_aiko, UnitCode.s_aiko, UnitCode.p_aiko ],
    initHP: 3740.8,
    initATK: 942.4,
    puzzle: [],
    outfits: [],
    skillSet: []
}
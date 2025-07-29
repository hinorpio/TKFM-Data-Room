import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10054: Unit = {
    ID: "10054",
    metaCode: "evie",
    prefix: {
        [Locale.tc]: "聖誕馴鹿",
        [Locale.sc]: "圣诞驯鹿",
        [Locale.en]: "Xmas Reindeer",
        [Locale.jp]: "聖夜のトナカイ",
        [Locale.kr]: "X-mas 순록"
    },
    name: {
        [Locale.tc]: "希伊",
        [Locale.sc]: "希伊",
        [Locale.en]: "Evie",
        [Locale.jp]: "リリー",
        [Locale.kr]: "릴리"
    },
    abbreviation: {
        [Locale.tc]: [ "馴鹿", "鹿", "CE" ],
        [Locale.sc]: [ "驯鹿", "鹿", "CE" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: [ "구릴리" ]
    },
    background: {
        [Locale.tc]: `希依對聖誕老人完全忠心耿耿，雖然外表亮麗，但至今仍然是處子之身。對於送小孩禮物一事感到開心，一整年最期待的就是聖誕節那一天。由於聖誕老人出事，所以只好委託當今最有權勢的凱薩大人幫忙製造玩具，代價則是獻出自己的身體。對於希依來說，只要能讓小孩子們開心，就算獻出自己的身體也沒關係。\n\n『Jingle bells~jingle bells~Jingle all the way~（歌聲）』`,
        [Locale.sc]: `希依对圣诞老人完全忠心耿耿，虽然外表亮丽，但至今仍然是处子之身。对于送小孩礼物一事感到开心，一整年最期待的就是圣诞节那一天。由于圣诞老人出事，所以只好委托当今最有权势的凯萨大人帮忙制造玩具，代价则是献出自己的身体。对于希依来说，只要能让小孩子们开心，就算献出自己的身体也没关系。\n\n『Jingle bells~jingle bells~Jingle all the way~（歌声）』`,
        [Locale.en]: `Utterly devoted to Santa Claus, Evie might be beautiful, but she's still a pure virgin maiden. Christmas is her favorite day of the year and nothing makes Evie happier than delivering gifts to excited children. When Santa runs into a spot of trouble, Evie is forced to beg the almighty Caesar to help make toys for all the expectant children, agreeing to devote herself to him in return. There's nothing Evie wouldn't do - including giving herself to Caesar - in order to protect the smiles on the faces of the children.\n\n"Jingle bells~jingle bells~Jingle all the way~ (singing)"`,
        [Locale.jp]: `トナカイのリリーは、サンタクロースに高い忠誠心を持っている。一見大人っぽいが、まだ処女の身である。子供にプレゼントをあげるのが好きなため、彼女が一年で一番好きな日はクリスマスなのだそうだ。しかし今年はサンタクロースが不調なため、権力と権威のあるシーザーにオモチャの製造を依頼することになった。リリーは子供たちが喜ぶのであれば、自分の身体を捧げることなど気にしない。\n\n『ジングルベル~ジングルベル~鈴が鳴る~（歌声）』`,
        [Locale.kr]: `산타클로스를 동경하는 순록 릴리. 빼어난 외모를 지녔지만 아직까지 처녀이다. 선물을 주는 일에 큰 기쁨을 느끼며 1년에 한 번 있는 크리스마스를 가장 고대하며 기다린다. 산타클로스에게 일이 생기자 어쩔 수 없이 올해는 시저에게 장난감 제작을 의뢰하게 됐는데... 그에 대한 보수는 바로 릴리, 자신의 육체! 아이들에게 기쁨을 전해줄 수만 있다면 기꺼이 자신의 몸을 바칠 수 있다고 생각한 릴리였다.\n\n『종소리~울려라~종소리 울려~』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2021/12/15",
    essence: UnitEssence[UnitCode.evie],
    thumbnail: UnitEssence[UnitCode.evie],
    selection: UnitSelection[UnitCode.evie],
    clothes: UnitFullImage[UnitCode.evie],
    tagList: [],
    otherVersion: [ UnitCode.w_evie, UnitCode.s_evie ],
    initHP: 5102.4,
    initATK: 691.2,
    puzzle: [ PuzzleCode.EVENT_2021_XMAS_1 ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.evie],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
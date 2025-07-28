import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10082: Unit = {
    ID: "10082",
    metaCode: "b_satan",
    prefix: {
        [Locale.tc]: "花嫁",
        [Locale.sc]: "花嫁",
        [Locale.en]: "Bride",
        [Locale.jp]: "花嫁",
        [Locale.kr]: "새신부"
    },
    name: {
        [Locale.tc]: "撒旦",
        [Locale.sc]: "撒旦",
        [Locale.en]: "Satan",
        [Locale.jp]: "サタン",
        [Locale.kr]: "사탄"
    },
    abbreviation: {
        [Locale.tc]: [ "花撒", "花旦" ],
        [Locale.sc]: [ "花撒", "花旦" ],
        [Locale.en]: [ "B.Satan" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "신사탄" ]
    },
    background: {
        [Locale.tc]: `婚姻，那是弱者為了束縛彼此而創造出的詞語。對於真正的強者而言，根本就沒有必要使用言語和情感去約束對方。強大的肉體和激烈的性愛，才是雄性與雌性間最重要的聯繫。不過，雖然說是這麼說，但要是有人覬覦自己作為凱薩正室的地位。撒旦還是會選擇毫不留情地予以擊潰，碾碎，藉此來展示自己正宮的威嚴。畢竟，在與愛人激烈交合之前，先來場作為餘興節目的廝殺那是再好不過的了。\n\n『我是凱薩大人的正室唷，因為巴爾跟伊布力斯都比我弱呢。』`,
        [Locale.sc]: `婚姻，那是弱者为了束缚彼此而创造出的词语。对于真正的强者而言，根本就没有必要使用言语和情感去约束对方。强大的肉体和激烈的性爱，才是雄性与雌性间最重要的联系。不过，虽然说是这么说，但要是有人觊觎自己作为凯萨正室的地位。撒旦还是会选择毫不留情地予以击溃，碾碎，借此来展示自己正宫的威严。毕竟，在与爱人激烈交合之前，先来场作为余兴节目的厮杀那是再好不过的了。\n\n『我是凯萨大人的正室唷，因为巴尔跟伊布力斯都比我弱呢。』`,
        [Locale.en]: `Marriage? That's just another word for the strong conquering each other. If both parties are strong warriors, there's no need for silly "vows" or "emotions" to get in the way. The only connection Satan needs is sex and violence. That said, when other women try and take Master Caesar as their own, away from Satan... You bet she's going to do everything in her power to take Caesar back and make him her one-and-only. Satan can see it all now... locked in heated battle, a fight to the death for ones true love... what could be better?\n\n"What do I care about Ba'al or Iblis? They're so much weaker than I am."`,
        [Locale.jp]: `婚姻、それは弱者が互いを束縛し合うために作り出した言葉。本物の強者は、言葉や感情で相手を束縛する必要はない。強大な肉体と激しいセックスこそが、雄と雌の最も大切な繋がりなのだ。しかし、誰かがシーザーの正室だと主張すれば話は違う。サタンはその人物を原形を留めないほどに殴りつけ、正室の威厳を見せるのだ。愛人とセックスをする前に、余興として殺し合いをするくらいが彼女にとってちょうどいいだろう。\n\n『私はシーザー様の正室よ。バルもイブリースも、私よりずっと弱いんだから』`,
        [Locale.kr]: `결혼, 그건 약자들끼리 서로 속박하기 위해 만들어낸 말. 진짜 강자는 말이 아닌 행동으로 보여주는 법. 최강의 육체끼리 격렬한 섹스를 벌이는 것이야말로 암컷과 수컷 간에 가장 이상적인 결합이라 할 수 있다. 이렇게 말은 했지만 주제도 모르고 시저의 정실을 자처하는 멍청이들이 즐비하다. 결국 사탄은 무자비한 파괴와 살육으로 정실의 위엄을 증명하기로 했다. 애인과의 섹스 전, 텐션을 올리기에 목숨을 건 싸움만한 것이 없다고 생각하는 사탄.\n\n『나야말로 시저 님의 진정한 정실. 바알이나 이블리스는 나보다 약하잖아?』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/02/16",
    essence: UnitEssence[UnitCode.b_satan],
    thumbnail: UnitEssence[UnitCode.b_satan],
    selection: UnitSelection[UnitCode.b_satan],
    clothes: UnitFullImage[UnitCode.b_satan],
    tagList: [],
    otherVersion: [ UnitCode.satan, UnitCode.e_satan, UnitCode.v_satan, UnitCode.s_satan, UnitCode.h_satan ],
    initHP: 3544,
    initATK: 995.2,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.b_satan],
    skillSet: []
}
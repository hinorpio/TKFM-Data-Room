import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10805: Unit = {
    ID: "10805",
    metaCode: "sable",
    prefix: {
        [Locale.tc]: "魅魔",
        [Locale.sc]: "魅魔",
        [Locale.en]: "Succubus",
        [Locale.jp]: "サキュバス",
        [Locale.kr]: "서큐버스"
    },
    name: {
        [Locale.tc]: "撒芭絲",
        [Locale.sc]: "撒芭丝",
        [Locale.en]: "Sable",
        [Locale.jp]: "サバス",
        [Locale.kr]: "세바스"
    },
    abbreviation: {
        [Locale.tc]: [ "魅魔" ],
        [Locale.sc]: [ "魅魔" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `撒芭絲是為了做愛而活的魅魔，她每天都在人間界遊走，吸取男性精氣。她喜歡裝成楚楚可憐的樣子，以英雄救美的戲碼引誘男人上鉤，這麼一來她就能藉口獻身來吸取男人精氣，等被視作獵物的男性沉溺於肉慾不可自拔後，撒芭絲就會露出真面目，將對方的一切，包括親情、金錢，甚至是生命都榨乾後才會離去。對撒芭絲而言，男性就只是獵物，柔情蜜意都是裝出來的，畢竟誰會和食物談戀愛呢？\n\n『這次的獵物該選誰才好呢，嘻嘻。』`,
        [Locale.sc]: `撒芭丝是为了做爱而活的魅魔，她每天都在人间界游走，吸取男性精气。她喜欢装成楚楚可怜的样子，以英雄救美的戏码引诱男人上钩，这么一来她就能藉口献身来吸取男人精气，等被视作猎物的男性沉溺于肉欲不可自拔后，撒芭丝就会露出真面目，将对方的一切，包括亲情、金钱，甚至是生命都榨干后才会离去。对撒芭丝而言，男性就只是猎物，柔情蜜意都是装出来的，毕竟谁会和食物谈恋爱呢？\n\n『这次的猎物该选谁才好呢，嘻嘻。』`,
        [Locale.en]: `Sable's a succubus that lives for sex. Day in and day out she wanders the human realm, seducing men and absorbing their lifeforce. She likes to act like a damsel in distress in need of a hero, only then leading them somewhere secluded to make love. Only once they're completely enraptured in lust and pleasure will she sap their lifeforce, as well as their money, valuables, and whatever else they've got on hand. As far as Sable's concerned, men are just food. She's got no real emotional interest in them—I mean, who's gonna fall in love with their dinner?\n\n"Now, let's see, who's my next victim?"`,
        [Locale.jp]: `サバスはセックスをするために生きており、毎日人間界を遊び回っては男の精気を吸い取っている。いつもか弱い乙女を装って助けを求め、英雄の救出劇を夢見る男を誘い込み、それを利用して男の精気を吸い取るのだ。獲物の男が肉欲に支配されると、サバスは自分の本性をさらけ出し、愛情や金、命に至るまで全てを奪い取ってその場を立ち去る。 サバスにとって男はただの獲物であり、優しさや愛情はただの上辺。獲物と恋愛感情を持つ者などこの世にいるのだろうか？\n\n『次の獲物は誰にしようかな。ウフフッ』`,
        [Locale.kr]: `세바스는 섹스를 위해 태어난 서큐버스이다. 그녀는 매일 인간계를 거닐면서 남자의 정기를 흡수하는 것이 일상이다. 세바스는 평소 불쌍한 여자로 위장해 남자들의 영웅 심리를 이용해 남자들의 정기를 흡수해버리는데 사냥감으로 정해진 남자가 정욕에 사로잡히면 그제야 본색을 드러내 상대의 가족, 돈, 심지어 생명까지 모든 것을 빼앗아버린 후에야 그곳을 떠나간다. 세바스에게 있어 남자는 그저 사냥감일 뿐이며 달콤한 말이나 사랑은 모두 거짓이다. 세상의 그 누가 자신이 먹는 음식과 사랑에 빠지겠는가?\n\n『이번 사냥감은 누구로 할까. 히힛.』`
    },
    rarity: Rarity.R,
    element: Element.DARK,
    position: Position.OBSTRUCTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.sable],
    thumbnail: UnitEssence[UnitCode.sable],
    selection: UnitSelection[UnitCode.sable],
    clothes: UnitFullImage[UnitCode.sable],
    tagList: [ 
        TagID.ELEMENT_DARK, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.OTHER_INTERFERENCE,
    ],
    otherVersion: [],
    initHP: 2478,
    initATK: 655.2,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.sable],
    skillSet: []
}
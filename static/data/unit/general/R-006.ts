import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10806: Unit = {
    ID: "10806",
    metaCode: "marlene",
    prefix: {
        [Locale.tc]: "美人魚",
        [Locale.sc]: "美人鱼",
        [Locale.en]: "Mermaid",
        [Locale.jp]: "美人魚",
        [Locale.kr]: "머메이드"
    },
    name: {
        [Locale.tc]: "瑪蓮",
        [Locale.sc]: "玛莲",
        [Locale.en]: "Marlene",
        [Locale.jp]: "マリン",
        [Locale.kr]: "마를렌"
    },
    abbreviation: {
        [Locale.tc]: [ "人魚", "魚" ],
        [Locale.sc]: [ "人鱼", "鱼" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `美人魚瑪蓮是優秀的歌姬，美妙的歌聲甚至能令聽眾迷失自我。瑪蓮喜愛著人類，對於人類的一切都極為憧憬，也有了收集人類物品的習慣，涉世未深的她將人類的童話故事當作了真實發生的事情，對故事中描述的愛情充滿了嚮往。為了談一場浪漫的戀愛，瑪蓮選擇離開了她熟悉的海域，克服萬難前往人類世界，瑪蓮內心深深相信，總有一天她也能像童話中的人魚公主，遇到王子並且與他一同墜入愛河。\n\n『瑪蓮的王子大人究竟在哪裡呢？』`,
        [Locale.sc]: `美人鱼玛莲是优秀的歌姬，美妙的歌声甚至能令听众迷失自我。玛莲喜爱着人类，对于人类的一切都极为憧憬，也有了收集人类物品的习惯，涉世未深的她将人类的童话故事当作了真实发生的事情，对故事中描述的爱情充满了向往。为了谈一场浪漫的恋爱，玛莲选择离开了她熟悉的海域，克服万难前往人类世界，玛莲内心深深相信，总有一天她也能像童话中的人鱼公主，遇到王子并且与他一同坠入爱河。\n\n『玛莲的王子大人究竟在哪里呢？』`,
        [Locale.en]: `Marlene is a mermaid and a wonderful singer, her voice able to completely hypnotise any and all listeners. She's obsessed with humans, collecting human trinkets and believing everything written in human children stories as fact, being first and foremost interested in storybook romances. Searching for a love of her own, Marlene chooses to leave the comfort of her home in the ocean to wander the land. In her heart of hearts, she just knows she'll meet her prince charming, some day.\n\n"Where MY knight in shining armor?"`,
        [Locale.jp]: `人魚マリンは歌が上手で、だれもがその歌声に夢中になる。マリンは人類が大好きで、人類に対してあこがれを抱いている。また人類の物をコレクションする習慣がある。まだ世間を知らない彼女は、人類の童話を信じ切っており、童話の愛の物語にあこがれを抱いている。ロマンチックな恋愛をしたいがために、マリンは住み慣れた海を離れ、人類世界へとやってきた。マリンはいつかきっと童話に登場するような王子様に会えると信じており、その王子様と共に愛に溺れたいようだ。\n\n『マリンの王子様はいったいどこにいるんですか？』`,
        [Locale.kr]: `머메이드 마를렌은 뛰어난 가부키이다. 그녀의 아름다운 노랫소리는 듣는 이로 하여금 자신을 잊게 만든다. 마를렌은 인간들을 좋아해 인간의 모든 것을 동경하고 인간들의 물건을 모으는 습관이 있다. 아직 세상 물정을 잘 모르는 마를렌은 인간들의 동화를 정말 실제로 있었던 것으로 생각해 동화 속에 그려진 사랑 이야기를 꿈꿔오고 있다. 낭만적인 연애를 해보기 위해 마를렌은 그녀의 익숙한 바닷속 세상을 떠나 모든 어려움을 극복하고 인간 세계로 이동한다. 그녀는 마음속 깊은 곳에서부터 어느 날 동화 속의 인어 공주처럼 왕자를 만나 사랑에 빠지게 될 것이라 굳게 믿고 있다.\n\n『마를렌의 왕자님은 도대체 어디에 있는 걸까?』`
    },
    rarity: Rarity.R,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.marlene],
    thumbnail: UnitEssence[UnitCode.marlene],
    selection: UnitSelection[UnitCode.marlene],
    clothes: UnitFullImage[UnitCode.marlene],
    tagList: [ 
        TagID.ELEMENT_WATER, 
        TagID.POSITION_HEALER, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.OTHER_RECOVERY,
    ],
    otherVersion: [],
    initHP: 2590.8,
    initATK: 626.4,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.marlene],
    skillSet: []
}
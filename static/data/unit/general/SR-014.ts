import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10055: Unit = {
    ID: "10055",
    metaCode: "tanocia",
    prefix: {
        [Locale.tc]: "精靈舞者",
        [Locale.sc]: "精灵舞者",
        [Locale.en]: "Elven Dancer",
        [Locale.jp]: "エルフの踊り子",
        [Locale.kr]: "엘프 댄서"
    },
    name: {
        [Locale.tc]: "塔諾西雅",
        [Locale.sc]: "塔诺西雅",
        [Locale.en]: "Tanocia",
        [Locale.jp]: "タノシーヤ",
        [Locale.kr]: "타노시아"
    },
    abbreviation: {
        [Locale.tc]: [ "舞者" ],
        [Locale.sc]: [ "舞者" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `為舞蹈而生的塔諾西雅。任何的舞蹈技巧，她都能以不可思議的速度掌握，並且將特色融入其他的舞步中。塔諾西雅的才能被族人相中，擔任起祭神舞孃，在大大小小的祭祀活動中，為神祉獻上感謝之舞。祭神之舞，莊嚴且不容許任何差錯，塔諾西雅總能不負眾望圓滿達成任務，但她始終無法從中獲得滿足。塔諾西雅心中渴望的是自由、不受拘束，讓所有人都能觀賞並樂在其中的舞蹈。某天夜晚，塔諾西雅收拾了行囊，毅然離開家鄉，尋找能夠自由舞蹈的場所。\n\n『舞蹈並不是那麼嚴謹的東西，當你覺得開心、歡喜的時候，就來一起擺動你的身體吧。』`,
        [Locale.sc]: `为舞蹈而生的塔诺西雅。任何的舞蹈技巧，她都能以不可思议的速度掌握，并且将特色融入其他的舞步中。塔诺西雅的才能被族人相中，担任起祭神舞孃，在大大小小的祭祀活动中，为神祉献上感谢之舞。祭神之舞，庄严且不容许任何差错，塔诺西雅总能不负众望圆满达成任务，但她始终无法从中获得满足。塔诺西雅心中渴望的是自由、不受拘束，让所有人都能观赏并乐在其中的舞蹈。某天夜晚，塔诺西雅收拾了行囊，毅然离开家乡，寻找能够自由舞蹈的场所。\n\n『舞蹈并不是那麽严谨的东西，当你觉得开心、欢喜的时候，就来一起摆动你的身体吧。』`,
        [Locale.en]: `Tanocia is known far and wide as an elf born with a god-given talent for dancing. She's able to master any form of dance and expertly combines multiple styles into mesmerizing performances. Her skills led to her being chosen by her clanspeople to dance at sacrificial rituals as an offering to the gods. Such dances must be performed perfectly, with not a single mistake. This wasn't a problem for someone of Tanocia's ability, but she knew it wasn't her true calling. Her love of dance stems from the freedom and happiness it brings, and she had a desire to share it with the world. Late one night, Tanocia packed up her things and left, searching for a stage where she could perform free of constraints.\n\n"Dance has no rules or regulations. Move your body to the rhythm of the music and happiness is sure to follow!"`,
        [Locale.jp]: `踊るために生まれてきたタノシーヤ。どんな踊りでも彼女は驚異のスピードで習得し、それを他の振りつけの中に融け込ませていく。タノシーヤはその才能を一族に認められ、祭祀の場で神に感謝をささげる踊り子に選ばれた。神に捧げる踊りは厳粛かつ少しのミスも許されない。タノシーヤは無事に任務を達成することはできたものの、結局満足感を得ることはできないままだった。彼女は何の制限も無く自由で、あらゆる人が楽しんでみることのできる踊りがしたいのである。ある夜、タノシーヤは荷物をまとめ故郷を離れ、自由に踊ることができる場所を求めて旅に出た。\n\n『踊りってそんなに厳格なものじゃないの。嬉しいとか楽しいって思った時、身体を一緒に動かせばいいのよ』`,
        [Locale.kr]: `춤을 위해 태어난 타노시아. 어떤 동작이라도 자신의 춤에 녹아들게 만든다. 이런 놀라운 재능 덕분에 그녀는 크고 작은 신전 제사에서 무녀로 활약하게 된다. 엄격하고 어떤 실수도 허용되지 않는 신께 바치는 춤을 무사히 소화해낸 타노시아였지만 막상 본인은 만족을 얻지 못했다. 어떤 것에도 구애받지 않고 자유롭게 자신의 춤을 관중에게 보여주고 싶다는 소망이 그녀의 마음속 깊이 자리 잡고 있던 것이다. 어느날 밤, 타노시아는 짐을 꾸리고 늘 원하던 자유의 무대를 찾아 고향을 떠나게 되었다.\n\n『스텝에 정해진 규칙 같은 건 없어. 당신이 기쁠 때, 마음대로 몸을 흔들면 그걸로 충분해.』`
    },
    rarity: Rarity.SR,
    element: Element.LIGHT,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/05/11",
    essence: UnitEssence[UnitCode.tanocia],
    thumbnail: UnitEssence[UnitCode.tanocia],
    selection: UnitSelection[UnitCode.tanocia],
    clothes: UnitFullImage[UnitCode.tanocia],
    tagList: [
        TagID.ELEMENT_LIGHT,
        TagID.POSITION_SUPPORTER,
        TagID.SPECIES_DEMIHUMAN,
        TagID.BREAST_HOT_TITS,
        TagID.CLASS_ELITE,
        TagID.OTHER_RECOVERY,
    ], 
    otherVersion: [],
    puzzle: [],
    outfits: [],
    skillSet: []
}
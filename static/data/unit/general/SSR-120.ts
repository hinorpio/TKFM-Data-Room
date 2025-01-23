import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10044: Unit = {
    ID: "10044",
    metaCode: "amethystina",
    prefix: {
        [Locale.tc]: "占星師",
        [Locale.sc]: "占星师",
        [Locale.en]: "Clairvoyant",
        [Locale.jp]: "星占い師",
        [Locale.kr]: "점술사"
    },
    name: {
        [Locale.tc]: "亞美西思特",
        [Locale.sc]: "亚美西思特",
        [Locale.en]: "Amethystina",
        [Locale.jp]: "アメシスト",
        [Locale.kr]: "아메시스트"
    },
    abbreviation: {
        [Locale.tc]: [ "占星" ],
        [Locale.sc]: [ "占星" ],
        [Locale.en]: [ "Ame" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "아메" ]
    },
    background: {
        [Locale.tc]: `作為占星師，亞美西思特最擅長的事情就是窺探命運的軌跡，從中尋找揭示未來的徵兆。對她而言，占卜不但能趨吉避凶，還可以解決煩惱，讓一切變得順利，簡直就是最棒的人生指南。因此除了替自己占卜之外，亞美西思特同時也樂於幫人占卜，並提供適合的指引，讓她累積了不小的名氣。然而，運氣並不總是站在她這邊，某次她在預測未來時，卻意外發現將有極為不祥的事降臨在她身上。為了扭轉命運，亞美西思特決定遵循星宿的指引，鼓起勇氣，獨自踏上前往魔王城的旅程。\n\n『感到迷惘的話，不妨讓我替您占卜一下運勢吧。』`,
        [Locale.sc]: `作为占星师，亚美西思特最擅长的事情就是窥探命运的轨迹，从中寻找揭示未来的徵兆。对她而言，占卜不但能趋吉避凶，还可以解决烦恼，让一切变得顺利，简直就是最棒的人生指南。因此除了替自己占卜之外，亚美西思特同时也乐于帮人占卜，并提供适合的指引，让她累积了不小的名气。然而，运气并不总是站在她这边，某次她在预测未来时，却意外发现将有极为不祥的事降临在她身上。为了扭转命运，亚美西思特决定遵循星宿的指引，鼓起勇气，独自踏上前往魔王城的旅程。\n\n『感到迷惘的话，不妨让我替您占卜一下运势吧。』`,
        [Locale.en]: `As a clairvoyant, Amethystina's greatest skill lies in peering into the trajectory of one's fate and seeking signs that reveal future events. For her, divination not only helps to seek good fortune and avoid disasters, but it also eases worries and makes life run more smoothly—it's simply the best magical guide to life. Therefore, in addition to reading her own fortune, she also enjoys reading the fortune of others and providing them with useful counseling, which has allowed her to garner quite a positive reputation. However, luck is not always on her side. On one occasion, while predicting her future, she unexpectedly discovers that an ominous event will soon befall her. To change her fate, Amethystina decides to follow the guidance of the stars above, muster her courage, and embark on a journey alone to Caesar's Palace.\n\n"If confusion is rattling your mind, why not allow me to read your fortune for you?"`,
        [Locale.jp]: `星占い師として、アメシストが最も得意とするのは、運命の軌跡をのぞき、未来の兆しを見つけ出すことである。彼女にとって占いは、良い気を呼び込んだり、悪い気を跳ね返すだけでなく、悩みを解決したり、物事を円滑に運んだりするーーまさに人生における最善の指南なのだ。そのため、アメシストは自分の運勢だけでなく、人の運勢も喜んで占い、適切なアドバイスをすることで、大きな名声を得ている。しかし、運気は常に彼女の味方ではない。ある時、彼女が未来を予測していた時、自分自身にとても不吉なことが降りかかることを偶然知ってしまう。運命を変えるため、アメシストは星の導きに従い、勇気を振り絞り、たった一人で魔王城に向かうことを決意したのだった。\n\n『迷っているのであれば、私が運勢を占ってあげましょうか？』`,
        [Locale.kr]: `점술사 아메시스트는 운명의 궤적을 엿보고 그 속에서 미래를 예고하는 징조를 찾는 일에 능숙하다. 그녀에게 점술은 단순히 길흉을 예측하고 불행을 피하는 것이 아니라, 걱정을 해결하고 모든 일이 순조롭게 진행되도록 도와주는 최고의 인생 지침서이기도 하다. 그래서 아메시스트는 자신을 위한 점술뿐만 아니라, 다른 사람을 위해 점을 치고 적절한 지침을 제공하는 일에도 즐거움을 느끼며, 이를 통해 상당한 명성을 쌓았다. 하지만 운이 항상 그녀의 편인 것은 아니었다. 어느 날, 그녀는 미래를 점 보는 중 자신에게 불길한 일이 일어나게 될 것을 발견하게 된다. 운명을 바꾸기 위해, 아메시스트는 별자리의 지침을 따르기로 결심하고 용기를 내어 혼자 마왕성을 향한 여정에 나섰다.\n\n『갈피를 잡지 못하시겠다면, 제가 당신의 운세를 점쳐드릴까요?』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/09/11",
    essence: UnitEssence[UnitCode.amethystina],
    thumbnail: UnitEssence[UnitCode.amethystina],
    selection: UnitSelection[UnitCode.amethystina],
    clothes: UnitFullImage[UnitCode.amethystina],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
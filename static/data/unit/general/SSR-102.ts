import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10023: Unit = {
    ID: "10023",
    metaCode: "belladonna",
    prefix: {
        [Locale.tc]: "副手",
        [Locale.sc]: "副手",
        [Locale.en]: "Deputy Lieutenant",
        [Locale.jp]: "助手",
        [Locale.kr]: "오른팔"
    },
    name: {
        [Locale.tc]: "貝蕾朵",
        [Locale.sc]: "贝蕾朵",
        [Locale.en]: "Belladonna",
        [Locale.jp]: "ベレット",
        [Locale.kr]: "벨레트"
    },
    abbreviation: {
        [Locale.tc]: [ "副手" ],
        [Locale.sc]: [ "副手" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `出生自另一大陸的軍人家庭，從小接受嚴苛的菁英教育。在一次任務中湊巧與諾蕾蒂的部隊共同行動，並在第一眼見到諾蕾蒂後就對她一見鍾情。為了能與諾蕾蒂待在一起，排除了萬難，動用了諸多手段終於加入了諾蕾蒂的部隊並且成為了她左右手。在原本所在大陸的戰役結束後，毅然跟隨諾蕾蒂，成為了探索新大陸的成員之一。\n\n『諾蕾蒂大人，前方十一點鐘方向發現敵蹤，請下達判斷。』`,
        [Locale.sc]: `出生自另一大陆的军人家庭，从小接受严苛的菁英教育。在一次任务中凑巧与诺蕾蒂的部队共同行动，并在第一眼见到诺蕾蒂后就对她一见钟情。为了能与诺蕾蒂待在一起，排除了万难，动用了诸多手段终于加入了诺蕾蒂的部队并且成为了她左右手。在原本所在大陆的战役结束后，毅然跟随诺蕾蒂，成为了探索新大陆的成员之一。\n\n『诺蕾蒂大人，前方十一点钟方向发现敌踪，请下达判断。』`,
        [Locale.en]: `Born into a military family in the Principality of Daruma, Belladonna was subjected to a rigorous and elite education. As a military officer, she is decisive and possesses a highly trained eye for the battlefield. This cunning allows for her to make the most suitable choice in any dire situation. On one mission where she worked with the Hound Hunters, she met Noma and instantly fell in love with their heavy-handed, petite leader. To stay close to new object of her affection, Belladonna jumped through hoops and bent  over backwards to join the Hound Hunter, eventually even becoming Noma's right-hand woman. Though smart and capable at first glance, deep down Belladonna has become quite the stalker...\n\n"Master Noma, enemies at 11 o'clock! What are your orders?"`,
        [Locale.jp]: `ベレットはダロム公国の軍人家庭に生まれ、小さい頃から厳しい英才教育を受けてきた。軍官である彼女は戦術と指揮に長けており、いかなる時でも最適な判断を下すことができる。ある時、ノルディの部隊と共に行動することになった彼女は、小さく可愛い見た目だが威厳のある小隊長を見て一目惚れした。ノルディと共にいたいと思った彼女は、さまざまな手段を駆使し、困難を乗り越え、ハウンド小隊へと入隊してノルディの助手となった。普段は厳しい顔で訓練に励んでいる彼女だが、その本性はただのストーカーと変わらないのだ。\n\n『ノルディ様、前方11時の方向に敵発見。ご命令を』`,
        [Locale.kr]: `벨레트는 달롬 공국 군인 집안에서 태어나 어려서부터 엄격한 엘리트 교육을 받으며 자랐다. 장교인 그녀는 날카로운 전술적 안목과 결단력 있는 지휘력을 바탕으로 언제나 적절한 판단을 내린다. 어느 한 임무에서 그녀는 우연히 놀라이티와 함께 임무를 수행하게 됐고, 작고 아담하면서도 위엄있는 소대장의 모습을 보고 첫눈에 반하게 된다. 놀라이티와 함께 있기 위해 모든 수단을 동원하여 하운드 소대에 합류해 그녀의 왼팔이 되기에 이른다. 평소에는 일을 깔끔히 처리하는 모습을 보이지만, 사적으로는 광적인 사생팬의 모습과 별반 다를 바가 없다.\n\n『놀라이티 님, 전방 11시 방향에서 적의 흔적이 발견됐습니다. 명령을 내려주십시오.』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.PROTECTOR,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2024/01/17",
    essence: UnitEssence[UnitCode.belladonna],
    thumbnail: UnitEssence[UnitCode.belladonna],
    selection: UnitSelection[UnitCode.belladonna],
    clothes: UnitFullImage[UnitCode.belladonna],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
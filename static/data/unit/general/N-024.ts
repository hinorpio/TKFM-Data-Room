import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10921: Unit = {
    ID: "10921",
    metaCode: "molly",
    prefix: {
        [Locale.tc]: "獵犬小隊",
        [Locale.sc]: "猎犬小队",
        [Locale.en]: "Hound Hunter",
        [Locale.jp]: "ハウンド小隊",
        [Locale.kr]: "하운드 소대"
    },
    name: {
        [Locale.tc]: "茉莉",
        [Locale.sc]: "茉莉",
        [Locale.en]: "Molly",
        [Locale.jp]: "ジュリー",
        [Locale.kr]: "몰리"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `茉莉是來自不同大陸，重視科技和工業的達洛姆公國精銳部隊——獵犬小隊的成員。她的槍法高超，百發百中，深受隊長與其他隊員信賴。不過，雖然茉莉時常負責斬首敵方要員的任務，但她的職位其實不是狙擊手，而是獵犬小隊的炊事兵。儘管茉莉對烹飪有著極大的興趣，但她本身的廚藝可以說是毀滅性的糟糕。她不只會隨意調整食譜上的食材用量與種類，有時還會以補充營養的名義，將各種奇怪食材通通丟進鍋中烹煮。茉莉的廚藝之慘烈，以至於在獵犬小隊的反審問訓練中，有一條「吃下整碗茉莉特餐」的訓練項目。\n\n『真奇怪…大家這次怎麼又把晚餐剩下來了呢？』`,
        [Locale.sc]: `茉莉是来自不同大陆，重视科技和工业的达洛姆公国精锐部队——猎犬小队的成员。她的枪法高超，百发百中，深受队长与其他队员信赖。不过，虽然茉莉时常负责斩首敌方要员的任务，但她的职位其实不是狙击手，而是猎犬小队的炊事兵。儘管茉莉对烹饪有着极大的兴趣，但她本身的厨艺可以说是毁灭性的糟糕。她不只会随意调整食谱上的食材用量与种类，有时还会以补充营养的名义，将各种奇怪食材通通丢进锅中烹煮。茉莉的厨艺之惨烈，以至于在猎犬小队的反审问训练中，有一条「吃下整碗茉莉特餐」的训练项目。\n\n『真奇怪…大家这次怎麽又把晚餐剩下来了呢？』`,
        [Locale.en]: `A member of the Hound Hunters, an elite group from the tech and industry-focused Principality of Daruma. Her fighting style excels at marksmanship, known to never miss her target and is highly trusted by her captain and fellow teammates. Though often responsible for executing enemy officers, her place in the Hound Hunters is that of a cook more than a sniper. She insists on making the group's meals, but her cooking skills are notoriously bad.She randomly modifies the amount and type of ingredients in any given recipe, then adds a little strangeness into it "for nutritional purposes". It's so bad that the Hound Hunters even use her cooking as a way of training themselves against enemy interrogation, called "Molly's Meal Madness".\n\n"Weird... Why'd everyone leave so much food on their plates?"`,
        [Locale.jp]: `ジュリーはテクノロジーと工業を重視するダロム公国の精鋭部隊ーーハウンド小隊のメンバーだ。銃の扱いに長ける彼女は隊長や他のメンバーから厚く信頼されている。そんなジュリーは普段斬首を任されている重要な要員だが、彼女の職種はスナイパーではなく、ハウンド小隊の炊事兵なのだ。だがいくら料理に興味があるとはいえ、その腕は最悪。レシピの食材を自由気ままに変更するだけではなく、栄養をプラスすると言って様々な「食材」を入れてしまうのだ。ジュリーの腕とハウンドの厳しい訓練が相まって、「ジュリーの特製料理を食べる」という訓練が生まれたのであった。\n\n『おかしいなぁ……どうしてまたみんな夜ご飯を残したんだろう？』`,
        [Locale.kr]: `몰리는 다른 대륙 출신으로 기술과 산업을 중시하는 달롬 공국의 정예 부대——하운드 소대의 일원이다. 백발백중의 훌륭한 사격술로 대장과 다른 팀원들의 신뢰를 받고 있다. 늘 참수 작전 같은 주요 임무에 동원되곤 하지만, 본래 그녀의 보직은 저격수가 아닌 하운드 소대의 취사병이다. 몰리는 요리에 큰 흥미를 가지고 있지만 요리 솜씨는 무척 파괴적이라고 할 수 있다. 그녀는 식단 재료의 양과 종류를 세세하게 조절하지 않는 것은 물론, 영양 보충이라는 명목으로 이상한 재료를 전부 때려박아 조리한다. 그 음식의 맛은 너무 끔찍해서 적군의 심문 저항 훈련에 「몰리의 요리를 먹어라」라는 항목이 들어가 있을 정도이다.\n\n『이상하네... 왜 또 저녁을 이렇게나 남긴 거지?』`
    },
    rarity: Rarity.N,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2024/01/07",
    essence: UnitEssence[UnitCode.molly],
    thumbnail: UnitEssence[UnitCode.molly],
    selection: UnitSelection[UnitCode.molly],
    clothes: UnitFullImage[UnitCode.molly],
    tagList: [
        TagID.ELEMENT_WATER,
        TagID.POSITION_ATTACKER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_SMALL_SIZED,
        TagID.BREAST_FLAT_TITS,
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_MOLLY ],
    skillSet: []
}
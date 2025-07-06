import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10907: Unit = {
    ID: "10907",
    metaCode: "ola",
    prefix: {
        [Locale.tc]: "精靈射手",
        [Locale.sc]: "精灵射手",
        [Locale.en]: "Elven Archer",
        [Locale.jp]: "エルフアーチャー",
        [Locale.kr]: "엘프 궁수"
    },
    name: {
        [Locale.tc]: "奧菈",
        [Locale.sc]: "奥菈",
        [Locale.en]: "Ola",
        [Locale.jp]: "アウラ",
        [Locale.kr]: "올라"
    },
    abbreviation: {
        [Locale.tc]: [ "聖誕樹" ],
        [Locale.sc]: [ "圣诞树" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `奧菈是一位非常年輕的精靈射手，但與同族不同的是，奧菈不喜歡森林裡的無聊生活，反而對外面的花花世界充滿好奇。她對於日復一日守護森林的任務感到厭煩，經常幻想自己離開森林並成為偉大冒險者的模樣。\n\n『總有一天我會成為偉大的冒險者！』`,
        [Locale.sc]: `奥菈是一位非常年轻的精灵射手，但与同族不同的是，奥菈不喜欢森林里的无聊生活，反而对外面的花花世界充满好奇。她对于日复一日守护森林的任务感到厌烦，经常幻想自己离开森林并成为伟大冒险者的模样。\n\n『总有一天我会成为伟大的冒险者！』`,
        [Locale.en]: `Ola is a young Elven archer, but unlike the other archers her age, she doesn't quite like the boring life of the Misty Forest, and would much rather be out exploring the world! She's honestly super sick of "protecting the forest" day in and day out, and dreams of the day she can escape and live the life of a great adventurer.\n\n"I'll get out there and see the world... One of these days!"`,
        [Locale.jp]: `アウラはとても若いエルフアーチャー。毎日森を守るのが任務だが、そんな森の中でのつまらない生活は嫌いで、逆に華やかな外の世界に興味がある。そんな仕事に倦怠感を抱いており、いつも森を離れて偉大な冒険家になる夢を見ている。\n\n『いつかきっと偉大な冒険家になるんだ！』`,
        [Locale.kr]: `올라는 아주 젊은 엘프 궁수이다. 하지만 다른 엘프와는 다른 것은 올라는 숲 속의 따분한 생활을 좋아하지 않으며 오히려 바깥의 화려한 세상에 대해 호기심이 가득하다. 매일 계속되는 숲 수호 임무에 대해 질려버린 그녀는 자주 자신이 숲을 떠나 위대한 모험가가 되는 모습을 상상하곤 한다.\n\n『언젠가 나는 위대한 모험가가 되고 말 거야!』`,
    },
    rarity: Rarity.N,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.ola],
    thumbnail: UnitEssence[UnitCode.ola],
    selection: UnitSelection[UnitCode.ola],
    clothes: UnitFullImage[UnitCode.ola],
    tagList: [ 
        TagID.ELEMENT_WIND, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT,
    ],
    otherVersion: [],
    initHP: 1913.9998092421035,
    initATK: 527.9993244982855,
    puzzle: [ PuzzleCode.HUMAN_OLA ],
    outfits: [],
    skillSet: []
}
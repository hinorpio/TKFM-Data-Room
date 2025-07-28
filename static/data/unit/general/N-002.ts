import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10902: Unit = {
    ID: "10902",
    metaCode: "petra",
    prefix: {
        [Locale.tc]: "法斯帝國法師",
        [Locale.sc]: "法斯帝国法师",
        [Locale.en]: "Phasi Wizard",
        [Locale.jp]: "フォス帝国魔術師",
        [Locale.kr]: "파스제국 마법사"
    },
    name: {
        [Locale.tc]: "佩托拉",
        [Locale.sc]: "佩托拉",
        [Locale.en]: "Petra",
        [Locale.jp]: "ペトラ",
        [Locale.kr]: "페트라"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `佩托拉是法斯帝國的魔法士兵，本身魔力並沒有特別突出，只比一般人稍微優秀。選擇成為魔法師的原因，只是因為一直以來魔法師的工作錢多事少，堪稱是公家機關的鐵飯碗，不過佩托拉每次一領到薪水馬上就會去衝動購物，導致自己月底時都只能吃麵包度日。\n\n『賺錢就是為了花錢啊！』`,
        [Locale.sc]: `佩托拉是法斯帝国的魔法士兵，本身魔力并没有特别突出，只比一般人稍微优秀。选择成为魔法师的原因，只是因为一直以来魔法师的工作钱多事少，堪称是公家机关的铁饭碗，不过佩托拉每次一领到薪水马上就会去冲动购物，导致自己月底时都只能吃面包度日。\n\n『赚钱就是为了花钱啊！』`,
        [Locale.en]: `Petra's a wizard in the Phasi Empire. Her magic isn't all that great, but she's still a bit better than most of the others. She chose to join the ranks of Phasi Wizards not because she loves magic or anything, but just because wizards make good money without having a particularly heavy workload. It's one of the cushiest jobs in the empire's army. Too bad the second she gets her paycheck she spends most of it out shopping, and has to eat rice and beans for the rest of the month. \n\n"Money's no good unless you spend it!"`,
        [Locale.jp]: `ペトラはフォス帝国の魔法兵士。彼女の魔法は特別すごいわけではなく、一般人よりも多少優れているくらいだ。ペトラは今の仕事をとても気に入っている。仕事量の割には給料が良く、公的機関の安定職だからだ。しかしペトラは給料を受け取るとすぐにショッピングに行くため、月末はパンしか食べられない。\n\n『お金は使うために稼ぐのよ！』`,
        [Locale.kr]: `페트라는 파스제국의 마법 병사이다. 그녀의 마력은 특별하지 않으며 그저 일반인보다 조금 나은 정도이다. 일은 적지만 돈은 많이 받는 나라의 철밥통같은 직책이란 이유만으로 마법사가 된 페트라는 월급을 받을 때마다 충동구매를 하곤 해 월말이 되기만 하면 항상 빵으로 끼니를 때운다.\n\n『돈은 쓰기 위해서 버는 거지!』`,
    },
    rarity: Rarity.N,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.petra],
    thumbnail: UnitEssence[UnitCode.petra],
    selection: UnitSelection[UnitCode.petra],
    clothes: UnitFullImage[UnitCode.petra],
    tagList: [ 
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_FLAT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_AOE,
    ],
    otherVersion: [],
    initHP: 2093,
    initATK: 483,
    puzzle: [ PuzzleCode.HUMAN_PETRA ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.petra],
    skillSet: []
}
import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10089: Unit = {
    ID: "10089",
    metaCode: "q_asina",
    prefix: {
        [Locale.tc]: "銀河之藍",
        [Locale.sc]: "银河之蓝",
        [Locale.en]: "Blue Qixi",
        [Locale.jp]: "銀河の蒼",
        [Locale.kr]: "푸른 은하"
    },
    name: {
        [Locale.tc]: "安絲娜",
        [Locale.sc]: "安丝娜",
        [Locale.en]: "Asina",
        [Locale.jp]: "アンスナー",
        [Locale.kr]: "아나스나"
    },
    abbreviation: {
        [Locale.tc]: [ "銀藍", "星藍" ],
        [Locale.sc]: [ "银蓝", "星蓝" ],
        [Locale.en]: [ "Q.Asina" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "신파랑" ]
    },
    background: {
        [Locale.tc]: `安絲娜是服裝店【巴赫蒂娜】的裁縫，她有著十分高明的手藝。能夠完美地將自己姐姐各種天馬行空的服裝設計裁剪成衣，製作出完整的成品。只不過，安絲娜時常要為了自己任性的姐姐，所搞出的麻煩事傷透腦筋。就好比今年的七夕祭，安絲蒂為了重演自己喜歡的浪漫愛情故事，居然直接將手上的工作全數拋之腦後。本來想要斥責她回去乖乖工作的安絲娜，卻因為自己心中同樣抱著能被凱薩擁入懷中的期待，最後只好乖乖陪著安絲蒂一同穿上織女的服裝。\n\n『僅此一次喔，安絲蒂，下一次再這樣就要一個月禁止吃甜點。』`,
        [Locale.sc]: `安丝娜是服装店【巴赫蒂娜】的裁缝，她有着十分高明的手艺。能够完美地将自己姐姐各种天马行空的服装设计裁剪成衣，制作出完整的成品。只不过，安丝娜时常要为了自己任性的姐姐，所搞出的麻烦事伤透脑筋。就好比今年的七夕祭，安丝蒂为了重演自己喜欢的浪漫爱情故事，居然直接将手上的工作全数抛之脑后。本来想要斥责她回去乖乖工作的安丝娜，却因为自己心中同样抱着能被凯萨拥入怀中的期待，最后只好乖乖陪着安丝蒂一同穿上织女的服装。\n\n『仅此一次喔，安丝蒂，下一次再这样就要一个月禁止吃甜点。』`,
        [Locale.en]: `Asina is a smart and beautiful tailor at Pasadena. Her job is made much more difficult since she has to take care of her unruly sister, Asida, at the same time. And with a sister as impetuous as Asida, that's easier said than done. For example, Asida's already made a complete mess of this year's Qixi festival, getting the two sisters in a whole mess of trouble. All Asina wants to do is do her work back at the shop... but now she's cast in a ridiculous plot with her sister and Master Caesar. Now she can't do anything but put on her Zhinu clothes and ride it out.\n\n"I swear, Asida, once this is all over... it's no dessert for a month for you!"`,
        [Locale.jp]: `アンスナーは「バッハティーナ」で裁縫の仕事をしている。その見事な腕前が彼女の特長だ。姉が考えた奇抜なデザインから服を作り、商品として完成させる。ただ、わがままな姉が起こす面倒ごとの後始末に頭を悩ませている。今年の七夕はアンスティーがロマンチックな物語を演じるがために、仕事を放り出してしまったのだ。叱って引き戻そうと考えたアンスナーだが、自分もシーザーの温かい胸に抱かれたいと考え、アンスティーと一緒に織姫の服を着ることにしたのであった。\n\n『アンスティー、これだけ例外だからね。もしまた同じことをしたら、一か月おやつ禁止だから』`,
        [Locale.kr]: `의복점 바흐테나의 재단사. 훌륭한 솜씨를 자랑한다. 언니가 의식의 흐름대로 디자인을 떠올릴 때면 그것을 완벽하게 상품으로 제작해낸다. 하지만 늘 제멋대로인 언니가 일으키는 사고들로 골머리를 앓곤 한다. 아나스티는 올해 칠석제 때 자신이 좋아하던 로맨틱 스토리를 재현해보고 싶다는 이유로 수중에 있던 모든 업무를 내팽개치고 말았는데. 그런 언니를 다그칠 생각이던 아나스나, 하지만 그녀 역시 시저에게 똑같은 기대를 품고 있던 것이었다. 결국 아나스티와 함께 직녀 코스튬 의상으로 갈아입고 칠석제를 맞이할 준비를 하게 되었는데...\n\n『딱 이번뿐이야, 언니. 다음에 또 이러면 한 달 동안 간식 섭취 금지시킬 테니까 그렇게 알고 있어.』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2022/08/03",
    essence: UnitEssence[UnitCode.q_asina],
    thumbnail: UnitEssence[UnitCode.q_asina],
    selection: UnitSelection[UnitCode.q_asina],
    clothes: UnitFullImage[UnitCode.q_asina],
    tagList: [],
    otherVersion: [ UnitCode.asina ],
    initHP: 5155.199841816649,
    initATK: 683.1971882222549,
    puzzle: [],
    outfits: [],
    skillSet: []
}
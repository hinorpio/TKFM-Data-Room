import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10918: Unit = {
    ID: "10918",
    metaCode: "natasha",
    prefix: {
        [Locale.tc]: "法斯高階法師",
        [Locale.sc]: "法斯高阶法师",
        [Locale.en]: "Phasi Wizard",
        [Locale.jp]: "フォス魔術師",
        [Locale.kr]: "파스제국 상급 마법사"
    },
    name: {
        [Locale.tc]: "諾諾可",
        [Locale.sc]: "诺诺可",
        [Locale.en]: "Natasha",
        [Locale.jp]: "ノノカ",
        [Locale.kr]: "노노카"
    },
    abbreviation: {
        [Locale.tc]: [ "諾諾可", "諾", "沖水", "水之鼓舞" ],
        [Locale.sc]: [ "諾諾可", "諾", "沖水", "水之鼓舞" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `諾諾可是法斯帝國的魔法士兵，因為有著一般水平以上的水準，被獲准加入精銳魔法部隊。以精銳部隊的身份為傲，諾諾可最喜歡指揮其他地位在他之下的魔法師做事。性格惡劣，但若是他人來請教的話並不會藏私，會一邊冷嘲熱諷一邊用好懂的方式進行教學。許多被她使喚跑腿的人就是衝著這點來的，在特定族群有著超乎意料的人氣。\n\n『連這麼簡單的東西都不懂，沒天賦的人真可憐，好吧，就讓我來教教你吧。』`,
        [Locale.sc]: `诺诺可是法斯帝国的魔法士兵，因为有着一般水平以上的水准，被获准加入精锐魔法部队。以精锐部队的身份为傲，诺诺可最喜欢指挥其他地位在他之下的魔法师做事。性格恶劣，但若是他人来请教的话并不会藏私，会一边冷嘲热讽一边用好懂的方式进行教学。许多被她使唤跑腿的人就是冲着这点来的，在特定族群有着超乎意料的人气。\n\n『连这么简单的东西都不懂，没天赋的人真可怜，好吧，就让我来教教你吧。』`,
        [Locale.en]: `Natasha is a Phasi Sorceress of great skill; so great, in fact, that she is part of the empire's Elite Magic Unit. Natasha is proud of her station to he point of arrogance, and has no qualms about bullying around those she outranks. That said, Natasha loves to teach others what she knows. Usually, the other sorceress' she bosses around take her orders willingly just for the chance to gain some of her knowledge. For that reason, Natasha is actually quite popular among Phasi magic users.\n\n"Such a simple spell and you still don't know it? Hmph... some people just have no talent. Fine, let me teach you..."`,
        [Locale.jp]: `ノノカはフォス帝国の魔法兵士。優れた能力を持っているため、精鋭魔法部隊に入ることを許された。精鋭部隊であることを鼻にかけており、地位の低い魔術師に指図するのが大好きである。性格が悪いが、誰かに教えて欲しいと頼まれると、皮肉を交えながらも分かりやすい方法で教えるのだ。雑用に走らされている人たちもこの点を気に入ってるため、特定の人からはとても人気がある。\n\n『こんな簡単なのこともできないの？才能が無い人は可哀想ね。私が教えてあげるわ』`,
        [Locale.kr]: `노노카는 파스제국의 마법 병사이다. 그녀는 보통 수준 이상의 실력을 보유하고 있어 정예 마법 부대에 입대를 허가받게 되었다. 정예 부대 신분을 자랑스러워하는 노노카는 그녀보다 지위가 낮은 마법사들을 지휘하는 것을 가장 좋아한다. 비록 성격은 나쁘지만 그녀에게 가르침을 청하는 자들을 돕는 것에 인색하지 않으며, 비웃음을 섞어가며 알기 쉬운 방식으로 교육을 진행하곤 한다. 그녀의 바로 이런 점에 이끌려 수많은 자들이 함께하고 있으며 특정 집단에서의 그녀의 인기는 상상을 초월한다.\n\n『이렇게 간단한 것도 할 줄 모르다니. 소질이 없는 녀석은 정말 불쌍하군. 뭐, 할 수 없지. 내가 널 가르쳐주도록 하겠어.』`
    },
    rarity: Rarity.N,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2021/03/10",
    essence: UnitEssence[UnitCode.natasha],
    thumbnail: UnitEssence[UnitCode.natasha],
    selection: UnitSelection[UnitCode.natasha],
    clothes: UnitFullImage[UnitCode.natasha],
    tagList: [ 
        TagID.ELEMENT_WATER, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
    ],
    otherVersion: [],
    puzzle: [ PuzzleCode.HUMAN_NATASHA, PuzzleCode.HUMAN_BLAIRE ],
    outfits: [],
    skillSet: []
}
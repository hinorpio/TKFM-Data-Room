import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10161: Unit = {
    ID: "10161",
    metaCode: "zaskia",
    prefix: {
        [Locale.tc]: "舞焰赤龍",
        [Locale.sc]: "舞焰赤龙",
        [Locale.en]: "Dancing Dragon",
        [Locale.jp]: "炎舞の赤竜",
        [Locale.kr]: "춤추는 불꽃의 적룡"
    },
    name: {
        [Locale.tc]: "薩夏",
        [Locale.sc]: "萨夏",
        [Locale.en]: "Zaskia",
        [Locale.jp]: "サーシャ",
        [Locale.kr]: "사샤"
    },
    abbreviation: {
        [Locale.tc]: [ "赤龍", "火龍", "紅龍" ],
        [Locale.sc]: [ "赤龙", "火龙", "紅龙" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `薩夏是火龍與人類的混血，也就是人和魔物結合後誕生的後代。或許是因為魔物混血的關係，薩夏天生就有著異於常人的力量。她的身上始終纏繞著火龍之焰，不只衣服會被燒光，連身邊的日常用品也都只能使用不怕火的材質。薩夏始終守護著自己與父母一同生活的地方，這個想法即使在雙親離世後也不曾動搖。她原本以為自己會在火焰山上度過一生，直到某個和自己一樣裸著全身的魔族來到了她面前。\n\n『啊…那個，嗯，你好。』`,
        [Locale.sc]: `萨夏是火龙与人类的混血，也就是人和魔物结合后诞生的后代。或许是因为魔物混血的关係，萨夏天生就有着异于常人的力量。她的身上始终缠绕着火龙之焰，不只衣服会被烧光，连身边的日常用品也都只能使用不怕火的材质。萨夏始终守护着自己与父母一同生活的地方，这个想法即使在双亲离世后也不曾动摇。她原本以为自己会在火焰山上度过一生，直到某个和自己一样裸着全身的魔族来到了她面前。\n\n『啊…那个，嗯，你好。』`,
        [Locale.en]: `Zaskia is a half-breed between a fire dragon and a human, the offspring of human and monster. Perhaps due to her mixed heritage, she was born with extraordinary powers. Her dragon flames constantly swirl around her, incinerating her clothes and rendering everyday items unusable unless they are fireproof. Zaskia has always protected Mount Flambé, where she has lived all her life. This commitment has never wavered, even after her parents' passing. She thinks she will spend the rest of her life there until a certain demon appears before her... shamelessly in the nude.\n\n"Ah... um, hello there."`,
        [Locale.jp]: `サーシャは火竜と人間のハーフであり、人と魔物の交わりから生まれた。魔物とのハーフが原因なのか、サーシャは生まれながらにして常人を超える力を持っている。彼女の体には常に火竜の炎がまとわりついており、そのせいで衣服は焼き尽くされ、日常の持ち物も耐火性のある物しか使えない。サーシャは両親と共に暮らした場所を守り続けており、その想いは両親が亡くなった後も揺らぐことはなかった。だから彼女は、自分の人生を火焔山で全うするものだと信じていた――あの日、自分と同じように全裸の魔族が目の前に現れるまでは。\n\n『あ…あの、こ…こんにちは』`,
        [Locale.kr]: `사샤는 화룡과 인간의 피가 동시에 흐르는, 인간과 마물 사이에서 태어난 후예이다. 마물의 피를 물려받은 덕분일까? 사샤는 천성적으로 일반인을 상회하는 힘을 지니게 됐다. 그녀의 몸은 늘 화룡의 불길이 타오르고 있어, 옷을 태워먹을 뿐만 아니라, 모든 일상용품까지도 열내구성이 강한 제품만을 사용할 수 있다. 사샤는 부모와 함께 살아 온 거처를 지켜왔고, 부모가 세상을 떠난 후에도 이 생각은 조금도 변하지 않았다. 그리고 어느 날, 평생을 화염산에서 살 줄 알았던 그녀 앞에 실오라기 하나 걸치지 않은 마족이 나타났다.\n\n『아... 저기... 음... 안녕.』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/01/22",
    essence: UnitEssence[UnitCode.zaskia],
    thumbnail: UnitEssence[UnitCode.zaskia],
    selection: UnitSelection[UnitCode.zaskia],
    clothes: UnitFullImage[UnitCode.zaskia],
    tagList: [],
    otherVersion: [],
    initHP: 3660.8,
    initATK: 963.2,
    puzzle: [],
    outfits: UnitOutfits[UnitCode.zaskia],
    voiceSet: UnitVoice[UnitCode.zaskia],
    skillSet: []
}
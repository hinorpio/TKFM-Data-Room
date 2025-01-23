import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10046: Unit = {
    ID: "10046",
    metaCode: "janelle",
    prefix: {
        [Locale.tc]: "刺針",
        [Locale.sc]: "刺针",
        [Locale.en]: "Stinger",
        [Locale.jp]: "鋭い針",
        [Locale.kr]: "날카로운 가시"
    },
    name: {
        [Locale.tc]: "嘉維爾",
        [Locale.sc]: "嘉维尔",
        [Locale.en]: "Janelle",
        [Locale.jp]: "ガヴィル",
        [Locale.kr]: "가벨"
    },
    abbreviation: {
        [Locale.tc]: [ "刺針" ],
        [Locale.sc]: [ "刺针" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `某一日，娜娜的手下突然帶著嘉維爾去見她，說是一個人類毛遂自薦加入魔王軍。所有人都無法理解她那猜不透的笑容，又一副天不怕地不怕的態度。娜娜試了她的身手，卻立刻同意她加入自己的麾下。嘉維爾總是掛著憨厚的笑容，對任何事情總是有種搞不清楚狀況的反應。而後娜娜展開對她的詳細調查，確定這個人不是裝傻，而是真傻。雖說認知與反應相當的傻，但只要是委派給她的任務，總是會相當俐落的完成。除此之外，基本被叫做魔王軍第一傻大姊也不為過。\n\n『嘉維爾，也可以稱呼我為刺針，嘻嘻，我該做些什麼好呢？』`,
        [Locale.sc]: `某一日，娜娜的手下突然带着嘉维尔去见她，说是一个人类毛遂自荐加入魔王军。所有人都无法理解她那猜不透的笑容，又一副天不怕地不怕的态度。娜娜试了她的身手，却立刻同意她加入自己的麾下。嘉维尔总是挂着憨厚的笑容，对任何事情总是有种搞不清楚状况的反应。而后娜娜展开对她的详细调查，确定这个人不是装傻，而是真傻。虽说认知与反应相当的傻，但只要是委派给她的任务，总是会相当俐落的完成。除此之外，基本被叫做魔王军第一傻大姊也不为过。\n\n『嘉维尔，也可以称呼我为刺针，嘻嘻，我该做些什么好呢？』`,
        [Locale.en]: `One day, one of Nana's underlings comes by with Janelle, telling Nana that Janelle would like to join Caesar's harem on her own accord. Janelle just looks at Nana with that ditsy smile of hers, without a care in the world. Nana checks if she's up to snuff in battle, and then immediately agrees to let her join. Janelle's one of those people who floats through life with a big goofy grin on her face, head in the clouds... and yet everything still seems to work out for her. Despite her less-than-stellar cognitive abilities, and her slow reflexes, Janelle will gladly take on and finish any mission given to her.\n\n"Hi, I'm Janelle, but you can call me Stinger! Um... What was I doing again?"`,
        [Locale.jp]: `ある日、ナナの手下が自ら魔王軍に入りたいというとある人間を連れてきた。それがガヴィルだ。その場にいた人全員が、彼女の屈託のない笑みと、不安な様子を一切見せない態度を不思議に思った。ナナは彼女の腕前を試すとすぐに入隊を許可した。ガヴィルはいつも素直な笑みを浮かべているが、何をするにしても状況を読めていないようだ。ただ与えられた任務だけはしっかりとこなしている。\n\n『ガヴィル、鋭い針って呼んでもいいよ。へへっ、何かすることはある？』`,
        [Locale.kr]: `어느 날 나나의 부하가 돌연 가벨을 데려오더니 인간 한 명이 마왕군에 가입 의향을 밝히고 있다고 보고했다. 그 자리에 있던 모두는 환한 웃음을 지으며 두려움 따위 모르겠다는 태도로 일관하고 있는 그녀를 이해할 수 없다는 듯 쳐다보았다. 하지만 그녀의 실력 테스트가 끝나자마자 나나는 그녀의 가입을 허가했다. 얼굴에 늘 어수룩한 웃음을 띠고 매사에 얼뜬 반응을 보이곤 하는 그녀. 하지만 어떤 임무라도 그녀에게 맡기면 늘 깔끔하게 수행해낸다.\n\n『내 이름은 가벨, 별칭은 날카로운 가시. 히히. 이제 뭘 하면 좋을까요?』`
    },
    rarity: Rarity.SR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/10/13",
    essence: UnitEssence[UnitCode.janelle],
    thumbnail: UnitEssence[UnitCode.janelle],
    selection: UnitSelection[UnitCode.janelle],
    clothes: UnitFullImage[UnitCode.janelle],
    tagList: [
        TagID.ELEMENT_WIND,
        TagID.POSITION_ATTACKER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_HOT_TITS,
        TagID.CLASS_ELITE,
        TagID.OTHER_DAMAGE_OUTPUT,
    ], 
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
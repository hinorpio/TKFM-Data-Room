import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10040: Unit = {
    ID: "10040",
    metaCode: "h_britney",
    prefix: {
        [Locale.tc]: "小惡魔",
        [Locale.sc]: "小恶魔",
        [Locale.en]: "Little Devil",
        [Locale.jp]: "小悪魔",
        [Locale.kr]: "서큐버스"
    },
    name: {
        [Locale.tc]: "布蘭妮",
        [Locale.sc]: "布兰妮",
        [Locale.en]: "Britney",
        [Locale.jp]: "ブリトニー",
        [Locale.kr]: "브리트니"
    },
    abbreviation: {
        [Locale.tc]: [ "火軍", "萬軍", "小惡魔" ],
        [Locale.sc]: [ "火军", "万军", "小恶魔" ],
        [Locale.en]: [ "H.Britney" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "할브리" ]
    },
    background: {
        [Locale.tc]: `原本就鬼靈精的布蘭妮，在南瓜仙子的萬聖節魔法的作用下變成了真正的小惡魔。為了阻止同樣因萬聖節魔法而暴走的小賽露西亞而忙碌著。身為天才軍師卻拿四處搗亂惡作劇的小賽露西亞沒轍。新獲得的翅膀很方便但因為運動能力不足無法順利長時間飛行。究竟布蘭妮有沒有辦法阻止小賽露西亞呢？\n\n『不給糖就搗蛋，嘻嘻，果然還是搗蛋吧~』`,
        [Locale.sc]: `原本就鬼灵精的布兰妮，在南瓜仙子的万圣节魔法的作用下变成了真正的小恶魔。为了阻止同样因万圣节魔法而暴走的小赛露西亚而忙碌着。身为天才军师却拿四处捣乱恶作剧的小赛露西亚没辙。新获得的翅膀很方便但因为运动能力不足无法顺利长时间飞行。究竟布兰妮有没有办法阻止小赛露西亚呢？\n\n『不给糖就捣蛋，嘻嘻，果然还是捣蛋吧~』`,
        [Locale.en]: `Britney was already pretty devilish long before she was Spookified™ by Panana's magic energy. Now, she's become a true little devil -- a succubus, to be exact. Britney's currently quite busy "helping" Panana, the pumpkin fairy, get back her candified magic energy before Salucia gets it all into her grubby little fingers. A genius tactician-turned-succubus versus a newly youthified elven queen... I'd pay money to see that! Britney's new wings are pretty convenient, but since she's never been the most active girl around, Britney gets tired from flying pretty easily. Does she really have what it takes to stop Salucia from making Hallow-beria the new center of the realm?\n\n"Trick or treat! Hehe, trick it is~"`,
        [Locale.jp]: `頭が良く他人を馬鹿にするのが大好きなブリトニー。かぼちゃの妖精の影響でホンモノの小悪魔に。ハロウィンで暴走するセルシアを止めるため、彼女は動き出した。しかし天才軍師であるにもかかわらず、あちこちでイタズラを繰り返すセルシアに手を焼くブリトニー。新たに手に入れた羽も、体力が無いせいで長い間飛ぶこともできない。ブリトニーはどのようにしてセルシアの暴走を止めるのだろうか？\n\n『お菓子くれなきゃいたずらするぞ……フフ、やっぱお菓子もらってもいたずらしちゃお~っと！』`,
        [Locale.kr]: `원래 잔꾀가 많은 브리트니는 펌킨 페어리의 마법에 걸린 후 혀를 내두를 정도의 약아빠진 서큐버스가 되고 말았다. 같은 할로윈의 마법에 걸린 리틀 살루시아를 막기 위해 고군분투 하는 그녀. 천재 군사도 리틀 살루시아를 막기엔 역부족이었다. 새로 생긴 날개 덕분에 편리할 것 같았지만 체력이 부족한 탓에 장시간 비행할 수 없는 그녀. 과연 브리트니가 리틀 살루시아를 막을 수 있을런지?\n\n『트릭 올 트릿! 히히, 장난칠 거야~ 』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2021/10/27",
    essence: UnitEssence[UnitCode.h_britney],
    thumbnail: UnitEssence[UnitCode.h_britney],
    selection: UnitSelection[UnitCode.h_britney],
    clothes: UnitFullImage[UnitCode.h_britney],
    tagList: [],
    otherVersion: [ UnitCode.britney, UnitCode.m_britney, UnitCode.x_britney ],
    initHP: 3521.6,
    initATK: 1001.6,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.h_britney],
    skillSet: []
}
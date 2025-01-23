import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10017: Unit = {
    ID: "10017",
    metaCode: "f_baal",
    prefix: {
        [Locale.tc]: "祭典狂歡",
        [Locale.sc]: "祭典狂欢",
        [Locale.en]: "Festive",
        [Locale.jp]: "祭りの",
        [Locale.kr]: "광란의 페스티벌"
    },
    name: {
        [Locale.tc]: "巴爾",
        [Locale.sc]: "巴尔",
        [Locale.en]: "Ba'al",
        [Locale.jp]: "バル",
        [Locale.kr]: "바알"
    },
    abbreviation: {
        [Locale.tc]: [ "祭巴", "G8" ],
        [Locale.sc]: [ "祭巴", "G8" ],
        [Locale.en]: [ "F.Baal" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "페바알" ]
    },
    background: {
        [Locale.tc]: `在東方的烈日國有著在迎接新一年開始的第一天舉辦慶典的習俗。雖然魔界並沒有這樣的傳統，不過節慶即等同商機。像這種能大撈一筆的機會，擁有精明商業頭腦的魔王巴爾可不會放過。換上與以往不同風格的服飾，魔王巴爾打算在魔界推行與烈日國同樣的節日與慶典，並且從此定為傳統。祭典、搗年糕、攤販小吃…只要能搬能照抄的就原樣複製過來。在魔界舉辦的人類慶典最後究竟能收獲什麼樣的成果，目前尚無人知曉。\n\n『呀哈哈，人家要趁這機會大賺一票～』`,
        [Locale.sc]: `在东方的烈日国有着在迎接新一年开始的第一天举办庆典的习俗。虽然魔界并没有这样的传统，不过节庆即等同商机。像这种能大捞一笔的机会，拥有精明商业头脑的魔王巴尔可不会放过。换上与以往不同风格的服饰，魔王巴尔打算在魔界推行与烈日国同样的节日与庆典，并且从此定为传统。祭典、捣年糕、摊贩小吃…只要能搬能照抄的就原样复制过来。在魔界举办的人类庆典最后究竟能收获什么样的成果，目前尚无人知晓。\n\n『呀哈哈，人家要趁这机会大赚一票～』`,
        [Locale.en]: `In the eastern land of Isorath, there is a custom where the people celebrate the first day of the new year by holding a festival. Although no such custom exists in the Demon Realm, a holiday is always the perfect opportunity to make a few bucks. And Ba'al, well with her money-grubbing schemes, there's no way she'd pass this up. Putting on some festive clothes, Ba'al plans on holding a festival just like Isorath and making this a demon tradition. A festival, year cakes, some stalls for fun and snacks... just copy all that crap and bring it over, baby. What's gonna happen when Ba'al brings a human celebration to the demon realm? Who knows?\n\n"Hehehe... time to make the big buckaroos!"`,
        [Locale.jp]: `東の烈陽国には、一年の始まりの初日にお祝いをする習慣がある。魔界にはこのような伝統はないが、この祝日も商売のチャンスである。このような一攫千金のチャンスは、ビジネスに精通した魔王バルが見過ごすはずはない。これまでとは一風変わった服装を身に着けた魔王バルは、魔界で烈陽国同様の祝日を設け、伝統にすることにした。お祭り、餅つき、屋台……真似できる物は全部真似した。ただ魔界で人類のお祭りを開きどれくらいの成果を上げたのか、誰にも分からない。\n\n『アハハッ、このチャンスにいっぱい稼ぐよ～』`,
        [Locale.kr]: `동방의 태양국에는 새해를 맞이하는 첫날에 페스티벌을 개최하는 풍습이 있다. 마계에는 이런 전통이 없지만 명절은 곧 대목인 법. 이렇게 큰돈을 벌 수 있는 기회를 비즈니스에 일가견이 있는 마왕 바알이 놓칠 리가 없다. 그녀는 예전과는 다른 스타일로 바뀐 장식으로 마계에서 태양국과 똑같은 명절과 페스티벌을 개최해 전통으로 삼으려 한다. 축제, 떡방아 찧기, 길거리 음식... 베낄 수 있는 것은 그대로 모두 재현했다. 마계에서 개최된 인간들의 페스티벌은 과연 어떤 성과를 거둘 수 있을지, 아직 그 누구도 알 수 없다.\n\n『아하핫. 난 이번 기회로 대박을 칠 거라고~』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2020/12/30",
    essence: UnitEssence[UnitCode.f_baal],
    thumbnail: UnitEssence[UnitCode.f_baal],
    selection: UnitSelection[UnitCode.f_baal],
    clothes: UnitFullImage[UnitCode.f_baal],
    tagList: [],
    otherVersion: [ UnitCode.baal, UnitCode.b_baal, UnitCode.v_baal, UnitCode.s_baal, UnitCode.x_baal ],
    puzzle: [],
    skillSet: []
}
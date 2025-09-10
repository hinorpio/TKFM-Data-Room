import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10183: Unit = {
    ID: "10183",
    metaCode: "g_britney",
    prefix: {
        [Locale.tc]: "俏皮辣妹",
        [Locale.sc]: "俏皮辣妹",
        [Locale.en]: "Playful Gyaru",
        [Locale.jp]: "お茶目ギャル",
        [Locale.kr]: "짓궂은 갸루"
    },
    name: {
        [Locale.tc]: "布蘭妮",
        [Locale.sc]: "布兰妮",
        [Locale.en]: "Britney",
        [Locale.jp]: "ブリトニー",
        [Locale.kr]: "브리트니"
    },
    abbreviation: {
        [Locale.tc]: [ "水軍" ],
        [Locale.sc]: [ "水军" ],
        [Locale.en]: [ "G.Britney", "G.Brit" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "갸브리" ]
    },
    background: {
        [Locale.tc]: `作為智慧與美貌兼具的天才軍師美少女，演戲和控制場面，這種事情對她來說簡直手到擒來。唯一麻煩的地方，大概就是這次要扮演的角色和她身處的場合，和她所熟悉的日常實在相差太大了。難以讀懂的各類書籍，和自己價值觀截然不同的環境，還有必須將勇者盡可能蒙在鼓裡的超高難度臨場應變。有意思！像這種遊走在刀尖上跳舞的危險局面，正是軍師大顯身手的時刻。於是，神田綾音的好朋友，天才白辣妹女大學生布蘭妮～粉墨登場。作為時刻跟在神田綾音身旁的兩名演員之一，布蘭妮必須盡可能地讓這場實境秀不至於露出過多破綻，並且讓魔王凱薩也能玩得盡興。\n\n『異世界的服裝意外的和本天才很搭嘛～身為千年一見的美少女果然穿什麼都適合，真不愧是本天才～』`,
        [Locale.sc]: `作为智慧与美貌兼具的天才军师美少女，演戏和控制场面，这种事情对她来说简直手到擒来。唯一麻烦的地方，大概就是这次要扮演的角色和她身处的场合，和她所熟悉的日常实在相差太大了。难以读懂的各类书籍，和自己价值观截然不同的环境，还有必须将勇者尽可能蒙在鼓里的超高难度临场应变。有意思！像这种游走在刀尖上跳舞的危险局面，正是军师大显身手的时刻。于是，神田绫音的好朋友，天才白辣妹女大学生布兰妮～粉墨登场。作为时刻跟在神田绫音身旁的两名演员之一，布兰妮必须尽可能地让这场实境秀不至于露出过多破绽，并且让魔王凯萨也能玩得尽兴。\n\n『异世界的服装意外的和本天才很搭嘛～身为千年一见的美少女果然穿什麽都适合，真不愧是本天才～』`,
        [Locale.en]: `As a genius strategist and beauty rolled into one, acting and controlling the scene come as naturally to Britney as breathing. The only tricky part is that the role she's playing and the setting she's in are worlds apart from her familiar daily life. Unreadable books, an environment completely at odds with her values, and the ultra-high-stakes improvisation needed to keep the hero in the dark as much as possible. How thrilling! A dangerous situation like dancing on a knife's edge is exactly the moment for a strategist to shine. And so, Ayane's best friend, the genius blonde gyaru college student Britney, takes the stage. As one of the two actors constantly by Ayane's side, Britney must ensure this live performance doesn't reveal too many flaws while keeping Archdemon Caesar thoroughly entertained.\n\n"This is clothing from a foreign world, yet it still suits me, doesn't it? As a once-in-a-millennium beauty, I look good in anything—naturally, I'm a genius~"`,
        [Locale.jp]: `知恵と美貌を兼ね備えた天才美少女軍師にとって、芝居や場のコントロールなど朝飯前だ。唯一の難題といえば、今回演じる役柄と舞台が、彼女の慣れ親しんだ日常からあまりにもかけ離れていることくらいだろう。理解不能な書物の数々、自分の価値観とは正反対の環境、さらに勇者を可能な限り欺き続けねばならない超高難度の即興。面白い！刃の上を舞うようなこの危険な状況こそ、軍師の腕を見せつける絶好のチャンスだ。そこで、神田綾音の親友にして天才白ギャル女子大生──ブリトニーが華々しく登場。神田綾音の傍らに常に寄り添う二人の役者の一人として、ブリトニーには「このリアリティショーが破綻しないように取り繕い、なおかつ魔王シーザーを存分に楽しませる」という重大な役目が課せられたのだ。\n\n『これが異世界の服かぁ。意外と私に似合うじゃん。千年に一人の美少女は何を着ても似合うね。さすが私~』`,
        [Locale.kr]: `지혜와 미모를 겸비한 천재 군사 미소녀에게 있어, 연기나 상황을 통제하는 일쯤은 식은 죽 먹기다. 다만 이번에 맡게 된 배역과 무대는 그녀의 익숙한 일상과는 너무도 달라 곤란할 따름이다. 난해하기 짝이 없는 서적들, 자신의 가치관과 전혀 맞지 않는 환경, 그리고 무엇보다 용자를 최대한 속여야만 하는 고난도의 즉흥 대처. 재밌군! 칼날 위에서 춤추는 듯한 이런 위태로운 국면이야말로 군사가 진가를 발휘할 순간 아닌가? 그리하여 칸다 아야네의 절친, 천재 갸루 여대생 브리트니가 화려하게 무대 위에 등장했다. 칸다 아야네 곁을 지키는 두 배우 중 한 사람으로서, 브리트니는 이 리얼리티 쇼가 허술해지지 않도록 빈틈을 최대한 막아야 했고, 동시에 마왕 시저 또한 마음껏 즐길 수 있도록 분위기를 맞춰줘야 했다.\n\n『이세계 의상, 의외로 이 천재랑 잘 어울리잖아? 천년에 한 번 나올 법한 미소녀답게 뭐든 척척 소화해버리는 난 역시 천재가 맞다니까!』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/09/10",
    essence: UnitEssence[UnitCode.g_britney],
    thumbnail: UnitEssence[UnitCode.g_britney],
    selection: UnitSelection[UnitCode.g_britney],
    clothes: UnitFullImage[UnitCode.g_britney],
    tagList: [],
    otherVersion: [ UnitCode.britney, UnitCode.h_britney, UnitCode.m_britney, UnitCode.x_britney ],
    initHP: 3785.6,
    initATK: 931.2,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.g_britney],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10213: Unit = {
    ID: "10213",
    metaCode: "fujihana",
    prefix: {
        [Locale.tc]: "浮世妖刀",
        [Locale.sc]: "浮世妖刀",
        [Locale.en]: "Phantom Blade",
        [Locale.jp]: "浮世の妖刀",
        [Locale.kr]: "속세의 요도"
    },
    name: {
        [Locale.tc]: "藤花",
        [Locale.sc]: "藤花",
        [Locale.en]: "Fujihana",
        [Locale.jp]: "藤花",
        [Locale.kr]: "후지카"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `生來帶戾氣，寒凝血未乾。很久很久以前，烈日國的工匠為了打造一把媲美聖劍的武器，傾盡全力鍛造出了名為「藤花」的武士刀。這把武士刀的身上，寄宿著人類想要活下去的執念，還有透過她來戰勝魔族的願望。這麼做本該不會出問題的，然而，因為鍛造與淬鍊的方式過於血腥殘酷，導致藤花身上沾染了極為強烈的殺意。她不僅會刺激持有者的鬥爭和殺戮慾望，以此來磨利自己的刀刃，還會讓周圍的人產生莫名的暴戾之氣。儘管這不是出自她的本意，但在被持有者用來無差別殺害大量的生命之後，藤花被迫變成了一把妖異的邪刀，並被封印在深山之中。而在她脫離封印，重見天日的現在，她仍舊在追求一位不會被自己給影響，能夠始終保持著武者之心的武士來配戴自己。\n\n『呼呼～只有渴望戰鬥、不懼艱險，此生皆浸淫於武道之人，才有資格成為拙者的擇主對象。』`,
        [Locale.sc]: `生来带戾气，寒凝血未乾。很久很久以前，烈日国的工匠为了打造一把媲美圣剑的武器，倾尽全力锻造出了名为「藤花」的武士刀。这把武士刀的身上，寄宿着人类想要活下去的执念，还有透过她来战胜魔族的愿望。这么做本该不会出问题的，然而，因为锻造与淬鍊的方式过于血腥残酷，导致藤花身上沾染了极为强烈的杀意。她不仅会刺激持有者的斗争和杀戮慾望，以此来磨利自己的刀刃，还会让周围的人产生莫名的暴戾之气。儘管这不是出自她的本意，但在被持有者用来无差别杀害大量的生命之后，藤花被迫变成了一把妖异的邪刀，并被封印在深山之中。而在她脱离封印，重见天日的现在，她仍旧在追求一位不会被自己给影响，能够始终保持着武者之心的武士来配戴自己。\n\n『呼呼～只有渴望战斗、不惧艰险，此生皆浸淫于武道之人，才有资格成为拙者的择主对象。』`,
        [Locale.en]: `Born with malice deep and cold, blood never dries upon her edge. Long, long ago, artisans of Isorath poured their heart and soul into forging a katana named Fujihana, aiming to create a weapon capable of rivaling the Blademaster. Bound within this blade was humanity's desperate obsession to survive, along with their fervent prayer to conquer the Demons through her power. In theory, nothing should have gone wrong. However, because the forging and tempering processes were far too bloody and cruel, Fujihana became stained with an immensely potent urge to kill. Not only would she stoke her wielder's desire for conflict and slaughter, using it to hone her own edge, she would also cause those around her to give in to unexplainable violence. Though none of this was her intent, after being used by her wielders to indiscriminately slaughter countless lives, Fujihana was forced into becoming a wicked, unnatural blade and was sealed away deep within the mountains. Now that she has escaped her seal and seen the light of day once more, she continues her search for a samurai who remains unswayed by her influence, one who holds fast to the heart of a true warrior.\n\n"He-heh~ Only those who crave battle, fear no hardship, and spend their entire lives immersed in the way of the warrior are worthy of being my master."`,
        [Locale.jp]: `生来より凶虐を纏い、寒気に血凍てつけど未だ乾かず。はるかはるかな昔のこと。烈陽国の鍛冶師たちは、聖剣にも劣らぬ武器を求め、全身全霊を賭して「藤花」という名の刀を打ち上げた。この刀には人の生への執念と、彼女を以って魔族に打ち勝ちたいという悲願が宿っていた。それだけであれば良かったのだが、血に塗れた鍛刀過程のあまりの残虐さゆえに、その禍々しい殺意もが藤花に染みついた。彼女は使い手の闘争心と殺戮の欲を焚きつけ、己が刀の糧とするだけに飽き足らず、その邪気で周囲の人々に何の謂れもなく残虐な念を芽生えさせてしまうのだ。それは藤花の本意では無かったが、使い手たちに無差別殺人の道具として使われ、大量の命を殺め続けた結果、やがて邪気に満ちた妖刀へと成れ果て、ついには深い山奥へと封じられることになったのだった。そんな封印から逃れ、ついに日の目を見た今、彼女は今でも自分に侵されず、武士の心を掲げ続けられるもののふの使い手を探し続けている。\n\n『ふっふ……ただ一心に戦求め、艱難辛苦を恐れず、生涯を骨の髄まで武の道に捧げる者こそ、拙の求むる使い手よ』`,
        [Locale.kr]: `타고난 살기, 피조차 얼리는 한기. 아주 먼 옛날, 태양국의 장인들은 성검에 필적하는 무기를 만들기 위해 혼신의 힘을 다해 「후지카」라는 일본도를 벼려냈다. 그 일본도에는 살아남고자 하는 인간의 집념과, 그녀를 통해 마족을 물리치겠다는 염원이 깃들어 있었다. 원래대로라면 아무 문제도 없었어야 했다. 그러나 지나치게 잔혹한 제련 과정을 거친 탓에, 후지카의 몸에는 지독한 살기가 배어들고 말았다. 그녀는 소유자의 투쟁심과 살육욕을 자극하여 자신의 칼날을 벼렸을 뿐만 아니라, 주변 사람들마저 이유 모를 흉포한 기운에 휩싸이게 만들었다. 비록 그것이 후지카의 본의는 아니었으나, 소유자가 그녀를 이용해 수많은 생명을 무차별적으로 앗아간 끝에, 그녀는 흉흉한 요도가 되어 깊은 산속에 봉인되고 말았다. 그리고 봉인에서 풀려나 다시 세상에 모습을 드러낸 지금도, 그녀는 자신에게 휘둘리지 않고 무인으로서의 신념을 끝까지 지킬 수 있는 무사가 자신을 지녀주길 바라고 있다.\n\n『후후~ 오직 싸움을 갈망하고, 험난함을 두려워하지 않으며, 평생을 무도에 바친 자만이 소인의 주인이 될 자격이 있죠.』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/09/09",
    essence: UnitEssence[UnitCode.fujihana],
    thumbnail: UnitEssence[UnitCode.fujihana],
    selection: UnitSelection[UnitCode.fujihana],
    clothes: UnitFullImage[UnitCode.fujihana],
    tagList: [],
    otherVersion: [],
    initHP: 3612.8,
    initATK: 1022.4,
    puzzle: [],
    outfits: UnitOutfits[UnitCode.fujihana],
    voiceSet: UnitVoice[UnitCode.fujihana],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}

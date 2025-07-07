import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10802: Unit = {
    ID: "10802",
    metaCode: "nana",
    prefix: {
        [Locale.tc]: "貓妖",
        [Locale.sc]: "貓妖",
        [Locale.en]: "Bakeneko",
        [Locale.jp]: "猫娘",
        [Locale.kr]: "바케네코"
    },
    name: {
        [Locale.tc]: "娜娜",
        [Locale.sc]: "娜娜",
        [Locale.en]: "Nana",
        [Locale.jp]: "ナナ",
        [Locale.kr]: "나나"
    },
    abbreviation: {
        [Locale.tc]: [ "普娜", "普貓", "貓", "過勞貓" ],
        [Locale.sc]: [ "普娜", "普猫", "猫", "过劳猫" ],
        [Locale.en]: [ "OG.Nana" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `在凱薩還不是魔王之前，娜娜就是凱薩認識多年的好友。儘管外表可愛，但我行我素的性格讓娜娜面對成為魔王的凱薩也毫無尊敬之情，總是用辛辣的毒舌與他說話。作為一名常識人兼魔王下屬，娜娜經常因為凱薩毫無常識且破天荒的命令而疲於奔命，並且擔任著「吐槽」的重責大任。即使是娜娜本人也無法分辨自己對凱薩本人的感情究竟是友情還是愛情，不過娜娜無庸置疑是凱薩最為倚賴的左右手。\n\n『笨蛋凱薩，快點工作喵！』`,
        [Locale.sc]: `在凯萨还不是魔王之前，娜娜就是凯萨认识多年的好友。尽管外表可爱，但我行我素的性格让娜娜面对成为魔王的凯萨也毫无尊敬之情，总是用辛辣的毒舌与他说话。作为一名常识人兼魔王下属，娜娜经常因为凯萨毫无常识且破天荒的命令而疲于奔命，并且担任着「吐槽」的重责大任。即使是娜娜本人也无法分辨自己对凯萨本人的感情究竟是友情还是爱情，不过娜娜无庸置疑是凯萨最为倚赖的左右手。\n\n『笨蛋凯萨，快点工作喵！』`,
        [Locale.en]: `Nana has been good friends with Caesar since long before he ever claimed the title of archdemon. She's got an innocent enough look, but her sparky personality and sharp tongue sees her talking down to Caesar more often than not. Having a good amount of common sense, she gets completely exhausted following Caesar's ridiculous orders, each one seemingly stupider than the last, and has no problem letting him know how she feels. Still, knowing Caesar for so long, it's hard for Nana to know whether her feelings for him are those of pure friendship, or something more... Still, her loyalty has never faltered, and to this day she sticks by his side as his right-hand woman.\n\n"Hey, big dummy! Get to work... meow~"`,
        [Locale.jp]: `シーザーが魔王になる前から、シーザーとナナは親友だった。見た目はとってもかわいいがストレートな性格のナナは、シーザーに尊敬の意を表すこともなく、いつも毒舌混じりで話している。常識人且つ魔王の手下としていつも常識はずれで破天荒なシーザーの命令を聞いている。またシーザーが吐き出す「文句」を受け止める重大な役も担っている。ナナもシーザーに対する気持ちが友情なのか愛情なのか分かっていないが、シーザーにとって大切な右腕であることは間違いない。\n\n『バカシーザー！早く仕事をするにゃ！』`,
        [Locale.kr]: `시저가 아직 마왕이 아니었을 때부터 나나는 시저의 오래된 친구였다. 귀여운 외모를 가지고 있지만 언제나 제멋대로인 성격의 나나는 마왕이 된 이후로도 시저에게 전혀 예의를 차리지 않고 심지어 그에게 독설을 일삼을 때도 있다. 상식에 따라 행동하는 마왕의 부하인 나나는 자주 시저의 상식에 어긋나는 기상천외한 명령을 어기고 도망쳐버린 후에 「불평」을 터뜨리는 중요한 임무를 맡곤 한다. 나나 본인도 시저에 대한 마음이 대체 사랑인지 우정인지 확실히 알지 못하지만 시저의 가장 믿음직스러운 오른팔인 것은 분명하다.\n\n『바보 시저. 어서 일해라냥!』`
    },
    rarity: Rarity.R,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.nana],
    thumbnail: UnitEssence[UnitCode.nana],
    selection: UnitSelection[UnitCode.nana],
    clothes: UnitFullImage[UnitCode.nana],
    tagList: [ 
        TagID.ELEMENT_WIND, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_SMALL_SIZED, 
        TagID.BREAST_FLAT_TITS, 
        TagID.OTHER_DAMAGE_OUTPUT,
    ],
    otherVersion: [ UnitCode.s_nana, UnitCode.c1_nana, UnitCode.o_nana, UnitCode.a_nana ],
    initHP: 2316,
    initATK: 700.8,
    puzzle: [ PuzzleCode.EVENT_2021_XMAS_2, PuzzleCode.EVENT_2022_XMAS_1, PuzzleCode.EVENT_2023_XMAS_2 ],
    outfits: [],
    skillSet: []
}
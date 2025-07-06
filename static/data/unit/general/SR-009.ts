import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10036: Unit = {
    ID: "10036",
    metaCode: "nafrala",
    prefix: {
        [Locale.tc]: "史萊姆女王",
        [Locale.sc]: "史莱姆女王",
        [Locale.en]: "Slime Queen",
        [Locale.jp]: "スライムの女王",
        [Locale.kr]: "슬라임 퀸"
    },
    name: {
        [Locale.tc]: "娜芙菈菈",
        [Locale.sc]: "娜芙菈菈",
        [Locale.en]: "Nafrala",
        [Locale.jp]: "ナフララ",
        [Locale.kr]: "나프라라"
    },
    abbreviation: {
        [Locale.tc]: [ "奶綠", "史王" ],
        [Locale.sc]: [ "奶绿", "史王" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `娜芙菈菈是新生的史萊姆女王，對人類充滿了好奇以及善意。在進化後，娜芙菈菈跳脫於過去還是史萊姆時單一以及本能佔據大多數的思考模式。為了能夠更靠近她喜歡的人類，她給自己取了「娜芙菈菈」這個像是人類的名字，並用黏液製造出了衣服。可是這無法改變娜芙菈菈作為魔物的本質，只要接近人類的村莊就會被提防、警戒，甚至被趕出來。不過這點挫折可阻撓不了娜芙菈菈，今天的她也在為了靠近人類村莊而努力！\n\n『我是娜芙菈菈，和人家好好相處吧～』`,
        [Locale.sc]: `娜芙菈菈是新生的史莱姆女王，对人类充满了好奇以及善意。在进化后，娜芙菈菈跳脱于过去还是史莱姆时单一以及本能占据大多数的思考模式。为了能够更靠近她喜欢的人类，她给自己取了「娜芙菈菈」这个像是人类的名字，并用黏液制造出了衣服。可是这无法改变娜芙菈菈作为魔物的本质，只要接近人类的村庄就会被提防、警戒，甚至被赶出来。不过这点挫折可阻挠不了娜芙菈菈，今天的她也在为了靠近人类村庄而努力！\n\n『我是娜芙菈菈，和人家好好相處吧～』`,
        [Locale.en]: `Nafrala is the brand-new queen of the slimes, and has an inherent curiosity for the human race. After Nafrala evolved, she cast off a lot of the old, closed-minded ways of thinking she had back when she was a regular-old slime. In order to fit in better with humans, she gave herself the more human-like name of 'Nafrala', and made some more human-looking clothes out of her own slime. But still, there is no hiding the fact that Nafrala is a slime, and therefore a monster. Whenever she gets close to a town, they immediately put up their defenses and chase her away. But these little setbacks have done nothing to crush her dreams of being the bestest of friends with the human race!\n\n"I'm Nafrala... Let's be friends!"`,
        [Locale.jp]: `ナフララは新生のスライム女王。人類に対して好奇心と善意を持っている。進化したナフララは、これまでスライムだった時の単純な思考で本能的な思考モードから抜け出した。好きな人類に近づくために、「ナフララ」という人類の名前を自分につけ、さらに粘液でできた服を身につけた。しかし、ナフララの魔物の本質は変えられないため、人類の村に近づくと警戒され、追い出されることもある。しかしナフララはそれにくじけることもなく、人類の村に近づこうと努力しているのだ。`,
        [Locale.kr]: `나프라라는 새로 등극한 슬라임 퀸으로, 인간들에 대해 호기심과 선의가 가득하다. 진화를 거친 후, 나프라라는 일반 슬라임이었을 때의 단조로움과 주로 본능에 의지하는 사고방식에서 벗어나게 되었다. 그녀가 좋아하는 인간들에게 좀 더 가깝게 다가가기 위해서, 그녀는 자신에게 「나프라라」라는 인간의 이름을 지어주고 점액으로 옷을 만들었다. 하지만 이것으로도 몬스터인 나프라라의 본질을 바꿀 수는 없었다. 인간들의 마을에 접근하기만 해도 인간들은 그녀를 조심하고 경계하며 심지어 쫓아내기까지 한다. 하지만 이 정도의 어려움 따위는 나프라라를 꺾을 수 없다. 오늘도 그녀는 인간 마을에 접근하기 위해 열심히 노력하는 중이다!\n\n『나는 나프라라야. 나하고 잘 지내보자~』`
    },
    rarity: Rarity.SR,
    element: Element.WIND,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: false,
    releaseDate: "2021/03/10",
    essence: UnitEssence[UnitCode.nafrala],
    thumbnail: UnitEssence[UnitCode.nafrala],
    selection: UnitSelection[UnitCode.nafrala],
    clothes: UnitFullImage[UnitCode.nafrala],
    tagList: [
        TagID.ELEMENT_WIND, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_GIANT_TITS, 
        TagID.CLASS_ELITE,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
        TagID.OTHER_RECOVERY,
        TagID.OTHER_SURVIVABILLITY,
    ], 
    otherVersion: [],
    initHP: 4349.799554399185,
    initATK: 534.7984208349906,
    puzzle: [],
    outfits: [],
    skillSet: []
}
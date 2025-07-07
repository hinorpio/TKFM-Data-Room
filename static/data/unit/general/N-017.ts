import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10917: Unit = {
    ID: "10917",
    metaCode: "blaire",
    prefix: {
        [Locale.tc]: "法斯精銳騎士",
        [Locale.sc]: "法斯精锐骑士",
        [Locale.en]: "Phasi Soldier",
        [Locale.jp]: "フォス精鋭騎士",
        [Locale.kr]: "파스제국 정예 기사"
    },
    name: {
        [Locale.tc]: "布蘭",
        [Locale.sc]: "布兰",
        [Locale.en]: "Blaire",
        [Locale.jp]: "ブラン",
        [Locale.kr]: "브란"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `唯有在原部隊表現出類拔萃，百人挑一的菁英才能加入法斯帝國的第一主力軍團。布蘭正是主力軍團的其中一員。但即使加入了主力軍團，布蘭也從未放下修行，日以繼夜地繼續磨練自己。布蘭對法斯帝國毫無忠誠，之所以加入軍隊，只是因為軍隊擁有最豐富的資源和訓練。想必有朝一日，如果有比第一軍團更優秀的工作環境，她就會毫不猶豫地轉投他處。\n\n『巡邏…又得浪費修練的時間了。』`,
        [Locale.sc]: `唯有在原部队表现出类拔萃，百人挑一的菁英才能加入法斯帝国的第一主力军团。布兰正是主力军团的其中一员。但即使加入了主力军团，布兰也从未放下修行，日以继夜地继续磨练自己。布兰对法斯帝国毫无忠诚，之所以加入军队，只是因为军队拥有最丰富的资源和训练。想必有朝一日，如果有比第一军团更优秀的工作环境，她就会毫不犹豫地转投他处。\n\n『巡逻…又得浪费修练的时间了。』`,
        [Locale.en]: `Only those who excel in the common army can rise to the ranks of Centurion, the elite of the elite. Blaire is one such elite, one who continues to train and better herself by the day. Even though she is one of the highest respected soldiers in all the Empire, Blaire spares them no loyalty. She only chose to be a Centurion for the exceptional training, resources, and benefits the position provides. If a better opportunity were to present itself, she would surely jump at it.\n\n"Ugh, patrol... time I could have spent training."`,
        [Locale.jp]: `元の部隊で群を抜く精鋭、英才でこそ入れるフォス帝国の第一主力軍団。ブランもまたその主力軍団の一員である主力軍団に入ってからもブランは修行を怠ることなく、昼夜問わず自分磨きをしている。ブランはフォス帝国に忠誠心は一切ない。豊富な資源と訓練を受けるがために軍隊に入ったのだ。もし第一軍団よりもいい環境で仕事ができるのであれば、一切躊躇せずにそちらに移るだろう。\n\n『巡回……訓練の時間がもったいない』`,
        [Locale.kr]: `원래의 소속 부대에서 걸출한 능력을 보여주어 백 명의 병사 중에 선출된 자만이 파스제국 제일의 주력 군단에 가입할 수 있다. 브란은 바로 이 주력 군단 병사 중 하나였다. 하지만 브란은 주력 군단에 가입한 후로도 수행을 게을리하지 않고 밤낮에 걸쳐 자신의 실력을 연마하고 있다. 브란은 파스제국에 대해 어떠한 충성심도 없으며, 군대 내에서 가장 풍부한 자원과 훈련을 누릴 수 있다는 이유만으로 입대했을 뿐이다. 만약 어느 날 제일 군단보다 더 우수한 훈련 환경을 제공하는 부대가 나타난다면 그녀는 아무 망설임 없이 소속을 바꾸게 될 것이다.\n\n『순찰이라니... 또 수행 시간을 낭비하게 생겼군.』`
    },
    rarity: Rarity.N,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2021/03/10",
    essence: UnitEssence[UnitCode.blaire],
    thumbnail: UnitEssence[UnitCode.blaire],
    selection: UnitSelection[UnitCode.blaire],
    clothes: UnitFullImage[UnitCode.blaire],
    tagList: [ 
        TagID.ELEMENT_WIND, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_DEFENSE,
    ],
    otherVersion: [],
    initHP: 2000,
    initATK: 506,
    puzzle: [ PuzzleCode.HUMAN_BLAIRE, PuzzleCode.HUMAN_ANNA ],
    outfits: [],
    skillSet: []
}
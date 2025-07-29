import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10034: Unit = {
    ID: "10034",
    metaCode: "asida",
    prefix: {
        [Locale.tc]: "剪裁之紅",
        [Locale.sc]: "剪裁之红",
        [Locale.en]: "Red Tailor",
        [Locale.jp]: "紅の裁断師",
        [Locale.kr]: "붉은 재단사"
    },
    name: {
        [Locale.tc]: "安絲蒂",
        [Locale.sc]: "安丝蒂",
        [Locale.en]: "Asida",
        [Locale.jp]: "アンスティー",
        [Locale.kr]: "아나스티"
    },
    abbreviation: {
        [Locale.tc]: [ "普紅", "紅毛", "紅" ],
        [Locale.sc]: [ "普红", "红毛", "红" ],
        [Locale.en]: [ "OG.Asida" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `半精靈是人類與精靈交合後產下的後代，無論性命還是天賦都介於兩者之間。人類覬覦他們的外貌和壽命，精靈則對他們寄予憐憫，夾在兩者之間讓他們無法真正地融入群體。不過安絲蒂並不為這點困擾，因為自她有記憶以來，妹妹安絲娜就陪伴著她，她從來不曾感到孤單過。安絲蒂喜歡漂亮的東西，以及一切美好的事物，更喜歡看見他人幸福的笑臉。小時候目睹了婚禮上身穿華麗禮服的新娘笑得如此幸福，成為了安絲蒂未來一頭栽進裁縫行業的契機。憑藉獨特的美感以及設計理念，安絲蒂經營的服裝店《巴赫蒂娜》很快就聲名鵲起。只是粗枝大葉的安絲蒂總是在製作禮服時犯下各種錯誤，讓共事的妹妹為善後傷透了腦筋。\n\n『安絲娜~下件禮服妳覺得要設計成什麼款式好呢？』`,
        [Locale.sc]: `半精灵是人类与精灵交合后产下的后代，无论性命还是天赋都介于两者之间。人类觊觎他们的外貌和寿命，精灵则对他们寄予怜悯，夹在两者之间让他们无法真正地融入群体。不过安丝蒂并不为这点困扰，因为自她有记忆以来，妹妹安丝娜就陪伴着她，她从来不曾感到孤单过。安丝蒂喜欢漂亮的东西，以及一切美好的事物，更喜欢看见他人幸福的笑脸。小时候目睹了婚礼上身穿华丽礼服的新娘笑得如此幸福，成为了安丝蒂未来一头栽进裁缝行业的契机。凭借独特的美感以及设计理念，安丝蒂经营的服装店《巴赫蒂娜》很快就声名鹊起。只是粗枝大叶的安丝蒂总是在制作礼服时犯下各种错误，让共事的妹妹为善后伤透了脑筋。\n\n『安丝娜~下件礼服妳觉得要设计成什么款式好呢？』`,
        [Locale.en]: `Half Elves are the product of a human and an elf, their innate talents and lifespans being a perfect mix of the two. With humans jealous of their beauty and long lives, and elves taking pity on their shortcomings, it's difficult for half elves to fit in with either group. But Asida doesn't mind, since she's always had her sister Asina with her, keeping her company. Asida loves everything beautiful, including smiles. She loves to see people happy. As a child, she saw a gorgeous bride on her wedding day, looking happy as can be. Since then, it has been Asida's dream to get married one day. Growing up with an acute sense of style, Asida opened a clothing store named "Pasadena", which quickly made a name for itself. Unfortunately, Asida is a bit of a klutz, often making a number of mistakes on her clothes, giving her sister and co-worker Asina a huge headache.\n\n"Asina, what kind of clothing should we design next~?"`,
        [Locale.jp]: `ハーフエルフとは人類とエルフの間に生まれた子孫である。寿命の長さも、生まれ持った資質も、すべてが両者の中間だ。人類はエルフの美しい外見とその寿命の長さを羨み、エルフたちは人類を哀れんでいた。そんな中、両者の中間にあたるハーフエルフたちはどちらにも馴染むことはできなかった。だからと言って、これまでアンスティーは寂しいと感じたことはない。なぜなら、アンスティーには生まれた時から妹のアンスナーがいたからだ。アンスティーは美しいものや事柄を好み、人の笑顔を見るのが好きだった。子供のころ結婚式で美しいドレスを身にまとい幸せそうに笑う花嫁を見た時から、裁縫の仕事に就くことを夢見てきた。今では、彼女自身の美的センスとデザインが人気を集め、アンスティーの経営する洋服屋《バッハティーナ》は超有名店となった。だが、もともと性格が大雑把なアンスティーはドレス制作中にもミスが絶えない。そしてその後始末をする妹はいつも頭を悩ませている。\n\n『アンスナー、次のドレスはどんなデザインがいいかなぁ！』`,
        [Locale.kr]: `하프엘프는 인간과 엘프 사이에서 태어난 자의 후손을 일컬으며, 수명과 능력 또한 두 종족의 중간 즈음에 있다. 인간은 하프엘프의 수명과 외모를 탐내었고 엘프는 어느 쪽에도 제대로 속하지 못한 하프엘프들을 불쌍히 여겼다. 하지만 아나스티는 그런 이유로 어려움을 겪은 적은 없다. 태어날 때부터 동생 아나스나가 늘 곁에 있어주어 외로움을 느낄 겨를이 없었기에. 예쁘고 아름다운 것을 좋아하는 아나스티지만 남들의 행복한 미소를 보는 것을 무엇보다도 좋아한다. 아나스티는 어린 시절 화려한 웨딩드레스를 입은 신부의 행복한 미소를 본 뒤로 패션 업계에 발을 들이게 됐다고 한다. 독창적인 미적 감각과 디자인 이념으로 아나스티의 <바흐테나>의복점은 순식간에 유명세를 타게 됐다. 다만 일에 있어선 똑부러지지 못한 아나스티의 잦은 실수로, 함께 일하는 동생은 늘 언니의 뒷수습으로 골머리를 앓고 있다.\n\n『아나스나~ 다음 디자인은 어떤 스타일로 해볼까~?』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2021/08/04",
    essence: UnitEssence[UnitCode.asida],
    thumbnail: UnitEssence[UnitCode.asida],
    selection: UnitSelection[UnitCode.asida],
    clothes: UnitFullImage[UnitCode.asida],
    tagList: [],
    otherVersion: [ UnitCode.q_asida ],
    initHP: 3441.6,
    initATK: 1024,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.asida],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
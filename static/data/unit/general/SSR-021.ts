import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10035: Unit = {
    ID: "10035",
    metaCode: "asina",
    prefix: {
        [Locale.tc]: "縫紉之藍",
        [Locale.sc]: "缝纫之蓝",
        [Locale.en]: "Blue Tailor",
        [Locale.jp]: "蒼の縫製師",
        [Locale.kr]: "푸른 재봉사"
    },
    name: {
        [Locale.tc]: "安絲娜",
        [Locale.sc]: "安丝娜",
        [Locale.en]: "Asina",
        [Locale.jp]: "アンスナー",
        [Locale.kr]: "아나스나"
    },
    abbreviation: {
        [Locale.tc]: [ "普藍", "藍毛", "藍" ],
        [Locale.sc]: [ "普蓝", "蓝毛", "蓝" ],
        [Locale.en]: [ "OG.Asina" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `半精靈是人類與精靈交合後產下的後代，無論性命還是天賦都介於兩者之間。人類覬覦他們的外貌和壽命，精靈則對他們寄予憐憫，夾在兩者之間讓他們無法真正地融入群體。不過安絲娜從未有過孤單的感覺，因為就算她想要獨處時間，她的雙胞胎姐姐也會任性的拖著她一起行動。充滿活力且好像一刻都坐不住的姐姐讓安絲娜傷透了腦筋。為了避免姐姐在自己視線外闖禍，總是跟在她後面，等回過神時兩人已經形影不離。成年後與安絲蒂一樣成為了裁縫，並共同經營著服裝店《巴赫蒂娜》。手藝高明的安絲娜總是能實現姐姐各種天馬行空的服裝設計。\n\n『安絲蒂是笨蛋，若我不看著她又會闖禍的。』`,
        [Locale.sc]: `半精灵是人类与精灵交合后产下的后代，无论性命还是天赋都介于两者之间。人类觊觎他们的外貌和寿命，精灵则对他们寄予怜悯，夹在两者之间让他们无法真正地融入群体。不过安丝娜从未有过孤单的感觉，因为就算她想要独处时间，她的双胞胎姐姐也会任性的拖着她一起行动。充满活力且好像一刻都坐不住的姐姐让安丝娜伤透了脑筋。为了避免姐姐在自己视线外闯祸，总是跟在她后面，等回过神时两人已经形影不离。成年后与安丝蒂一样成为了裁缝，并共同经营着服装店《巴赫蒂娜》。手艺高明的安丝娜总是能实现姐姐各种天马行空的服装设计。\n\n『安丝蒂是笨蛋，若我不看着她又会闯祸的。』`,
        [Locale.en]: `Half Elves are the product of a human and an elf, their innate talents and lifespans being a perfect mix of the two. With humans jeaous of their beauty and long lives, and elves taking pity on their shortcomings, it's difficult for half elves to fit in with either group. But Asina has never had a chance to feel lonely, because no matter what her big sister Asida wants to do, she always drags Asina along with her. Her big sister Asida has so much energy, Asina usually goes to sleep with a huge headache. In order to make sure her sister doesn't run off and get herself in trouble, Asina is always one step behind her, never leaving her sight. Now, they own a successful clothing shop together called 'Pasadena'. Asida has all of the vision, but Asina is the one with the skills to make it a reality.\n\n"That Asida, such an idiot... if I don't watch her, who knows what she'll get herself into..."`,
        [Locale.jp]: `ハーフエルフとは人類とエルフの間に生まれた子孫である。寿命の長さも、生まれ持った資質も、すべてが両者の中間だ。人類はエルフの美しい外見とその寿命の長さを羨み、エルフたちは人類を哀れんでいた。そんな中、両者の中間にあたるハーフエルフたちはどちらにも馴染むことはできなかった。だが、アンスナーはこれまで孤独に感じたことなんてない。なぜなら、例えアンスナーが一人になりたくても、いつだって双子の姉が勝手に彼女の近くにいたから。元気いっぱいで、一秒たりともじっとしていられないタイプの姉にアンスナーはいつも頭を悩ませていた。そんな姉が自分の知らぬところで面倒ごとを起こさないよう、アンスナーはいつも彼女の後ろから見守るようになった。そのうち、まるで影のようにいつも一緒にいる存在となったのだ。大人になってからはアンスティーと共に裁縫の道へと進み、現在は《バッハティーナ》という店を経営している。手先の器用なアンスナーは姉の突飛なアイデアやデザインだって実現可能なのだ。\n\n『アンスティーはバカだから、私がいないとまた面倒ごとを引き起こすでしょう？』`,
        [Locale.kr]: `하프엘프는 인간과 엘프 사이에서 태어난 자의 후손을 일컬으며, 수명과 능력 또한 두 종족의 중간 즈음에 있다. 인간은 하프엘프의 수명과 외모를 탐내었고 엘프는 어느 쪽에도 제대로 속하지 못한 하프엘프들을 불쌍히 여겼다. 하지만 아나스나는 외로움을 느낀 적이 없었다. 오히려 혼자만의 시간을 갖고 싶어 해도 그녀의 쌍둥이 언니는 언제나 그녀 곁에서 떨어질 줄 몰랐으니. 언제나 활기차고 한시도 가만히 있지 못하는 언니 때문에 아나스나는 늘 고민이다. 언니가 자신의 눈을 피해 사고를 치지 못하도록 언제나 언니의 뒤를 지키며 서로 한시도 떨어지지 않는다. 성인이 된 후 아나스티와 함께 재단사가 되어 <바흐테나>의복점을 공동 운영하게 됐다. 손재주가 빼어난 아나스나는 언니의 각종 무리한 요청에도 불구하고 늘 멋지게 옷을 만들어낸다.\n\n『언니는 바보라니까. 잠깐 방심하면 그새를 못 참고 또 사고를 쳐버리니.』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2021/08/04",
    essence: UnitEssence[UnitCode.asina],
    thumbnail: UnitEssence[UnitCode.asina],
    selection: UnitSelection[UnitCode.asina],
    clothes: UnitFullImage[UnitCode.asina],
    tagList: [],
    otherVersion: [ UnitCode.q_asina ],
    initHP: 3441.6,
    initATK: 1024,
    puzzle: [],
    outfits: [],
    skillSet: []
}
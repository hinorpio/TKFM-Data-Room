import { Locale, Rarity, Element, Position, PotentialType, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10217: Unit = {
    ID: "10217",
    metaCode: "herschel",
    prefix: {
        [Locale.tc]: "科技委員",
        [Locale.sc]: "科技委员",
        [Locale.en]: "Tech Councilor",
        [Locale.jp]: "科学技術委員",
        [Locale.kr]: "과학기술 위원"
    },
    name: {
        [Locale.tc]: "赫謝爾",
        [Locale.sc]: "赫谢尔",
        [Locale.en]: "Herschel",
        [Locale.jp]: "ハーシェル",
        [Locale.kr]: "허셸"
    },
    abbreviation: {
        [Locale.tc]: [ "科委" ],
        [Locale.sc]: [ "科委" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `赫謝爾是達洛姆公國「十人議會」的成員之一，作為科技委員的她，掌握著公國最新銳的戰爭科技與軍事發明。她曾憑藉卓越的知識與智慧，在大戰中為公國立下許多功勞。然而，隨著戰事劃下句點，在失去了迫切的需求後，她的大量研究經費也被挪作他用，使得她失去了能夠肆意研究的環境。為了向國內那些短視的貴族和笨蛋平民證明自己的價值，赫謝爾帶上自己的一眾親信和部下，率隊前往了遙遠的東方。她渴望征服這塊充滿資源與落後蠻人的大陸，並在此地開拓出屬於自己的新天地。\n\n『嚐嚐科技的力量吧！你們這些野蠻人！』`,
        [Locale.sc]: `赫谢尔是达洛姆公国「十人议会」的成员之一，作为科技委员的她，掌握着公国最新锐的战争科技与军事发明。她曾凭藉卓越的知识与智慧，在大战中为公国立下许多功劳。然而，随着战事划下句点，在失去了迫切的需求后，她的大量研究经费也被挪作他用，使得她失去了能够肆意研究的环境。为了向国内那些短视的贵族和笨蛋平民证明自己的价值，赫谢尔带上自己的一众亲信和部下，率队前往了遥远的东方。她渴望征服这块充满资源与落后蛮人的大陆，并在此地开拓出属于自己的新天地。\n\n『嚐嚐科技的力量吧！你们这些野蛮人！』`,
        [Locale.en]: `Herschel is a member of the Council of the Ten in the Principality of Daruma. As the head of the Tech Committee, she wields the principality's most cutting-edge war tech and military inventions. During the Great War, her brilliant intellect and ingenuity earned her countless accomplishments on the battlefield. However, once the fighting drew to a close and the urgent need for weaponry vanished, her massive research funding was reallocated elsewhere, thereby robbing her of the freedom to experiment to her heart's content. Determined to prove her worth to her country's short-sighted nobles and foolish commoners, Herschel gathered her trusted inner circle and subordinates to set sail for the distant lands to the east. She hungers to conquer this land brimming with resources and backward "barbarians", carving out a new domain entirely her own.\n\n"Taste the power of technology, you savages!"`,
        [Locale.jp]: `ハーシェルはダロム公国の「十人議会」に名を連ねる一人。科学技術委員を務める彼女は、公国最新鋭の戦争テクノロジーと軍事発明を一手に握っている。その卓越した知識と知恵によって、かつての大戦では公国に数々の功績をもたらした。しかし戦争が終わり、差し迫った需要がなくなると、多額の研究費は他へ回され、思うままに研究できる環境も失われてしまった。目先のことしか考えない国内の貴族や、愚かな平民どもに自らの価値を証明するため、ハーシェルは側近と部下たちを率いて、遥か東方へと旅立った。資源に満ち、未開の蛮族が住むこの大陸を征服し、自らの新天地を切り拓く。それが彼女の望みである。\n\n『科学の力を思い知れェ！この野蛮人どもめ！』`,
        [Locale.kr]: `허셸은 달롬 공국의 「10인 의회」 멤버 중 한 명으로, 과학기술 위원인 그녀는 공국의 최첨단 전쟁 기술 발명을 관할하고 있다. 그녀는 뛰어난 지식과 지혜를 바탕으로 전쟁에서 공국에 수많은 공을 세웠다. 하지만 전쟁이 끝나고 기술 개발의 필요성이 줄어들자, 막대한 연구비가 다른 용도로 전용되면서 마음껏 연구에 몰두할 수 있는 환경을 잃고 말았다. 이에 허셸은 눈앞의 이익밖에 모르는 귀족들과 멍청한 평민들에게 자신의 가치를 증명하기 위해 측근과 부하들을 이끌고 머나먼 동방으로 향했다. 그녀는 풍부한 자원과 미개한 야만인들로 가득한 이 대륙을 정복하고, 그곳에 자신만의 새로운 세상을 개척하고자 한다.\n\n『과학기술의 힘을 맛봐라! 이 야만인들아!』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/11/04",
    essence: UnitEssence[UnitCode.herschel],
    thumbnail: UnitEssence[UnitCode.herschel],
    selection: UnitSelection[UnitCode.herschel],
    clothes: UnitFullImage[UnitCode.herschel],
    tagList: [],
    otherVersion: [],
    initHP: 4686.4,
    initATK: 788.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.herschel],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}

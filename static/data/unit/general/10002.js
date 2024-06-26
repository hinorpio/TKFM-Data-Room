import { Locale, Rarity, Element, Position, PotentialType } from '@/plugins/utils/enums';

export default {
    ID: "10002",
    metaCode: "satan",
    prefix: {
        [Locale.zh]: "魔王魔王王",
        [Locale.cn]: null,
        [Locale.en]: "Archdemon",
        [Locale.jp]: null,
        [Locale.ko]: null
    },
    name: {
        [Locale.zh]: "撒旦撒旦旦",
        [Locale.cn]: null,
        [Locale.en]: "Satan",
        [Locale.jp]: null,
        [Locale.ko]: null
    },
    abbreviation: {
        [Locale.zh]: [ "巴爾", "普巴", "82" ],
        [Locale.cn]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.ko]: []
    },
    background: {
        [Locale.zh]: "巴爾是魔界現存的四名魔王之一，善於經營的她掌有魔界商業發展最蓬勃、最富饒的領地。她的性格狡猾，只要對自己有利，就算要對比自身地位低下的人獻媚也不會有一丁點猶豫。不過要是因此對她掉以輕心那就犯下大錯了，一旦情勢不對，巴爾就會把麻煩推給同盟或信任她的人，自己則溜之大吉。巴爾擅長用言語以及幻術將他人玩弄於股掌，然而她的小聰明一旦遇到不講道理的對象，往往會讓巴爾自食惡果……\n\n『凱薩？嘻嘻，追得到我就來呀？』",
        [Locale.cn]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.ko]: null
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.PROTECTOR,
    isLimited: false,
    potential: PotentialType.HP,
    releaseDate: "2020-12-14",
    essence: require("@/assets/character/icon/IP10002.png"),
    thumbnail: require("@/assets/character/icon/IP10002.png"),
    selection: require("@/assets/character/selection/cs10002_0_0.png"),
    cloth_one: [
        require("@/assets/character/fullbody/10002_0-Lv1.png"),
        require("@/assets/character/fullbody/10002_0-Lv2.png"),
        require("@/assets/character/fullbody/10002_0-Lv3.png"),
    ],
    cloth_two: [
        require("@/assets/character/fullbody/10002_1-Lv1.png"),
        require("@/assets/character/fullbody/10002_1-Lv2.png"),
        require("@/assets/character/fullbody/10002_1-Lv3.png"),
    ],
    cloth_three: [
        require("@/assets/character/fullbody/10002_2-Lv1.png"),
        require("@/assets/character/fullbody/10002_2-Lv2.png"),
        require("@/assets/character/fullbody/10002_2-Lv3.png"),
    ],
    tagList: [ 5, 7, 12, 15, 18, 21, 24, 30, 33 ],
    otherVersion: [ 10001, 10003 ]
}
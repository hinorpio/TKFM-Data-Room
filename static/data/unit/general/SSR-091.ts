import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10123: Unit = {
    ID: "10123",
    metaCode: "d_miru",
    prefix: {
        [Locale.tc]: "惡魔貓娘",
        [Locale.sc]: "恶魔猫娘",
        [Locale.en]: "Demon Kitty",
        [Locale.jp]: "悪魔の猫娘",
        [Locale.kr]: "데빌캣"
    },
    name: {
        [Locale.tc]: "杏仁咪嚕",
        [Locale.sc]: "杏仁咪噜",
        [Locale.en]: "Annin Miru",
        [Locale.jp]: "杏仁ミル",
        [Locale.kr]: "안닌 미루"
    },
    abbreviation: {
        [Locale.tc]: [ "咪黑", "黑咪", "惡咪" ],
        [Locale.sc]: [ "咪黑", "黑咪", "恶咪" ],
        [Locale.en]: [ "D.Miru" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "악미루" ]
    },
    background: {
        [Locale.tc]: `雖然上次挑戰魔王失敗了好幾次，但身為資深遊戲實況主，杏仁咪嚕可不會這麼輕易放棄。在不斷練習翻滾、不斷修練貓咪之力之後，今晚的杏仁咪嚕沒有極限！她將要準備和兩個小夥伴，一起體驗《天下布魔》最新出的DLC。俏皮可愛的電子小惡魔咪嚕，會把杏眾們的心還有斗內通通偷走。惡魔貓娘，你今晚的春夢！\n\n『嘿嘿嘿~穿上這套衣服之後，咪嚕的36D是不是變得更明顯了呀~』`,
        [Locale.sc]: `虽然上次挑战魔王失败了好几次，但身为资深游戏实况主，杏仁咪噜可不会这么轻易放弃。在不断练习翻滚、不断修练猫咪之力之后，今晚的杏仁咪噜没有极限！她将要准备和两个小伙伴，一起体验《天下布魔》最新出的DLC。俏皮可爱的电子小恶魔咪噜，会把杏众们的心还有斗内通通偷走。恶魔猫娘，你今晚的春梦！\n\n『嘿嘿嘿~穿上这套衣服之后，咪噜的36D是不是变得更明显了呀~』`,
        [Locale.en]: `Despite her consistantly embarrassing defeats against the Archdemon, Annin Miru has come back with a vengeance. She is a repectable live video game host after all. After perfecting her roll-over technique and honing her kitty cat powers, there are no limits for Annin Miru this evening! She's ready to join her two little friends and experience what TenkafuMA's new DLC has to offer. An adorable and playful demon cat, Miru might snatch away her fans' hearts and donations~ Demon cat girl is coming to your dreams!\n\n"Hehe~ With this outfit, Miru's double D's are gonna look even bigger~"`,
        [Locale.jp]: `前回は魔王へ挑むも失敗の繰り返しだったが、先輩ゲーム実況者である杏仁ミルはそう簡単に諦めない。ゴロゴロを何度も練習し、猫の力を鍛え上げた今夜のミルに限界はない！二人の仲間と共に最新の《天下布魔》DLCを体験することになったミル。可愛い小悪魔ミルが、ファンの投げ銭を根こそぎ持っていくぞ！悪魔の猫娘が、今夜あなたの夢に現れる！\n\n『へへっ、この衣装を着たら私の36Dがもっとはっきり見えるでしょ~？』`,
        [Locale.kr]: `과거 마왕에게 도전하여 수없이 실패했지만, 베테랑 게임 스트리머로서 안닌 미루는 쉽게 포기할 생각이 없다. 끊임없는 구르기 연습과 고양이의 힘 수련을 거친 후, 오늘 밤의 안닌 미루에게 한계란 없다! 두 명의 파트너와 함께 《텐카푸마》최신 DLC를 체험할 예정. 귀엽고 깜찍한 악마 미루가 관중들의 마음을 통째로 훔치러 간다. 데빌캣 미루가 오늘 밤, 당신의 꿈에서 나타난다!\n\n『헤헤헤~ 이 옷을 입은 후 미루의 36D 몸매가 더욱 두드러보이지 않아~?』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/09/13",
    essence: UnitEssence[UnitCode.d_miru],
    thumbnail: UnitEssence[UnitCode.d_miru],
    selection: UnitSelection[UnitCode.d_miru],
    clothes: UnitFullImage[UnitCode.d_miru],
    tagList: [],
    otherVersion: [ UnitCode.miru ],
    initHP: 3360,
    initATK: 1049.6,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.d_miru],
    skillSet: []
}
import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10120: Unit = {
    ID: "10120",
    metaCode: "o_lana",
    prefix: {
        [Locale.tc]: "乘風破浪",
        [Locale.sc]: "乘风破浪",
        [Locale.en]: "Go Getter",
        [Locale.jp]: "荒波乗り",
        [Locale.kr]: "바람과 파도를 타고"
    },
    name: {
        [Locale.tc]: "蘭兒",
        [Locale.sc]: "兰儿",
        [Locale.en]: "Lana",
        [Locale.jp]: "ラン",
        [Locale.kr]: "란"
    },
    abbreviation: {
        [Locale.tc]: [ "風矮", "風蘭" ],
        [Locale.sc]: [ "风矮", "风兰" ],
        [Locale.en]: [ "O.Lana" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "해란" ]
    },
    background: {
        [Locale.tc]: `一望無際的大海就像是深不見底的礦坑一樣，充滿了令人心跳不已的未知事物。而挖掘未知的事物就是矮人的天性，海洋的一切就像是挖礦一樣先到先得，目標是無人發現過的寶物！儘管這次出航的理由完全意義不明，但矮人依然會在船上盡情喝酒、大聲歌唱。面對眼前蔚藍的挑戰，矮人王…不對，是矮人船長，今天也帶著對航行的憧憬發出號令。\n\n『上啊小的們！我們這次的征途是蔚藍大海！』`,
        [Locale.sc]: `一望无际的大海就像是深不见底的矿坑一样，充满了令人心跳不已的未知事物。而挖掘未知的事物就是矮人的天性，海洋的一切就像是挖矿一样先到先得，目标是无人发现过的宝物！尽管这次出航的理由完全意义不明，但矮人依然会在船上尽情喝酒、大声歌唱。面对眼前蔚蓝的挑战，矮人王…不对，是矮人船长，今天也带着对航行的憧憬发出号令。\n\n『上啊小的们！我们这次的征途是蔚蓝大海！』`,
        [Locale.en]: `The boundless sea is deep like an endless mineshaft and filled with all sorts of things that'd make one's heart skip a beat. And it's the dwarves' nature to mine for unknown things. The ocean's bounties are there for the taking, first come, first served. Their objective is to uncover treasures never before seen! Despite the unclear reason for this mission, the dwarves still drink and sing boisterously on board. Faced with this azure-blue challenge, the Dwarf King... No, the Dwarf Captain, is giving the orders with a longing for the sea.\n\n"Move it! The big blue deep shall be our conquest this time!"`,
        [Locale.jp]: `果ての見えない大海原は、底の見えない洞窟と一緒で、好奇心をくすぐられるもの。未知の探求は小人の日課。大海原も鉱物の眠る洞窟と同じく早い者勝ち。目指すはもちろんお宝だ！今回航海にでた理由は全くもって不明だが、それでもランは船の上で思う存分酒を飲み、歌を歌う。目の前に広がる大海原に挑むべく、小人王……いや、小人船長は今日も航海のロマンを抱きながら掛け声を上げるのであった。\n\n『さあみんな！今回の目的地は紺碧の大海原よ！』`,
        [Locale.kr]: `끝없이 펼쳐진 바다, 이곳은 마치 깊이를 가늠할 수 없는 갱도처럼 가슴을 뛰게 만드는 미지의 것들로 가득 차있다. 미지의 것을 발굴하는 것이 난쟁이의 천성. 바다의 모든 것은 채굴과 마찬가지로 먼저 발견하는 것이 임자! 목표는 아무도 보지 못한 보물! 이번 출항의 이유는 알려지지 않았지만, 난쟁이들은 배에서 마음껏 술을 마시며 큰 소리로 노래를 부른다. 눈앞에 펼쳐진 푸른 도전, 그리고 난쟁이 왕... 아니, 난쟁이 선장은 오늘도 항해에 대한 동경을 호소한다.\n\n『가자, 얘들아! 이번엔 푸른 바다를 정복해 보자!』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/07/12",
    essence: UnitEssence[UnitCode.o_lana],
    thumbnail: UnitEssence[UnitCode.o_lana],
    selection: UnitSelection[UnitCode.o_lana],
    clothes: UnitFullImage[UnitCode.o_lana],
    tagList: [],
    otherVersion: [ UnitCode.lana, UnitCode.x_lana, UnitCode.ny_lana ],
    puzzle: [],
    outfits: [],
    skillSet: []
}
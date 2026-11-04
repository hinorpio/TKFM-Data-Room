import { Locale, Rarity, Element, Position, PotentialType, UnitCode } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10216: Unit = {
    ID: "10216",
    metaCode: "aramis",
    prefix: {
        [Locale.tc]: "槍匠",
        [Locale.sc]: "枪匠",
        [Locale.en]: "Gunsmith",
        [Locale.jp]: "銃職人",
        [Locale.kr]: "총기 장인"
    },
    name: {
        [Locale.tc]: "阿拉米絲",
        [Locale.sc]: "阿拉米丝",
        [Locale.en]: "Aramis",
        [Locale.jp]: "アラミス",
        [Locale.kr]: "아라미스"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `阿拉米絲是一個來自遙遠國度的槍械技師，她畢生的樂趣，便是製作各式各樣的槍械。在她戰火紛飛的家鄉，這無疑是個非常有前景的職業。可惜的是，那場曠日彌久的大戰如今也趨於和平，人們更是開始嚮往和平，厭惡戰爭。阿拉米絲也因此失去了她的工作，不得不另尋出路養活自己。為此，她跟著自己曾經的雇主來到了新大陸，渴望找到一位願意開高價買下自己技術的買家。\n\n『啊啊～看著這流線性般的前衛設計，堅硬剛強的槍身、還有隱藏於槍管之中的危險性…感覺都快要濕了呢，我的眼眶。』`,
        [Locale.sc]: `阿拉米丝是一个来自遥远国度的枪械技师，她毕生的乐趣，便是製作各式各样的枪械。在她战火纷飞的家乡，这无疑是个非常有前景的职业。可惜的是，那场旷日弥久的大战如今也趋于和平，人们更是开始向往和平，厌恶战争。阿拉米丝也因此失去了她的工作，不得不另寻出路养活自己。为此，她跟着自己曾经的雇主来到了新大陆，渴望找到一位愿意开高价买下自己技术的买家。\n\n『啊啊～看着这流线性般的前卫设计，坚硬刚强的枪身、还有隐藏于枪管之中的危险性…感觉都快要湿了呢，我的眼眶。』`,
        [Locale.en]: `Aramis is a mechanic hailing from a distant land whose lifelong joy lies in crafting all kinds of firearms. In her war-torn homeland, this was undoubtedly a career with incredible prospects. Regrettably, that long and drawn-out war has finally settled into peace, and people have come to despise warfare. Having lost her livelihood, Aramis had no choice but to seek new ways to feed herself. To that end, she followed her former employer to a new land, eager to find a buyer willing to pay top dollar for her expertise.\n\n"Just look at its sleek, cutting-edge design, its firm, unyielding body, and the danger hidden within its barrel... Haaa~! It makes me feel so wet... my eyes, that is."`,
        [Locale.jp]: `アラミスは遠い異国から来た銃器技師。様々な銃を作ることこそが、彼女の生涯の楽しみだ。戦火の絶えない故郷において、それは間違いなく将来有望な職業だった。ところが、長きにわたった大戦もようやく終息へと向かい、人々は平和を願い、戦争を忌み嫌うようになっていった。アラミスもそのあおりを受けて職を失い、生活のために別の道を探さざるを得なくなった。そこで彼女はかつての雇い主について新大陸へと渡り、自分の技術を高値で買ってくれる相手を探している。\n\n『あぁ～この流線型の攻めたデザイン、硬くてたくましい銃身、それにバレルの奥に潜んだ危険な香り……はぁ～濡れちまうよ。目頭がさ！』`,
        [Locale.kr]: `아라미스는 머나먼 나라에서 온 총기 기술자로, 온갖 종류의 총기를 제작하는 것이 그녀의 평생 낙이다. 전쟁이 끊이지 않는 그녀의 고향에서는 분명 장래가 유망한 직업이었다. 하지만 오랫동안 이어진 전쟁이 끝나고 평화가 찾아오면서 사람들은 전쟁을 혐오하고 평화를 갈망하기 시작했다. 그로 인해 아라미스도 일자리를 잃고 생계를 유지할 다른 방법을 찾아야만 했다. 이에 그녀는 자신의 옛 고용주를 따라 신대륙으로 건너와, 자신의 기술에 거액을 지불할 구매자를 찾기로 결심하는데...\n\n『아아~ 이 유려하면서도 혁신적인 디자인, 단단하고 강인한 총몸, 그리고 총열 속에 숨어있는 위험성까지... 금방이라도 내 눈시울이 젖어 버릴 것만 같아.』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/11/04",
    essence: UnitEssence[UnitCode.aramis],
    thumbnail: UnitEssence[UnitCode.aramis],
    selection: UnitSelection[UnitCode.aramis],
    clothes: UnitFullImage[UnitCode.aramis],
    tagList: [],
    otherVersion: [],
    initHP: 3675.2,
    initATK: 1004.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.aramis],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}

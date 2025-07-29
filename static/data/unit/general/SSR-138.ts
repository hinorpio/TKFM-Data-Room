import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10176: Unit = {
    ID: "10176",
    metaCode: "bedard",
    prefix: {
        [Locale.tc]: "甜蜜寶貝",
        [Locale.sc]: "甜蜜宝贝",
        [Locale.en]: "Sweet Baby",
        [Locale.jp]: "スイートベイビー",
        [Locale.kr]: "스위트 베이비"
    },
    name: {
        [Locale.tc]: "萊爾貝妲",
        [Locale.sc]: "莱尔贝妲",
        [Locale.en]: "Lér Bédard",
        [Locale.jp]: "ラベンダー",
        [Locale.kr]: "라벤더"
    },
    abbreviation: {
        [Locale.tc]: [ "肥婆", "SB" ],
        [Locale.sc]: [ "肥婆", "SB" ],
        [Locale.en]: [ "Bedard" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `萊爾貝妲是橫行霸道的多元守護者聯盟的執行長。They帶領著聯盟於各個國家穿行，目的是將Their價值觀強加在每個地區，以此賺取暴利，並美名其曰傳播多元化與包容。萊爾貝妲不在乎被They強加價值觀的人最後會變怎麼樣，They只覺得自己是最正確的，並做著正確的事情。在They曾經的故鄉因為固執己見而不願接受They的改造後，They與多元守護者聯盟的成員便揚帆啟航，前往另一個嶄新的大陸。They聽聞那座大陸上有著名為魔王的不正確存在——因此，They打算要好好將最先進的思想與文化內涵傳達給Them。\n\n『如果你不懂得欣賞我的美貌，那絕對是你的問題。』`,
        [Locale.sc]: `莱尔贝妲是横行霸道的多元守护者联盟的执行长。They带领着联盟于各个国家穿行，目的是将Their价值观强加在每个地区，以此赚取暴利，并美名其曰传播多元化与包容。莱尔贝妲不在乎被They强加价值观的人最后会变怎麽样，They只觉得自己是最正确的，并做着正确的事情。在They曾经的故乡因为固执己见而不愿接受They的改造后，They与多元守护者联盟的成员便扬帆启航，前往另一个崭新的大陆。They听闻那座大陆上有着名为魔王的不正确存在——因此，They打算要好好将最先进的思想与文化内涵传达给Them。\n\n『如果你不懂得欣赏我的美貌，那绝对是你的问题。』`,
        [Locale.en]: `As the domineering leader of the Diversity Alliance, Lér Bédard forces their way through the world with an unyielding sense of authority. They lead the alliance across realms, imposing their values on every region to rake in massive profits—all under the noble guise of spreading diversity and inclusion. Lér Bédard could not care less about the fate of those forced to adopt their ideals. They are convinced that they alone are the ultimate arbiter of truth and always do what is "right". When their stubborn homeland refused to bend to Lér Bédard's reforms, Lér Bédard and the members of the Diversity Alliance set sail for a new continent, ready to conquer new horizons. Word reaches Lér Bédard of a so-called "Archdemon" lurking in these lands and who is an embodiment of everything they deem evil and wicked. So, naturally, they are eager to enlighten the locals with the alliance's clearly more advanced ideological beliefs and cultural virtues.\n\n"If you can't appreciate my gorgeous curves, that's your loss."`,
        [Locale.jp]: `ラベンダーは、横暴を極める「多様性保護連盟」の長である。Theyは連盟を率いて各国を巡り、Their価値観を各地に押しつけては暴利を得ているにもかかわらず、それを「多様性と寛容性の普及」と美しく言い換えている。ラベンダーはTheyに影響を受けた人々がどうなろうとまったく意に介さない。Theyは自らが最も正しく、正義を行っていると固く信じているのだ。Theyはかつて、故郷でその頑固さゆえに改革を拒否されると、Theyと多様性保護連盟のメンバーたちは、新たな大陸へと旅立った。Theyはその大陸に魔王と呼ばれる不確かな存在がいると聞きつけたため、Theyは先進的な思想と文化をしっかりThemに伝えようと考えている。\n\n『あたしの美しさを理解できないのは、きっとお前の問題だ』`,
        [Locale.kr]: `라벤더는 거침없는 행보를 보여주는 다양성 수호 연맹의 집행장이다. 라벤더는 연맹을 이끌고 각국을 돌아다니며 자신의 가치관을 각 지역에 강요하고 이를 통해 막대한 이익을 챙김과 동시에, 다양성과 포용의 가치를 전파하고 있다. 라벤더는 자신이 강요한 가치관으로 인해 사람들이 어떻게 변화하는지 전혀 신경 쓰지 않고, 그저 자신의 신념이 절대적으로 옳다고 확신하고 있을 뿐이다. 라벤더의 고향에선 자신의 사상을 받아들이지 않았고, 이에 실망한 라벤더는 다양성 수호 연맹의 일원들과 함께 돛을 올려 새로운 대륙으로 향했다. 라벤더는 그 대륙에서 마왕이라 불리는 올바르지 못한 존재가 있다는 얘기를 듣게 됐고, 라벤더는 그곳에서 가장 선진적인 사상과 문화를 그들에게 전파할 계획을 세우게 되는데.\n\n『나의 아름다움을 이해하지 못한다면, 그건 전적으로 네 문제야.』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2025/04/01",
    essence: UnitEssence[UnitCode.bedard],
    thumbnail: UnitEssence[UnitCode.bedard],
    selection: UnitSelection[UnitCode.bedard],
    clothes: UnitFullImage[UnitCode.bedard],
    tagList: [],
    otherVersion: [],
    initHP: 5046.4,
    initATK: 697.6,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.bedard],
    voiceException: [
        {
            version: 1,
            exception: [
                VoiceType.SEX_MOANS,
                VoiceType.BLOWJOB,
                VoiceType.KISS
            ],
        },
        {
            version: 2,
            exception: [],
        }
    ],
    skillSet: []
}
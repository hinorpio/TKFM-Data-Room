import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10165: Unit = {
    ID: "10165",
    metaCode: "star_mia",
    prefix: {
        [Locale.tc]: "銀鴞武裝",
        [Locale.sc]: "银鸮武装",
        [Locale.en]: "The Silver Owl",
        [Locale.jp]: "フクロウ装甲",
        [Locale.kr]: "실버아울"
    },
    name: {
        [Locale.tc]: "米婭",
        [Locale.sc]: "米娅",
        [Locale.en]: "Mia",
        [Locale.jp]: "ミア",
        [Locale.kr]: "미아"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [ "Star.Mia" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `作為最初來到第五艦隊的機工少女，米婭與艦長伊登的感情十分要好，凡是伊登的指令她都會遵從。米婭的戰鬥能力在機工少女中十分優秀，寫下許多成就的她甚至被譽為「活著的傳說」。而與其戰鬥能力相對應，米婭的性欲也異於常人，而這也是她與伊登關係十分親密的一個要點。這次意外來到陌生的世界，米婭與第五艦隊要在這充滿未知的地方展開作戰。雖然是個人生地不熟的地方，作戰內容也有些奇妙，但只要能和她最喜歡的艦長在一起就沒有問題了。\n\n『銀鴞武裝米婭，隨時聽候主人差遣～♡』`,
        [Locale.sc]: `作为最初来到第五舰队的机工少女，米娅与舰长伊登的感情十分要好，凡是伊登的指令她都会遵从。米娅的战斗能力在机工少女中十分优秀，写下许多成就的她甚至被誉为「活着的传说」。而与其战斗能力相对应，米娅的性欲也异于常人，而这也是她与伊登关係十分亲密的一个要点。这次意外来到陌生的世界，米娅与第五舰队要在这充满未知的地方展开作战。虽然是个人生地不熟的地方，作战内容也有些奇妙，但只要能和她最喜欢的舰长在一起就没有问题了。\n\n『银鴞武装米娅，随时听候主人差遣～♡』`,
        [Locale.en]: `As the first Cadette to join the Fifth Regiment, Mia and Captain Aiden share a deep emotional connection, to the point that there is no order she will not obey from her captain. Mia's combat prowess is outstanding among her Cadette colleagues, and her many accomplishments have earned her the title of "living legend". However, her sexual appetite is just as astounding as her fighting skills, bringing her even closer to Captain Aiden. As Mia and the Fifth Regiment are accidentally thrust into a strange world, she must fight her way to safety through the deep unknown. Despite the strange happenings that spring up in the heat of battle, there is nothing she cannot face as long as her Captain Aiden is by her side.\n\n"Mia, the Silver Owl, at your orders whenever and wherever, Captain~♡"`,
        [Locale.jp]: `最初に第五艦隊にやってきた機工少女であるミアは、艦長のエイデンとはかなり仲が良く、彼の命令にはすべて従う。ミアの戦闘力は機工少女の中でも特に優れており、数多くの功績を残した彼女は「生きる伝説」と呼ばれている。そして、その戦闘力に見合うように、ミアは人並み以上に性欲が強い。それが彼女とエイデンの関係が親密な一因でもある。今回、ひょんなことから見知らぬ世界を訪れたミアと第五艦隊は、未知の土地で戦いを繰り広げることになる。慣れない土地で、戦いを強いられるが、大好きな艦長と一緒にいられるならミアにとっては問題ないのだ。\n\n『フクロウ装甲ミア、いつでもご命令をお待ちしております～♡』`,
        [Locale.kr]: `처음으로 제5함대에 온 암즈걸 미아는 함장 에이든과 매우 친밀한 관계로, 에이든의 명령이라면 무엇이든 따른다. 미아의 전투 능력은 암즈걸 중에서도 으뜸으로, 수많은 업적을 남긴 그녀는 「살아있는 전설」로 불리고 있다. 그리고 그런 그녀의 전투 능력에 비례하듯, 성욕도 일반인을 상회할 정도로 매우 높으며, 이것은 그녀가 에이든과 더욱 친밀한 이유 중 하나이기도 하다. 뜻밖의 사건으로 낯선 세계로 가게 된 미아와 제5함대, 그들은 이 미지의 공간에서 작전을 펼치게 된다. 비록 생소환 환경에 작전 내용도 다소 이상한 점이 있지만, 가장 좋아하는 함장과 함께라면, 미아에겐 아무런 문제가 되지 않는다.\n\n『실버아울 미아, 언제든 주인님의 명령에 따를 준비가 됐답니다~♡』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/03/12",
    essence: UnitEssence[UnitCode.star_mia],
    thumbnail: UnitEssence[UnitCode.star_mia],
    selection: UnitSelection[UnitCode.star_mia],
    clothes: UnitFullImage[UnitCode.star_mia],
    tagList: [],
    otherVersion: [],
    initHP: 0,
    initATK: 0,
    puzzle: [],
    outfits: [],
    skillSet: []
}
import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10122: Unit = {
    ID: "10122",
    metaCode: "a_usagihime",
    prefix: {
        [Locale.tc]: "性感天使",
        [Locale.sc]: "性感天使",
        [Locale.en]: "Sexy Seraph",
        [Locale.jp]: "妖美な天使",
        [Locale.kr]: "섹시천사"
    },
    name: {
        [Locale.tc]: "兔姬",
        [Locale.sc]: "兔姬",
        [Locale.en]: "Usagihime",
        [Locale.jp]: "兎姫",
        [Locale.kr]: "우사기 히메"
    },
    abbreviation: {
        [Locale.tc]: [ "天兔", "母姬" ],
        [Locale.sc]: [ "天兔", "母姬" ],
        [Locale.en]: [ "A.Usagi", "A.Usagihime" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "천사기" ]
    },
    background: {
        [Locale.tc]: `曾經在《天下布魔》的世界掀起一陣獸娘旋風的「辣個女人」再次回歸。這次，她將和兩名同伴一起遊玩《天下布魔》，再次進入那個熟悉的世界。身為超級老司姬的她究竟會給觀眾帶來多少保養眼睛的福利呢，一切就在今晚的直播中見真章。美麗又充滿母性光輝的性感天使兔姬，準備閃亮登場！\n\n『收下吧～這就是兔姬媽媽的愛唷～』`,
        [Locale.sc]: `曾经在《天下布魔》的世界掀起一阵兽娘旋风的「辣个女人」再次回归。这次，她将和两名同伴一起游玩《天下布魔》，再次进入那个熟悉的世界。身为超级老司姬的她究竟会给观众带来多少保养眼睛的福利呢，一切就在今晚的直播中见真章。美丽又充满母性光辉的性感天使兔姬，准备闪亮登场！\n\n『收下吧～这就是兔姬妈妈的爱唷～』`,
        [Locale.en]: `After a brief stint in the TenkafuMA universe, this beast hottie has returned for more fun. This time, she's traveling these familiar lands with two companions. Someone as sexually experienced as her will surely have lots to teach her audience. Stay tuned for her livestream this evening for some eye-popping content. She's beautiful, she's a hot momma. She's Usagihime the Sexy Seraphim, and she's ready to party!\n\n"Get ready~ Momma Usagihime has lots of love to give~"`,
        [Locale.jp]: `かつて《天下布魔》の世界にケモナーブームを引き起こした「あの女」が帰って来た。今回は二人の仲間と一緒に《天下布魔》をプレイして、あの懐かしの世界へと足を踏み入れることに。さて今回はオイシイ場面をどれくらい見られるのだろうか。すべては今夜の生配信で明らかになる……美しく母性に溢れたセクシー天使兎姫が、間もなく登場！\n\n『どうぞ～？兎姫ママの愛だよ～』`,
        [Locale.kr]: `《텐카푸마》세계에 폭풍을 몰고 왔던 「매운맛 소녀」가 다시 돌아왔다. 이번에는 두 명의 동료와 함께 익숙했던 《텐카푸마》의 세계로 다시 들어간다. 그녀는 과연 시청자들에게 어떤 눈요깃거리를 가져다줄지, 오늘 밤 라이브에서 밝혀진다. 매력 충만 모성애 뿜뿜 섹시천사 우사기 히메, 서프라이즈 등장 준비 완료!\n\n『받도록 해, 우사기히메의 사랑을~』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/09/13",
    essence: UnitEssence[UnitCode.a_usagihime],
    thumbnail: UnitEssence[UnitCode.a_usagihime],
    selection: UnitSelection[UnitCode.a_usagihime],
    clothes: UnitFullImage[UnitCode.a_usagihime],
    tagList: [],
    otherVersion: [ UnitCode.usagihime ],
    puzzle: [],
    skillSet: []
}
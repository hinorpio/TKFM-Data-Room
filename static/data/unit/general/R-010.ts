import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10810: Unit = {
    ID: "10810",
    metaCode: "sophie",
    prefix: {
        [Locale.tc]: "人馬女僕",
        [Locale.sc]: "人马女仆",
        [Locale.en]: "Centaur Maid",
        [Locale.jp]: "ケンタウロスメイド",
        [Locale.kr]: "켄타우로스 메이드"
    },
    name: {
        [Locale.tc]: "蘇菲",
        [Locale.sc]: "苏菲",
        [Locale.en]: "Sophie",
        [Locale.jp]: "ソフィー",
        [Locale.kr]: "소피"
    },
    abbreviation: {
        [Locale.tc]: [ "人馬" ],
        [Locale.sc]: [ "人马" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `蘇菲是直屬艾可的魔王城女僕隊的新人女僕。雖然冒失且天然，不過因為半人馬的體質，能夠擔任搬運或其他需要力氣的工作，很快就得到了重用。實際上原本蘇菲是預定要加入軍隊的士兵，但是個性內向且討厭爭鬥的她偷偷改了志願，成了女僕隊的一員。被艾可灌輸了凱薩偉大且無所不能的思想，和其他女僕一樣崇拜著凱薩。\n\n『料理是甜的…我、我放進去的明明是鹽呀！』`,
        [Locale.sc]: `苏菲是直属艾可的魔王城女仆队的新人女仆。虽然冒失且天然，不过因为半人马的体质，能够担任搬运或其他需要力气的工作，很快就得到了重用。实际上原本苏菲是预定要加入军队的士兵，但是个性内向且讨厌争斗的她偷偷改了志愿，成了女仆队的一员。被艾可灌输了凯萨伟大且无所不能的思想，和其他女仆一样崇拜着凯萨。\n\n『料理是甜的…我、我放进去的明明是盐呀！』`,
        [Locale.en]: `Sophie is the newest recruit to Aiko's team of maids at Caesar's palace. Although incredibly clumsy, she quickly becomes an important part of the team due to her powerful centaur body that allows her to take on tasks that require a huge amount of strength.Originally on course to join the military, due to a hatred of violence she secretly switched paths and decided to devote herself to the maidhood. Now, under Aiko's teachings, she's quickly learned to worship and adore Caesar just like the rest of the maid team.\n\n"Ahhh... I accidentally put salt in the dessert!"`,
        [Locale.jp]: `ソフィーはアイカ直属の魔王城メイド隊の新人メイド。ドジで天然な性格だが、ケンタウロスであるため、運搬や力仕事を任され、あっという間に重用された。本来ソフィーは軍隊に兵士として加入する予定だったが、内気で争いを嫌う性格の彼女はこっそりと志望先を変更して、メイド隊の一員となった。アイカによって偉大なるシーザーという考えを植え付けられたため、他のメイド同様シーザーを崇拝している。\n\n『ええ？料理が甘いですか……で、でも入れたのは塩で間違いないはずです！』`,
        [Locale.kr]: `소피는 아이카 직속 마왕성 메이드대의 신입 메이드이다. 비록 덤벙대고 순수한 성격을 지녔지만, 켄타우로스의 체질로 인해 운반이나 힘이 필요한 일에 능해 금방 중요한 자리를 차지하게 되었다. 실제로 소피는 군 입대를 할 예정이었지만 내향적이고 싸우는 것을 싫어하는 성격의 그녀는 몰래 지망처를 바꿔 메이드대의 일원이 되었다. 아이카로부터 시저의 위대함에 대해 교육을 받아온 소피는 다른 메이드들처럼 시저를 숭배한다.\n\n『원래는 달콤한 맛이 나야 하는 요리인데... 실수로 소금을 넣어버렸어요!』`
    },
    rarity: Rarity.R,
    element: Element.WATER,
    position: Position.SUPPORTER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2021/12/01",
    essence: UnitEssence[UnitCode.sophie],
    thumbnail: UnitEssence[UnitCode.sophie],
    selection: UnitSelection[UnitCode.sophie],
    clothes: UnitFullImage[UnitCode.sophie],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
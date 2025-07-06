import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10117: Unit = {
    ID: "10117",
    metaCode: "s_baal",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "巴爾",
        [Locale.sc]: "巴尔",
        [Locale.en]: "Ba'al",
        [Locale.jp]: "バル",
        [Locale.kr]: "바알"
    },
    abbreviation: {
        [Locale.tc]: [ "夏巴", "下巴" ],
        [Locale.sc]: [ "夏巴", "下巴" ],
        [Locale.en]: [ "S.Baal" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수바알" ]
    },
    background: {
        [Locale.tc]: `說到夏天就是海灘、渡假還有觀光客，而在魔王巴爾的眼裡這些就是錢、錢、和很多的錢。根據以往經驗，只要自己下場主持活動，不管是銷售量還是營業額都會大幅度上升。因此，有著健康小麥膚色的少女今夏也換上泳裝，搖身一變，變成在海灘上四處招攬客人的辣妹系魔王。\n\n『啊囉哈～想要在海邊留下美好的夏日回憶嗎？巴爾商會的度假套組現正熱賣中喔！』`,
        [Locale.sc]: `说到夏天就是海滩、渡假还有观光客，而在魔王巴尔的眼里这些就是钱、钱、和很多的钱。根据以往经验，只要自己下场主持活动，不管是销售量还是营业额都会大幅度上升。因此，有着健康小麦肤色的少女今夏也换上泳装，摇身一变，变成在海滩上四处招揽客人的辣妹系魔王。\n\n『啊啰哈～想要在海边留下美好的夏日回忆吗？巴尔商会的度假套组现正热卖中喔！』`,
        [Locale.en]: `It's summertime, and the beaches are filling up with vacationing tourists. Where Archdemon Ba'al's concerned, that can only mean one thing: money, money, money. If her past experience has taught her anything, it's that she'll have a large uptick in business, so long as she takes care of everything herself. So, she's transformed herself into a hot girl with bronzed skin flashing out of her swimsuit, ready to drum up business all along the beachfront.\n\n"Aloha~ Wanna make some memories on the beach? Ba'al Corp's package holidays are on sale now!"`,
        [Locale.jp]: `夏といえばビーチ、リゾート、観光客。魔王バルの目に映るそれらは皆、金、金、金。これまでの経験上、自分自身がイベントの司会をすると売り上げが大幅にUPすることが分かっているバル。そこで今年も小麦肌のセクシーさが際立つ水着に着替え、ビーチのあちこちで客引きをするギャル系魔王となったのだ。\n\n『アロハ～ビーチで最高の夏の思い出を残したい？バル商会のリゾートパック、絶賛販売中ですよ～！』`,
        [Locale.kr]: `여름이라고 하면 해변, 바캉스, 그리고 피서객들이 떠오른다. 하지만 마왕 바알의 머릿속엔 돈, 오직 돈밖에 없다. 과거 경험에 비추어 볼 때, 자신이 행사를 주관할 때마다 큰 매출을 올렸다. 건강한 모카 피부의 소녀는 올 여름 수영복으로 갈아입고 해변을 누비며 피서객들의 주목을 받는 핫걸 마왕으로 거듭났다.\n\n『알로하~ 해변에서 멋진 추억을 만들고 싶다구요? 그렇다면 바알상회 바캉스 패키지를 구입하세요! 현재 불티나게 팔리는 중!』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/06/07",
    essence: UnitEssence[UnitCode.s_baal],
    thumbnail: UnitEssence[UnitCode.s_baal],
    selection: UnitSelection[UnitCode.s_baal],
    clothes: UnitFullImage[UnitCode.s_baal],
    tagList: [],
    otherVersion: [ UnitCode.baal, UnitCode.f_baal, UnitCode.b_baal, UnitCode.v_baal, UnitCode.x_baal ],
    initHP: 0,
    initATK: 0,
    puzzle: [ PuzzleCode.EVENT_2023_SUMMER_1 ],
    outfits: [],
    skillSet: []
}
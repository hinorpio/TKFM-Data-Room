import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10062: Unit = {
    ID: "10062",
    metaCode: "sherana",
    prefix: {
        [Locale.tc]: "異國商人",
        [Locale.sc]: "异国商人",
        [Locale.en]: "Foreign Merchant",
        [Locale.jp]: "異国の商人",
        [Locale.kr]: "이국 상인"
    },
    name: {
        [Locale.tc]: "雪蘭瑚",
        [Locale.sc]: "雪兰瑚",
        [Locale.en]: "Sherana",
        [Locale.jp]: "セラフ",
        [Locale.kr]: "세라프"
    },
    abbreviation: {
        [Locale.tc]: [ "商人", "雪狐", "商狐" ],
        [Locale.sc]: [ "商人", "雪狐", "商狐" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `雪蘭瑚是個從遙遠異國乘船前來經商的奇物商人。她經手許多只有異國才有的珍稀商品，在人間界賺了個盆滿缽滿。然而，因為和巴爾商會的分成喬不攏的關係，她遲遲得不到經商許可，無法在魔界開拓商路。將利益視為第一優先的她，並沒有浪費這段討價還價的時間。雪蘭瑚早早便將『情報』作為新的主打商品，在短時間內，訂定了下一步的發展計畫。在偏遠的鄉村埋下眼線，逐步包圍城市並建構情報網。商業眼光銳利的她知道，這一手棋將會是自己突破僵局、賺進大筆資金的大好機會。\n\n『唉呦呦，這樣人家不就虧大了嗎？』`,
        [Locale.sc]: `雪兰瑚是个从遥远异国乘船前来经商的奇物商人。她经手许多只有异国才有的珍稀商品，在人间界赚了个盆满钵满。然而，因为和巴尔商会的分成乔不拢的关系，她迟迟得不到经商许可，无法在魔界开拓商路。将利益视为第一优先的她，并没有浪费这段讨价还价的时间。雪兰瑚早早便将『情报』作为新的主打商品，在短时间内，订定了下一步的发展计画。在偏远的乡村埋下眼线，逐步包围城市并建构情报网。商业眼光锐利的她知道，这一手棋将会是自己突破僵局、赚进大笔资金的大好机会。\n\n『唉呦呦，这样人家不就亏大了吗？』`,
        [Locale.en]: `Sherana is a strange merchant who came to the realm by boat from far, far away. With her she carries bags upon bags of unique wares she's gathered from distant lands. Unfortunately, Ba'al Corp wouldn't give her a merchant permit, so she's not able to legally set up her business here in the Demon Realm. And yet since she's all about earning money, Sherana still intends to make the most of a bad situation. That's because apart from selling her wares, Sherana also does business in information. Looking off into the horizon, Sherana decides to connect a spy ring around the main city, rural village to rural village. With that, Sherana expects to gain the information she needs to break into the Demon Realm's business circle, permit or no.\n\n"Heheh, okay, but I'm losing out on the deal!"`,
        [Locale.jp]: `金儲けのために、はるばる異国から船に乗ってやってきた商人。異国にしかない非常に珍しい商品を取り扱っており、人間界で大儲けしている。バル商会とのいざこざで行商の許可をもらえずにいる彼女は、魔界の販路開拓ができずにいた。お金儲けを第一とするセラフは交渉期間中であっても時間を無駄にしない。セラフは「情報」をメインの商品に、短期間のうちに販路発展の計画を練った。田舎の村を起点に、都市部へ向けて情報網を築くというものだ。商いのセンスがある彼女は、この計画が大儲けのチャンスであると信じたのだ。\n\n『ありゃりゃ、これじゃあアタシ、大損じゃないですか？』`,
        [Locale.kr]: `세라프는 먼 이국에서 배를 타고 건너온 상인이다. 그녀는 오직 이국에서만 나는 진귀한 물건들을 취급했고 인간계에서 큰 돈을 벌어들였다. 그녀는 오직 이국에서만 나는 진귀한 물건들을 취급했고 인간계에서 큰 돈을 벌어들였다. 하지만 바알 상회와의 실랑이로 그녀는 장사 허가증을 받지 못해 마계로의 판로 개척을 하지 못하고 있었다. 돈벌이를 최우선 순위로 삼는 세라프는 시간을 조금이라도 허투로 보내는 법이 없다. 세라프는 『정보』를 주력 상품으로 단기간에 이익을 창출하려는 계획을 세웠다. 변두리 마을에서 남의 눈을 피해 조금씩 자신의 정보망을 구축하기로 한 세라프. 상인의 예리한 감으로 그녀는 자신의 그러한 계획이 큰 돈을 벌어다줄 것으로 생각했다.\n\n『에휴, 이럼 손해가 막심하잖아?』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/11/16",
    essence: UnitEssence[UnitCode.sherana],
    thumbnail: UnitEssence[UnitCode.sherana],
    selection: UnitSelection[UnitCode.sherana],
    clothes: UnitFullImage[UnitCode.sherana],
    tagList: [
        TagID.ELEMENT_WATER,
        TagID.POSITION_HEALER,
        TagID.SPECIES_DEMIHUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.CLASS_LEADER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_RECOVERY,
        TagID.OTHER_SUPPORT,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
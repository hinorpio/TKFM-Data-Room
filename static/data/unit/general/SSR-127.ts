import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10156: Unit = {
    ID: "10156",
    metaCode: "x_baal",
    prefix: {
        [Locale.tc]: "性誕魔王",
        [Locale.sc]: "性诞魔王",
        [Locale.en]: "Sexmas Demon",
        [Locale.jp]: "セックスマス魔王",
        [Locale.kr]: "섹스마스 마왕"
    },
    name: {
        [Locale.tc]: "巴爾",
        [Locale.sc]: "巴尔",
        [Locale.en]: "Ba'al",
        [Locale.jp]: "バル",
        [Locale.kr]: "바알"
    },
    abbreviation: {
        [Locale.tc]: [ "誕巴", "性巴", "聖巴" ],
        [Locale.sc]: [ "诞巴", "性巴", "圣巴" ],
        [Locale.en]: [ "X.Baal", "C.Baal" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "크바알" ]
    },
    background: {
        [Locale.tc]: `只要是有商機的地方就有巴爾商會，只要是有利可圖的生意魔王巴爾就會插手干預。今年，為了好好利用聖誕節&性誕節的龐大商機，巴爾投入了大量資金在各種商品的生產和行銷活動上。本來商會應該藉此賺個盆滿缽滿的，卻沒想到中途竟然殺出了一個意料之外的敵人。巴爾深知，區區聖誕老人什麼的不足為懼，真正危險的是隱藏在她背後出謀劃策的那個人。性誕魔王的挑戰者在不知不覺中現身，那位不時和自己發生摩擦的天才軍師，這次似乎正打算拿出全力對抗自己。面對天才軍師發出的挑戰，性誕魔王露出微笑，愉快地接下了她的挑戰書。\n\n『其實不管是聖誕節還是性誕節人家都不在意啦～反正只要能賺錢就是好節日～』`,
        [Locale.sc]: `只要是有商机的地方就有巴尔商会，只要是有利可图的生意魔王巴尔就会插手干预。今年，为了好好利用圣诞节&性诞节的庞大商机，巴尔投入了大量资金在各种商品的生产和行销活动上。本来商会应该藉此赚个盆满钵满的，却没想到中途竟然杀出了一个意料之外的敌人。巴尔深知，区区圣诞老人什麽的不足为惧，真正危险的是隐藏在她背后出谋划策的那个人。性诞魔王的挑战者在不知不觉中现身，那位不时和自己发生摩擦的天才军师，这次似乎正打算拿出全力对抗自己。面对天才军师发出的挑战，性诞魔王露出微笑，愉快地接下了她的挑战书。\n\n『其实不管是圣诞节还是性诞节人家都不在意啦～反正只要能赚钱就是好节日～』`,
        [Locale.en]: `Wherever there is a business opportunity, the Ba'al Corp is sure to follow. Archdemon Ba'al has a knack for meddling in any venture that promises profit. This year, eager to capitalize on the immense potential of both Christmas and Sexmas, Ba'al pours significant resources into the production and marketing of various goods. The trading company anticipates a windfall, but unexpectedly, an unforeseen rival emerges mid-operation. Ba'al understands that Santa Claus is no real threat; the true danger lies in the mastermind lurking behind her. The challenger to the Sexmas Archdemon has emerged without warning—her frequent sparring partner, the genius strategist, is now seemingly intent on going all out against her. With a smile, Ba'al accepts her challenge with delight.\n\n"Whether it's Christmas or Sexmas who honestly even cares~? As long as we can make a profit, it's a holiday worth celebrating~!"`,
        [Locale.jp]: `ビジネスチャンスあるところにバル商会あり。利益の見込める商売なら、魔王バルが必ずその手を伸ばす。今年こそはクリスマスとセックスマスがもたらす莫大なビジネスチャンスを逃すまいと、様々な商品の製造やマーケティングに大金を投じたバル。このまま商会は大儲けできるはずだった。だが、思いもよらぬ敵の出現により、事態は一変する。バルは分かっていた。ただのサンタクロースなど恐れるに足りない。真に警戒すべきは、その背後で糸を引く者だと。セックスマス魔王に立ち向かう挑戦者が、いつの間にか姿を現していた。日頃から面倒ごとをもたらすあの天才軍師が、今度ばかりは本気で勝負を仕掛けてきたようだ。天才軍師からの挑戦状に、セックスマス魔王は微笑みを浮かべ、愉しげにその挑戦を受けて立つことにした。\n\n『クリスマスでもセックスマスでもどっちでもいいよ。お金が稼げるならいい祝日だからね～』`,
        [Locale.kr]: `수익이 날 만한 곳이라면 어디든 바알 상회가 있고, 수익을 낼 수 있는 사업이라면 무엇이든 마왕 바알의 손을 거치게 된다. 올해도 크리스마스&섹스마스의 비즈니스 가능성을 엿본 바알은 다양한 상품 생산과 마케팅 활동에 막대한 자금을 투자했다. 원래라면 돈을 잔뜩 벌어들였어야 했는데... 중간에 예상치 못한 적수가 등장했다. 바알은 알고 있었다. 두려워야 할 상대는 한낱 산타클로스가 아닌, 배후에서 책략을 짜는 그 사람이라는 것을. 수시로 마찰을 빚었던 군사가 어느 순간 섹스마스 마왕 앞에 나타나 도전장을 내밀었고, 이번에는 총력을 기울여 그녀에게 덤빌 기세이다. 천재 군사의 도전장을 받은 바알은 미소를 지으며 유쾌하게 그것을 받아들인다.\n\n『사실 크리스마스든 섹스마스든 상관없어~ 돈만 만지게 해준다면 전부 다 좋은 명절인 셈이니까~』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/12/11",
    essence: UnitEssence[UnitCode.x_baal],
    thumbnail: UnitEssence[UnitCode.x_baal],
    selection: UnitSelection[UnitCode.x_baal],
    clothes: UnitFullImage[UnitCode.x_baal],
    tagList: [],
    otherVersion: [ UnitCode.baal, UnitCode.f_baal, UnitCode.b_baal, UnitCode.v_baal, UnitCode.s_baal ],
    puzzle: [ PuzzleCode.EVENT_2024_XMAS_1 ],
    skillSet: []
}
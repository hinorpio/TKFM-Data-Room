import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10178: Unit = {
    ID: "10178",
    metaCode: "sky_baal",
    prefix: {
        [Locale.tc]: "機長",
        [Locale.sc]: "机长",
        [Locale.en]: "Plane Captain",
        [Locale.jp]: "機長",
        [Locale.kr]: "기장"
    },
    name: {
        [Locale.tc]: "巴爾",
        [Locale.sc]: "巴尔",
        [Locale.en]: "Ba'al",
        [Locale.jp]: "バル",
        [Locale.kr]: "바알"
    },
    abbreviation: {
        [Locale.tc]: [ "機巴" ],
        [Locale.sc]: [ "机巴" ],
        [Locale.en]: [ "Sky.Baal" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "기바알" ]
    },
    background: {
        [Locale.tc]: `在某位不具名嘿嘿笑科學家的幫助下，巴爾成功造出了魔界裡的第一台飛機。這或許只是巴爾的一小步，但卻是魔界航空業發展的一大步。得到這項跨時代發明的她並沒有放過這個難得的商機，立刻就成立了「巴爾航空」。巴爾相信，航空業的發展會給魔界帶來極大的改變，以及讓她數錢數到手軟的龐大商機。只不過，飛機這種超越時代的交通工具，概念實在太過超前，整個魔界似乎也只有她能駕駛。於是，巴爾只好自己穿上制服、拖好行李，親自率領眾人飛翔於天際。巴爾航空，起飛！\n\n『各位旅客大家好~這裡是機長巴爾，讓人家來給你一趟難忘的天空之旅吧~』`,
        [Locale.sc]: `在某位不具名嘿嘿笑科学家的帮助下，巴尔成功造出了魔界里的第一台飞机。这或许只是巴尔的一小步，但却是魔界航空业发展的一大步。得到这项跨时代发明的她并没有放过这个难得的商机，立刻就成立了「巴尔航空」。巴尔相信，航空业的发展会给魔界带来极大的改变，以及让她数钱数到手软的庞大商机。只不过，飞机这种超越时代的交通工具，概念实在太过超前，整个魔界似乎也只有她能驾驶。于是，巴尔只好自己穿上制服、拖好行李，亲自率领众人飞翔于天际。巴尔航空，起飞！\n\n『各位旅客大家好~这里是机长巴尔，让人家来给你一趟难忘的天空之旅吧~』`,
        [Locale.en]: `With the help of a certain cackling, anonymous scientist, Ba'al successfully builds the Demon Realm's very first airplane. It may be just a small step for Ba'al, but it's a colossal leap for the realm's aviation industry! Seizing this once-in-a-lifetime opportunity, she wastes no time founding Ba'al Airlines. Ba'al's convinced that the aviation boom will revolutionize the Demon Realm and make her pockets jingle with mountains of cash. There's just one tiny hitch... This era-defying flying machine is so cutting-edge, it seems only Ba'al herself can pilot it. So, she dons the captain's uniform, hauls her luggage, and personally leads her crew soaring through the skies. Ba'al Airlines, cleared for takeoff!\n\n"Dear passengers, this is your Captain Ba'al speaking~ Buckle up for an unforgettable sky-high adventure~!"`,
        [Locale.jp]: `とある名無しのニヤニヤと笑う科学者の助けを借りて、バルは魔界初の飛行機の製作に成功した。これはバルにとっては小さな一歩かもしれないが、魔界の航空業界にとっては大きな一歩となった。時代を超越したこの発明を手に入れたバルは、このまたとないビジネスチャンスを逃すまいと、即座に「バル航空」を設立。航空業界の発展は魔界に大きな変革をもたらし、数えきれないほどの利益をもたらすと、バルは確信していた。しかし、時代を先取りしすぎたこの乗り物は、あまりにも斬新すぎるため、バル以外に操縦できる者はいないようだ。そこでバルは自らユニフォームに身を包み、パイロットケースを引いて、皆を率いて大空へと飛び立つことにしたのだ。バル航空、テイクオフ！\n\n『ご搭乗の皆様、こちらは機長のバルです。忘れられない空の旅をお届けします~』`,
        [Locale.kr]: `어떤 익명의 음험한 웃음소리를 내는 과학자의 도움으로, 바알은 마계 최초의 비행기를 성공적으로 만들어냈다. 이건 바알에겐 작은 한 걸음일지 모르지만, 마계 항공 산업 발전에 있어 거대한 한 걸음이었다. 이 획기적인 발명을 손에 넣은 그녀는 이 기회를 놓치지 않고 즉시 「바알 항공」을 설립했다. 바알은 항공 산업의 발전이 마계에 엄청난 변화를 가져오고, 그녀가 돈을 셀 때 손이 아플 정도로 거대한 상업적 기회를 창출할 것이라 믿고 있다. 다만, 비행기라는 시대를 초월한 교통수단은 그들에겐 지나치게 앞서간 기술 문명이었고, 마계 전체에서 이를 운전할 수 있는 건 바알 자신뿐인 것 같다. 결국, 바알은 직접 제복을 입고 짐을 끌며, 모두를 이끌고 하늘을 날아오른다. 바알 항공, 이륙!\n\n『승객 여러분, 안녕하세요~ 기장 바알입니다. 잊지 못할 하늘 속 여행의 추억을 선사해 드릴게요~』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/07/16",
    essence: UnitEssence[UnitCode.sky_baal],
    thumbnail: UnitEssence[UnitCode.sky_baal],
    selection: UnitSelection[UnitCode.sky_baal],
    clothes: UnitFullImage[UnitCode.sky_baal],
    tagList: [],
    otherVersion: [ UnitCode.baal, UnitCode.f_baal, UnitCode.b_baal, UnitCode.v_baal, UnitCode.s_baal, UnitCode.x_baal ],
    initHP: 3499.2,
    initATK: 1008,
    puzzle: [],
    outfits: UnitOutfits[UnitCode.sky_baal],
    voiceSet: UnitVoice[UnitCode.sky_baal],
    skillSet: []
}
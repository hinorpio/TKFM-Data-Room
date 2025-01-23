import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10108: Unit = {
    ID: "10108",
    metaCode: "v_baal",
    prefix: {
        [Locale.tc]: "甜心可可",
        [Locale.sc]: "甜心可可",
        [Locale.en]: "Sweet Cocoa",
        [Locale.jp]: "スイートココア",
        [Locale.kr]: "달콤한 코코아"
    },
    name: {
        [Locale.tc]: "巴爾",
        [Locale.sc]: "巴尔",
        [Locale.en]: "Ba'al",
        [Locale.jp]: "バル",
        [Locale.kr]: "바알"
    },
    abbreviation: {
        [Locale.tc]: [ "可巴" ],
        [Locale.sc]: [ "可巴" ],
        [Locale.en]: [ "V.Baal" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "코바알" ]
    },
    background: {
        [Locale.tc]: `古代文明竟然有送巧克力來示愛的傳統？嗅到賺大錢的機會，身為商人的巴爾自然不會放過。充滿愛意的少女，向心儀的對象送出巧克力，就應該要不擇手段。在如此的宣傳攻勢之下，魔界各地出現了充滿濃情愛意的甜蜜氛圍。身為商會的主人，巴爾也親自投入了這波宣傳，身穿新衣，將氣氛拉抬到最高點。穿著微露酥胸的毛衣，展現如小惡魔後輩般可愛的巴爾，讓所有人都不禁向她投射目光。\n\n『嘿嘿嘿～看見人家這副模樣，是不是很想跟人家約會了呢？』`,
        [Locale.sc]: `古代文明竟然有送巧克力来示爱的传统？嗅到赚大钱的机会，身为商人的巴尔自然不会放过。充满爱意的少女，向心仪的对象送出巧克力，就应该要不择手段。在如此的宣传攻势之下，魔界各地出现了充满浓情爱意的甜蜜氛围。身为商会的主人，巴尔也亲自投入了这波宣传，身穿新衣，将气氛拉抬到最高点。穿着微露酥胸的毛衣，展现如小恶魔后辈般可爱的巴尔，让所有人都不禁向她投射目光。\n\n『嘿嘿嘿～看见人家这副模样，是不是很想跟人家约会了呢？』`,
        [Locale.en]: `Some people in ancient civilizations gave chocolate to show their love? That smells like money to Ba'al! Nothing should stand between a woman and her man! And chocolate is the key to his heart! With this new weapon in her arsenal, the sweet scent of chocolate is suddenly wafting from every shop in Demon Realm. And with that, Ba'al puts on a new outfit and runs with this whole chocolate thing, making sure to milk it for everything it's got. She walks around getting looks from all the demon girls and buys with her new sweater and cute little smile, behind which hides the absolute cunning of an archdemon.\n\n"Hehehe~ You like what you see? Wanna go on a date?"`,
        [Locale.jp]: `古代文明ではチョコをプレゼントして愛を伝えていた？商人であるバルは、このビジネスチャンスを見逃さなかった。恋に堕ちた少女が好きな人にチョコを送りたいのなら、手段を選ばないと考えたからだ。そして魔界は宣伝で洗脳され、あちらこちらでラブラブなカップルが見受けられるようになった。商会の主であるバルもこの波に乗り、新たな衣装に身を包んではムードを最高潮に押し上げたのだ。バルは誰もが振り返ってみてしまう、小悪魔的なチラリが可愛いセーターに身を包んだのであった。\n\n『どう？この服。デートしたくなったんじゃない～？』`,
        [Locale.kr]: `고대문명 중에 초콜릿으로 마음을 전하는 전통이 있었다니!? 돈 냄새를 맡은 바알이 이를 그냥 지나칠 리 없었다. 사랑이 가득 넘치는 소녀는 마음에 품은 대상에게 초콜릿을 전하기 위해 어떠한 수단도 가리지 않는 법! 이 같은 선전 공세에 마계 곳곳에서는 달콤한 분위기가 감돌기 시작하는데. 상회의 주인인 바알도 직접 선전에 뛰어들어 옷을 갈아입고 분위기를 최고조로 끌어올리기 시작한다. 가슴이 드러난 스웨터를 입고 작은 악마처럼 깜찍한 매력을 뽐내는 바알은 모든 이의 시선을 사로잡는다.\n\n『헤헤헷~ 이런 모습의 나와 데이트하고 싶어지지 않아~?』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.HEALER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2023/02/08",
    essence: UnitEssence[UnitCode.v_baal],
    thumbnail: UnitEssence[UnitCode.v_baal],
    selection: UnitSelection[UnitCode.v_baal],
    clothes: UnitFullImage[UnitCode.v_baal],
    tagList: [],
    otherVersion: [ UnitCode.baal, UnitCode.f_baal, UnitCode.b_baal, UnitCode.s_baal, UnitCode.x_baal ],
    puzzle: [],
    skillSet: []
}
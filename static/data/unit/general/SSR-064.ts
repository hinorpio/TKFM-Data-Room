import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10096: Unit = {
    ID: "10096",
    metaCode: "h_lotiya",
    prefix: {
        [Locale.tc]: "鮮血魔王",
        [Locale.sc]: "鲜血魔王",
        [Locale.en]: "Bloodsucker",
        [Locale.jp]: "鮮血の魔王",
        [Locale.kr]: "선혈의 마왕"
    },
    name: {
        [Locale.tc]: "洛緹亞",
        [Locale.sc]: "洛缇亚",
        [Locale.en]: "Lotiya",
        [Locale.jp]: "ラティヤ",
        [Locale.kr]: "로티아"
    },
    abbreviation: {
        [Locale.tc]: [ "血魔" ],
        [Locale.sc]: [ "血魔" ],
        [Locale.en]: [ "H.Lotiya" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `憎恨著男性卻被迫屈從魔王凱薩，吸血鬼洛緹亞從未忘記這份屈辱。但是受限於實力差距，洛緹亞只能蟄伏於魔王城，靜靜等待崛起的機會。而這份機會終於來到了她的面前。撿到了南瓜妖精帕奈奈的魔力罐，擁有近乎用之不盡魔力的洛緹亞變得空前絕後的強大。趁著凱薩不在魔王城期間，洛緹亞在地面建造起了高塔。在這高塔裡面不存在任何男性，是只有可愛、純潔少女可以生活的空間。洛緹亞正伸出魔掌，一點一點的建造屬於她的少女樂園。\n\n『啊～美麗的少女們，讓我們在這時光停駐的樂土中好好相處吧。』`,
        [Locale.sc]: `憎恨着男性却被迫屈从魔王凯萨，吸血鬼洛缇亚从未忘记这份屈辱。但是受限于实力差距，洛缇亚只能蛰伏于魔王城，静静等待崛起的机会。而这份机会终于来到了她的面前。捡到了南瓜妖精帕奈奈的魔力罐，拥有近乎用之不尽魔力的洛缇亚变得空前绝后的强大。趁着凯萨不在魔王城期间，洛缇亚在地面建造起了高塔。在这高塔里面不存在任何男性，是只有可爱、纯洁少女可以生活的空间。洛缇亚正伸出魔掌，一点一点的建造属于她的少女乐园。\n\n『啊～美丽的少女们，让我们在这时光停驻的乐土中好好相处吧。』`,
        [Locale.en]: `A man-hater who has been forced into serving Master Caesar, the vampire Lotiya lives with constant shame and anger. And yet locked up far away from Caesar's palace, all she can do is sit and wait for her chance to get revenge. Well, girls and boys... that chance has finally come. Finding Panana's jar full of magic on the ground, Lotiya now has the opportunity to rule the realm! Lucky for her, too, Master Caesar just happens to be away from the palace. A perfect time to take action! So Lotiya gets started working on her tower... a tower without men, only pretty girls who want to serve Lotiya and Lotiya only! With every hour, Lotiya gets closer and closer to realizing her own special utopia.\n\n"Ahh~ My little playthings, let us spend some time together, alone~"`,
        [Locale.jp]: `男を憎みながら魔王シーザーに屈服させられた吸血鬼ラティヤはその屈辱を忘れられずにいた。しかしシーザーとのあまりの実力差から、彼女はじっと魔王城でチャンスを待つしかなかった。そして、そのチャンスがとうとうやってきた。かぼちゃ妖精パナナの魔力瓶を拾って、無限に近い魔力を手に入れたラティヤはかつてないほどに強大な力を得たのであった。シーザーが魔王城にいない間に、ラティヤは巨大な塔を築く。この塔にはいかなる男性もおらず、可愛くて純粋な女の子だけがいることを許される。ラティヤは彼女の理想の楽園を築き上げていく。\n\n『あぁ～可愛い娘達よ、この永遠の楽園で一緒に楽しもうじゃないか！』`,
        [Locale.kr]: `마왕 시저에게 당했던 굴욕을 절대 잊지 못했던 남성혐오증의 라티아. 하지만 좁힐 수 없는 실력 차이로 그녀가 할 수 있는 일이라곤 마왕성에서 조용히 복수의 기회를 기다리는 것뿐. 그리고 드디어, 그 기회가 찾아오게 되었다. 펌킨 페어리의 마력병을 줍게된 그녀는 매우 강력한 힘을 손에 얻게 되었고. 시저가 부재 중인 틈을 타 땅 위에 높은 탑을 세우게 되었는데. 그 탑에는 남자란 단 한 명도 존재하지 않는, 오직 귀엽고 순결한 소녀들만이 존재하는 그런 공간이었다. 라티아는 얻게된 마력으로 조금씩 소녀들만의 파라다이스를 가꾸어가기 시작했다.\n\n『아~ 우리 이쁜이들~ 우리만의 파라다이스에서 함께 행복하게 지내보자구?』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/10/26",
    essence: UnitEssence[UnitCode.h_lotiya],
    thumbnail: UnitEssence[UnitCode.h_lotiya],
    selection: UnitSelection[UnitCode.h_lotiya],
    clothes: UnitFullImage[UnitCode.h_lotiya],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
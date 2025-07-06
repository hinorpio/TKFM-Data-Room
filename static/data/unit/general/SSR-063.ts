import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10095: Unit = {
    ID: "10095",
    metaCode: "h_leona",
    prefix: {
        [Locale.tc]: "見習聖騎士",
        [Locale.sc]: "见习圣骑士",
        [Locale.en]: "Knight in Training",
        [Locale.jp]: "見習い聖騎士",
        [Locale.kr]: "견습 성기사"
    },
    name: {
        [Locale.tc]: "雷歐娜",
        [Locale.sc]: "雷欧娜",
        [Locale.en]: "Leona",
        [Locale.jp]: "レオナ",
        [Locale.kr]: "레오나"
    },
    abbreviation: {
        [Locale.tc]: [ "幼騎", "小騎", "小聖騎" ],
        [Locale.sc]: [ "幼骑", "小骑", "小圣骑" ],
        [Locale.en]: [ "H.Leona" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "로오나" ]
    },
    background: {
        [Locale.tc]: `在逮捕竊盜犯洛緹亞的過程中，雷歐娜被對方的魔法擊中，結果卻意外變成了過去的模樣。而且不只肉體，就連精神似乎都變成了還是見習聖騎士的狀態？！雖然聽神官說魔族是殘忍且邪惡的種族，然而實際接觸後卻不是這麼一回事。教會的教育以及現實的衝突，不禁讓雷歐娜陷入迷惘。只是迷惘歸迷惘，眼前若有人需要幫助伸出手是理所當然的。即使身體縮小了，正義感也不減半分。目標是拯救被擄走的少女以及取回帕奈奈的魔力罐！跟隨南瓜仙子帕奈奈以及被意外捲入的小精靈王賽露西亞一同踏上冒險。\n\n『我是雷歐娜，立志成為萬眾景仰的正義聖騎士！』`,
        [Locale.sc]: `在逮捕窃盗犯洛缇亚的过程中，雷欧娜被对方的魔法击中，结果却意外变成了过去的模样。而且不只肉体，就连精神似乎都变成了还是见习圣骑士的状态？！虽然听神官说魔族是残忍且邪恶的种族，然而实际接触后却不是这么一回事。教会的教育以及现实的冲突，不禁让雷欧娜陷入迷惘。只是迷惘归迷惘，眼前若有人需要帮助伸出手是理所当然的。即使身体缩小了，正义感也不减半分。目标是拯救被掳走的少女以及取回帕奈奈的魔力罐！跟随南瓜仙子帕奈奈以及被意外卷入的小精灵王赛露西亚一同踏上冒险。\n\n『我是雷欧娜，立志成为万众景仰的正义圣骑士！』`,
        [Locale.en]: `While apprehending Lotiya for theft, Leona was accidentally struck by her magic, turning back her age. But it's not just her body... her mind seems to have reverted to a past state, as well. Now, back as a Holy Knight in training, Leona has to come to terms with contradictions between the church's teachings and the facts. Are the demons really as bad as they say? Or... has she been lied to? Confused as she is, at least she still knows her duty to help those in need. Even though her body has shrunk, her sense of justice is as strong as ever. Her new goal is to retrieve Panana's stolen magic jar and save the world from a crazed vampire! She sets off on this journey not only with Panana, but with their slightly-unwilling companion, Salucia!\n\n"I'm Leona, and I'm going to be the greatest Holy Knight this world has ever seen!"`,
        [Locale.jp]: `窃盗犯ラティヤを逮捕しようとした際に、魔法を食らったレオナはなんと若き日の姿になってしまう！しかも肉体が変化しただけでなく、どうやら精神状態まで見習い騎士の頃に戻ってしまったようだ！神官から魔族は残忍で邪悪な種族だと聞かされていた若き日のレオナであったが、実際に魔族に会ってみるとそのようなことはなく……教会の教育と現実との矛盾がレオナを悩ませる。レオナは身体は小さいが、強い正義の心を持っているのだ。今回の任務はさらわれた娘達とパナナの魔法瓶を取り戻すことだ！かぼちゃの妖精パナナと偶然巻き込まれてしまったエルフ王セシルと共に冒険に出る！\n\n『私はレオナ、みんなから尊敬される正義の聖騎士にきっとなる！』`,
        [Locale.kr]: `레오나는 절도범 로티아를 체포하는 과정에서 상대방의 마법 공격을 맞고 과거의 모습으로 돌아가고 말았다. 육체 뿐만이 아니라 정신 상태까지도 견습 성기사였을 때로 돌아가버렸던 것! 실제로 마족과 접촉한 후, 그들의 존재가 신관들로부터 배웠던 것과는 다르다는 사실을 알게 된 레오나. 그녀는 교회에서 배워왔던 것과의 괴리감으로 혼란에 빠지게 되는데… 그래도 누군가 도움을 필요로하면 손을 내밀어줘야 한다는 믿음만큼은 흔들리지 않았다. 몸집은 작아졌지만 정의감 하나만큼은 누구에게도 지지 않는 그녀. 그녀의 목표는 위기에 빠진 소녀들을 구하고 파나나의 마력병을 되찾는 것! 펌킨 페어리와 엘프왕과 함께하는 험난한 여정이 이제 막 시작되었다.\n\n『내 이름은 레오나, 모두에게 추앙받는 정의의 성기사가 되겠어!』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2022/10/26",
    essence: UnitEssence[UnitCode.h_leona],
    thumbnail: UnitEssence[UnitCode.h_leona],
    selection: UnitSelection[UnitCode.h_leona],
    clothes: UnitFullImage[UnitCode.h_leona],
    tagList: [],
    otherVersion: [ UnitCode.leona ],
    initHP: 0,
    initATK: 0,
    puzzle: [],
    outfits: [],
    skillSet: []
}
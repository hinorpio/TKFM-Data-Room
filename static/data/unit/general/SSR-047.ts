import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10049: Unit = {
    ID: "10049",
    metaCode: "faya",
    prefix: {
        [Locale.tc]: "高等魔族",
        [Locale.sc]: "高等魔族",
        [Locale.en]: "High-Ranking Demon",
        [Locale.jp]: "高等魔族",
        [Locale.kr]: "고등 마족"
    },
    name: {
        [Locale.tc]: "法雅",
        [Locale.sc]: "法雅",
        [Locale.en]: "Faya",
        [Locale.jp]: "ファーヤ",
        [Locale.kr]: "파야"
    },
    abbreviation: {
        [Locale.tc]: [ "藍皮怪" ],
        [Locale.sc]: [ "蓝皮怪" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `法雅雖貴為高等魔族，其行事作風卻與魔族大相逕庭。不喜殺戮、不喜欺負弱小、不喜以實力定勝負。在弱肉強食的魔界中，法雅顯得標新立異。眾多魔族怒指法雅失格，揚言必拔除其地位象徵。然而，法雅擁有的高等魔族血統與實力不容質疑。沒有人敢輕易地向她發起挑戰。深知自己的作風與魔界的差異，法雅在百年前就離開了魔界，隱蔽了自己身分，化身為人類的模樣到處旅遊。\n\n『屁股大的女性比較會生孩子？啊…您這是看著我哪裡說出的話呀！』`,
        [Locale.sc]: `法雅虽贵为高等魔族，其行事作风却与魔族大相径庭。不喜杀戮、不喜欺负弱小、不喜以实力定胜负。在弱肉强食的魔界中，法雅显得标新立异。众多魔族怒指法雅失格，扬言必拔除其地位象征。然而，法雅拥有的高等魔族血统与实力不容质疑。没有人敢轻易地向她发起挑战。深知自己的作风与魔界的差异，法雅在百年前就离开了魔界，隐蔽了自己身分，化身为人类的模样到处旅游。\n\n『屁股大的女性比较会生孩子？啊…您这是看着我哪里说出的话呀！』`,
        [Locale.en]: `Faya might be a high-ranking demon, but she's never acted like it. She loathes killing, tormenting the weak, and the fact that everything seems to be decided by physical strength. In the dog-eat-dog gauntlet that is the Demon Realm, she stuck out like a sore thumb. More than a few demons labeled Faya a disgrace to demon-kind and even pushed for the removal of her titles. However, Faya possesses noble demon blood and awesome power. As such, no demon dared challenge her to her face. Faya soon realized her way of life would never fit in with the ways of the Demon Realm, which led her to an important decision. A few hundred years ago, she disguised herself as a human, left the Demon Realm, and began a journey that took her across the world...\n\n"Women with big butts are better at giving birth? Ah... just what are you staring at!?"`,
        [Locale.jp]: `ファーヤは高貴な高等魔族だが振る舞いや言葉遣いは魔族とかけ離れている。殺戮、弱い者いじめ、力で勝ち負けを決めるのが嫌いなのだ。弱肉強食の魔界では異質な存在である。そのため魔族失格としてファーヤの地位を剥奪するべきだと唱える魔族も多い。しかし彼女の高等魔族の血統と実力は確かなものである。だから誰一人として手を出そうとはしない。自身の生き方が魔界と合わないことを痛感した彼女は、100年前に魔界を離れた。今は正体を隠し、人間の姿に化けて各地を旅しているのだ。\n\n『お尻の大きな女性は安産型？あの……どこを見て言っているのですか！？』`,
        [Locale.kr]: `파야는 고등 마족이지만 모두가 흔히 생각하는 마족과는 조금 거리가 있다. 그녀는 약자를 괴롭히거나 살육하는 일, 그리고 실력이 곧 법이라는 이치를 별로 좋아하지 않는다. 약육강식의 세계에서 파야의 이런 성격은 유별나게 보여질 수도 있다. 마족으로서 실격이라며 그녀의 지위를 박탈시켜야 한다는 목소리도 적지 않다. 하지만 그녀의 몸에는 엄연히 고등 마족의 피가 흐르고 있고 실력 또한 의심할 여지없이 강하다. 따라서 아무도 섣불리 그녀에게 도전장을 내밀진 못한다. 자신의 생각은 마계에 어울리지 않는다는 것을 깨닫고 수 백년 전 마계를 떠나, 자신의 정체를 숨긴 채 인간의 모습으로 곳곳을 유랑하기 시작한다.\n\n『엉덩이가 큰 여자가 애를 잘 낳는다고요? 아... 지금 어딜 보면서 그런 얘길 하시는 거예요...!』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/05/11",
    essence: UnitEssence[UnitCode.faya],
    thumbnail: UnitEssence[UnitCode.faya],
    selection: UnitSelection[UnitCode.faya],
    clothes: UnitFullImage[UnitCode.faya],
    tagList: [
        TagID.ELEMENT_FIRE,
        TagID.POSITION_HEALER,
        TagID.SPECIES_DEMON,
        TagID.CLASS_LEADER,
        TagID.OTHER_RECOVERY,
        TagID.OTHER_SUPPORT,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
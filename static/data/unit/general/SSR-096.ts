import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10132: Unit = {
    ID: "10132",
    metaCode: "cartilla",
    prefix: {
        [Locale.tc]: "幽夜女爵",
        [Locale.sc]: "幽夜女爵",
        [Locale.en]: "Dark Countess",
        [Locale.jp]: "幽闇の女傑",
        [Locale.kr]: "어둠의 여제"
    },
    name: {
        [Locale.tc]: "卡蒂雅",
        [Locale.sc]: "卡蒂雅",
        [Locale.en]: "Cartilla",
        [Locale.jp]: "カティア",
        [Locale.kr]: "카디아"
    },
    abbreviation: {
        [Locale.tc]: [ "女爵" ],
        [Locale.sc]: [ "女爵" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `卡蒂雅的性格敏銳機靈，面對任何難關都游刃有餘，會以言語的調笑帶過，讓人摸不清底細與真意。她原本是受雇於伊娜絲的盜賊傭兵，在任務成功後一度想盜取寶物脫身，結果反被艾洛斯抓個正著。在受到艾洛斯的懲戒後便臣服於他，與兩人結伴同行。雖然表面看上去是個冰山美女，但實際上是個喜歡開玩笑的人。\n\n『那個魔王跟艾洛斯面對性慾的態度還真像，男人果然都是用下半身思考的動物吧。』`,
        [Locale.sc]: `卡蒂雅的性格敏锐机灵，面对任何难关都游刃有余，会以言语的调笑带过，让人摸不清底细与真意。她原本是受雇于伊娜丝的盗贼佣兵，在任务成功后一度想盗取宝物脱身，结果反被艾洛斯抓个正着。在受到艾洛斯的惩戒后便臣服于他，与两人结伴同行。虽然表面看上去是个冰山美女，但实际上是个喜欢开玩笑的人。\n\n『那个魔王跟艾洛斯面对性欲的态度还真像，男人果然都是用下半身思考的动物吧。』`,
        [Locale.en]: `Gifted with a sharp and clever personality, there isn't a difficulty in the world Cartilla cannot face with ease. She has a way with words to humor others, disarming and confusing them regarding her true intent. Originally a mercenary thief hired by Inase, after successfully completing her mission, Cartilla tries to steal the treasure for herself and escape. Little does she know that Eros has caught her red-handed. After being thoroughly punished by Eros, she surrenders to him and they walk away. Don't let her cold exterior fool you, for she actually likes to crack a joke from time to time.\n\n"That Archdemon and Eros really cope with their sex drive similarly. Men always thinking with their dicks."`,
        [Locale.jp]: `聡明で機転がきくカティアは、どのようなピンチに陥っても冗談を言うほどの余裕を見せる。彼女の真意をとらえることは至難の業だ。イネースが傭兵として雇った盗賊であったカティアは、任務成功後に宝を持って逃げ出そうとするも、逆にエロスに捕まってしまう。エロスのお仕置きを受けて、屈服したカティアは彼らの仲間になるのであった。一見すると冷たそうな美女であるが、実際は冗談が大好き。\n\n『あの魔王は性欲丸出しでエロスとそっくりだ。やっぱり男は下半身でしか物を考えない生き物なんだな』`,
        [Locale.kr]: `민첩하고 눈치가 빠른 성격으로 어떤 난관을 마주해도 농담을 던질 정도로 여유로운 면모를 보여준다. 오히려 이런 모습은 그녀의 정체와 진의가 무엇인지 더더욱 알 수 없게 만든다. 본래 용병이었던 그녀는 임무에 성공한 후 보물을 훔쳐 탈출하려다 에로스에게 붙잡히고 만다. 에로스의 징계를 받은 후, 그에게 복종하며 두 사람과 함께 동행하게 되었다. 겉으로는 무척 차가워보이지만 실제로는 장난을 좋아하는 허울없는 성격이다.\n\n『그 마왕, 성욕을 대하는 태도가 에로스를 쏙 빼닮았어. 역시 남자들의 머릿속은 온통 그런 것들 뿐이군.』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2023/11/15",
    essence: UnitEssence[UnitCode.cartilla],
    thumbnail: UnitEssence[UnitCode.cartilla],
    selection: UnitSelection[UnitCode.cartilla],
    clothes: UnitFullImage[UnitCode.cartilla],
    tagList: [],
    otherVersion: [],
    initHP: 5185.6,
    initATK: 680,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.cartilla],
    skillSet: []
}
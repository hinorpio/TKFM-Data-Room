import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10152: Unit = {
    ID: "10152",
    metaCode: "susan",
    prefix: {
        [Locale.tc]: "治癒之星",
        [Locale.sc]: "治愈之星",
        [Locale.en]: "Healing Star",
        [Locale.jp]: "治癒のスター",
        [Locale.kr]: "치유의 별"
    },
    name: {
        [Locale.tc]: "蘇珊",
        [Locale.sc]: "苏珊",
        [Locale.en]: "Susan",
        [Locale.jp]: "スーザン",
        [Locale.kr]: "수잔"
    },
    abbreviation: {
        [Locale.tc]: [ "萬煌" ],
        [Locale.sc]: [ "万煌" ],
        [Locale.en]: [ "H.Daphne", "H.Susan" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `因為被神秘的道具影響，妲絲艾菲娜意外變成了理想中的自己。然而，未來的妲絲艾菲娜卻和眾人熟悉的樣子完全不同。捨棄了統御三界的幽冥女王這個稱號，蘇珊作為治癒術士重新出發。將過往的那段黑歷史給完全封印，絕不想被任何人發現那羞恥的自己。今天的蘇珊，依然朝著自己所期待的模樣，「溫柔又成熟可靠的大姊姊」邁進。…但是，那個崇尚帥氣、天真純粹的妲絲艾菲娜，真的有可能就這樣消失了嗎？\n\n『身為成熟的大姊姊，必須要好好的保護大家才行呢！』`,
        [Locale.sc]: `因为被神秘的道具影响，妲丝艾菲娜意外变成了理想中的自己。然而，未来的妲丝艾菲娜却和众人熟悉的样子完全不同。捨弃了统御三界的幽冥女王这个称号，苏珊作为治癒术士重新出发。将过往的那段黑历史给完全封印，绝不想被任何人发现那羞耻的自己。今天的苏珊，依然朝着自己所期待的模样，「温柔又成熟可靠的大姊姊」迈进。…但是，那个崇尚帅气、天真纯粹的妲丝艾菲娜，真的有可能就这样消失了吗？\n\n『身为成熟的大姊姊，必须要好好的保护大家才行呢！』`,
        [Locale.en]: `Under the influence of a mysterious object, Daphne accidentally transforms into her ideal self.However, her appearance eventually becomes unrecognizable to everyone.She casts aside her title as Queen of the Nether Realm and Ruler of the Three Worlds to return once more as healer Susan.She seals away her dark, shameful past, adamantly hiding it from the world.Today, Susan strives to become the "warm, mature, and reliable big sister" of her dreams.However... has the boy-crazy and naive Daphne truly disappeared forevermore?\n\n"As the mature older sister, it is my duty to protect my fellow girls!"`,
        [Locale.jp]: `不思議な道具の影響で、偶然にも理想の自分に変わってしまったバンサフィーナ。しかし未来のバンサフィーナは、皆が知る彼女とはまったく異なる姿をしていた。そんな彼女は三界を支配する冥界の女王という称号を捨て、治癒の魔術師スーザンとして新たな道を歩み始めた。そう、彼女は過去の「黒歴史」を完全に封印し、恥ずかしい自分を誰にも知られないようにしようと考えたのだ。今日もスーザンは、自分が目標とする「優しくて大人っぽい、頼りがいのあるお姉さん」になろうと努力している。しかし、あのカッコよさを追い求めていた天真爛漫で純粋なバンサフィーナは、本当にこのまま消えてしまうのだろうか……\n\n『大人のお姉ちゃんとして、みんなを守らないと！』`,
        [Locale.kr]: `신비한 도구의 영향으로 비앙스 에피나는 이상적인 자신의 모습으로 변하게 됐다. 그러나 미래의 비앙스 에피나는 모두가 익히 알고 있는 모습과는 사뭇 달랐다. 3계를 통치하는 명계의 여왕이란 칭호를 버리고, 수잔이란 이름으로 치유술사로 새롭게 출발한 것이다. 그녀는 과거의 흑역사를 완전히 봉인하고, 그 부끄러운 모습을 누구에게도 들키고 싶지 않아 하는 눈치다. 오늘의 수잔은 여전히 자신이 기대하는 모습, 즉 「따뜻하고 성숙하며 누구나 기댈 수 있을 만한 듬직한 여성」이 되는 것을 목표로 나아간다.... 하지만, 천진난만하고 손발이 오그라드는 대사를 거침없이 내뱉을 수 있는 그녀의 성격이 정말로 완전히 지워질 수 있을는지?\n\n『성숙한 여성으로서, 반드시 모두를 잘 지켜내야만 해!』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/10/16",
    essence: UnitEssence[UnitCode.susan],
    thumbnail: UnitEssence[UnitCode.susan],
    selection: UnitSelection[UnitCode.susan],
    clothes: UnitFullImage[UnitCode.susan],
    tagList: [],
    otherVersion: [ UnitCode.daphne ],
    puzzle: [],
    skillSet: []
}
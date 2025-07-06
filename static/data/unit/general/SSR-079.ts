import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10048: Unit = {
    ID: "10048",
    metaCode: "momo",
    prefix: {
        [Locale.tc]: "毒蠍",
        [Locale.sc]: "毒蝎",
        [Locale.en]: "Poisonous Scorpion",
        [Locale.jp]: "猛毒サソリ",
        [Locale.kr]: "독전갈"
    },
    name: {
        [Locale.tc]: "莫默",
        [Locale.sc]: "莫默",
        [Locale.en]: "Momo",
        [Locale.jp]: "モモ",
        [Locale.kr]: "모모"
    },
    abbreviation: {
        [Locale.tc]: [ "默默", "蠍" ],
        [Locale.sc]: [ "默默", "蝎" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `莫默是隻蠍子，而且是隻有毒的蠍子。這對她來說有些……不、是非常困擾。因為某些特別的原因，莫默無法自由的控制蠍尾。即使不願意，莫默也會在某些情況下失控，傷害到親近的人。最終莫默離開了棲息地，開始了離群索居的生活。雖然寂寞，但這是沒有辦法的，因為與之親近的人都會因她而受傷。儘管如此，莫默心裡仍期待著哪天能夠出現一位既不怕螫也不怕毒的人……\n\n『不…不要靠近莫默！要是你受傷了，莫默會很難過的……』`,
        [Locale.sc]: `莫默是只蝎子，而且是只有毒的蝎子。这对她来说有些……不、是非常困扰。因为某些特别的原因，莫默无法自由的控制蝎尾。即使不愿意，莫默也会在某些情况下失控，伤害到亲近的人。最终莫默离开了栖息地，开始了离群索居的生活。虽然寂寞，但这是没有办法的，因为与之亲近的人都会因她而受伤。尽管如此，莫默心里仍期待着哪天能够出现一位既不怕螫也不怕毒的人……\n\n『不…不要靠近莫默！要是你受伤了，莫默会很难过的……』`,
        [Locale.en]: `Momo's a scorpion, and a poisonous one at that. This is causing her a few... no, a LOT of problems. For unmentionable reasons, there are certain times when she loses all control over her tail. In some circumstances, she'd end up hurting those who are close to her against her will and wishes. Eventually, Momo upped sticks and left her habitat in search of a new life. She was lonely, but there wasn't much she could do about it. After all, she'd only hurt anyone she tried to get close to. Despite this, Momo longs for the day when she'll meet someone who's not afraid of getting stung...\n\n"No... Stay away from me! I'll be heartbroken if you get hurt..."`,
        [Locale.jp]: `モモは猛毒を持つサソリである。そんな彼女はとある悩みを抱えていた。それは自分の毒尾をコントロールできないという悩みだ。モモはそのせいで、自分の意志に反して仲のいい人まで傷付けてしまう。だからモモは自分の生息地を離れ、独居生活を始めることに決めた。寂しいが仕方がない事だった。彼女はこれ以上他人を傷付けたくない一心だったのだ。それでもモモは心の奥で、いつかサソリの毒を恐れない人が現れないかと期待していたのであった……\n\n『ち、近づかないでください！あなたが怪我をしたら、悲しくなっちゃいます……』`,
        [Locale.kr]: `모모는 전갈, 그것도 독전갈이다. 이건 그녀에게 조금.... 아니, 아주 많은 곤욕을 치르게 한다. 어떤 이유로 모모는 자신의 꼬리를 제어할 수 없게 됐다. 원치 않았더라도 모모는 어떤 상황에서 통제불능이 되어 가까운 사람을 다치게 한다. 결국 모모는 서식지를 떠나 외톨이 생활을 하게 된다. 외롭지만 어쩔 수 없다. 가까워진 사람 모두 그녀 때문에 다칠 수 있기 때문이다. 하지만 그런 모모는 여전히 기대를 품고 있었다. 자신의 독을 무서워하지 않는 사람이 나타나주기를.\n\n『다... 다가오지 마세요! 당신이 다치면 모모는 무척 슬플 거예요...』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2023/04/26",
    essence: UnitEssence[UnitCode.momo],
    thumbnail: UnitEssence[UnitCode.momo],
    selection: UnitSelection[UnitCode.momo],
    clothes: UnitFullImage[UnitCode.momo],
    tagList: [
        TagID.ELEMENT_WATER,
        TagID.POSITION_ATTACKER,
        TagID.SPECIES_DEMON,
        TagID.BREAST_FLAT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
    ],
    otherVersion: [],
    initHP: 0,
    initATK: 0,
    puzzle: [],
    outfits: [],
    skillSet: []
}
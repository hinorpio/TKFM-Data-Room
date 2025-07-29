import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10024: Unit = {
    ID: "10024",
    metaCode: "elizabeth",
    prefix: {
        [Locale.tc]: "死靈女王",
        [Locale.sc]: "死灵女王",
        [Locale.en]: "Undead Queen",
        [Locale.jp]: "亡霊の嬢王",
        [Locale.kr]: "네크로맨서 여왕"
    },
    name: {
        [Locale.tc]: "艾莉莎白",
        [Locale.sc]: "艾莉莎白",
        [Locale.en]: "Elizabeth",
        [Locale.jp]: "エリザベス",
        [Locale.kr]: "엘리자베스"
    },
    abbreviation: {
        [Locale.tc]: [ "死靈", "小艾莉" ],
        [Locale.sc]: [ "死灵", "小艾莉" ],
        [Locale.en]: [ "Eli" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `艾莉莎白厭惡和平與他人的幸福，是不管在人界還是魔界都赫赫有名的戰爭犯。她似乎只能從他人的不幸中得到快樂，因此一直熱衷的捉弄他人。然而她的捉弄並不是讓人事後會心一笑的惡作劇，而是會將無數無關人士卷入，人生就此崩壞的惡質玩笑。操弄著亡靈的軍隊，賜予弱小的國家力量，並煽動他們發起戰爭。等到對方即將成功時，再一口氣把賜予的力量全數收回，看著變得兩敗俱傷的雙方樂得咯咯直笑。\n\n『若不是出於自我意志採取的行動，事後就不會感到悔恨還有空虛。』`,
        [Locale.sc]: `艾莉莎白厌恶和平与他人的幸福，是不管在人界还是魔界都赫赫有名的战争犯。她似乎只能从他人的不幸中得到快乐，因此一直热衷的捉弄他人。然而她的捉弄并不是让人事后会心一笑的恶作剧，而是会将无数无关人士卷入，人生就此崩坏的恶质玩笑。操弄着亡灵的军队，赐予弱小的国家力量，并煽动他们发起战争。等到对方即将成功时，再一口气把赐予的力量全数收回，看着变得两败俱伤的双方乐得咯咯直笑。\n\n『若不是出于自我意志采取的行动，事后就不会感到悔恨还有空虚。』`,
        [Locale.en]: `Elizabeth hates peace and other people's happiness. All she wants to do is make war, whether it's in the Human Realm or the Demon Realm doesn't matter to her. The only way she can be happy is when other people are unhappy! So that's her life goal!! But when we say "make people unhappy" we don't mean, like, tying their shoelaces together or giving them chocolate instead of vanilla ice cream. We mean totally ruining their lives and the lives of everyone else around them!!! Now, Elizabeth commands a gigantic army of the undead, and she's sending them off to war! She'll fight and fight, and just when it looks like the other side's about to win... she'll utterly destroy them!! That's how Elizabeth gets her kicks.\n\n"Don't get mad at me, I didn't do anything! It was my undead puppets, kyahahaha!!"`,
        [Locale.jp]: `エリザベスが嫌うのは平和と他人の幸福。人間界でも魔界でも有名な戦争犯罪人だ。彼女は他人の不幸からしか喜びを感じられないため、いつも他人をからかい弄ぶことに熱中している。しかし彼女のいたずらは最後に笑顔になれるようなものではなく、無関係の人をたくさん巻き込み、人生を崩壊させるような悪質なものなのだ。そして時には亡霊の軍隊を操り、弱った国家に力を与えて、彼らに戦争を起こすよう煽り立てる。どちらかが勝利を目の前にしたとき、一気に与えた力を全て回収し、ボロボロに傷ついた両軍の様子を見て嬉しそうに高笑いするのだ。\n\n『自分の意思でした行動じゃないなら、後で後悔したり虚しさを感じたりしないでしょ』`,
        [Locale.kr]: `엘리자베스는 평화와 타인의 행복을 증오한다. 인간계와 마계에서 모두 악명을 떨치는 전범이다. 망령의 군대를 이끌고 약해진 나라에 힘을 빌려주어 그들이 전쟁을 일으키도록 선동한다. 그리고 그녀의 장난은 당하는 사람이 웃게 만드는 가벼운 장난이 아니라 이와 관계없는 수많은 사람이 연루되어 인생이 그대로 끝나버리는 악질적인 장난이다. 망령의 군대를 이끌고 약해진 나라에 힘을 빌려주어 그들이 전쟁을 일으키도록 선동한다. 상대가 곧 성공하려고 할 때, 단숨에 빌려주었던 힘을 모두 회수해 양측이 모두 큰 손실을 입는 것을 보며 큰 소리로 웃으며 즐거워한다.\n\n『만약 자신의 의지대로 행한 행동이 아니었다면 이렇게 후회와 공허감을 느끼지도 않았겠지.』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/11/30",
    essence: UnitEssence[UnitCode.elizabeth],
    thumbnail: UnitEssence[UnitCode.elizabeth],
    selection: UnitSelection[UnitCode.elizabeth],
    clothes: UnitFullImage[UnitCode.elizabeth],
    tagList: [],
    otherVersion: [],
    initHP: 3427.2,
    initATK: 1028.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.elizabeth],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
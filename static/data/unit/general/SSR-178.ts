import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10207: Unit = {
    ID: "10207",
    metaCode: "se_noel",
    prefix: {
        [Locale.tc]: "直播限定",
        [Locale.sc]: "直播限定",
        [Locale.en]: "Stream Exclusive",
        [Locale.jp]: "配信限定",
        [Locale.kr]: "라이브 한정"
    },
    name: {
        [Locale.tc]: "黑白諾艾莉",
        [Locale.sc]: "黑白诺艾莉",
        [Locale.en]: "Noel",
        [Locale.jp]: "ノエル",
        [Locale.kr]: "노엘리"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `隨著巴爾研發的最新科技，人人都能成為偶像的時代已經來臨。身為偶像的大前輩，諾艾莉義不容辭的接下了指導新人偶像的工作。然而，要一邊進行偶像活動，一邊又要指導各式各樣的新人，過剩的工作量讓諾艾莉有點吃不消。不過，身為偶像和偶像前輩的她，是不能把氣餒的一面給表現出來的！就算真的有，也只會在自己最熟悉的那幾個人面前軟弱！少女偶像黑白諾艾莉，永遠不會退縮，將會以全新的姿態迎接挑戰！\n\n『該怎麼辦，要是在這裡失誤的話…奈奈美～快幫幫人家啦～』`,
        [Locale.sc]: `随着巴尔研发的最新科技，人人都能成为偶像的时代已经来临。身为偶像的大前辈，诺艾莉义不容辞的接下了指导新人偶像的工作。然而，要一边进行偶像活动，一边又要指导各式各样的新人，过剩的工作量让诺艾莉有点吃不消。不过，身为偶像和偶像前辈的她，是不能把气馁的一面给表现出来的！就算真的有，也只会在自己最熟悉的那几个人面前软弱！少女偶像黑白诺艾莉，永远不会退缩，将会以全新的姿态迎接挑战！\n\n『该怎么办，要是在这里失误的话…奈奈美～快帮帮人家啦～』`,
        [Locale.en]: `Thanks to the cutting-edge tech developed by Ba'al, the era where just about anyone can become an idol has officially arrived. As a seasoned veteran in the industry, Noel felt it was her duty to take on the responsibility of mentoring the influx of rookie idols. However, juggling her own idol duties while managing a chaotic variety of newbies has given her an overwhelming load... of work that is pushing her to her limits. Even so, as a top-tier idol and a senior role model, she absolutely cannot let her exhaustion show! ...Well, even if she does suffer breakdown, she'll only show that vulnerable side to the select few people she trusts the most! The young starlet Noel will never back down, and she is ready to face these challenges head-on in a brand-new form!\n\n"What to do? If I screw up here, then... Nanami~ someone save meee~!"`,
        [Locale.jp]: `バルの開発した最新テクノロジーのお陰で、誰でもアイドルになれる時代がついに訪れた。アイドルの大先輩として、当然のごとく新人アイドルのインストラクターの仕事を引き受けたノエル。しかしアイドル活動に勤しむ傍らで、多種多様な新人たちを指導するのは容易ではなく、過剰な仕事量にノエルはてんてこ舞い。だがアイドルとして、そして先輩として、そんな弱気なところを見せるわけにはいかない……！見せるとしてもそれは、自分と親しいごく少数の人たちの前でだけである！美少女アイドル・モノクロのノエルはいつだって怯まず、より新しい姿で次の挑戦に臨むのだ！\n\n『どうしよう、もしここでミスしたら……ななみ～お願い助けてぇ～』`,
        [Locale.kr]: `바알이 개발한 최신 기술 덕분에, 누구나 아이돌이 될 수 있는 시대가 도래했다. 아이돌의 대선배로서, 노엘리는 신인 아이돌을 지도하는 업무를 기꺼이 떠맡았다. 하지만 자신의 아이돌 활동을 이어가면서 각양각색의 신인들까지 지도하려니, 과도한 업무량에 노엘리는 조금 지쳐 버렸다. 그래도 아이돌이자 선배인 그녀가 낙담한 모습을 남들에게 보일 수는 없는 법! 설령 그런 순간이 온다 하더라도, 가장 친한 사람들 앞에서만 그럴 뿐! 소녀 아이돌 블랙앤화이트 노엘리는 절대 물러서지 않고, 완전히 새로운 모습으로 도전에 맞설 것이다!\n\n『어쩌면 좋지, 여기서 실수라도 했다간... 나나미~ 빨리 나 좀 도와줘~』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/07/08",
    essence: UnitEssence[UnitCode.se_noel],
    thumbnail: UnitEssence[UnitCode.se_noel],
    selection: UnitSelection[UnitCode.se_noel],
    clothes: UnitFullImage[UnitCode.se_noel],
    tagList: [],
    otherVersion: [ UnitCode.noel, UnitCode.s_noel, UnitCode.w_noel, UnitCode.c_noel ],
    initHP: 4214.4,
    initATK: 876.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.se_noel],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}

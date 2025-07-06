import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10139: Unit = {
    ID: "10139",
    metaCode: "p_tyrella",
    prefix: {
        [Locale.tc]: "不健全遐想",
        [Locale.sc]: "不健全遐想",
        [Locale.en]: "Delusional Rival",
        [Locale.jp]: "不健全な妄想",
        [Locale.kr]: "불건전한 사색"
    },
    name: {
        [Locale.tc]: "托特拉",
        [Locale.sc]: "托特拉",
        [Locale.en]: "Tyrella",
        [Locale.jp]: "トトラ",
        [Locale.kr]: "토타라"
    },
    abbreviation: {
        [Locale.tc]: [ "睡托" ],
        [Locale.sc]: [ "睡托" ],
        [Locale.en]: [ "P.Tyrella" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "불타라" ]
    },
    background: {
        [Locale.tc]: `為了打倒邪惡的魔王凱薩，托特拉潛入反派勢力居住的城堡，伺機而動，對魔王發起了一次又一次的挑戰。雖然每次戰敗都會被凱薩做色色的事情，而且從來都沒有贏過，但身為愛與正義的魔法少女，她是絕對不會放棄的！某天，托特拉聽見反魔王聯盟的好夥伴露露說，她想要舉辦一場睡衣派對。為了支援自己的夥伴，她當然沒有任何猶豫，馬上答應一起幫忙。雖然露露借給她的睡衣不知為何地過於暴露，讓她感到有點難為情，不過，這並不是問題！身為正義的魔法少女，今晚，她也要給朋友們散播滿滿的愛與勇氣！\n\n『大家！一起來參加露露舉辦的睡衣派對吧！』`,
        [Locale.sc]: `为了打倒邪恶的魔王凯萨，托特拉潜入反派势力居住的城堡，伺机而动，对魔王发起了一次又一次的挑战。虽然每次战败都会被凯萨做色色的事情，而且从来都没有赢过，但身为爱与正义的魔法少女，她是绝对不会放弃的！某天，托特拉听见反魔王联盟的好伙伴露露说，她想要举办一场睡衣派对。为了支援自己的伙伴，她当然没有任何犹豫，马上答应一起帮忙。虽然露露借给她的睡衣不知为何地过于暴露，让她感到有点难为情，不过，这并不是问题！身为正义的魔法少女，今晚，她也要给朋友们散播满满的爱与勇气！\n\n『大家！一起来参加露露举办的睡衣派对吧！』`,
        [Locale.en]: `With her mind set on taking down Caesar, Tyrella infiltrates her nemesis' palace, launching challenge after challenge against the Archdemon. Though she loses against him time and time again, as a proud Magical Knight, Tyrella is not one to give up so easily! One day, she hears her dear friend and anti-Caesar ally Lulu is planning to throw a big pajama party. She immediately agrees to take part, of course, if only to support her cohort whenever duty calls. Although the pajamas Lulu lent her are a little too revealing for her taste, she still tries to shake off her embarrassment and gladly wears them to stick to the theme of the party! Tyrella is a Magical Knight, after all! Duty calls, and her beautiful friends need cheering up!\n\n"C'mon, everybody! It's time to have some pajama funsies at Lulu's!"`,
        [Locale.jp]: `邪悪な魔王シーザーを倒すため、トトラは悪の勢力が巣食う城に潜入し、魔王に再び挑む機会をうかがっていた。負けるたびにシーザーにエッチなことをされ、一回も勝ったことのないトトラだが、愛と正義の魔法少女として、決してあきらめようとはしないのである！ある日、トトラは反魔王同盟の仲間ルルがパジャマパーティを開くことを知る。仲間を応援するため、トトラは躊躇することなく手伝いをすることにした。ルルが貸してくれたパジャマは露出が激しくて少し恥ずかしかったが、そんなことは問題ではない！正義の魔法少女として、今夜トトラはたくさんの愛と勇気を仲間たちに届けるのだ！\n\n『みんな！ ルルのパジャマパーティにおいでよ！』`,
        [Locale.kr]: `사악한 마왕 시저를 쓰러뜨리기 위해 악당이 사는 성에 잠입하여 기회를 노리던 토타라는 마왕에게 거듭 도전하게 된다. 비록 매번 패배하여 시저에게 야한 짓을 당했고 한 번도 이긴 적이 없던 그녀였지만, 사랑과 정의의 마법소녀로서 절대 포기하지 않았다! 어느 날, 토타라는 반마왕연맹의 친구 루루로부터 파자마 파티를 열고 싶다는 이야기를 듣게 되었고. 자신의 친구를 지원하기 위해 조금도 주저하지 않고 그녀를 도와주기로 약속한다. 루루가 빌려 준 잠옷은 노출이 무척 심해 민망하기까지 했지만, 그건 문제가 아니다! 정의의 마법소녀로서 오늘 밤, 그녀는 친구들에게 사랑과 용기를 듬뿍 심어줘야 한다!\n\n『모두들! 루루가 개최한 파자마 파티에 참여하세요!』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/04/02",
    essence: UnitEssence[UnitCode.p_tyrella],
    thumbnail: UnitEssence[UnitCode.p_tyrella],
    selection: UnitSelection[UnitCode.p_tyrella],
    clothes: UnitFullImage[UnitCode.p_tyrella],
    tagList: [],
    otherVersion: [ UnitCode.tyrella ],
    initHP: 0,
    initATK: 0,
    puzzle: [],
    outfits: [],
    skillSet: []
}
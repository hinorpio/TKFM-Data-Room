import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10074: Unit = {
    ID: "10074",
    metaCode: "ichika",
    prefix: {
        [Locale.tc]: "雪姬",
        [Locale.sc]: "雪姬",
        [Locale.en]: "Yuki-Hime",
        [Locale.jp]: "雪姫",
        [Locale.kr]: "유키히메"
    },
    name: {
        [Locale.tc]: "初華",
        [Locale.sc]: "初华",
        [Locale.en]: "Ichika",
        [Locale.jp]: "初華",
        [Locale.kr]: "이치카"
    },
    abbreviation: {
        [Locale.tc]: [ "雪姬" ],
        [Locale.sc]: [ "雪姬" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `烈日國的居民一定都聽過一段故事：「在遙遠的雪山山頂，盛開著稀有且能實現願望的寒冰之花，唯有心地善良的人才能通過雪姬的考驗得到它，不敬的盜採者將受到懲罰，在孤獨的寒冷中走向死亡。」初華，便是人們口中的雪姬，她其實是一出生時就帶著強烈寒冰體質的妖怪。為了避免與生俱來的寒冰體質造成傷害，因此才定居在環境惡劣的雪山上，與世間保持距離。由於家喻戶曉的傳說，每天來訪雪山的人數不斷增多，且都帶著「要摘到寒冰之花」的意圖前來。初華不勝其擾，所以偶爾會嚴肅地給予懲罰，要來訪者適可而止。\n\n『雪女一族的體內寄宿著冰雪之力，太靠近可是會受傷的，麻煩您退開一些。』`,
        [Locale.sc]: `烈日国的居民一定都听过一段故事：「在遥远的雪山山顶，盛开着稀有且能实现愿望的寒冰之花，唯有心地善良的人才能通过雪姬的考验得到它，不敬的盗采者将受到惩罚，在孤独的寒冷中走向死亡。」初华，便是人们口中的雪姬，她其实是一出生时就带着强烈寒冰体质的妖怪。为了避免与生俱来的寒冰体质造成伤害，因此才定居在环境恶劣的雪山上，与世间保持距离。由于家喻户晓的传说，每天来访雪山的人数不断增多，且都带着「要摘到寒冰之花」的意图前来。初华不胜其扰，所以偶尔会严肃地给予惩罚，要来访者适可而止。\n\n『雪女一族的体内寄宿着冰雪之力，太靠近可是会受伤的，麻烦您退开一些。』`,
        [Locale.en]: `There exists an ancient tale well-known to the people of Isorath… "Deep in the snowy mountains lies a rare flower of pure ice possessing the power to grant wishes… Only those pure of heart are able to pass the Yuki-Hime's test and obtain the flower. Any foolish enough to try any trickery are doomed to a freezing and painful death." The Yuki-Hime of legend is none other than Ichika, a yokai born with the power of ice flowing through her veins. With the power to cause immense icy disasters, Ichika made the decision to reside in the complete seclusion of the mountains, far away from any to whom she could cause harm. Due to the well-known ancient tale, people have long flocked to the mountains, all with the intention of seeking out the wish-granting flower of legend. However, having reached the limits of her patience, Ichika often releases her icy powers to send these greedy troublemakers packing.\n\n"Yuki-onna possess the powers of ice and snow. Getting so close can be dangerous, so please keep your distance."`,
        [Locale.jp]: `烈陽国に住む者なら誰でも、このような噂を聞いたことがある。「僻地にある雪山の頂上には、夢を叶えるというとても珍しい氷の花が咲いている。心優しいものだけが、雪姫の試練を通過して雪の花を得ることができる。邪な心を持つ密猟者は罰を受け、冷たい雪の中で孤独に死ぬことになるだろう」初華こそ、そのおとぎ話に出てくる雪姫である。彼女は生まれた時から異常な体質を持つ妖怪なのだ。生まれつきの雪女体質による被害が出るのを避けるために、劣悪な環境である雪山に住んで、世間から隔離している。しかし噂は広まる一方で、「氷の花を手に入れる」ために雪山を訪れる人々が増えていったのだった。我慢できなくなった初華は時々貪欲な来訪者を懲らしめている。\n\n『雪女の一族は体内に氷の力を宿しているので、近付きすぎると怪我をしますよ。少し離れたほうがいいです』`,
        [Locale.kr]: `태양국의 백성이라면 모두 이 이야기를 들은 적이 있을 것이다: "머나먼 설산 정상에 소원을 들어주는 희귀한 서리꽃이 피어있다. 오직 마음씨가 착한 사람만이 유키히메의 시련을 통과하고 꽃을 얻을 수 있다. 불경한 자에게는 고독한 추위 속에서의 죽음이란 형벌만이 기다리고 있을 것이다." 이치카는 예로부터 사람들의 입에 오르내리는 유키히메로, 사실 그녀는 날 때부터 강력한 얼음 체질을 가지고 태어난 요괴이다. 타고난 체질 때문에 열악한 환경의 설산에 정착하게 되었고 세상과 거리를 두게 되었다. 사람들 사이에 퍼진 그 전설 때문에, 매일 「휘귀한 서리꽃 따기」를 위해 설산을 오르는 사람들이 갈수록 계속 늘어나게 되었다. 유키히메는 그런 교란을 참지 못했고 이따금씩 그들에게 심한 벌을 줘 방문객들이 더이상 접근하지 못하게 했다.\n\n『설녀 일족, 체내에 얼음과 눈의 힘을 품고 있다. 너무 가까이 가면 다칠 수도 있으니 한 발 물러나 주시길.』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/07/13",
    essence: UnitEssence[UnitCode.ichika],
    thumbnail: UnitEssence[UnitCode.ichika],
    selection: UnitSelection[UnitCode.ichika],
    clothes: UnitFullImage[UnitCode.ichika],
    tagList: [],
    otherVersion: [ UnitCode.x_ichika ],
    initHP: 3792,
    initATK: 929.6,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.ichika],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
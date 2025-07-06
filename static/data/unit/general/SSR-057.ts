import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10063: Unit = {
    ID: "10063",
    metaCode: "emily",
    prefix: {
        [Locale.tc]: "傳說女僕",
        [Locale.sc]: "传说女僕",
        [Locale.en]: "Legendary Maidservant",
        [Locale.jp]: "伝説のメイド",
        [Locale.kr]: "전설의 메이드"
    },
    name: {
        [Locale.tc]: "艾蜜莉",
        [Locale.sc]: "艾蜜莉",
        [Locale.en]: "Emily",
        [Locale.jp]: "エミリー",
        [Locale.kr]: "에밀리"
    },
    abbreviation: {
        [Locale.tc]: [ "女僕", "大女僕", "傳說", "女僕長" ],
        [Locale.sc]: [ "女仆", "大女仆", "传说", "女仆长" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `傳說中的女僕，窮盡一生鑽研女僕技巧，也是教導艾可女僕技的師傅。艾蜜莉在世界各地流浪尋找有女僕資質的原石，當找到滿意的原石以後，她會傾盡所有最嚴厲的方式將原石磨練成優秀的女僕。她至今為止最高的傑作即為艾可，但艾可卻在中途放棄了女僕修業，消失無蹤。在艾可離開後，振作起來的艾蜜莉繼續踏上女僕訓練師之路，直到某天，她聽到了艾可在凱薩軍的傳聞……\n\n『女僕之道，浩瀚無垠。』`,
        [Locale.sc]: `传说中的女仆，穷尽一生钻研女仆技巧，也是教导艾可女仆技的师傅。艾蜜莉在世界各地流浪寻找有女仆资质的原石，当找到满意的原石以后，她会倾尽所有最严厉的方式将原石磨练成优秀的女仆。她至今为止最高的杰作即为艾可，但艾可却在中途放弃了女仆修业，消失无踪。在艾可离开后，振作起来的艾蜜莉继续踏上女仆训练师之路，直到某天，她听到了艾可在凯萨军的传闻……\n\n『女仆之道，浩瀚无垠。』`,
        [Locale.en]: `A Legendary Maidservant who has devoted her entire life to the study of her profession, she is also Aiko's guru in all maid matters. Emily searches far and wide for diamonds in the rough, and when she finds one that satisfies her, she uses every means at her disposal to polish her into a truly outstanding maidservant. Until now, Aiko had been her masterpiece. However, Aiko abandoned her training midway, and disappeared without a trace. After Aiko left, Emily was shaken but continued along the road to become a trainer of maidservants, until one day she heard that Aiko was with Caesar's army...\n\n"The Way of the Maid is vast and boundless."`,
        [Locale.jp]: `伝説のメイド。メイドの技術を磨くために一生を捧げてきた。アイカをメイドとして教育した師匠でもある。エミリーは世界各地を飛び回って、メイドの素質を持つ原石を探しており、素質のある者を見つけると、非常に厳しい教育で原石を優秀なメイドに磨き上げるのだ。エミリーがこれまで教育してきた娘の中でアイカは最も優秀なメイドなのだが、アイカは途中でメイド修行を投げ出して、行方をくらましてしまったのである。アイカがいなくなったショックから立ち直ったエミリーは、メイド教育者の道を歩み続けたのだが、ある日、風の便りでアイカがシーザーの軍隊にいるということを知る……\n\n『メイド道とは、果てしなき道を行くことなり』`,
        [Locale.kr]: `전설의 메이드. 메이드의 기술을 연마하기 위해 평생을 바쳐 왔다. 아이카를 메이드로 교육시킨 스승이기도 하다. 에밀리는 세계 곳곳을 누비며 메이드의 소질을 지닌 원석같은 사람을 찾아 다닌다. 만일 소질이 있는 사람을 발견하면, 원석을 갈고 닦 듯이 매우 엄격한 교육으로 그녀를 훈련시킨다. 지금까지 에밀리가 가르쳐온 아이 중 가장 우수한 메이드인 아이카, 그녀는 도중에 메이드 수행을 포기하고 행방을 감추고 말았다. 아이카가 사라진 충격을 딛고 일어선 에밀리는 계속 메이드장의 길을 걷지만, 어느날 풍문으로 아이카가 시저의 군대에 소속되어 있는것을 듣게된다......\n\n『메이드길이란 무한하고 광활한 길.』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2022/08/24",
    essence: UnitEssence[UnitCode.emily],
    thumbnail: UnitEssence[UnitCode.emily],
    selection: UnitSelection[UnitCode.emily],
    clothes: UnitFullImage[UnitCode.emily],
    tagList: [
        TagID.ELEMENT_LIGHT,
        TagID.POSITION_SUPPORTER,
        TagID.SPECIES_HUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_GIANT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_RECOVERY,
        TagID.OTHER_SUPPORT,
    ],
    otherVersion: [],
    initHP: 3388.796781159074,
    initATK: 943.9978070037291,
    puzzle: [ PuzzleCode.EVENT_2023_XMAS_2 ],
    outfits: [],
    skillSet: []
}
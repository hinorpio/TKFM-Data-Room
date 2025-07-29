import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10067: Unit = {
    ID: "10067",
    metaCode: "tm_minayomi",
    prefix: {
        [Locale.tc]: "新春",
        [Locale.sc]: "新春",
        [Locale.en]: "True Moon",
        [Locale.jp]: "新春",
        [Locale.kr]: "신춘"
    },
    name: {
        [Locale.tc]: "神無雪",
        [Locale.sc]: "神无雪",
        [Locale.en]: "Minayomi",
        [Locale.jp]: "神無雪",
        [Locale.kr]: "미나요미"
    },
    abbreviation: {
        [Locale.tc]: [ "春劍" ],
        [Locale.sc]: [ "春剑" ],
        [Locale.en]: [ "Tm.Mina", "Tm.Minayomi" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "신미나" ]
    },
    background: {
        [Locale.tc]: `換下了便於活動的輕裝，換上如大家閨秀般的和服，神無雪出席了烈日國的慶典。撐著和傘，漫步花道之上，神無雪女性的一面被大幅強調。然而，若以為她收起了利刃，變為無害的少女，絕對是大錯特錯。別於腰間的長刃、藏於傘中的短刃會在剎那間出鞘。\n\n『正月期間，不動刀劍，平心靜氣，省身克己。』`,
        [Locale.sc]: `换下了便于活动的轻装，换上如大家闺秀般的和服，神无雪出席了烈日国的庆典。撑着和伞，漫步花道之上，神无雪女性的一面被大幅强调。然而，若以为她收起了利刃，变为无害的少女，绝对是大错特错。别于腰间的长刃、藏于伞中的短刃会在刹那间出鞘。\n\n『正月期间，不动刀剑，平心静气，省身克己。』`,
        [Locale.en]: `Minayomi is joining in on the True Moon festivities in traditional garb this year. With her war fan, Minayomi strides down the festival streets showing her feminine side. But if you think she's really put away her blade, like tradition entails, then you'd be dead wrong. Her sword, duly tucked away in her kimono, shall sparkle in the festival sunlight before long!\n\n"Calm down, Minayomi... flow like the river... like the river..."`,
        [Locale.jp]: `いつも動きやすく軽やかな服装をしている神無雪だが、今日はお淑やかな和服に着替えて、烈陽国の祝典に参加した。和傘を手に花道を歩くその姿に、神無雪の女性らしい一面を再認識させられる。だからと言って彼女が無害な少女になったと思うのは大きな間違いだ。刀を腰に下げていないため、刀を携帯していないように見えるが、和傘を鞘にして短刀を隠してあるのだ。\n\n『正月は刀を置き、身を修め徳を涵養する』`,
        [Locale.kr]: `활동하기 편한 옷을 입어왔던 미나요미. 이번엔 모두처럼 기모노를 입은 채 태양국 축제에 참가하게 됐다. 양산을 들고 꽃길을 거니는 미나요미의 모습에서 한층 더 여성스러워진 느낌이 물씬 느껴진다. 하지만 겉모습이 바뀌었다고 해서 검을 휘둘렀던 그녀의 본성 역시 연약한 소녀가 되었을 거라 생각하면 그건 대단한 착각이다. 허리 춤에 칼을 차고 있지 않더라도, 양산에 숨겨져 있는 단도의 칼날이 언제든지 튀어나올 수도 있으니까.\n\n『정월 기간 동안은 검을 쓰지 않고 마음의 안정과 내적 성찰을 통해 자신의 한계를 극복할 테다.』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/01/16",
    essence: UnitEssence[UnitCode.tm_minayomi],
    thumbnail: UnitEssence[UnitCode.tm_minayomi],
    selection: UnitSelection[UnitCode.tm_minayomi],
    clothes: UnitFullImage[UnitCode.tm_minayomi],
    tagList: [],
    otherVersion: [ UnitCode.minayomi, UnitCode.d_minayomi ],
    initHP: 3484.8,
    initATK: 1011.2,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.tm_minayomi],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
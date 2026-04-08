import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10199: Unit = {
    ID: "10199",
    metaCode: "egypt_fiora",
    prefix: {
        [Locale.tc]: "神諭宣告",
        [Locale.sc]: "神谕宣告",
        [Locale.en]: "Oracle's Edict",
        [Locale.jp]: "神託の宣告",
        [Locale.kr]: "신탁의 선고"
    },
    name: {
        [Locale.tc]: "菲歐菈",
        [Locale.sc]: "菲欧菈",
        [Locale.en]: "Fiora",
        [Locale.jp]: "フィオラ",
        [Locale.kr]: "피오라"
    },
    abbreviation: {
        [Locale.tc]: [ "埃菲", "埃聖" ],
        [Locale.sc]: [ "埃菲", "埃圣" ],
        [Locale.en]: [ "Egypt.Fiora" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "신오라" ]
    },
    background: {
        [Locale.tc]: `神是慈愛的，是寬容的，是無私的，祂的光芒必將照耀世間，破除一切黑暗。因此，將神的光輝在人世間傳播，就是菲歐菈這為虔誠的神官長應盡的職責。所以當菲歐菈因為一場意外，來到了被黑暗籠罩的陌生世界時，她自然不會放任那些被邪教徒欺壓的人們不管。在同伴的協助下，她將代表光明，向那些被黑暗污染的惡徒發起決鬥。\n\n『不管在哪裡，我都會將神的福音帶給所有迷途的羔羊。』`,
        [Locale.sc]: `神是慈爱的，是宽容的，是无私的，祂的光芒必将照耀世间，破除一切黑暗。因此，将神的光辉在人世间传播，就是菲欧菈这为虔诚的神官长应尽的职责。所以当菲欧菈因为一场意外，来到了被黑暗笼罩的陌生世界时，她自然不会放任那些被邪教徒欺压的人们不管。在同伴的协助下，她将代表光明，向那些被黑暗汙染的恶徒发起决斗。\n\n『不管在哪里，我都会将神的福音带给所有迷途的羔羊。』`,
        [Locale.en]: `God is loving, merciful, and selfless. His radiance shall illuminate the world and shatter all darkness. For Fiora, a devout High Priestess, her bounden duty is to spread the glory of the God of Sex throughout the mortal realm. When an unexpected incident transports her to a strange land shrouded in shadows, her faith remains unshaken; she cannot stand by while the innocent are oppressed by depraved cultists. With the support of her allies, she stands as a beacon of light, ready to challenge those tainted by darkness to a duel.\n\n"No matter where I find myself, I shall deliver God's gospel to all lost lambs."`,
        [Locale.jp]: `神は慈愛に満ち、寛容で、無私である。その光は必ずや世界を照らし、あらゆる闇を打ち砕くだろう。ゆえに、セックスの神の輝きを人の世に広めることこそ、敬虔な神官長フィオラが果たすべき使命である。フィオラがひょんなことから、闇に覆われた見知らぬ世界へと迷い込んだ時、彼女は邪教徒に虐げられた人々を見捨てることなど、到底できなかった。仲間の助けを借りながら、彼女は光の使者として、闇に染まった悪党にデュエルを挑む。\n\n『どこにいようとも、迷えるすべての子羊たちに、神の福音を届けてみせます』`,
        [Locale.kr]: `신은 자애롭고 관대하며 사심이 없으시니, 그분의 광채는 반드시 세상을 비추어 모든 어둠을 타파할 것이다. 그러므로 신의 광휘를 인간 세상에 전파하는 것은, 경건한 대신관으로서 피오라가 마땅히 해야 할 책무이다. 피오라는 예기치 못한 사고로 어둠에 휩싸인 낯선 세계에 도착했을 때에도, 사교도들에게 탄압받는 사람들을 결코 외면하지 않았다. 동료들의 도움 아래, 그녀는 빛을 대표하여 어둠에 오염된 악당들에게 듀얼을 신청하게 되는데.\n\n『어디에 있든, 저는 길을 잃은 모든 어린 양에게 신의 복음을 전할 것입니다.』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2026/04/08",
    essence: UnitEssence[UnitCode.egypt_fiora],
    thumbnail: UnitEssence[UnitCode.egypt_fiora],
    selection: UnitSelection[UnitCode.egypt_fiora],
    clothes: UnitFullImage[UnitCode.egypt_fiora],
    tagList: [],
    otherVersion: [ UnitCode.fiora, UnitCode.hm_fiora, UnitCode.s_fiora, UnitCode.ny_fiora ],
    initHP: 3908.8,
    initATK: 945.6,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.egypt_fiora],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
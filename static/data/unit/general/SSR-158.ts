import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10187: Unit = {
    ID: "10187",
    metaCode: "lutty",
    prefix: {
        [Locale.tc]: "精靈女僕",
        [Locale.sc]: "精灵女仆",
        [Locale.en]: "Elf Maid",
        [Locale.jp]: "エルフメイド",
        [Locale.kr]: "엘프 메이드"
    },
    name: {
        [Locale.tc]: "露媞",
        [Locale.sc]: "露媞",
        [Locale.en]: "Lutty",
        [Locale.jp]: "ルティ",
        [Locale.kr]: "루티"
    },
    abbreviation: {
        [Locale.tc]: [ "小春" ],
        [Locale.sc]: [ "小春" ],
        [Locale.en]: [ "Koharu" ],
        [Locale.jp]: [ "コハル" ],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `為了成為全迷霧森林最偉大的精靈，美麗漂亮溫柔大方的精靈王賽露西亞的專屬女僕，露媞報名了艾可開設的女僕培訓班，努力學習各種家務技巧和打掃技術。在她的心目中，賽露西亞是最高貴、最厲害的精靈領袖，正因如此，她才完全無法理解為何賽露西亞會喜歡上魔王凱薩這種超級大變態。明明還有更多更好的選擇，為什麼偏偏選了這個又討厭又下流的男人呢？露媞始終百思不得其解，又或許，她永遠沒有得到解答的那一天。但不論如何，今天的她也會努力清掃賽露西亞大人周邊的環境，為了她最敬愛的主人，不管有多少困難，露媞都會全力以赴！\n\n『哼，你這個變態，離賽露西亞大人遠一點！』`,
        [Locale.sc]: `为了成为全迷雾森林最伟大的精灵，美丽漂亮温柔大方的精灵王赛露西亚的专属女僕，露媞报名了艾可开设的女僕培训班，努力学习各种家务技巧和打扫技术。在她的心目中，赛露西亚是最高贵、最厉害的精灵领袖，正因如此，她才完全无法理解为何赛露西亚会喜欢上魔王凯萨这种超级大变态。明明还有更多更好的选择，为什麽偏偏选了这个又讨厌又下流的男人呢？露媞始终百思不得其解，又或许，她永远没有得到解答的那一天。但不论如何，今天的她也会努力清扫赛露西亚大人周边的环境，为了她最敬爱的主人，不管有多少困难，露媞都会全力以赴！\n\n『哼，你这个变态，离赛露西亚大人远一点！』`,
        [Locale.en]: `To become the exclusive maid of the beautiful, gentle, and generous Elf Queen Salucia, the greatest elf in the Misty Forest, Lutty enrolls in Aiko's maid training class, diligently learning various household and cleaning techniques. In her mind, Salucia is the noblest and most powerful of elf leaders. It is precisely because of this that she cannot understand why her queen would fall for a pervert like Archdemon Caesar. With so many better options out there, why did she ever choose such a disgusting and vulgar brute? Deeply perplexed, perhaps Lutty will never find the answer... Despite all that, today she will work hard to clean up her queen's surroundings, for no matter how many difficulties she must face, Lutty shall give her all for her elf master's pleasure!\n\n"Hmph! Stay away from Queen Salucia, you absolute sicko!"`,
        [Locale.jp]: `霧の森で一番偉大なエルフ──美しく優雅なエルフ王、セルシア。彼女の専属メイドになりたいルティは、アイカが主催するメイド養成講座に応募し、家事や掃除の技術を一生懸命学んでいた。彼女にとってセルシアは、高貴で尊敬できるエルフのリーダー。だからこそ、どうしてそのセルシアが、あの変態魔王シーザーなんかを好きになったのか、まったく理解できなかった。もっと素敵な相手がいくらでもいるのに、どうしてあんな下品でイやらしい男を選んだのか。考えても考えても答えは出ず、おそらく永遠に分からないままだろう。それでも今日もルティは、セルシアの周りを綺麗に掃除する。最愛のご主人様のために、どんなに大変でも全力で頑張るのだ。\n\n『フンッ！この変態！セルシア様に近づかないで！』`,
        [Locale.kr]: `안개 숲에서 가장 위대한 엘프이자, 아름답고 온화하며 너그러운 엘프 왕 살루시아의 전속 메이드가 되기 위해, 루티는 아이카가 개설한 메이드 특훈반에 등록하여 각종 가사 스킬과 청소 테크닉을 열심히 배우고 있다. 그녀의 마음속에서 살루시아는 가장 고귀하고 뛰어난 엘프 지도자였기에, 왜 살루시아가 마왕 시저 같은 초대형 변태를 좋아하게 되었는지 도무지 이해할 수가 없었다. 분명 더 많고 좋은 선택지들이 있었을 텐데, 왜 하필 그런 혐오스럽고 저질스러운 남자를 선택했을까? 루티는 아무리 생각해도 도저히 이해할 수 없었고, 어쩌면 그녀는 영원히 그 답을 얻지 못할지도 모른다. 하지만 어떤 일이 있어도, 오늘도 그녀는 살루시아의 주변 환경을 열심히 청소할 것이다. 가장 존경하는 주인을 위해서라면, 아무리 많은 어려움이 있더라도 루티는 전력을 다할 것이다!\n\n『흥, 이 변태야, 살루시아 님한테서 멀리 떨어져!』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/11/12",
    essence: UnitEssence[UnitCode.lutty],
    thumbnail: UnitEssence[UnitCode.lutty],
    selection: UnitSelection[UnitCode.lutty],
    clothes: UnitFullImage[UnitCode.lutty],
    tagList: [],
    otherVersion: [],
    initHP: 3995.2,
    initATK: 763.2,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.lutty],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
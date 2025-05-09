import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10154: Unit = {
    ID: "10154",
    metaCode: "m_nanami",
    prefix: {
        [Locale.tc]: "甜蜜女僕",
        [Locale.sc]: "甜蜜女仆",
        [Locale.en]: "Sweet Maid",
        [Locale.jp]: "甘いメイド",
        [Locale.kr]: "달콤한 메이드"
    },
    name: {
        [Locale.tc]: "星空奈奈美",
        [Locale.sc]: "星空奈奈美",
        [Locale.en]: "Nanami",
        [Locale.jp]: "星空ななみ",
        [Locale.kr]: "나나미"
    },
    abbreviation: {
        [Locale.tc]: [ "僕奈", "暗奈" ],
        [Locale.sc]: [ "仆奈", "暗奈" ],
        [Locale.en]: [ "M.Nanami" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "메나미" ]
    },
    background: {
        [Locale.tc]: `作為最完美的美少女偶像，不管是要扮演消防員、警察還是護士，這些通通都難不倒奈奈美，為了宣傳新推出的音樂專輯，奈奈美決定和債主巴爾合作，擔任偶像女僕咖啡廳的一日快閃店長。只不過…自己身旁的那個夥伴實在是太難帶領了，這讓奈奈美有點頭痛。但是沒關係，因為星空奈奈美可以克服所有挑戰，為了每一位親愛的主人，奈奈美一定會努力加油，克服所有困難。星空奈奈美～燦爛閃耀☆\n\n『親愛的主人～請盡情享受奈奈美的服務吧～』`,
        [Locale.sc]: `作为最完美的美少女偶像，不管是要扮演消防员、警察还是护士，这些通通都难不倒奈奈美，为了宣传新推出的音乐专辑，奈奈美决定和债主巴尔合作，担任偶像女僕咖啡厅的一日快闪店长。只不过…自己身旁的那个伙伴实在是太难带领了，这让奈奈美有点头痛。但是没关係，因为星空奈奈美可以克服所有挑战，为了每一位亲爱的主人，奈奈美一定会努力加油，克服所有困难。星空奈奈美～灿烂闪耀☆\n\n『亲爱的主人～请尽情享受奈奈美的服务吧～』`,
        [Locale.en]: `As the perfect beautiful idol girl, Nanami can easily take on any role, whether a firefighter, police officer, or nurse. To promote her newly released music album, she decides to collaborate with her creditor, Ba'al, to serve as a one-day pop-up manager at an idol maid café. However... the partner who sticks by her side is difficult to keep in check, which gives Nanami a bit of a headache. But that's fine because this idol can overcome any challenge working tirelessly for every dear master who seeks her services. Idol Nanami~! The shiniest star on stage☆\n\n"Dearest masters~ please enjoy Nanami's services to the fullest~"`,
        [Locale.jp]: `ななみは完璧な美少女アイドルとして、消防士や警察、看護師など、どんなコスプレでもお手のものだ。最新の音楽アルバムを宣伝するため、ななみは債権者―バルと協力し、一日限定のアイドルメイドカフェの店長になった。とはいえ……隣にいるパートナーがあまりにも手強く、少々頭を悩ませている様子のななみ。でも心配はいらない。星空ななみならどんな困難も乗り越えられるはずだ。大切なご主人様のために、ななみは困難に立ち向かい、全力で頑張るのであった。星空ななみ～シャイニングスター☆\n\n『ご主人様～、ななみのサービスをじっくり味わってね～』`,
        [Locale.kr]: `최고의 미소녀 아이돌로서, 소방관, 경찰, 간호사 어떤 역할이든 완벽하게 소화해내는 나나미. 새로 출시한 음반을 홍보하기 위해 나나미는 채권자 바알과 손잡고, 하루 동안 아이돌 메이드 카페의 깜짝 점장으로 나서기로 결심했다. 하지만... 함께하는 파트너는 정말 대하기 어려워서 나나미의 골치를 썩게 한다. 그래도 괜찮아! 나나미는 모든 도전을 극복할 수 있으니까! 사랑하는 주인님들을 위해, 나나미는 반드시 최선을 다해 모든 어려움을 헤쳐나갈 거야. 반짝반짝 빛나는 나나미~☆\n\n『사랑하는 주인님~ 나나미의 서비스를 마음껏 즐겨주세요~』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2024/11/13",
    essence: UnitEssence[UnitCode.m_nanami],
    thumbnail: UnitEssence[UnitCode.m_nanami],
    selection: UnitSelection[UnitCode.m_nanami],
    clothes: UnitFullImage[UnitCode.m_nanami],
    tagList: [],
    otherVersion: [ UnitCode.nanami ],
    puzzle: [],
    outfits: [],
    skillSet: []
}
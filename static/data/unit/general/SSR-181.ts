import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10210: Unit = {
    ID: "10210",
    metaCode: "ciel",
    prefix: {
        [Locale.tc]: "犬犬冒險者",
        [Locale.sc]: "犬犬冒险者",
        [Locale.en]: "Doggy Adventurer",
        [Locale.jp]: "ワンワン冒険者",
        [Locale.kr]: "멍멍이 모험가"
    },
    name: {
        [Locale.tc]: "希耶兒",
        [Locale.sc]: "希耶儿",
        [Locale.en]: "Ciel",
        [Locale.jp]: "シエル",
        [Locale.kr]: "시엘"
    },
    abbreviation: {
        [Locale.tc]: [ "福瑞" ],
        [Locale.sc]: [ "福瑞" ],
        [Locale.en]: [ "Furry" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `據說獸人中偶爾會出現血統比較濃厚、遺傳了更多野獸特徵的後代。希耶兒正是這樣的犬人族，不只是外觀，她也有著比一般犬人更加靈敏的聽覺與嗅覺，還有犬族般的跑步速度。但這些特質卻讓她感到自己被村裡的人差別對待，於是希耶兒決定離開村莊。在聽聞某個強大冒險者隊伍的事蹟後，心生憧憬的希耶兒也決定成為一位冒險者，並尋找志同道合的夥伴組成熱心助人的冒險者戰隊。\n\n『汪嗚—人家要成為帥氣的冒險者！讓大家對我刮目相看！』`,
        [Locale.sc]: `据说兽人中偶尔会出现血统比较浓厚、遗传了更多野兽特徵的后代。希耶儿正是这样的犬人族，不只是外观，她也有着比一般犬人更加灵敏的听觉与嗅觉，还有犬族般的跑步速度。但这些特质却让她感到自己被村里的人差别对待，于是希耶儿决定离开村庄。在听闻某个强大冒险者队伍的事蹟后，心生憧憬的希耶儿也决定成为一位冒险者，并寻找志同道合的伙伴组成热心助人的冒险者战队。\n\n『汪呜—人家要成为帅气的冒险者！让大家对我刮目相看！』`,
        [Locale.en]: `It is said that among beastfolk, offspring with a stronger bloodline who inherit more beastly traits occasionally appear. Ciel is exactly that kind of canine. Beyond her appearance, she also possesses sharper hearing and a sense of smell than normal dogfolk, as well as their running speed. However, these traits make her feel discriminated against by her fellow villagers, so Ciel decides to leave her community. After hearing about the deeds of a certain powerful adventuring party, an admiring Ciel also decides to become an adventurer and search for like-minded companions to form a helpful adventuring party.\n\n"Woof~ Being a cool adventurer is just the life for me! Then everyone will finally see me in a whole new light!"`,
        [Locale.jp]: `獣人の中には、血が濃く、獣の特徴を多く受け継いだ子孫が時々現れると言われている。シエルはまさにそのようなコボルトで、見た目だけでなく、一般的なコボルトよりも鋭い聴覚と嗅覚、そして犬族のような足の速さも持っている。しかし、こうした特徴のせいで村の人々から差別的に扱われていると感じ、シエルは村を離れることを決意した。とある強力な冒険者パーティーの活躍を耳にして憧れを抱いたシエルは、自分も冒険者になろうと決め、志を同じくする仲間を探して、人助けに熱心な冒険者レンジャーを結成することにしたのだった。\n\n『ワオ～ン！わたしもかっこいい冒険者になる！みんなに見直してもらうんだから！』`,
        [Locale.kr]: `수인 중에는 간혹 혈통이 유독 짙어서 야수의 특징을 더 많이 물려받은 후손이 태어난다고 한다. 시엘은 바로 그런 코볼트족으로, 외모뿐만 아니라 일반적인 코볼트보다 훨씬 예리한 청각과 후각을 지녔으며, 코볼트족 특유의 빠른 달리기 실력까지 갖추고 있다. 하지만 이러한 특징들 때문에 마을 사람들에게 차별받고 있다고 느낀 시엘은 결국 마을을 떠나기로 결심했다. 어느 강력한 모험가 팀의 활약상을 전해 듣고 동경심을 품게 된 시엘은 자신도 모험가가 되기로 결심했고, 마음이 맞는 동료들을 찾아 사람들을 돕는 모험가 팀을 결성했다.\n\n『멍멍—난 멋진 모험가가 될 거야! 모두가 날 다시 보게 만들 거라고!』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/08/05",
    essence: UnitEssence[UnitCode.ciel],
    thumbnail: UnitEssence[UnitCode.ciel],
    selection: UnitSelection[UnitCode.ciel],
    clothes: UnitFullImage[UnitCode.ciel],
    tagList: [],
    otherVersion: [],
    initHP: 3980.8,
    initATK: 928,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.ciel],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}

import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10205: Unit = {
    ID: "10205",
    metaCode: "s_nanami",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "星空奈奈美",
        [Locale.sc]: "星空奈奈美",
        [Locale.en]: "Nanami",
        [Locale.jp]: "星空ななみ",
        [Locale.kr]: "나나미"
    },
    abbreviation: {
        [Locale.tc]: [ "夏奈" ],
        [Locale.sc]: [ "夏奈" ],
        [Locale.en]: [ "S.Nanami" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수나미" ]
    },
    background: {
        [Locale.tc]: `夏天到了，奈奈美原本打算趁這個機會和凱薩好好約會，再順便拍攝一些賣給粉絲的寫真照。但她做夢也沒想到的是，最後她們卻來到了一處白雪靄靄、全年被冰雪覆蓋的地方。難道好好的度假行程就要因此泡湯了嗎？當然沒有這回事，畢竟誰說在雪上不能穿泳裝呢？如果這樣就被打敗，那就太小看奈奈美了。因為不管到什麼地方，奈奈美都會是眾人的焦點，有她在地方，就是最熱情、最閃亮的盛夏。\n\n『凱薩，要把人家拍得漂亮一點唷～Yeah～』`,
        [Locale.sc]: `夏天到了，奈奈美原本打算趁这个机会和凯萨好好约会，再顺便拍摄一些卖给粉丝的写真照。但她做梦也没想到的是，最后她们却来到了一处白雪霭霭、全年被冰雪复盖的地方。难道好好的度假行程就要因此泡汤了吗？当然没有这回事，毕竟谁说在雪上不能穿泳装呢？如果这样就被打败，那就太小看奈奈美了。因为不管到什么地方，奈奈美都会是众人的焦点，有她在地方，就是最热情、最闪亮的盛夏。\n\n『凯萨，要把人家拍得漂亮一点唷～Yeah～』`,
        [Locale.en]: `With summer arriving, Nanami originally planned to take this opportunity to go on a nice date with Caesar, while also taking some gravure photos to sell to her fans. But never in her wildest dreams did she expect that they would ultimately end up in a snow-covered place blanketed in ice and snow all year round. Was her lovely vacation itinerary going to go down the drain just like that? Of course not. After all, who says you can't wear a swimsuit in the snow? If she were defeated by something like this, then everyone would be seriously underestimating Nanami. Because no matter where she goes, Nanami will always be the center of attention. Wherever she is present, it becomes the most passionate, most brilliant midsummer.\n\n"Caesar, make sure to take pretty pics of me~ Yeah~"`,
        [Locale.jp]: `夏が訪れ、この機会にシーザーとデートを楽しみつつ、ファンに売りつけるためのグラビア写真の撮影も済ませる予定だったななみ。しかし行きついた先がまさか、雪の舞い散る、年中雪氷に覆われた場所だとは、さすがの彼女も夢にも思わなかった。せっかくのバカンスが、台無しになってしまうのだろうか？もちろんそんなわけがない。雪が降る中、水着を着ちゃいけないなんて、一体誰が決めたというのか？この程度でへこたれるようでは、ななみの名が廃る。どんな場所にいようとも、ななみは常にみんなの注目の的。彼女のいる場所こそが、最もアツく、最も輝く夏なのだから。\n\n『シーザー、あたしのこと可愛く撮ってよね～いえ～い』`,
        [Locale.kr]: `여름이 되자, 나나미는 시저와 제대로 데이트도 하고, 팬들에게 판매할 화보 사진도 촬영할 생각이었다. 하지만 그녀는 꿈에도 몰랐다. 마지막에 도착한 곳이 새하얀 눈으로 뒤덮인, 사계절 내내 얼어붙은 설원일 줄은. 설마 바캉스 계획이 이대로 물거품이 되어버리는 건 아닐까? 물론 그럴 리 없다. 눈밭이라고 수영복을 못 입으란 법은 없으니까. 이 정도로 포기했다면 나나미라고 할 수 없지. 어디를 가든 나나미는 모두의 시선을 사로잡는 존재! 그녀가 있는 곳이라면 가장 뜨겁고 눈부신 여름이 된다.\n\n『시저, 나 이쁘게 찍어줘야 해~ Yeah~』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/06/03",
    essence: UnitEssence[UnitCode.s_nanami],
    thumbnail: UnitEssence[UnitCode.s_nanami],
    selection: UnitSelection[UnitCode.s_nanami],
    clothes: UnitFullImage[UnitCode.s_nanami],
    tagList: [],
    otherVersion: [],
    initHP: 3440,
    initATK: 1073.6,
    puzzle: [ PuzzleCode.EVENT_2026_SUMMER_3 ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.s_nanami],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}

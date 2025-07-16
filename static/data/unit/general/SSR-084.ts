import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10118: Unit = {
    ID: "10118",
    metaCode: "s_fiora",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "菲歐菈",
        [Locale.sc]: "菲欧菈",
        [Locale.en]: "Fiora",
        [Locale.jp]: "フィオラ",
        [Locale.kr]: "피오라"
    },
    abbreviation: {
        [Locale.tc]: [ "夏菲" ],
        [Locale.sc]: [ "夏菲" ],
        [Locale.en]: [ "S.Fiora" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수오라" ]
    },
    background: {
        [Locale.tc]: `為了讓迷途的羔羊能在夏日的沙灘上脫去衣裳，擁抱性愛，聆聽性愛之神的福音。侍奉性愛之神的大主教菲歐菈來到沙灘上，和性愛天使聯手出擊，力求將性愛的歡愉傳達給茫茫眾生。第一眼看見菲歐菈身著的泳衣，大概很難想像她是侍奉神明的神官，但當人們被菲歐菈帶去宣揚教義時，一切就都明朗了。\n\n『在沙灘上將肉體回歸本源，真誠的向神禱告，施行神的恩惠，如此一來我等將抵達神所賜予的樂園~』`,
        [Locale.sc]: `为了让迷途的羔羊能在夏日的沙滩上脱去衣裳，拥抱性爱，聆听性爱之神的福音。侍奉性爱之神的大主教菲欧菈来到沙滩上，和性爱天使联手出击，力求将性爱的欢愉传达给茫茫众生。第一眼看见菲欧菈身着的泳衣，大概很难想像她是侍奉神明的神官，但当人们被菲欧菈带去宣扬教义时，一切就都明朗了。\n\n『在沙滩上将肉体回归本源，真诚的向神祷告，施行神的恩惠，如此一来我等将抵达神所赐予的乐园~』`,
        [Locale.en]: `The lost little lambs who wonder the beach in summertime will be taking off their clothes, embracing sex, and listening to the gospel of the gods of lovemaking. Fiora, who serves the god of sex, has come to the beach and joined forces with the angels to convey the joy of sex to all living things. At a first glance at Fiora in her swimsuit, it might be hard to imagine that she could ever be a priestess. But when she takes the lead in showing people her teachings, everything becomes clear at once.\n\n"Let us return our flesh to its original nature. Pray to the Lord, and exercise God's grace, so that we will arrive in Paradise~"`,
        [Locale.jp]: `迷える子羊が夏のビーチでセックスできるよう、今日も福音を届けるフィオラ。セックスの神に祈りを捧げる彼女はビーチにやってきては、セックスの天使と手を組んで性の歓びを皆に広めていた。そんなフィオラの水着姿を見て、聖なる神官だと思う人はいないだろう。しかし彼女が神の教えを説く時、彼女の神官の顔が露わになるのだ。\n\n『ビーチで肉体を解放して神に祈りを捧げ、恩恵を施すことで神は楽園へとお連れしてくれるのです』`,
        [Locale.kr]: `길을 잃은 어린 양이 백사장에서 옷을 벗고 섹스 신의 복음에 귀를 기울인다. 섹스 신을 섬기는 피오라 대주교는 백사장으로 나와 천사와 손을 잡고 섹스의 즐거움을 무지한 중생들에게 널리 알리려 한다. 피오라의 수영복 차림을 보면 신을 섬기는 신관이라고 상상하기 어렵지만, 피오라의 가르침을 받은 모든 이는 신실한 성도로 거듭났다고 한다.\n\n『백사장에서 가장 본연의 모습으로 신에게 기도를 드리고 은혜를 받게 된다면, 신께서 마련해주신 낙원에 도달할 수 있답니다~』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/06/07",
    essence: UnitEssence[UnitCode.s_fiora],
    thumbnail: UnitEssence[UnitCode.s_fiora],
    selection: UnitSelection[UnitCode.s_fiora],
    clothes: UnitFullImage[UnitCode.s_fiora],
    tagList: [],
    otherVersion: [ UnitCode.fiora, UnitCode.hm_fiora, UnitCode.ny_fiora ],
    initHP: 4619.2,
    initATK: 763.2,
    puzzle: [ PuzzleCode.EVENT_2023_SUMMER_3 ],
    outfits: [],
    skillSet: []
}
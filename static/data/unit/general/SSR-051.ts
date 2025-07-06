import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10091: Unit = {
    ID: "10091",
    metaCode: "s_noel",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "黑白諾艾莉",
        [Locale.sc]: "黑白诺艾莉",
        [Locale.en]: "Noel",
        [Locale.jp]: "モノクロのノエル",
        [Locale.kr]: "블랙앤화이트 노엘리"
    },
    abbreviation: {
        [Locale.tc]: [ "夏黑" ],
        [Locale.sc]: [ "夏黑" ],
        [Locale.en]: [ "S.Noel" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수엘리" ]
    },
    background: {
        [Locale.tc]: `炙熱的夏天！熙攘的人群！排隊、曬太陽、互相擠壓！這樣酷熱的天氣裡，人心浮躁，大家該如何排解心中的燥熱？沒錯！那就是大喊M‧O‧N‧O‧K‧U‧R‧O‧諾艾莉～♪慶典！比賽！泳裝！走光！大暴走！泳裝偶像節目可是夏天不可或缺的娛樂！為酷暑與炎熱而苦惱怠惰的人們，歡呼雀躍吧！因為，為眾人帶來希望與夢想的夏日之星，黑白諾艾莉登場了！\n\n『夏日節目最重要的三要素，當然就是偶像！泳裝！還有水上相撲囉！』`,
        [Locale.sc]: `炙热的夏天！熙攘的人群！排队、晒太阳、互相挤压！这样酷热的天气里，人心浮躁，大家该如何排解心中的燥热？没错！那就是大喊M‧O‧N‧O‧K‧U‧R‧O‧诺艾莉～♪庆典！比赛！泳装！走光！大暴走！泳装偶像节目可是夏天不可或缺的娱乐！为酷暑与炎热而苦恼怠惰的人们，欢呼雀跃吧！因为，为众人带来希望与梦想的夏日之星，黑白诺艾莉登场了！\n\n『夏日节目最重要的三要素，当然就是偶像！泳装！还有水上相扑啰！』`,
        [Locale.en]: `It's a long, hot summer and the crowds are getting restless! Gathered together under the blazing hot sun, sweat pouring down their brows... Just what could help ease the minds of these poor souls? That's right! Everyone shout it out loud! MONOKURO~ Noel~ ♪ Parties! Wet T-shirt contests! Swimsuits! Nip slips! Summer madness! Swimsuit contests are the true essence of summer. Don't let the hellish temperatures get you down! Get up and dance! The great deliverer of hopes and dreams, the starriest star of summer, Noel, is ready to take center stage!\n\n"You only need three things to have the perfect summer! Idols, swimsuits, and skinny-dipping!"`,
        [Locale.jp]: `暑い夏！にぎわう人波！行列、ギラギラの太陽、押し合いへし合い！こんな猛暑じゃ、心は荒むばかり……みんなはどうやってこのイライラを解消してる？その通り！みんな大きな声で叫んで！M‧O‧N‧O‧K‧U‧R‧O‧ノエル～♪フェス！試合！水着！チラリ！大暴走！水着アイドル番組は、欠かすことができない夏の定番！酷暑で元気のないあなたも、一緒に盛り上がろう！みんなに希望と夢を与えてくれる夏の星、モノクロのノエルが登場だ！\n\n『夏の番組で最も大事な三要素、それはずばりアイドル！水着！そして水上相撲よ！』`,
        [Locale.kr]: `무더운 여름! 수많은 사람! 땡볕 아래 줄 서는 것도! 서로 밀치는 것도! 이런 폭염 속에선 그저 짜증만 솟아날 뿐! 대체 이 무더위를 어떻게 날려버려야 좋을까? 맞아! 함께 외치는 거야! M‧O‧N‧O‧K‧U‧R‧O‧노엘리～♪ 축제! 시합! 수영복! 노출! 대폭주! 여름 시즌에 절대로 빠질 수 없는 수영복 아이돌 콘테스트 ! 무더위로 짜증이 솟구치는 사람들! 환호하며 소리 질러어어어! 희망과 꿈을 그대에게 안겨줄 별, 블랙앤화이트 노엘리 화려하게 등장!\n\n『여름 프로그램에서 절대로 빠질 수 없는 3요소! 아이돌! 수영복! 그리고 수상 스모 아니겠어!』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2022/06/08",
    essence: UnitEssence[UnitCode.s_noel],
    thumbnail: UnitEssence[UnitCode.s_noel],
    selection: UnitSelection[UnitCode.s_noel],
    clothes: UnitFullImage[UnitCode.s_noel],
    tagList: [],
    otherVersion: [ UnitCode.noel, UnitCode.w_noel, UnitCode.c_noel ],
    initHP: 4513.599250417359,
    initATK: 780.7978187389513,
    puzzle: [ PuzzleCode.EVENT_2022_SUMMER_3 ],
    outfits: [],
    skillSet: []
}
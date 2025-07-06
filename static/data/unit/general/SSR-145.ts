import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10173: Unit = {
    ID: "10173",
    metaCode: "s_noma",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "諾蕾蒂",
        [Locale.sc]: "诺蕾蒂",
        [Locale.en]: "Noma",
        [Locale.jp]: "ノルディ",
        [Locale.kr]: "놀라이티"
    },
    abbreviation: {
        [Locale.tc]: [ "夏狂", "夏犬", "夏狗", "水狂", "水犬", "水狗", "小小鯊" ],
        [Locale.sc]: [ "夏狂", "夏犬", "夏狗", "水狂", "水犬", "水狗", "小小鲨" ],
        [Locale.en]: [ "S.Noma", "Tiny Shark" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수놀라" ]
    },
    background: {
        [Locale.tc]: `遠離了戰場的硝煙與砲擊，獵犬小隊跟隨著伊布力斯登上郵輪來到海外度假村。然而，不論是海邊的風景或是水上活動，對諾蕾蒂來說都無聊至極。明明已經夠煩燥了，身邊卻還很多愛玩水的蠢蛋又吵又鬧的跑來跑去，這更是讓她感到痛苦不已。原本她以為這段海外之旅將會在無聊中度過，但芙紐絲的出現卻開始讓事情變得有趣起來。為了打發時間，諾蕾蒂決定幫伊布力斯對付這次的挑戰者，在驚險刺激的戰鬥中好好享受自己的假期。\n\n『想和我一起去玩水？別開玩笑了，我才不會去做那種無聊的事情。』`,
        [Locale.sc]: `远离了战场的硝烟与砲击，猎犬小队跟随着伊布力斯登上邮轮来到海外度假村。然而，不论是海边的风景或是水上活动，对诺蕾蒂来说都无聊至极。明明已经够烦燥了，身边却还很多爱玩水的蠢蛋又吵又闹的跑来跑去，这更是让她感到痛苦不已。原本她以为这段海外之旅将会在无聊中度过，但芙纽丝的出现却开始让事情变得有趣起来。为了打发时间，诺蕾蒂决定帮伊布力斯对付这次的挑战者，在惊险刺激的战斗中好好享受自己的假期。\n\n『想和我一起去玩水？别开玩笑了，我才不会去做那种无聊的事情。』`,
        [Locale.en]: `Far from the smoke and gunfire of the battlefield, the Hound Hunters follow Iblis onto a cruise for an overseas resort getaway. But to Noma, the beach scenery and water activities are painfully dull. Already annoyed, the constant racket of water-loving idiots running around only makes her misery worse. She expects this trip to drag on in boredom, but Forneusa's arrival sparks something intriguing. To pass the time, Noma decides to help Iblis take on this challenger, relishing her vacation through the thrill of intense battles.\n\n"Splash around in the water with you? Don't be ridiculous, I'm not wasting my time on boring games."`,
        [Locale.jp]: `戦場の硝煙と砲火を離れ、ハウンド小隊はイブリースと共にクルーズ船で海のリゾートへとやって来た。だが、海辺の景色も、マリンアクティビティも、ノルディにとっては退屈極まりないものだった。ただでさえイライラしているのに、水遊びではしゃぎまわるバカどもが周囲にいるせいで、その苛立ちはさらに増すばかり。このままつまらない時間を過ごす羽目になると思っていたとき、フォルネウスの登場が、状況を一変させた。ノルディは暇つぶしがてら、イブリースの手助けとして挑戦者を迎え撃つことを決意し、スリル満点の戦いを通して、休暇を満喫することにしたのだった。\n\n『水遊びに誘うなんて正気？そんなくだらないこと、やるわけないでしょ』`,
        [Locale.kr]: `전장의 연기와 포격에서 벗어나, 하운드 소대는 이블리스를 따라 유람선을 타고 해외 리조트로 향한다. 하지만 해변 풍경이나 수상 레저는 놀라이티에게 그저 따분할 뿐이다. 이미 충분히 짜증이 나는 와중에, 주변에서 물놀이에 푹 빠진 바보들이 시끄럽게 뛰어다니며 더더욱 그녀를 괴롭힌다. 이번 여행은 따분함 속에 끝날 줄 알았지만, 포르네우스의 등장으로 상황이 재미있어지기 시작했다. 시간을 때우기 위해, 놀라이티는 이블리스를 도와 이번 도전자를 상대하면서, 스릴 넘치는 전투 속에서 그녀만의 휴가를 제대로 즐기기로 결심한다.\n\n『나랑 같이 물놀이가 하고 싶다고? 웃기는 소리, 그런 시시한 짓거리를 내가 할 것 같아?』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/06/11",
    essence: UnitEssence[UnitCode.s_noma],
    thumbnail: UnitEssence[UnitCode.s_noma],
    selection: UnitSelection[UnitCode.s_noma],
    clothes: UnitFullImage[UnitCode.s_noma],
    tagList: [],
    otherVersion: [ UnitCode.noma ],
    initHP: 0,
    initATK: 0,
    puzzle: [ PuzzleCode.EVENT_2025_SUMMER_3 ],
    outfits: [],
    skillSet: []
}
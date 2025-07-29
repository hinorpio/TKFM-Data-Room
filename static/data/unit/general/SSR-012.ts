import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10027: Unit = {
    ID: "10027",
    metaCode: "e_satan",
    prefix: {
        [Locale.tc]: "復活兔",
        [Locale.sc]: "复活兔",
        [Locale.en]: "Easter",
        [Locale.jp]: "イースターバニー",
        [Locale.kr]: "부활한 바니걸"
    },
    name: {
        [Locale.tc]: "撒旦",
        [Locale.sc]: "撒旦",
        [Locale.en]: "Satan",
        [Locale.jp]: "サタン",
        [Locale.kr]: "사탄"
    },
    abbreviation: {
        [Locale.tc]: [ "兔撒", "蛋旦", "復旦"],
        [Locale.sc]: [ "兔撒", "蛋旦", "复旦"],
        [Locale.en]: [ "E.Satan" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "바니사탄" ]
    },
    background: {
        [Locale.tc]: `復活節－－－這在魔界是屬於不死族的狂歡節慶。死去後獲得新生，以不同的生命形式重新回到世界上。這儀式的過程就如同雛鳥破殼一般，後來經過歲月變遷，魔界的住民也會在這天分送「復活蛋」作為慶祝。雖然以往撒旦沒有慶祝節日的興趣，但是復活節卻是例外！殺掉的人至今已經數不清，而這些死者中又有部分會化作不死生物來報復！本已經殺死的人竟然可以再殺第二次，啊啊，這是何等美妙的體驗啊~作為撒旦唯一願意慶祝的節日，在復活節當天，撒旦會換上特殊的服裝，不帶上隨從，四處發送「復活蛋」。輕飄飄的服裝沒有防禦力，分發復活蛋則是給予試圖襲擊她的人出手的機會。撒旦正滿心期待的等候著敵人送上門來，接受她第二次的蹂躪。\n\n『呵呵，來吧，來一起慶祝復活節這個美好的節日吧，呵呵呵呵。』`,
        [Locale.sc]: `复活节－－－这在魔界是属于不死族的狂欢节庆。死去后获得新生，以不同的生命形式重新回到世界上。这仪式的过程就如同雏鸟破壳一般，后来经过岁月变迁，魔界的住民也会在这天分送「复活蛋」作为庆祝。虽然以往撒旦没有庆祝节日的兴趣，但是复活节却是例外！杀掉的人至今已经数不清，而这些死者中又有部分会化作不死生物来报复！本已经杀死的人竟然可以再杀第二次，啊啊，这是何等美妙的体验啊~作为撒旦唯一愿意庆祝的节日，在复活节当天，撒旦会换上特殊的服装，不带上随从，四处发送「复活蛋」。轻飘飘的服装没有防御力，分发复活蛋则是给予试图袭击她的人出手的机会。撒旦正满心期待的等候着敌人送上门来，接受她第二次的蹂躏。\n\n『呵呵，来吧，来一起庆祝复活节这个美好的节日吧，呵呵呵呵。』`,
        [Locale.en]: `Easter－－－A time for the undead to party their brains out. From death comes life... and the beings that have passed return in new forms. This ancient ceremony is much like a new-born chick, hatching from its egg. After many years, the residents of the demon realm have made it a custom to hand out Easter eggs to celebrate. Satan doesn't usually enjoy holidays... but Easter's an exception! Who knows how many humans she's killed, and some of 'em come back from the dead, restless and wanting to seek their revenge! Kill someone... then kill 'em again!? Wah! What a delight~ Given that it's the only holiday Satan enjoys, she loves putting on a special little outfit, hopping around and giving out Easter eggs. She's totally exposed, tits n' all! A perfect chance for her haters to take her out. She eagerly awaits that moment when she gets to trample all over their shitty little faces once more.\n\n"Come now... Let's enjoy the holiday, shall we? Muahaha!!!"`,
        [Locale.jp]: `復活祭――魔界ではアンデッドのお祭りである。死ぬと生まれかわり、異なる生命となって再びこの世に戻って来る。この儀式は雛が卵の殻を破るのと同じだ。月日が流れ、今では魔界の住民がこの日に「イースターエッグ」を贈ってお祝いする。サタンは祝日や記念日に一切興味が無かったが、この復活祭だけは違った。これまで何人殺したか分からないサタン。殺された死者の一部がアンデッドとなって復讐にやってくるのだ！殺した相手をもう一度殺せるなんて、ああ、なんて素敵なんでしょう。サタンが唯一興味を持つ祝日として、復活祭の当日、サタンは特別な衣装に着替えあちこちで「イースターエッグ」を配り歩いた。衣装に防御力はないため、イースターエッグを配っている彼女を襲おうとしている敵にとってはいいチャンスだった。だがサタンは、敵が来て2度目の快感を味わえる事をとても楽しみにしているのである。\n\n『フフッ、さあ、一緒に美しい復活祭を楽しみましょう？フフフフッ』`,
        [Locale.kr]: `부활절- - -마계에서는 언데드의 축제이다. 죽으면 다시 태어나 다른 생명으로 돌아온다. 이 의식은 병아리가 알 껍질을 깨는 것과 같다. 세월이 흘러 이제 마계 주민들은 이날 '이스터 에그'를 선물하며 축하한다. 사탄은 명절이나 기념일에 전혀 관심이 없었지만 이 부활절만큼은 달랐다. 지금까지 셀 수 없을 정도로 수많은 자들을 살해한 사탄. 살해당한 사망자 중 일부가 언데드가 되어 복수를 위해 돌아온다! 죽인 상대를 다시 죽일 수 있다니, 이 얼마나 아름답고 멋진 일이란 말인가! 사탄이 유일하게 관심을 갖는 명절로 부활절 당일, 사탄은 특별한 의상으로 갈아입고 여기저기 이스터에그를 뿌려댔다. 방어력이란 조금도 없어보이는 의상을 입고 이스터에그를 나눠주고 있던 그녀, 적에게 있어선 기습하기에 더할 나위 없이 좋은 기회! 하지만 사탄은 적을 두 번 죽일 수 있다는 쾌감을 맛보기를 무척 기대하고 있던 참이었는데.\n\n『후훗, 자, 함께 아름다운 부활절을 즐겨보자고? 히히히히!』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: true,
    releaseDate: "2021/03/31",
    essence: UnitEssence[UnitCode.e_satan],
    thumbnail: UnitEssence[UnitCode.e_satan],
    selection: UnitSelection[UnitCode.e_satan],
    clothes: UnitFullImage[UnitCode.e_satan],
    tagList: [],
    otherVersion: [ UnitCode.satan, UnitCode.b_satan, UnitCode.v_satan, UnitCode.s_satan, UnitCode.h_satan ],
    initHP: 5499.2,
    initATK: 580.8,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.e_satan],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
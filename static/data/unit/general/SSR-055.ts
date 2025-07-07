import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10088: Unit = {
    ID: "10088",
    metaCode: "q_asida",
    prefix: {
        [Locale.tc]: "雙星之紅",
        [Locale.sc]: "双星之红",
        [Locale.en]: "Red Qixi",
        [Locale.jp]: "二星の紅",
        [Locale.kr]: "붉은 쌍성"
    },
    name: {
        [Locale.tc]: "安絲蒂",
        [Locale.sc]: "安丝蒂",
        [Locale.en]: "Asida",
        [Locale.jp]: "アンスティー",
        [Locale.kr]: "아나스티"
    },
    abbreviation: {
        [Locale.tc]: [ "星紅" ],
        [Locale.sc]: [ "星紅" ],
        [Locale.en]: [ "Q.Asida" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "신빨강" ]
    },
    background: {
        [Locale.tc]: `安絲蒂是服裝店【巴赫蒂娜】的裁縫，她有著天馬行空的想像力以及獨特的美感。然而，她時常因為一時興起，就做出許多令自己孿生妹妹苦惱的麻煩事。就好比當安絲蒂從身為烈日國前公主的千鶴口中得知了七夕祭的起源：「天各一方的愛侶彼此心心相印，最終排除萬難成功相見」的浪漫唯美故事後，她便突發奇想，想讓自己和妹妹扮演故事中的織女，並讓心目中的白馬王子(凱薩)披荊斬荊，前來迎接自己。這樣就可以像每一個童話故事的結局一樣，所有人從此過上幸福快樂的美好日子。\n\n『哈啊～天各一方的愛侶被重重困難給阻饒，在費盡千辛萬苦後終於見面，面對面傾訴著愛意，這真是太浪漫了不是嘛！』`,
        [Locale.sc]: `安丝蒂是服装店【巴赫蒂娜】的裁缝，她有着天马行空的想像力以及独特的美感。然而，她时常因为一时兴起，就做出许多令自己孪生妹妹苦恼的麻烦事。就好比当安丝蒂从身为烈日国前公主的千鹤口中得知了七夕祭的起源：「天各一方的爱侣彼此心心相印，最终排除万难成功相见」的浪漫唯美故事后，她便突发奇想，想让自己和妹妹扮演故事中的织女，并让心目中的白马王子(凯萨)披荆斩荆，前来迎接自己。这样就可以像每一个童话故事的结局一样，所有人从此过上幸福快乐的美好日子。\n\n『哈啊～天各一方的爱侣被重重困难给阻饶，在费尽千辛万苦后终于见面，面对面倾诉着爱意，这真是太浪漫了不是嘛！』`,
        [Locale.en]: `Asida is a tailor at Pasadena. She's a bit ditsy and basically does whatever she wants. Nary a day goes by without her getting in some sort of trouble, much to the dismay of her caring sister Asina. This time, Asida happens to hear about the "Qixi" festival from the ex-Isori princess, Chizuru. The story tells of two star-crossed lovers, Zhinu and Niulang, who can only see each other once a year, on Qixi. With that, she sets up a plan for her and her sister, Asina, to both play the girl (Zhinu), and Caesar to be their lover (Niulang). On Qixi, when Master Caesar comes to save them, she hopes the three of them can live happily ever after.\n\n"Wow, seeing each other after a whole year of being apart, there's nothing more romantic!"`,
        [Locale.jp]: `アンスティーは【バッハティーナ】で裁縫の仕事をしている。その豊かな想像力と独特のセンスが彼女の特長だ。しかし彼女はよく面倒ごとを起こし、妹を困らせてしまう。ある日彼女は烈陽国の元姫千鶴から七夕の伝説を耳にした。「愛し合う二人が困難を乗り越え再会に成功した」というロマンチックな物語を知った彼女は、自分と妹で織姫を演じ、白馬の王子様(シーザー)に迎えに来てもらおうと計画を立てた。そうすれば童話の結末のように、みんなが幸せな日々を送れると考えたからだ。\n\n『はぁ～、天を隔てた二人がやっとの思いで再会し、お互いに愛を伝え合う。なんてロマンチックなの～！！』`,
        [Locale.kr]: `의복점 바흐테나의 재단사. 의식의 흐름에 따라 떠올린 상상력으로 독특한 미감을 드러낸다. 하지만 일단 흥을 주체하지 못하면 곧바로 이런저런 일을 벌여놓는 바람에 그녀의 동생은 그런 언니가 늘 걱정이다. 아나스티는 태양국 전임 공주 치즈루에게서 칠석제의 기원에 대한 이야기를 듣게 된다. 서로 눈이 맞은 두 남녀가 온갖 역경 끝에 서로 만나게 되었다는 낭만적인 이야기를. 즉흥적인 아이디어로 동생과 함께 직녀가 되어 백마탄 왕자(시저)를 만나겠다 결심한 아나스티. 그리고 동화의 결말이 그러하듯, 모두가 행복한 결말을 맞이했다고 한다.\n\n『하아~ 사랑하는 이를 위해 천신만고 끝에 서로 만나 사랑을 나누었단 이야기! 너무 낭만적이잖아!』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/08/03",
    essence: UnitEssence[UnitCode.q_asida],
    thumbnail: UnitEssence[UnitCode.q_asida],
    selection: UnitSelection[UnitCode.q_asida],
    clothes: UnitFullImage[UnitCode.q_asida],
    tagList: [],
    otherVersion: [ UnitCode.asida ],
    initHP: 3420.8,
    initATK: 1030.4,
    puzzle: [],
    outfits: [],
    skillSet: []
}
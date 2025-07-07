import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10032: Unit = {
    ID: "10032",
    metaCode: "s_nana",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "娜娜",
        [Locale.sc]: "娜娜",
        [Locale.en]: "Nana",
        [Locale.jp]: "ナナ",
        [Locale.kr]: "나나"
    },
    abbreviation: {
        [Locale.tc]: [ "夏娜", "夏貓", "泳娜", "泳貓" ],
        [Locale.sc]: [ "夏娜", "夏猫", "泳娜", "泳猫" ],
        [Locale.en]: [ "S.Nana" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수나나" ]
    },
    background: {
        [Locale.tc]: `配合凱薩的任性，娜娜不得不跟隨凱薩一起到海邊享受難得的假期。聽起來有點矛盾，但這就是現實。若是不盯著凱薩，他就會惹出天大的麻煩，最後還不是要由本喵來善後！強調著這樣的說法，娜娜清楚的明白，自己即使到海邊渡假也不能掉以輕心。想到之後海邊假期可能遭遇的麻煩，娜娜懷揣著不安，精心挑選了到時要用的新泳衣。\n\n『本喵可不想去海邊，是為了看好笨蛋凱薩，別讓他闖禍才不得不跟來的喵。』`,
        [Locale.sc]: `配合凯萨的任性，娜娜不得不跟随凯萨一起到海边享受难得的假期。听起来有点矛盾，但这就是现实。若是不盯着凯萨，他就会惹出天大的麻烦，最后还不是要由本喵来善后！强调着这样的说法，娜娜清楚的明白，自己即使到海边渡假也不能掉以轻心。想到之后海边假期可能遭遇的麻烦，娜娜怀揣着不安，精心挑选了到时要用的新泳衣。\n\n『本喵可不想去海边，是为了看好笨蛋凯萨，别让他闯祸才不得不跟来的喵。』`,
        [Locale.en]: `Slightly against her own wishes, Nana tags along with Caesar on his trip to the beach. Sure, she wouldn't mind relaxing, but unfortunately that's not up to her. Nana knows if she leaves Caesar alone to his own devices, he'll get up to a whole mess of trouble. So this is more like a babysitting gig for Nana, not a vacation. That said, this is still the beach! So, Nana puts on her brand-new swimsuit, and just hopes there won't be too much chaos...\n\n"I have so much work to do right now, but I have to keep an eye on that idiot Caesar..."`,
        [Locale.jp]: `シーザーのわがままに付き合って、せっかくの休暇に海までやってきたナナ。矛盾しているように聞こえるが、これが現実なのである。シーザーをしっかりと監視していなければ、まちがいなく面倒事を引きおこすだろう。そうなれば尻拭いはナナの仕事である。つまり、ナナは海辺に遊びに来ているのだとしても一切気を抜けないのだ。これから起こるであろう数々の面倒事を想像しては憂鬱な気持ちになるナナは、今回のために水着を厳選した。\n\n『あたしは別に海なんて興味ないけど、バカシーザーが面倒事を引き起こさないように仕方なく付いてきたんだにゃ！』`,
        [Locale.kr]: `제멋대로인 시저에게 협조하기 위해 나나는 마지못해 시저와 동행하여 오랜만에 해변에 오게 됐다. 참 모순적이지만 이게 바로 현실이다. "시저를 감시하지 않다가 나중에 큰 사고라도 쳐버리면 결국 뒤처리는 내 몫이잖아!" 라고 강조하며 바캉스를 즐기는 와중에도 절대 방심해선 안 된다는 사실은 나나도 잘 알고 있다. 나나는 바캉스 기간 동안 생길 수 있는 여러 골칫거리들에 불안감을 품은 채, 자신이 입으려는 수영복을 열심히 고른다.\n\n『난 해변에 가고 싶지 않다냥! 바보 시저가 사고 치지 못하도록 어쩔 수 없이 동행하는 것 뿐이다냥!』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2021/05/28",
    essence: UnitEssence[UnitCode.s_nana],
    thumbnail: UnitEssence[UnitCode.s_nana],
    selection: UnitSelection[UnitCode.s_nana],
    clothes: UnitFullImage[UnitCode.s_nana],
    tagList: [],
    otherVersion: [ UnitCode.nana, UnitCode.c1_nana, UnitCode.o_nana, UnitCode.a_nana ],
    initHP: 3499.2,
    initATK: 1008,
    puzzle: [ PuzzleCode.EVENT_2021_SUMMER_4 ],
    outfits: [],
    skillSet: []
}
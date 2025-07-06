import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10804: Unit = {
    ID: "10804",
    metaCode: "dora",
    prefix: {
        [Locale.tc]: "犬人族",
        [Locale.sc]: "犬人族",
        [Locale.en]: "Dog-Girl",
        [Locale.jp]: "犬人族",
        [Locale.kr]: "코볼트"
    },
    name: {
        [Locale.tc]: "朵拉",
        [Locale.sc]: "朵拉",
        [Locale.en]: "Dora",
        [Locale.jp]: "ドラ",
        [Locale.kr]: "도라"
    },
    abbreviation: {
        [Locale.tc]: [ "狗" ],
        [Locale.sc]: [ "狗" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `朵拉是嗅覺敏銳的犬人族，原本在家鄉中擔任著警備隊長，一直以來盡忠職守，守護著居住的村莊。然而當魔族到來後，村莊成了凱薩的領土，朵拉也在凱薩的命令下調離了原本的村莊。雖然魔族到來後並沒有殺燒擄掠，但個性耿直的朵拉依然看不慣凱薩的所作所為，總是不加以掩飾自己對凱薩的厭惡，但隨著時間過去，儘管依舊嘴硬，朵拉卻漸漸喜歡上了原本討厭的凱薩……\n\n『喜歡？才沒這回事…喂，不准看我尾巴！』`,
        [Locale.sc]: `朵拉是嗅觉敏锐的犬人族，原本在家乡中担任着警备队长，一直以来尽忠职守，守护着居住的村庄。然而当魔族到来后，村庄成了凯萨的领土，朵拉也在凯萨的命令下调离了原本的村庄。虽然魔族到来后并没有杀烧掳掠，但个性耿直的朵拉依然看不惯凯萨的所作所为，总是不加以掩饰自己对凯萨的厌恶，但随着时间过去，尽管依旧嘴硬，朵拉却渐渐喜欢上了原本讨厌的凯萨……\n\n『喜欢？才没这回事…喂，不准看我尾巴！』`,
        [Locale.en]: `Dora's a beast-girl (half dog) with a super-sensitive sense of smell. She used to be a cop back home, which has left her with an strong commitment to protecting her town and the people in it. That's why, when her town fell under Caesar's rule, even though he didn't slaughter any of the townsfolk, she didn't take much of a liking to him at first. However, over time she's begun to warm up to him a bit...\n\n"No way I like Caesar!... Hey, quick looking at my tail!"`,
        [Locale.jp]: `ドラは犬人族で、生まれつき鋭い嗅覚を持っている。もともとは村で警備隊長をしており、村を守り続けてきた。魔族軍が村へやってくるとシーザーの領地となり、ドラもシーザーの命令のもと村を離れることになった。魔族は殺戮などはしなかったが、忠実なドラはシーザーの行為を許せず、シーザーに対して敵意を露わにしていた。しかし時間が過ぎるにつれだんだんとシーザーを好きになっていった……\n\n『すき？そんなことないもん……ねぇ！しっぽ見ないで！』`,
        [Locale.kr]: `도라는 후각이 예민한 코볼트족이다. 원래는 고향에서 경비대장을 온 힘을 다해 자신이 살고 있는 마을을 지키는데 최선을 다하고 있었다. 하지만 마족이 도착한 후 마을은 시저의 영토가 되고 말았고, 그녀는 시저의 명령에 따라 자신의 마을을 떠날 수밖에 없었다. 마족은 마을에서 살육이나 약탈을 저지르지는 않았지만 정직한 성격의 도라는 시저의 행동이 못마땅해 그에 대한 혐오를 감추지 않는다. 하지만 시간이 지남에 따라 비록 말로는 싫어한다고 하지만 도라는 점점 원래 그렇게도 싫어했던 시저를 좋아하게 된다......\n\n『좋아한다고? 내가 그럴 리가 없어... 이봐. 내 꼬리를 보면 안 돼!』`
    },
    rarity: Rarity.R,
    element: Element.WIND,
    position: Position.PROTECTOR,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.dora],
    thumbnail: UnitEssence[UnitCode.dora],
    selection: UnitSelection[UnitCode.dora],
    clothes: UnitFullImage[UnitCode.dora],
    tagList: [ 
        TagID.ELEMENT_WIND, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_DEMIHUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
        TagID.OTHER_SURVIVABILLITY,
    ],
    otherVersion: [],
    initHP: 3490.7976769988873,
    initATK: 464.3977883624239,
    puzzle: [],
    outfits: [],
    skillSet: []
}
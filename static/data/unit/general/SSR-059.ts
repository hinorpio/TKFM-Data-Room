import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10093: Unit = {
    ID: "10093",
    metaCode: "c1_nana",
    prefix: {
        [Locale.tc]: "適格者",
        [Locale.sc]: "适格者",
        [Locale.en]: "Chosen One",
        [Locale.jp]: "チルドレン",
        [Locale.kr]: "적격자"
    },
    name: {
        [Locale.tc]: "娜娜",
        [Locale.sc]: "娜娜",
        [Locale.en]: "Nana",
        [Locale.jp]: "ナナ",
        [Locale.kr]: "나나"
    },
    abbreviation: {
        [Locale.tc]: [ "秋娜", "星娜", "適娜" ],
        [Locale.sc]: [ "秋娜", "星娜", "适娜" ],
        [Locale.en]: [ "C1.Nana", "C.Nana" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "적나나" ]
    },
    background: {
        [Locale.tc]: `自從拾獲了奇異的隕石碎片後，娜娜獲得了神奇的變身能力。跑得比風還快，飛得跟星星一樣高，徒手能抓碎岩石、超強的感知，甚至能發射奇妙的光線。如果是現在的她，說不定就算魔王也有一戰之力？然而自從可以變身以後，神祕第六感就一直警示危險。似乎在某個地方，有著她命中註定得要打倒的宿敵……不過在這之前，娜娜決定把這份新力量先用在工作上，使它發光發熱。\n\n『現在本喵可以做更多的工作了喵。』`,
        [Locale.sc]: `自从拾获了奇异的陨石碎片后，娜娜获得了神奇的变身能力。跑得比风还快，飞得跟星星一样高，徒手能抓碎岩石、超强的感知，甚至能发射奇妙的光线。如果是现在的她，说不定就算魔王也有一战之力？然而自从可以变身以后，神秘第六感就一直警示危险。似乎在某个地方，有着她命中注定得要打倒的宿敌……不过在这之前，娜娜决定把这份新力量先用在工作上，使它发光发热。\n\n『现在本喵可以做更多的工作了喵。』`,
        [Locale.en]: `After finding pieces of a mysterious fallen meteor, Nana gains the ability to transform into some kind of superhero. She can run faster than a cheetah and fly higher than a bird. She can crush stone with her bare hands, and even shoot lasers! I wonder if this super-strong version of Nana would be a match for even Caesar himself? And yet, after gaining this new power, Nana's six sense begins to warn her of an incoming danger. It seems a rival on the horizon is out for her life. Before dealing with this threat, however, Nana decides instead to use her new powers to finish her work!\n\n"Nyah~ I can get so much work done, now!"`,
        [Locale.jp]: `不思議な隕石の欠片を拾ったナナは、神秘的な変身能力を手に入れた。超強力な探知能力を手に入れ、チーターよりも速く走り、鳥よりも高く飛び、手で岩を砕いては、レーザー光線を発射することもできるのだ。今の彼女だったら魔王と一戦を交わすこともできるかもしれない。しかし変身できるようになってから、不思議な第六感が危険信号を発していた。どこかに、彼女の宿敵がいるらしい……しかしナナはまずこの神秘的な力を仕事に活用することに決めたのであった。\n\n『いまのあたしはいつもの数倍仕事できるにゃ』`,
        [Locale.kr]: `나나는 이상한 운석 조각을 주운 뒤부터 신비로운 변신 능력을 얻게 된다.그 능력으로 치타보다 빨리 달리고 새보다 높게 날며 맨손으로 바위를 부술 수 있을 뿐만 아니라, 초강력 감지 능력까지 갖췄고 정체불명의 광선도 발사할 수 있게 되었다.지금의 그녀라면 마왕과도 일전을 겨룰 수 있을지도?그런데 변신할 수 있게 되면서 생긴 신비로운 육감이 그녀에게 계속 위험 신호를 보내고 있다.어딘가에, 그녀가 타도해야 할 숙적이 있는 것 같다...하지만 나나는 먼저 이 신비한 힘을 일 자신의 업무에 활용하기로 결정하였다.\n\n『이제 더 많은 일을 할 수 있게 됐다냥.』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/09/07",
    essence: UnitEssence[UnitCode.c1_nana],
    thumbnail: UnitEssence[UnitCode.c1_nana],
    selection: UnitSelection[UnitCode.c1_nana],
    clothes: UnitFullImage[UnitCode.c1_nana],
    tagList: [],
    otherVersion: [ UnitCode.nana, UnitCode.s_nana, UnitCode.o_nana, UnitCode.a_nana ],
    initHP: 0,
    initATK: 0,
    puzzle: [],
    outfits: [],
    skillSet: []
}
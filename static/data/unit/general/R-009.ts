import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10812: Unit = {
    ID: "10812",
    metaCode: "panana",
    prefix: {
        [Locale.tc]: "南瓜仙子",
        [Locale.sc]: "南瓜仙子",
        [Locale.en]: "Pumpkin Fairy",
        [Locale.jp]: "かぼちゃの妖精",
        [Locale.kr]: "펌킨 페어리"
    },
    name: {
        [Locale.tc]: "帕奈奈",
        [Locale.sc]: "帕奈奈",
        [Locale.en]: "Panana",
        [Locale.jp]: "パナナ",
        [Locale.kr]: "파나나"
    },
    abbreviation: {
        [Locale.tc]: [ "南瓜" ],
        [Locale.sc]: [ "南瓜" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `經歷千年未腐爛的南瓜燈幻化而成的小仙子。累積了千年的魔力因此在誕生的瞬間魔力大量暴走。導致萬聖夜布蘭妮變小惡魔，賽露西亞返老還童的元兇。本人其實覺得很麻煩，但是被迫跟著小惡魔布蘭妮收拾殘局。因為剛剛才修煉成仙子，因此對自己法力的掌控出奇的差。無意間就會因此小小的魔法暴走。本人對於造成的損害一概採取「與我無關，不要煩我」的態度。\n\n『好麻煩啊……就不能找別人去收拾嗎？』`,
        [Locale.sc]: `经历千年未腐烂的南瓜灯幻化而成的小仙子。累积了千年的魔力因此在诞生的瞬间魔力大量暴走。导致万圣夜布兰妮变小恶魔，赛露西亚返老还童的元凶。本人其实觉得很麻烦，但是被迫跟着小恶魔布兰妮收拾残局。因为刚刚才修炼成仙子，因此对自己法力的掌控出奇的差。无意间就会因此小小的魔法暴走。本人对于造成的损害一概采取「与我无关，不要烦我」的态度。\n\n『好麻烦啊……就不能找别人去收拾吗？』`,
        [Locale.en]: `It's been said that an object thousands of years old can accumulate enough magic energy to turn into a fairy. Well, that's what happened to Panana, the formerly two-thousand-year-old jack-o'-lantern. Unfortunately, turning into a fairy caused all of that accumulated magic energy to leak out and spread across the realm, Spookifying™ everybody and everything it touches! Just ask Britney - she was turned into a succubus, while Salucia was turned back into the spoiled elf of her youth. All Panana wants to do is kick back and enjoy her new freedom, but now she's got to clean up this mess before the Realmwide Fairy Association catches wind of what happened. Unfortunately, the pint-sized Panana doesn't have much of a chance getting all that magic energy back on her own. With her magic energy gone, she could barely hurt a fly. And her attitude doesn't help either - where was that jack-o'-lantern sitting for the past two-thousand years, anyway? The corner of cranky avenue and lazy street? Jeez louise!\n\n"Pain in the ass, I'm trying to take a smoke break over hea!!"`,
        [Locale.jp]: `妖精パナナの化身前の正体は、千年もの間使われていたパンプキンランタンだ。その千年分の魔力が生まれ変わった時に爆発し、漏れて出してしまう事態に。その魔力がブリトニーの小悪魔化とセルシアの幼少化を引き起こしたのである。本人は後始末が面倒だと思っていたが、小悪魔ブリトニーに強制的にやらされることに。妖精になったばかりの彼女は 、自分の魔力をうまく操れず、無意識のうちに魔法を暴走させてしまう。それでも自分が引き起こした面倒ごとに関しては、終始「私には関係ない」という態度を貫いている。\n\n『面倒だなぁ……誰かほかの人に後始末をお願いできないの？』`,
        [Locale.kr]: `천년 넘게 존재한 호박 램프가 요정으로 변했다. 천년의 세월로 농축된 마력이 변화하는 순간 사방으로 퍼져 나가고 말았다. 이로 인해 할로윈의 밤, 브리트니는 서큐버스로 변해버렸고 살루시아는 어려지고 말았다. 본인은 귀찮아하면서도 어쩔 수 없이 서큐버스 브리트니와 함께 사태를 수습하려 한다. 페어리가 된 지 얼마 안된 그녀. 마력 제어에 능숙하지 못한 탓에 무의식 중에 마력이 폭주하는 일이 잦다. 본인은 자신 때문에 일어난 사태를 "나랑 상관없는 일이다. 사람 귀찮게 굴지 마!"라는 태도로 일관한다.\n\n『귀찮잖아……수습은 다른 사람에게 맡기면 안 되나?』`
    },
    rarity: Rarity.R,
    element: Element.DARK,
    position: Position.HEALER,
    potential: PotentialType.NR,
    isLimited: true,
    releaseDate: "2021/10/27",
    essence: UnitEssence[UnitCode.panana],
    thumbnail: UnitEssence[UnitCode.panana],
    selection: UnitSelection[UnitCode.panana],
    clothes: UnitFullImage[UnitCode.panana],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    outfits: [],
    skillSet: []
}
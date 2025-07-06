import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10058: Unit = {
    ID: "10058",
    metaCode: "fufu",
    prefix: {
        [Locale.tc]: "膽小紙袋狼",
        [Locale.sc]: '胆小纸袋狼',
        [Locale.en]: "Paper Bag Wolf",
        [Locale.jp]: "内気な狼",
        [Locale.kr]: "겁 많은 늑대"
    },
    name: {
        [Locale.tc]: "沃沃",
        [Locale.sc]: "沃沃",
        [Locale.en]: "Fufu",
        [Locale.jp]: "アオン",
        [Locale.kr]: "아온"
    },
    abbreviation: {
        [Locale.tc]: [ "紙袋狼", "狼", "阿狼", "內鬼" ],
        [Locale.sc]: [ "纸袋狼", "狼", "阿狼", "内鬼" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `沃沃是驕傲的狼人之子，但是因為生性害羞，所以戴上了紙袋來掩飾自己的真正面容。覺得這樣下去不行的她，下定了決心決定離開家鄉要治好自己膽小害羞的毛病，但經過了數月的旅行洗禮，她不但依舊沒辦法接觸他人，反而吃盡了獨自旅行的苦頭，也變得更怕跟他人接觸了。值得一提的是，狼人一族在月圓之夜往往會大大提升攻擊性與性慾，如果在這個時候被狼人抓到的話，就會被……\n\n『不要再過來了，再過來我就要叫了喔……』`,
        [Locale.sc]: `沃沃是骄傲的狼人之子，但是因为生性害羞，所以戴上了纸袋来掩饰自己的真正面容。觉得这样下去不行的她，下定了决心决定离开家乡要治好自己胆小害羞的毛病，但经过了数月的旅行洗礼，她不但依旧没办法接触他人，反而吃尽了独自旅行的苦头，也变得更怕跟他人接触了。值得一提的是，狼人一族在月圆之夜往往会大大提升攻击性与性欲，如果在这个时候被狼人抓到的话，就会被……\n\n『不要再过来了，再过来我就要叫了喔……』`,
        [Locale.en]: `Fufu is proud to be a wolf-girl. Unfortunately, she's unbelievably shy, and wears a paper bag on her head to hide from the world. Finally fed up with her isolation, Fufu decides to leave home and venture out into the world, hopefully to find a way to cure her social anxiety once and for all. And yet, after traveling for months, she realizes she hasn't made any progress, still too scared to talk to anybody. In fact, she's even gotten more afraid of people. Oh yeah, and we should mention, wolf-girls go into super heat whenever there's a full moon. If there's a full moon, and you're caught by a wolf-girl, well...\n\n"Don't come any closer, or I'll scream...!"`,
        [Locale.jp]: `アオンは誇り高き狼人間の子だ。しかし生まれつき恥ずかしがり屋なため、紙袋をかぶって顔を隠している。これではいけないと焦る彼女は、故郷を離れてこの臆病を克服しようと決意した。しかし数か月たった今も、まだ誰とも接触を試みていないのであった。それどころか一人旅の辛さもあって、さらに人と関わることを恐れるようになってしまった。ただ、狼人間は満月の夜になると攻撃性と性欲が大幅に上がる。この時に狼人間につかまれば……\n\n『それ以上近付かないで……近づいたら叫ぶよ……』`,
        [Locale.kr]: `늑대인간 아온은 지나치게 내향적인 성격으로 늘 종이봉투로 자신의 얼굴을 가리고 있다. 자신의 내향적인 성격을 고치기 위해 그녀는 고향을 떠나기로 결심한다. 하지만 몇 달이 자나도 그녀의 내향적인 성격은 개선될 기미가 전혀 없어보인다. 혼자하는 여행으로 산전수전을 다 겪은 아온의 내향적인 성격은 오히려 더 심해지고 말았다. 늑대인간은 매번 보름달이 뜨는 밤이 찾아오면 공격력과 성욕이 대폭 증가하게 되는데 이럴 때 늑대인간에게 붙잡히면......\n\n『더이상 가까이 오지 마세요... 소, 소리 지를 거예요……』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2021/09/08",
    essence: UnitEssence[UnitCode.fufu],
    thumbnail: UnitEssence[UnitCode.fufu],
    selection: UnitSelection[UnitCode.fufu],
    clothes: UnitFullImage[UnitCode.fufu],
    tagList: [],
    otherVersion: [],
    initHP: 3604.799953301259,
    initATK: 977.5995046805056,
    puzzle: [],
    outfits: [],
    skillSet: []
}
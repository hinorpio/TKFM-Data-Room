import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10801: Unit = {
    ID: "10801",
    metaCode: "irene",
    prefix: {
        [Locale.tc]: "雙蛇軍團護士長",
        [Locale.sc]: "双蛇军团护士长",
        [Locale.en]: "Head Nurse",
        [Locale.jp]: "看護師長",
        [Locale.kr]: "군단 간호사장"
    },
    name: {
        [Locale.tc]: "艾琳",
        [Locale.sc]: "艾琳",
        [Locale.en]: "Irene",
        [Locale.jp]: "エリン",
        [Locale.kr]: "아이린"
    },
    abbreviation: {
        [Locale.tc]: [ "人妻", "護士長" ],
        [Locale.sc]: [ "人妻", "护士长" ],
        [Locale.en]: [ "OG.Irene" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `艾琳是雙蛇軍團的護士長，身為護士長的她除了長相貌美以外，也是團長克里斯的愛妻，在團內深得人望，被眾人所敬重。性格溫柔，但也有著堅毅的一面。與克里斯相愛的艾琳一直渴望著能擁有自己的孩子，但是考慮到丈夫的工作，善解人意的她從未將此事說出口。然而在一次的委託中克里斯身受重傷，為了保住丈夫的性命，艾琳瞞著克里斯做出了一件重要的決定……\n\n『我做的這一切都是為了克里斯……』`,
        [Locale.sc]: `艾琳是双蛇军团的护士长，身为护士长的她除了长相貌美以外，也是团长克里斯的爱妻，在团内深得人望，被众人所敬重。性格温柔，但也有着坚毅的一面。与克里斯相爱的艾琳一直渴望着能拥有自己的孩子，但是考虑到丈夫的工作，善解人意的她从未将此事说出口。然而在一次的委托中克里斯身受重伤，为了保住丈夫的性命，艾琳瞒着克里斯做出了一件重要的决定……\n\n『我做的这一切都是为了克里斯……』`,
        [Locale.en]: `Irene is the Twin Snakes Brigade's head nurse. Not just a pretty face, she's also the wife of Captain Chris, and is deeply admired and respected by all within the Brigade. After Chris is severely wounded during a mission, in order to save her husbands life Irene takes matters into her own hands, going behind her husband's back and making a decision with potentially dire consequences...\n\n"Everything I do is for my husband!"`,
        [Locale.jp]: `エリンはカドゥケウス軍団の看護師長。美貌を持つ彼女は軍団の団長クリスの愛妻であり、その性格から人々に慕われ、尊敬されている。エリンはずっと子供が欲しいと願っているが、夫の仕事を考慮し、そのことを口に出せずにいた。ある日、クリスが任務中に重傷を負うと、彼女は夫を救うため、夫に隠れてある重大な決定を下す……\n\n『これはすべて……クリスのため……』`,
        [Locale.kr]: `카두케우스 군단의 간호사장을 맡고 있는 아이린은 아름다운 외모를 가진 군단장 크리스의 사랑하는 아내로서 군단 내에서 높은 명망과 함께 많은 사람의 존경을 한 몸에 받고 있다. 부드러운 성격이지만 또한 강인한 면도 가지고 있다. 크리스와 서로 사랑하는 아이린은 사실 아이를 가지고 싶어 하지만 남편의 직업 때문에 이런 생각을 한 번도 입밖에 내본 적이 없다. 하지만 이번에 위탁받은 임무에서 크리스가 중상을 입자 남편의 생명을 지켜내기 위해 아이린은 남편 몰래 중요한 결정을 하게 되는데......\n\n『이 모든 것은 모두 크리스를 위해서야......』`
    },
    rarity: Rarity.R,
    element: Element.LIGHT,
    position: Position.HEALER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.irene],
    thumbnail: UnitEssence[UnitCode.irene],
    selection: UnitSelection[UnitCode.irene],
    clothes: UnitFullImage[UnitCode.irene],
    tagList: [ 
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_HEALER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_GIANT_TITS, 
        TagID.OTHER_RECOVERY,
    ],
    otherVersion: [ UnitCode.d_irene ],
    puzzle: [],
    skillSet: []
}
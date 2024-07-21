import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10807: Unit = {
    ID: "10807",
    metaCode: "yoi",
    prefix: {
        [Locale.tc]: "流浪魔法師",
        [Locale.sc]: "流浪魔法师",
        [Locale.en]: "Wandering Witch",
        [Locale.jp]: "流れ者の魔法使い",
        [Locale.kr]: "유랑 마법사"
    },
    name: {
        [Locale.tc]: "尤依",
        [Locale.sc]: "尤依",
        [Locale.en]: "Yoi",
        [Locale.jp]: "ユイ",
        [Locale.kr]: "유이"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `尤依是在世界流浪的魔法師，她有著旺盛的求知慾，因此總是不斷的在旅行，探索失落的遺跡，並對未有人涉足過的未知領域進行研究。她對世界的戰亂漠不關心，只管沉浸在自己的世界裡。為了找出魔王強大的真相，選擇加入了魔王軍，只要能得到研究用的素材，即使需要對凱薩獻身也毫不在意。只是在研究的過程中，一直以來被尤依忽略的情慾也在凱薩的調教下逐漸覺醒……\n\n『下一次要去哪一個神殿好呢……』`,
        [Locale.sc]: `尤依是在世界流浪的魔法师，她有着旺盛的求知欲，因此总是不断的在旅行，探索失落的遗迹，并对未有人涉足过的未知领域进行研究。她对世界的战乱漠不关心，只管沉浸在自己的世界里。为了找出魔王强大的真相，选择加入了魔王军，只要能得到研究用的素材，即使需要对凯萨献身也毫不在意。只是在研究的过程中，一直以来被尤依忽略的情欲也在凯萨的调教下逐渐觉醒……\n\n『下一次要去哪一个神殿好呢……』`,
        [Locale.en]: `Yoi is a wandering witch on a never-ending quest for knowledge, with a huge interest in exploring unmapped territories and forgotten ruins. She doesn't care much for the war and chaos around her, choosing to live in her own world. Fascinated by what makes Archdemon Caesar so strong, she chooses to follow him around in his invasion of the human realm "for research". Little does she know, that "research" just might lead to a sexual awakening she's been repressing for too long.\n\n"Hmm, which ancient ruins should I visit next?"`,
        [Locale.jp]: `ユイは世界を放浪する魔法使い。知識の探求が大好きで、あちこちを旅しては失われた遺跡を探索し、だれもが足を踏み入れたことのない領域の研究をしている。世界の戦乱には少しも関心が無く、いつも自分の世界に入り浸っている。魔王の強大な力の真相を探るために魔王軍に入ることを決めた彼女は、研究用の素材を手に入れるためなら、シーザーに体を捧げることも躊躇しない。ユイが気にも留めなかった情欲が、シーザーの調教によって目覚めていくのであった……\n\n『次はどこの神殿に行こうかな……』`,
        [Locale.kr]: `유이는 세상을 떠돌아다니는 마법사이다. 그녀는 왕성한 탐구욕을 가지고 있으며 언제나 끝없이 여행 중이다. 잃어버린 유적을 탐색하거나 사람의 발길이 닿지 않은 미지의 영역에서 연구를 하곤 한다. 그녀는 세계의 전란에 대해 전혀 관심이 없지만 단지 자신의 세계에 빠져 마왕의 강력한 힘의 실체를 찾아내기 위해 마왕 군에 입대한다. 연구에 필요한 소재를 얻을 수만 있다면 시저에게 몸을 바치는 것도 마다하지 않는다. 다만 이 연구 과정을 통해 유이가 그동안 잊고 있었던 성욕이 시저의 조련 아래 점점 깨어나고 있었다......\n\n『다음번에는 어느 신전을 가는 것이 좋을까......』`
    },
    rarity: Rarity.R,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.yoi],
    thumbnail: UnitEssence[UnitCode.yoi],
    selection: UnitSelection[UnitCode.yoi],
    clothes: UnitFullImage[UnitCode.yoi],
    tagList: [ 
        TagID.ELEMENT_FIRE, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_HUMAN, 
        TagID.BODY_SMALL_SIZED, 
        TagID.BREAST_GIANT_TITS, 
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_MORE_POWER,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
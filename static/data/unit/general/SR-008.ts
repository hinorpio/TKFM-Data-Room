import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10016: Unit = {
    ID: "10016",
    metaCode: "britney",
    prefix: {
        [Locale.tc]: "天才女軍師",
        [Locale.sc]: "天才女军师",
        [Locale.en]: "Genius Tactician",
        [Locale.jp]: "天才女軍師",
        [Locale.kr]: "천재 여군사"
    },
    name: {
        [Locale.tc]: "布蘭妮",
        [Locale.sc]: "布兰妮",
        [Locale.en]: "Britney",
        [Locale.jp]: "ブリトニー",
        [Locale.kr]: "브리트니"
    },
    abbreviation: {
        [Locale.tc]: [ "普軍", "軍師", "軍" ],
        [Locale.sc]: [ "普军", "军师", "军" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `自稱為天才的布蘭妮的實力是貨真價實的。雖然個性隨心所欲，給人一種輕浮的感覺，但即使再討厭布蘭妮的人，都得承認她的才能。假使一般的軍師能夠推測得到敵軍未來五步的動向，那麼布蘭妮就是能夠預測敵人未來百步動向的超優秀天才。布蘭妮如同傭兵一樣毫無忠誠，居無定所的她後來被財力雄厚的帝國邀請，定居於法斯帝國，從此為帝國出謀劃策。\n\n『唉呀呀，我又不小心贏了嗎？呵呵。』`,
        [Locale.sc]: `自称为天才的布兰妮的实力是货真价实的。虽然个性随心所欲，给人一种轻浮的感觉，但即使再讨厌布兰妮的人，都得承认她的才能。假使一般的军师能够推测得到敌军未来五步的动向，那么布兰妮就是能够预测敌人未来百步动向的超优秀天才。布兰妮如同佣兵一样毫无忠诚，居无定所的她后来被财力雄厚的帝国邀请，定居于法斯帝国，从此为帝国出谋划策。\n\n『唉呀呀，我又不小心赢了吗？呵呵。』`,
        [Locale.en]: `A self-proclaimed strategical genius, Britney can seem quite impulsive and rather floaty. Still, even those who don't much care for her have to acknowledge her talent. If your average tactician is five steps ahead of the enemy, then Britney's 100 steps ahead. As merciless as a mercenary, and something of a vagrant—she was finally invited by the wealthy Phasi Empire to live there as a permanent tactician.\n\n"Oh no, did I win again? Sorry."`,
        [Locale.jp]: `自称天才のブリトニーの実力は本物だ。好き勝手に行動する性格でおっちょこちょいだと思われており、どんなに彼女を嫌いな人でもその実力を認めないものはいない。一般的な軍師が敵軍の動向を5歩予測できるとすれば、ブリトニーは100歩予測できる超天才なのだ。ブリトニーは傭兵のように忠誠心が一切なく、住むところが無かった彼女は、財力に富んだ帝国に招待され、フォス帝国に住むことになった。そして帝国のために戦略を練っているのだ。\n\n『あらら、また勝っちゃったの？ヘヘッ』`,
        [Locale.kr]: `자칭 천재인 브리트니는 그에 걸맞은 실력을 보유하고 있다. 제멋대로의 성격 때문에 가벼운 느낌을 주곤 하지만 아무리 브리트니를 싫어하는 사람이라도 그녀의 재능만큼을 부정할 수 없다. 만약 일반 참모가 적의 다섯 수 앞을 예측할 수 있다면 브리트니는 적의 백 수 앞을 내다볼 수 있는 천재이다. 용병과 같이 전혀 충성심이 없고 사는 곳도 일정하지 않았던 그녀는 엄청난 재력을 자랑하는 파스제국의 초청에 따라 제국 내에 거처를 잡고 제국을 위해 전략을 제공하고 있다.\n\n『아아앗. 그만 또 실수로 이겨버렸잖아? 히힛.』`
    },
    rarity: Rarity.SR,
    element: Element.LIGHT,
    position: Position.OBSTRUCTER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.britney],
    thumbnail: UnitEssence[UnitCode.britney],
    selection: UnitSelection[UnitCode.britney],
    clothes: UnitFullImage[UnitCode.britney],
    tagList: [
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_OBSTRUCTER, 
        TagID.SPECIES_HUMAN, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_ELITE, 
        TagID.OTHER_SUPPORT,
        TagID.OTHER_WEAKEN,
        TagID.OTHER_EXPLOSIVENESS,
        TagID.OTHER_AOE,
    ], 
    otherVersion: [ UnitCode.h_britney, UnitCode.m_britney ],
    puzzle: [],
    skillSet: []
}
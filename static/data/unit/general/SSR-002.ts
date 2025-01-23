import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10002: Unit = {
    ID: "10002",
    metaCode: "satan",
    prefix: {
        [Locale.tc]: "魔王",
        [Locale.sc]: "魔王",
        [Locale.en]: "Archdemon",
        [Locale.jp]: "魔王",
        [Locale.kr]: "마왕"
    },
    name: {
        [Locale.tc]: "撒旦",
        [Locale.sc]: "撒旦",
        [Locale.en]: "Satan",
        [Locale.jp]: "サタン",
        [Locale.kr]: "사탄"
    },
    abbreviation: {
        [Locale.tc]: [ "普撒", "魔撒", "解撒", "撒" ],
        [Locale.sc]: [ "普撒", "魔撒", "解撒", "撒" ],
        [Locale.en]: [ "OG.Satan" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `撒旦是魔界成名已久的魔王，性格殘暴、喜愛殺戮，在魔界稱霸一方。撒旦認為只有擁有深厚慾望的魔族才是正統，因此她嗜殺，沉溺於情慾且毫不掩飾。當凱薩繼位時，撒旦曾一度出現在繼位大典上，並且與凱薩展開了長達數天數夜的廝殺，戰後兩人重傷各自退去，並且對當時的戰鬥結果閉口不言，從此兩人再未見面。但是不管是撒旦還是凱薩都知道，兩人在未來必有一戰。\n\n『呵呵呵，世界上只有兩種人，支配者與被支配者，凱薩你又是哪一種呢？』`,
        [Locale.sc]: `撒旦是魔界成名已久的魔王，性格残暴、喜爱杀戮，在魔界称霸一方。撒旦认为只有拥有深厚欲望的魔族才是正统，因此她嗜杀，沉溺于情欲且毫不掩饰。当凯萨继位时，撒旦曾一度出现在继位大典上，并且与凯萨展开了长达数天数夜的厮杀，战后两人重伤各自退去，并且对当时的战斗结果闭口不言，从此两人再未见面。但是不管是撒旦还是凯萨都知道，两人在未来必有一战。\n\n『呵呵呵，世界上只有两种人，支配者与被支配者，凯萨你又是哪一种呢？』`,
        [Locale.en]: `Satan's been archdemon for ages. She's got a real temper, loves to kill, and controls her territory with an iron fist! According to Satan, only those with intense, burning desire are fit to be archdemon, which is why she doesn't hide her absolute love for sex and violence! When Caesar was being appointed as a new archdemon, Satan crashed his ceremony and challenged him to a fierce battle that lasted days! After it finally ended in a stalemate, both parties dragged themselves back home to lick their wounds. Neither has acknowledged each other since. And yet they both know that one day they will meet again, to finish the fight...\n\n"There's only two types of people in this world: conquerers and the conquered! Which one are you, Caesar!?"`,
        [Locale.jp]: `サタンは魔界で有名な魔王だ。残虐な性格で殺戮を好み、魔界の一地方を制覇している。深い欲望を持つ魔族だけが正統であると考えており、殺しを趣味にしている。また、情欲に溺れてもそれを一切隠す事は無い。シーザーが地位を受け継ぐ際、サタンはその式典に顔を出し、そこで数日にわたる殺し合いをした。二人とも重傷を負い互いに退き、戦いの結果を口外しないことと今後会わないことを約束した。しかしサタンもシーザーも、かならずまた戦う日が来ると確信していた。\n\n『フフフッ、この世界にはたった2種類しかいないの。支配する者か支配されるものか。シーザー、あなたはどっち？』`,
        [Locale.kr]: `사탄은 마계에서 오랫동안 명성을 떨친 마왕이다. 성격이 잔인하고 살육하는 것을 즐기는 그녀는 마계의 한축을 맡고 있는 강자이다. 그렇기에 폭력이나 성욕에 대한 갈망을 전혀 감추지 않는다. 사탄은 시저가 마왕의 자리를 물려받는 즉위 행사에 나타나 시저와 몇 날 며칠에 거친 대전투를 벌인다. 전투가 끝나고 둘은 모두 중상을 입고 그곳을 떠난 뒤 지금까지도 결과에 대해 함구한 채 서로 만나지 않고 있다. 하지만 사탄과 시저는 서로 언젠가 다시 만나 자웅을 겨루게 될 것을 잘 알고 있다.\n\n『하하핫. 세상에는 지배자와 피지배자, 단 두 종류의 부류만 존재하지. 시저 넌 그중에 어떤 부류인 거지?』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.satan],
    thumbnail: UnitEssence[UnitCode.satan],
    selection: UnitSelection[UnitCode.satan],
    clothes: UnitFullImage[UnitCode.satan],
    tagList: [ 
        TagID.ELEMENT_DARK, 
        TagID.POSITION_PROTECTOR, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.BREAST_GIANT_TITS, 
        TagID.CLASS_LEADER, 
        TagID.OTHER_DEFENSE, 
        TagID.OTHER_SURVIVABILLITY, 
        TagID.OTHER_COUNTERSTRIKE,
    ],
    otherVersion: [ UnitCode.e_satan, UnitCode.b_satan, UnitCode.v_satan, UnitCode.s_satan, UnitCode.h_satan ],
    puzzle: [ PuzzleCode.EVENT_2021_XMAS_2, PuzzleCode.EVENT_2023_CNY_1 ],
    skillSet: []
}
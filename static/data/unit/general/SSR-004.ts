import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10004: Unit = {
    ID: "10004",
    metaCode: "salucia",
    prefix: {
        [Locale.tc]: "精靈王",
        [Locale.sc]: "精灵王",
        [Locale.en]: "Elf Queen",
        [Locale.jp]: "エルフ王",
        [Locale.kr]: "엘프의 왕"
    },
    name: {
        [Locale.tc]: "賽露西亞",
        [Locale.sc]: "赛露西亚",
        [Locale.en]: "Salucia",
        [Locale.jp]: "セルシア",
        [Locale.kr]: "살루시아"
    },
    abbreviation: {
        [Locale.tc]: [ "精靈王", "普精", "解精", "大王", "精", "跳蛋" ],
        [Locale.sc]: [ "精灵王", "普精", "解精", "大王", "精", "跳蛋" ],
        [Locale.en]: [ "Salu", "OG.Salu", "OG.Salucia" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `溫柔婉約的賽露西亞是統治精靈族長達3000年之久的精靈女王，她知書達禮，即使是面對敵人也不會惡語相向。不願與人類鬥爭的賽露西亞帶著精靈們隱居在迷霧之森，建立了只屬於精靈的國度，並設置了大型的結界，只有得到精靈認可的人才能踏入森林，成功抵達精靈之國。受到所有子民尊敬與愛戴的賽露西亞從未讓期待她的人失望過，只是在那溫柔笑臉的背後，似乎藏著濃濃的倦意。\n\n『眼前還有更重要的事需要處理，我還不能休息……』`,
        [Locale.sc]: `温柔婉约的赛露西亚是统治精灵族长达3000年之久的精灵女王，她知书达礼，即使是面对敌人也不会恶语相向。不愿与人类斗争的赛露西亚带着精灵们隐居在迷雾之森，建立了只属于精灵的国度，并设置了大型的结界，只有得到精灵认可的人才能踏入森林，成功抵达精灵之国。受到所有子民尊敬与爱戴的赛露西亚从未让期待她的人失望过，只是在那温柔笑脸的背后，似乎藏着浓浓的倦意。\n\n『眼前还有更重要的事需要处理，我还不能休息……』`,
        [Locale.en]: `The warm, compassionate Salucia has been queen of Oberia, the elven kingdom, for over 3000 years. She is learned and respectful, facing her enemies without malice or vitriol. Not wanting war with the humans, Salucia established Oberia deep within the Misty Forest, safe under a magic barrier through which only those recognized by the Elves can pass. Looked upon with nothing but adoration from her subjects, Salucia has never made a promise she couldn't keep. And yet, behind that perpetual smile, hides a tired soul in need of a good rest.\n\n"There's no time for rest, I still have much to take care of..."`,
        [Locale.jp]: `優しいセルシアはエルフ族の長として3000年にわたってエルフの国の女王の地位に立っている。教養も礼儀も身についており、敵であっても決して無礼な発言をしない。人類との争いを望まないセルシアはエルフたちを引き連れ霧の森でひっそりと暮らし、エルフたちだけの国を創り、巨大な結界を張った。エルフに認められた者だけが森に入り、エルフの国に行くことができる。全ての民の尊敬と敬愛を受けるセルシアは、彼女に期待する人々を失望させたことが無い。ただその柔らかい笑顔の裏には、溜まりに溜まった疲れが隠れている。\n\n『まだやるべきことがたくさんあります。だから、休んでなんかいられない……』`,
        [Locale.kr]: `여성스럽고 부드러운 성격의 살루시아는 엘프족을 3,000년이 넘게 다스려온 엘프 여왕이다. 그녀는 예의범절이 바르며 설령 적을 상대한다 하더라도 심한 말을 하지 않는다. 인간들과 전쟁을 하고 싶어 하지 않는 살루시아는 엘프들을 이끌고 안개의 숲으로 들어가 은신해 생활하도록 하였다. 그녀는 엘프들만의 나라를 건설한 이후 대형의 결계를 만들어, 엘프들에게 허가받은 자만 안개의 숲을 통해 엘프국으로 들어설 수 있도록 하였다. 백성들의 존경과 사랑을 한 몸에 받는 살루시아는 단 한 번도 그녀에게 쏟아지는 기대를 저버린 적이 없다. 다만, 그 인자로운 미소 뒤에는 짙은 피로가 숨겨져 있는 듯하다.\n\n『눈 앞에 있는 더 중요한 일들을 처리해야만 해. 난 아직 쉴 수 없는 걸......』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.salucia],
    thumbnail: UnitEssence[UnitCode.salucia],
    selection: UnitSelection[UnitCode.salucia],
    clothes: UnitFullImage[UnitCode.salucia],
    tagList: [
        TagID.ELEMENT_WIND,
        TagID.POSITION_SUPPORTER,
        TagID.SPECIES_DEMIHUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_GIANT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_SUPPORT,
        TagID.OTHER_EXPLOSIVENESS,
    ],
    otherVersion: [ UnitCode.h_salucia, UnitCode.ny_salucia, UnitCode.s_salucia ],
    initHP: 3635.2,
    initATK: 880,
    puzzle: [],
    outfits: [],
    skillSet: []
}
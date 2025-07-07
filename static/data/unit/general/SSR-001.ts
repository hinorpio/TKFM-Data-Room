import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10001: Unit = {
    ID: "10001",
    metaCode: "baal",
    prefix: {
        [Locale.tc]: "魔王",
        [Locale.sc]: "魔王",
        [Locale.en]: "Archdemon",
        [Locale.jp]: "魔王",
        [Locale.kr]: "마왕"
    },
    name: {
        [Locale.tc]: "巴爾",
        [Locale.sc]: "巴尔",
        [Locale.en]: "Ba'al",
        [Locale.jp]: "バル",
        [Locale.kr]: "바알"
    },
    abbreviation: {
        [Locale.tc]: [ "普巴", "魔巴", "解巴", "巴", "82" ],
        [Locale.sc]: [ "普巴", "魔巴", "解巴", "巴", "82" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `巴爾是魔界現存的四名魔王之一，善於經營的她掌有魔界商業發展最蓬勃、最富饒的領地。她的性格狡猾，只要對自己有利，就算要對比自身地位低下的人獻媚也不會有一丁點猶豫。不過要是因此對她掉以輕心那就犯下大錯了，一旦情勢不對，巴爾就會把麻煩推給同盟或信任她的人，自己則溜之大吉。巴爾擅長用言語以及幻術將他人玩弄於股掌，然而她的小聰明一旦遇到不講道理的對象，往往會讓巴爾自食惡果……\n\n『凱薩？嘻嘻，追得到我就來呀？』`,
        [Locale.sc]: `巴尔是魔界现存的四名魔王之一，善于经营的她掌有魔界商业发展最蓬勃、最富饶的领地。她的性格狡猾，只要对自己有利，就算要对比自身地位低下的人献媚也不会有一丁点犹豫。不过要是因此对她掉以轻心那就犯下大错了，一旦情势不对，巴尔就会把麻烦推给同盟或信任她的人，自己则溜之大吉。巴尔擅长用言语以及幻术将他人玩弄于股掌，然而她的小聪明一旦遇到不讲道理的对象，往往会让巴尔自食恶果……\n\n『凯萨？嘻嘻，追得到我就来呀？』`,
        [Locale.en]: `Ba'al is one of the demon realm's four current archdemons, and is in charge of the realm's most prosperous chunk of territory. She's quite conniving, and would gladly throw you under the bus for a nickel, then push responsibility to those around her while slipping out the back door the second things go away. She can talk her way out of anything, and loves to use her silver tongue, and a bit of magic, to get others to do her bidding. Still, the second she meets someone who doesn't play by her rules, her tricks tend to backfire... \n\n"Caesar? Heh, catch me if you can~"`,
        [Locale.jp]: `バルは魔界に存在する4人の魔王の一人。経営が得意な彼女は魔界で一番多くの富を手にし、商業が一番発展した地域を支配している。ずる賢い性格で、自分に利益があると分かれば自分より地位の低い相手に対しても迷うことなく媚を売る。しかしその衝動的な性格で面倒ごとを招くことがあり、不利な状況になるとそれを同盟や信頼されている人に押し付け、美味しいところだけを独占する。バルは言葉と魔術で他人を弄ぶのが得意で、頭のいい彼女は道理をわきまえない相手に出会うと、痛い目に合わせるのだ。\n\n『シーザー？ふふ、追っかけられるもんなら追っかけてみなさい』`,
        [Locale.kr]: `바알은 마계에 현존하는 4대 마왕 중의 한 명이다. 경영에 능한 그녀는 마계에서 상업이 가장 발달한 풍요로운 영지를 보유하고 있다. 교활한 바알은 자신에게 도움이 되는 일이라면 자신보다 신분이 낮은 자에게도 애교를 부리는데 전혀 주저하지 않는다. 하지만 이런 바알에게 방심한다면 큰 피해를 겪게 될 것이다. 언제나 상황이 여의치 않으면 바알은 골칫거리를 모두 동맹이나 그녀를 신뢰하는 사람에게 맡겨버리고 정작 자신은 줄행랑을 치곤 한다. 바알은 달콤한 말과 환영술로 다른 사람을 손안에 넣고 조종하는데 능하다. 그러나 이렇게 약삭빠른 그녀도 만약 전혀 말이 통하지 않는 상대를 만나면 오히려 제 발등에 도끼를 찍는 결과를 초래하고 만다......\n\n『시저? 히히. 날 잡을 수 있으면 잡아보라고 해~!』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.baal],
    thumbnail: UnitEssence[UnitCode.baal],
    selection: UnitSelection[UnitCode.baal],
    clothes: UnitFullImage[UnitCode.baal],
    tagList: [
        TagID.ELEMENT_FIRE, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.CLASS_LEADER, 
        TagID.OTHER_DAMAGE_OUTPUT,
    ], 
    otherVersion: [ UnitCode.f_baal, UnitCode.b_baal, UnitCode.v_baal, UnitCode.s_baal, UnitCode.x_baal ],
    initHP: 3476.8,
    initATK: 920,
    puzzle: [ PuzzleCode.EVENT_2022_XMAS_1, PuzzleCode.EVENT_2023_CNY_1, PuzzleCode.EVENT_2024_XMAS_2 ],
    outfits: [],
    skillSet: []
}
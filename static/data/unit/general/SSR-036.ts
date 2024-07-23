import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10079: Unit = {
    ID: "10079",
    metaCode: "tm_ritsuki",
    prefix: {
        [Locale.tc]: "新春",
        [Locale.sc]: "新春",
        [Locale.en]: "True Moon",
        [Locale.jp]: "新春",
        [Locale.kr]: "신춘"
    },
    name: {
        [Locale.tc]: "凜月",
        [Locale.sc]: "凛月",
        [Locale.en]: "Ritsuki",
        [Locale.jp]: "凛月",
        [Locale.kr]: "리츠키"
    },
    abbreviation: {
        [Locale.tc]: [ "春忍" ],
        [Locale.sc]: [ "春忍" ],
        [Locale.en]: [ "Tm.Ritsuki" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `凜月第一次不是作為護衛的身分參加初詣。原本要在繪馬上寫下「守護千鶴公主」的祈願，卻被千鶴指出凜月已經沒有保護她的義務，應該要許下新的願望。凜月因此陷入思考，自己的願望為何物？\n\n『正月是新一年的開始，也祝您今年都能順遂平安。』`,
        [Locale.sc]: `凛月第一次不是作为护卫的身分参加初诣。原本要在绘马上写下「守护千鹤公主」的祈愿，却被千鹤指出凛月已经没有保护她的义务，应该要许下新的愿望。凛月因此陷入思考，自己的愿望为何物？\n\n『正月是新一年的开始，也祝您今年都能顺遂平安。』`,
        [Locale.en]: `Ritsuki is finally off of babysitter duty. In fact, just as she was about to throw in a New Year's wish for Chizuru's safety, Chizuru reminded her that she's not a princess anymore, and Ritsuki should choose a new wish. So that got Ritsuki to thinking... what does "Ritsuki" want?\n\n"True Moon is the start of our new year. I hope it finds you well."`,
        [Locale.jp]: `凛月は初めて護衛としてではなく、一般人の身分で初詣に参加した。絵馬に「千鶴姫を守る」と祈りの言葉を書くつもりだったが、千鶴は凛月にはもう千鶴を守る義務はないとして、他の願い事を書くように言った。そして凛月は考えた。自分の願いとは何か……\n\n『正月は新しい1年の始まりを祝い、一年の安泰を祈願する行事です』`,
        [Locale.kr]: `처음으로 호위 닌자의 신분이 아닌 일반인의 신분으로 새해맞이 신사참배에 참여하게 되었다. 본래 에마(繪馬)에 [치즈루 님을 지켜달라]는 소원을 적으려 했던 리츠키. 하지만 치즈루가 말한대로 리츠키는 더 이상 호위 닌자의 신분이 아니었으므로 다른 새로운 소원을 빌어야만 했다. 골똘히 생각에 잠기고만 리츠키.\n\n『새해의 시작에도 당신의 평안과 안녕을 기원하겠습니다.』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/01/16",
    essence: UnitEssence[UnitCode.tm_ritsuki],
    thumbnail: UnitEssence[UnitCode.tm_ritsuki],
    selection: UnitSelection[UnitCode.tm_ritsuki],
    clothes: UnitFullImage[UnitCode.tm_ritsuki],
    tagList: [],
    otherVersion: [ UnitCode.ritsuki ],
    puzzle: [],
    skillSet: []
}
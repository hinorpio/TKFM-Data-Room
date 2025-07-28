import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10177: Unit = {
    ID: "10177",
    metaCode: "sky_nanami",
    prefix: {
        [Locale.tc]: "天際領航員",
        [Locale.sc]: "天际领航员",
        [Locale.en]: "Sky-High Navigator",
        [Locale.jp]: "パイロット",
        [Locale.kr]: "천공의 승무원"
    },
    name: {
        [Locale.tc]: "星空奈奈美",
        [Locale.sc]: "星空奈奈美",
        [Locale.en]: "Nanami",
        [Locale.jp]: "星空ななみ",
        [Locale.kr]: "나나미"
    },
    abbreviation: {
        [Locale.tc]: [ "空奈", "天美" ],
        [Locale.sc]: [ "空奈", "天美" ],
        [Locale.en]: [ "Sky.Nanami" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "승나미" ]
    },
    background: {
        [Locale.tc]: `因為擁有魔界裡稀有的航空知識，奈奈美被巴爾親自指名為「巴爾航空」的專屬顧問及首席空服員。儘管沒有實際擔任過空服員的經驗，但要做的事情和服務生差不多，應該沒什麼問題吧？抱持著這個天真的想法，奈奈美在面對一群毫無科技觀念的野蠻人們後，開始對自己當初的草率決定感到懊悔。暴增的工作量、失控的乘客、還有為高級貴賓提供「特殊服務」。這條看似光鮮亮麗，實則災難連連的航空之路，充滿了各種預料之外的挑戰。即便如此，奈奈美依然笑著面對每一位乘客，今天的她，依然是天空中最閃耀的那顆星。\n\n『各位貴賓大家好~歡迎搭乘巴爾航空，有任何需求都可以和奈奈美說唷~』`,
        [Locale.sc]: `因为拥有魔界里稀有的航空知识，奈奈美被巴尔亲自指名为「巴尔航空」的专属顾问及首席空服员。儘管没有实际担任过空服员的经验，但要做的事情和服务生差不多，应该没什麽问题吧？抱持着这个天真的想法，奈奈美在面对一群毫无科技观念的野蛮人们后，开始对自己当初的草率决定感到懊悔。暴增的工作量、失控的乘客、还有为高级贵宾提供「特殊服务」。这条看似光鲜亮丽，实则灾难连连的航空之路，充满了各种预料之外的挑战。即便如此，奈奈美依然笑着面对每一位乘客，今天的她，依然是天空中最闪耀的那颗星。\n\n『各位贵宾大家好~欢迎搭乘巴尔航空，有任何需求都可以和奈奈美说唷~』`,
        [Locale.en]: `Due to her rare knowledge of aviation in the Demon Realm, Nanami is personally appointed by Ba'al as the exclusive advisor and chief flight attendant of Ba'al Airlines. Despite having no actual experience as a stewardess, Nanami figures the job is probably similar to being a waitress. After all, how hard could it be, right? Clinging to this naive thought, Nanami soon regrets her hasty decision after facing a horde of tech-ignorant barbarians. A skyrocketing workload, unruly passengers, and the added pressure of providing "special services" for VIP club members. This seemingly glamorous airline path has turned out to be a string of disasters, packed with unexpected challenges. Even so, Nanami faces every passenger with a radiant smile, and today, she remains the brightest star in the skies.\n\n"Dear esteemed guests, welcome aboard Ba'al Airlines~ Feel free to let me know if you have any requests~!"`,
        [Locale.jp]: `魔界でも希少な航空知識を持つななみは、バル本人から「バル航空」の専属アドバイザー兼チーフパーサーに指名された。キャビンアテンダントの経験はないけど、接客業と大差ないはずだから、きっと大丈夫でしょ？そんな甘い考えは、科学技術の概念すらない野蛮人たちと接するうちに、後悔へと変わっていく。激増する業務量、手に負えない乗客、そしてVIP向けの「特別なサービス」。華やかに見えて実は災難続きのフライト。想定外の試練の連続。それでもななみは笑顔を絶やさず乗客と向き合う。今日も彼女は、大空で一番輝く星なのだから。\n\n『皆様、こんにちは~バル航空をご利用いただきありがとうございます。ご要望がございましたら、ななみにお申し付けくださいませ~』`,
        [Locale.kr]: `마계에서 희귀한 항공 지식을 보유한 덕분에, 나나미는 바알로부터 직접 「바알 항공」의 전속 컨설턴트이자 수석 승무원으로 스카우트되었다. 승무원 경험은 전혀 없지만, 서비스직이랑 비슷하지 않겠어? 별문제 없겠지? 이런 순진한 생각을 품은 나나미는, 기술 문명이라고는 전혀 모르는 야만인 무리들을 마주한 후, 자신의 성급한 결정을 후회하기 시작했다. 폭증하는 업무량, 통제 불능의 승객들, 그리고 고급 VIP를 위한 「특별 서비스」까지. 겉보기엔 화려해 보이지만, 실상은 재난의 연속인 항공 업계 안에는 예상치 못한 도전으로 가득하다. 그럼에도 불구하고, 나나미는 여전히 모든 승객을 미소로 맞이하며, 오늘도 그녀는 하늘에서 가장 빛나는 별이 되어주고 있다.\n\n『승객 여러분, 안녕하세요~ 바알 항공에 오신 걸 환영합니다! 어떤 요청이든 나나미에게 말씀해 주세요~』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.SUPPORTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2025/07/16",
    essence: UnitEssence[UnitCode.sky_nanami],
    thumbnail: UnitEssence[UnitCode.sky_nanami],
    selection: UnitSelection[UnitCode.sky_nanami],
    clothes: UnitFullImage[UnitCode.sky_nanami],
    tagList: [],
    otherVersion: [ UnitCode.nanami, UnitCode.m_nanami ],
    initHP: 3918.4,
    initATK: 899.2,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.sky_nanami],
    skillSet: []
}
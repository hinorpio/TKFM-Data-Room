import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10141: Unit = {
    ID: "10141",
    metaCode: "a_nana",
    prefix: {
        [Locale.tc]: "調查員",
        [Locale.sc]: "调查员",
        [Locale.en]: "Agent",
        [Locale.jp]: "調査員",
        [Locale.kr]: "수사관"
    },
    name: {
        [Locale.tc]: "娜娜",
        [Locale.sc]: "娜娜",
        [Locale.en]: "Nana",
        [Locale.jp]: "ナナ",
        [Locale.kr]: "나나"
    },
    abbreviation: {
        [Locale.tc]: [ "皮娜" ],
        [Locale.sc]: [ "皮娜" ],
        [Locale.en]: [ "A.Nana" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "관나나" ]
    },
    background: {
        [Locale.tc]: `接獲來自鄉間村落的奇怪報告，娜娜為了確認自己部下的安危，準備親自出動，開始執行機密調查任務。為此，她換上牧愛菈開發的高性能調查服，拿上最新型的武器，化身成搜查官開始了潛入行動。雖然作為魔王軍情報部隊隊長，娜娜對於自己的身手很有自信。可是…她這次要調查的地方，和以往遇到的似乎有些不一樣。在前方等待調查員娜娜的…究竟會是什麼樣的謎團…？\n\n『速戰速決喵，任務完成後，本喵就要趕回去做其他工作了。』`,
        [Locale.sc]: `接获来自乡间村落的奇怪报告，娜娜为了确认自己部下的安危，准备亲自出动，开始执行机密调查任务。为此，她换上牧爱菈开发的高性能调查服，拿上最新型的武器，化身成搜查官开始了潜入行动。虽然作为魔王军情报部队队长，娜娜对于自己的身手很有自信。可是…她这次要调查的地方，和以往遇到的似乎有些不一样。在前方等待调查员娜娜的…究竟会是什么样的谜团…？\n\n『速战速决喵，任务完成后，本喵就要赶回去做其他工作了。』`,
        [Locale.en]: `After receiving a strange report from a rural village, Nana prepares to head out on a confidential investigation to confirm the safety of her missing informant. She slips into Muila's specially designed investigator's outfit, grabs her newest weapon, and sets out on her sneaky mission. Although she is confident in her abilities as head of the Archdemon's intelligence unit…… what she encounters on this mission is far stranger than anything she has ever dealt with while on the job. What mysteries await Nana…?\n\n"Meow, speed is the name of the game. This kitty agent is going to wrap up this conundrum, then head straight home."`,
        [Locale.jp]: `田舎の村から妙な報告を受けたナナは、部下の身の安全を確認するために、自ら機密調査の任務につくことにした。彼女はマイラが開発した高性能の調査服に着替え、最新型の武器を手に取り、調査員になって村に潜入する。魔王軍情報部隊の隊長であるナナは、自分の身のこなしに自信を持っていた。しかし…今回調査する場所は、今までとは何か違うようだ。調査員ナナを待ち受けているのは…一体どんな謎なのだろうか…？\n\n『速戦即決にゃ。任務が終わったら、戻って他の仕事をやらないといけないにゃ』`,
        [Locale.kr]: `변두리 마을로부터 이상한 보고를 받은 나나. 부하의 안위를 확인하기 위해 직접 기밀 조사 임무에 나선다. 이를 위해 무엘라가 개발한 고성능 수사복으로 갈아입고 최신형 무기를 챙긴 나나는 수사관이 되어 잠입 작전에 착수한다. 마왕군 정보부대의 대장이지만 나나는 본인의 전투 실력에도 나름 자신을 가지고 있다. 하지만... 이번 조사 장소는 예전과는 사뭇 다른 것 같다. 수사관 나나 앞에... 과연 어떤 미스터리한 일들이 기다리고 있을지?\n\n『속전속결이다냥! 임무 완수 후 서둘러 다른 업무를 보러 가야 한다냥.』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/05/08",
    essence: UnitEssence[UnitCode.a_nana],
    thumbnail: UnitEssence[UnitCode.a_nana],
    selection: UnitSelection[UnitCode.a_nana],
    clothes: UnitFullImage[UnitCode.a_nana],
    tagList: [],
    otherVersion: [ UnitCode.nana, UnitCode.s_nana, UnitCode.c1_nana, UnitCode.o_nana ],
    puzzle: [],
    outfits: [],
    skillSet: []
}
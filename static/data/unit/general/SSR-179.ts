import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10208: Unit = {
    ID: "10208",
    metaCode: "elsa",
    prefix: {
        [Locale.tc]: "精靈偶像",
        [Locale.sc]: "精灵偶像",
        [Locale.en]: "Elf Idol",
        [Locale.jp]: "エルフ配信者",
        [Locale.kr]: "엘프 아이돌"
    },
    name: {
        [Locale.tc]: "莉莉艾爾莎",
        [Locale.sc]: "莉莉艾尔莎",
        [Locale.en]: "Lily Elsa",
        [Locale.jp]: "リリエルザ",
        [Locale.kr]: "릴리엘자"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `面對平民娛樂的新潮流，莉莉艾爾莎選擇乘上流行的浪頭，化身為直播偶像。儘管自己是個長時間待在森林深處，已經兩百歲的老貴族精靈，她依然相信自己能成為偶像在群眾面前閃耀。嗯？沒有聽過貴族精靈？兩百歲在精靈裡還很年輕？那些小事不重要，只要有一顆火熱的心就好，畢竟偶像就是帶給人們歡樂和熱情的存在嘛。帶著夢想與希望，在偶像前輩的細心教導下，莉莉艾爾莎已經準備好成為下一顆偶像之星！\n\n『大家安安呀～人家是莉莉艾爾莎唷，今天要來做什麼好呢～？』`,
        [Locale.sc]: `面对平民娱乐的新潮流，莉莉艾尔莎选择乘上流行的浪头，化身为直播偶像。儘管自己是个长时间待在森林深处，已经两百岁的老贵族精灵，她依然相信自己能成为偶像在群众面前闪耀。嗯？没有听过贵族精灵？两百岁在精灵里还很年轻？那些小事不重要，只要有一颗火热的心就好，毕竟偶像就是带给人们欢乐和热情的存在嘛。带着梦想与希望，在偶像前辈的细心教导下，莉莉艾尔莎已经准备好成为下一颗偶像之星！\n\n『大家安安呀～人家是莉莉艾尔莎唷，今天要来做什么好呢～？』`,
        [Locale.en]: `Confronted with this massive wave of new-age popular entertainment, Lily Elsa decides to ride the hype train and reinvent herself as a streaming idol. Even though she's an high-born elf who has spent her two-hundred-year life tucked away in the deep recesses of the woods, she firmly believes she has what it takes to shine bright in the spotlight. Come again? So, you've seriously never heard of a "high-born" elf? Two hundred years old is actually considered "young" for an elf? Look, such minor details don't matter as long as your heart is burning with passion! After all, idols exist to bring joy and excitement to the masses. Fueled by dreams and hope (and under the meticulous guidance of a veteran idol) Lily Elsa is ready to become the next rising star!\n\n"Hiiiii everyone~! It's Lily Elsa here! What fun shenanigans should we get up to today~?"`,
        [Locale.jp]: `平民の新たなエンタメの波に乗り、配信アイドルを始めることを決意したリリエルザ。今まで森の奥に引きこもっていた200歳の年配ノーブルエルフの彼女だが、それでもアイドルとなり群衆の前で煌めける自信は十分で──……ん？ノーブルエルフをご存じない？200歳のエルフなんて若造だ？そんな些末なことは、アツいハートさえあれば問題にすらならない。アイドルとはそもそも人々に歓喜と情熱をもたらす存在であるのだから。アイドルの先輩の指導の元、夢と希望を胸に、リリエルザは次期アイドルの星を目指すのだった！\n\n『みんなこんエル～リリエルザよー！今日は何しようかしら～？』`,
        [Locale.kr]: `대중 엔터테인먼트의 새로운 트렌드를 맞이하여, 릴리엘자는 유행의 파도에 올라타 스트리머 아이돌로 변신하기로 결심했다. 오랜 시간 숲속 깊은 곳에서 지내온, 이미 200세를 맞이한 나이 든 귀족 엘프지만, 그녀는 자신이 아이돌로서 대중 앞에서 빛날 수 있을 거라 굳게 믿고 있다. 음? 귀족 엘프는 들어본 적 없다고? 엘프 치고 200세는 아직 어린 거 아니냐고? 그런 사소한 건 중요하지 않다. 타오르는 의욕만 있다면 충분하다. 결국 아이돌이란 사람들에게 즐거움과 열정을 전해주는 존재니까 말이다. 꿈과 희망을 품고, 아이돌 선배의 세심한 가르침 아래, 릴리엘자는 이미 차세대 아이돌 스타가 될 준비를 마쳤다!\n\n『다들 안녕~ 난 릴리엘자라고 해~ 오늘은 뭘 해볼까나~?』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/07/08",
    essence: UnitEssence[UnitCode.elsa],
    thumbnail: UnitEssence[UnitCode.elsa],
    selection: UnitSelection[UnitCode.elsa],
    clothes: UnitFullImage[UnitCode.elsa],
    tagList: [],
    otherVersion: [],
    initHP: 3705.6,
    initATK: 996.8,
    puzzle: [],
    outfits: UnitOutfits[UnitCode.elsa],
    voiceSet: UnitVoice[UnitCode.elsa],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}

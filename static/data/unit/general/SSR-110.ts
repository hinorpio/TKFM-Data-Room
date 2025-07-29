import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10140: Unit = {
    ID: "10140",
    metaCode: "lelya",
    prefix: {
        [Locale.tc]: "真神化身",
        [Locale.sc]: "真神化身",
        [Locale.en]: "Godly Reincarnation",
        [Locale.jp]: "最高神の化身",
        [Locale.kr]: "최고신의 화신"
    },
    name: {
        [Locale.tc]: "菈萊亞",
        [Locale.sc]: "菈莱亚",
        [Locale.en]: "Lelya",
        [Locale.jp]: "ラーニャ",
        [Locale.kr]: "라냐"
    },
    abbreviation: {
        [Locale.tc]: [ "主祭", "住址", "真神", "真省花生" ],
        [Locale.sc]: [ "主祭", "住址", "真神", "真省花生" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `「祂」，為世界帶來救贖，將人們導向幸福。「祂」，會幫你切斷痛苦，使你不再被傷痛所擾。「祂」，是菈萊亞，是一切，是無垠夢境之主只要向她提出請求，她就會回應你，幫助你，賜予你永恆的快樂。也許你會詢問，代價呢？代價又是什麼？問題的答案相當簡單，你只要…將一切，都獻給菈萊亞就好。\n\n「只要相信我，我就能給你你想要的一切，來，跟我說一次，『一切獻給菈萊亞』。」`,
        [Locale.sc]: `「祂」，为世界带来救赎，将人们导向幸福。「祂」，会帮你切断痛苦，使你不再被伤痛所扰。「祂」，是菈莱亚，是一切，是无垠梦境之主只要向她提出请求，她就会回应你，帮助你，赐予你永恒的快乐。也许你会询问，代价呢？代价又是什么？问题的答案相当简单，你只要…将一切，都献给菈莱亚就好。\n\n「只要相信我，我就能给你你想要的一切，来，跟我说一次，『一切献给菈莱亚』。」`,
        [Locale.en]: `"She" shall bring salvation to the world and happiness shall reign. "She" can help you end the pain and heal your wounds. "She" is Lelya, the Bestower of All, the Master of Endless Dreams… …simply ask, and She shall bless you with everlasting happiness. You might ask whether there is a price to pay. What must you give in return? And the answer is simple… You need only offer your All to Lelya.\n\n"Place your trust in me, and I shall grant you everything you desire. Come and say the words, 'I give you my All, Lelya.'"`,
        [Locale.jp]: `「神」は世界に救いをもたらし、人々を幸福へと導く。「神」はあなたが痛みに悩まされないように、痛みを断ち切ってくれる。「神」はラーニャ。万物の主であり、無限の夢の主でもある。助けを求めれば、彼女はそれに応え、助け、永遠の快楽を与えてくれる。あなたはきっと「代償は？その代償は何ですか？」と尋ねるでしょう。その答えはいたって簡単......すべてをラーニャを捧げることである。\n\n『私を信じてください。そうすればあなたの望むものをすべて差し上げます。さあ、『すべてをラーニャに捧げます』と言うのです』`,
        [Locale.kr]: `「신」이란 세상에 구원을 가져오고 사람을 행복으로 인도해 주는 존재. 「신」이란 당신의 고통을 끊어내고 다시는 아픔에 매달리지 않도록 해 주는 존재. 「신」이란 라냐이자 모든 것이며 끝없는 꿈의 주인. 그녀의 이름을 부르짖으면 그녀가 응답하고 그녀가 도와줄 것이며 그녀가 당신에게 영원한 즐거움을 안겨다 줄 것이다. 이렇게 물어볼 수도 있다. 그 대가는? 대가는 무엇이지? 답은 간단하다. 그저 당신이... 모든 것을 라냐에게 바치기만 하면 된다는 것.\n\n『나를 믿기만 하면 당신이 원하는 모든 것을 드릴 수 있습니다. 자, 말해보세요. 『모든 것을 라냐에게 바치겠나이다』라고.』`
    },
    rarity: Rarity.SSR,
    element: Element.DARK,
    position: Position.PROTECTOR,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2024/05/08",
    essence: UnitEssence[UnitCode.lelya],
    thumbnail: UnitEssence[UnitCode.lelya],
    selection: UnitSelection[UnitCode.lelya],
    clothes: UnitFullImage[UnitCode.lelya],
    tagList: [],
    otherVersion: [],
    initHP: 5040,
    initATK: 699.2,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.lelya],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
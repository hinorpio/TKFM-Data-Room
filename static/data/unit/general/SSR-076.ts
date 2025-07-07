import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10078: Unit = {
    ID: "10078",
    metaCode: "c_lulu",
    prefix: {
        [Locale.tc]: "慵懶貓貓",
        [Locale.sc]: "慵懒猫猫",
        [Locale.en]: "Lazy Cat",
        [Locale.jp]: "だらだら猫",
        [Locale.kr]: "나른한 고양이"
    },
    name: {
        [Locale.tc]: "露露",
        [Locale.sc]: "露露",
        [Locale.en]: "Lulu",
        [Locale.jp]: "ルル",
        [Locale.kr]: "루루"
    },
    abbreviation: {
        [Locale.tc]: [ "貓露" ],
        [Locale.sc]: [ "猫露" ],
        [Locale.en]: [ "C.Lulu" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "냥루루" ]
    },
    background: {
        [Locale.tc]: `只想安逸度日的公主，一覺醒來，不曉得為什麼突然變成貓了！喵？發生了什麼事？為什麼自己會有跟娜娜一樣的耳朵，還忍不住喵喵叫呢？面對未知的身體變化，露露並沒有感到慌張，反而充滿一股迷之自信。「人家是偉大的露露，其他人都是為了服侍露露而存在的，這就是世界的真理喵！」雖然大家好像都在忙什麼重要的事情，但那都和露露沒關係，從今天開始，她想做什麼就做什麼！\n\n『喵嗚，奴僕們，把飯飯送上來喵～』`,
        [Locale.sc]: `只想安逸度日的公主，一觉醒来，不晓得为什么突然变成猫了！喵？发生了什么事？为什么自己会有跟娜娜一样的耳朵，还忍不住喵喵叫呢？面对未知的身体变化，露露并没有感到慌张，反而充满一股迷之自信。「人家是伟大的露露，其他人都是为了服侍露露而存在的，这就是世界的真理喵！」虽然大家好像都在忙什么重要的事情，但那都和露露没关系，从今天开始，她想做什么就做什么！\n\n『喵呜，奴仆们，把饭饭送上来喵～』`,
        [Locale.en]: `Only wishing to live her days in peace, Lulu one day suddenly wakes up as a cat! "Meow? What happened? Why do I have ears like Nana and can't stop meowing? Meow?" Faced with this unknown change in her body, Lulu was not flustered but instead filled with an inexplicable confidence. "I'm the great Lulu, everyone else exists just to serve me, that is the truth of the world meow!" Although everyone seems to be busy with something important, it has nothing to do with Lulu. From today onwards, she will do whatever she wants!\n\n"Meow, servants! Bring the food here meow~"`,
        [Locale.jp]: `平和な毎日を過ごすこと――それが唯一の願いだった姫が、朝起きると猫に大変身！みゃう？どうしてナナと同じ耳が生えてるの？それに、話し方も猫みたい……突然の大変身だったが、ルルは慌てるどころか自信満々な表情を見せた。「私は偉大なルル！みんなはルルのお世話をするために生きてるんだよ。それがこの世界の真理だにゃん」みんなはもっと大事な用事があるようだが、今のルルには関係ない。今日からルルは、好きなように生きるのだ！\n\n『みゃう～、今すぐご飯をもってくるにゃ～』`,
        [Locale.kr]: `그저 안락한 생활을 즐기고 싶어하는 공주. 자고 일어났더니 고양이가 되어있었다! 이유는 모르지만. 냐앙? 대체 무슨 일이 있던 거냥? 왜 나나 님과 같은 귀를 가지고 나도 모르게 야옹야옹 소리를 내게 된 거냥? 하지만 알 수 없는 신체의 변화에도 루루는 당황하지 않고 오히려 자신감에 가득 찬 모습을 보인다. 「나는 위대한 루루! 다른 사람들은 나 루루를 섬기기 위해 존재하지. 그것은 바로 세상의 섭리!」 다들 뭔가 중요한 일로 바쁜 나날을 보내고 있는 것 같지만, 루루에게는 상관없는 일이다. 오늘부터 그저 내키는 대로 살아가면 그만이니까!\n\n『냐옹~ 집사들아, 먹을 것좀 가져와 보라냥~』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.OBSTRUCTER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/03/08",
    essence: UnitEssence[UnitCode.c_lulu],
    thumbnail: UnitEssence[UnitCode.c_lulu],
    selection: UnitSelection[UnitCode.c_lulu],
    clothes: UnitFullImage[UnitCode.c_lulu],
    tagList: [],
    otherVersion: [ UnitCode.lulu, UnitCode.s_lulu, UnitCode.w_lulu, UnitCode.p_lulu ],
    initHP: 3254.4,
    initATK: 1083.2,
    puzzle: [],
    outfits: [],
    skillSet: []
}
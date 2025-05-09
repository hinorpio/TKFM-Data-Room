import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10107: Unit = {
    ID: "10107",
    metaCode: "ny_lana",
    prefix: {
        [Locale.tc]: "龍飛鳳舞",
        [Locale.sc]: "龙飞凤舞",
        [Locale.en]: "Dragon Dancer",
        [Locale.jp]: "竜飛鳳舞",
        [Locale.kr]: "용의 춤사위"
    },
    name: {
        [Locale.tc]: "蘭兒",
        [Locale.sc]: "兰儿",
        [Locale.en]: "Lana",
        [Locale.jp]: "ラン",
        [Locale.kr]: "란"
    },
    abbreviation: {
        [Locale.tc]: [ "春矮", "春蘭" ],
        [Locale.sc]: [ "春矮", "春兰" ],
        [Locale.en]: [ "Ny.Lana" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "용란" ]
    },
    background: {
        [Locale.tc]: `在確定要參加精靈對抗矮人的大運動會後，從『雪泥糊』手上拿到了新的服裝和看起來超厲害的武器。雖然不曉得手上的巨龍形狀為什麼這麼奇怪，但拿起來的手感感覺就非常適合拿它來砸人。沒有錯，只要提到比試，矮人就永遠不會缺席。矮人日常不可或缺的三大娛樂，那絕對就是喝酒、挖礦還有比試了！\n\n『力大無比的矮人加上凶狠的巨龍，這樣就是兩倍的力量囉！』`,
        [Locale.sc]: `在确定要参加精灵对抗矮人的大运动会后，从『雪泥糊』手上拿到了新的服装和看起来超厉害的武器。虽然不晓得手上的巨龙形状为什么这么奇怪，但拿起来的手感感觉就非常适合拿它来砸人。没有错，只要提到比试，矮人就永远不会缺席。矮人日常不可或缺的三大娱乐，那绝对就是喝酒、挖矿还有比试了！\n\n『力大无比的矮人加上凶狠的巨龙，这样就是两倍的力量啰！』`,
        [Locale.en]: `After deciding to join this year's "Field Day", Lana gets a new outfit and weapon from "Shalala". She doesn't know why it's shaped like a dragon, but she does know it'll be pretty good at smashing in heads! And that's exactly what she'll do during this competition. Yep! Drinking, mining, and competitions! That's what dwarves like best.\n\n"Dwarves and a nasty dragon, eh? Sounds like a match made in heaven!"`,
        [Locale.jp]: `エルフと小人の競技大会の参加が決まり、『セニフ』から新しい衣装と強力な武器を手に入れたラン。手にした巨大な龍の形の武器はどこかおかしいが、それでも敵を倒すのにはピッタリである。大会といえば、小人の名前を出さずにはいられない。小人の三大娯楽といえば、酒・発掘・ケンカだからだ。\n\n『力持ちの小人に狂暴な龍。これで力は2倍よ！』`,
        [Locale.kr]: `엘프와 난쟁이의 대회가 결정되면서 『세니프』로부터 새로운 의상과 강력한 무기를 얻게 된 란. 손에 든 거대한 용 모양의 무기는 어딘가 이상하지만 딱 좋은 그립감도 그렇고  적을 쓰러뜨리기엔 아무런 문제가 없을 것 같았다. 본래 난쟁이들은 대결 얘기만 나오면 절대 빼는 법이 없다. 난쟁이들의 3대 오락거리는 술, 발굴, 그리고 대결이니까!\n\n『막강한 힘의 난쟁이와 흉악한 드래곤, 이걸로 파워는 두 배!』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/01/18",
    essence: UnitEssence[UnitCode.ny_lana],
    thumbnail: UnitEssence[UnitCode.ny_lana],
    selection: UnitSelection[UnitCode.ny_lana],
    clothes: UnitFullImage[UnitCode.ny_lana],
    tagList: [],
    otherVersion: [ UnitCode.lana, UnitCode.x_lana, UnitCode.o_lana ],
    puzzle: [],
    outfits: [],
    skillSet: []
}
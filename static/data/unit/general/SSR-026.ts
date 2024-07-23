import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10056: Unit = {
    ID: "10056",
    metaCode: "karina",
    prefix: {
        [Locale.tc]: "墮龍",
        [Locale.sc]: "堕龙",
        [Locale.en]: "Fallen Dragon",
        [Locale.jp]: "堕龍",
        [Locale.kr]: "타룡"
    },
    name: {
        [Locale.tc]: "凱茜菲娜",
        [Locale.sc]: "凯茜菲娜",
        [Locale.en]: "Karina",
        [Locale.jp]: "キャシフィーナ",
        [Locale.kr]: "카시피나"
    },
    abbreviation: {
        [Locale.tc]: [ "墮龍", "螃蟹" ],
        [Locale.sc]: [ "堕龙", "螃蟹" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `感染了被視為龍族絕症的結晶病，族群內的龍族為了避免病毒擴散，將凱茜菲娜關押了起來。有一天凱茜菲娜在結晶化的折磨下，發狂掙脫了鐐銬。結晶化的症狀雖然讓凱茜菲娜無時不刻都感受著疼痛，卻沒有削弱她的戰力，反而給予了凱茜菲娜比起其他龍族更堅硬的防禦。不想再繼續過著以往那不見天日的囚禁生活，凱茜菲娜逃離了聚落，並且為了緩解痛苦捨棄了龍身，只以半龍人的面貌行動。今日的凱茜菲娜也在世界上遊盪著，希望能在被病魔擊垮之前，找尋到屬於她生命的意義。\n\n『…好痛…好痛…好痛啊啊啊……』`,
        [Locale.sc]: `感染了被视为龙族绝症的结晶病，族群内的龙族为了避免病毒扩散，将凯茜菲娜关押了起来。有一天凯茜菲娜在结晶化的折磨下，发狂挣脱了镣铐。结晶化的症状虽然让凯茜菲娜无时不刻都感受着疼痛，却没有削弱她的战力，反而给予了凯茜菲娜比起其他龙族更坚硬的防御。不想再继续过着以往那不见天日的囚禁生活，凯茜菲娜逃离了聚落，并且为了缓解痛苦舍弃了龙身，只以半龙人的面貌行动。今日的凯茜菲娜也在世界上游荡着，希望能在被病魔击垮之前，找寻到属于她生命的意义。\n\n『…好痛…好痛…好痛啊啊啊……』`,
        [Locale.en]: `Suffering from the terminal Crystalis Disease, Karina has been locked up by her fellow dragons in order to keep it from spreading among them. While she is living with constant pain, Crystalis Disease hasn't sapped Karina of any power - in fact, it's made her even more resilient. Not willing to live under lock and key any longer, Karina decides to leave her clan and go out on her own. In order to alleviate some of her suffering, she chose to live life as a dragoon, half human half dragon. Now, Karina wanders the land, hoping to find a place to call her own before her disease finally takes her life.\n\n"...The pain... it hurts... it hurts!!!"`,
        [Locale.jp]: `キャシフィーナは龍族の間で死病とされている結晶病にかかり、ウイルスの拡散を防ぐため閉じ込められていた。結晶化の症状はキャシフィーナを常に痛めつけていたが、彼女の力を削ぐどころか、他の龍族をしのぐほどの鉄壁の防御力を得ることとなった。陽にあたらない監禁された生活に耐えきれなくなった彼女は、群れを離れた。苦痛から逃れるため、龍族として生きるのをやめ、半龍族の姿で生活を送っている。今ではキャシフィーナは世界中を浮浪し、命の火が尽きる前に生きる意味とは何か見つけ出そうとしている。\n\n『…痛い…痛い…痛いいいっ……』`,
        [Locale.kr]: `용족들 사이에서 불치병으로 알려진 결정증. 용족은 병의 확산을 막기 위해 카시피나를 옥에 가두게 된다. 결정화 증상은 끊임없이 카시피나에게 고통을 안겨줌과 동시에, 그녀의 방어력 또한 대폭 상승시키게 된다. 더 이상의 옥살이를 원치 않았던 카시피나는 무리를 이탈하기로 결심하고 고통을 덜어내기 위해 용족의 육체를 포기한 채 반인반용의 모습으로 살아가게 됐다. 지금까지도 카시피나는 병이 악화되기 전까지 자신의 존재의 의미를 찾기 위해 온세상을 떠돌고 있다.\n\n『...아파... 고통스러워... 아파... 너무 아파아아...』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.PROTECTOR,
    potential: PotentialType.DEFENCE,
    isLimited: false,
    releaseDate: "2021/09/29",
    essence: UnitEssence[UnitCode.karina],
    thumbnail: UnitEssence[UnitCode.karina],
    selection: UnitSelection[UnitCode.karina],
    clothes: UnitFullImage[UnitCode.karina],
    tagList: [
        TagID.ELEMENT_WATER,
        TagID.POSITION_PROTECTOR,
        TagID.SPECIES_DEMIHUMAN,
        TagID.BODY_MEDIUM_SIZED,
        TagID.BREAST_GIANT_TITS,
        TagID.CLASS_LEADER,
        TagID.OTHER_PROTECTION,
        TagID.OTHER_DEFENSE,
        TagID.OTHER_COUNTERSTRIKE,
    ],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
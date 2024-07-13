import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10134: Unit = {
    ID: "10134",
    metaCode: "w_noel",
    prefix: {
        [Locale.tc]: "閃耀歌姬",
        [Locale.sc]: null,
        [Locale.en]: "Glittering Songstress",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "黑白諾艾莉",
        [Locale.sc]: null,
        [Locale.en]: "Noel",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "風黑", "閃黑" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "跨越時空，從遙遠的魔導時代來到現代的黑白諾艾莉，今天也一樣耀眼動人！永不褪色的偶像之光，這次也馬不停蹄的在各地散播自己的愛與希望。然而，哎呀！諾艾莉卻碰上一個十分糟糕的對手。那個人打著清純系少女偶像的招牌，所作所為卻全都是下流且不健全的色色行徑。絕對不行，身為偶像前輩，必須要好好導正後輩的觀念才可以！接受粉絲們熱情的聲援，諾艾莉打算用歌聲與汗水來證明，真正的偶像是絕不會被下流的表演給打敗的！\n\n『只靠自己的魅力、歌聲和表演技巧來吸引粉絲，這就是人家身為偶像的驕傲喔！』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.HEALER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2024/02/05",
    essence: UnitEssence[UnitCode.w_noel],
    thumbnail: UnitEssence[UnitCode.w_noel],
    selection: UnitSelection[UnitCode.w_noel],
    clothes: UnitFullImage[UnitCode.w_noel],
    tagList: [],
    otherVersion: [ UnitCode.noel, UnitCode.s_noel ],
    puzzle: [],
    skillSet: []
}
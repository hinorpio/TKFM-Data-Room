import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10134: Unit = {
    ID: "10134",
    metaCode: "w_noel",
    prefix: {
        [Locale.tc]: "閃耀歌姬",
        [Locale.sc]: "闪耀歌姬",
        [Locale.en]: "Glittering Songstress",
        [Locale.jp]: "輝く歌姫",
        [Locale.kr]: "빛나는 가희"
    },
    name: {
        [Locale.tc]: "黑白諾艾莉",
        [Locale.sc]: "黑白诺艾莉",
        [Locale.en]: "Noel",
        [Locale.jp]: "モノクロのノエル",
        [Locale.kr]: "노엘리"
    },
    abbreviation: {
        [Locale.tc]: [ "風黑", "閃黑" ],
        [Locale.sc]: [ "风黑", "闪黑" ],
        [Locale.en]: [ "W.Noel" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "가엘리" ]
    },
    background: {
        [Locale.tc]: `跨越時空，從遙遠的魔導時代來到現代的黑白諾艾莉，今天也一樣耀眼動人！永不褪色的偶像之光，這次也馬不停蹄的在各地散播自己的愛與希望。然而，哎呀！諾艾莉卻碰上一個十分糟糕的對手。那個人打著清純系少女偶像的招牌，所作所為卻全都是下流且不健全的色色行徑。絕對不行，身為偶像前輩，必須要好好導正後輩的觀念才可以！接受粉絲們熱情的聲援，諾艾莉打算用歌聲與汗水來證明，真正的偶像是絕不會被下流的表演給打敗的！\n\n『只靠自己的魅力、歌聲和表演技巧來吸引粉絲，這就是人家身為偶像的驕傲喔！』`,
        [Locale.sc]: `跨越时空，从遥远的魔导时代来到现代的黑白诺艾莉，今天也一样耀眼动人！永不褪色的偶像之光，这次也马不停蹄的在各地散播自己的爱与希望。然而，哎呀！诺艾莉却碰上一个十分糟糕的对手。那个人打着清纯系少女偶像的招牌，所作所为却全都是下流且不健全的色色行径。绝对不行，身为偶像前辈，必须要好好导正后辈的观念才可以！接受粉丝们热情的声援，诺艾莉打算用歌声与汗水来证明，真正的偶像是绝不会被下流的表演给打败的！\n\n『只靠自己的魅力、歌声和表演技巧来吸引粉丝，这就是人家身为偶像的骄傲喔！』`,
        [Locale.en]: `Even when crossing time and space from the age of automata to the present day, Noel remains just as dazzling as always! The light of an idol never fades, this time endlessly spreading its love and hope to every corner. But then... Oh, no! Noel stumbles upon a terrible foe! A lascivious individual who feigns being a pure idol, but indulges in obscene acts and filthy behavior. As a fellow automaton, Noel must correct the course of junior members of her kind who've been led astray. Never fear! With her eloquent singing, sweet sweat, and the support of her adoring fans, Noel is out to prove to everyone that a true idol is never corrupted by such devious sexual conduct!\n\n"The real pride of an idol comes from relying on one's charm, singing, and acting to attract the masses."`,
        [Locale.jp]: `時空を超えて魔導時代から現代にやって来たモノクロのノエルは、今日も皆の心を奪う！永遠に輝きを失うことのないアイドルの光。今回もまた、あちこちで愛と希望を届けることに。しかしなんと！ノエルは強敵に出会ってしまった。その強敵は清純派アイドルを名乗りながらも、下品で不健全なエッチな行動ばかりしている。そんなの先輩として許せない！しっかり後輩を教育しないと！ファンの熱狂的な応援を受け、ノエルは真のアイドルは淫らなパフォーマンスには負けないことを、歌と汗で証明するのであった！\n\n『自分の魅力、歌声、パフォーマンスでファンを魅了する。それがあたしのアイドルとしての誇りだよ！』`,
        [Locale.kr]: `시공을 넘어 먼 과거의 마도 시대에서 현대로 온 블랙앤화이트 노엘리는, 오늘도 눈부시고 매력적이다! 영원히 시들지 않는 아이돌의 우상, 이번에도 곳곳에 자신의 사랑과 희망을 전파하고 다닌다. 그러나, 안타깝게도! 노엘리가 아주 고약한 상대를 만나게 되었다. 그 사람은 청순한 여아이돌의 간판을 걸고 있지만, 하는 짓이 온통 저속하고 불건전하며 음란하기 그지없다. 용납할 수 없다, 아이돌 선배로서 후배의 생각을 바로 잡아줘야 한다! 팬들의 뜨거운 성원에 노엘리는 진정한 아이돌은 결코 저급한 공연에 밀리지 않는다는 것을 노래와 땀으로 입증하려고 한다!\n\n『자신의 매력과 노래, 퍼포먼스 스킬로 팬들을 사로잡을 수 있는 것, 그게 바로 아이돌의 자존심!』`
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
    otherVersion: [ UnitCode.noel, UnitCode.s_noel, UnitCode.c_noel ],
    puzzle: [],
    outfits: [],
    skillSet: []
}
import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10042: Unit = {
    ID: "10042",
    metaCode: "s_iblis",
    prefix: {
        [Locale.tc]: "夏日",
        [Locale.sc]: "夏日",
        [Locale.en]: "Summer",
        [Locale.jp]: "夏の日",
        [Locale.kr]: "여름날"
    },
    name: {
        [Locale.tc]: "伊布力斯",
        [Locale.sc]: "伊布力斯",
        [Locale.en]: "Iblis",
        [Locale.jp]: "イブリース",
        [Locale.kr]: "이블리스"
    },
    abbreviation: {
        [Locale.tc]: [ "夏伊", "泳伊" ],
        [Locale.sc]: [ "夏伊", "泳伊" ],
        [Locale.en]: [ "S.Iblis" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "수이블" ]
    },
    background: {
        [Locale.tc]: `即使在休假，魔王也必須展現出魔王的風範。所謂的領導者，不論做什麼打扮都必須是最耀眼的一人。伊布力斯的泳裝是和魔界專職的縫衣匠訂製，材料用的也是最上級的魔獸素材。魔界貴族的泳裝，豈能和平民的泳裝相提並論？咦，和平常穿得沒什麼不同？！愚鈍且不懂女性服裝細節變化的人通通都得處死！\n\n『將本王身著泳裝的珍稀畫面映入眼簾，並永生銘記吧。』`,
        [Locale.sc]: `即使在休假，魔王也必须展现出魔王的风范。所谓的领导者，不论做什么打扮都必须是最耀眼的一人。伊布力斯的泳装是和魔界专职的缝衣匠订制，材料用的也是最上级的魔兽素材。魔界贵族的泳装，岂能和平民的泳装相提并论？咦，和平常穿得没什么不同？！愚钝且不懂女性服装细节变化的人通通都得处死！\n\n『将本王身着泳装的珍稀画面映入眼帘，并永生铭记吧。』`,
        [Locale.en]: `Even on vacation, an archdemon must keep up appearances. As a leader, Iblis knows that no matter what she wears, she has to be the center of attention. A swimsuit is no exception - her current one made by the top tailor in the Demon Realm, with the most expensive materials. I mean, an archdemon's swimsuit can't be the same as your average citizen's, right? Wait... you think it looks the same as what she usually wears? Hmph, you cretins have no taste.\n\n"Like what you see? Maybe you should take a picture, it'll last longer."`,
        [Locale.jp]: `休暇でも魔王は魔王らしく振るまわなければならない。統率者と呼ばれる者は、どんな格好をしようとも一番目立つからだ。イブリースの水着は魔界のデザイナーと仕立て屋がハンドメイドしたもので、最上級の魔獣素材が使用されている。魔界貴族の水着と平民の水着を同時に語ることなどご法度なのだ。えっ？いつもの格好と変わらないって！？女性の細かな変化に気づかない愚か者は一人残らず処刑されるのだ！\n\n『私の貴重な水着姿を目に焼き付けて、永遠に忘れないことね』`,
        [Locale.kr]: `아무리 바캉스 시즌이라도 마왕은 마왕으로서의 품위를 유지할 필요가 있다. 리더라면 자고로 어떤 모습을 하든 최고로 빛나야 하는 법. 이블리스의 수영복은 마계의 재단사에게 주문 제작한 것으로 최상급의 마수 소재가 사용되었다. 마계 귀족의 수영복이 일개 평민이 입는 것과 같을 순 없는 법! 뭐? 평소에 입던 것과 별 차이가 없다고?! 하여간 여자의 작은 변화에 둔감한 놈들은 전부 세상에서 지워버려야만 해!\n\n『수영복을 입은 이 몸의 아름다운 자태를 보고 평생 머릿속에 기억하도록.』`
    },
    rarity: Rarity.SSR,
    element: Element.WATER,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/06/08",
    essence: UnitEssence[UnitCode.s_iblis],
    thumbnail: UnitEssence[UnitCode.s_iblis],
    selection: UnitSelection[UnitCode.s_iblis],
    clothes: UnitFullImage[UnitCode.s_iblis],
    tagList: [],
    otherVersion: [ UnitCode.iblis, UnitCode.i_iblis, UnitCode.b_iblis, UnitCode.v_iblis, UnitCode.x_iblis, UnitCode.bg_iblis, UnitCode.ss_iblis ],
    initHP: 3456,
    initATK: 1019.2,
    puzzle: [ PuzzleCode.EVENT_2022_SUMMER_1 ],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.s_iblis],
    skillSet: []
}
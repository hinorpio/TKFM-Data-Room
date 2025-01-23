import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10126: Unit = {
    ID: "10126",
    metaCode: "h_shiro",
    prefix: {
        [Locale.tc]: "調皮搗蛋",
        [Locale.sc]: "调皮捣蛋",
        [Locale.en]: "Naughty Tirxie",
        [Locale.jp]: "イタズラっ子",
        [Locale.kr]: "말썽쟁이"
    },
    name: {
        [Locale.tc]: "白",
        [Locale.sc]: "白",
        [Locale.en]: "Shiro",
        [Locale.jp]: "ハク",
        [Locale.kr]: "하쿠"
    },
    abbreviation: {
        [Locale.tc]: [ "小白", "幼白" ],
        [Locale.sc]: [ "小白", "幼白" ],
        [Locale.en]: [ "H.Shiro" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "할쿠" ]
    },
    background: {
        [Locale.tc]: `一本正經的賢者在感染萬聖魔力後，變成了以四處搗蛋為樂的小惡魔。仗著自己的博學多聞，小小賢者的惡作劇讓人難以捉摸，就連魔王和勇者都被她視為掌中玩物。將魔王城改造成大型的惡作劇迷宮後，白露出了眾人都不曾見過的頑皮笑容。而在那份笑容之中，似乎還藏著不可告人的祕密…？\n\n『嘿嘿嘿，各位哥哥姐姐們，準備好要來挑戰白的關卡了嗎？』`,
        [Locale.sc]: `一本正经的贤者在感染万圣魔力后，变成了以四处捣蛋为乐的小恶魔。仗着自己的博学多闻，小小贤者的恶作剧让人难以捉摸，就连魔王和勇者都被她视为掌中玩物。将魔王城改造成大型的恶作剧迷宫后，白露出了众人都不曾见过的顽皮笑容。而在那份笑容之中，似乎还藏着不可告人的秘密…？\n\n『嘿嘿嘿，各位哥哥姐姐们，准备好要来挑战白的关卡了吗？』`,
        [Locale.en]: `After being infected with the magic of Halloween, this once serious sage has turned into a conniving little trickster who relishes in troublemaking wherever she steps foot. Relying on her extensive knowledge, the little sage's pranks are utterly unpredictable, making even Archdemons and brave warriors fall prey to her devices. After transforming the Archdemon's palace into a large maze of traps and tricks, a new creepy grin stretches across Shiro's face. And in that smile, there seems to be… a secret ulterior motive...?\n\n"Hiiihihi… Brothers and sisters, are you ready to face Shiro's test?"`,
        [Locale.jp]: `あの生真面目な賢者がハロウィンの魔力に影響され、あちこちでイタズラを仕掛ける小悪魔に変身。博識な彼女が仕掛けるイタズラはかなりのレベルの物であり、魔王や勇者をもオモチャのように弄ぶ。魔王城をイタズラの迷宮に大改造したハクは、今まで見せたことのないやんちゃな笑みを浮かべた。その笑みの中には、だれにも言えない秘密が隠されているようだ……\n\n『へへっ、お兄ちゃんお姉ちゃん、ハクのステージにチャレンジする？』`,
        [Locale.kr]: `진중했던 현자는 할로윈 마력에 감염된 후, 이곳저곳에서 말썽을 일으키는 장난꾸러기로 변해버렸다. 원래 박학다식한 그녀인지라, 어린 현자의 장난은 종잡기 힘들었고 마왕은 물론 용자까지도 그녀의 타깃이 되어버린다. 마왕성을 대형 함정 미로로 만든 하쿠는, 아무도 본 적 없었던 짓궂은 미소를 띠었다. 그 웃음 속에는 왠지 남들에게 말 못 할 비밀이 숨겨져 있는 것 같은데...?\n\n『헤헤헤, 언니 오빠들. 하쿠의 관문에 도전할 준비는 됐어?』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.SUPPORTER,
    potential: PotentialType.BALANCE,
    isLimited: true,
    releaseDate: "2023/10/18",
    essence: UnitEssence[UnitCode.h_shiro],
    thumbnail: UnitEssence[UnitCode.h_shiro],
    selection: UnitSelection[UnitCode.h_shiro],
    clothes: UnitFullImage[UnitCode.h_shiro],
    tagList: [],
    otherVersion: [ UnitCode.shiro ],
    puzzle: [],
    skillSet: []
}
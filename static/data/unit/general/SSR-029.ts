import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10043: Unit = {
    ID: "10043",
    metaCode: "h_salucia",
    prefix: {
        [Locale.tc]: "機靈古怪",
        [Locale.sc]: "机灵古怪",
        [Locale.en]: "Halloween Queen",
        [Locale.jp]: "おてんば",
        [Locale.kr]: "할로 퀸"
    },
    name: {
        [Locale.tc]: "賽露西亞",
        [Locale.sc]: "赛露西亚",
        [Locale.en]: "Salucia",
        [Locale.jp]: "セルシア",
        [Locale.kr]: "살루시아"
    },
    abbreviation: {
        [Locale.tc]: [ "幼精", "萬精", "小王" ],
        [Locale.sc]: [ "幼精", "万精", "小王" ],
        [Locale.en]: [ "H.Salucia" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "할살루" ]
    },
    background: {
        [Locale.tc]: `因南瓜仙子的萬聖節魔法的影響，回到了年輕時代。性格也因魔法影響變得調皮搗蛋。獲得了將所碰觸的物品變成糖果的神奇能力。利用這個能力開始在萬聖夜四處作亂，惹出麻煩。究竟萬聖夜後是否能夠變回成熟穩重的賽露西亞呢？\n\n『我現在可不是精靈女王——是萬聖夜之王！』`,
        [Locale.sc]: `因南瓜仙子的万圣节魔法的影响，回到了年轻时代。性格也因魔法影响变得调皮捣蛋。获得了将所碰触的物品变成糖果的神奇能力。利用这个能力开始在万圣夜四处作乱，惹出麻烦。究竟万圣夜后是否能够变回成熟稳重的赛露西亚呢？\n\n『我现在可不是精灵女王——是万圣夜之王！』`,
        [Locale.en]: `The pumpkin fairy's magic energy has turned back the years on Salucia. She's turned back into the spoiled brat she was during her twenties. Obsessed with making her elven servants get her as much candy as elvenly possible, Salucia's become something of a royal pain in the ass. Will she ever turn back into the mature, understanding Queen she used to be?\n\n"I'm not your elf queen anymore——I'm your hallow-queen! Kyahahaha!"`,
        [Locale.jp]: `かぼちゃの妖精のハロウィン魔法の影響を受け、若き日の姿へと戻ったセルシア。そのせいで性格もやんちゃに。そんな彼女は触れたものを全てお菓子に変えてしまう特殊な能力を手に入れたのであった。この能力を利用してハロウィンの夜にあちこちでイタズラを仕掛けたセルシア。落ち着いた性格の元のセルシアに戻ることはできるのだろうか？\n\n『私はエルフの女王なんかじゃない——ハロウィンの女王よ！』`,
        [Locale.kr]: `펌킨 페어리의 마법 때문에 젊었을 때로 돌아간 살루시아. 마법의 영향을 받고 장난꾸러기로 변해버린다. 신비한 능력을 가지게 된 그녀. 만졌던 모든 것을 사탕으로 변화시킬 수 있다. 이를 이용하여 할로윈의 밤에 이곳저곳 돌아다니며 소란을 피게 되는데. 과연 할로윈의 밤이 지나면 원래대로 성숙하고 온화한 살루시아로 돌아올 수 있을런지?\n\n『엘프의 왕은 무슨——지금의 나는 할로 퀸이야!』`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2021/10/27",
    essence: UnitEssence[UnitCode.h_salucia],
    thumbnail: UnitEssence[UnitCode.h_salucia],
    selection: UnitSelection[UnitCode.h_salucia],
    clothes: UnitFullImage[UnitCode.h_salucia],
    tagList: [],
    otherVersion: [ UnitCode.salucia, UnitCode.ny_salucia, UnitCode.s_salucia ],
    initHP: 0,
    initATK: 0,
    puzzle: [],
    outfits: [],
    skillSet: []
}
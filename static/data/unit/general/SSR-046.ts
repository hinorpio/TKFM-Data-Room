import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10076: Unit = {
    ID: "10076",
    metaCode: "w_lulu",
    prefix: {
        [Locale.tc]: "夢遊魔境",
        [Locale.sc]: "梦游魔境",
        [Locale.en]: "Wonderland",
        [Locale.jp]: "不思議の国の",
        [Locale.kr]: "이상한 나라의"
    },
    name: {
        [Locale.tc]: "露露",
        [Locale.sc]: "露露",
        [Locale.en]: "Lulu",
        [Locale.jp]: "ルル",
        [Locale.kr]: "루루"
    },
    abbreviation: {
        [Locale.tc]: [ "夢露" ],
        [Locale.sc]: [ "梦露" ],
        [Locale.en]: [ "W.Lulu" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "앨루루" ]
    },
    background: {
        [Locale.tc]: `只想在城堡安然度日的露露，某日闔上眼後卻落入了不可思議的國度。奇怪的兔子、過勞的貓、史萊姆和哈比，為什麼到處都找不到凱薩大人？！膽小的公主為了脫離現況，在奇怪的夢境世界中，利用自己的頭腦和開茶會的能力，一步步成為下午茶女王。\n\n『紙牌革命！捍衛午睡的正當權利與安全！』——《露露公主夢遊魔境》`,
        [Locale.sc]: `只想在城堡安然度日的露露，某日阖上眼后却落入了不可思议的国度。奇怪的兔子、过劳的猫、史莱姆和哈比，为什么到处都找不到凯萨大人？！胆小的公主为了脱离现况，在奇怪的梦境世界中，利用自己的头脑和开茶会的能力，一步步成为下午茶女王。\n\n『纸牌革命！捍卫午睡的正当权利与安全！』——《露露公主梦游魔境》`,
        [Locale.en]: `Simply wanting to spend her days curling up with a good storybook and a few snacks, Lulu is suddenly whisked away into a fantasy kingdom. Weird bunnies, overworked cats, slime, and Harpy... and where's Master Caesar!? Simply wanting to get back home, Lulu quickly finds herself part of a larger plot, one which has her pinned as the main character! By utilizing her own intellect and her ability to host tea parties, she gradually becomes the queen of afternoon tea.\n\n"Will Lulu be able to save the realm as we know it!?"—Princess Lulu in Wonderland`,
        [Locale.jp]: `お城でのんびり暮らしていたいルル。ある日お昼寝中に、不思議な国へと迷い込んだのだった。おかしなうさぎ、過労の猫、スライムとハーピー。どこを探してもシーザー様がいないのだ！臆病な彼女は頭脳とお茶会の能力を発揮して、お茶会の女王になるべく歩みを進めていく。\n\n『トランプ革命！昼寝の権利と安全を守るの！』――≪不思議の国のルル王女≫`,
        [Locale.kr]: `그저 성 안에서의 안락한 생활을 꿈꿨던 루루. 잠이 든 어느 날 불가사의한 세계에 도착하게 됐는데. 이상한 토끼와 과로에 쩌든 고양이, 슬라임과 하피... 그런데 왜 시저 님은 보이지 않지?! 겁 많은 공주는 그곳을 벗어나기 위해 기량을 발휘하여 점차 디저트의 여왕으로 거듭나게 되었는데.\n\n『트럼프 혁명! 낮잠의 권리를 수호하라!』——《이상한 나라의 루루》`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2022/04/20",
    essence: UnitEssence[UnitCode.w_lulu],
    thumbnail: UnitEssence[UnitCode.w_lulu],
    selection: UnitSelection[UnitCode.w_lulu],
    clothes: UnitFullImage[UnitCode.w_lulu],
    tagList: [],
    otherVersion: [ UnitCode.lulu, UnitCode.s_lulu, UnitCode.c_lulu, UnitCode.p_lulu ],
    puzzle: [],
    skillSet: []
}
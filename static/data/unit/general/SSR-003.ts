import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10003: Unit = {
    ID: "10003",
    metaCode: "iblis",
    prefix: {
        [Locale.tc]: "魔王",
        [Locale.sc]: "魔王",
        [Locale.en]: "Archdemon",
        [Locale.jp]: "魔王",
        [Locale.kr]: "마왕"
    },
    name: {
        [Locale.tc]: "伊布力斯",
        [Locale.sc]: "伊布力斯",
        [Locale.en]: "Iblis",
        [Locale.jp]: 'イブリース',
        [Locale.kr]: "이블리스"
    },
    abbreviation: {
        [Locale.tc]: [ "普伊", "魔伊", "解伊", "伊", "屁眼" ],
        [Locale.sc]: [ "普伊", "魔伊", "解伊", "伊", "屁眼" ],
        [Locale.en]: [ "OG.Iblis" ],
        [Locale.jp]: [],
        [Locale.kr]: [ "이블" ]
    },
    background: {
        [Locale.tc]: `伊布力斯出生自魔族名門，在繼任家主以及代代傳承的魔王之位的同時，她也捨棄了過去的名字，以家族之名伊布力斯自稱。伊布力斯魔力龐大且精純，嚴以律己，是天生的領導者，她也對自身的血脈以及高貴的身份自豪，隨時維持著高貴的姿態。伊布力斯看不慣任性妄為，毫無領導者模樣卻與她同為魔王的凱薩，一直等待著合適對凱薩發難的機會，藉此宣言伊布力斯的威名。\n\n『凱薩，像你這種不知禮數的野狗，怎麼可能戰勝偉大的伊布力斯。』`,
        [Locale.sc]: `伊布力斯出生自魔族名门，在继任家主以及代代传承的魔王之位的同时，她也舍弃了过去的名字，以家族之名伊布力斯自称。伊布力斯魔力庞大且精纯，严以律己，是天生的领导者，她也对自身的血脉以及高贵的身份自豪，随时维持着高贵的姿态。伊布力斯看不惯任性妄为，毫无领导者模样却与她同为魔王的凯萨，一直等待着合适对凯萨发难的机会，借此宣言伊布力斯的威名。\n\n『凯萨，像你这种不知礼数的野狗，怎么可能战胜伟大的伊布力斯。』`,
        [Locale.en]: `The 'Iblis' namesake belongs to a long line of aristocratic archdemons, with the current Iblis having been crowned archdemon just recently. Iblis wields great magical power, and paired with her deadly serious demeanor, is pretty much a born leader. She feels a great deal of pride—arrogance, even—in her family name, sometimes to her detriment. Iblis harbours an intense disdain for Caesar. She sees him as a reckless brute with no business being an archdemon, and looks forward to the day she can finally destroy him, and the rest of the archdemons, so she can guide the realm into a bigger, brighter future.\n\n"Caesar? That rabid dog? He could never defeat an Iblis!"`,
        [Locale.jp]: `イブリースは名門魔族出身。当主と魔王の地位を引き継ぐと同時に過去の名を捨て、家族の名であるイブリースに改名した。イブリースは強大な魔力を持っているうえ自分に厳しい、生まれながらのリーダーだった。自分の血統と高貴な身分に奢りを持っており、いつもその高貴な姿勢を忘れない。イブリースはしたい放題でリーダーシップの欠片もないシーザーを嫌っていて、シーザーを懲らしめイブリースの名を轟かせるチャンスを狙っている。\n\n『シーザー、あなたのような礼儀を知らない野良犬が、この偉大なイブリースに勝てるとでも思ってるの？』`,
        [Locale.kr]: `이블리스는 마족 명문 가문에서 태어나 가업을 이어받고 대대로 내려오는 마왕의 자리를 물려받았다. 그는 마왕에 즉위한 이후 예전의 이름을 버리고 가문의 이름인 이블리스로 자신을 칭하도록 하였다. 이블리스는 기품 있고 매력이 넘치는 외모를 가졌으며 자신에 대한 자제력이 대단한 타고난 리더이다. 자신의 혈통과 고귀한 신분에 대해 자랑스러워하며 언제나 상류층의 자태를 유지하고 있다. 이블리스는 평소에 경거망동하고 전혀 리더답지 않지만 자신과 동일한 마왕의 지위를 가진 시저를 못마땅하게 여겨 그를 혼내주고 자신의 명성을 높이 세울 기회를 찾고 있다.\n\n『시저. 너같이 예의도 모르는 들개 녀석이 어떻게 이 위대한 이블리스에게 승리할 수 있겠어.』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2020/12/14",
    essence: UnitEssence[UnitCode.iblis],
    thumbnail: UnitEssence[UnitCode.iblis],
    selection: UnitSelection[UnitCode.iblis],
    clothes: UnitFullImage[UnitCode.iblis],
    tagList: [ 
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_ATTACKER, 
        TagID.SPECIES_DEMON, 
        TagID.BODY_MEDIUM_SIZED, 
        TagID.CLASS_LEADER, 
        TagID.OTHER_DAMAGE_OUTPUT, 
        TagID.OTHER_SURVIVABILLITY, 
        TagID.OTHER_AOE,
    ],
    otherVersion: [ UnitCode.i_iblis, UnitCode.b_iblis, UnitCode.s_iblis, UnitCode.v_iblis, UnitCode.x_iblis, UnitCode.bg_iblis, UnitCode.ss_iblis ],
    initHP: 3199.997219758328,
    initATK: 999.9982280001501,
    puzzle: [ PuzzleCode.EVENT_2021_XMAS_2, PuzzleCode.EVENT_2022_XMAS_1, PuzzleCode.EVENT_2023_CNY_1 ],
    outfits: [],
    skillSet: []
}
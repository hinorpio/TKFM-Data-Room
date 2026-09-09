import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10211: Unit = {
    ID: "10211",
    metaCode: "calibur",
    prefix: {
        [Locale.tc]: "傳說聖劍",
        [Locale.sc]: "传说圣剑",
        [Locale.en]: "Blademaster",
        [Locale.jp]: "伝説の聖剣",
        [Locale.kr]: "전설의 성검"
    },
    name: {
        [Locale.tc]: "卡利伯",
        [Locale.sc]: "卡利伯",
        [Locale.en]: "Calibur",
        [Locale.jp]: "カリバー",
        [Locale.kr]: "칼리버"
    },
    abbreviation: {
        [Locale.tc]: [],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `聖劍卡利伯是主神賜予人類唯一的禮物，是代替祂斬殺魔族的刀刃。作為由神明創造出來的武器，千百年來，卡利伯一直跟在不同的主人身邊，施行主神的意志，消滅邪惡，保護弱者。她的職責，就是將危害世間的魔族斬殺殆盡，而這，也同時是她唯一的生存意義。可是，本該無敵的她卻戰敗了，敗給了名為凱薩的魔王。對此而心有不甘的聖劍，終於在某天突然化身成人類。抱持著對魔王復仇的願望，卡利伯揮舞著粉拳，朝著沒穿衣服的魔王全力揍了過去。\n\n『哼哼哼，顫抖吧！現在站在你面前的，可是斬滅魔王的終焉之刃、魔族制裁者、人類的希望之光，守護萬物的聖劍卡利伯喔！』`,
        [Locale.sc]: `圣剑卡利伯是主神赐予人类唯一的礼物，是代替祂斩杀魔族的刀刃。作为由神明创造出来的武器，千百年来，卡利伯一直跟在不同的主人身边，施行主神的意志，消灭邪恶，保护弱者。她的职责，就是将危害世间的魔族斩杀殆尽，而这，也同时是她唯一的生存意义。可是，本该无敌的她却战败了，败给了名为凯萨的魔王。对此而心有不甘的圣剑，终于在某天突然化身成人类。抱持着对魔王復仇的愿望，卡利伯挥舞着粉拳，朝着没穿衣服的魔王全力揍了过去。\n\n『哼哼哼，颤抖吧！现在站在你面前的，可是斩灭魔王的终焉之刃、魔族制裁者、人类的希望之光，守护万物的圣剑卡利伯喔！』`,
        [Locale.en]: `Blademaster Calibur is the sole gift bestowed upon humanity by Eclesis Deo, a blade forged to slay the Demons in His stead. As a weapon created by a deity, Calibur has spent thousands of years standing beside various masters, executing the divine will, purging evil, and protecting the weak. Her duty is to wipe out every last demon threatening the world; this is also her sole reason for existence. Yet, despite her supposed invincibility, she suffered defeat... beaten by the Archdemon known as Caesar. Unwilling to accept this humiliation, the Blademaster suddenly transformed into a human form one day. Carrying her burning desire for vengeance against the Archdemon, Calibur swung her little pink fists and threw a full-power punch straight at the stark-naked Archdemon.\n\n"Hmph! Tremble before me! For standing in front of you right now is the ultimate blade of the demon race's doom! The scourge of all Demons! Humanity's light of hope! And the protector of all creation: Blademaster Calibur!"`,
        [Locale.jp]: `聖剣カリバーは神が人間に与え給うた唯一の恵み。神に替わり魔族を打ち滅ぼす聖なる刃。神の手に依って創られた武器として、カリバーはこの数千数百の歳月の中、主を転々としながらも、弱きを助け、悪を滅ぼすことで、神の意志を粛々と遂行してきた。世を乱す魔族の殲滅こそ、彼女の責務にして、唯一の存在意義。だが、その無敵の彼女が、ついに敗れた。シーザーという名の魔王によって。聖剣はその悔しさを募らせるあまり、ついにある日、人へと姿を変化させた。魔王への復讐という悲願を胸に、カリバーはその華奢な拳を、全裸の魔王へと全力で振りかざすのだった。\n\n『ふっふっふ、震えるがいい！貴様の眼前に在るは、魔王を絶ち滅ぼす終焉の刃にして魔族の制裁者、人類の希望の光にして万物を守護せし、かの聖剣カリバーであるぞ！』`,
        [Locale.kr]: `성검 칼리버는 주신께서 인류에게 하사한 유일한 선물이자, 그분을 대신해 마족을 베어 없애는 검이다. 신이 창조한 무기로서, 칼리버는 수천 년 동안 여러 주인의 곁을 지키며 주신의 뜻을 받들어 악을 물리치고 약자를 보호해 왔다. 세상을 위협하는 마족을 모조리 베어 없애는 것, 그것이 그녀의 사명이자 유일한 존재 이유였다. 그러나 무적이라 여겨졌던 칼리버는 시저라는 이름의 마왕에게 패배하고 말았다. 패배를 받아들일 수 없었던 성검은, 마침내 어느 날 인간의 모습으로 변했다. 마왕에게 복수심을 품은 칼리버는 주먹을 불끈 쥔 채, 옷도 입지 않은 마왕을 향해 있는 힘껏 주먹을 날렸다.\n\n『후후후, 두려움에 떨어라! 지금 네 앞에 서 있는 건 바로 마왕을 베어 없앨 종언의 칼날이자 마족의 심판자, 인류의 희망의 빛, 만물을 수호하는 성검 칼리버라고!』`
    },
    rarity: Rarity.SSR,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2026/09/09",
    essence: UnitEssence[UnitCode.calibur],
    thumbnail: UnitEssence[UnitCode.calibur],
    selection: UnitSelection[UnitCode.calibur],
    clothes: UnitFullImage[UnitCode.calibur],
    tagList: [],
    otherVersion: [],
    initHP: 3838.4,
    initATK: 963.2,
    puzzle: [],
    outfits: UnitOutfits[UnitCode.calibur],
    voiceSet: UnitVoice[UnitCode.calibur],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}

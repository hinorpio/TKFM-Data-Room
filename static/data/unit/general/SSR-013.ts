import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID, VoiceType } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits, UnitVoice } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10028: Unit = {
    ID: "10028",
    metaCode: "chizuru",
    prefix: {
        [Locale.tc]: "復生公主",
        [Locale.sc]: "复生公主",
        [Locale.en]: "Risen Princess",
        [Locale.jp]: "甦りの姫",
        [Locale.kr]: "다시 태어난"
    },
    name: {
        [Locale.tc]: "千鶴",
        [Locale.sc]: "千鹤",
        [Locale.en]: "Chizuru",
        [Locale.jp]: "千鶴",
        [Locale.kr]: "치즈루"
    },
    abbreviation: {
        [Locale.tc]: [ "普鶴", "普千", "解鶴", "解千", "鶴", "千" ],
        [Locale.sc]: [ "普鹤", "普千", "解鹤", "解千", "鹤", "千" ],
        [Locale.en]: [ "OG.Chizuru" ],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `千鶴是烈日國的公主。即使在魔族大軍包圍皇都，烈日國的皇帝與貴族都感到絕望時依然不改樂觀向上的心。一向與循規蹈矩無關的千鶴，在城破時履行了作為皇室成員的義務捨身殉國。在從小隨侍的女忍陪同下，安然的永眠。…本該迎來這樣的結局，但是在死後的一天，千鶴卻像是睡醒一樣爬出了墳墓。曾經生存的國家已經被魔族佔領，生前認識的父皇、母后，以及兄弟姊妹都已經不在告別人類的身份，以不死生物之身重新踏入人世的千鶴未來將何去何從？\n\n『為了確保飲食，首先必須找到營生工作…啊，不死族應該不需要吃東西吧？』`,
        [Locale.sc]: `千鹤是烈日国的公主。即使在魔族大军包围皇都，烈日国的皇帝与贵族都感到绝望时依然不改乐观向上的心。一向与循规蹈矩无关的千鹤，在城破时履行了作为皇室成员的义务舍身殉国。在从小随侍的女忍陪同下，安然的永眠。…本该迎来这样的结局，但是在死后的一天，千鹤却像是睡醒一样爬出了坟墓。曾经生存的国家已经被魔族占领，生前认识的父皇、母后，以及兄弟姊妹都已经不在告别人类的身份，以不死生物之身重新踏入人世的千鹤未来将何去何从？\n\n『为了确保饮食，首先必须找到营生工作…啊，不死族应该不需要吃东西吧？』`,
        [Locale.en]: `Chizuru is a former Isori princess. Surrounded by demons, the warrior capital of Isorath looked unto their doom with solemn acceptance, understanding their fate. Princess Chizuru, facing certain death, chose to end her life and go down with her kingdom. Her ninja servant Ritsuki by her side, Chizuru ended her life. ...At least, she tried to. But then, one day later, Chizuru crawled out of her tomb, somehow alive once again. Her kingdom and her family long gone. Saying goodbye to her identity as a princess and 'normal alive human', what adventures await Chizuru in her newly undead state?\n\n"I guess I'll have to find a new job to keep food on the table... Hold on, zombies don't need to eat, right?"`,
        [Locale.jp]: `千鶴は烈陽国の姫。魔族の大軍が皇都を包囲した際でも、烈陽国の皇帝と貴族は絶望を感じながらも楽観的な気持ちを忘れることはなかった。しきたりとは無縁だった千鶴だが、城が攻撃を受けた時には皇室の一員として国のために命を懸けた。そして幼いころからのお世話役だったくノ一に寄り添われ、安らかな永眠を迎えた。……というのが本来迎えるべき結末だったのだが、死を迎えた翌日、千鶴は眠りから目を覚ましたかのように墓から這い出てきたのだ。国は既に魔族に占領され、生前の天皇や皇后、そして兄弟の姿はもうなかった。人類としての身分を捨て、アンデッドとしてこの世に再度降り立った千鶴の今後はいかに。\n\n『食料を確保するために、まずは仕事を見つけないと……あ、アンデッドは食べなくても大丈夫なのかな？』֯`,
        [Locale.kr]: `치즈루는 태양국의 공주이다. 마족 대군이 태양국의 수도를 포위하여 태양국의 황제와 귀족들이 모두 절망에 빠져 있을 때에도, 그녀는 긍정적이고 낙관적인 마음을 버리지 않았다. 틀에 박힌 규율과 규칙과는 언제나 거리가 먼 치즈루는 성이 함락 당할 때 황실 구성원의 의무를 다하기 위해 목숨을 바쳐 순국했다. 그녀는 어려서부터 함께 자란 여닌자와 함께 죽음을 맞이하다... 원래는 이런 결말을 맞이해야 했지만, 사후 첫 날 치즈루는 마치 꿈에서 깬 것처럼 무덤에서 걸어나왔고 그땐 이미 나라가 마족에게 점령당하고 부황과 모후, 그리고 형제자매들까지 모두 사라진 뒤였다. 인간의 신분을 떠나, 언데드로 다시 세상에 돌아온 치즈루의 미래는 과연 어떻게 될 것인지?\n\n『먹을 음식을 해결하기 위해 먼저 일을 찾아야겠어... 참, 언데드는 음식을 먹지 않아도 되잖아?』֯`
    },
    rarity: Rarity.SSR,
    element: Element.WIND,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: false,
    releaseDate: "2021/04/21",
    essence: UnitEssence[UnitCode.chizuru],
    thumbnail: UnitEssence[UnitCode.chizuru],
    selection: UnitSelection[UnitCode.chizuru],
    clothes: UnitFullImage[UnitCode.chizuru],
    tagList: [
        TagID.ELEMENT_WIND,
        TagID.POSITION_ATTACKER,
        TagID.SPECIES_DEMON,
        TagID.BODY_MEDIUM_SIZED,
        TagID.CLASS_LEADER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_EXPLOSIVENESS,
    ],
    otherVersion: [ UnitCode.w_chizuru, UnitCode.s_chizuru ],
    initHP: 3448,
    initATK: 928,
    puzzle: [],
    outfits: [],
    voiceSet: UnitVoice[UnitCode.chizuru],
    voiceException: [
        {
            version: 1,
            exception: [],
        }
    ],
    skillSet: []
}
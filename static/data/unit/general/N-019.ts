import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10922: Unit = {
    ID: "10922",
    metaCode: "prototype",
    prefix: {
        [Locale.tc]: "",
        [Locale.sc]: "",
        [Locale.en]: "Prototype",
        [Locale.jp]: "",
        [Locale.kr]: "시험기"
    },
    name: {
        [Locale.tc]: "試作機三號",
        [Locale.sc]: "试作机三号",
        [Locale.en]: "#3",
        [Locale.jp]: "試作機3号",
        [Locale.kr]: "3호"
    },
    abbreviation: {
        [Locale.tc]: [ "嗶嗶" ],
        [Locale.sc]: [ "哔哔" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `沒有任何感情，就連基礎的人工智能也沒有安裝，只會執行命令的機械兵。因為材料的關係，在建造時突破性的使用了魔晶石作為能源。物理防禦極強，但相對的對魔法的抵抗能力非常差勁。因為直到開發到第三型才能投入實戰，因此戰場上不會看到一號與二號機型。\n\n『滴、滴滴…偵查到敵蹤。』`,
        [Locale.sc]: `没有任何感情，就连基础的人工智能也没有安装，只会执行命令的机械兵。因为材料的关系，在建造时突破性的使用了魔晶石作为能源。物理防御极强，但相对的对魔法的抵抗能力非常差劲。因为直到开发到第三型才能投入实战，因此战场上不会看到一号与二号机型。\n\n『滴、滴滴…侦查到敌踪。』`,
        [Locale.en]: `Prototype #3 is completely devoid of feeling, lacking even the simplest of emotion or intelligence modules. All it can do is take orders. Because of the materials it's made from, its designers found a way to power it up using demonite--quite the breakthrough at the time--making its physical defense high but magical defense absolutely awful. Prototype #3 was the first prototype that was able to fight, which is why you'll never see #1 or #2 on the battlefield.\n\n"*Beep* *Boop*... Enemy detected."`,
        [Locale.jp]: `一切の感情を持たず、基本的な人工知能すらインストールされていないため、命令に従うだけの機械兵。素材の関係で、魔晶石を動力源としている。物理的防禦に優れているが、魔法に対する抵抗力はとても低い。3号機が開発されてようやく実戦に投入することができたため、1号機と2号機を戦場で見る事は無い。\n\n『ピッ、ピピッ……敵の痕跡を発見』`,
        [Locale.kr]: `어떠한 감정도 가지고 있지 않으며, 기본적인 인공지능마저도 장착되지 않아 그저 명령을 수행하는 것 밖에 모르는 기계 병사이다. 재료 문제로 인해, 제조 시에 마정석을 에너지로 사용하는 획기적인 방법을 채택하게 되었다. 극강의 물리 방어를 자랑하나, 상대적으로 마법 저항 능력은 매우 떨어진다. 3호기까지 개발된 다음에 실전에 투입되었기 때문에, 전장에서는 1호기와 2호기를 볼 수 없다.\n\n『뚜, 뚜뚜... 적의 움직임이 감지되었다.』`
    },
    rarity: Rarity.N,
    element: Element.LIGHT,
    position: Position.ATTACKER,
    potential: PotentialType.NR,
    isLimited: false,
    releaseDate: "2021/03/10",
    essence: UnitEssence[UnitCode.prototype],
    thumbnail: UnitEssence[UnitCode.prototype],
    selection: UnitSelection[UnitCode.prototype],
    clothes: UnitFullImage[UnitCode.prototype],
    tagList: [ 
        TagID.ELEMENT_LIGHT, 
        TagID.POSITION_ATTACKER, 
        TagID.BODY_SMALL_SIZED, 
        TagID.BREAST_HOT_TITS, 
        TagID.CLASS_SOLDIER,
        TagID.OTHER_DAMAGE_OUTPUT,
        TagID.OTHER_SURVIVABILLITY,
    ],
    otherVersion: [],
    initHP: 1938.9996746246745,
    initATK: 521.9986342670065,
    puzzle: [],
    outfits: [],
    skillSet: []
}
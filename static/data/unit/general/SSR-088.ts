import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage, UnitOutfits } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10071: Unit = {
    ID: "10071",
    metaCode: "sasha",
    prefix: {
        [Locale.tc]: "詛咒凝視",
        [Locale.sc]: "诅咒凝视",
        [Locale.en]: "Cursed Gaze",
        [Locale.jp]: "呪いの眼",
        [Locale.kr]: "저주의 감시인"
    },
    name: {
        [Locale.tc]: "絲塔夏",
        [Locale.sc]: "丝塔夏",
        [Locale.en]: "Sasha",
        [Locale.jp]: "スターシャ",
        [Locale.kr]: "스타샤"
    },
    abbreviation: {
        [Locale.tc]: [ "莎夏" ],
        [Locale.sc]: [ "莎夏" ],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: `絲塔夏是森林禁地的守衛者，負責看守禁地中某個古老邪惡存在的封印。身負特殊體質的她，不僅無懼詛咒，還可以將他人身上的詛咒吸收到體內封印，因此絲塔夏除了會定期吸收封印中散發的詛咒，防止詛咒擴散，還可以透過雙眼釋放詛咒，將所有圖謀不軌，內心受到蠱惑的入侵者通通驅除。如果有誰膽敢直視那雙如同地獄般散發不祥的雙眼，他將不幸纏身，陷入難以擺脫的噩夢中無法自拔。\n\n『擅闖禁地者，唯有死路一條。』`,
        [Locale.sc]: `丝塔夏是森林禁地的守卫者，负责看守禁地中某个古老邪恶存在的封印。身负特殊体质的她，不仅无惧诅咒，还可以将他人身上的诅咒吸收到体内封印，因此丝塔夏除了会定期吸收封印中散发的诅咒，防止诅咒扩散，还可以透过双眼释放诅咒，将所有图谋不轨，内心受到蛊惑的入侵者通通驱除。如果有谁胆敢直视那双如同地狱般散发不祥的双眼，他将不幸缠身，陷入难以摆脱的噩梦中无法自拔。\n\n『擅闯禁地者，唯有死路一条。』`,
        [Locale.en]: `Stasha is a Guardian of the Forbidden Forest, charged with watching over the ancient evils that remain sealed away there. She fears no curse or hex, and with her special constitution, she can even absorb and seal away curses from others' bodies into her own. In addition to absorbing the curses regularly emitted from the seal, Sasha can also release them through her eyes to drive away evildoers and bewitched minions. Anyone who dares to look directly into those hellish eyes will be haunted by misfortunes and lost in inescapable nightmares.\n\n"Those who trespass in the Forbidden Forest shall never leave alive."`,
        [Locale.jp]: `スターシャは禁じられし森の守護者。とある古の邪悪の封印を見守っている。特殊な体質の彼女は呪いを恐れず、他人の呪いを吸収して体内に封じ込めることができる。そのためスターシャは、封印から漏れ出す呪いが広がらないように定期的に吸収し、また両目から呪いを放つことで、悪だくみをする侵入者を追い払っている。その不幸をもたらす地獄のような瞳を直視した者は、悪夢の中に閉じ込められ、抜け出せなくなってしまうという。\n\n『禁じられた地に足を踏み入れた者は、死あるのみ』`,
        [Locale.kr]: `스타샤는 삼림 금지 구역의 수호자로, 금지 구역에 있는 고대의 사악한 존재의 봉인을 감시하는 일을 담당하고 있다. 특이체질 덕분에 저주를 두려워하지 않을 뿐만 아니라 다른 사람의 저주를 흡수하여 체내에 봉인시킬 수도 있다. 그렇게 스타샤는 봉인에서 새어나오는 저주가 퍼지지 않도록 정기적으로 흡수하며, 또 두 눈을 통해 저주를 흘려보내며 어리석은 침입자들을 쫓아내곤 한다. 누구라도 그녀의 두 눈을 마주본다면 벗어나기 힘든 악몽에 빠져들고 말것이다.\n\n『금지 구역에 함부로 발을 들이는 자에겐 죽음을.』`
    },
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    potential: PotentialType.ATTACK,
    isLimited: true,
    releaseDate: "2023/08/09",
    essence: UnitEssence[UnitCode.sasha],
    thumbnail: UnitEssence[UnitCode.sasha],
    selection: UnitSelection[UnitCode.sasha],
    clothes: UnitFullImage[UnitCode.sasha],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    outfits: [],
    skillSet: []
}
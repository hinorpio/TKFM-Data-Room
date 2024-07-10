import { Locale, Rarity, Element, Position, PotentialType, PuzzleCode, UnitCode, TagID } from '@/plugins/utils/enums';
import { UnitEssence, UnitSelection, UnitFullImage } from '~/static/const';
import { Unit } from '@/interface/unit';

export const General_10071: Unit = {
    ID: "10071",
    metaCode: "sasha",
    prefix: {
        [Locale.tc]: "詛咒凝視",
        [Locale.sc]: null,
        [Locale.en]: "Cursed Gaze",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    name: {
        [Locale.tc]: "絲塔夏",
        [Locale.sc]: null,
        [Locale.en]: "Sasha",
        [Locale.jp]: null,
        [Locale.kr]: null
    },
    abbreviation: {
        [Locale.tc]: [ "莎夏", "絲塔夏" ],
        [Locale.sc]: [],
        [Locale.en]: [],
        [Locale.jp]: [],
        [Locale.kr]: []
    },
    background: {
        [Locale.tc]: "絲塔夏是森林禁地的守衛者，負責看守禁地中某個古老邪惡存在的封印。身負特殊體質的她，不僅無懼詛咒，還可以將他人身上的詛咒吸收到體內封印，因此絲塔夏除了會定期吸收封印中散發的詛咒，防止詛咒擴散，還可以透過雙眼釋放詛咒，將所有圖謀不軌，內心受到蠱惑的入侵者通通驅除。如果有誰膽敢直視那雙如同地獄般散發不祥的雙眼，他將不幸纏身，陷入難以擺脫的噩夢中無法自拔。\n\n『擅闖禁地者，唯有死路一條。』",
        [Locale.sc]: null,
        [Locale.en]: null,
        [Locale.jp]: null,
        [Locale.kr]: null
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
    skillSet: []
}
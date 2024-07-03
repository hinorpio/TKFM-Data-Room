import { Unit } from "@/interface/unit";
import { UnitCode } from "@/plugins/utils/enums";

import { GENERAL_10001 } from "./SSR-001";
import { GENERAL_10002 } from "./SSR-002";
import { GENERAL_10003 } from "./SSR-003";
import { GENERAL_10802 } from "./R-001";
import { Rarity, Element, Position, PotentialType } from "@/plugins/utils/enums";

export const DefaultUnit: Unit = {
    ID: "",
    metaCode: "",
    prefix: {},
    name: {},
    abbreviation: {},
    background: {},
    rarity: Rarity.SSR,
    element: Element.FIRE,
    position: Position.ATTACKER,
    isLimited: false,
    potential: PotentialType.ATTACK,
    releaseDate: "2020-12-14",
    essence: '',
    thumbnail: '',
    selection: '',
    clothes: [],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}

export const UnitGeneral: { [key in UnitCode]?: Unit } = {
    [UnitCode.baal]: GENERAL_10001,
    [UnitCode.satan]: GENERAL_10002,
    [UnitCode.iblis]: GENERAL_10003,
    [UnitCode.nana]: GENERAL_10802,
};
import { Unit } from "@/interface/unit";
import { UnitID } from "@/plugins/utils/enums";

import { GENERAL_10001 } from "./10001";
import { GENERAL_10002 } from "./10002";
import { GENERAL_10003 } from "./10003";
import { GENERAL_10802 } from "./10802";
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

export const UnitGeneral: { [key in UnitID]?: Unit } = {
    [UnitID.baal]: GENERAL_10001,
    [UnitID.satan]: GENERAL_10002,
    [UnitID.iblis]: GENERAL_10003,
    [UnitID.nana]: GENERAL_10802,
};
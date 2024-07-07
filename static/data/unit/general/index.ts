import { Unit } from "@/interface/unit";
import { UnitCode } from "@/plugins/utils/enums";

import { GENERAL_10001 } from "./SSR-001";
import { GENERAL_10002 } from "./SSR-002";
import { GENERAL_10003 } from "./SSR-003";
import { GENERAL_10004 } from "./SSR-004";
import { GENERAL_10005 } from "./SSR-005";
import { GENERAL_10006 } from "./SSR-006";
import { GENERAL_10017 } from "./SSR-007";
import { GENERAL_10025 } from "./SSR-008";
import { GENERAL_10026 } from "./SSR-009";
import { GENERAL_10008 } from "./SSR-010";
import { GENERAL_10037 } from "./SSR-011";
import { GENERAL_10027 } from "./SSR-012";
import { GENERAL_10028 } from "./SSR-013";
import { GENERAL_10057 } from "./SSR-014";
import { GENERAL_10029 } from "./SSR-015";
import { GENERAL_10030 } from "./SSR-016";
import { GENERAL_10031 } from "./SSR-017";
import { GENERAL_10032 } from "./SSR-018";
import { GENERAL_10007 } from "./SSR-019";
import { GENERAL_10034 } from "./SSR-020";
import { GENERAL_10035 } from "./SSR-021";
import { GENERAL_10033 } from "./SSR-022";
import { GENERAL_10039 } from "./SSR-023";
import { GENERAL_10058 } from "./SSR-024";
import { GENERAL_10060 } from "./SSR-025";
import { GENERAL_10056 } from "./SSR-026";
import { GENERAL_10045 } from "./SSR-027";
import { GENERAL_10040 } from "./SSR-028";
import { GENERAL_10043 } from "./SSR-029";
import { GENERAL_10059 } from "./SSR-030";
import { GENERAL_10083 } from "./SSR-031";
import { GENERAL_10052 } from "./SSR-032";
import { GENERAL_10053 } from "./SSR-033";
import { GENERAL_10054 } from "./SSR-034";
import { GENERAL_10067 } from "./SSR-035";
import { GENERAL_10079 } from "./SSR-036";
import { GENERAL_10072 } from "./SSR-037";
import { GENERAL_10081 } from "./SSR-038";
import { GENERAL_10082 } from "./SSR-039";
import { GENERAL_10084 } from "./SSR-040";
import { GENERAL_10018 } from "./SSR-041";
import { GENERAL_10019 } from "./SSR-042";
import { GENERAL_10020 } from "./SSR-043";
import { GENERAL_10802 } from "./R-001";
import { Rarity, Element, Position, PotentialType } from "@/plugins/utils/enums";

export const UnitGeneral: { [key in UnitCode]?: Unit } = {
    [UnitCode.baal]: GENERAL_10001,
    [UnitCode.satan]: GENERAL_10002,
    [UnitCode.iblis]: GENERAL_10003,
    [UnitCode.salucia]: GENERAL_10004,
    [UnitCode.lana]: GENERAL_10005,
    [UnitCode.lulu]: GENERAL_10006,
    [UnitCode.f_baal]: GENERAL_10017,
    [UnitCode.i_iblis]: GENERAL_10025,
    [UnitCode.noel]: GENERAL_10026,
    [UnitCode.ks8]: GENERAL_10008,
    [UnitCode.mesmiia]: GENERAL_10037,
    [UnitCode.e_satan]: GENERAL_10027,
    [UnitCode.chizuru]: GENERAL_10028,
    [UnitCode.daphne]: GENERAL_10057,
    [UnitCode.s_shizuka]: GENERAL_10029,
    [UnitCode.s_lulu]: GENERAL_10030,
    [UnitCode.s_ks8]: GENERAL_10031,
    [UnitCode.s_nana]: GENERAL_10032,
    [UnitCode.milae]: GENERAL_10007,
    [UnitCode.asida]: GENERAL_10034,
    [UnitCode.asina]: GENERAL_10035,
    [UnitCode.aridya]: GENERAL_10033,
    [UnitCode.lotiya]: GENERAL_10039,
    [UnitCode.fufu]: GENERAL_10058,
    [UnitCode.hm_fiora]: GENERAL_10060,
    [UnitCode.karina]: GENERAL_10056,
    [UnitCode.ibuki]: GENERAL_10045,
    [UnitCode.h_britney]: GENERAL_10040,
    [UnitCode.h_salucia]: GENERAL_10043,
    [UnitCode.inori]: GENERAL_10059,
    [UnitCode.sakuya]: GENERAL_10083,
    [UnitCode.x_aiko]: GENERAL_10052,
    [UnitCode.x_lana]: GENERAL_10053,
    [UnitCode.evie]: GENERAL_10054,
    [UnitCode.tm_minayomi]: GENERAL_10067,
    [UnitCode.tm_ritsuki]: GENERAL_10079,
    [UnitCode.b_baal]: GENERAL_10072,
    [UnitCode.b_iblis]: GENERAL_10081,
    [UnitCode.b_satan]: GENERAL_10082,
    [UnitCode.miru]: GENERAL_10084,
    [UnitCode.uruta]: GENERAL_10018,
    [UnitCode.ayane]: GENERAL_10019,
    [UnitCode.muila]: GENERAL_10020,
    [UnitCode.nana]: GENERAL_10802,
};

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
    releaseDate: "2020/12/14",
    essence: '',
    thumbnail: '',
    selection: '',
    clothes: [],
    tagList: [],
    otherVersion: [],
    puzzle: [],
    skillSet: []
}
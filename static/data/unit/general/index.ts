import { Unit } from "@/interface/unit";
import { UnitCode } from "@/plugins/utils/enums";
import { Rarity, Element, Position, PotentialType } from "@/plugins/utils/enums";

import { General_10802 } from "./R-002";
import { General_10001 } from "./SSR-001";
import { General_10002 } from "./SSR-002";
import { General_10003 } from "./SSR-003";
import { General_10004 } from "./SSR-004";
import { General_10005 } from "./SSR-005";
import { General_10006 } from "./SSR-006";
import { General_10017 } from "./SSR-007";
import { General_10025 } from "./SSR-008";
import { General_10026 } from "./SSR-009";
import { General_10008 } from "./SSR-010";
import { General_10037 } from "./SSR-011";
import { General_10027 } from "./SSR-012";
import { General_10028 } from "./SSR-013";
import { General_10057 } from "./SSR-014";
import { General_10029 } from "./SSR-015";
import { General_10030 } from "./SSR-016";
import { General_10031 } from "./SSR-017";
import { General_10032 } from "./SSR-018";
import { General_10007 } from "./SSR-019";
import { General_10034 } from "./SSR-020";
import { General_10035 } from "./SSR-021";
import { General_10033 } from "./SSR-022";
import { General_10039 } from "./SSR-023";
import { General_10058 } from "./SSR-024";
import { General_10060 } from "./SSR-025";
import { General_10056 } from "./SSR-026";
import { General_10045 } from "./SSR-027";
import { General_10040 } from "./SSR-028";
import { General_10043 } from "./SSR-029";
import { General_10059 } from "./SSR-030";
import { General_10083 } from "./SSR-031";
import { General_10052 } from "./SSR-032";
import { General_10053 } from "./SSR-033";
import { General_10054 } from "./SSR-034";
import { General_10067 } from "./SSR-035";
import { General_10079 } from "./SSR-036";
import { General_10072 } from "./SSR-037";
import { General_10081 } from "./SSR-038";
import { General_10082 } from "./SSR-039";
import { General_10084 } from "./SSR-040";
import { General_10018 } from "./SSR-041";
import { General_10019 } from "./SSR-042";
import { General_10020 } from "./SSR-043";
import { General_10050 } from "./SSR-044";
import { General_10075 } from "./SSR-045";
import { General_10076 } from "./SSR-046";
import { General_10049 } from "./SSR-047";
import { General_10100 } from "./SSR-048";
import { General_10042 } from "./SSR-049";
import { General_10090 } from "./SSR-050";
import { General_10091 } from "./SSR-051";
import { General_10092 } from "./SSR-052";
import { General_10074 } from "./SSR-053";
import { General_10085 } from "./SSR-054";
import { General_10088 } from "./SSR-055";
import { General_10089 } from "./SSR-056";
import { General_10063 } from "./SSR-057";
import { General_10066 } from "./SSR-058";
import { General_10093 } from "./SSR-059";
import { General_10094 } from "./SSR-060";
import { General_10068 } from "./SSR-061";
import { General_10047 } from "./SSR-062";
import { General_10095 } from "./SSR-063";
import { General_10096 } from "./SSR-064";
import { General_10062 } from "./SSR-065";
import { General_10024 } from "./SSR-066";
import { General_10097 } from "./SSR-067";
import { General_10098 } from "./SSR-068";
import { General_10021 } from "./SSR-069";
import { General_10106 } from "./SSR-070";
import { General_10107 } from "./SSR-071";
import { General_10108 } from "./SSR-072";
import { General_10109 } from "./SSR-073";
import { General_10110 } from "./SSR-074";
import { General_10069 } from "./SSR-075";
import { General_10078 } from "./SSR-076";
import { General_10114 } from "./SSR-077";
import { General_10115 } from "./SSR-078";
import { General_10048 } from "./SSR-079";
import { General_10113 } from "./SSR-080";
import { General_10111 } from "./SSR-081";
import { General_10116 } from "./SSR-082";
import { General_10117 } from "./SSR-083";
import { General_10118 } from "./SSR-084";
import { General_10119 } from "./SSR-085";
import { General_10120 } from "./SSR-086";
import { General_10121 } from "./SSR-087";
import { General_10071 } from "./SSR-088";
import { General_10077 } from "./SSR-089";
import { General_10122 } from "./SSR-090";
import { General_10123 } from "./SSR-091";
import { General_10124 } from "./SSR-092";


const N: { [key in UnitCode]?: Unit } = {
    [UnitCode.nana]: General_10802,
}

const R: { [key in UnitCode]?: Unit } = {

}

const SR: { [key in UnitCode]?: Unit } = {

}

const SSR: { [key in UnitCode]?: Unit } = {
    [UnitCode.baal]: General_10001,
    [UnitCode.satan]: General_10002,
    [UnitCode.iblis]: General_10003,
    [UnitCode.salucia]: General_10004,
    [UnitCode.lana]: General_10005,
    [UnitCode.lulu]: General_10006,
    [UnitCode.f_baal]: General_10017,
    [UnitCode.i_iblis]: General_10025,
    [UnitCode.noel]: General_10026,
    [UnitCode.ks8]: General_10008,
    [UnitCode.mesmiia]: General_10037,
    [UnitCode.e_satan]: General_10027,
    [UnitCode.chizuru]: General_10028,
    [UnitCode.daphne]: General_10057,
    [UnitCode.s_shizuka]: General_10029,
    [UnitCode.s_lulu]: General_10030,
    [UnitCode.s_ks8]: General_10031,
    [UnitCode.s_nana]: General_10032,
    [UnitCode.milae]: General_10007,
    [UnitCode.asida]: General_10034,
    [UnitCode.asina]: General_10035,
    [UnitCode.aridya]: General_10033,
    [UnitCode.lotiya]: General_10039,
    [UnitCode.fufu]: General_10058,
    [UnitCode.hm_fiora]: General_10060,
    [UnitCode.karina]: General_10056,
    [UnitCode.ibuki]: General_10045,
    [UnitCode.h_britney]: General_10040,
    [UnitCode.h_salucia]: General_10043,
    [UnitCode.inori]: General_10059,
    [UnitCode.sakuya]: General_10083,
    [UnitCode.x_aiko]: General_10052,
    [UnitCode.x_lana]: General_10053,
    [UnitCode.evie]: General_10054,
    [UnitCode.tm_minayomi]: General_10067,
    [UnitCode.tm_ritsuki]: General_10079,
    [UnitCode.b_baal]: General_10072,
    [UnitCode.b_iblis]: General_10081,
    [UnitCode.b_satan]: General_10082,
    [UnitCode.miru]: General_10084,
    [UnitCode.uruta]: General_10018,
    [UnitCode.ayane]: General_10019,
    [UnitCode.muila]: General_10020,
    [UnitCode.f_caesar]: General_10050,
    [UnitCode.w_chizuru]: General_10075,
    [UnitCode.w_lulu]: General_10076,
    [UnitCode.faya]: General_10049,
    [UnitCode.usagihime]: General_10100,
    [UnitCode.s_iblis]: General_10042,
    [UnitCode.s_milae]: General_10090,
    [UnitCode.s_noel]: General_10091,
    [UnitCode.s_aridya]: General_10092,
    [UnitCode.ichika]: General_10074,
    [UnitCode.kana]: General_10085,
    [UnitCode.q_asida]: General_10088,
    [UnitCode.q_asina]: General_10089,
    [UnitCode.emily]: General_10063,
    [UnitCode.anjelica]: General_10066,
    [UnitCode.c1_nana]: General_10093,
    [UnitCode.geneva]: General_10094,
    [UnitCode.lotus]: General_10068,
    [UnitCode.didi]: General_10047,
    [UnitCode.h_leona]: General_10095,
    [UnitCode.h_lotiya]: General_10096,
    [UnitCode.sherana]: General_10062,
    [UnitCode.elizabeth]: General_10024,
    [UnitCode.xx_aiko]: General_10097,
    [UnitCode.x_shizuka]: General_10098,
    [UnitCode.shiro]: General_10021,
    [UnitCode.ny_salucia]: General_10106,
    [UnitCode.ny_lana]: General_10107,
    [UnitCode.v_baal]: General_10108,
    [UnitCode.v_iblis]: General_10109,
    [UnitCode.v_satan]: General_10110,
    [UnitCode.lillane]: General_10069,
    [UnitCode.c_lulu]: General_10078,
    [UnitCode.m_juneau]: General_10114,
    [UnitCode.m_britney]: General_10115,
    [UnitCode.momo]: General_10048,
    [UnitCode.n_caesar]: General_10113,
    [UnitCode.d_irene]: General_10111,
    [UnitCode.s_ayane]: General_10116,
    [UnitCode.s_baal]: General_10117,
    [UnitCode.s_fiora]: General_10118,
    [UnitCode.s_aiko]: General_10119,
    [UnitCode.o_lana]: General_10120,
    [UnitCode.o_nana]: General_10121,
    [UnitCode.sasha]: General_10071,
    [UnitCode.bayliss]: General_10077,
    [UnitCode.a_usagihime]: General_10122,
    [UnitCode.d_miru]: General_10123,
    [UnitCode.nyoro]: General_10124,
}

export const UnitGeneral: { [key in UnitCode]?: Unit } = {
    ...N,
    ...R,
    ...SR,
    ...SSR
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
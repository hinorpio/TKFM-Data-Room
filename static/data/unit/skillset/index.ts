import { SkillSet } from "@/interface/unit/skillset";
import { UnitCode } from "@/plugins/utils/enums";

import { SkillSet_10802 } from "./R-002";
import { SkillSet_10001 } from "./SSR-001";
import { SkillSet_10002 } from "./SSR-002";
import { SkillSet_10003 } from "./SSR-003";
import { SkillSet_10004 } from "./SSR-004";
import { SkillSet_10005 } from "./SSR-005";
import { SkillSet_10006 } from "./SSR-006";
import { SkillSet_10017 } from "./SSR-007";
import { SkillSet_10025 } from "./SSR-008";
import { SkillSet_10026 } from "./SSR-009";
import { SkillSet_10008 } from "./SSR-010";
import { SkillSet_10037 } from "./SSR-011";
import { SkillSet_10027 } from "./SSR-012";
import { SkillSet_10028 } from "./SSR-013";
import { SkillSet_10057 } from "./SSR-014";
import { SkillSet_10029 } from "./SSR-015";
import { SkillSet_10030 } from "./SSR-016";
import { SkillSet_10031 } from "./SSR-017";
import { SkillSet_10032 } from "./SSR-018";
import { SkillSet_10007 } from "./SSR-019";
import { SkillSet_10034 } from "./SSR-020";
import { SkillSet_10035 } from "./SSR-021";
import { SkillSet_10033 } from "./SSR-022";
import { SkillSet_10039 } from "./SSR-023";
import { SkillSet_10058 } from "./SSR-024";
import { SkillSet_10060 } from "./SSR-025";
import { SkillSet_10056 } from "./SSR-026";
import { SkillSet_10045 } from "./SSR-027";
import { SkillSet_10040 } from "./SSR-028";
import { SkillSet_10043 } from "./SSR-029";
import { SkillSet_10059 } from "./SSR-030";
import { SkillSet_10083 } from "./SSR-031";
import { SkillSet_10052 } from "./SSR-032";
import { SkillSet_10053 } from "./SSR-033";
import { SkillSet_10054 } from "./SSR-034";
import { SkillSet_10067 } from "./SSR-035";
import { SkillSet_10079 } from "./SSR-036";
import { SkillSet_10072 } from "./SSR-037";
import { SkillSet_10081 } from "./SSR-038";
import { SkillSet_10082 } from "./SSR-039";
import { SkillSet_10084 } from "./SSR-040";
import { SkillSet_10018 } from "./SSR-041";
import { SkillSet_10019 } from "./SSR-042";
import { SkillSet_10020 } from "./SSR-043";
import { SkillSet_10050 } from "./SSR-044";
import { SkillSet_10075 } from "./SSR-045";
import { SkillSet_10076 } from "./SSR-046";
import { SkillSet_10049 } from "./SSR-047";
import { SkillSet_10100 } from "./SSR-048";
import { SkillSet_10042 } from "./SSR-049";
import { SkillSet_10090 } from "./SSR-050";
import { SkillSet_10091 } from "./SSR-051";
import { SkillSet_10092 } from "./SSR-052";
import { SkillSet_10074 } from "./SSR-053";
import { SkillSet_10085 } from "./SSR-054";
import { SkillSet_10088 } from "./SSR-055";
import { SkillSet_10089 } from "./SSR-056";
import { SkillSet_10063 } from "./SSR-057";
import { SkillSet_10066 } from "./SSR-058";
import { SkillSet_10093 } from "./SSR-059";
import { SkillSet_10094 } from "./SSR-060";
import { SkillSet_10068 } from "./SSR-061";
import { SkillSet_10047 } from "./SSR-062";
import { SkillSet_10095 } from "./SSR-063";
import { SkillSet_10096 } from "./SSR-064";
import { SkillSet_10062 } from "./SSR-065";
import { SkillSet_10024 } from "./SSR-066";
import { SkillSet_10097 } from "./SSR-067";
import { SkillSet_10098 } from "./SSR-068";
import { SkillSet_10021 } from "./SSR-069";
import { SkillSet_10106 } from "./SSR-070";
import { SkillSet_10107 } from "./SSR-071";
import { SkillSet_10108 } from "./SSR-072";
import { SkillSet_10109 } from "./SSR-073";
import { SkillSet_10110 } from "./SSR-074";
import { SkillSet_10069 } from "./SSR-075";
import { SkillSet_10078 } from "./SSR-076";
import { SkillSet_10114 } from "./SSR-077";
import { SkillSet_10115 } from "./SSR-078";
import { SkillSet_10048 } from "./SSR-079";
import { SkillSet_10113 } from "./SSR-080";
import { SkillSet_10111 } from "./SSR-081";
import { SkillSet_10116 } from "./SSR-082";
import { SkillSet_10117 } from "./SSR-083";
import { SkillSet_10118 } from "./SSR-084";
import { SkillSet_10119 } from "./SSR-085";
import { SkillSet_10120 } from "./SSR-086";
import { SkillSet_10121 } from "./SSR-087";
import { SkillSet_10071 } from "./SSR-088";
import { SkillSet_10077 } from "./SSR-089";
import { SkillSet_10122 } from "./SSR-090";
import { SkillSet_10123 } from "./SSR-091";
import { SkillSet_10124 } from "./SSR-092";

const N: { [key in UnitCode]?: SkillSet[] } = {
    [UnitCode.nana]: SkillSet_10802,
}

const R: { [key in UnitCode]?: SkillSet[] } = {

}

const SR: { [key in UnitCode]?: SkillSet[] } = {

}

const SSR: { [key in UnitCode]?: SkillSet[] } = {
    [UnitCode.baal]: SkillSet_10001,
    [UnitCode.satan]: SkillSet_10002,
    [UnitCode.iblis]: SkillSet_10003,
    [UnitCode.salucia]: SkillSet_10004,
    [UnitCode.lana]: SkillSet_10005,
    [UnitCode.lulu]: SkillSet_10006,
    [UnitCode.f_baal]: SkillSet_10017,
    [UnitCode.i_iblis]: SkillSet_10025,
    [UnitCode.noel]: SkillSet_10026,
    [UnitCode.ks8]: SkillSet_10008,
    [UnitCode.mesmiia]: SkillSet_10037,
    [UnitCode.e_satan]: SkillSet_10027,
    [UnitCode.chizuru]: SkillSet_10028,
    [UnitCode.daphne]: SkillSet_10057,
    [UnitCode.s_shizuka]: SkillSet_10029,
    [UnitCode.s_lulu]: SkillSet_10030,
    [UnitCode.s_ks8]: SkillSet_10031,
    [UnitCode.s_nana]: SkillSet_10032,
    [UnitCode.milae]: SkillSet_10007,
    [UnitCode.asida]: SkillSet_10034,
    [UnitCode.asina]: SkillSet_10035,
    [UnitCode.aridya]: SkillSet_10033,
    [UnitCode.lotiya]: SkillSet_10039,
    [UnitCode.fufu]: SkillSet_10058,
    [UnitCode.hm_fiora]: SkillSet_10060,
    [UnitCode.karina]: SkillSet_10056,
    [UnitCode.ibuki]: SkillSet_10045,
    [UnitCode.h_britney]: SkillSet_10040,
    [UnitCode.h_salucia]: SkillSet_10043,
    [UnitCode.inori]: SkillSet_10059,
    [UnitCode.sakuya]: SkillSet_10083,
    [UnitCode.x_aiko]: SkillSet_10052,
    [UnitCode.x_lana]: SkillSet_10053,
    [UnitCode.evie]: SkillSet_10054,
    [UnitCode.tm_minayomi]: SkillSet_10067,
    [UnitCode.tm_ritsuki]: SkillSet_10079,
    [UnitCode.b_baal]: SkillSet_10072,
    [UnitCode.b_iblis]: SkillSet_10081,
    [UnitCode.b_satan]: SkillSet_10082,
    [UnitCode.miru]: SkillSet_10084,
    [UnitCode.uruta]: SkillSet_10018,
    [UnitCode.ayane]: SkillSet_10019,
    [UnitCode.muila]: SkillSet_10020,
    [UnitCode.f_caesar]: SkillSet_10050,
    [UnitCode.w_chizuru]: SkillSet_10075,
    [UnitCode.w_lulu]: SkillSet_10076,
    [UnitCode.faya]: SkillSet_10049,
    [UnitCode.usagihime]: SkillSet_10100,
    [UnitCode.s_iblis]: SkillSet_10042,
    [UnitCode.s_milae]: SkillSet_10090,
    [UnitCode.s_noel]: SkillSet_10091,
    [UnitCode.s_aridya]: SkillSet_10092,
    [UnitCode.ichika]: SkillSet_10074,
    [UnitCode.kana]: SkillSet_10085,
    [UnitCode.q_asida]: SkillSet_10088,
    [UnitCode.q_asina]: SkillSet_10089,
    [UnitCode.emily]: SkillSet_10063,
    [UnitCode.anjelica]: SkillSet_10066,
    [UnitCode.c1_nana]: SkillSet_10093,
    [UnitCode.geneva]: SkillSet_10094,
    [UnitCode.lotus]: SkillSet_10068,
    [UnitCode.didi]: SkillSet_10047,
    [UnitCode.h_leona]: SkillSet_10095,
    [UnitCode.h_lotiya]: SkillSet_10096,
    [UnitCode.sherana]: SkillSet_10062,
    [UnitCode.elizabeth]: SkillSet_10024,
    [UnitCode.xx_aiko]: SkillSet_10097,
    [UnitCode.x_shizuka]: SkillSet_10098,
    [UnitCode.shiro]: SkillSet_10021,
    [UnitCode.ny_salucia]: SkillSet_10106,
    [UnitCode.ny_lana]: SkillSet_10107,
    [UnitCode.v_baal]: SkillSet_10108,
    [UnitCode.v_iblis]: SkillSet_10109,
    [UnitCode.v_satan]: SkillSet_10110,
    [UnitCode.lillane]: SkillSet_10069,
    [UnitCode.c_lulu]: SkillSet_10078,
    [UnitCode.m_juneau]: SkillSet_10114,
    [UnitCode.m_britney]: SkillSet_10115,
    [UnitCode.momo]: SkillSet_10048,
    [UnitCode.n_caesar]: SkillSet_10113,
    [UnitCode.d_irene]: SkillSet_10111,
    [UnitCode.s_ayane]: SkillSet_10116,
    [UnitCode.s_baal]: SkillSet_10117,
    [UnitCode.s_fiora]: SkillSet_10118,
    [UnitCode.s_aiko]: SkillSet_10119,
    [UnitCode.o_lana]: SkillSet_10120,
    [UnitCode.o_nana]: SkillSet_10121,
    [UnitCode.sasha]: SkillSet_10071,
    [UnitCode.bayliss]: SkillSet_10077,
    [UnitCode.a_usagihime]: SkillSet_10122,
    [UnitCode.d_miru]: SkillSet_10123,
    [UnitCode.nyoro]: SkillSet_10124,
}

export const UnitSkillSet: { [key in UnitCode]?: SkillSet[] } = {
    ...N,
    ...R,
    ...SR,
    ...SSR
};
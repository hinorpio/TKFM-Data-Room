import { Discipline } from "@/interface/unit/discipline";
import { UnitCode } from "@/plugins/utils/enums";

import { Discipline_10001 } from "./SSR-001";
import { Discipline_10002 } from "./SSR-002";
import { Discipline_10003 } from "./SSR-003";
import { Discipline_10004 } from "./SSR-004";
import { Discipline_10005 } from "./SSR-005";
import { Discipline_10006 } from "./SSR-006";
import { Discipline_10017 } from "./SSR-007";
import { Discipline_10025 } from "./SSR-008";
import { Discipline_10026 } from "./SSR-009";
import { Discipline_10008 } from "./SSR-010";
import { Discipline_10037 } from "./SSR-011";
import { Discipline_10027 } from "./SSR-012";
import { Discipline_10028 } from "./SSR-013";
import { Discipline_10057 } from "./SSR-014";
import { Discipline_10029 } from "./SSR-015";
import { Discipline_10030 } from "./SSR-016";
import { Discipline_10031 } from "./SSR-017";
import { Discipline_10032 } from "./SSR-018";
import { Discipline_10007 } from "./SSR-019";
import { Discipline_10034 } from "./SSR-020";
import { Discipline_10035 } from "./SSR-021";
import { Discipline_10033 } from "./SSR-022";
import { Discipline_10039 } from "./SSR-023";
import { Discipline_10058 } from "./SSR-024";
import { Discipline_10060 } from "./SSR-025";
import { Discipline_10056 } from "./SSR-026";
import { Discipline_10045 } from "./SSR-027";
import { Discipline_10040 } from "./SSR-028";
import { Discipline_10043 } from "./SSR-029";
import { Discipline_10059 } from "./SSR-030";
import { Discipline_10083 } from "./SSR-031";
import { Discipline_10052 } from "./SSR-032";
import { Discipline_10053 } from "./SSR-033";
import { Discipline_10054 } from "./SSR-034";
import { Discipline_10067 } from "./SSR-035";
import { Discipline_10079 } from "./SSR-036";
import { Discipline_10072 } from "./SSR-037";
import { Discipline_10081 } from "./SSR-038";
import { Discipline_10082 } from "./SSR-039";
import { Discipline_10084 } from "./SSR-040";
import { Discipline_10018 } from "./SSR-041";
import { Discipline_10019 } from "./SSR-042";
import { Discipline_10020 } from "./SSR-043";
import { Discipline_10050 } from "./SSR-044";
import { Discipline_10075 } from "./SSR-045";
import { Discipline_10076 } from "./SSR-046";
import { Discipline_10049 } from "./SSR-047";
import { Discipline_10100 } from "./SSR-048";
import { Discipline_10042 } from "./SSR-049";
import { Discipline_10090 } from "./SSR-050";
import { Discipline_10091 } from "./SSR-051";
import { Discipline_10092 } from "./SSR-052";
import { Discipline_10074 } from "./SSR-053";
import { Discipline_10085 } from "./SSR-054";
import { Discipline_10088 } from "./SSR-055";
import { Discipline_10089 } from "./SSR-056";
import { Discipline_10063 } from "./SSR-057";
import { Discipline_10066 } from "./SSR-058";
import { Discipline_10093 } from "./SSR-059";
import { Discipline_10094 } from "./SSR-060";
import { Discipline_10068 } from "./SSR-061";
import { Discipline_10047 } from "./SSR-062";
import { Discipline_10095 } from "./SSR-063";
import { Discipline_10096 } from "./SSR-064";
import { Discipline_10062 } from "./SSR-065";
import { Discipline_10024 } from "./SSR-066";
import { Discipline_10097 } from "./SSR-067";
import { Discipline_10098 } from "./SSR-068";
import { Discipline_10802 } from "./R-001";

export const UnitDiscipline: { [key in UnitCode]?: Discipline[] } = {
    [UnitCode.baal]: Discipline_10001,
    [UnitCode.satan]: Discipline_10002,
    [UnitCode.iblis]: Discipline_10003,
    [UnitCode.salucia]: Discipline_10004,
    [UnitCode.lana]: Discipline_10005,
    [UnitCode.lulu]: Discipline_10006,
    [UnitCode.f_baal]: Discipline_10017,
    [UnitCode.i_iblis]: Discipline_10025,
    [UnitCode.noel]: Discipline_10026,
    [UnitCode.ks8]: Discipline_10008,
    [UnitCode.mesmiia]: Discipline_10037,
    [UnitCode.e_satan]: Discipline_10027,
    [UnitCode.chizuru]: Discipline_10028,
    [UnitCode.daphne]: Discipline_10057,
    [UnitCode.s_shizuka]: Discipline_10029,
    [UnitCode.s_lulu]: Discipline_10030,
    [UnitCode.s_ks8]: Discipline_10031,
    [UnitCode.s_nana]: Discipline_10032,
    [UnitCode.milae]: Discipline_10007,
    [UnitCode.asida]: Discipline_10034,
    [UnitCode.asina]: Discipline_10035,
    [UnitCode.aridya]: Discipline_10033,
    [UnitCode.lotiya]: Discipline_10039,
    [UnitCode.fufu]: Discipline_10058,
    [UnitCode.hm_fiora]: Discipline_10060,
    [UnitCode.karina]: Discipline_10056,
    [UnitCode.ibuki]: Discipline_10045,
    [UnitCode.h_britney]: Discipline_10040,
    [UnitCode.h_salucia]: Discipline_10043,
    [UnitCode.inori]: Discipline_10059,
    [UnitCode.sakuya]: Discipline_10083,
    [UnitCode.x_aiko]: Discipline_10052,
    [UnitCode.x_lana]: Discipline_10053,
    [UnitCode.evie]: Discipline_10054,
    [UnitCode.tm_minayomi]: Discipline_10067,
    [UnitCode.tm_ritsuki]: Discipline_10079,
    [UnitCode.b_baal]: Discipline_10072,
    [UnitCode.b_iblis]: Discipline_10081,
    [UnitCode.b_satan]: Discipline_10082,
    [UnitCode.miru]: Discipline_10084,
    [UnitCode.uruta]: Discipline_10018,
    [UnitCode.ayane]: Discipline_10019,
    [UnitCode.muila]: Discipline_10020,
    [UnitCode.f_caesar]: Discipline_10050,
    [UnitCode.w_chizuru]: Discipline_10075,
    [UnitCode.w_lulu]: Discipline_10076,
    [UnitCode.faya]: Discipline_10049,
    [UnitCode.usagihime]: Discipline_10100,
    [UnitCode.s_iblis]: Discipline_10042,
    [UnitCode.s_milae]: Discipline_10090,
    [UnitCode.s_noel]: Discipline_10091,
    [UnitCode.s_aridya]: Discipline_10092,
    [UnitCode.ichika]: Discipline_10074,
    [UnitCode.kana]: Discipline_10085,
    [UnitCode.q_asida]: Discipline_10088,
    [UnitCode.q_asina]: Discipline_10089,
    [UnitCode.emily]: Discipline_10063,
    [UnitCode.anjelica]: Discipline_10066,
    [UnitCode.c1_nana]: Discipline_10093,
    [UnitCode.geneva]: Discipline_10094,
    [UnitCode.lotus]: Discipline_10068,
    [UnitCode.didi]: Discipline_10047,
    [UnitCode.h_leona]: Discipline_10095,
    [UnitCode.h_lotiya]: Discipline_10096,
    [UnitCode.sherana]: Discipline_10062,
    [UnitCode.elizabeth]: Discipline_10024,
    [UnitCode.xx_aiko]: Discipline_10097,
    [UnitCode.x_shizuka]: Discipline_10098,
    [UnitCode.nana]: Discipline_10802,
};
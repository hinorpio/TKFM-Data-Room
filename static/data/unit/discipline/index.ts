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
    [UnitCode.nana]: Discipline_10802,
};
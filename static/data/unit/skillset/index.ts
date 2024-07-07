import { SkillSet } from "@/interface/unit/skillset";
import { UnitCode } from "@/plugins/utils/enums";

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
import { SkillSet_10802 } from "./R-001";

export const UnitSkillSet: { [key in UnitCode]?: SkillSet[] } = {
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
    [UnitCode.nana]: SkillSet_10802,
};
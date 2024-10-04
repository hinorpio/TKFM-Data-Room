import { LiberateSkillSet } from "@/interface/unit/liberateSkillSet";
import { UnitCode } from "@/plugins/utils/enums";

import { LiberateSkillSet_10001 } from "./SSR-001";
import { LiberateSkillSet_10002 } from "./SSR-002";
import { LiberateSkillSet_10003 } from "./SSR-003";
import { LiberateSkillSet_10004 } from "./SSR-004";
import { LiberateSkillSet_10005 } from "./SSR-005";
import { LiberateSkillSet_10006 } from "./SSR-006";
import { LiberateSkillSet_10008 } from "./SSR-010";
import { LiberateSkillSet_10028 } from "./SSR-013";
import { LiberateSkillSet_10007 } from "./SSR-019";
import { LiberateSkillSet_10017 } from "./SSR-007";
import { LiberateSkillSet_10026 } from "./SSR-009";

export const UnitLiberateSkillSet: { [key in UnitCode]?: LiberateSkillSet[] } = {
    [UnitCode.baal]: LiberateSkillSet_10001,
    [UnitCode.satan]: LiberateSkillSet_10002,
    [UnitCode.iblis]: LiberateSkillSet_10003,
    [UnitCode.salucia]: LiberateSkillSet_10004,
    [UnitCode.lana]: LiberateSkillSet_10005,
    [UnitCode.lulu]: LiberateSkillSet_10006,
    [UnitCode.ks8]: LiberateSkillSet_10008,
    [UnitCode.chizuru]: LiberateSkillSet_10028,
    [UnitCode.milae]: LiberateSkillSet_10007,
    [UnitCode.f_baal]: LiberateSkillSet_10017,
    [UnitCode.noel]: LiberateSkillSet_10026,
};
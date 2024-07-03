import { LiberateSkillSet } from "@/interface/unit/liberateSkillSet";
import { UnitCode } from "@/plugins/utils/enums";

import { LiberateSkillSet_10001 } from "./SSR-001";
import { LiberateSkillSet_10002 } from "./SSR-002";
import { LiberateSkillSet_10003 } from "./SSR-003";

export const UnitLiberateSkillSet: { [key in UnitCode]?: LiberateSkillSet[] } = {
    [UnitCode.baal]: LiberateSkillSet_10001,
    [UnitCode.satan]: LiberateSkillSet_10002,
    [UnitCode.iblis]: LiberateSkillSet_10003,
};
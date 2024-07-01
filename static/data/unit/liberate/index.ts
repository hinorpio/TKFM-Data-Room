import { LiberateSkillSet } from "@/interface/unit/liberateSkillSet";
import { UnitID } from "@/plugins/utils/enums";

import { LiberateSkillSet_10001 } from "./10001";
import { LiberateSkillSet_10002 } from "./10002";
import { LiberateSkillSet_10003 } from "./10003";

export const UnitLiberateSkillSet: { [key in UnitID]?: LiberateSkillSet[] } = {
    [UnitID.baal]: LiberateSkillSet_10001,
    [UnitID.satan]: LiberateSkillSet_10002,
    [UnitID.iblis]: LiberateSkillSet_10003,
};
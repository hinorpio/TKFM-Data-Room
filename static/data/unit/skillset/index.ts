import { SkillSet } from "@/interface/unit/skillset";
import { UnitID } from "@/plugins/utils/enums";

import { SkillSet_10001 } from "./10001";
import { SkillSet_10002 } from "./10002";
import { SkillSet_10003 } from "./10003";
import { SkillSet_10802 } from "./10802";

export const UnitSkillSet: { [key in UnitID]?: SkillSet[] } = {
    [UnitID.baal]: SkillSet_10001,
    [UnitID.satan]: SkillSet_10002,
    [UnitID.iblis]: SkillSet_10003,
    [UnitID.nana]: SkillSet_10802,
};
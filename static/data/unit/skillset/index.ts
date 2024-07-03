import { SkillSet } from "@/interface/unit/skillset";
import { UnitCode } from "@/plugins/utils/enums";

import { SkillSet_10001 } from "./SSR-001";
import { SkillSet_10002 } from "./SSR-002";
import { SkillSet_10003 } from "./SSR-003";
import { SkillSet_10802 } from "./R-001";

export const UnitSkillSet: { [key in UnitCode]?: SkillSet[] } = {
    [UnitCode.baal]: SkillSet_10001,
    [UnitCode.satan]: SkillSet_10002,
    [UnitCode.iblis]: SkillSet_10003,
    [UnitCode.nana]: SkillSet_10802,
};
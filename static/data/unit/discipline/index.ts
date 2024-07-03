import { Discipline } from "@/interface/unit/discipline";
import { UnitCode } from "@/plugins/utils/enums";

import { Discipline_10001 } from "./SSR-001";
import { Discipline_10002 } from "./SSR-002";
import { Discipline_10003 } from "./SSR-003";
import { Discipline_10802 } from "./R-001";

export const UnitDiscipline: { [key in UnitCode]?: Discipline[] } = {
    [UnitCode.baal]: Discipline_10001,
    [UnitCode.satan]: Discipline_10002,
    [UnitCode.iblis]: Discipline_10003,
    [UnitCode.nana]: Discipline_10802,
};
import { Discipline } from "@/interface/unit/discipline";
import { UnitID } from "@/plugins/utils/enums";

import { Discipline_10001 } from "./10001";
import { Discipline_10002 } from "./10002";
import { Discipline_10003 } from "./10003";
import { Discipline_10802 } from "./10802";

export const UnitDiscipline: { [key in UnitID]?: Discipline[] } = {
    [UnitID.baal]: Discipline_10001,
    [UnitID.satan]: Discipline_10002,
    [UnitID.iblis]: Discipline_10003,
    [UnitID.nana]: Discipline_10802,
};
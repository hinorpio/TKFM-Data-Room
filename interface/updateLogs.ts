import { Locale, LogType, LogGroup, UnitCode, FanartOwner, PuzzleCode } from '@/plugins/utils/enums';

export interface Logs {
    type: LogType;
    group: LogGroup;
    content?: {
        [lang in Locale]: string;
    };
    unitList?: UnitCode[];
    eventList?: string[];
    ownerList?: FanartOwner[];
    puzzleList?: PuzzleCode[];
}

export interface UpdateLogs {
    version: string,
    logs: Logs[]
}

  
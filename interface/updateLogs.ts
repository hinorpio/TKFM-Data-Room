import { Locale, LogType, LogGroup, UnitCode } from '@/plugins/utils/enums';

export interface Logs {
    type: LogType;
    group: LogGroup;
    content?: {
        [lang in Locale]: string;
    };
    unitList?: UnitCode[];
    eventList?: string[]
}

export interface UpdateLogs {
    version: string,
    logs: Logs[]
}

  
import { Locale, LogType } from '@/plugins/utils/enums';

interface Logs {
    type: LogType;
    content: {
        [lang in Locale]: string;
    };
}

export interface UpdateLogs {
    version: string,
    logs: Logs[]
}

  
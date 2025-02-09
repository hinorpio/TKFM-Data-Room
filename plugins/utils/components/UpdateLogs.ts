import { Locale, LogType } from '../enums';
import { UpdateLogs } from '@/interface/updateLogs';
import { LogTypeColor, LogTypeStr } from '~/static/const';
import UpdateLogsData from '@/static/data/updateLogs';

export default {
    getAllUpdateLogs(): UpdateLogs[] {
        return UpdateLogsData;
    },

    getLogTypeColor(type: LogType): string{
        return LogTypeColor[type]
    },

    getLogTypeString(type: LogType): {[lang in Locale]: string}{
        return LogTypeStr[type];
    }
};
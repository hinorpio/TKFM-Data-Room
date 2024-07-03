import { Event } from '@/interface/event';
import eventData from '@/static/data/events';
import { Locale, EventType } from '../enums';
import { EventTypeString } from '~/static/const';

export default {
    getAllEvent(): Event[][] {
        return eventData;
    },

    getEventTypeString(type: EventType, lang: Locale){
        const locale = lang as keyof typeof Locale
        return EventTypeString[type][locale];
    }
};
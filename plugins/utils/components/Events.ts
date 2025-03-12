import { Event } from '@/interface/event';
import eventData from '@/static/data/event';
import { Locale, ErrorMessage, EventType } from '../enums';
import { EventTypeString } from '~/static/const';

export default {
    getAllEvent(): Event[][] {
        return eventData;
    },

    getEvent(metaCode: string): Event | undefined{
        const foundEventList = eventData.find((events: Event[]) => {
            return events.find((event: Event) => event.code === metaCode)
        });
        const foundEvent = foundEventList?.find((event: Event) => event.code === metaCode)
        if (foundEvent) {
            return foundEvent;
        } else {
            throw new Error(ErrorMessage.CANNOT_FIND_EVENT);
        }
    },
    

    getEventTypeString(type: EventType, lang: Locale){
        const locale = lang as keyof typeof Locale
        return EventTypeString[type][locale];
    }
};
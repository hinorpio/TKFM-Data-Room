<template>
    <v-layout v-if="isMounted">
        <v-container :key="key">
            <v-timeline v-if="!isEventSelected" dense>
                <v-timeline-item v-for="(events, i) in eventData" :key="i" :color="getTimeLineColor(events)" small >
                  <v-row class="py-2">
                    <v-col v-for="(event, index) in events" :key="index" :cols="12" :xl="3" :lg="4" :md="6" :sm="6" :xs="12">
                      <event-card :event="event" />
                    </v-col>
                  </v-row>
                </v-timeline-item>
            </v-timeline>
            <v-row v-else>
                <v-spacer></v-spacer>
                <v-card class="mt-4" :style="{background: '#424242', width: dialogWidth}" :elevation="0">
                    <event-detail :event="event" />
                </v-card>
                <v-spacer></v-spacer>
            </v-row>
        </v-container>
    </v-layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import { Event } from '@/interface/event'
import { ErrorCode } from "~/plugins/utils/enums";
import EventCard from "@/components/Event/EventCard.vue";
import EventDetail from "~/components/Event/EventDetail.vue";

@Component({
    components: {
        EventCard,
        EventDetail
    }
})
export default class EventPage extends Vue {

    isMounted: boolean = false 
    isEventSelected: boolean = false
    dialogWidth: String = '75em';
    eventData: Event[][] = []
    event: Event | undefined
    key: number = 0


    @Watch("watchedQueryParams")
    onWatchedQueryParamsChangenew(newQueryParams: string): void {
        this.pageCustomRefresh()
    }
    
    mounted(): void{
        this.eventData = this.$util.getAllEvent()
        this.pageCustomRefresh()
        this.isMounted = true
    }

    get watchedQueryParams(){
        return this.$route.query;
    }

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    getTimeLineColor(events: Event[]): string{
        return events[0]?.color
    }

    pageCustomRefresh(){
        const metaCode = this.watchedQueryParams.code as string
        this.key++
        this.scrollToTop()

        if(metaCode === undefined){
            this.isEventSelected = false
            this.event = undefined
        }else{
            try {
                this.isEventSelected = true
                this.event = this.$util.getEvent(metaCode)
            } catch (error) {
                console.log(error);
                const customError = this.$util.getCustomError(ErrorCode.CANNOT_FIND_EVENT)
                this.$nuxt.error(customError)
            }
        }
    }

}
</script>
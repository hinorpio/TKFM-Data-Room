<template>
    <v-layout v-if="isMounted">
        <v-container>
            <v-timeline dense>
                <v-timeline-item v-for="(events, i) in eventData" :key="i" :color="getTimeLineColor(events)" small >
                  <v-row class="py-4">
                    <v-col v-for="(event, index) in events" :key="index" :cols="12" :xl="3" :lg="4" :md="6" :sm="6" :xs="12">
                      <event-card :event="event" />
                    </v-col>
                  </v-row>
                </v-timeline-item>
            </v-timeline>
        </v-container>
    </v-layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Event } from '@/interface/event'
import EventCard from "@/components/Event/EventCard.vue";

@Component({
    components: {
        EventCard
    }
})
export default class DispatchPage extends Vue {

    isMounted: boolean = false 
    eventData: Event[][] = []
    
    mounted(): void{
        this.eventData = this.$util.getAllEvent()
        this.isMounted = true
    }


    getTimeLineColor(events: Event[]): string{
        return events[0]?.color
    }

}

</script>
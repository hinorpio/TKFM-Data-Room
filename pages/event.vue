<template>
    <v-layout v-if="isMounted">
        <v-container>
            <v-timeline dense>
                <v-timeline-item v-for="(events, i) in eventData" :key="i" :color="getTimeLineColor(events)" small >
                  <v-row class="py-4">
                    <v-col v-for="(event, index) in events" :key="index" :cols="12" :xl="3" :lg="4" :md="6" :sm="6" :xs="12">
                      <!-- {{ getEventName(event) }} -->
                      <v-img :src="getEventBanner(event)" :lazy-src="getEventBanner(event)" contain />
                      <v-row class="align-center px-4 pt-4">
                        <v-chip :color="event.color" small >
                            {{getEventTypeString(event)}}
                        </v-chip>
                        <v-spacer></v-spacer>
                        <span :class="titleClass">{{ `${event.startDate} ~ ${event.endDate}` }}</span>
                      </v-row>
                  
                      <v-row v-if="event.newUnit.length > 0" class="align-center px-4" >
                        <v-chip :color="event.color" small outlined>
                            {{ $t('New Character') }}
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-avatar v-for="(unitIcon, unitIndex) in getNewUnitIcon(event.newUnit)" :key="unitIndex" :size="iconSize" tile >
                          <v-img :src="unitIcon" contain />
                        </v-avatar>
                      </v-row>
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
import { Locale, UnitCode } from "@/plugins/utils/enums";
import { Event } from '@/interface/event'

@Component
export default class DispatchPage extends Vue {

    isMounted: boolean = false 
    eventData: Event[][] = []
    
    mounted(): void{
        this.eventData = this.$util.getAllEvent()
        this.isMounted = true
    }

    get iconSize(): string{
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return '2.5em'
            case 'sm': return '2.5em'
            case 'md': return '2.5em'
            case 'lg': return '2.5em'
            case 'xl': return '2.5em'
            default: return '2.5em'
        }
    }

    get titleClass(): string{
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return 'subtitle-2'
            case 'sm': return 'subtitle-1'
            case 'md': return 'subtitle-1'
            case 'lg': return 'subtitle-1'
            case 'xl': return 'subtitle-1'
            default: return 'subtitle-1'
        }
    }

    getTimeLineColor(events: Event[]): string{
        return events[0]?.color
    }

    getEventBanner(event: Event): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        const image = event.image[locale]
        return (image)? image :''
    }

    getEventName(event: Event): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        const name = event.name[locale]
        return (name)? name :''
    }

    getEventTypeString(event: Event): string{
        return this.$util.getEventTypeString(event.type, this.$i18n.locale)
    }

    getNewUnitIcon(unitcode: UnitCode[]): string[]{
      const unit = this.$util.getUnitsByIDs(unitcode)
      return unit.map(newUnit => newUnit.thumbnail)
    }
}

</script>
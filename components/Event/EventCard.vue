<template>
    <div>
        <!-- {{ getEventName(event) }} -->
        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <v-img v-bind="attrs" v-on="on" :src="getEventBanner(event)" :lazy-src="getEventBanner(event)" contain />
            </template>
            {{ getEventName(event) }}
        </v-tooltip>
        <v-row class="align-center px-4 pt-4">
        <v-chip :color="event.color" :small="isChipSmall" :x-small="isChipXSmall" >
            {{getEventTypeString(event)}}
        </v-chip>
        <v-spacer></v-spacer>
        <span :class="titleClass">{{ `${event.startDate} ~ ${event.endDate}` }}</span>
        </v-row>
        <v-row v-if="event.newUnit.length > 0" class="align-center px-4" >
        <v-chip :color="event.color" :small="isChipSmall" :x-small="isChipXSmall" outlined>
            {{ $t('New Character') }}
        </v-chip>
        <v-spacer></v-spacer>
        <v-avatar v-for="(unitIcon, unitIndex) in getNewUnitIcon(event.newUnit)" :key="unitIndex" :size="iconSize" tile >
            <v-img :src="unitIcon" contain />
        </v-avatar>
        </v-row>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale, UnitCode } from "@/plugins/utils/enums";
import { Event } from '@/interface/event'

@Component
export default class EventCard extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    event!: Event;

    get isChipSmall(): boolean{
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return false
            case 'sm': return false
            case 'md': return true
            case 'lg': return true
            case 'xl': return true
            default: return true
        }
    }

    get isChipXSmall(): boolean{
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return true
            case 'sm': return true
            case 'md': return false
            case 'lg': return false
            case 'xl': return false
            default: return false
        }
    }

    get iconSize(): string{
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return '2em'
            case 'sm': return '2.5em'
            case 'md': return '2.5em'
            case 'lg': return '2.5em'
            case 'xl': return '2.5em'
            default: return '2.5em'
        }
    }

    get titleClass(): string{
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return 'caption'
            case 'sm': return 'subtitle-1'
            case 'md': return 'subtitle-1'
            case 'lg': return 'subtitle-1'
            case 'xl': return 'subtitle-1'
            default: return 'subtitle-1'
        }
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
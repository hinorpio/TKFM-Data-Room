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

    get isChipSmall(): boolean {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, false, false, true, true, true)
    }

    get isChipXSmall(): boolean{
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, true, true, false, false, false)
    }

    get iconSize(): string{
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '2em', '2.5em', '2.5em', '2.5em', '2.5em')
    }

    get titleClass(): string{
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'caption', 'subtitle-1', 'subtitle-1', 'subtitle-1', 'subtitle-1')
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
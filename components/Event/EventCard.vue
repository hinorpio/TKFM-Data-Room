<template>
    <div>
        <!-- {{ getEventName(event) }} -->
        <span :class="titleClass">{{ `${event.startDate} ~ ${event.endDate}` }}</span>
        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <v-img v-bind="attrs" v-on="on" :src="getEventBanner(event)" :lazy-src="getEventBanner(event)" contain />
            </template>
            {{ getEventName(event) }}
        </v-tooltip>
        <v-row class="align-start px-4 mt-1">
            <v-chip :color="event.color" :small="isChipSmall" :x-small="isChipXSmall" >
                {{getEventTypeString(event)}}
            </v-chip>
            <v-spacer></v-spacer>
            <!-- <v-avatar class="pb-3" v-for="(unit, unitIndex) in getNewUnit(event.newUnit)" :key="unitIndex" :size="iconSize" tile >
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-img v-bind="attrs" v-on="on" :src="unit.thumbnail" contain />
                    </template>
                    {{ unit.name }}
                </v-tooltip>
            </v-avatar> -->
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

    getNewUnit(unitcode: UnitCode[]): any{
      const unit = this.$util.getUnitsByIDs(unitcode)
      const locale = this.$i18n.locale as keyof typeof Locale
      return unit.map(newUnit => {
        return {
            thumbnail: newUnit.thumbnail,
            name: `${newUnit.rarity} - ${newUnit.prefix[locale]} ${newUnit.name[locale]}`
        }
      })
    }
}

</script>
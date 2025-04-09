<template>
    <div>
        <span :class="titleClass">{{ `${event.startDate} ~ ${event.endDate}` }}</span>
        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <v-img @click="handleClick" v-bind="attrs" v-on="on" contain>
                    <template v-slot:default>
                        <img :src="getEventBanner(event)" :lazy-src="getEventBanner(event)" alt="Image" style="object-fit: contain; width: 100%;">
                    </template>
                </v-img>
            </template>
            {{ getEventName(event) }}
        </v-tooltip>
        <v-row class="align-start px-4 mt-1">
            <v-chip :color="event.color" :small="isChipSmall" :x-small="isChipXSmall" >
                {{getEventTypeString(event)}}
            </v-chip>
        </v-row>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale, UnitCode } from "@/plugins/utils/enums";
import { Event } from '@/interface/event'
import { log } from "console";

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
        const image = event.banner[locale]
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

    handleClick(): void{
        console.log("Still under dev")
        // const locale = this.$i18n.locale
        // const langPrefix = (locale === 'tc')?`` :`/${locale}`
        // this.$router.push({
        //     path: `${langPrefix}/event?code=${this.event.code}`,
        // });
    }
}

</script>
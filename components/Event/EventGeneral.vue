<template>
    <div>
        <v-img :src="getEventBanner(event)" :lazy-src="getEventBanner(event)" contain />
        <v-card :elevation="0">
            <v-card-title>
                {{ getEventName(event) }}
            </v-card-title>
            <v-card-text>
                <v-col>
                    <h3>{{ getEventDescription(event) }}</h3>
                    <v-divider class="my-4"></v-divider>
                    <v-row>
                        <v-col :cols="3">
                            <h3>{{ `${$t('Start Date')}:` }}</h3>
                            <h3>{{ `${$t('End Date')}:` }}</h3>
                        </v-col>
                        <v-col :cols="9">
                            <h3>{{ event.startDate }}</h3>
                            <h3>{{ event.endDate }}</h3>
                        </v-col>
                    </v-row>
                </v-col>
                <v-chip class="mx-2" :color="event.color" :small="isChipSmall" :x-small="isChipXSmall" >
                    {{getEventTypeString(event)}}
                </v-chip>
            </v-card-text>
        </v-card>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale } from "@/plugins/utils/enums";
import { Event } from '@/interface/event'

@Component
export default class EventGeneral extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    event!: Event;

    get isChipSmall(): boolean {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, false, false, true, true, true)
    }

    get isChipXSmall(): boolean{
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, true, true, false, false, false)
    }

    getEventBanner(event: Event): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        const banner = event.banner[locale]
        return (banner)? banner :''
    }

    getEventName(event: Event): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        const name = event.name[locale]
        return (name)? name :''
    }

    getEventDescription(event: Event): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        const description = event.description[locale]
        return (description)? description :''
    }

    getEventTypeString(event: Event): string{
        return this.$util.getEventTypeString(event.type, this.$i18n.locale)
    }

}

</script>
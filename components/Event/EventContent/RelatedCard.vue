<template>
    <div v-if="isMounted">
        <v-card elevation="0">
            <v-card-title>child</v-card-title>
            <v-card-text>
                <v-col v-for="(event, index) in relatedEvent" :key="index">
                    <event-card :event="event" />
                </v-col>
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
export default class RelatedCard extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    event!: Event;

    relatedEvent: Event[] = []

    isMounted: boolean = false

    mounted(): void{
        if(this.event.isParentEvent)
            this.getChildEvent()
        else
            this.getParentEvent()
        this.isMounted = true
    }

    getChildEvent(): void{
        this.event.childEvent.forEach(child => {
            var childEvent = this.$util.getEvent(child)
            if(childEvent)
                this.relatedEvent.push(childEvent)
        });
    }

    getParentEvent(): void{
        var parentEvent = undefined
        var parentEventCode = this.event.parentEvent
        if(parentEventCode)
            parentEvent = this.$util.getEvent(parentEventCode)
        if(parentEvent)
            this.relatedEvent.push(parentEvent)
    }

}

</script>
<style lang="sass" scoped>
::v-deep .v-card__title
  background: #424242
::v-deep .v-card__text
  background: #424242
</style>
<template>
    <div>
        <v-row>
            <v-col :cols="6">
                <event-general :event="event" />
            </v-col>
            <v-col :cols="6">
                <new-unit-card v-if="event.newUnit.length > 0" :event="event" />
                <related-card :event="event" />
            </v-col>
        </v-row>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale, UnitCode } from "@/plugins/utils/enums";
import { Event } from '@/interface/event'
import EventGeneral from "./EventGeneral.vue";
import NewUnitCard from "./EventContent/NewUnitCard.vue";
import RelatedCard from "./EventContent/RelatedCard.vue";

@Component({
    components: {
        EventGeneral,
        NewUnitCard,
        RelatedCard
    },
})
export default class EventDetail extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    event!: Event;

}

</script>
<style lang="sass" scoped>
::v-deep .v-card__title
  background: #424242
::v-deep .v-card__text
  background: #424242
</style>
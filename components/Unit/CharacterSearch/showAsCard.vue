<template>
    <v-row>
        <v-col v-for="(unit, index) in itemsForShow" :key="index" :cols="(12/itemsPerRow)" class="pa-1" > 
            <unit-card :unit="unit" @select="handleSelectUnit" />
        </v-col>
    </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale } from "~/plugins/utils/enums";
import { Unit } from '@/interface/unit'
import { RarityColor } from "@/static/const";
import UnitCard from "../UnitCard.vue";

@Component({
    components:{
        UnitCard
    }
})
export default class ShowAsCard extends Vue {
    @Prop({ type: Array, required: true })
    itemsForShow!: Unit[];

    get itemsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 1, 2, 3, 4, 4)
    }

    handleSelectUnit(unit: Unit): void {
        this.$emit('select', unit)
    }

}
</script>
<style lang="sass" scoped>
::v-deep .v-btn
    text-transform: unset !important
::v-deep .v-btn
    border-width: 1.5px !important
</style>
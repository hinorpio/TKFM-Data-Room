<template>
    <v-row>
        <v-col v-for="(unit, index) in itemsForShow" :key="index" :cols="(12/itemsPerRow)" class="py-2" > 
            <v-btn class="pa-0 character-button" outlined color="indigo" block :height="itemSize" @click="handleSelectUnit(unit)">
                <v-img :src="unit.thumbnail" :height="itemSize" :width="itemSize" contain/>
            </v-btn>
        </v-col>
    </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Unit } from '@/interface/unit'

@Component
export default class ShowAsIcon extends Vue {
    @Prop({ type: Array, required: true })
    itemsForShow!: Unit[];

    get itemsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 4, 6, 12, 12, 12)
    }

    get itemSize (): string {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '4.5em', '4.5em', '4.5em', '5.5em', '5.5em')
    }

    handleSelectUnit(unit: Unit): void {
        this.$emit('select', unit)
    }
}
</script>
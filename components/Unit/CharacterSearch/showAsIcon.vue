<template>
    <v-row>
        <v-col v-for="(unit, index) in itemsForShow" :key="index" :cols="(12/itemsPerRow)" class="py-2" > 
            <unit-icon :unit="unit" @select="handleSelectUnit"/>
        </v-col>
    </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Unit } from '@/interface/unit';
import { RarityColor } from "@/static/const";
import { Locale } from "~/plugins/utils/enums";
import UnitIcon from "../UnitIcon.vue";

@Component({
    components:{
        UnitIcon
    }
})
export default class ShowAsIcon extends Vue {
    @Prop({ type: Array, required: true })
    itemsForShow!: Unit[];

    get itemsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 4, 6, 12, 12, 12)
    }

    handleSelectUnit(unit: Unit): void {
        this.$emit('select', unit)
    }

}
</script>
<style lang="sass" scoped>
::v-deep .v-btn
    border-width: 1.5px !important
</style>
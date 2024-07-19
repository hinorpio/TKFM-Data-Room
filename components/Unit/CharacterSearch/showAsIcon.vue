<template>
    <v-row>
        <v-col v-for="(unit, index) in itemsForShow" :key="index" :cols="(12/itemsPerRow)" class="py-2" > 
            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on"  class="pa-0 character-button" outlined :color="getRarityColor(unit)" block :height="itemSize" @click="handleSelectUnit(unit)">
                        <v-img :src="unit.thumbnail" :height="itemSize" :width="itemSize" contain/>
                    </v-btn>
                </template>
                <span>{{ `${getPrefix(unit)} ${getName(unit)}` }}</span>
            </v-tooltip>
        </v-col>
    </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Unit } from '@/interface/unit';
import { RarityColor } from "@/static/const";
import { Locale } from "~/plugins/utils/enums";

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

    getRarityColor (unit: Unit): string {
        return RarityColor[unit.rarity]
    }

    handleSelectUnit(unit: Unit): void {
        this.$emit('select', unit)
    }

    getPrefix(unit: Unit): string{
        const locale = this.$i18n.locale as keyof typeof Locale;
        const result = unit.prefix[locale];
        return result ?? ''
    }

    getName(unit: Unit): string{
        const locale = this.$i18n.locale as keyof typeof Locale;
        const result = unit.name[locale];
        return result ?? ''
    }
}
</script>
<style lang="sass" scoped>
::v-deep .v-btn
    border-width: 1.5px !important
</style>
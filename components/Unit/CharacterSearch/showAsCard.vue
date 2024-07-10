<template>
    <v-row>
        <v-col v-for="(unit, index) in itemsForShow" :key="index" :cols="(12/itemsPerRow)" class="pa-1" > 
            <v-btn class="pa-0 character-button" outlined color="indigo" block :height="itemSize" @click="handleSelectUnit(unit)">
                <v-row class="align-center px-0 mx-0">
                    <v-img class="" :src="unit.thumbnail" :height="itemSize" :width="itemSize" contain/>
                    <v-spacer></v-spacer>
                    <v-col class="pr-6" :cols="8">
                        <v-row :class="fontClass">
                            <span>{{ getPrefix(unit) }}</span>
                        </v-row>
                        <v-row :class="fontClass">
                            <span>{{ getName(unit) }}</span>
                        </v-row>
                    </v-col>
                </v-row>
            </v-btn>
        </v-col>
    </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale } from "~/plugins/utils/enums";
import { Unit } from '@/interface/unit'

@Component
export default class ShowAsCard extends Vue {
    @Prop({ type: Array, required: true })
    itemsForShow!: Unit[];

    get itemsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 1, 2, 4, 4, 4)
    }

    get itemSize (): string {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '4.5em', '4.5em', '4.5em', '5.5em', '5.5em')
    }

    get fontClass (): string {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'subtitle-2', 'subtitle-2', 'subtitle-2', 'subtitle-2', 'subtitle-1')} justify-end py-2 white--text`
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
    text-transform: unset !important
</style>
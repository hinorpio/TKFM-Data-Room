<template>
    <a :href="handleGetUnitPath(unit)" style="text-decoration: none;">
        <v-btn class="pa-0 character-button" outlined :color="getRarityColor(unit)" block :height="itemSize" @click="handleSelect(unit)">
            <v-row class="align-center px-0 mx-0">
                <!-- <v-img class="" :src="unit.thumbnail" :height="itemSize" :width="itemSize" contain/> -->
                <v-img class="" :src="unit.thumbnail" :height="itemSize" :width="itemSize" contain>
                    <template v-slot:default>
                        <img :src="unit.thumbnail" :lazy-src="unit.thumbnail" alt="Image" :style="`object-fit: contain; width: ${itemSize}; height: ${itemSize}`">
                    </template>
                </v-img>
                <v-spacer></v-spacer>
                <v-col class="pr-6" :cols="8">
                    <v-row :class="prefixClass">
                        <span>{{ getPrefix(unit) }}</span>
                    </v-row>
                    <v-row :class="nameClass">
                        <span>{{ getName(unit) }}</span>
                    </v-row>
                </v-col>
            </v-row>
        </v-btn>
    </a>    
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Unit } from '@/interface/unit'
import { RarityColor } from "~/static/const";
import { Locale } from "@/plugins/utils/enums";

@Component
export default class UnitCard extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    unit!: Unit

    get isMobile(): boolean {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, true, true, false, false, false)
    }

    get itemSize (): string {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '4.5em', '4.5em', '4.5em', '5em', '5.5em')
    }

    get prefixClass (): string {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'caption', 'caption', 'caption', 'subtitle-2', 'subtitle-2')} justify-end pt-1 white--text`
    }

    get nameClass (): string {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'subtitle-1', 'subtitle-1', 'subtitle-1', 'subtitle-1', 'title')} justify-end pb-1 white--text`
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

    getRarityColor (unit: Unit): string {
        return RarityColor[unit.rarity]
    }

    handleSelect(unit: Unit): void {
        if(!this.isMobile)
            this.$emit('select', unit)
    }

    handleGetUnitPath(unit: Unit): string {
        const locale = this.$i18n.locale
        const langPrefix = (locale === 'tc')?`` :`/${locale}`
        return `${langPrefix}/unit?code=${unit.metaCode}`
    }
}

</script>
<style lang="sass" scoped>
.outline-box
    padding: 3px
    width: 100%
::v-deep .v-btn
    text-transform: unset !important
::v-deep .v-btn
    border-width: 1.5px !important
</style>
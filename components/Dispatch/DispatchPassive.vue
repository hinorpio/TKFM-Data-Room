<template>
    <div>
        <v-card v-for="(dispatchSkill, index) in data" :key="index" class="outline-box mb-2" outline color="grey darken-4" >
            <v-card-text>
                <div v-for="(unitList, level) in dispatchSkill" :key="level" >
                    <div v-if="unitList.length > 0" class="mb-2">
                        <span class="title font-weight-bold">{{ `${showType(index)} - ${level}` }}</span>
                        <v-row class="my-2">
                            <v-col v-for="(unit, index) in unitList" :key="index" :cols="(12/itemsPerRow)" class="pa-1" > 
                                <unit-card :unit="unit" />
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Unit } from '@/interface/unit'
import { DispatchSkillTypeString, RarityColor } from "~/static/const";
import { Locale, DispatchSkillType } from "@/plugins/utils/enums";
import UnitCard from "../Unit/UnitCard.vue";

@Component({
    components: {
        UnitCard
    }
})
export default class DispatchPassive extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    data!: { [type in DispatchSkillType]: { 'lv1': Unit[], 'lv2': Unit[] } };

    get itemsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 1, 2, 2, 2, 2)
    }

    get itemSize (): string {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '4.5em', '4.5em', '4.5em', '5.5em', '5.5em')
    }

    get prefixClass (): string {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'caption', 'caption', 'caption', 'subtitle-2', 'subtitle-2')} justify-end pt-1 white--text`
    }

    get nameClass (): string {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'subtitle-1', 'subtitle-1', 'subtitle-1', 'subtitle-1', 'title')} justify-end pb-1 white--text`
    }

    showType(type: DispatchSkillType){
        const locale = this.$i18n.locale as keyof typeof Locale
        return DispatchSkillTypeString[type][locale]
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
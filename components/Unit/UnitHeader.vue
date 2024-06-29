<template>
    <v-row class="align-center" >
        <v-avatar :size="iconSize" class="ml-3" tile >
            <v-img :src="$util.getRarityIcon(unit.rarity)" contain />
        </v-avatar>
        <v-avatar :size="iconSize" class="ml-3" tile>
            <v-img :src="$util.getElementIcon(unit.element)" contain />
        </v-avatar>
        <v-avatar :size="iconSize" class="ml-3" tile>
            <v-img :src="$util.getPositionIcon(unit.position)" contain />
        </v-avatar>
        <v-col v-if="strLengthExceedWidth()" class="ml-2">
            <span :class="titleClass">{{ `${getPrefix()}` }}</span>
            <br />
            <span :class="titleClass">{{`${getName()}`}}</span>
        </v-col>
        <v-col v-else class="ml-1">
            <span :class="titleClass">{{`${getPrefix()} ${getName()}`}}</span>
        </v-col>
    </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale } from '@/plugins/utils/enums'
import { Unit } from '@/interface/unit';

@Component
export default class UnitHeader extends Vue {
    @Prop({ required: true, default: {} })
    unit!: Unit;

    get iconSize(): string{
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return '2em'
            case 'sm': return '2em'
            case 'md': return '2em'
            case 'lg': return '2.5em'
            case 'xl': return '3em'
            default: return '3em'
        }
    }

    get titleClass(): string{
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return 'title font-weight-bold'
            case 'sm': return 'title font-weight-bold'
            case 'md': return 'title font-weight-bold'
            case 'lg': return 'headline font-weight-bold'
            case 'xl': return 'display-1 font-weight-bold'
            default: return 'display-1 font-weight-bold'
        }
    }

    strLengthExceedWidth(): boolean{
        const locale = this.$i18n.locale as keyof typeof Locale;
        const prefixLength = this.unit.prefix?[locale].length : 0;
        const nameLength = this.unit.name?[locale].length : 0 ;
        var strLength = prefixLength + nameLength
        return (this.$vuetify.breakpoint.name == 'xs' && this.$vuetify.breakpoint.width > 352 && strLength > 7) || (this.$vuetify.breakpoint.width < 352 && strLength > 7)
    }

    getPrefix(): string{
        const locale = this.$i18n.locale as keyof typeof Locale;
        const result = this.unit.prefix[locale];
        return result ?? ''
    }

    getName(): string{
        const locale = this.$i18n.locale as keyof typeof Locale;
        const result = this.unit.name[locale];
        return result ?? ''
    }
}
</script>
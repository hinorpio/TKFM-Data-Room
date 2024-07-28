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
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '2em', '2em', '2em', '2.5em', '3em')
    }

    get titleClass(): string{
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'title', 'title', 'title', 'headline', 'display-1')} font-weight-bold`
    }

    strLengthExceedWidth(): boolean{
        const locale = this.$i18n.locale as keyof typeof Locale;
        const prefixLength = this.getPrefix().length;
        const nameLength = this.getName().length;
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
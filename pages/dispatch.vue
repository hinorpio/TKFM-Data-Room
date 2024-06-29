<template>
    <v-layout v-if="isMounted">
        <v-container>
            <v-row class="mt-4">
                <!-- <v-img 
                    v-for="(form, index) in handleGetOtherVersion()" 
                    :key="index" 
                    @click="handleSelect(form)" 
                    :src="form.selection" 
                    :lazy-src="form.selection" 
                    class="ma-2" 
                    :max-width="imgWidth"
                /> -->
            </v-row>
        </v-container>
    </v-layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Unit } from '@/interface/unit'

@Component
export default class DispatchPage extends Vue {

    get imgWidth(): string {
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return '20%';
            case 'sm': return '10%';
            case 'md': return '15%';
            case 'lg': return '12.5%';
            case 'xl': return '10%';
            default: return '10%';
        }
    }

    get titleClass(): string  {
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return 'title font-weight-bold';
            case 'sm': return 'title font-weight-bold';
            case 'md': return 'title font-weight-bold';
            case 'lg': return 'title font-weight-bold';
            case 'xl': return 'headline font-weight-bold';
            default: return 'headline font-weight-bold';
        }
    }

    // handleSelect(unit: Unit): void {
    //     this.$router.push({
    //         path: `/unit/${unit.metaCode}`,
    //     });
    // }

    // handleGetOtherVersion(): Unit[]{
    //     return this.$util.getUnitsByIDs(this.unit.otherVersion);
    // }
}

</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
::v-deep .theme--dark.v-btn-toggle:not(.v-btn-toggle--group)
  background: #424242
::v-deep .v-data-table__wrapper
  background: #424242
</style>
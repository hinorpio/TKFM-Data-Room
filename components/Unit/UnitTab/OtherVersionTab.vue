<template>
    <v-row class="mt-4">
        <v-img 
            v-for="(form, index) in handleGetOtherVersion()" 
            :key="index" 
            @click="handleSelect(form)" 
            :src="form.selection" 
            :lazy-src="form.selection" 
            class="ma-2" 
            :max-width="imgWidth"
        />
    </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Unit } from '@/interface/unit'

@Component
export default class OtherVersionTab extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    unit!: Unit;

    get imgWidth(): string {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '20%', '10%', '15%', '12.5%', '10%')
    }

    handleSelect(unit: Unit): void {
        this.$router.push({
            path: `/unit/${unit.metaCode}`,
        });
    }

    handleGetOtherVersion(): Unit[]{
        return this.$util.getUnitsByIDs(this.unit.otherVersion);
    }
}

</script>
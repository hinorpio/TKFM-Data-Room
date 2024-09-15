<template>
    <v-row class="mt-4 px-1">
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
import { writeFileSync } from 'fs';

@Component
export default class OtherVersionTab extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    unit!: Unit;

    mounted(){
        // this.generateList()
    }

    generateList(): void {
        var data = this.$util.getAllUnitData()
        var exportdata = data.map(f => {
            return {
                ID: f.ID,
                rarity: f.rarity,
                element: f.element,
                position: f.position
            }
        })
        const blob = new Blob([JSON.stringify(exportdata, null, 2)], {
            type: 'application/json',
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `selection_pic_handle.json`;
        a.click();
        URL.revokeObjectURL(url);
    }
    

    get imgWidth(): string {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '20%', '10%', '15%', '12.5%', '9.5%')
    }

    handleSelect(unit: Unit): void {
        const locale = this.$i18n.locale
        const langPrefix = (locale === 'tc')?`` :`/${locale}`
        this.$router.push({
            path: `${langPrefix}/unit?code=${unit.metaCode}`,
        });
    }

    handleGetOtherVersion(): Unit[]{
        return this.$util.getUnitsByIDs(this.unit.otherVersion);
    }
}

</script>
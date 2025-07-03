<template>
    <v-row class="mt-4 px-1 py-1">
        <v-img 
            v-for="(form, index) in handleGetOtherVersion()" 
            :key="index" 
            @click="handleSelect(form)" 
            class="ma-2" 
            :max-width="imgWidth"
        >
            <template v-slot:default>
                <a :href="handleGetUnitPath(form)" >
                    <img :src="form.selection" :lazy-src="form.selection" alt="Image" style="object-fit: contain; width: 100%;">
                </a>
            </template>
        </v-img>
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

    get isMobile(): boolean {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, true, true, false, false, false)
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

    handleGetUnitPath(unit: Unit): string {
        const locale = this.$i18n.locale
        const langPrefix = (locale === 'tc')?`` :`/${locale}`
        return `${langPrefix}/unit?code=${unit.metaCode}`
    }

    handleSelect(unit: Unit): void {
        if(!this.isMobile){
            this.$router.push({
                path: this.handleGetUnitPath(unit),
            });
        }
    }

    handleGetOtherVersion(): Unit[]{
        return this.$util.getUnitsByIDs(this.unit.otherVersion);
    }
}

</script>
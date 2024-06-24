<template>
    <div v-if="isMounted">
        <v-col>
            <v-select v-if="versionList.length > 1" :items="versionList" item-text="label" item-value="value" v-model="version" filled dense />
            <liberation-card class="mb-4" section="LIBERATION1" :showVersion="showVersion" :essenceIcon="unit.essence"/>
            <liberation-card class="mb-4" section="LIBERATION2" :showVersion="showVersion" :essenceIcon="unit.essence" />
            <liberation-card class="mb-4" section="LIBERATION3" :showVersion="showVersion" :essenceIcon="unit.essence" />
        </v-col>
        <v-divider class="my-2"></v-divider>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Unit } from '@/interface/unit'
import { LiberateSkillSet } from '@/interface/unit/liberateSkillSet'
import LiberationCard from "./SkillSetCard/LiberationCard.vue";

@Component({
    components: {
        LiberationCard,
    },
})
export default class LiberationTab extends Vue {
    @Prop({ type: Object, required: true, default: () => ({}) })
    unit!: Unit;

    isMounted: boolean = false;
    version: number = 0;
    versionList: { label: string; value: number }[] = [];

    get showVersion(): LiberateSkillSet | null {
        return this.unit.liberateSkillSet?.[this.version] ?? null;
    }

    mounted(): void {
        if(this.unit.liberateSkillSet){
            this.versionList = this.unit.liberateSkillSet.map((set, index) => ({
                label: `${this.$t('Version')} ${set.version}${this.getLastDate(set.lastDate)}`,
                value: index,
            }));
        }
        this.isMounted = true;
    }

    getLastDate(date: string | null): string {
        return date === null ? ` - ${this.$t("Current Version")}` : ` - ${this.$t("As of")} ${date}`;
    }
}
</script>


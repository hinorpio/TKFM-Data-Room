<template>
    <div v-if="isMounted">
        <v-col>
            <v-select v-if="versionList.length > 1" :items="versionList" item-text="label" item-value="value" v-model="version" filled dense />
            <liberation-card class="mb-4" :section="getLiberationStage(1)" :showVersion="showVersion" :essenceIcon="unit.essence"/>
            <liberation-card class="mb-4" :section="getLiberationStage(2)" :showVersion="showVersion" :essenceIcon="unit.essence" />
            <liberation-card class="mb-4" :section="getLiberationStage(3)" :showVersion="showVersion" :essenceIcon="unit.essence" />
        </v-col>
        <v-divider class="my-2"></v-divider>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { LiberationStage } from '@/plugins/utils/enums'
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

    getLiberationStage(stage: number): LiberationStage{
        switch (stage) {
            case 1:
                return LiberationStage.LIBERATION_1;
            case 2:
                return LiberationStage.LIBERATION_2;
            case 3:
                return LiberationStage.LIBERATION_3;
            default:
                return LiberationStage.LIBERATION_0;
        }
    }

}
</script>


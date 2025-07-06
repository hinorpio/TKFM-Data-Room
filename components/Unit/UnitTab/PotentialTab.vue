<template>
    <div v-if="isMounted">
        {{ currentPotential }}
        <v-col>
            <potential-selection class="pt-2" :potentialData="potentialData" :currentPotential.sync="currentPotential" :targetPotential.sync="targetPotential" />
            <v-divider class="my-4"></v-divider>
            <material-result v-if="calculatedResult.materialSummary.length > 0" :summary="calculatedResult.materialSummary" :showCombined.sync="showCombined"/>
            <buff-result v-if="calculatedResult.materialSummary.length > 0" :summary="calculatedResult.statSummary" />
        </v-col>
        {{ targetPotential }}
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import PotentialSelection from "./Potential/PotentialSelection.vue";
import MaterialResult from "./Potential/MaterialResult.vue";
import BuffResult from "./Potential/BuffResult.vue";
import { Unit } from '@/interface/unit';
import { PotentialSelectGroup } from '~/interface/stat/potential'
import { PotentialBuffIcon } from "~/static/const";

@Component({
    components: {
        PotentialSelection,
        MaterialResult,
        BuffResult
    }
})
export default class PotentialTab extends Vue {
    @Prop({ required: true, default: {} })
    unit!: Unit;

    isMounted: boolean = false;
    showCombined: boolean = false;
    potentialData: any = {};
    currentPotential: PotentialSelectGroup = { level: 1, slot: [false, false, false, false, false, false] };
    targetPotential: PotentialSelectGroup = { level: 1, slot: [false, false, false, false, false, false] };

    mounted(): void {
        this.potentialData = this.$util.getPotential(this.unit.potential);
        this.isMounted = true;
    }

    get calculatedResult() {
        const requiredSlotList = [];
        const startIndex = this.currentPotential.level - 1;
        const endIndex = this.targetPotential.level - 1;
        const detail = this.potentialData.detail;

        for (let level = startIndex; level <= endIndex; level++) {
            let condition: 'SAME_LEVEL' | 'FIRST_LEVEL' | 'LAST_LEVEL' | 'BETWEEN_LEVEL';
            if (startIndex === endIndex) {
                condition = 'SAME_LEVEL';
            } else if (level === startIndex) {
                condition = 'FIRST_LEVEL';
            } else if (level === endIndex) {
                condition = 'LAST_LEVEL';
            } else {
                condition = 'BETWEEN_LEVEL';
            }

            for (let index = 0; index < detail[level].length; index++) {
                if (this.$util.getCalculateCondition(condition, index, this.currentPotential.slot, this.targetPotential.slot)) {
                    requiredSlotList.push(detail[level][index]);
                }
            }
        }

        return this.$util.getCalculatedPotSummary(requiredSlotList, this.showCombined);
    }
}
</script>
<style lang="sass" scoped>
.outline-box
    padding: 1px
::v-deep .v-card__text
    background: #424242
::v-deep .v-text-field__details
    display: none
::v-deep .v-text-field.v-text-field--enclosed .v-text-field__details
    margin-bottom: 0px
</style>
<template>
    <div v-if="isMounted">
        {{ currentStat }}
        <v-col>
            <stat-selection class="pt-2 px-0" :unit="unit" :potentialData="potentialData" :currentStat.sync="currentStat" :targetStat.sync="targetStat" />
            <material-result v-if="calculatedResult.materialSummary.length > 0" :summary="calculatedResult.materialSummary" :showCombined.sync="showCombined"/>
            <buff-result v-if="calculatedResult.materialSummary.length > 0" :summary="calculatedResult.statSummary" />
        </v-col>
        {{ targetStat }}

    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import StatSelection from "./StatCal/StatSelection.vue";
import MaterialResult from "./Potential/MaterialResult.vue";
import BuffResult from "./Potential/BuffResult.vue";
import { Unit, StatGroup } from '@/interface/unit';
import { PotentialSelectGroup } from '@/interface/potential'

@Component({
    components: {
        StatSelection,
        MaterialResult,
        BuffResult,
    }
})
export default class StatCalTab extends Vue {
    @Prop({ required: true, default: {} })
    unit!: Unit;

    isMounted: boolean = false;
    showCombined: boolean = false;
    potentialData: any = {};
    currentPotential: PotentialSelectGroup = { level: 1, slot: [false, false, false, false, false, false] };
    targetPotential: PotentialSelectGroup = { level: 1, slot: [false, false, false, false, false, false] };

    currentStat: StatGroup = this.getInitStatGroup(this.unit);
    targetStat: StatGroup = this.getInitStatGroup(this.unit);

    currentLevel: number = 1;

    mounted(): void {
        this.potentialData = this.$util.getPotential(this.unit.potential);
        this.isMounted = true;
    }


    get calculatedResult() {
        return this.$util.getCalculatedPotResult(this.potentialData, this.currentStat.pot, this.targetStat.pot, this.showCombined)
    }

    getInitStatGroup(unit: Unit): StatGroup {
        const hp: number = 3345.5997594279465;
        const atk: number = 1052.7977991802477;
        return {
            initHP: hp,
            initATK: atk,
            initStar: (unit.rarity == 'SSR')? 3 :(unit.rarity == 'SR')? 2 :(unit.rarity == 'R')? 1 :0,
            rarity: unit.rarity,
            level: 1,
            star: (unit.rarity == 'SSR')? 3 :(unit.rarity == 'SR')? 2 :(unit.rarity == 'R')? 1 :0,
            room: (unit.discipline != undefined && unit.discipline?.length > 0) ? 0 : null,
            pot: { level: 1, slot: [false, false, false, false, false, false] },
            lib: (unit.liberateSkillSet != undefined && unit.liberateSkillSet?.length > 0) ? 0 : null
        }
    }
}
</script>
<style lang="sass" scoped>
.outline-box
    padding: 1px
::v-deep .v-text-field__details
    display: none
::v-deep .v-text-field.v-text-field--enclosed .v-text-field__details
    margin-bottom: 0px
</style>
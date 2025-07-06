<template>
    <div v-if="isMounted">
        <v-col>
            <stat-selection class="pt-2 px-0" :unit="unit" :potentialData="potentialData" :currentStat.sync="currentStat" :targetStat.sync="targetStat" />
            <calculated-result v-if="isCalculated" 
                :levelSummary="calculatedLevelResult"
                :libSummary="calculatedLibResult"
                :starSummary="calculatedStarResult"
                :roomSummary="calculatedRoomResult"
                :potSummary="calculatedPotResult"
                :showTotal.sync="showTotal"
                :showCombined.sync="showCombined"
            />
        </v-col>

    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import StatSelection from "./StatCal/StatSelection.vue";
import MaterialResult from "./Potential/MaterialResult.vue";
import BuffResult from "./Potential/BuffResult.vue";
import CalculatedResult from "./StatCal/CalculatedResult.vue";
import { Unit, StatGroup } from '@/interface/unit';
import { PotentialSelectGroup } from '~/interface/stat/potential'

@Component({
    components: {
        CalculatedResult,
        StatSelection,
        MaterialResult,
        BuffResult,
    }
})
export default class StatCalTab extends Vue {
    @Prop({ required: true, default: {} })
    unit!: Unit;

    isMounted: boolean = false;
    showTotal: boolean = false;
    showCombined: boolean = false;

    potentialData: any = {};
    currentPotential: PotentialSelectGroup = { level: 1, slot: [false, false, false, false, false, false] };
    targetPotential: PotentialSelectGroup = { level: 1, slot: [false, false, false, false, false, false] };

    currentStat: StatGroup = this.getInitStatGroup(this.unit);
    targetStat: StatGroup = this.getInitStatGroup(this.unit);

    mounted(): void {
        this.potentialData = this.$util.getPotential(this.unit.potential);
        this.isMounted = true;
    }

    get isCalculated() {
        return this.calculatedLevelResult.summary.length > 0 ||
            this.calculatedLibResult.summary.length > 0 ||
            this.calculatedStarResult.summary.length > 0 ||
            this.calculatedRoomResult.summary.length > 0 ||
            this.calculatedPotResult.summary.length > 0
    }

    get calculatedLevelResult() {
        return this.$util.getCalculatedLvResult(this.currentStat.level, this.targetStat.level);
    }

    get calculatedLibResult() {
        return this.$util.getCalculatedLibResult(this.unit, this.currentStat.lib??null, this.targetStat.lib??null);
    }

    get calculatedStarResult() {
        return this.$util.getCalculatedStarResult(this.unit, this.currentStat.star, this.targetStat.star);
    }

    get calculatedRoomResult() {
        return this.$util.getCalculatedRoomResult(this.unit.rarity, this.unit.element, this.currentStat.room, this.targetStat.room)
    }

    get calculatedPotResult() {
        // console.log(num / Math.pow(1.1, 59))
        return this.$util.getCalculatedPotResult(this.potentialData, this.currentStat.pot, this.targetStat.pot, this.showCombined);
    }

    getInitStatGroup(unit: Unit): StatGroup {
        const hp: number = 2316;
        const atk: number = 700.8;
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
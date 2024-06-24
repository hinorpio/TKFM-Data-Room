<template>
    <div v-if="isMounted">
        <v-col>
            <potential-selection class="pt-2" :potentialData="potentialData" :currentPotential.sync="currentPotential" :targetPotential.sync="targetPotential" />
            <v-divider class="my-4"></v-divider>
            <material-result v-if="calculatedResult.materialSummary.length > 0" :summary="calculatedResult.materialSummary" :showCombined.sync="showCombined"/>
            <buff-result v-if="calculatedResult.materialSummary.length > 0" :summary="calculatedResult.statSummary" />
        </v-col>
    </div>
</template>
<script lang="js">
import Vue from "vue";
import PotentialSelection from "./Potential/PotentialSelection.vue";
import MaterialResult from "./Potential/MaterialResult.vue";
import BuffResult from "./Potential/BuffResult.vue";
export default Vue.extend({
    props: {
        unit: {
            type: Object,
            required: true,
            default: {},
        },
    },
    components: {
        PotentialSelection,
        MaterialResult,
        BuffResult
    },
    mounted(){
        this.potentialData = this.$util.getPotential(this.unit.potential)
        this.isMounted = true
    },
    computed: {
        calculatedResult(){
            var requiredSlotList = []
            var startIndex = this.currentPotential.level-1
            var endIndex = this.targetPotential.level-1
            var detail = this.potentialData.detail
            for (let level = startIndex; level <= endIndex; level++) {  // loop each potential level
                var condition = false
                var currentSlot = this.currentPotential.slot
                var targetSlot = this.targetPotential.slot
                if(startIndex == endIndex){     // if current and target are at same level
                    condition = 'SAME_LEVEL' 
                }else if(level == startIndex){  // if looping the first level
                    condition = 'FIRST_LEVEL'
                }else if(level == endIndex){    // if looping the last level
                    condition = 'LAST_LEVEL'
                }else{                          // if looping the level in between
                    condition = 'BETWEEN_LEVEL'
                }
                for (let index = 0; index < detail[level].length; index++) {       // loop all 6 slots
                    if(this.$util.getCalculateCondition(condition, index, currentSlot, targetSlot)){ 
                        requiredSlotList.push(detail[level][index]);
                    } 
                }
            }
            return this.$util.getCalculatedSummary(requiredSlotList, this.showCombined)
        },
    },
    data(){
        return {
            isMounted: false,
            showCombined: false,
            potentialData: {},
            currentPotential: { level: 1, slot: [false, false, false, false, false, false] },
            targetPotential: { level: 1, slot: [false, false, false, false, false, false] },
        }
    }
})
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
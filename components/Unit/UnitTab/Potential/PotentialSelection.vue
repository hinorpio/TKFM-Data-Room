<template>
    <v-row>
        <v-col :cols="12" :xl="6" :lg="6" :md="12" :sm="6" :xs="12">
            <v-select :items="currentLevelOptions" v-model="currentPotential.level" :label="$t('Current Potential')" dense outlined></v-select>
            <v-row class="ml-1">
                <v-checkbox v-for="(slot, index) in currentPotential.slot" :key="index" v-model="currentPotential.slot[index]" :color="checkBoxColor(index, 'CURRENT')" dense  hide-details ></v-checkbox>
            </v-row>
        </v-col>
        <v-spacer></v-spacer>
        <v-col :cols="12" :xl="6" :lg="6" :md="12" :sm="6" :xs="12">
            <v-select :items="targetLevelOptions" v-model="targetPotential.level" :label="$t('Target Potential')" dense outlined></v-select>
            <v-row class="ml-1">
                <v-checkbox v-for="(slot, index) in targetPotential.slot" :key="index" v-model="targetPotential.slot[index]" dense :color="checkBoxColor(index, 'TARGET')" :disabled="handleCheckBoxDisabled(index)" hide-details ></v-checkbox>
            </v-row>
        </v-col>
    </v-row>
</template>
<script lang="js">
import Vue from "vue";
export default Vue.extend({
    props: {
        potentialData: {
            type: Object,
            required: true,
            default: [],
        },
        currentPotential: {
            type: Object,
            required: true,
            default: {},
        },
        targetPotential: {
            type: Object,
            required: true,
            default: {},
        },
    },
    watch: {
        'currentPotential.level'(value){
            this.targetPotential.level = (this.targetPotential.level < value) ?value :this.targetPotential.level
        },
        'currentPotential.slot'(value){
            for (let i = 0; i < value.length; i++) {
                this.targetPotential.slot[i] = (value[i] && this.isSameLevel)?value[i] :this.targetPotential.slot[i]
            }
        },
        'targetPotential.level'(value){
            var currentSlot = this.currentPotential.slot
            var targetSlot = this.targetPotential.slot
            for (let i = 0; i < targetSlot.length; i++) {
                this.targetPotential.slot[i] = (currentSlot[i] && this.isSameLevel)?currentSlot[i] :this.targetPotential.slot[i]
            }
        },
    },
    computed: {
        currentLevelOptions(){
            return this.potentialData.detail.map((level, index) => index+1)
        },
        targetLevelOptions(){
            return this.currentLevelOptions.filter(level => level >= this.currentPotential.level )
        },
        isSameLevel(){
            return this.currentPotential.level == this.targetPotential.level
        },
    },
    methods: {
        handleCheckBoxDisabled(index){
            return this.currentPotential.slot[index] && this.isSameLevel
        },
        checkBoxColor(slot, type){
            var level = (type == 'TARGET')?this.targetPotential.level-1 :this.currentPotential.level-1
            var type = this.potentialData.detail[level][slot].type
            switch (type) {
                case 'ATK':
                    return 'red accent-2'
                case 'HP':
                    return 'green accent-2'
                case 'PASSIVE':
                    return 'purple accent-2'
                default:
                    break;
            }
        },
    },
})
</script>
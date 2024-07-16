<template>
    <v-layout v-if="isMounted">
        <v-container>
            <v-row>
                <v-col :cols="12" :xl="6" :lg="6" :md="6" :sm="12" :xs="12">
                    <dispatch-summary :data="dispatchData" />
                </v-col>
                <v-col :cols="12" :xl="6" :lg="6" :md="6" :sm="12" :xs="12">
                    <dispatch-passive :data="skillData" />
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Dispatch } from '@/interface/dispatch'
import { Unit } from '@/interface/unit'
import DispatchSummary from "@/components/Dispatch/DispatchSummary.vue";
import DispatchPassive from "@/components/Dispatch/DispatchPassive.vue";
import { DispatchSkillType, Rarity } from "~/plugins/utils/enums";

@Component({
    components: {
        DispatchSummary,
        DispatchPassive
    }
})
export default class DispatchPage extends Vue {

    isMounted: boolean = false 
    dispatchData: Dispatch[] = []
    skillData: { [type in DispatchSkillType]: { 'Lv1': Unit[], 'Lv2': Unit[] } } = 
    {
        [DispatchSkillType.EMPTY_HAND]: { 'Lv1': [], 'Lv2': [] },
        [DispatchSkillType.ENHANCE_MATERIAL]: { 'Lv1': [], 'Lv2': [] },
        [DispatchSkillType.NORMAL_SEX_TOY]: { 'Lv1': [], 'Lv2': [] },
        [DispatchSkillType.RARE_SEX_TOY]: { 'Lv1': [], 'Lv2': [] },
        [DispatchSkillType.RARE_NORMAL_SEX_TOY]: { 'Lv1': [], 'Lv2': [] },
        [DispatchSkillType.EXPERIENCE_POTION]: { 'Lv1': [], 'Lv2': [] },
        [DispatchSkillType.PURCHASE_PERMITS]: { 'Lv1': [], 'Lv2': [] },

    }
    unitList: Unit[] = []
    
    mounted(): void{
        this.dispatchData = this.$util.getAllDispatch()
        this.unitList = this.$util.getAllUnitData()
            .filter(unit => unit.rarity === Rarity.R || unit.rarity === Rarity.N)
        this.unitList.forEach(unit => {
            const dispatchSkill = unit.skillSet[0].dispatchSkill
            if(dispatchSkill && dispatchSkill.level == 1)
                this.skillData[dispatchSkill.type]['Lv1'].push(unit)
            else if(dispatchSkill && dispatchSkill.level == 2)
                this.skillData[dispatchSkill.type]['Lv2'].push(unit)
        })
        this.isMounted = true
    }
}

</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
</style>
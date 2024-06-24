<template>
    <div>
        <v-tabs v-model="activeTab" background-color="transparent" show-arrows>
            <v-tab>{{$t('General Information')}}</v-tab>
            <v-tab>{{$t('Skill Set')}}</v-tab>
            <v-tab v-if="isLiberate">{{$t('Liberation')}}</v-tab>
            <v-tab>{{$t('Potential Calculator')}}</v-tab>
            <v-tab>{{$t('Discipline')}}</v-tab>
            <v-tab>{{$t('Puzzle')}}</v-tab>
            <v-tab>{{$t('Other Form')}}</v-tab>
            <!-- <v-tab>{{$t('Analysis')}}</v-tab> -->
        </v-tabs>
        <v-tabs-items v-model="activeTab" :show-arrows="false">
            <v-tab-item>
                <general-tab :unit="unit" />
            </v-tab-item>
            <v-tab-item>
                <skill-set-tab :unit="unit" />
            </v-tab-item>
            <v-tab-item v-if="isLiberate">
                <liberation-tab :unit="unit" />
            </v-tab-item>
            <v-tab-item>
                <potential-tab :unit="unit" />
            </v-tab-item>
            <v-tab-item>
                <discipline-tab :unit="unit" />
            </v-tab-item>
            <v-tab-item>
                <puzzle-tab :unit="unit" />
            </v-tab-item>
            <v-tab-item>
                <other-version-tab :unit="unit" />
            </v-tab-item>
            <!-- <v-tab-item>
                <analysis-tab :unit="unit" />
            </v-tab-item> -->
        </v-tabs-items>
    </div>
</template>
<script lang="js">
import Vue from "vue";
import GeneralTab from "./GeneralTab.vue";
import SkillSetTab from "./SkillSetTab.vue";
import LiberationTab from "./LiberationTab.vue";
import DisciplineTab from "./DisciplineTab.vue";
import PotentialTab from "./PotentialTab.vue";
import PuzzleTab from "./PuzzleTab.vue";
import OtherVersionTab from "./OtherVersionTab.vue";
import AnalysisTab from "./AnalysisTab.vue";

export default Vue.extend({
    components: {
        GeneralTab,
        SkillSetTab,
        LiberationTab,
        DisciplineTab,
        PotentialTab,
        PuzzleTab,
        OtherVersionTab,
        AnalysisTab,
    },
    props: {
        unit: {
            type: Object,
            required: true,
            default: {},
        },
    },
    computed: {
        isLiberate(){
            return this.unit.liberateSkillSet.length > 0
        },
    },
    data() {
        return {
            activeTab: 0,
        }
    }
})
</script>
<style lang="sass" scoped>
::v-deep  .v-tabs:not(.v-tabs--vertical):not(.v-tabs--right) > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev
    display: none
</style>

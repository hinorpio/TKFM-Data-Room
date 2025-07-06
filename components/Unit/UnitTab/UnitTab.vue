<template>
    <div>
        <v-tabs v-model="activeTab" background-color="transparent" show-arrows>
            <v-tab>{{$t('General Information')}}</v-tab>
            <v-tab>{{$t('Skill Set')}}</v-tab>
            <v-tab v-if="isLiberate">{{$t('Liberation')}}</v-tab>
            <!-- <v-tab>{{$t('Potential Calculator')}}</v-tab> -->
            <v-tab>{{$t('Stat Calculator')}}</v-tab>
            <v-tab v-if="isDiscipline">{{$t('Discipline')}}</v-tab>
            <v-tab v-if="isPuzzle">{{$t('Puzzle')}}</v-tab>
            <v-tab v-if="isOtherVersion">{{$t('Other Form')}}</v-tab>
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
            <!-- <v-tab-item>
                <potential-tab :unit="unit" />
            </v-tab-item> -->
            <v-tab-item>
                <stat-cal-tab :unit="unit" />
            </v-tab-item>
            <v-tab-item v-if="isDiscipline">
                <discipline-tab :unit="unit" />
            </v-tab-item>
            <v-tab-item v-if="isPuzzle">
                <puzzle-tab :unit="unit" />
            </v-tab-item>
            <v-tab-item v-if="isOtherVersion">
                <other-version-tab :unit="unit" />
            </v-tab-item>
            <!-- <v-tab-item>
                <analysis-tab :unit="unit" />
            </v-tab-item> -->
        </v-tabs-items>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import GeneralTab from './GeneralTab.vue';
import SkillSetTab from './SkillSetTab.vue';
import LiberationTab from './LiberationTab.vue';
import DisciplineTab from './DisciplineTab.vue';
import PotentialTab from './PotentialTab.vue';
import StatCalTab from './StatCalTab.vue';
import PuzzleTab from './PuzzleTab.vue';
import OtherVersionTab from './OtherVersionTab.vue';
import AnalysisTab from './AnalysisTab.vue';
import { Unit } from '@/interface/unit'

@Component({
    components: {
        GeneralTab,
        SkillSetTab,
        LiberationTab,
        DisciplineTab,
        PotentialTab,
        StatCalTab,
        PuzzleTab,
        OtherVersionTab,
        AnalysisTab,
    },
})
export default class UnitTab extends Vue {
    @Prop({ type: Object, required: true, default: () => ({}) })
    unit!: Unit;

    activeTab = 0;

    get isLiberate(): Boolean {
        const liberateSkillSet = this.unit.liberateSkillSet
        return (liberateSkillSet) ?liberateSkillSet.length > 0 :false;
    }

    get isDiscipline(): Boolean {
        const discipline = this.unit.discipline
        return (discipline) ?discipline.length > 0 :false;
    }

    get isPuzzle(): Boolean {
        const puzzle = this.unit.puzzle
        return (puzzle) ?puzzle.length > 0 :false;
    }

    get isOtherVersion(): Boolean {
        const otherVersion = this.unit.otherVersion
        return (otherVersion) ?otherVersion.length > 0 :false;
    }
}
</script>
<style lang="sass" scoped>
::v-deep  .v-tabs:not(.v-tabs--vertical):not(.v-tabs--right) > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev
    display: none
</style>

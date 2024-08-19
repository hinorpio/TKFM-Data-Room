<template>
    <v-card class="outline-box" outline color="white">
        <v-card-text>
            <v-row class="ma-2">
                <v-icon class="mr-2">
                    mdi-layers-search
                </v-icon>
                <span class="title font-weight-bold">{{ $t('Filter Result') }}</span>
                <v-spacer></v-spacer>
                <v-btn icon @click="isShowByUnit = !isShowByUnit">
                    <v-icon v-if="isShowByUnit">mdi-tag-multiple-outline</v-icon>
                    <v-icon v-else>mdi-account-details</v-icon>
                </v-btn>
            </v-row>
            <v-divider></v-divider>
            <filter-by-unit v-if="isShowByUnit" :result="filterResultByUnit" />
            <filter-by-combination v-else :result="filterResultByCombination" />
        </v-card-text>
    </v-card>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Locale, Rarity, TagID } from '@/plugins/utils/enums'
import { Unit } from '@/interface/unit';
import { Tag } from '@/interface/tag';
import FilterByUnit from './FilterByUnit.vue';
import FilterByCombination from './FilterByCombination.vue';

@Component({
    components: {
        FilterByUnit,
        FilterByCombination
    }
})
export default class RecruitmentResult extends Vue {
    @Prop({ type: Array, required: true })
    value!: number[];

    @Prop({ type: Array, required: true, default: {} })
    tagList!: Tag[];

    @Prop({ type: Array, required: true, default: {} })
    unitList!: Unit[];

    @Prop({ type: Object, required: true, default: { hours: 9, minutes: '00' } })
    readonly recruitmentTime!: { hours: number; minutes: string };

    isShowByUnit: boolean = true

    get selectedTag(): TagID[] {
        return this.value;
    }

    set selectedTag(tags: TagID[]) {
        this.$emit("input", tags);
    }

    get filterResultByUnit(): object {
        const locale = this.$i18n.locale as keyof typeof Locale
        return this.unitList
            .filter(unit => unit.tagList.some(tag => this.selectedTag.includes(tag))) // Filter unit that contain tag in selectedTag
            .filter(r => // Filter the SSR if LEADER tag didnt selected or recruitment hours are less than 4 hours
                (r.rarity !== Rarity.SSR && r.rarity !== Rarity.SR) || 
                (r.rarity === Rarity.SSR && this.recruitmentTime.hours >= 4 && this.selectedTag.includes(TagID.CLASS_LEADER)) ||
                (r.rarity === Rarity.SR && this.recruitmentTime.hours >= 4)
            ) 
            .map(unit => {  // Map the array for display so that the row will show the tagList of unit that the selectedTag contained
                const showTag = this.handleShowTag(unit.tagList);
                const isUnique = this.$util.checkIsTagListUnique(showTag.map(tag => tag.ID), this.unitList, unit.rarity === Rarity.SSR)
                const isGuaranteeSR = (unit.rarity !== Rarity.SSR)?this.$util.checkIsTagListGuaranteeSR(showTag.map(tag => tag.ID), this.unitList) :false
                return {
                    icon: unit.thumbnail,
                    prefix: unit.prefix[locale],
                    name: unit.name[locale],
                    rarity: unit.rarity,
                    tag: showTag.map((tag: Tag) => tag.name[locale]),
                    isUnique: isUnique,
                    isGuaranteeSR: isGuaranteeSR,
                    combination: (isUnique || isGuaranteeSR)?this.$util.getTagCombination(showTag.map(tag => tag.ID), unit, this.unitList) :null
                };
            })
            .sort((a, b) => b.rarity.localeCompare(a.rarity))
            .sort((a, b) => b.tag.length - a.tag.length)
            .sort((a, b) => a.isGuaranteeSR === b.isGuaranteeSR ? 0 :a.isGuaranteeSR? -1 : 1)
            .sort((a, b) => a.isUnique === b.isUnique ? 0 :a.isUnique? -1 : 1)
    }
    
    get filterResultByCombination(): object {
        const locale = this.$i18n.locale as keyof typeof Locale
        const combinationSet: TagID[][] = this.$util.extractCombination(this.selectedTag)
        const isFullfillSSR = this.recruitmentTime.hours >= 4 && this.selectedTag.includes(TagID.CLASS_LEADER)
        return combinationSet.map(combination => {
            const unitList = this.$util.getFilterUnitByTag(combination, this.unitList, isFullfillSSR)
                            .filter(r => (r.rarity !== Rarity.SSR && r.rarity !== Rarity.SR) || 
                                (r.rarity === Rarity.SSR && this.recruitmentTime.hours >= 4 && combination.includes(TagID.CLASS_LEADER)) ||
                                (r.rarity === Rarity.SR && this.recruitmentTime.hours >= 4))
                            .map(unit => {
                                return {
                                    icon: unit.thumbnail,
                                    rarity: unit.rarity,
                                    name: unit.name[locale],
                                }
                            })
                            .sort((a, b) => b.rarity.localeCompare(a.rarity))
            return {
                isLeader: combination.includes(TagID.CLASS_LEADER),
                hasSR: unitList.some(unit => unit.rarity === Rarity.SR),
                tag: this.handleShowTag(combination).map((tag: Tag) => tag.name[locale]),
                units: unitList
            }
        })
        .filter(combination => combination.units.length > 0)
        .sort((a, b) => a.hasSR === b.hasSR ? 0 :a.hasSR? -1 : 1)
        .sort((a, b) => a.isLeader === b.isLeader ? 0 :a.isLeader? -1 : 1)

    }

    handleShowTag(list: number[]): Tag[] {
        return this.tagList.filter(tag => this.selectedTag.includes(tag.ID) && list.includes(tag.ID));
    }

}
</script>
<style lang="sass" scoped>
.outline-box
    padding: 1px
    width: 100%
</style>
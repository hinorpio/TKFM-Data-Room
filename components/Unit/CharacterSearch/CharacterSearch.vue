<template>
    <v-card :style="{background: '#424242', width: dialogWidth}" :elevation="0">
        <header-bar :isDialog="isDialog" :showFilter.sync="showFilter" :isDisplayIcon.sync="isDisplayIcon" @close="handleCloseDialog()" />
        <v-card-text>
            <v-expand-transition>
                <div v-show="showFilter">
                    <filter-bar :selectedRarities.sync="selectedRarities" :selectedElements.sync="selectedElements" :selectedPositions.sync="selectedPositions" />
                </div>
            </v-expand-transition>
            
            <v-divider class="my-4"></v-divider>

            <show-as-icon v-if="isDisplayIcon" :itemsForShow="itemsForShow" @select="handleSelectUnit" />
            <show-as-card v-else :itemsForShow="itemsForShow" @select="handleSelectUnit" />
          
        </v-card-text>
    </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Rarity, Element, Position } from '@/plugins/utils/enums'
import { Unit } from '@/interface/unit';
import HeaderBar from "./headerBar.vue";
import FilterBar from "./filterBar.vue";
import ShowAsIcon from "./showAsIcon.vue";
import ShowAsCard from "./showAsCard.vue";

@Component({
    components:{
        HeaderBar,
        FilterBar,
        ShowAsIcon,
        ShowAsCard,
    }
})
export default class CharacterSearch extends Vue {
    @Prop({ type: Boolean, required: false, default: false })
    isDialog!: Boolean;

    showFilter: Boolean = true;
    dataset: Unit[] = [];
    selectedRarities: Rarity[] = [];
    selectedElements: Element[] = [];
    selectedPositions: Position[] = [];
    isDisplayIcon: Boolean = true;
    dialogWidth: String = '80em';

    get itemsForShow(): Unit[]{
        return this.dataset
            .filter(unit =>  
                (this.selectedRarities.length == 0)
                    ?true 
                    :this.selectedRarities.includes(unit.rarity as Rarity) 
                )
            .filter(unit =>  
                (this.selectedElements.length == 0)
                    ?true 
                    :this.selectedElements.includes(unit.element as Element) 
                )
            .filter(unit =>  
                (this.selectedPositions.length == 0)
                    ?true 
                    :this.selectedPositions.includes(unit.position as Position) 
                )
            .sort((a, b) => b.ID.localeCompare(a.ID))
            .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
    }

    get filterPropsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 1, 2, 2, 3, 3)
    }

    mounted(): void{
        this.dataset = this.$util.getAllUnitGeneralData()
    }

    handleCloseDialog(): void {
        this.$emit('close');
    }

    handleSelectUnit(unit: Unit): void {
        const locale = this.$i18n.locale
        const langPrefix = (locale === 'tc')?`` :`/${locale}`
        this.$router.push({
            path: `${langPrefix}/unit?code=${unit.metaCode}`,
        });
    }
}
</script>
<style lang="sass" scoped>
.button-content
    height: 100%
    width: 100%
</style>
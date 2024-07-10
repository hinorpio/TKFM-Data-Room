<template>
    <v-card :style="{background: '#424242', width: dialogWidth}" :elevation="0">
        <v-card-title> 
            {{ $t('Search Character') }}
            <v-spacer></v-spacer>
            <v-btn icon @click="handleSwitchDisplay()">
                <v-icon>mdi-format-list-bulleted</v-icon>
            </v-btn>
            <v-btn icon @click="showFilter = !showFilter">
                <v-icon>mdi-filter</v-icon>
            </v-btn>
            <v-btn icon @click="handleCloseDialog">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-card-title>
        <v-card-text>
            <v-expand-transition>
                <div v-show="showFilter">
                    <v-row>
                        <v-col :cols="(12/filterPropsPerRow)" class="py-0">
                            <v-chip-group v-model="selectedRarities" multiple>
                                <v-chip v-for="(rarity, index) in rarityList" :key="index" :value="rarity.code" active-class="blue lighten-2" >
                                    <v-btn class="pa-0 character-button" outlined color="transparent" block >
                                        <v-img :src="rarity.icon" height="2em" width="2em" contain/>
                                    </v-btn>
                                </v-chip>
                            </v-chip-group>
                        </v-col>
                        <v-col :cols="(12/filterPropsPerRow)" class="py-0">
                            <v-chip-group v-model="selectedElements" multiple>
                                <v-chip v-for="(element, index) in elementList" :key="index" :value="element.code" active-class="blue lighten-2" >
                                    <v-btn class="pa-0 character-button" outlined color="transparent" block >
                                        <v-img :src="element.icon" height="2em" width="2em" contain/>
                                    </v-btn>
                                </v-chip>
                            </v-chip-group>
                        </v-col>
                        <v-col :cols="(12/filterPropsPerRow)" class="py-0">
                            <v-chip-group v-model="selectedPositions" multiple>
                                <v-chip v-for="(position, index) in positionList" :key="index" :value="position.code" active-class="blue lighten-2" >
                                    <v-btn class="pa-0 character-button" outlined color="transparent" block >
                                        <v-img :src="position.icon" height="2em" width="2em" contain/>
                                    </v-btn>
                                </v-chip>
                            </v-chip-group>
                        </v-col>
                    </v-row>
                </div>
            </v-expand-transition>
            
            <v-divider class="my-4"></v-divider>

            <show-as-icon v-if="isShowAsIcon" :itemsForShow="itemsForShow" @select="handleSelectUnit" />
            <show-as-card v-else :itemsForShow="itemsForShow" @select="handleSelectUnit" />
          
        </v-card-text>
    </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Rarity, Element, Position } from '@/plugins/utils/enums'
import { Unit } from '@/interface/unit';
import ShowAsIcon from "./showAsIcon.vue";
import ShowAsCard from "./showAsCard.vue";

@Component({
    components:{
        ShowAsIcon,
        ShowAsCard
    }
})
export default class CharacterSearch extends Vue {

    showFilter: Boolean = true;
    isShowAsIcon: Boolean = true;
    dataset: Unit[] = [];
    rarityList: { [key: string]: string }[] = [];
    elementList: { [key: string]: string }[] = [];
    positionList: { [key: string]: string }[] = [];
    selectedRarities: Rarity[] = [];
    selectedElements: Element[] = [];
    selectedPositions: Position[] = [];
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
    }

    get filterPropsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 1, 2, 2, 3, 3)
    }

    mounted(): void{
        this.dataset = this.$util.getAllUnitGeneralData()
        this.rarityList = this.$util.getAllRarity()
        this.elementList = this.$util.getAllElement()
        this.positionList = this.$util.getAllPosition()
    }

    handleCloseDialog(): void {
        this.$emit('close');
    }

    handleSelectUnit(unit: Unit): void {
        const locale = this.$i18n.locale
        const langPrefix = (locale === 'tc')?`` :`/${locale}`
        this.$router.push({
            path: `${langPrefix}/unit/${unit.metaCode}`,
        });
    }

    handleSwitchDisplay(){
        this.isShowAsIcon = !this.isShowAsIcon
    }
}
</script>
<style lang="sass" scoped>
.button-content
    height: 100%
    width: 100%
</style>
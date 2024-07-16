<template>
    <v-row v-if="isMounted">
        <v-col :cols="(12/filterPropsPerRow)" class="py-0">
            <v-chip-group v-model="localSelectedRarities" multiple @change="handleSelectRarities">
                <v-chip v-for="(rarity, index) in rarityList" :key="index" :value="rarity.code" active-class="blue lighten-2" >
                    <v-btn class="pa-0 character-button" outlined color="transparent" block >
                        <v-img :src="rarity.icon" height="2em" width="2em" contain/>
                    </v-btn>
                </v-chip>
            </v-chip-group>
        </v-col>
        <v-col :cols="(12/filterPropsPerRow)" class="py-0">
            <v-chip-group v-model="localSelectedElements" multiple @change="handleSelectedElements">
                <v-chip v-for="(element, index) in elementList" :key="index" :value="element.code" active-class="blue lighten-2" >
                    <v-btn class="pa-0 character-button" outlined color="transparent" block >
                        <v-img :src="element.icon" height="2em" width="2em" contain/>
                    </v-btn>
                </v-chip>
            </v-chip-group>
        </v-col>
        <v-col :cols="(12/filterPropsPerRow)" class="py-0">
            <v-chip-group v-model="localSelectedPositions" multiple @change="handleSelectedPositions">
                <v-chip v-for="(position, index) in positionList" :key="index" :value="position.code" active-class="blue lighten-2" >
                    <v-btn class="pa-0 character-button" outlined color="transparent" block >
                        <v-img :src="position.icon" height="2em" width="2em" contain/>
                    </v-btn>
                </v-chip>
            </v-chip-group>
        </v-col>
    </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { Rarity, Element, Position } from '@/plugins/utils/enums'

@Component
export default class FilterBar extends Vue {
    @Prop({ type: Array, required: true, default: [] })
    selectedRarities!: Rarity[];

    @Prop({ type: Array, required: true, default: [] })
    selectedElements!: Element[];

    @Prop({ type: Array, required: true, default: [] })
    selectedPositions!: Position[];

    isMounted: Boolean = false;
    rarityList: { [key: string]: string }[] = [];
    elementList: { [key: string]: string }[] = [];
    positionList: { [key: string]: string }[] = [];
    localSelectedRarities: Rarity[] = [];
    localSelectedElements: Element[] = [];
    localSelectedPositions: Position[] = [];

    mounted(): void{
        this.rarityList = this.$util.getAllRarity()
        this.elementList = this.$util.getAllElement()
        this.positionList = this.$util.getAllPosition()
        this.localSelectedRarities = [...this.selectedRarities];
        this.localSelectedElements = [...this.selectedElements];
        this.localSelectedPositions = [...this.selectedPositions];
        this.isMounted = true
    }

    get filterPropsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 1, 2, 2, 3, 3)
    }

    handleSelectRarities(rarities: Rarity[]): void{
        this.localSelectedRarities = rarities;
        this.$emit("update:selectedRarities", rarities)
    }

    handleSelectedElements(elements: Element[]): void{
        this.localSelectedElements = elements;
        this.$emit("update:selectedElements", elements)
    }

    handleSelectedPositions(positions: Position[]): void{
        this.localSelectedPositions = positions;
        this.$emit("update:selectedPositions", positions)
    }

}
</script>
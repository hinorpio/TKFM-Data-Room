<template>
    <v-col>
        <v-carousel v-if="!isOutfits" v-model="fullBody" width="100%" :height="imgHeight" hide-delimiter-background>
            <v-carousel-item  v-for="(clothes, index) in unit.clothes" :key="index">
                <div class="image-container">
                    <v-img :src="clothes" :lazy-src="clothes" height="100%" width="100%" contain />
                </div>
            </v-carousel-item>
        </v-carousel>
        <v-carousel v-else v-model="fullBody" width="100%" :height="imgHeight" hide-delimiter-background>
            <v-carousel-item  v-for="(outfit, index) in unit.outfits" :key="index">
                <div class="image-container">
                    <v-img :src="outfit" :lazy-src="outfit" height="100%" width="100%" contain />
                </div>
            </v-carousel-item>
        </v-carousel>
        <v-row v-if="hasOutfits" class="align-center justify-center mt-2">
            <v-spacer></v-spacer>
            <v-btn @click="isOutfits = !isOutfits">
                <v-icon>mdi-sync</v-icon>
                {{ getSwitchOutfitString() }}
            </v-btn>
            <v-spacer></v-spacer>
        </v-row>
    </v-col>
    
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Unit } from '@/interface/unit';

@Component
export default class UnitFullBody extends Vue {
    @Prop({ required: true, default: {} })
    unit!: Unit;
    isOutfits: boolean = false;
    fullBody: Number = 0;
    
    get hasOutfits(): boolean{
        const outfit = this.unit.outfits ?? [];
        return outfit.length > 0
    }

    get imgHeight(): string{
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '50vh', '30vh', '70vh', '80vh', '80vh')
    }

    getSwitchOutfitString() :void{
        return (this.isOutfits) ?this.$t('Original Outfits') :this.$t('Simple Outfits')
    }
}
</script>
<style lang="sass" scoped>
.image-container
  display: flex
  justify-content: center
  align-items: center
  height: 100%
</style>
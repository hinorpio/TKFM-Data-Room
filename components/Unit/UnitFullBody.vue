<template>
    <v-col>
        <v-carousel v-if="!isOutfits" v-model="fullBody" width="100%" :height="imgHeight" hide-delimiter-background>
            <v-carousel-item  v-for="(clothes, index) in unit.clothes[nudeLevel]" :key="index">
                <div class="image-container">
                    <v-img height="100%" width="100%" contain>
                        <template v-slot:default>
                            <img :src="clothes" :lazy-src="clothes" alt="Image" style="object-fit: contain; height: 100%; width: 100%">
                        </template>
                    </v-img>
                </div>
            </v-carousel-item>
        </v-carousel>
        <v-carousel v-else-if="unit.outfits" v-model="fullBody" width="100%" :height="imgHeight" hide-delimiter-background>
            <v-carousel-item v-for="(outfit, index) in unit.outfits[nudeLevel]" :key="index">
                <div class="image-container">
                    <v-img height="100%" width="100%" contain>
                        <template v-slot:default>
                            <img :src="outfit" :lazy-src="outfit" alt="Image" style="object-fit: contain; height: 100%; width: 100%">
                        </template>
                    </v-img>
                </div>
            </v-carousel-item>
        </v-carousel>
        <v-col v-if="isMobile">
            <v-row class="align-center justify-center">
                <v-chip-group v-model="nudeLevel" @change="handleNudeLevel" mandatory>
                    <v-chip v-for="(level, index) in 3" :key="index" :value="index" active-class="blue" >
                        <v-icon>
                            mdi-lingerie
                        </v-icon>
                        <b>{{ index + 1 }}</b>
                    </v-chip>
                </v-chip-group>
            </v-row>
            <v-row class="align-center justify-center mt-4">
                <v-btn v-if="hasOutfits" @click="isOutfits = !isOutfits">
                    <v-icon>mdi-sync</v-icon>
                    {{ getSwitchOutfitString() }}
                </v-btn>
            </v-row>
        </v-col>
        <v-row v-else class="align-center justify-center">
            <v-spacer></v-spacer>
            <v-chip-group class="ml-2" v-model="nudeLevel" @change="handleNudeLevel" mandatory>
                <v-chip v-for="(level, index) in 3" :key="index" :value="index" active-class="blue" >
                    <v-icon>
                        mdi-lingerie
                    </v-icon>
                    <b>{{ index + 1 }}</b>
                </v-chip>
            </v-chip-group>
            <v-btn v-if="hasOutfits" class="ml-4" @click="isOutfits = !isOutfits">
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
    fullBody: number = 0;
    nudeLevel: number = 0
    
    get hasOutfits(): boolean{
        const outfit = this.unit.outfits ?? [];
        return outfit.length > 0
    }

    get isMobile(): boolean {
        return this.$vuetify.breakpoint.name == 'xs';
    }

    get imgHeight(): string{
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '50vh', '30vh', '70vh', '80vh', '80vh')
    }

    handleNudeLevel(level: number): void{
        this.nudeLevel = level
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
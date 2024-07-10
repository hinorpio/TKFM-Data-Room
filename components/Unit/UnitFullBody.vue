<template>
    <v-carousel v-model="fullBody" width="100%" :height="imgHeight" hide-delimiter-background>
        <v-carousel-item v-for="(clothes, index) in unit.clothes" :key="index">
            <div class="image-container">
                <v-img :src="clothes" :lazy-src="clothes" height="100%" width="100%" contain />
            </div>
        </v-carousel-item>
    </v-carousel>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Unit } from '@/interface/unit';

@Component
export default class UnitFullBody extends Vue {
    @Prop({ required: true, default: {} })
    unit!: Unit;

    fullBody: Number = 0
    
    get imgHeight(): string{
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '50vh', '30vh', '70vh', '80vh', '80vh')
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
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
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return '50vh'
            case 'sm': return '30vh'
            case 'md': return '70vh'
            case 'lg': return '80vh'
            case 'xl': return '80vh'
            default: return '80vh'
        }
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
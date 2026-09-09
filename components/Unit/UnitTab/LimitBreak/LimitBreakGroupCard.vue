<template>
    <v-card tag="section">
        <v-sheet tag="header" color="#000000" dark elevation="4" min-height="50" class="d-flex align-center px-4 py-3">
            <img :src="icon" alt="" aria-hidden="true" width="24" height="24" class="flex-shrink-0 ml-2" style="object-fit: contain;" />
            <h2 class="body-1 font-weight-bold ml-4">{{ title }}</h2>
        </v-sheet>
        <v-card-text>
            <slot />
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class LimitBreakGroupCard extends Vue {
    @Prop({ type: String, required: true }) readonly title!: string;
    @Prop({ type: String, required: true }) readonly icon!: string;
}
</script>

<style scoped>
h2 {
    min-width: 0;
    overflow-wrap: anywhere;
}
</style>

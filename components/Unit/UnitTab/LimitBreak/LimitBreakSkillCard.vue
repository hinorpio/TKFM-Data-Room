<template>
    <v-card tag="article">
        <v-sheet tag="header" color="#f0b023" light elevation="4" min-height="50" class="d-flex align-center px-4 py-3">
            <img :src="icon" alt="" aria-hidden="true" width="24" height="24" class="flex-shrink-0 ml-2" style="object-fit: contain;" />
            <h3 class="body-1 font-weight-bold ml-4">{{ skill.name }}</h3>
        </v-sheet>
        <v-card-text class="text--primary">
            <p class="body-1 font-weight-bold ml-4 mb-0 limit-break-description">{{ skill.description }}</p>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Skill } from '@/interface/unit/skillset';

@Component
export default class LimitBreakSkillCard extends Vue {
    @Prop({ type: Object, required: true }) readonly skill!: Skill;
    @Prop({ type: String, required: true }) readonly icon!: string;
}
</script>

<style scoped>
h3 {
    min-width: 0;
    overflow-wrap: anywhere;
}

.limit-break-description {
    white-space: pre-wrap;
    overflow-wrap: anywhere;
}
</style>

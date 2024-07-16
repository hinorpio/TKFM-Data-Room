<template>
    <v-card-title> 
        {{ $t('Search Character') }}
        <v-spacer></v-spacer>
        <v-btn icon @click="handleSwitchDisplay">
            <v-icon v-if="isDisplayIcon">mdi-format-list-text</v-icon>
            <v-icon v-else>mdi-view-grid-outline</v-icon>
        </v-btn>
        <v-btn icon @click="handleShowFilter">
            <v-icon>mdi-filter</v-icon>
        </v-btn>
        <v-btn icon v-if="isDialog" @click="handleCloseDialog">
            <v-icon>mdi-close</v-icon>
        </v-btn>
    </v-card-title>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class CharacterSearch extends Vue {
    @Prop({ type: Boolean, required: false, default: false })
    isDialog!: Boolean;

    @Prop({ type: Boolean, required: false, default: false })
    isDisplayIcon!: Boolean;

    @Prop({ type: Boolean, required: false, default: true })
    showFilter!: Boolean;

    handleShowFilter(): void{
        this.showFilter = !this.showFilter
        this.$emit('update:showFilter', this.showFilter)
    }

    handleSwitchDisplay(type: String): void{
        this.isDisplayIcon = !this.isDisplayIcon
        this.$emit('update:isDisplayIcon', this.isDisplayIcon)
    }

    handleCloseDialog(): void {
        this.$emit('close');
    }
}
</script>
<template>
    <div class="mt-8">
        <div v-for="(puzzle, index) in unit.puzzle" :key="index">
            <v-row v-if="$vuetify.breakpoint.name == 'xs'">
                <v-col :cols="12">
                    <v-img :src="puzzle.preview" :lazy-src="puzzle.preview" max-width="100%" />
                    <v-row class="pa-4">
                        <span :class="titleClass">{{ puzzle.name[$i18n.locale] }}</span>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="handleImageDialog(puzzle)">
                            <v-icon large>mdi-magnify-plus-outline</v-icon>
                        </v-btn>
                    </v-row>
                </v-col>
            </v-row>
            <v-row v-else>
                <v-col :cols="4">
                    <v-img :src="puzzle.preview" :lazy-src="puzzle.preview" max-width="100%" />
                </v-col>
                <v-col :cols="8">
                    <v-row class="pa-4">
                        <span :class="titleClass">{{ puzzle.name[$i18n.locale] }}</span>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="handleImageDialog(puzzle)">
                            <v-icon x-large>mdi-magnify-plus-outline</v-icon>
                        </v-btn>
                    </v-row>
                </v-col>
            </v-row>
            <v-divider class="my-4"></v-divider>
        </div>
        
        <basic-image-viewer :visible.sync="visible" :title.sync="currentTitle" :src.sync="currentPhoto" />

    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale } from '@/plugins/utils/enums'
import { Unit } from '@/interface/unit'
import { Puzzle } from '@/interface/unit/puzzle'
import BasicIamgeViewer from "@/components/Unit/UnitTab/LiberationTab.vue";

@Component({
    components: {
        BasicIamgeViewer
    }
})
export default class PuzzleTab extends Vue {
    @Prop({ type: Object, required: true, default: () => ({}) })
    unit!: Unit;

    visible: boolean = false;
    currentTitle: string = "";
    currentPhoto: string = "";

    get titleClass(): string {
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return 'title font-weight-bold';
            case 'sm': return 'title font-weight-bold';
            case 'md': return 'title font-weight-bold';
            case 'lg': return 'title font-weight-bold';
            case 'xl': return 'headline font-weight-bold';
            default: return 'title font-weight-bold';
        }
    }

    handleImageDialog(puzzle: Puzzle): void {
        const locale = this.$i18n.locale as keyof typeof Locale;
        this.currentTitle = puzzle.name[locale] ?? '';
        this.currentPhoto = puzzle.fullImage;
        this.visible = true;
    }
}
</script>
<style lang="sass" scoped>
</style>
<template>
    <v-card>
        <v-card-title>
            <span>{{ getArtName(art) }}</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-row class="pl-5 pb-1 mt-2 align-center">
            <v-col v-for="(path, pathIndex) in art.paths.slice(0, itemsPerRow)" :key="pathIndex" :cols="showColRatio">
                <v-img :src="path" width="100%" contain />
            </v-col>
            <v-spacer></v-spacer>
            <v-col :class="buttonMarginRight">
                <v-btn icon outlined color="white" :small="isButtonSmall" @click="handleSelectArt">
                    <v-icon color="white">
                        mdi-magnify
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale } from "~/plugins/utils/enums";
import { Art } from "~/interface/art";

@Component
export default class ArtPreviewCard extends Vue {
    @Prop({ type: Object, required: true, default: () => ({}) })
    art!: Art

    isMounted: boolean = false 
    artData: Art[] = []

    get isButtonSmall(): boolean {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, true, true, true, false, false)
    }

    get itemsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 3, 5, 5, 5, 5)
    }

    get showColRatio (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 3, 2, 2, 2, 2)
    }

    get buttonMarginRight (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, "mr-6", "mr-12", "mr-12", "mr-4", "mr-6")
    }

    mounted() :void{
        this.artData = this.$util.getAllArt()
        this.isMounted = true
    }

    getArtName(art: Art): string{
        const locale = this.$i18n.locale as keyof typeof Locale;
        const result = art.name[locale];
        return result ?? ''
    }

    handleSelectArt(): void {
        this.$emit('select', this.art)
    }

}

</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
.hyperlink-class
  text-decoration: none
</style>
<template>
    <div v-if="isMounted">
        <v-row v-if="localIsDisplayGrid">
            <v-col v-for="(path, index) in art.paths" :key="index" :cols="(12/itemsPerRow)"> 
                <art-grid-box :path="path" :artName="getArtName()" />
            </v-col>
        </v-row>
        <art-carousel v-else :art="art" :zoom="zoom" />
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop,Watch } from "vue-property-decorator";
import { Locale } from "~/plugins/utils/enums";
import { Art } from "~/interface/art";
import ArtGridBox from "./ArtGridBox.vue";
import ArtCarousel from "./ArtCarousel.vue";

@Component({
    components: {
        ArtGridBox,
        ArtCarousel
    }
})
export default class ArtContent extends Vue {
    @Prop({ type: Object, required: true, default: () => ({}) })
    art!: Art;

    @Prop({ type: Boolean, required: true, default: true })
    isDisplayGrid!: boolean;

    @Prop({ type: Number, required: true, default: 1 })
    zoom!: number;

    isMounted: boolean = false
    localIsDisplayGrid: boolean = true

    @Watch('isDisplayGrid')
    onIsDisplayGridChange(newVal: boolean): void {
        this.localIsDisplayGrid = newVal;
    }

    mounted(): void {
        this.localIsDisplayGrid = this.isDisplayGrid
        this.isMounted = true
    }

    get itemsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 3, 4, 6, 6, 6)
    }

    getArtName(): string{
        const locale = this.$i18n.locale as keyof typeof Locale;
        const result = this.art.name[locale];
        return result ?? ''
    }

}

</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
</style>
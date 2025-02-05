<template>
    <div>
        <v-row>
            <v-col v-for="(path, index) in art.paths" :key="index" :cols="(12/itemsPerRow)"> 
                <art-grid-box :path="path" :artName="getArtName()" />
            </v-col>
        </v-row>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale } from "~/plugins/utils/enums";
import { Art } from "~/interface/art";
import ArtGridBox from "./ArtGridBox.vue";

@Component({
    components: {
        ArtGridBox
    }
})
export default class StickerPage extends Vue {
    @Prop({ type: Object, required: true, default: () => ({}) })
    art!: Art;

    isMounted: boolean = false 

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
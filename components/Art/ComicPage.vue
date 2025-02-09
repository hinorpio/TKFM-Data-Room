<template>
    <div>
        <v-carousel v-model="page" width="100%" :height="imgHeight" hide-delimiter-background>
            <v-carousel-item  v-for="(path, index) in art.paths" :key="index">
                <div class="image-container">
                    <v-img :src="path" :lazy-src="path" height="100%" width="100%" contain />
                </div>
            </v-carousel-item>
        </v-carousel>
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
export default class ComicPage extends Vue {
    @Prop({ type: Object, required: true, default: () => ({}) })
    art!: Art;

    isMounted: boolean = false 
    page: Number = 0;

    get itemsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 3, 4, 6, 6, 6)
    }

    get imgHeight(): string{
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '50vh', '30vh', '70vh', '80vh', '80vh')
    }

    getArtName(): string{
        const locale = this.$i18n.locale as keyof typeof Locale;
        const result = this.art.name[locale];
        return result ?? ''
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
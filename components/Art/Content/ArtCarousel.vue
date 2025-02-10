<template>
    <div>
        <div v-if="isMobile">
            <v-carousel v-model="page" width="100%" hide-delimiter-background hide-delimiters>
                <v-carousel-item  v-for="(path, index) in art.paths" :key="index">
                    <div class="image-container">
                        <v-img :src="path" :lazy-src="path" height="100%" contain />
                    </div>
                </v-carousel-item>
            </v-carousel>
        </div>
        <div v-else>
            <v-carousel v-model="page" width="100%" :height="imgHeight" hide-delimiter-background hide-delimiters>
                <v-carousel-item  v-for="(path, index) in art.paths" :key="index">
                    <div class="image-container">
                        <v-img :src="path" :lazy-src="path" height="100%" width="100%" contain />
                    </div>
                </v-carousel-item>
            </v-carousel>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale } from "~/plugins/utils/enums";
import { Art } from "~/interface/art";

@Component
export default class ArtCarousel extends Vue {
    @Prop({ type: Object, required: true, default: () => ({}) })
    art!: Art;

    isMounted: boolean = false 
    page: Number = 0;

    get isMobile(): boolean {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, true, true, false, false, false)
    }

    get itemsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 3, 4, 6, 6, 6)
    }

    get imgHeight(): string{
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '50vh', '30vh', '80vh', '80vh', '80vh')
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
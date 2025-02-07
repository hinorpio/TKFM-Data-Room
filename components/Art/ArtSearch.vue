<template>
    <div>
        <v-divider class="mb-4"></v-divider>
        <v-row>
            <v-col v-for="(art, index) in artData" :key="index" :cols="(12/itemsPerRow)"> 
                <art-preview-card :art="art" @select="handleSelectArt"/>
            </v-col>
        </v-row>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Art } from "~/interface/art";
import ArtPreviewCard from "./ArtPreviewCard.vue";

@Component({
    components: {
        ArtPreviewCard
    }
})
export default class ArtSearch extends Vue {

    isMounted: boolean = false 
    artData: Art[] = []

    get isButtonSmall(): boolean {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, true, true, true, false, false)
    }

    get itemsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 1, 1, 1, 2, 2)
    }

    mounted() :void{
        this.artData = this.$util.getAllArt()
        this.isMounted = true
    }

    handleSelectArt(art: Art): void {
        const locale = this.$i18n.locale
        const langPrefix = (locale === 'tc')?`` :`/${locale}`
        this.$router.push({
            path: `${langPrefix}/art?code=${art.code}`,
        });
    }

}

</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
.hyperlink-class
  text-decoration: none
</style>
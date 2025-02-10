<template>
    <v-layout v-if="isMounted">
        <v-container :key="key">
            <v-row v-if="isNoArtSelected">
                <v-spacer></v-spacer>
                <v-card :style="{background: '#424242', width: dialogWidth}" :elevation="0">
                    <art-search />
                </v-card>
                <v-spacer></v-spacer>
            </v-row>
            <v-row v-else>
                <v-spacer></v-spacer>
                <v-card :style="{background: '#424242', width: dialogWidth}" :elevation="0">
                    <art-header :art="art" :isDisplayGrid.sync="isDisplayGrid" @displayUpdate="handleDisplayUpdate"/>
                    <v-divider class="mb-8"></v-divider>
                    <art-content :art="art" :isDisplayGrid.sync="isDisplayGrid"/> 
                </v-card>
                <v-spacer></v-spacer>
            </v-row>
        </v-container>
    </v-layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import { ArtType, ErrorCode } from "~/plugins/utils/enums";
import { Art } from "~/interface/art";
import ArtHeader from "@/components/Art/Header/ArtHeader.vue";
import ArtContent from "@/components/Art/Content/ArtContent.vue";
import ArtSearch from "@/components/Art/Search/ArtSearch.vue";

@Component({
    components: {
        ArtHeader,
        ArtContent,
        ArtSearch,
    }
})
export default class DispatchPage extends Vue {

    isMounted: boolean = false 
    isNoArtSelected: boolean = false
    isDisplayGrid: boolean = true
    dialogWidth: String = '90em';
    art: Art | undefined
    key: number = 0;

    @Watch("watchedQueryParams")
    onWatchedQueryParamsChangenew(newQueryParams: string): void {
        this.pageCustomRefresh()
    }

    mounted(): void{
        this.pageCustomRefresh()
        this.isMounted = true
    }

    isSticker(): boolean{
        return (this.art != undefined) ?this.art.type == ArtType.STICKER :false
    }

    isComic(): boolean{
        return (this.art != undefined) ?this.art.type == ArtType.COMIC :false
    }

    get watchedQueryParams(){
        return this.$route.query;
    }

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    pageCustomRefresh(){
        const metaCode = this.watchedQueryParams.code as string
        this.scrollToTop()

        if(metaCode === undefined){
            this.isNoArtSelected = true
            this.art = undefined
        }else{
            try {
                this.isNoArtSelected = false
                this.art = this.$util.getArt(metaCode)
                this.isDisplayGrid = (this.art != undefined)
                    ? (this.art.type == ArtType.PAINTING || this.art.type == ArtType.STICKER) ? true : false
                    : true
            } catch (error) {
                console.log(error);
                const customError = this.$util.getCustomError(ErrorCode.CANNOT_FIND_ART)
                this.$nuxt.error(customError)
            }
        }
    }

    handleDisplayUpdate(): void{
        this.isDisplayGrid = !this.isDisplayGrid
    }

}

</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
</style>
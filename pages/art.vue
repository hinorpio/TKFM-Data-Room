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
                    <art-header :art="art" />
                    <v-divider class="mb-8"></v-divider>
                    <sticker-page v-if="isSticker" :art="art" />
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
import ArtHeader from "@/components/Art/ArtHeader.vue";
import StickerPage from "~/components/Art/StickerPage.vue";
import ArtSearch from "~/components/Art/ArtSearch.vue";

@Component({
    components: {
        ArtHeader,
        StickerPage,
        ArtSearch
    }
})
export default class DispatchPage extends Vue {

    isMounted: boolean = false 
    isNoArtSelected: boolean = false
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

    get isSticker(): boolean{
        return this.art?.type == ArtType.STICKER
    }

    get watchedQueryParams(){
        return this.$route.query;
    }

    pageCustomRefresh(){
        const metaCode = this.watchedQueryParams.code as string

        if(metaCode === undefined){
            this.isNoArtSelected = true
        }else{
            try {
                this.isNoArtSelected = false
                this.art = this.$util.getArt(metaCode)
            } catch (error) {
                console.log(error);
                const customError = this.$util.getCustomError(ErrorCode.CANNOT_FIND_ART)
                this.$nuxt.error(customError)
            }
        }
    }

}

</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
</style>
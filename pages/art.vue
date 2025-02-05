<template>
    <v-layout v-if="isMounted">
        <v-container :key="key">
            <v-row v-if="isNoArtSelected">

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
import { Component } from "vue-property-decorator";
import { ArtType } from "~/plugins/utils/enums";
import { Art } from "~/interface/art";
import ArtHeader from "@/components/Art/ArtHeader.vue";
import StickerPage from "~/components/Art/StickerPage.vue";

@Component({
    components: {
        ArtHeader,
        StickerPage,
    }
})
export default class DispatchPage extends Vue {

    isMounted: boolean = false 
    isNoArtSelected: boolean = false
    dialogWidth: String = '80em';
    metaCode: string = 'Art-001'
    art: Art | undefined
    key: number = 0;

    mounted(): void{
        this.art = this.$util.getArt(this.metaCode)
        this.isNoArtSelected = false
        this.isMounted = true
    }

    get isSticker(): boolean{
        return this.art?.type == ArtType.STICKER
    }

}

</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
</style>
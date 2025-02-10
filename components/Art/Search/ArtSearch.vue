<template>
    <v-card :style="{background: '#424242'}" :elevation="0">
        <v-card-title>
            {{ $t('Search') }}
            <v-btn class="ml-4" small @click="switchShowLanguage">
                {{ `${$t('Language')} : ${getLocaleString()}` }}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="uncheckAll">
                <v-icon>mdi-checkbox-blank-outline</v-icon>
            </v-btn>
            <v-btn icon @click="checkAll">
                <v-icon>mdi-check-all</v-icon>
            </v-btn>
            <v-btn icon @click="handleShowFilter">
                <v-icon>mdi-filter</v-icon>
            </v-btn>
        </v-card-title>
        <v-expand-transition>
            <div v-show="showFilter">
                <filter-art-bar :isAllLanguage.sync="isAllLanguage" :selectedArtSources.sync="selectedArtSources" :selectedArtTypes.sync="selectedArtTypes" />
            </div>
        </v-expand-transition>
        <v-divider class="my-4"></v-divider>
        <v-row>
            <v-col v-for="(art, index) in itemsForShow" :key="index" :cols="(12/itemsPerRow)"> 
                <art-preview-card :art="art" @select="handleSelectArt"/>
            </v-col>
        </v-row>
    </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Art } from "~/interface/art";
import ArtPreviewCard from "./ArtPreviewCard.vue";
import FilterArtBar from "./FilterArtBar.vue";
import { Locale, ArtSource, ArtType } from "~/plugins/utils/enums";
import { LocaleString } from "~/static/const";

@Component({
    components: {
        ArtPreviewCard,
        FilterArtBar
    }
})
export default class ArtSearch extends Vue {

    isMounted: boolean = false 
    showFilter: boolean = true
    isAllLanguage: boolean = true
    artData: Art[] = []
    selectedArtSources: ArtSource[] = [
        ArtSource.OFFICAL,
        ArtSource.FANART,
    ];
    selectedArtTypes: ArtType[] = [
        ArtType.PAINTING,
        ArtType.STICKER,
        ArtType.COMIC,
        ArtType.FICTION,
        ArtType.VIDEO,
        ArtType.OTHER,
    ];

    get isButtonSmall(): boolean {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, true, true, true, false, false)
    }

    get itemsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 1, 1, 1, 2, 2)
    }

    get itemsForShow(): Art[]{
        const locale = this.$i18n.locale as Locale
        return this.artData
            .filter(art => this.selectedArtSources.includes(art.source as ArtSource))
            .filter(art => this.selectedArtTypes.includes(art.type as ArtType))
            .filter(art => {
                return (this.isAllLanguage) 
                    ? true
                    : art.locale.includes(locale)
            })
    }

    mounted() :void{
        this.artData = this.$util.getAllArt()
        this.checkAll()
        this.isMounted = true
    }

    handleSelectArt(art: Art): void {
        const locale = this.$i18n.locale
        const langPrefix = (locale === 'tc')?`` :`/${locale}`
        this.$router.push({
            path: `${langPrefix}/art?code=${art.code}`,
        });
    }

    handleShowFilter(): void{
        this.showFilter = !this.showFilter
    }

    switchShowLanguage(): void{
        this.isAllLanguage = !this.isAllLanguage;
    }

    getLocaleString(): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        return (this.isAllLanguage) ?this.$t('All') :LocaleString[locale]
    }

    checkAll(): void{
        this.selectedArtSources = [ 
            ArtSource.OFFICAL, ArtSource.FANART,
        ];
        this.selectedArtTypes = [
            ArtType.PAINTING, ArtType.STICKER, ArtType.COMIC, ArtType.FICTION, ArtType.VIDEO, ArtType.OTHER,
        ];
    }

    uncheckAll(): void{
        this.selectedArtTypes = [];
    }
}
</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
.hyperlink-class
  text-decoration: none
</style>
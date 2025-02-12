<template>
    <v-row v-if="isMounted" class="px-4">
        <v-col :cols="(12/filterPropsPerRow)">
            <v-chip-group v-model="localSelectedArtSources" multiple mandatory @change="handleSelectArtSources">
                <v-chip v-for="(artSource, index) in artSourceList" :key="index" filter :value="artSource.code" :active-class="artSource.color" >
                    {{ getArtSource(artSource.code) }}
                </v-chip>
            </v-chip-group>
        </v-col>
        <v-spacer></v-spacer>
        <v-col :cols="(12/filterPropsPerRow)">
            <v-chip-group v-model="localSelectedArtTypes" multiple :column="isMobileShow" @change="handleSelectedArtTypes">
                <v-chip v-for="(artType, index) in artTypeList" :key="index" filter :value="artType.code" :active-class="artType.color" >
                    {{ getArtType(artType.code) }}
                </v-chip>
            </v-chip-group>
        </v-col>
        <v-row>
            <b class="pb-4 px-8 red--text">*{{ $t('Please be patient when loading the page at first time') }}</b>
        </v-row>
    </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { Locale, ArtSource, ArtType } from '@/plugins/utils/enums'

@Component
export default class FilterArtBar extends Vue {
    @Prop({ type: Array, required: true, default: [] })
    selectedArtSources!: ArtSource[];

    @Prop({ type: Array, required: true, default: [] })
    selectedArtTypes!: ArtType[];

    isMounted: Boolean = false;
    artSourceList: { [key: string]: string }[] = [];
    artTypeList: { [key: string]: string }[] = [];
    localSelectedArtSources: ArtSource[] = [];
    localSelectedArtTypes: ArtType[] = [];

    @Watch("selectedArtSources")
    onWatchedSelectedArtSources(artSources: ArtSource[]): void {
        this.localSelectedArtSources = artSources
    }

    @Watch("selectedArtTypes")
    onWatchedSelectedArtTypes(artTypes: ArtType[]): void {
        this.localSelectedArtTypes = artTypes
    }

    mounted(): void{
        this.artSourceList = this.$util.getAllArtSourceColor()
        this.artTypeList = this.$util.getAllArtTypeColor()
        this.localSelectedArtSources = [...this.selectedArtSources];
        this.localSelectedArtTypes = [...this.selectedArtTypes];
        this.isMounted = true
    }

    get isMobileShow(): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, true, true, false, false, false)
    }

    get filterPropsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 1, 1, 2, 2, 2)
    }

    handleSelectArtSources(artSources: ArtSource[]): void{
        this.localSelectedArtSources = artSources;
        this.$emit("update:selectedArtSources", artSources)
    }

    handleSelectedArtTypes(artTypes: ArtType[]): void{
        this.localSelectedArtTypes = artTypes;
        this.$emit("update:selectedArtTypes", artTypes)
    }

    getArtSource(source: string): string{
        const artSource = source as ArtSource
        const locale = this.$i18n.locale as keyof typeof Locale
        const artSourceStr: {[lang in Locale]: string} = this.$util.getArtSourceStr(artSource)
        return artSourceStr[locale]
    }

    getArtType(type: string): string{
        const artType = type as ArtType
        const locale = this.$i18n.locale as keyof typeof Locale
        const artTypeStr: {[lang in Locale]: string} = this.$util.getArtTypeStr(artType)
        return artTypeStr[locale]
    }
    
}
</script>
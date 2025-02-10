<template>
    <v-card>
        <v-card-title>
            <span>{{ getArtName(art) }}</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-row class="pl-5 pb-1 mt-2 align-center">
            <v-col v-for="(path, pathIndex) in art.paths.slice(0, itemsPerRow)" :key="pathIndex" :cols="showColRatio">
                <v-img :src="path" width="100%" :min-height="imgHeight" :max-height="imgHeight" contain />
            </v-col>
            <v-spacer></v-spacer>
            <v-col :class="buttonMarginRight">
                <v-btn icon outlined color="white" :small="isButtonSmall" @click="handleSelectArt">
                    <v-icon color="white">
                        mdi-magnify
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-divider class="mt-2"></v-divider>
        <v-card-actions>
            <v-btn x-small class="ml-2" color="white"><b class="blackStr">{{ getArtLocale() }}</b></v-btn>
            <v-btn x-small class="ml-2" :color="$util.getArtSourceColor(art.source)">{{ getArtSource(art.source) }}</v-btn>
            <v-btn x-small class="ml-2" :color="$util.getArtTypeColor(art.type)">{{ getArtType(art.type) }}</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ArtSource, ArtType, Locale } from "~/plugins/utils/enums";
import { Art } from "~/interface/art";

@Component
export default class ArtPreviewCard extends Vue {
    @Prop({ type: Object, required: true, default: () => ({}) })
    art!: Art

    isMounted: boolean = false 
    artData: Art[] = []

    get isButtonSmall(): boolean {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, true, true, true, false, false)
    }

    get itemsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 3, 5, 5, 5, 5)
    }

    get showColRatio (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 3, 2, 2, 2, 2)
    }

    get buttonMarginRight (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, "mr-6", "mr-12", "mr-12", "mr-4", "mr-6")
    }

    get imgHeight (): string {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, "4em", "4em", "4em", "5em", "8em")
    }

    mounted() :void{
        this.artData = this.$util.getAllArt()
        this.isMounted = true
    }

    getArtName(art: Art): string{
        const locale = this.$i18n.locale as keyof typeof Locale;
        const result = art.name[locale];
        return result ?? ''
    }

    getArtSource(source: ArtSource): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        const artSourceStr: {[lang in Locale]: string} = this.$util.getArtSourceStr(source)
        return artSourceStr[locale]
    }

    getArtType(type: ArtType): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        const artTypeStr: {[lang in Locale]: string} = this.$util.getArtTypeStr(type)
        return artTypeStr[locale]
    }

    getArtLocale(): string{
        const localeList = this.art.locale
        return (localeList.length > 0 && localeList.length == 5) ? 'ALL' : localeList[0]
    }

    handleSelectArt(): void {
        this.$emit('select', this.art)
    }

}

</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
.hyperlink-class
  text-decoration: none
.blackStr
    color: black !important
</style>
<template>
    <div v-if="isMounted">
        <v-card-title> 
            <v-btn icon outlined color="white" class="mr-4" :small="isButtonSmall" @click="handleBack">
                <v-icon color="white">
                    mdi-arrow-left
                </v-icon>
            </v-btn>
            <span>{{ getArtName(art) }}</span>
            <v-spacer></v-spacer>
            <b>{{ `${$t('Author')}: ${art.author}` }}</b>
        </v-card-title>
        <v-card-text>
            <v-col v-if="art.authorLink != null || getArtRemark(art) != ''">
                <div v-if="art.authorLink != null" >
                    {{ `${$t('Author Link')}: ` }}
                    <a :href="art.authorLink" class="hyperlink-class" target="_blank">
                        {{ art.authorLink }}
                    </a>
                    <br>
                </div>
                <span v-html="$util.showPreLineText(getArtRemark(art))"></span>
            </v-col>
            <v-row class="py-2">
                <v-col class="py-1" :cols="12" :xl="3" :lg="3" :md="4" :sm="5" :xs="12">
                    <v-btn @click="handleDisplayUpdate" block>
                        <v-icon class="mr-4" color="amber">{{getDisplayIcon()}}</v-icon>
                        {{ `${$t('Display')} : ${getDisplayString()}` }}
                    </v-btn>
                </v-col>
                <v-col class="py-1" :cols="12" :xl="3" :lg="3" :md="4" :sm="5" :xs="12">
                    <v-btn v-if="isDownloading" block>
                        <v-progress-circular indeterminate color="blue" ></v-progress-circular>
                    </v-btn>
                    <v-btn v-else @click="handleDownloadZip" block>
                        <v-icon class="mr-4" color="blue">mdi-folder-zip</v-icon>
                        {{ $t('Download ZIP') }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { Locale } from "~/plugins/utils/enums";
import { Art } from "~/interface/art";

@Component
export default class ArtHeader extends Vue {

    @Prop({ type: Object, required: true, default: () => ({}) })
    art!: Art;

    @Prop({ type: Boolean, required: true, default: true })
    isDisplayGrid!: boolean;

    isMounted: boolean = false 
    localIsDisplayGrid: boolean = true
    isDownloading: boolean = false

    @Watch('isDisplayGrid')
    onIsDisplayGridChange(newVal: boolean): void {
        this.localIsDisplayGrid = newVal;
    }

    mounted(): void {
        this.localIsDisplayGrid = this.isDisplayGrid
        this.isMounted = true
    }

    get isButtonSmall(): boolean {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, true, false, false, false, false)
    }

    getArtName(art: Art): string{
        const locale = this.$i18n.locale as keyof typeof Locale;
        const result = art.name[locale];
        return result ?? ''
    }

    getArtRemark(art: Art): string{
        const locale = this.$i18n.locale as keyof typeof Locale;
        const result = art.remark[locale];
        return result ?? ''
    }

    handleBack(): void{
        const locale = this.$i18n.locale
        const langPrefix = (locale === 'tc')?`` :`/${locale}`
        this.$router.push({
            path: `${langPrefix}/art`,
        });
    }

    handleDisplayUpdate(): void{
        this.$emit("displayUpdate")
    }

    async handleDownloadZip(): Promise<void>{
        this.isDownloading = true
        await this.$util.handleDownloadZip(this.art.paths, this.art.code)
        this.isDownloading = false
    }

    getDisplayString(): string{
        return (this.localIsDisplayGrid) ? this.$t("Grid") : this.$t("Slide")
    }

    getDisplayIcon(): string{
        return (this.localIsDisplayGrid) ? 'mdi-view-grid-outline' : 'mdi-view-carousel'
    }

}

</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
.hyperlink-class
  text-decoration: none
</style>
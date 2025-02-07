<template>
    <div>
        <v-card-title> 
            <v-btn icon outlined color="white" class="mr-2" :small="isButtonSmall" @click="handleBack">
                <v-icon color="white">
                    mdi-arrow-left
                </v-icon>
            </v-btn>
            {{ getArtName(art) }}
            <v-spacer></v-spacer>
            <b>{{ `${$t('Author')}: ${art.author}` }}</b>
        </v-card-title>
        <v-card-text>
            {{ `${$t('Author Link')}: ` }}
            <a :href="art.authorLink" class="hyperlink-class" target="_blank">
                {{ art.authorLink }}
            </a>
            <br>
            <span v-html="$util.showPreLineText(getArtRemark(art))"></span>
        </v-card-text>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale } from "~/plugins/utils/enums";
import { Art } from "~/interface/art";
import StickerPage from "~/components/Art/StickerPage.vue";

@Component({
    components: {
        StickerPage,
    }
})
export default class ArtHeader extends Vue {

    @Prop({ type: Object, required: true, default: () => ({}) })
    art!: Art;

    isMounted: boolean = false 

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

}

</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
.hyperlink-class
  text-decoration: none
</style>
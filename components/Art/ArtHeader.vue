<template>
    <div>
        <v-card-title> 
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

}

</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
.hyperlink-class
  text-decoration: none
</style>
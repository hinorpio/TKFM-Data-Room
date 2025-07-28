<template>
    <a class="hyperlink-class" target="_blank" :href="link">
        <v-btn class="pa-0 character-button" color="white" block height="4em">
            <v-row class="align-center px-0 mx-0">
                <v-img :src="imgSrc" height="4em" width="4em" contain/>
                <v-spacer></v-spacer>
                <v-col class="pr-6" :cols="9">
                    <span class="linkClass">{{ content }}</span>
                </v-col>
            </v-row>
        </v-btn>
    </a>
    
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale } from "~/plugins/utils/enums";

@Component
export default class LinkButton extends Vue {

    @Prop({ type: String, required: true, default: '' })
    link!: string

    @Prop({ type: String, required: true, default: '' })
    content!: string

    @Prop({ type: String, required: true, default: '' })
    imgSrc!: string

    @Prop({ type: String, required: true, default: '' })
    color!: string

    
    getLocalStr(link: {[lang in Locale]: string}): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        return link[locale]
    }

    get linkClass(): string  {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'title', 'title', 'title', 'title', 'title')}`
    }
    
    
    
}
</script>
<style lang="sass" scoped>
.hyperlink-class
    text-decoration: none
::v-deep .v-btn__content
    color: black
::v-deep .v-btn
    text-transform: none
</style>

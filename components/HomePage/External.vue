<template>
    <v-row>
        <v-spacer></v-spacer>
        <base-expand-card :title="$t('External Website')" icon="mdi-link" >
            <div slot="content" class="pa-4">
                <h2 class="mb-4">{{ $t('Offical Link') }}</h2>
                <h3><u>{{ $t('Offical') }}</u></h3>
                <a class="hyperlink-class" target="_blank" :href="getLocaleLink(offical)">
                    <span :class="linkClass">{{$t('Offical Website')}}</span>
                </a>
                <br />
                <h3><u>Discord</u></h3>
                <a class="hyperlink-class" target="_blank" :href="getLocaleLink(discord)">
                    <span :class="linkClass">{{$t('Discord')}}</span>
                </a>
                <br />
                <h3><u>Youtube</u></h3>
                <a class="hyperlink-class" target="_blank" :href="getLocaleLink(youtube)">
                    <span :class="linkClass">{{$t('Youtube')}}</span>
                </a>
                <br />
                <h3><u>Facebook</u></h3>
                <a class="hyperlink-class" target="_blank" :href="getLocaleLink(facebook_fanpage)">
                    <span :class="linkClass">{{$t('Facebook Fanpage')}}</span>
                </a>
                <br />
                <a class="hyperlink-class" target="_blank" :href="getLocaleLink(facebook_group)">
                    <span :class="linkClass">{{$t('Facebook Group')}}</span>
                </a>
                <br />
                <h2 class="mt-8 mb-2">{{ $t('Useful Tools') }}</h2>
                <a class="hyperlink-class" target="_blank" :href="getLocaleLink(tkfmtools)">
                    <span :class="linkClass">{{$t('TenkafuMA Toolbox')}}</span>
                </a>
                <br />
                <a class="hyperlink-class" target="_blank" :href="getLocaleLink(tkfmvercelapp)">
                    <span :class="linkClass">{{$t('TenkafuMA Vercel App')}}</span>
                </a>

            </div>
        </base-expand-card>
        <v-spacer></v-spacer>
    </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from 'vue-property-decorator';
import BaseExpandCard from "../BaseExpandCard.vue";
import { Locale } from "~/plugins/utils/enums";

@Component({
    components: {
        BaseExpandCard
    }
})
export default class External extends Vue {
    getLocaleLink(link: {[lang in Locale]: string}): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        return link[locale]
    }

    get linkClass(): string  {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'subtitle-2', 'subtitle-1', 'subtitle-1', 'subtitle-1', 'subtitle-1')} font-weight-bold`
    }
    
    offical: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://tenkafuma.com/zh-Hant',
        [Locale.sc]: 'https://tenkafuma.com/zh-Hans',
        [Locale.en]: 'https://tenkafuma.com/en',
        [Locale.jp]: 'https://tenkafuma.com/ja',
        [Locale.kr]: 'https://tenkafuma.com/ko',
    }

    discord: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://discord.gg/RRRABMtHYj',
        [Locale.sc]: 'https://discord.gg/RRRABMtHYj',
        [Locale.en]: 'https://discord.gg/RRRABMtHYj',
        [Locale.jp]: 'https://discord.gg/RRRABMtHYj',
        [Locale.kr]: 'https://discord.gg/RRRABMtHYj',
    }

    youtube: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://www.youtube.com/@tenkafumaofficalchannel6558',
        [Locale.sc]: 'https://www.youtube.com/@tenkafumaofficalchannel6558',
        [Locale.en]: 'https://www.youtube.com/@tenkafumaofficalchannel6558',
        [Locale.jp]: 'https://www.youtube.com/@tenkafumaofficalchannel6558',
        [Locale.kr]: 'https://www.youtube.com/@tenkafumaofficalchannel6558',
    }

    facebook_fanpage: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://www.facebook.com/TenkafuMA',
        [Locale.sc]: 'https://www.facebook.com/TenkafuMA',
        [Locale.en]: 'https://www.facebook.com/TenkafuMA',
        [Locale.jp]: 'https://www.facebook.com/TenkafuMA',
        [Locale.kr]: 'https://www.facebook.com/TenkafuMA',
    }

    facebook_group: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://www.facebook.com/groups/2707800699549152',
        [Locale.sc]: 'https://www.facebook.com/groups/2707800699549152',
        [Locale.en]: 'https://www.facebook.com/groups/2707800699549152',
        [Locale.jp]: 'https://www.facebook.com/groups/2707800699549152',
        [Locale.kr]: 'https://www.facebook.com/groups/2707800699549152',
    }

    tkfmtools: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://purindaisuki.github.io/tkfmtools/',
        [Locale.sc]: 'https://purindaisuki.github.io/tkfmtools/',
        [Locale.en]: 'https://purindaisuki.github.io/tkfmtools/en/',
        [Locale.jp]: 'https://purindaisuki.github.io/tkfmtools/ja/',
        [Locale.kr]: 'https://purindaisuki.github.io/tkfmtools/ko/',
    }

    tkfmvercelapp: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://tkfm.vercel.app/',
        [Locale.sc]: 'https://tkfm.vercel.app/',
        [Locale.en]: 'https://tkfm.vercel.app/',
        [Locale.jp]: 'https://tkfm.vercel.app/',
        [Locale.kr]: 'https://tkfm.vercel.app/',
    }
    
}
</script>
<style lang="sass" scoped>
.hyperlink-class
    text-decoration: none
</style>

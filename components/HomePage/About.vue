<template>
    <v-row>
        <v-spacer></v-spacer>
        <base-expand-card :title="$t('About')" icon="mdi-information-outline" >
            <div slot="content" class="pa-4">
                <h1 v-if="!isMobile" class="mb-8">
                    {{ `${$t('TKFM Data Room')} ver.${$store.state.version}` }}
                </h1>
                <div v-else class="mb-8">
                    <h1>{{ `${$t('TKFM Data Room')}` }}</h1>
                    <h1 class="mt-2">{{ `ver.${$store.state.version}` }}</h1>

                </div>
                <h2 class="mb-4">{{ $t('Introduction') }}</h2>
                <span :class="linkClass" v-html="$util.showPreLineText($t('Introduction-detail'))"></span>
                <h2 class="mt-8 mb-4">{{ $t('Disclaimer') }}</h2>
                <span :class="linkClass" v-html="$util.showPreLineText($t('Disclaimer-detail'))"></span>
                <h2 class="mt-8 mb-4">{{ $t('Game art') }}</h2>
                <span :class="linkClass" v-html="$util.showPreLineText($t('Game art-detail'))"></span>
                <!-- <h2 class="mt-8 mb-4">{{ $t('Special Thanks') }}</h2> -->
                <h2 class="mt-8 mb-4">{{ $t('Feedback') }}</h2>
                <span :class="linkClass">
                    {{ $t('Feedback-detail') }}
                    <a class="hyperlink-class" target="_blank" :href="getLocaleLink(issue)">
                        <span :class="linkClass">{{$t('Feedback-url')}}</span>
                    </a>
                </span>
                <h2 class="mt-8 mb-4">{{ $t('Reference') }}</h2>
                <a class="hyperlink-class" target="_blank" :href="getLocaleLink(tkfmtools)">
                    <span :class="linkClass">{{$t('TenkafuMA Toolbox')}}</span>
                </a>
                <br />
                <a class="hyperlink-class" target="_blank" :href="getLocaleLink(japanTkfmWiki)">
                    <span :class="linkClass">{{$t('天下布魔攻略 Wiki (Japan)')}}</span>
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
export default class About extends Vue {
    getLocaleLink(link: {[lang in Locale]: string}): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        return link[locale]
    }

    get linkClass(): string  {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'subtitle-2', 'subtitle-1', 'subtitle-1', 'subtitle-1', 'subtitle-1')}`
    }

    get isMobile(): boolean {
        return this.$vuetify.breakpoint.name == 'xs';
    }

    issue: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://github.com/hinorpio/TKFM-Data-Room/issues',
        [Locale.sc]: 'https://github.com/hinorpio/TKFM-Data-Room/issues',
        [Locale.en]: 'https://github.com/hinorpio/TKFM-Data-Room/issues',
        [Locale.jp]: 'https://github.com/hinorpio/TKFM-Data-Room/issues',
        [Locale.kr]: 'https://github.com/hinorpio/TKFM-Data-Room/issues',
    }

    tkfmtools: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://purindaisuki.github.io/tkfmtools/',
        [Locale.sc]: 'https://purindaisuki.github.io/tkfmtools/',
        [Locale.en]: 'https://purindaisuki.github.io/tkfmtools/en/',
        [Locale.jp]: 'https://purindaisuki.github.io/tkfmtools/ja/',
        [Locale.kr]: 'https://purindaisuki.github.io/tkfmtools/ko/',
    }

    japanTkfmWiki: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://tenkafuma.wikiru.jp/',
        [Locale.sc]: 'https://tenkafuma.wikiru.jp/',
        [Locale.en]: 'https://tenkafuma.wikiru.jp/',
        [Locale.jp]: 'https://tenkafuma.wikiru.jp/',
        [Locale.kr]: 'https://tenkafuma.wikiru.jp/',
    }
        

}
</script>
<style lang="sass" scoped>
.hyperlink-class
    text-decoration: none
</style>

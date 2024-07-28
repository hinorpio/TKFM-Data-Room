<template>
    <v-row>
        <v-spacer></v-spacer>
        <base-expand-card :title="$t('External Website')" icon="mdi-link" >
            <div slot="content" class="pa-4">
                <h2 class="mb-4">{{ $t('Offical Link') }}</h2>
                <h3><u>{{ $t('Offical') }}</u></h3>
                <a class="hyperlink-class" target="_blank" :href="getLocalStr(offical)">
                    <span :class="linkClass">{{ getLocalStr(offical_str) }}</span>
                </a>
                <br />
                <h3><u>Discord</u></h3>
                <a class="hyperlink-class" target="_blank" :href="getLocalStr(discord)">
                    <span :class="linkClass">{{ getLocalStr(discord_str) }}</span>
                </a>
                <br />
                <h3><u>Youtube</u></h3>
                <a class="hyperlink-class" target="_blank" :href="getLocalStr(youtube)">
                    <span :class="linkClass">{{ getLocalStr(youtube_str) }}</span>
                </a>
                <br />
                <h3><u>Facebook</u></h3>
                <a class="hyperlink-class" target="_blank" :href="getLocalStr(facebook_fanpage)">
                    <span :class="linkClass">{{ getLocalStr(facebook_fanpage_str) }}</span>
                </a>
                <br />
                <a class="hyperlink-class" target="_blank" :href="getLocalStr(facebook_group)">
                    <span :class="linkClass">{{ getLocalStr(facebook_group_str) }}</span>
                </a>
                <br />
                <h2 class="mt-8 mb-2">{{ $t('Useful Tools') }}</h2>
                <a class="hyperlink-class" target="_blank" :href="getLocalStr(tkfmtools)">
                    <span :class="linkClass">{{ getLocalStr(tkfmtools_str) }}</span>
                </a>
                <br />
                <a class="hyperlink-class" target="_blank" :href="getLocalStr(tkfmvercelapp)">
                    <span :class="linkClass">{{ getLocalStr(tkfmvercelapp_str) }}</span>
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
    getLocalStr(link: {[lang in Locale]: string}): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        return link[locale]
    }

    get linkClass(): string  {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'subtitle-2', 'subtitle-1', 'subtitle-1', 'subtitle-1', 'subtitle-1')}`
    }
    
    offical: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://tenkafuma.com/zh-Hant',
        [Locale.sc]: 'https://tenkafuma.com/zh-Hans',
        [Locale.en]: 'https://tenkafuma.com/en',
        [Locale.jp]: 'https://tenkafuma.com/ja',
        [Locale.kr]: 'https://tenkafuma.com/ko',
    }

    offical_str: {[lang in Locale]: string} = {
        [Locale.tc]: '天下布魔官方網站',
        [Locale.sc]: '天下布魔官方网站',
        [Locale.en]: 'TenkafuMA! Offical Website',
        [Locale.jp]: '天下布魔公式ウェブサイト',
        [Locale.kr]: '',
    }

    discord: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://discord.gg/RRRABMtHYj',
        [Locale.sc]: 'https://discord.gg/RRRABMtHYj',
        [Locale.en]: 'https://discord.gg/RRRABMtHYj',
        [Locale.jp]: 'https://discord.gg/RRRABMtHYj',
        [Locale.kr]: 'https://discord.gg/RRRABMtHYj',
    }

    discord_str: {[lang in Locale]: string} = {
        [Locale.tc]: '天下布魔 TenkafuMA! 官方討論區',
        [Locale.sc]: '天下布魔 TenkafuMA! 官方讨论区',
        [Locale.en]: 'TenkafuMA! Chinese Channel',
        [Locale.jp]: '天下布魔 TenkafuMA! 官方討論區',
        [Locale.kr]: '',
    }

    youtube: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://www.youtube.com/@tenkafumaofficalchannel6558',
        [Locale.sc]: 'https://www.youtube.com/@tenkafumaofficalchannel6558',
        [Locale.en]: 'https://www.youtube.com/@tenkafumaofficalchannel6558',
        [Locale.jp]: 'https://www.youtube.com/@tenkafumaofficalchannel6558',
        [Locale.kr]: 'https://www.youtube.com/@tenkafumaofficalchannel6558',
    }

    youtube_str: {[lang in Locale]: string} = {
        [Locale.tc]: '天下布魔 TenkafuMA! Offical Channel',
        [Locale.sc]: '天下布魔 TenkafuMA! Offical Channel',
        [Locale.en]: 'TenkafuMA! Offical Channel',
        [Locale.jp]: '天下布魔 TenkafuMA! Offical Channel',
        [Locale.kr]: '',
    }

    facebook_fanpage: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://www.facebook.com/TenkafuMA',
        [Locale.sc]: 'https://www.facebook.com/TenkafuMA',
        [Locale.en]: 'https://www.facebook.com/TenkafuMA',
        [Locale.jp]: 'https://www.facebook.com/TenkafuMA',
        [Locale.kr]: 'https://www.facebook.com/TenkafuMA',
    }

    facebook_fanpage_str: {[lang in Locale]: string} = {
        [Locale.tc]: '天下布魔 TenkafuMA! 中文粉絲專頁',
        [Locale.sc]: '天下布魔 TenkafuMA! 中文粉丝专页',
        [Locale.en]: 'TenkafuMA! Chinese Fanpage',
        [Locale.jp]: '天下布魔 TenkafuMA! 中国語ファンページ',
        [Locale.kr]: '',
    }

    facebook_group: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://www.facebook.com/groups/2707800699549152',
        [Locale.sc]: 'https://www.facebook.com/groups/2707800699549152',
        [Locale.en]: 'https://www.facebook.com/groups/2707800699549152',
        [Locale.jp]: 'https://www.facebook.com/groups/2707800699549152',
        [Locale.kr]: 'https://www.facebook.com/groups/2707800699549152',
    }

    facebook_group_str: {[lang in Locale]: string} = {
        [Locale.tc]: '天下布魔 TenkafuMA! 中文社團',
        [Locale.sc]: '天下布魔 TenkafuMA! 中文社团',
        [Locale.en]: 'TenkafuMA! Chinese Group',
        [Locale.jp]: '天下布魔 TenkafuMA! 中国語グループ',
        [Locale.kr]: '',
    }

    tkfmtools: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://purindaisuki.github.io/tkfmtools/',
        [Locale.sc]: 'https://purindaisuki.github.io/tkfmtools/',
        [Locale.en]: 'https://purindaisuki.github.io/tkfmtools/en/',
        [Locale.jp]: 'https://purindaisuki.github.io/tkfmtools/ja/',
        [Locale.kr]: 'https://purindaisuki.github.io/tkfmtools/ko/',
    }

    tkfmtools_str: {[lang in Locale]: string} = {
        [Locale.tc]: '天下布魔工具箱',
        [Locale.sc]: '天下布魔工具箱',
        [Locale.en]: 'TenkafuMA Toolboxs',
        [Locale.jp]: '天下布魔道具箱',
        [Locale.kr]: '텐카푸마 툴박스',
    }

    tkfmvercelapp: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://tkfm.vercel.app/',
        [Locale.sc]: 'https://tkfm.vercel.app/',
        [Locale.en]: 'https://tkfm.vercel.app/',
        [Locale.jp]: 'https://tkfm.vercel.app/',
        [Locale.kr]: 'https://tkfm.vercel.app/',
    }

    tkfmvercelapp_str: {[lang in Locale]: string} = {
        [Locale.tc]: '天下布魔戰鬥模擬器',
        [Locale.sc]: '天下布魔战斗模拟器',
        [Locale.en]: 'TenkafuMA Vercel App',
        [Locale.jp]: '天下布魔バトルシミュレーター',
        [Locale.kr]: '',
    }
    
}
</script>
<style lang="sass" scoped>
.hyperlink-class
    text-decoration: none
</style>

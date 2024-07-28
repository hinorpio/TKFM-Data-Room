<template>
    <v-row>
        <v-spacer></v-spacer>
        <base-expand-card :title="getLocalStr(header_str)" icon="mdi-star-shooting-outline" >
            <div slot="content" class="pa-4">
                <h3 class="mb-4">{{ getLocalStr(pending_str) }}</h3>
                <ul>
                    <li>
                        <h3 class="mt-4">{{$t('Language')}} - 日本語</h3>
                    </li>
                    <li>
                        <h3 class="mt-4">{{$t('Language')}} - 한국어</h3>
                    </li>
                </ul>
                <h3 class="my-4">{{ getLocalStr(help_str) }}</h3>
                <a class="hyperlink-class" target="_blank" :href="getLocalStr(discord)">
                    <span :class="linkClass">{{ getLocalStr(discord_str) }}</span>
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
export default class Pending extends Vue {
    getLocalStr(link: {[lang in Locale]: string}): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        return link[locale]
    }

    get linkClass(): string  {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'subtitle-2', 'subtitle-1', 'subtitle-1', 'subtitle-1', 'subtitle-1')}`
    }

    get isMobile(): boolean {
        return this.$vuetify.breakpoint.name == 'xs';
    }

    discord: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://discord.gg/RRRABMtHYj',
        [Locale.sc]: 'https://discord.gg/RRRABMtHYj',
        [Locale.en]: 'https://discord.gg/RRRABMtHYj',
        [Locale.jp]: 'https://discord.gg/RRRABMtHYj',
        [Locale.kr]: 'https://discord.gg/RRRABMtHYj',
    }

    header_str: {[lang in Locale]: string} = {
        [Locale.tc]: '待更新事項',
        [Locale.sc]: '待更新事项',
        [Locale.en]: 'Pending',
        [Locale.jp]: '',
        [Locale.kr]: '',
    }

    discord_str: {[lang in Locale]: string} = {
        [Locale.tc]: '天下布魔 TenkafuMA! 官方討論區',
        [Locale.sc]: '天下布魔 TenkafuMA! 官方讨论区',
        [Locale.en]: 'TenkafuMA! Chinese Channel',
        [Locale.jp]: '天下布魔 TenkafuMA! 官方討論區',
        [Locale.kr]: '',
    }

    pending_str: {[lang in Locale]: string} = {
        [Locale.tc]: '本站目前只是Beta版本, 以下為此版本待更新事項',
        [Locale.sc]: '本站目前只是Beta版本, 以下為此版本待更新事項',
        [Locale.en]: 'This site is currently in Beta version. The following are the pending updates for this version.',
        [Locale.jp]: '',
        [Locale.kr]: '',
    }

    help_str: {[lang in Locale]: string} = {
        [Locale.tc]: '如有玩家願意幫忙收集資料, 請在以下地方聯絡我',
        [Locale.sc]: '如有玩家願意幫忙收集資料, 請在以下地方聯絡我',
        [Locale.en]: 'If any players are willing to help collect data, please contact me at the following places:',
        [Locale.jp]: '',
        [Locale.kr]: '',
    }

}
</script>
<style lang="sass" scoped>
.hyperlink-class
    text-decoration: none
</style>

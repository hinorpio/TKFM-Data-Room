<template>
    <v-row>
        <v-spacer></v-spacer>
        <base-expand-card :title="$t('Pending')" icon="mdi-star-shooting-outline" >
            <div slot="content" class="pa-4">
                <h3 class="mb-4">{{ $t('just beta') }}</h3>
                <a class="hyperlink-class" target="_blank" :href="getLocaleLink(discord)">
                    <span :class="linkClass">{{$t('Discord')}}</span>
                </a>
                <h3 class="mt-4">{{ $t('sc version') }}</h3>
                <h3 class="mt-4">{{ $t('en version') }}</h3>
                <h3 class="mt-4">{{ $t('jp version') }}</h3>
                <h3 class="mt-4">{{ $t('kr version') }}</h3>
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

    discord: {[lang in Locale]: string} = {
        [Locale.tc]: 'https://discord.gg/RRRABMtHYj',
        [Locale.sc]: 'https://discord.gg/RRRABMtHYj',
        [Locale.en]: 'https://discord.gg/RRRABMtHYj',
        [Locale.jp]: 'https://discord.gg/RRRABMtHYj',
        [Locale.kr]: 'https://discord.gg/RRRABMtHYj',
    }
        

}
</script>
<style lang="sass" scoped>
.hyperlink-class
    text-decoration: none
</style>

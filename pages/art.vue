<template>
    <v-layout v-if="isMounted">
        <v-container>
            <v-row>
                <v-spacer></v-spacer>
                <v-card :style="{background: '#424242', width: dialogWidth}" :elevation="0">
                    <v-card-title> 
                        {{ getArtName(art) }}
                        <v-spacer></v-spacer>
                        已取得作者 독군 Dokgun 授權轉載
                    </v-card-title>
                    <v-card-text>
                        {{ `${$t('Author')}: ${art.author}` }}
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-row class="mt-4">
                        <v-col v-for="(path, index) in art.paths" :key="index" :cols="(12/itemsPerRow)" class="pa-2 mt-4" > 
                            <v-img :src="path" :height="itemSize" :width="itemSize" contain/>
                        </v-col>
                    </v-row>
                </v-card>
                <v-spacer></v-spacer>
            </v-row>
        </v-container>
    </v-layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Dispatch } from '@/interface/dispatch'
import { Unit } from '@/interface/unit'
import DispatchSummary from "@/components/Dispatch/DispatchSummary.vue";
import DispatchPassive from "@/components/Dispatch/DispatchPassive.vue";
import { Locale } from "~/plugins/utils/enums";
import { Art } from "~/interface/art";


@Component({
    components: {
        DispatchSummary,
        DispatchPassive
    }
})
export default class DispatchPage extends Vue {

    isMounted: boolean = false 
    dialogWidth: String = '80em';
    metaCode: string = 'Art-001'

    art: Art | undefined

    get itemsPerRow (): number {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 3, 4, 6, 6, 6)
    }

    get itemSize (): string {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '8em', '10em', '8em', '10em', '12em')
    }

    getArtName(art: Art): string{
        const locale = this.$i18n.locale as keyof typeof Locale;
        const result = art.name[locale];
        return result ?? ''
    }

    mounted(): void{
        this.isMounted = true
        this.art = this.$util.getArt(this.metaCode)
    }
}

</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
</style>
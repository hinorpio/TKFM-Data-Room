<template>
    <div>
        <v-col>
            <h3>{{$t('Background')}}</h3>
            <div class="ml-4 pl-2">
                <h2 class="body-1" v-html="$util.showPreLineText(getBackgroundText(unit))"></h2>
            </div>
            
        </v-col>
        <v-divider class="my-2"></v-divider>
        <!---------------------------------------------------------------------------->
        <v-row class="pa-2">
            <v-col :cols="6">
                <h3>{{$t('Released Date')}}</h3>
                <v-row class="mt-3 pl-6">
                    <span class="body-1">{{unit.releaseDate}}</span>
                </v-row>
            </v-col>
            <v-col :cols="6">
                <h3>{{$t('Eternal') + ' / ' + $t('Limited')}}</h3>
                <v-row class="mt-3 pl-6">
                    <span class="body-1">{{showLimited(unit.isLimited)}}</span>
                </v-row>
            </v-col>
        </v-row>
        <v-divider class="mt-6"></v-divider>
        <!---------------------------------------------------------------------------->
        <v-row class="pa-2">
            <v-col>
                <h3>{{$t('Abbreviation')}}</h3>
                <div>
                    <v-chip v-for="(f, index) in getUnitAbbreviation(unit)" :key="index" class="ma-2" color="primary" >
                        {{f}}
                    </v-chip>
                </div>
            </v-col>
        </v-row>
        <v-divider class="mt-1 mb-2"></v-divider>
        <!---------------------------------------------------------------------------->
        <v-row class="pt-4 px-2">
            <v-col>
                <h3>{{$t('Tag')}}</h3>
                <div v-if="unit.tagList.length > 0">
                    <v-chip v-for="(f, index) in unit.tagList" :key="index" class="ma-2" color="green" >
                        {{showTag(f)}}
                    </v-chip>
                </div>
                <div v-else class="mt-2 ml-4">
                    <span class="font-weight-bold">{{ $t('Not available from recruitment') }}</span>
                </div>
            </v-col>
        </v-row>
        <v-divider class="my-4"></v-divider>
        <!---------------------------------------------------------------------------->
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale } from '@/plugins/utils/enums'
import { Unit } from '@/interface/unit'
import { Tag } from '@/interface/tag'

@Component
export default class GeneralTab extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    unit!: Unit;

    showLimited(isLimited: boolean): string {
        return isLimited ? this.$t('Limited') : this.$t('Eternal');
    }

    showTag(ID: number): null | string  {
        try {
            const tag: Tag = this.$util.getTag(ID);
            const locale = this.$i18n.locale as keyof typeof Locale;
            const result = tag.name[locale];
            return result ?? '';
        } catch (error) {
            return '';
        }
    }

    getUnitAbbreviation(unit: Unit): string[]{
        const locale = this.$i18n.locale as keyof typeof Locale;
        const abbreviations = unit.abbreviation[locale];
        return abbreviations ?? []
    }

    getBackgroundText(unit: Unit): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        const background = unit.background[locale];
        return background ?? ''
    }
}
</script>


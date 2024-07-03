<template>
    <v-row>
        <v-card v-for="(dispatch, index) in data" :key="index" class="outline-box ma-2" outline color="white" :max-width="imgWidth" >
            <v-card-text class="pa-0">
                <v-col>
                    <v-img :src="getBannerImage(dispatch)" contain></v-img>
                    <v-btn color="green" outlined block small>
                        {{$t('Potential Material')}}
                    </v-btn>
                    <v-row class="justify-space-between py-4">
                        <v-img v-for="(icon, index) in getItemIcons(dispatch, 'POTENTIAL')" :key="index" :src="icon" height="3em" width="3em" contain/>
                    </v-row>
                    <v-btn color="pink lighten-3" outlined block small>
                        {{$t('Discipline Item')}}
                    </v-btn>
                    <v-row class="justify-space-between py-4">
                        <v-img v-for="(icon, index) in getItemIcons(dispatch, 'DISCIPLINE')" :key="index" :src="icon" height="3em" width="3em" contain/>
                    </v-row>
                </v-col>
            </v-card-text> 
        </v-card>
    </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Dispatch } from '@/interface/dispatch'
import { Locale, ItemType } from "@/plugins/utils/enums";

@Component
export default class DispatchPassive extends Vue {
    @Prop({ type: Array, required: true, default: {} })
    data!: Dispatch[];

    get imgWidth(): string {
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return '20%';
            case 'sm': return '10%';
            case 'md': return '15%';
            case 'lg': return '12.5%';
            case 'xl': return '19%';
            default: return '10%';
        }
    }

    getBannerImage(dispatch: Dispatch): string{
        const locale = this.$i18n.locale as keyof typeof Locale
        const image = dispatch.image[locale]
        return (image)? image :''
    }

    getItemIcons(dispatch: Dispatch, type: String): string[]{
        const itemType = type as keyof typeof ItemType
        return dispatch.item
            .map(item => this.$util.getItem(item))
            .filter(item => (item !== undefined)?item.type === type :false)
            .map(item => (item !== undefined)?item.icon :'')
    }

}

</script>
<style lang="sass" scoped>
.outline-box
    padding: 1px
    width: 100%
</style>
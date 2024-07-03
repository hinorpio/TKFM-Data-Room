<template>
    <v-row>
        <v-spacer></v-spacer>
        <v-col v-for="(dispatch, index) in data" :key="index" :cols="6" :xl="2" :lg="3" :md="3" :sm="6" :xs="6">
            <v-card class="outline-box" outline color="grey darken-4" >
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
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Dispatch } from '@/interface/dispatch'
import { Locale, ItemType } from "@/plugins/utils/enums";

@Component
export default class DispatchSummary extends Vue {
    @Prop({ type: Array, required: true, default: {} })
    data!: Dispatch[];

    get imgWidth(): string {
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return '45%';
            case 'sm': return '47.5%';
            case 'md': return '18%';
            case 'lg': return '18%';
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
    padding: 3px
    width: 100%
</style>
<template>
    <div>
        <v-card v-for="(dispatch, index) in data" :key="index" class="outline-box mb-2" outline color="grey darken-4" >
            <v-card-text>
                <v-row class="align-center">
                    <v-col :cols="12" :xl="6" :lg="7" :md="12" :sm="7" :xs="12">
                        <v-img contain>
                            <template v-slot:default>
                                <img :src="getBannerImage(dispatch)" :lazy-src="getBannerImage(dispatch)" alt="Image" style="object-fit: contain; width: 100%;">
                            </template>
                        </v-img>
                    </v-col>
                    <v-col :cols="12" :xl="6" :lg="5" :md="12" :sm="5" :xs="12">
                        <v-row>
                            <v-col class="py-0 my-1" :cols="12" :xl="6" :lg="12" :md="6" :sm="12" :xs="12">
                                <v-btn color="green" outlined block small>
                                    {{$t('Potential Material')}}
                                </v-btn>
                                <v-row class="justify-space-between my-1">
                                    <v-img v-for="(icon, index) in getItemIcons(dispatch, 'POTENTIAL')" :key="index" :src="icon" :height="iconSize" :width="iconSize" contain/>
                                </v-row>
                            </v-col>
                            <v-col class="py-0 my-1" :cols="12" :xl="6" :lg="12" :md="6" :sm="12" :xs="12">
                                <v-btn color="pink lighten-3" outlined block small>
                                    {{$t('Discipline Item')}}
                                </v-btn>
                                <v-row class="justify-space-between my-1">
                                    <v-img v-for="(icon, index) in getItemIcons(dispatch, 'DISCIPLINE')" :key="index" :src="icon" :height="iconSize" :width="iconSize" contain/>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                    
                </v-row>
            </v-card-text>
        </v-card>
    </div>
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
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '45%', '47.5%', '18%', '18%', '19%')
    }

    get iconSize(): string {
        return this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, '2.5em', '3em', '3em', '3em', '3em')
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
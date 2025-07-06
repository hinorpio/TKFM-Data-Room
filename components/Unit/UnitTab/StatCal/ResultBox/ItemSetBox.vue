<template>
    <v-card class="outline-box" outlined color="white">
        <v-card-text class="pa-4">
            <v-row class="pa-0">
                <v-col v-for="(item, index) in summary" :key="index" :cols="12" :xl="4" :lg="6" :md="6" :sm="4" :xs="12">
                    <v-row class="align-center px-1"> 
                        <v-avatar size="2em" tile>
                            <v-img :src="showMaterialIcon(item)"  />
                        </v-avatar>
                        <span :class="itemFontSize">
                            {{ showMaterialText(item) }}
                        </span>
                        <v-spacer></v-spacer>
                        <span :class="itemFontSize">
                            {{ item.quantity }}
                        </span>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { Locale } from '@/plugins/utils/enums'
import { ItemQty } from "~/interface/item";

@Component
export default class ItemSetBox extends Vue {
    @Prop({ type: Array, required: true, default: [] })
    summary!: ItemQty[];

    get itemFontSize(): string {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'body-2', 'body-2', 'body-1', 'body-1', 'body-1')} font-weight-bold`
    }
    
    showMaterialIcon(item: ItemQty): string {
        if(this.$util.isItemCode(item.code))
            return this.$util.getItemIcon(item.code) ?? ''
        else
            return item.code
    }

    showMaterialText(item: ItemQty): string {
        if(this.$util.isItemCode(item.code)){
            const locale = this.$i18n.locale as keyof typeof Locale
            const material = this.$util.getItem(item.code)
            return material?.name[locale] ?? ''
        }else{
            return this.$t('Character Essence') as string;
        }
    }

}
</script>
<style lang="sass" scoped>
::v-deep .v-card__text
    background: #424242
</style>
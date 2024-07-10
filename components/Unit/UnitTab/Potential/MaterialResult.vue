<template>
    <div>
        <v-row class="my-4 mx-1 align-center">
            <v-icon class="mr-2"> 
                mdi-invoice-list 
            </v-icon>
            <span class="title font-weight-bold">{{ $t('Required Material') }}</span>
            <v-btn class="ml-4" x-small @click="toggleShowCombined">
                {{ showCombinedText }}
            </v-btn>
        </v-row>
        <v-card class="outline-box" outlined color="white">
            <v-card-text class="pa-4">
                <v-row class="pa-0">
                    <v-col v-for="(item, index) in summary" :key="index" :cols="6" :xl="3" :lg="4" :md="4" :sm="4" :xs="4">
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
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { Locale } from '@/plugins/utils/enums'
import { MaterialSummary } from '@/interface/potential'

@Component
export default class MaterialResult extends Vue {
    @Prop({ type: Array, required: true, default: [] })
    summary!: MaterialSummary[];

    @Prop({ type: Boolean, required: true, default: false })
    showCombined!: boolean;

    localShowCombined: boolean = this.showCombined;

    get itemFontSize(): string {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'body-2', 'body-2', 'body-1', 'body-1', 'body-1')} font-weight-bold`
    }

    get showCombinedText(): string {
        return (this.showCombined)
            ? this.$t('Show Combined Material')
            : this.$t('Show Actual Material')
    }

    showMaterialIcon(item: MaterialSummary): string {
        return this.$util.getItemIcon(item.code) ?? ''
    }

    showMaterialText(item: MaterialSummary): string {
        const locale = this.$i18n.locale as keyof typeof Locale
        const material = this.$util.getItem(item.code)
        return material?.name[locale] ?? ''
    }

    @Watch('localShowCombined')
    onLocalShowCombinedChange(newVal: boolean): void {
        this.$emit("update:showCombined", newVal);
    }

    toggleShowCombined(): void {
        this.localShowCombined = !this.localShowCombined;
    }
}
</script>

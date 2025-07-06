<template>
    <div>
        <v-card class="outline-box mt-2" outlined color="white">
            <v-card-text class="pa-4">
                <v-row class="pa-0">
                    <v-col v-for="(buff, index) in summary" :key="index" :cols="4" :xl="4" :lg="6" :md="6" :sm="4" :xs="4">
                        <v-row class="align-center px-1"> 
                            <v-avatar size="2em" tile class="mr-2">
                                <v-img :src="showBuffIcon(buff)"  />
                            </v-avatar>
                            <span :class="itemFontSize">
                                {{ showBuffText(buff) }}
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
import { Component, Prop } from "vue-property-decorator";
import { StatSummary } from '~/interface/stat/potential'

@Component
export default class PotBuffResult extends Vue {
    @Prop({ type: Array, required: true, default: [] })
    summary!: StatSummary[];

    get itemFontSize(): string {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'body-2', 'body-2', 'body-1', 'body-1', 'body-1')} font-weight-bold`
    }

    showBuffIcon(buff: StatSummary): string {
        return this.$util.getPotentialBuffIcon(buff.code) ?? ''
    }

    showBuffText(buff: StatSummary): string {
        switch (buff.code) {
            case 'PASSIVE':
                return (buff.value === 3) ? "1 & 2" : buff.value.toString();
            default:
                return `${buff.value}%`;
        }
    }
}
</script>
<style lang="sass" scoped>
::v-deep .v-card__text
    background: #424242
</style>
<template>
    <div>
        <v-row class="my-4 mx-1 align-center">
            <v-icon class="mr-2" color="deep-purple">mdi-pot-steam</v-icon>
            <span class="title font-weight-bold">{{ $t('Potential') }}</span>
        </v-row>
        <item-set-box :summary="potSummary.summary" />
        <pot-buff-result :summary="potSummary.statSummary" />
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { CalculatedPotSummary } from "~/interface/stat/potential";
import PotBuffResult from "./PotBuffResult.vue";
import ItemSetBox from "./ItemSetBox.vue";

@Component({
    components: {
        ItemSetBox,
        PotBuffResult
    }
})
export default class PotResult extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    potSummary!: CalculatedPotSummary;

}
</script>
<style lang="sass" scoped>
::v-deep .v-card__text
    background: #424242
</style>
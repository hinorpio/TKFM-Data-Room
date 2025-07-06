<template>
    <div>
        <v-row class="my-4 mx-1 align-center">
            <v-icon class="mr-2" color="amber">mdi-star</v-icon>
            <span class="title font-weight-bold">{{ $t('Star') }}</span>
        </v-row>
        <item-set-box :summary="starSummary.summary" />
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { CalculatedStarSummary } from "~/interface/stat/star";
import ItemSetBox from "./ItemSetBox.vue";

@Component({
    components: {
        ItemSetBox,
    }
})
export default class StarResult extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    starSummary!: CalculatedStarSummary;

}
</script>
<style lang="sass" scoped>
::v-deep .v-card__text
    background: #424242
</style>
<template>
    <div>
        <v-row class="my-4 mx-1 align-center">
            <v-icon class="mr-2" color="grey lighten-3">mdi-star-four-points</v-icon>
            <span class="title font-weight-bold">{{ $t('Lib') }}</span>
        </v-row>
        <item-set-box :summary="libSummary.summary" />
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { CalculatedLibSummary } from "~/interface/stat/lib";
import ItemSetBox from "./ItemSetBox.vue";

@Component({
    components: {
        ItemSetBox,
    }
})
export default class LibResult extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    libSummary!: CalculatedLibSummary;

}
</script>
<style lang="sass" scoped>
::v-deep .v-card__text
    background: #424242
</style>
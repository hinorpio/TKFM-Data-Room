<template>
    <div>
        <v-row class="my-4 mx-1 align-center">
            <v-icon class="mr-2" color="deep-purple lighten-2" aria-hidden="true">mdi-creation</v-icon>
            <h3 class="title font-weight-bold white--text">{{ $t('limitBreak.title') }}</h3>
        </v-row>
        <item-set-box :summary="limitBreakSummary.summary" />
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { CalculatedLimitBreakSummary } from "~/interface/stat/limitBreak";
import ItemSetBox from "./ItemSetBox.vue";

@Component({
    components: {
        ItemSetBox,
    },
})
export default class LimitBreakResult extends Vue {
    @Prop({ type: Object, required: true })
    limitBreakSummary!: CalculatedLimitBreakSummary;
}
</script>

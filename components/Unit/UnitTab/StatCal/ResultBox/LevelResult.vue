<template>
    <div>
        <v-row class="my-4 mx-1 align-center">
            <v-icon class="mr-2" color="green">mdi-stairs</v-icon>
            <span class="title font-weight-bold">{{ $t('Level') }}</span>
            <v-spacer></v-spacer>
            <span class="subtitle font-weight-bold">{{ $t('Exp') }} : {{ formattedExp }}</span>
        </v-row>
        <item-set-box :summary="levelSummary.summary" />
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { CalculatedLevelSummary } from "~/interface/stat/level";
import ItemSetBox from "./ItemSetBox.vue";

@Component({
    components: {
        ItemSetBox,
    }
})
export default class LevelResult extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    levelSummary!: CalculatedLevelSummary;

    get formattedExp(): string{
        return this.$util.formatNumberWithCommas(this.levelSummary.exp)
    }

}
</script>
<style lang="sass" scoped>
::v-deep .v-card__text
    background: #424242
</style>
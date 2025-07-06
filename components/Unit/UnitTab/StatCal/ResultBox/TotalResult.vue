<template>
    <div>
        <item-set-box class="my-2" v-if="potTypeSummary.length > 0" :summary="potTypeSummary" />
        <item-set-box class="my-2" v-if="evolveTypeSummary.length > 0" :summary="evolveTypeSummary" />
        <item-set-box class="my-2" v-if="otherTypeSummary.length > 0" :summary="otherTypeSummary" />
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import ItemSetBox from "./ItemSetBox.vue";
import { ItemQty } from "~/interface/item";

@Component({
    components: {
        ItemSetBox,
    }
})
export default class TotalResult extends Vue {
    @Prop({ type: Array, required: true, default: [] })
    potTypeSummary!: ItemQty[];

    @Prop({ type: Array, required: true, default: [] })
    evolveTypeSummary!: ItemQty[];

    @Prop({ type: Array, required: true, default: [] })
    otherTypeSummary!: ItemQty[];

}
</script>
<style lang="sass" scoped>
::v-deep .v-card__text
    background: #424242
</style>
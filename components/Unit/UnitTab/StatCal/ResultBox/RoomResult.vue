<template>
    <div>
        <v-row class="my-4 mx-1 align-center">
            <v-icon class="mr-2" color="pink accent-1">mdi-heart</v-icon>
            <span class="title font-weight-bold">{{ $t('Room') }}</span>
            <v-spacer></v-spacer>
            <span class="subtitle font-weight-bold">{{ $t('Exp') }} : {{ roomSummary.exp }}</span>
        </v-row>
        <item-set-box :summary="roomSummary.summary" />
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { CalculatedRoomSummary } from "~/interface/stat/room";
import ItemSetBox from "./ItemSetBox.vue";
import { ItemQty } from "~/interface/item";

@Component({
    components: {
        ItemSetBox,
    }
})
export default class RoomResult extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    roomSummary!: CalculatedRoomSummary;

    @Prop({ type: Number, required: true, default: 4 })
    roomItemLevel!: number;

}
</script>
<style lang="sass" scoped>
::v-deep .v-card__text
    background: #424242
</style>
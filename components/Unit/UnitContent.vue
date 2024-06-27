<template>
    <div class="px-0">
        <unit-header :unit="unit" />
        <v-divider class="my-2"></v-divider>
        <unit-tab :unit="unit" />
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import UnitHeader from "./UnitHeader.vue";
import UnitTab from "./UnitTab/UnitTab.vue";
import { Unit } from '@/interface/unit';

@Component({
    components: {
        UnitHeader,
        UnitTab,
    },
})
export default class UnitContent extends Vue {
    @Prop({ required: true, default: {} })
    unit!: Unit;
}
</script>
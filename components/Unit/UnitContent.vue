<template>
    <div class="px-0">
        <unit-header :unit="unit" />
        <v-divider class="my-2"></v-divider>
        <unit-tab :unit="unit" />
    </div>
</template>
<script lang="js">
import Vue from "vue";
import UnitHeader from "./UnitHeader.vue";
import UnitTab from "./UnitTab/UnitTab.vue";

export default Vue.extend({
    components: {
        UnitHeader,
        UnitTab
    },
    props: {
        unit: {
            type: Object,
            required: true,
            default: {},
        },
    },
})
</script>

./UnitTab/OtherVersionTab.vue
<template>
    <v-layout v-if="isMounted">
        <v-container>
            <dispatch-summary :data="dispatchData" />
            <!-- <dispatch-passive :data="dispatchData" /> -->
        </v-container>
    </v-layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Dispatch } from '@/interface/dispatch'
import DispatchSummary from "@/components/Dispatch/DispatchSummary.vue";
import DispatchPassive from "@/components/Dispatch/DispatchPassive.vue";

@Component({
    components: {
        DispatchSummary,
        DispatchPassive
    }
})
export default class DispatchPage extends Vue {

    isMounted: boolean = false 
    dispatchData: Dispatch[] = []
    
    mounted(): void{
        this.dispatchData = this.$util.getAllDispatch()
        this.isMounted = true
    }
}

</script>
<style lang="sass" scoped>
::v-deep .v-card__text
  background: #424242
</style>
<template>
    <v-layout>
        <v-container>
            <about class="mb-4 pa-2"/>
            <external class="mb-4 pa-2"/>
            <logs class="mb-4 pa-2"/>
        </v-container>
    </v-layout>
  </template>
<script lang="ts">
import Vue from "vue";
import { Component } from 'vue-property-decorator';
import About from "~/components/HomePage/About.vue";
import External from "~/components/HomePage/External.vue";
import Logs from "~/components/HomePage/Logs.vue";

@Component({
    components:{
        About,
        External,
        Logs
    }
})
export default class IndexPage extends Vue {
    showDetail: Boolean = false
    cardWidth: String = '75em'

    toogleShowDetail(): void{
        this.showDetail = !this.showDetail
    }
}
</script>
<style lang="sass" scoped>

</style>

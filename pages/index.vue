<template>
    <v-layout>
        <v-container>
            <external />
        </v-container>
    </v-layout>
  </template>
<script lang="ts">
import Vue from "vue";
import { Component } from 'vue-property-decorator';
import External from "~/components/HomePage/External.vue";

@Component({
    components:{
        External
    }
})
export default class IndexPage extends Vue {
    showDetail: Boolean = false
    dialogWidth: String = '75em'

    toogleShowDetail(): void{
        this.showDetail = !this.showDetail
    }
}
</script>
<style lang="sass" scoped>

</style>

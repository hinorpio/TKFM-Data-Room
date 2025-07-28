<template>
    <v-layout>
        <v-container>
            <link-card class="mb-4 pa-2"/>
        </v-container>
    </v-layout>
  </template>
<script lang="ts">
import Vue from "vue";
import { Component } from 'vue-property-decorator';
import LinkCard from "~/components/External/LinkCard.vue";

@Component({
    components:{
        LinkCard,
    }
})
export default class ExternalPage extends Vue {
    showDetail: Boolean = false
    cardWidth: String = '75em'

    toogleShowDetail(): void{
        this.showDetail = !this.showDetail
    }
}
</script>
<style lang="sass" scoped>

</style>

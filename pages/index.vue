<template>
    <v-layout>
        <v-container>
            <about class="mb-4 pa-2"/>
        </v-container>
    </v-layout>
  </template>
<script lang="ts">
import Vue from "vue";
import { Component } from 'vue-property-decorator';
import About from "~/components/HomePage/About.vue";

@Component({
    components:{
        About,
    }
})
export default class IndexPage extends Vue {
    showDetail: Boolean = false
    cardWidth: String = '75em'

}
</script>
<style lang="sass" scoped>

</style>

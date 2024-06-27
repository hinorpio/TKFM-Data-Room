<template>
  <v-container :style="{background: '#424242'}">
    <v-row class="pt-4" :max-height="imageHeight">
      <v-col :xl="6" :lg="6" :md="6" :sm="6" :xs="12">
        <v-img :src="getErrorImage()" :max-height="imageHeight" contain class="px-4"/>
      </v-col>
      <v-col :xl="6" :lg="6" :md="6" :sm="6" :xs="12">
        <div :class="contentPaddingTop">
          <p :class="titleClass">{{ $t("Opps...Something is wrong Nya") }}</p>
          <p :class="subtitleClass">{{ errorMessage }}</p>
          <v-btn :color="$store.state.themeColor" outlined @click="goPrevPage">
            <v-icon>mdi-arrow-left</v-icon>
            {{$t('Previous Page')}}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>   
</template>

<script lang="ts">
import Vue from "vue";
import { NuxtError } from "@nuxt/types";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class ErrorLayout extends Vue {
  @Prop({ type: Object, required: true, default: {} })
  error!: NuxtError;

  errorImg: String = require("@/assets/error.png")

  get titleClass(): string {
    switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'headline font-weight-bold'
        case 'sm': return 'headline font-weight-bold'
        case 'md': return 'display-1 font-weight-bold'
        case 'lg': return 'display-1 font-weight-bold'
        case 'xl': return 'display-1 font-weight-bold'
        default: return 'display-1 font-weight-bold'
    }
  }
  get subtitleClass(): string {
    switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'subtitle-2'
        case 'sm': return 'subtitle-2'
        case 'md': return 'subtitle-1'
        case 'lg': return 'subtitle-1'
        case 'xl': return 'subtitle-1'
        default: return 'subtitle-1'
    }
  }
  get imageHeight(): string {
    switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '40vh'
        case 'sm': return '70vh'
        case 'md': return '70vh'
        case 'lg': return '70vh'
        case 'xl': return '70vh'
        default: return '70vh'
    }
  }
  get contentPaddingTop(): string {
    switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'pt-6'
        case 'sm': return 'pt-6'
        case 'md': return 'pt-10'
        case 'lg': return 'pt-12'
        case 'xl': return 'pt-12'
        default: return 'pt-12'
    }
  }

  get errorMessage(): string {
    const error = this.$util.getCustomError(this.error.statusCode ?? 500)
    return `ERROR: ${error.message}`
  }

  getErrorImage(): string {
    return (this.error.message)?this.$util.getErrorImage(this.error.message) : ''
  }

  goPrevPage(): void{
    this.$router.go(-1);
  }
}
</script>

<style lang="sass" scoped>
::v-deep .v-window__container
  background-color: #424242
</style>

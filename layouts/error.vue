<template>
  <v-container :style="{background: '#424242'}">
    <v-row class="pt-4" :max-height="imageHeight">
      <v-col :xl="6" :lg="6" :md="6" :sm="6" :xs="12">
        <!-- <v-img :src="$util.getErrorImage(error.message)" :max-height="imageHeight" contain class="px-4"/> -->
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

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed:{
    titleClass(){
      switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'headline font-weight-bold'
          case 'sm': return 'headline font-weight-bold'
          case 'md': return 'display-1 font-weight-bold'
          case 'lg': return 'display-1 font-weight-bold'
          case 'xl': return 'display-1 font-weight-bold'
      }
    },
    subtitleClass(){
      switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'subtitle-2'
          case 'sm': return 'subtitle-2'
          case 'md': return 'subtitle-1'
          case 'lg': return 'subtitle-1'
          case 'xl': return 'subtitle-1'
      }
    },
    imageHeight(){
      switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '40vh'
          case 'sm': return '70vh'
          case 'md': return '70vh'
          case 'lg': return '70vh'
          case 'xl': return '70vh'
      }
    },
    contentPaddingTop(){
      switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'pt-6'
          case 'sm': return 'pt-6'
          case 'md': return 'pt-10'
          case 'lg': return 'pt-12'
          case 'xl': return 'pt-12'
      }
    },
    errorMessage(){
      var message = (this.error.customError)
        ? this.error.message
        : (this.error.statusCode == 404)
          ? 'PAGE_NOT_FOUND'
          : 'UNKNOWN_ERROR'
      return `ERROR: ${message}`
    }
  },
  methods: {
    goPrevPage(){
      this.$router.go(-1);
    }
  },
  data () {
    return {
      errorImg: require("@/assets/error.png"),
    }
  },
})
</script>

<style lang="sass" scoped>
::v-deep .v-window__container
  background-color: #424242
</style>

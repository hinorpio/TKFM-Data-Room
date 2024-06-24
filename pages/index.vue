<template>
  <v-container>
      <v-layout>
          <v-row>
              <v-spacer></v-spacer>
              <v-card :style="{background: '#424242', width: dialogWidth}">
                  <v-toolbar color="000000" height="50em" @click="toogleShowDetail" >
                      <v-row class="align-center">
                          <v-btn v-bind="attrs" v-on="on" icon>
                              <v-icon> mdi-translate </v-icon>
                          </v-btn>
                          <span class="ml-4 body-1 font-weight-bold">
                              ayo
                          </span>
                          <v-spacer></v-spacer>
                          <v-btn icon>
                              <v-icon>{{ showDetail ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                          </v-btn>
                      </v-row>
                  </v-toolbar>
                  <v-expand-transition>
                      <div v-show="showDetail">
                          <v-card-text>
                              yoyoyooy
                          </v-card-text>
                      </div>
                  </v-expand-transition>
              </v-card>
              <v-spacer></v-spacer>
          </v-row>
      </v-layout>
  </v-container>
</template>
<script lang="js">
import Vue from "vue";

export default Vue.extend({
  methods: {
      toogleShowDetail(){
          this.showDetail = !this.showDetail
      }
  },
  data() {
      return {
          showDetail: false,
          dialogWidth: '75em',
      }
  }
})
</script>
<style lang="sass" scoped>

</style>

<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
              <v-icon> mdi-translate </v-icon>
          </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title @click="handleSetLanguage('en')">English</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title @click="handleSetLanguage('zh')">繁體中文</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title @click="handleSetLanguage('cn')">簡體中文</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Locale } from '@/plugins/utils/enums'

@Component
export default class LanguageButton extends Vue {
  handleSetLanguage(lang: Locale) {
      this.$i18n.locale = lang

      // if(this.$router.history.current.query != {}){
      //   var query = '?'
      //   for (const [key, value] of Object.entries(this.$router.history.current.query)) {
      //     query += `${key}` + '=' + `${value}`
      //   }
      // }
      // console.log(query);
      // this.$store.dispatch('setLocale', lang)
      // this.$router.push({
      //     path: "/" + lang + '/' + this.$router.history.current.path.split("/").filter((f,index) => index > 1 ).join("/") + query,
      //     query: this.$router.history.current.query
      // })
      location.reload()
  }
}
</script>

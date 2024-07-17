<template>
  <div class="text-center">
    <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" >
              <v-icon> mdi-translate </v-icon>
          </v-btn>
        </template>
        <v-list color="#424242">
          <v-list-item>
            <v-list-item-title>
              <v-btn block color="transparent" @click="handleSetLanguage('en')">English</v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn block color="transparent" @click="handleSetLanguage('tc')">繁體中文</v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn block color="transparent" @click="handleSetLanguage('sc')">簡體中文</v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn block color="transparent" @click="handleSetLanguage('jp')">日本語</v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn block color="transparent" @click="handleSetLanguage('kr')">한국어</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleSetLanguage(lang) {
      if(lang !== this.$i18n.locale){
        const originalLocale = this.$i18n.locale
        const langPrefix = (lang === 'tc')?`` :`/${lang}`
        console.log(this.$router.history.current.path);
        const path = this.$router.history.current.path
          .split("/")
          .filter((f,index) => (originalLocale === 'tc')?index > 1 :index > 2 )
          // .filter((f,index) => (originalLocale === 'tc')?index > 0 :index > 1 )
          .join("/")
        location.replace(`${langPrefix}/${path}`)
      }
    },
  }
}
</script>
<style lang="sass" scoped>
::v-deep .v-btn
    text-transform: unset !important
</style>

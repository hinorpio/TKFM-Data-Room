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
              <v-btn block color="transparent" @click="handleSetLanguage('sc')">简体中文</v-btn>
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
        var query = ''
        if(this.$router.history.current.query != {}){
          var query = '?'
          for (const [key, value] of Object.entries(this.$router.history.current.query)) {
            query += `${key}=${value}`
          }
        }
        const path = this.$router.history.current.path
          .split("/")
          .filter((f,index) => (originalLocale === 'tc')?index > 0 :index > 1 )
          .join("/")
        location.replace(`${langPrefix}/${path}${query}`)
      }
    },
  }
}
</script>
<style lang="sass" scoped>
::v-deep .v-btn
    text-transform: unset !important
</style>

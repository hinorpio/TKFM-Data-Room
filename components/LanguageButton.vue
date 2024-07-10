<template>
  <div class="text-center">
    <v-menu left bottom >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" >
              <v-icon> mdi-translate </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title @click="handleSetLanguage('en')">English</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="handleSetLanguage('tc')">繁體中文</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="handleSetLanguage('sc')">簡體中文</v-list-item-title>
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
          this.$store.dispatch('setLocale', lang)
          const langPrefix = (lang === 'tc')?`` :`/${lang}`
          const path = this.$router.history.current.path
            .split("/")
            .filter((f,index) => (lang !== 'tc')? index > 0 : index > 1)
            .join("/")
          location.replace(`${langPrefix}/${path}`)
        }
    },
  }
}
</script>

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

<script>
export default {
  methods: {
    handleSetLanguage(lang) {
        this.$store.dispatch('setLocale', lang)
        const langPrefix = (lang === 'zh')?`` :`/${lang}`
        const path = this.$router.history.current.path.split("/")
          .filter((f,index) => (lang !== 'zh')? index > 0 : index > 1)
          .join("/")
        location.replace(`${langPrefix}/${path}`)
    },
  }
}
</script>

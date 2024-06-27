<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app clipped color="#323232">
      <v-list shaped>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar fixed app clipped-left :color="$store.state.themeColor" dense >
      <v-btn icon @click.stop="miniVariant = !miniVariant" >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'double-right' : 'double-left'}` }}</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title color="white">
        {{ $vuetify.breakpoint.name }}
        {{ $i18n.locale }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <language-button />
    </v-app-bar>

    <v-main :style="{background: '#424242'}">
      <v-container :style="{background: '#424242'}">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>

</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

interface MenuItem {
  icon: string
  title: string
  to: string
}

@Component
export default class DefaultLayout extends Vue {

  drawer: Boolean = false
  miniVariant: Boolean = false
  title: String = 'TKFM Reference Room'
  items: MenuItem[] = [
    {
      icon: 'mdi-apps',
      title: this.$t('Home Page'),
      to: '/' + this.$i18n.locale + '/'
    },
    {
      icon: 'mdi-account-group',
      title: this.$t('Unit Info'),
      to: '/' + this.$i18n.locale + '/unit/'
    },
    {
      icon: 'mdi-book-edit',
      title: this.$t('Recruitment'),
      to: '/' + this.$i18n.locale + '/recruitment/'
    },
    {
      icon: 'mdi-timeline-text',
      title: this.$t('Event Timeline'),
      to: '/' + this.$i18n.locale + '/event/'
    }
  ]
}
</script>
<style lang="sass" scoped>
::v-deep .v-window__container
  background-color: #424242
</style>

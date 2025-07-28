<template>
  <v-app>
    <v-navigation-drawer v-if="r18WarningAcknowledged" v-model="drawer" fixed app clipped color="#323232">
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
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant" >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'double-right' : 'double-left'}` }}</v-icon>
      </v-btn> -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title color="white">
        <h5>{{ $t('TKFM Data Room') }}</h5>
        <!-- {{ $vuetify.breakpoint.name }} -->
        <!-- {{ $i18n.locale }} -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <download-button />
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
import LanguageButton from "~/components/LanguageButton.vue";
import DownloadButton from "~/components/DownloadButton.vue";
import { Locale } from "~/plugins/utils/enums";

interface MenuItem {
  icon: string
  title: string
  to: string
}

@Component({
  components:{
    LanguageButton,
    DownloadButton,
  }
})
export default class DefaultLayout extends Vue {

  showR18Warning: Boolean = true
  drawer: Boolean = false
  miniVariant: Boolean = false
  title: String = 'TKFM Reference Room'
  items: MenuItem[] = [
    {
      icon: 'mdi-apps',
      title: this.$t('Home Page'),
      to: `${this.langPrefix}/`
    },
    {
      icon: 'mdi-account-group',
      title: this.$t('Unit Info'),
      to: `${this.langPrefix}/unit/`
    },
    {
      icon: 'mdi-book-edit',
      title: this.$t('Recruitment'),
      to: `${this.langPrefix}/recruitment/`
    },
    {
      icon: 'mdi-timeline-text',
      title: this.$t('Event Timeline'),
      to: `${this.langPrefix}/event/`
    },
    // {
    //   icon: 'mdi-book-open-variant',
    //   title: this.$t('Main Story'),
    //   to: `${this.langPrefix}/mainStory/`
    // },
    {
      icon: 'mdi-truck',
      title: this.$t('Dispatch'),
      to: `${this.langPrefix}/dispatch/`
    },
    {
      icon: 'mdi-panorama-variant',
      title: this.$t('Artwork / Fanart'),
      to: `${this.langPrefix}/art/`
    },
    {
      icon: 'mdi-post-outline',
      title: this.$t('Log'),
      to: `${this.langPrefix}/log/`
    },
  ]

  get r18WarningAcknowledged():boolean {
    return this.$cookies.get('r18_warning_acknowledged');
  }

  mounted(){
    const r18WarningAcknowledged = this.r18WarningAcknowledged
    const locale = this.$i18n.locale as keyof typeof Locale
    const localePrefix = (locale === 'tc')?`` :`/${locale}`
    const currentPath = this.$route.path
    const currentFullPath = this.$route.fullPath.substring((locale === 'tc')?0 :3)

    if (!r18WarningAcknowledged) {
      const isRedirectFromR18 = currentPath.includes("r18-warning");
      var queryParam = (this.$route.query.query == null) ? '' : this.$route.query.query;
      if(!isRedirectFromR18){
        this.$router.push({
            path: `${localePrefix}/r18-warning?query=${currentFullPath}`,
        });
      }else{
        this.$router.push({
            path: `${localePrefix}/r18-warning?query=${queryParam}`,
        });
      }
    }

    this.drawer = this.isDrawerOpen()
  }

  isDrawerOpen(): boolean{
    switch (this.$vuetify.breakpoint.name) {
        case 'xs': return false;
        case 'sm': return false;
        case 'md': return false;
        case 'lg': return true;
        case 'xl': return true;
        default: return true;
    }
  }

  get langPrefix(): string{
    const locale = this.$i18n.locale
    const langPrefix = (locale === 'tc')?`` :`/${locale}`
    return langPrefix
  }
}
</script>
<style lang="sass" scoped>
::v-deep .v-window__container
  background-color: #424242
</style>

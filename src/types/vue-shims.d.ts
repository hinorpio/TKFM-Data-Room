import Vue from 'vue'
import util from '@/plugins/utils/util'
declare module 'vue/types/vue' {
  interface Vue {
    $util: typeof util
    $t: any
    $i18n: any
  }
}
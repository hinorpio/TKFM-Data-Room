<template>
  <div class="text-center">
    <v-btn v-if="showButton" ref="addBtn" @click="clickCallback" icon :aria-label="$t('Install App')">
      <v-icon>mdi-download</v-icon>
    </v-btn>
    <v-dialog v-model="showHelpDialog" max-width="360">
      <v-card>
        <v-card-title class="text-h6">{{ $t('Install App') }}</v-card-title>
        <v-card-text>{{ installHelpText }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="showHelpDialog = false">
            {{ $t('Close') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddToHomeScreen',
  data: () => ({
    showButton: false,
    showHelpDialog: false,
    deferredPrompt: null,
    isStandalone: false,
  }),
  mounted() {
    this.captureEvent();
    this.captureInstalledEvent();
    this.checkPWAInstallation();
  },
  beforeDestroy() {
    window.removeEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt);
    window.removeEventListener('appinstalled', this.handleAppInstalled);
  },
  computed: {
    installHelpText() {
      return this.isIos ? this.$t('Install App iOS Help') : this.$t('Install App Browser Help');
    },
    isIos() {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const platform = window.navigator.platform;

      return /iphone|ipad|ipod/.test(userAgent) || (platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
    },
  },
  methods: {
    captureEvent() {
      window.addEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt);
    },
    captureInstalledEvent() {
      window.addEventListener('appinstalled', this.handleAppInstalled);
    },
    handleBeforeInstallPrompt(e) {
      e.preventDefault();
      this.deferredPrompt = e;
      this.showButton = !this.isStandalone;
    },
    handleAppInstalled() {
      this.deferredPrompt = null;
      this.showButton = false;
      this.showHelpDialog = false;
    },
    checkPWAInstallation() {
      this.isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
      this.showButton = !this.isStandalone;
    },
    async clickCallback() {
      if (this.isStandalone) {
        this.showButton = false;
        return;
      }

      if (!this.deferredPrompt) {
        this.showHelpDialog = true;
        return;
      }

      const promptEvent = this.deferredPrompt;
      this.deferredPrompt = null;

      try {
        await promptEvent.prompt();
        const choiceResult = await promptEvent.userChoice;

        if (choiceResult.outcome === 'accepted') {
          this.showButton = false;
        }
      } catch {
        this.showHelpDialog = true;
      }
    },
  },
};
</script>

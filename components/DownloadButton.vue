<template>
  <div class="text-center">
    <v-btn v-if="showButton" ref="addBtn" @click="clickCallback" icon>
      <v-icon>mdi-download</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'AddToHomeScreen',
  data: () => ({
    showButton: true,
    deferredPrompt: null,
  }),
  mounted() {
    this.captureEvent();
    this.checkPWAInstallation();
  },
  methods: {
    captureEvent() {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        this.deferredPrompt = e;
      });
    },
    checkPWAInstallation() {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        this.showButton = false;
      }
    },
    clickCallback() {
      if (this.deferredPrompt) {
        this.deferredPrompt.prompt();
        this.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            // Call another function?
          }
          this.deferredPrompt = null;
        });
      }
    },
  },
};
</script>
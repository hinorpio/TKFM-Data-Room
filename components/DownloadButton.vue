<template>
  <div class="text-center">
      <v-btn v-if="deferredPrompt" ref="addBtn" @click="clickCallback" icon >
          <v-icon> mdi-download </v-icon>
      </v-btn>
  </div>
</template>

<script>
export default {
  name: 'AddToHomeScreen',
  data: () => ({
    deferredPrompt: null,
  }),
  mounted() {
    this.captureEvent()
  },
  methods: {
    captureEvent() {
      window.addEventListener('beforeinstallprompt', (e) => {
        // ! Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault()
        // Stash the event so it can be triggered later.
        this.deferredPrompt = e
      })
    },
    clickCallback() {
      // Show the prompt
      this.deferredPrompt.prompt()
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          // Call another function?
        }
        this.deferredPrompt = null
      })
    },
  },
}
</script>
<style lang="sass" scoped>
::v-deep .v-btn
    text-transform: unset !important
</style>

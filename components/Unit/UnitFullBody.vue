<template>
    <v-carousel v-model="fullBody" width="100%" :height="imgHeight" hide-delimiter-background>
        <v-carousel-item>
            <div class="image-container">
                <v-img :src="unit.cloth_one[0]" :lazy-src="unit.cloth_one[0]" height="100%" width="100%" contain />
            </div>
        </v-carousel-item>
        <v-carousel-item>
            <div class="image-container">
                <v-img :src="unit.cloth_two[0]" :lazy-src="unit.cloth_two[0]" height="100%" width="100%" contain   />
            </div>
        </v-carousel-item>
        <v-carousel-item>
            <div class="image-container">
                <v-img :src="unit.cloth_three[0]" :lazy-src="unit.cloth_three[0]" height="100%" width="100%" contain  />
            </div>
        </v-carousel-item>
    </v-carousel>
</template>
<script lang="js">
import Vue from "vue";

export default Vue.extend({
    props: {
        unit: {
            type: Object,
            required: true,
            default: {},
        },
    },
    computed: {
        imgHeight(){
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return '50vh'
                case 'sm': return '30vh'
                case 'md': return '70vh'
                case 'lg': return '80vh'
                case 'xl': return '80vh'
            }
        },
    },
    data() {
        return {
            fullBody: 0,
        }
    }
})
</script>
<style lang="sass" scoped>
.image-container
  display: flex
  justify-content: center
  align-items: center
  height: 100%
</style>
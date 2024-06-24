<template>
    <div>
        <v-row class="my-4 mx-1 align-center">
            <v-icon class="mr-2"> 
                mdi-chevron-triple-up 
            </v-icon>
            <span class="title font-weight-bold">{{ $t('Buff') }}</span>
        </v-row>
        <v-card class="outline-box mt-4" outlined color="white">
            <v-card-text class="pa-4">
                <v-row class="pa-0">
                    <v-col v-for="(buff, index) in summary" :key="index" :cols="6" :xl="3" :lg="4" :md="4" :sm="4" :xs="4">
                        <v-row class="align-center px-1"> 
                            <v-avatar size="2em" tile class="mr-2">
                                <v-img :src="$util.getBuffIcon(buff.code)"  />
                            </v-avatar>
                            <span :class="itemFontSize">
                                {{ showBuffText(buff) }}
                            </span>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script lang="js">
import Vue from "vue";
export default Vue.extend({
    props: {
        summary: {
            type: Array,
            required: true,
            default: [],
        },
    },
    computed: {
        itemFontSize(){
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 'body-2 font-weight-bold'
                case 'sm': return 'body-2 font-weight-bold'
                case 'md': return 'body-1 font-weight-bold'
                case 'lg': return 'body-1 font-weight-bold'
                case 'xl': return 'body-1 font-weight-bold'
            }
        }
    },
    methods: {
        showBuffText(buff){
            switch (buff.code) {
                case 'PASSIVE':
                    return (buff.value === 3) ?"1 & 2" :buff.value
                default:
                    return `${buff.value}%`
            }
        }
    },
})
</script>

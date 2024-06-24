<template>
    <div>
        <v-row class="my-4 mx-1 align-center">
            <v-icon class="mr-2"> 
                mdi-invoice-list 
            </v-icon>
            <span class="title font-weight-bold">{{ $t('Required Material') }}</span>
            <v-btn class="ml-4" x-small @click="toggleShowCombined">
                {{ showCombinedText }}
            </v-btn>
        </v-row>
        <v-card class="outline-box" outlined color="white">
            <v-card-text class="pa-4">
                <v-row class="pa-0">
                    <v-col v-for="(item, index) in summary" :key="index" :cols="6" :xl="3" :lg="4" :md="4" :sm="4" :xs="4">
                        <v-row class="align-center px-1"> 
                            <v-avatar size="2em" tile>
                                <v-img :src="$util.getItem(item.code).icon"  />
                            </v-avatar>
                            <span :class="itemFontSize">
                                {{`${$util.getItem(item.code).name[$i18n.locale]}`}}
                            </span>
                            <v-spacer></v-spacer>
                            <span :class="itemFontSize">
                                {{ item.quantity }}
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
        showCombined: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    watch: {
        localShowCombined(newVal) {
            this.$emit("update:showCombined", newVal);
        },
    },
    computed: {
        itemFontSize(){
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 'body-2 font-weight-bold'
                case 'sm': return 'body-2 font-weight-bold'
                case 'md': return 'body-2 font-weight-bold'
                case 'lg': return 'body-1 font-weight-bold'
                case 'xl': return 'body-1 font-weight-bold'
            }
        },
        showCombinedText(){
            return (this.showCombined)
                ? this.$t('Show Combined Material')
                : this.$t('Show Actual Material')
        }
    },
    methods: {
        toggleShowCombined(){
            this.localShowCombined = !this.localShowCombined;
        }
    },
    data(){
        return {
            localShowCombined: this.showCombined,
        }
    }
})
</script>

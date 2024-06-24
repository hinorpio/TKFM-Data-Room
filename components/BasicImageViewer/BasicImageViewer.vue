<template>
    <div class="mt-8" >
        <v-dialog v-model="visible" :max-width="dialogWidth" :max-height="dialogHeight" @click:outside="handleCloseDialog">
            <v-card :max-height="dialogHeight">
                <v-card-title> 
                    {{title}} 
                    <v-spacer></v-spacer>
                    <v-btn icon @click="handleCloseDialog">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text :max-height="dialogHeight">

                    <div class="image-container">
                        <v-img ref="dialogImage" :src="src" :lazy-src="src" height="80vh" contain></v-img>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>

    </div>
</template>
<script lang="js">
import Vue from "vue";

export default Vue.extend({

    props: {
        visible: {
            type: Boolean,
            required: true,
            default: false,
        },
        title: {
            type: String,
            required: true,
            default: "",
        },
        src: {
            type: String,
            required: true,
            default: "",
        }
    },
    methods: {
        handleCloseDialog(){
            this.$emit('update:title', "")
            this.$emit('update:src', "")
            this.$emit('update:visible', false)
        },
        

    },
    data() {
        return {
            dialogWidth: '85%',
            dialogHeight: '80%'
        }
    }
})
</script>
<style lang="sass" scoped>


</style>
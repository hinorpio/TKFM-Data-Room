<template>
    <v-layout v-if="isMounted">
        <v-container>
            <v-row v-if="isNoUnitSelected">
                <v-spacer></v-spacer>
                <no-unit-selected />
                <v-spacer></v-spacer>
            </v-row>
            <div v-else>
                <v-row>
                    <v-col :xl="6" :lg="6" :md="6" :sm="12" :xs="12" >
                        <unit-full-body :unit="unit" />
                    </v-col>
                    <v-col :xl="6" :lg="6" :md="6" :sm="12" :xs="12">
                        <unit-content :unit="unit" />
                    </v-col>
                </v-row>
                <v-fab-transition>
                    <v-btn @click="visible = !visible" :color="$store.state.themeColor" dark absolute fixed bottom right fab class="mb-16" large >
                        <v-icon large>mdi-magnify</v-icon>
                    </v-btn>
                </v-fab-transition>
                <character-search-dialog :visible.sync="visible" />
            </div>
        </v-container>
    </v-layout>
</template>
<script lang="js">
import Vue from "vue";
import NoUnitSelected from "@/components/Unit/NoUnitSelected";
import UnitContent from "@/components/Unit/UnitContent";
import UnitFullBody from "@/components/Unit/UnitFullBody";
import CharacterSearchDialog from "@/components/Unit/CharacterSearchDialog/CharacterSearchDialog";

export default Vue.extend({
    components: {
        NoUnitSelected,
        UnitContent,
        CharacterSearchDialog,
    },
    async mounted() {
        const metaCode = this.$route.params.metaCode
        if(metaCode === undefined){
            this.isNoUnitSelected = true
        }else{
            try {
                this.unit = this.$util.getUnitByMetacode(metaCode)
            } catch (error) {
                console.log(error);
                this.$nuxt.error({ statusCode: 500, message: error.message, customError: true })
            }
        }
        this.isMounted = true    
    },
    data() {
        return {
            isMounted: false,
            isNoUnitSelected: false,
            unit: {},
            visible: false,
        }
    }
})
</script>
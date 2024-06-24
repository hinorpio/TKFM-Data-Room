<template>
    <div class="mt-8">
        <v-dialog v-model="visible" :max-width="dialogWidth" :max-height="dialogHeight" @click:outside="handleCloseDialog">
            <v-card :max-height="dialogHeight">
                <v-card-title> 
                    {{ $t('Search Character') }}
                    <v-spacer></v-spacer>
                    <v-btn icon @click="showFilter = !showFilter">
                        <v-icon>mdi-filter</v-icon>
                    </v-btn>
                    
                    <v-btn icon @click="handleCloseDialog">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text :max-height="dialogHeight">
                    <v-expand-transition>
                        <div v-show="showFilter">
                            <v-row>
                                <v-col :cols="(12/filterPropsPerRow)" class="py-0">
                                    <v-chip-group v-model="selectedRarities" multiple>
                                        <v-chip v-for="(rarity, index) in rarityList" :key="index" :value="rarity.code" active-class="blue lighten-2" >
                                            <v-btn class="pa-0 character-button" outlined color="transparent" block >
                                                <v-img :src="rarity.icon" height="2em" width="2em" contain/>
                                            </v-btn>
                                        </v-chip>
                                    </v-chip-group>
                                </v-col>
                                <v-col :cols="(12/filterPropsPerRow)" class="py-0">
                                    <v-chip-group v-model="selectedElements" multiple>
                                        <v-chip v-for="(element, index) in elementList" :key="index" :value="element.code" active-class="blue lighten-2" >
                                            <v-btn class="pa-0 character-button" outlined color="transparent" block >
                                                <v-img :src="element.icon" height="2em" width="2em" contain/>
                                            </v-btn>
                                        </v-chip>
                                    </v-chip-group>
                                </v-col>
                                <v-col :cols="(12/filterPropsPerRow)" class="py-0">
                                    <v-chip-group v-model="selectedPositions" multiple>
                                        <v-chip v-for="(position, index) in positionList" :key="index" :value="position.code" active-class="blue lighten-2" >
                                            <v-btn class="pa-0 character-button" outlined color="transparent" block >
                                                <v-img :src="position.icon" height="2em" width="2em" contain/>
                                            </v-btn>
                                        </v-chip>
                                    </v-chip-group>
                                </v-col>
                            </v-row>
                        </div>
                    </v-expand-transition>
                    
                    <v-divider class="my-4"></v-divider>

                    <v-row class="fill-height overflow-auto" id="container">
                        <v-col v-for="(unit, index) in itemsForShow" :key="index" :cols="(12/itemsPerRow)" class="py-2" > 
                            <v-btn class="pa-0 character-button" outlined color="indigo" block :height="itemSize" @click="handleSelectUnit(unit)">
                                <v-img :src="unit.essence" :height="itemSize" :width="itemSize" contain/>
                            </v-btn>
                        </v-col>
                    </v-row>
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
    },
    computed: {
        itemsForShow(){
            return this.dataset
                .filter(unit =>  
                    (this.selectedRarities.length == 0)
                        ?true 
                        :this.selectedRarities.includes(unit.rarity) 
                    )
                .filter(unit =>  
                    (this.selectedElements.length == 0)
                        ?true 
                        :this.selectedElements.includes(unit.element) 
                    )
                .filter(unit =>  
                    (this.selectedPositions.length == 0)
                        ?true 
                        :this.selectedPositions.includes(unit.position) 
                    )
        },
        itemsPerRow () {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 4
                case 'sm': return 6
                case 'md': return 12
                case 'lg': return 12
                case 'xl': return 12
            }
        },
        itemSize () {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return '4.5em'
                case 'sm': return '4.5em'
                case 'md': return '4.5em'
                case 'lg': return '5.5em'
                case 'xl': return '5.5em'
            }
        },
        filterPropsPerRow () {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 1
                case 'sm': return 2
                case 'md': return 2
                case 'lg': return 3
                case 'xl': return 3
            }
        },
    },
    mounted(){
        this.dataset = this.$util.getAllUnitGeneralData()
        this.handleCustomRefresh()
        this.rarityList = this.$util.getAllRarity()
        this.elementList = this.$util.getAllElement()
        this.positionList = this.$util.getAllPosition()
    },
    methods: {
        handleCustomRefresh(){
            var result = []
            for (let index = 0; index < 50; index++) {
                this.dataset.forEach(element => {
                    result.push(element)
                });
            }
            this.dataset = result
        },
        handleCloseDialog(){
            this.$emit('update:visible', false)
        },
        handleSelectUnit(unit){
            this.$router.push({
                path: `/unit/${unit.metaCode}`,
            });
            this.handleCloseDialog()
        }
    },
    data() {
        return {
            showFilter: true,
            dataset: [],
            rarityList: [],
            elementList: [],
            positionList: [],
            selectedRarities: [],
            selectedElements: [],
            selectedPositions: [],
            dialogWidth: '75em',
            dialogHeight: '80%',
        }
    }
})
</script>
<style lang="sass" scoped>
.button-content
    height: 100%
    width: 100%

</style>
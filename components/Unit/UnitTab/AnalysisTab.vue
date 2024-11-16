<template>
    <div v-if="isMounted">
        <v-divider class="mt-4"></v-divider>
        <v-row>
            <v-col>
                <v-radio-group class="ml-4" v-model="forumlaType" row>
                    <v-radio :label="$t('DMG')" color="red" value="DMG" ></v-radio>
                    <v-radio :label="$t('HEAL')" color="green" value="HEAL" ></v-radio>
                    <v-radio :label="$t('DEF')" color="blue" value="DEF" ></v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
        <damage-card v-if="forumlaType == 'DMG'" :stats="stats"/>
        <heal-card v-if="forumlaType == 'HEAL'" :stats="stats"/>
        <!-- <def-card v-if="forumlaType == 'DEF'" :stats="stats"/> -->
        
    </div>
</template>
<script lang="js">
import Vue from "vue";
import BaseRadar from '@/components/BaseRadar/BaseRadar.vue'
import DamageCard from '@/components/Unit/UnitTab/StatCard/DamageCard.vue'
import HealCard from '@/components/Unit/UnitTab/StatCard/HealCard.vue'

export default Vue.extend({
    components: {
        BaseRadar,
        DamageCard,
        HealCard
    },
    props: {
        unit: {
            type: Object,
            required: true,
            default: {},
        },
    },
    async mounted() {
        this.isMounted = true
    },
    data() {
        return {
            isMounted: false,
            loading: false,
            showVersion: {},
            forumlaType: 'DMG',
            stats: {
                'DMG': {
                    'MULTIPLIER': [
                        {
                            'type': 'LEADER',
                            'polycolor': '#F44336',
                            'atk': 80,
                            'vd': 10,
                            'do': 0,
                            'e_vd': 0,
                            'other': 10,
                        },
                        {
                            'type': 'MEMBER',
                            'polycolor': '#E57373',
                            'atk': 50,
                            'vd': 10,
                            'do': 20,
                            'e_vd': 30,
                            'other': 10,
                        },
                    ],
                    'OTHER': [
                        {
                            'type': 'LEADER',
                            'polycolor': '#F44336',
                            'ba_vd': 30,
                            'ba_do': 50,
                            'ult_vd': 50,
                            'ult_do': 20,
                            'trig_vd': 90,
                            'trig_do': 50,
                            'sp_vd': 40,
                            'sp_do': 0,
                        },
                        {
                            'type': 'MEMBER',
                            'polycolor': '#E57373',
                            'ba_vd': 60,
                            'ba_do': 80,
                            'ult_vd': 120,
                            'ult_do': 20,
                            'trig_vd': 30,
                            'trig_do': 10,
                            'sp_vd': 20,
                            'sp_do': 20,
                        },
                    ],
                    'ATTACK': [
                        {
                            'type': 'LEADER',
                            'polycolor': '#F44336',
                            'base_atk': 135,
                            'atk_buff': 1,
                            'atk_tran': 1,
                        },
                        {
                            'type': 'MEMBER',
                            'polycolor': '#E57373',
                            'base_atk': 1,
                            'atk_buff': 130,
                            'atk_tran': 1,
                        },
                    ]
                },
                'HEAL': {
                    'MULTIPLIER': [
                        {
                            'type': 'LEADER',
                            'polycolor': '#4CAF50',
                            'heal_do': 20,
                            'heal_hot': 1,
                            'hot_do': 20,
                            'other': 35,
                        },
                        {
                            'type': 'LEADER',
                            'polycolor': '#81C784',
                            'heal_do': 1,
                            'heal_hot': 60,
                            'hot_do': 60,
                            'other': 35,
                        }
                    ],
                },
                'DEF': {
                    'LEADER': {
                        'ALL': {},
                        'SELF': {}
                    },
                    'SELF': {
                        'ALL': {},
                        'SELF': {}
                    }
                }
            }
        }
    }
})
</script>
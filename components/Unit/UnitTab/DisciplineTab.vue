<template>
    <div class="mt-8">
        <v-col v-for="(room, index) in unit.discipline" :key="index" justify="center">
            <v-row v-if="$vuetify.breakpoint.name == 'xs'">
                <v-col :cols="12">
                    <v-img max-width="100%">
                        <template v-slot:default>
                            <img :src="room.preview" :lazy-src="room.preview" alt="Image" style="max-width: 100%">
                        </template>
                    </v-img>
                    <span style="word-break: normal" :class="titleClass">{{ getRoomName(room) }}</span>
                </v-col>
            </v-row>
            <v-row v-else>
                <v-col :cols="4">
                    <v-img max-width="100%">
                        <template v-slot:default>
                            <img :src="room.preview" :lazy-src="room.preview" alt="Image" style="max-width: 100%">
                        </template>
                    </v-img>
                </v-col>
                <v-col :cols="8">
                    <span style="word-break: normal" :class="titleClass">{{ getRoomName(room) }}</span>
                </v-col>
            </v-row>
            <v-divider class="mt-4"></v-divider>
        </v-col>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Locale } from '@/plugins/utils/enums'
import { Unit } from '@/interface/unit'
import { Discipline } from '@/interface/unit/discipline'

@Component
export default class DisciplineTab extends Vue {
    @Prop({ type: Object, required: true, default: {} })
    unit!: Unit;

    get titleClass(): string  {
        return `${this.$util.getValueByBreakPoint(this.$vuetify.breakpoint.name, 'title', 'title', 'title', 'title', 'headline')} font-weight-bold`
    }

    getRoomName(room: Discipline): string{
        const locale = this.$i18n.locale as keyof typeof Locale;
        const result = room.name[locale];
        return result ?? ''
    }
}

</script>
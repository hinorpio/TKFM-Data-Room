<template>
    <div>
        <v-card-title>
            {{ localKeyword ? $t('Search result count', { count: searchResultCount }) : $t('Search') }}
            <v-spacer></v-spacer>
            <v-btn icon @click="handleSwitchDisplay">
                <v-icon v-if="isDisplayIcon">mdi-format-list-text</v-icon>
                <v-icon v-else>mdi-view-grid-outline</v-icon>
            </v-btn>
            <v-btn icon @click="handleShowFilter">
                <v-icon>mdi-filter</v-icon>
            </v-btn>
            <v-btn icon v-if="isDialog" @click="handleCloseDialog">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-card-title>
        <v-card-subtitle class="pt-0">
            <v-text-field
                v-model="localKeyword"
                :label="$t('Search by name or abbreviation')"
                :placeholder="$t('Search example')"
                prepend-inner-icon="mdi-magnify"
                clearable
                single-line
                hide-details
                outlined
                dense
                @input="handleInputKeyword"
                @click:clear="handleClearKeyword"
            ></v-text-field>
        </v-card-subtitle>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class CharacterSearch extends Vue {
    @Prop({ type: Boolean, required: false, default: false })
    isDialog!: Boolean;

    @Prop({ type: Boolean, required: false, default: false })
    isDisplayIcon!: Boolean;

    @Prop({ type: Boolean, required: false, default: true })
    showFilter!: Boolean;

    @Prop({ type: String, required: false, default: '' })
    searchKeyword!: String;

    @Prop({ type: Number, required: false, default: 0 })
    searchResultCount!: Number;

    localKeyword: string = '';

    mounted(): void{
        this.localKeyword = this.searchKeyword as string;
    }

    // Keep the local input in sync when the parent resets it, for example after switching display mode.
    @Watch('searchKeyword')
    watchSearchKeyword(value: string): void{
        if (value !== this.localKeyword) {
            this.localKeyword = value;
        }
    }

    handleInputKeyword(keyword: string): void{
        this.$emit('update:searchKeyword', keyword ?? '')
    }

    handleClearKeyword(): void{
        this.localKeyword = '';
        this.$emit('update:searchKeyword', '')
    }


    handleShowFilter(): void{
        this.showFilter = !this.showFilter
        this.$emit('update:showFilter', this.showFilter)
    }

    handleSwitchDisplay(type: String): void{
        this.isDisplayIcon = !this.isDisplayIcon
        this.$emit('update:isDisplayIcon', this.isDisplayIcon)
    }

    handleCloseDialog(): void {
        this.$emit('close');
    }
}
</script>

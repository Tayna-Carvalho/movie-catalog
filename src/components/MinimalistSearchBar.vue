<template>

    <div class="minimalistSearchBar">

        <router-link 
            :to="query === '' ? '/' : '/buscar'" 
            class="searchButton"
            @click="searchByQuery()">

            <img src="../assets/search-icon.svg" alt="loupe">
        </router-link>

        <input type="text" class="searchText" v-model="this.query">
    </div>

</template>

<script>

    export default {
        name: 'minimalist-search-bar-component',

        data () {
            return {
                query: ''
            }
        },

        methods: {
            searchByQuery () {
                if (this.query != '') {
                    this.$store.dispatch('searchByQuery', this.query);
                }
            }
        }
    }

</script>

<style>

    .minimalistSearchBar {
        border-radius: 40px;

        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 8px;
    }

    .minimalistSearchBar .searchButton img {
        width: 32px;
        height: 32px;
    }

    .minimalistSearchBar input {
        width: 0;
        height: 32px;

        border: none;
        background: none;
        outline: none;

        font-size: 16px;
        line-height: 24px;

        transition: .4s;
    }

    .minimalistSearchBar:hover > .searchText {
        width: 363px;
    }

    .minimalistSearchBar:hover {
        border: 1px solid var(--Roxo-Claro, #AC4DFF);
        padding: 8px 18px 8px 18px;
    }

</style>
<template>

    <section class="sort">

        <div id="dropdown">

            <div class="select" 
            @click="selected = !selected" 
            :class="selected ? 'selected' : 'notSelected'">
                <h3>Filtrar</h3>
                <img src="../assets/arrow-icon.svg" class="arrow">
            </div>

            <div class="content" v-if="selected">
                
                <h4 class="title">Gêneros</h4>
                
                <div class="genres">                
                    <div class="genre" 
                        v-for="(genre,index) in this.genres" :key="index"
                        @click="setGenreState(genre)"
                        :class="{genreSelected : selectedFilters.includes(genre.id)}">
                        
                        <h4>{{ genre.name }}</h4>
                    </div>
                </div>
            </div>
            

        </div>
        
    </section>

</template>

<script>

    export default {

        name: 'filter-component',

        data () {
            return {
                selected: false,
                selectedFilters: []
            }
        },

        methods: {
            setGenreState(genre) {
                if (this.selectedFilters.includes(genre.id)){
                    this.selectedFilters.pop(genre.id)
                }
                else {
                    this.selectedFilters.push(genre.id)
                }
            }
        },

        computed: {
            genres() {return this.$store.state.genre}
        }
    }

</script>

<style>

    .sort #dropdown .select {
        width: 411px;
        height: 72px;

        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 118px;
        padding-right: 19px;
        background: var(--Cinza-escuro, #343434);
    }

    .sort #dropdown .selected {
        border-radius: 20px 20px 0 0;
    }

    .sort #dropdown .notSelected {
        border-radius: 20px;
    }

    .sort #dropdown .selected .arrow {
        transform: rotate(0deg);
    }

    .sort #dropdown .notSelected .arrow {
        transform: rotate(-90deg);
    }

    .sort #dropdown .content {
        display: flex;
        width: 365px;
        padding: 16px 32px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        background: var(--cinza-claro, #424141);

        border-radius: 0 0 20px 20px;
        border-bottom: 32px solid var(--Cinza-escuro, #343434);
    }

    .sort #dropdown .content .genres {
        display: flex;
        align-items: center;
        align-content: center;
        gap: 8px;
        flex-wrap: wrap;
    }

    .sort #dropdown .content .title {
        color: var(--Roxo-Claro, #AC4DFF);
    }

    .sort #dropdown .content .genres .genre {
        display: flex;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;

        border-radius: 16px;
        border: 1px solid var(--Cinza-escuro, #343434);
    }

    .sort #dropdown .content .genres .genre:hover {
        background: var(--Cinza-escuro, #343434);
    }

    .sort #dropdown .content .genres .genreSelected {
        background: var(--Roxo-Claro, #AC4DFF);
    }

</style>
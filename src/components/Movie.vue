<template>

    <div class="movieList">

        <router-link 
        :to="{ name: 'detalhes', params: { id: 123 } }"
        class="movie" 
        v-for="(movie,index) in this.movies" :key="index">

            <img :src="movie.poster_path" :alt="movie.title">

        </router-link>
    </div>

    <router-view/>

</template>

<script>

    export default {
        name: 'movie-component',

        computed: {
            movies() {return this.$store.state.movies}
        }
    }

</script>

<style>

    .movieList {
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
    }

    .movieList .movie {
        border-radius: 8px;
        box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.15);
        
        background-color: blue;
        width: 414px;
        height: 241.88px;
        flex-shrink: 0;
    }

    .movieList .movie:hover {
        border: 3px solid var(--Roxo-Claro, #AC4DFF);
    }

</style>
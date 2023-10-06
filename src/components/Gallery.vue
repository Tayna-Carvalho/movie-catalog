<template>

    <section class="gallery">

        <router-link 
            to="/detalhes"
            class="item" 
            v-for="(item,index) in this.itens" :key="index"
            @click="setCurrentItem(item)" >

            <img :src="'https://image.tmdb.org/t/p/w500/' + item.backdrop_path" :alt="item.title">

        </router-link>

    </section>

    <router-view/>

</template>

<script>

    export default {
        name: 'gallery-component',

        props: ['itens'],

        methods: {
            setCurrentItem (item) {
                this.$store.dispatch('setCurrentItem', item);
            }
        }
    }

</script>

<style>

    .gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
    }

    .gallery .item img {
        width: 414px;
        height: 241.88px;

        border-radius: 8px;
        box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.15);
        flex-shrink: 0;
    }

    .gallery .item img:hover {
        border: 3px solid var(--Roxo-Claro, #AC4DFF);
    }

</style>
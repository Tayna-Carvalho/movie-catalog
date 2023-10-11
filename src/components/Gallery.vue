<template>

    <section class="gallery">

        <div class="itemContent">

            <img 
                    :src="'../assets/star-icon.svg'" 
                    alt="favorite icon" 
                    class="icon" 
                    @click="setFavorites(item)">\\
            <router-link 
                to="/detalhes"
                class="item" 
                v-for="(item,index) in this.itens" :key="index"
                @click="setStoreElements(item)" >
                
                <h3 class="title" v-if="item.media_type === 'tv'">{{ item.name }}</h3>
                <h3 class="title" v-else>{{ item.title }}</h3>

                <div class="dropShadow"></div>

                <img :src="'https://image.tmdb.org/t/p/w500/' + item.backdrop_path" :alt="item.title">

            </router-link>
            
        </div>
        

    </section>

    <router-view/>

</template>

<script>

    export default {
        name: 'gallery-component',

        props: ['itens'],

        methods: {
            setStoreElements (item) {

                this.$store.dispatch('setCurrentItem', undefined);
                this.$store.dispatch('setCurrentItem', item);
                this.$store.dispatch('loadCurrentVideo', item);
                this.$store.dispatch('loadCurrentDetails', item);
                this.$store.dispatch('loadCurrentCredits', item);
            },

            setFavorites (item) {
                this.$store.dispatch('setFavorites', item);
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

    .gallery .item {
        width: 414px;
        height: 241.88px;

        border-radius: 8px;
        box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.15);

        display: flex;
        justify-content: left;
        align-items: flex-end;
    }

    .gallery .item img {
        width: 414px;
        height: 241.88px;

        border-radius: 8px;
        box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.15);
        flex-shrink: 0;
    }

    .gallery .item .title {
        color: white;
        max-width: 414px;
        padding:   0 16px 0 16px;
        position: absolute;
        z-index: 2;
    }

    .gallery .item .icon {
        width: 32px;
        height: 32px;
        flex-shrink: 0;
        position: absolute;
        z-index: 3;
    }

    .gallery .item .dropShadow {
        background: linear-gradient(180deg, rgba(27, 27, 27, 0.00) 0%, #1B1B1B 80.7%);
        width: 100%;
        height: 149px;
        flex-shrink: 0;
        position: absolute;
        z-index: 1;
    }

    .gallery .item:hover {
        border: 3px solid var(--Roxo-Claro, #AC4DFF);
    }

</style>
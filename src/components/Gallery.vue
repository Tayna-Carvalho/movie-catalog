<template>
    <section class="gallery">
        <div class="itemContent" v-for="(item,index) in this.itens" :key="index">
            <img 
                src="../assets/star-icon-selected.svg" 
                alt="favorite icon" 
                class="icon" 
                @click="setFavorites(item)" v-if="favorites.some(element => element.id === item.id)">
            <img 
                src="../assets/star-icon.svg" 
                alt="favorite icon" 
                class="icon" 
                @click="setFavorites(item)" v-else>
            <router-link 
                to="/detalhes"
                class="item" 
                @click="setStoreElements(item)" >
                <h3 class="title" v-if="item.media_type === 'tv'">{{ item.name }}</h3>
                <h3 class="title" v-else>{{ item.title }}</h3>
                <div class="dropShadow"></div>
                <img :src="'https://image.tmdb.org/t/p/w500/' + item.backdrop_path" :alt="item.title" class="backdrop">
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
        },
        computed: {
            favorites() {return this.$store.state.favorites}
        }
    }
</script>

<style>
    .gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
    }
    .gallery .itemContent {
        width: 414px;
        height: 241.88px;
        display: flex;
    }
    .gallery .itemContent .icon {
        width: 32px;
        height: 32px;
        flex-shrink: 0;
        position: absolute;
        z-index: 4;
        margin-left: 366px;
        margin-top: 24.140px;
        padding: 0;
    }
    .gallery .item {
        width: 406px;
        height: 241.88px;
        border-radius: 8px;
        box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.15);
        display: flex;
        justify-content: left;
        align-items: flex-end;
    }
    .gallery .item:hover {
        border: 3px solid var(--Roxo-Claro, #AC4DFF);
    }
    .gallery .item:hover .title {
        color: var(--Roxo-Claro, #AC4DFF);
    }
    .gallery .item .backdrop {
        width: 406px;
        height: 241.88px;
        flex-shrink: 0;
        border-radius: 8px;
        box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.15);
        position: absolute;
        z-index: 1;
    }
    .gallery .item .dropShadow {
        width: 430px;
        height: 149px;
        flex-shrink: 0;
        background: linear-gradient(180deg, rgba(27, 27, 27, 0.00) 0%, #1B1B1B 80.7%);
        position: absolute;
        z-index: 2;        
    }
    .gallery .item .title {
        max-width: 398px;
        position: absolute;
        z-index: 3;
        margin-left: 16px;
        margin-bottom: 16px;
        padding: 0;
    }
</style>
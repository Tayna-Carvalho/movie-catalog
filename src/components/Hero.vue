<template>

    <section class="hero">

        <div class="hero-image">
            <img src="../assets/hero-image.jpg" alt="children watching movie">
        </div>

        <div class="content">
            
            <h1 class="welcome-message">Bem-vindo(a).</h1>
            <h3 class="call-message">Explore novos mundos, no conforto da sua casa!</h3>
            <SearchBar></SearchBar>

        </div>
        
    </section>
    
</template>

<script>

    import SearchBar from '@/components/SearchBar.vue'

    export default {
        name: 'Hero-component',

        components: {SearchBar}
    }
  
</script>

<style>

    .hero .hero-image img {
        width: 1920px;
        height: 640px;
        flex-shrink: 0;
    }

    .hero .content {
        position: absolute;
        top: 0;
        left: 64px;
        height: 640px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        z-index: 0;
    }

    .hero .content .welcome-message {
        margin: 0 0 10px 0;
    }

    .hero .content .call-message {
        color: var(--Roxo-Claro, #AC4DFF);
        margin: 0 0 27px 0;
    }

</style>
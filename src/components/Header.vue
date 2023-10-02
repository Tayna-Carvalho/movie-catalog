<template>

    <header>

        <div class="container">

            <section class="left-content">

                <section class="logotype"><img src="../assets/logo-name-white.svg" alt="logotype"></section>

                <nav>
                    <ul>
                        <li><h3><router-link to="/">Início</router-link></h3></li>
                        <li><h3><router-link to="/filmes">Filmes</router-link></h3></li>
                        <li><h3><router-link to="/series">Séries</router-link></h3></li>
                        <li><h3><router-link to="/favoritos">Favoritos</router-link></h3></li>
                    </ul>
                </nav>

            </section>

            <section class="right-content">

                <MinimalistSearchBar></MinimalistSearchBar>
                <h3><router-link to="/entrar">Entrar</router-link></h3>

            </section>
        
        </div>

    </header>

    <router-view/>

</template>

<script>
    
    import MinimalistSearchBar from '@/components/MinimalistSearchBar.vue'

    export default {
        name: 'Header-component',

        components: {MinimalistSearchBar}
    }

</script>

<style>
    header .container {
        height: 64px;
        
        display: flex;
        justify-content: space-between;
    }
    
    header {
        margin: 0;
        background: linear-gradient(180deg, #1B1B1B 0%, rgba(27, 27, 27, 0.00) 100%);
        
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;

        z-index: 1;
    }

    header .container .left-content {
        display: flex;
        align-items: center;
        gap: 23px;
    }

    header .container .right-content {
        display: flex;
        align-items: center;
        gap: 83px;
    }

    header .container .left-content  .logotype {
        width: 127px;
        height: 30px;
        flex-shrink: 0; 
    }

    header .container .left-content ul {
        display: flex;
        gap: 37px;

        margin: 0;
        padding: 0;

        list-style-type: none;
    }

</style>
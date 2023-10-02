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
</style>
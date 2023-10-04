<template>

    <form class="searchBar">
        <input type="text" placeholder="Pesquisar">
        <button>buscar</button>
    </form>

</template>

<script>

    export default {
        name: 'search-bar-component'
    }

</script>

<style>

    .searchBar {
        height: 64px;
        border-radius: 20px;

        border-radius:20px;
        background: var(--Branco-transparente, rgba(255, 255, 255, 0.30)); 
    }

    .searchBar input{
        width: 605px; 
        height: 100%;
        margin-left: 18px;
        padding: 0;

        border: none;
        background: none;
        outline: none;

        font-size: 16px;
        line-height: 24px;
    }

    .searchBar button {
        width: 129px;
        height: 100%;
        border-radius: 0px 20px 20px 0px;
        background: var(--Roxo-Claro, #AC4DFF);
        border: none;
        padding: 0;
    }

    .searchBar button:hover {
        background: var(--Roxo-Escuro, #550899);
    }

    .searchBar button:active {
        background: var(--Verde-Claro, #AAF766);
    }

</style>
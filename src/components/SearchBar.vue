<template>

    <form class="search-bar">
        <input type="text" placeholder="Pesquisar">
        <button>buscar</button>
    </form>

</template>

<script>
</script>

<style>

    .search-bar {
        height: 64px;
        border-radius: 20px;

        border-radius:20px;
        background: var(--Branco-transparente, rgba(255, 255, 255, 0.30)); 
    }

    .search-bar input{
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

    .search-bar button {
        width: 129px;
        height: 100%;
        border-radius: 0px 20px 20px 0px;
        background: var(--Roxo-Claro, #AC4DFF);
        border: none;
        padding: 0;
    }

    .search-bar button:hover {
        background: var(--Roxo-Escuro, #550899);
    }

    .search-bar button:active {
        background: var(--Verde-Claro, #AAF766);
    }

</style>
<template>

    <form class="search-bar">
        <input type="text">
        <button>buscar</button>
    </form>

</template>

<script>
</script>

<style>

    .search-bar input{
        width: 605px;
        height: 64px;  
        border-radius: 20px 0px 0px 20px;
        background: var(--Branco-transparente, rgba(255, 255, 255, 0.30)); 
        border: none;
        padding: 0;
    }

    .search-bar button {
        width: 129px;
        height: 64px;
        border-radius: 0px 20px 20px 0px;
        background: var(--Roxo-Claro, #AC4DFF);
        border: none;
        padding: 0;
    }

</style>
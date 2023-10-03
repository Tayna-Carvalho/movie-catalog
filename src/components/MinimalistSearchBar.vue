<template>

    <div class="minimalist-search-bar">
        <a href="#" class="search-button">
            <img src="../assets/search-icon.svg" alt="loupe">
        </a>
        <input type="text" class="search-text">
    </div>

</template>

<script>
</script>

<style>

    .minimalist-search-bar {
        border-radius: 40px;

        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 8px;
    }

    .minimalist-search-bar .search-button img {
        width: 32px;
        height: 32px;
    }

    .minimalist-search-bar input {
        width: 0;
        height: 32px;

        border: none;
        background: none;
        outline: none;

        font-size: 16px;
        line-height: 24px;

        transition: .4s;
    }

    .minimalist-search-bar:hover > .search-text {
        width: 363px;
    }

    .minimalist-search-bar:hover {
        border: 1px solid var(--Roxo-Claro, #AC4DFF);
        padding: 8px 18px 8px 18px;
    }

</style>
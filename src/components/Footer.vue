<template>
    <footer>
        <div class="logotype"><img src="../assets/logo-purple.svg" alt="logotype"></div>
        <small>2023 &copy; All Rights Reserved</small>  
    </footer>
</template>

<script>
    export default {
        name: 'footer-component'
    }
</script>

<style>
    footer {
        background-color: blueviolet;
        height: 128px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background: var(--Preto, #1B1B1B);
        box-shadow: 0px -16px 50px 0px rgba(0, 0, 0, 0.15);
    }
    footer .logotype {
        width: 36px;
        height: 40px;
        flex-shrink: 0;   
    }
</style>
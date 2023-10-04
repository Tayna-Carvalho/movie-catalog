
<template>

    <Header></Header>
     
    <section class="movieDescription">

        <div class="leftColumn">

            <div class="upperDetails">
                <h3>2023</h3>
                <div class="dot"></div>
                <h3>2h 56min</h3>
                <div class="dot"></div>
                <h3>Brasileiro</h3>
            </div>

            <h1>Nome do filme</h1>
            <h2 class="rater">98% relevante</h2>
            <p><h3>Lorem ipsum dolor sit amet consectetur. Tellus quis non et nibh hendrerit. Convallis ac cras aliquet dui feugiat vel. Velit ipsum arcu dignissim arcu. Mattis odio nisi eget justo tellus ac pellentesque. Hendrerit augue maecenas vitae diam sed congue fames in. Ipsum aliquam pretium tristique arcu interdum pharetra.</h3></p>

        </div>

        <div class="rightColumnDetails">

            <h2 class="ageGroup">14</h2>

            <div class="title">Gêneros:</div> <h3>Ficção, Romance, Comédia</h3>
            <h3 class="title">Diretor:</h3> <h3>John Doe</h3>
            <h3 class="title">Ator principal:</h3> <h3>Fulano de tal</h3>

        </div>

    </section>

    <Footer></Footer>

</template>

<script>

    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        name: 'movie-details-view',

        components: {Header, Footer}
    }

</script>

<style>

    .movieDescription {
        display: inline-flex;
        padding: 160px 64px 32px 64px;
        align-items: flex-end;
        gap: 27px;
        background: linear-gradient(180deg, rgba(27, 27, 27, 0.00) 0%, #1B1B1B 100%);
    }

    .movieDescription .leftColumn {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }

    .movieDescription .leftColumn .upperDetails {
        color: var(--cinza-claro-2, #A5A5A5);
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .movieDescription .leftColumn .upperDetails .dot {
        width: 8px;
        height: 8px;
        border-radius: 8px;
        background-color: var(--cinza-claro-2, #A5A5A5);
    }

    .movieDescription .leftColumn .rater {
        color: var(--Verde-Claro, #AAF766);
    }

    .movieDescription .rightColumnDetails {
        display: flex;
        width: 427px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 16px;
    }

    .movieDescription .rightColumnDetails .ageGroup {
        display: flex;
        padding: 8px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        background: var(--Laranja-Claro, #FF6A00);
    }

    .movieDescription .rightColumnDetails .title {
        color: var(--cinza-claro-2, #A5A5A5);
    }

</style>
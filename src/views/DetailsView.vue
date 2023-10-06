<template>
    <section class="details" v-if="item === undefined">
    </section>
    <section class="details" v-else>

        <div class="leftColumn">

            <div class="upperDetails">
                <h3>2023</h3>
                <div class="dot"></div>
                <h3>2h 56min</h3>
                <div class="dot"></div>
                <h3>Brasileiro</h3>
            </div>

            <h1 v-if="item.title === undefined">{{item.name}}</h1>
            <h1 v-else>{{item.title}}</h1>
            <h2 class="rater">{{(item.vote_average * 10).toFixed(0)}}% relevante</h2>
            <h3>{{item.overview}}</h3>

        </div>

        <div class="rightColumn">

            <h2 class="ageGroup">14</h2>

            <h3><span class="title">Gêneros:</span> Ficção, Romance, Comédia</h3>
            <h3><span class="title">Diretor:</span>  John Doe</h3>
            <h3><span class="title">Ator principal:</span> Fulano de tal</h3>

        </div>

    </section>

</template>

<script>

    export default {
        name: 'details-view',

        computed: {
            item() {return this.$store.state.CurrentItem}
        }
    } 

</script>

<style>

    .details {
        display: inline-flex;
        align-items: flex-end;
        gap: 27px;

        padding: 0 64px 32px 64px;
        background: linear-gradient(180deg, rgba(27, 27, 27, 0.00) 0%, #1B1B1B 100%);

        height: 960px;
    }

    .details .leftColumn {
        display: flex;
        flex-direction: column;
        gap: 16px;

        width: 1338px;
    }

    .details .leftColumn .upperDetails {
        display: flex;
        align-items: center;
        gap: 8px;

        color: var(--cinza-claro-2, #A5A5A5);
    }

    .details .leftColumn .upperDetails .dot {
        width: 8px;
        height: 8px;
        border-radius: 8px;
        
        background-color: var(--cinza-claro-2, #A5A5A5);
    }

    .details .leftColumn .rater {
        color: var(--Verde-Claro, #AAF766);
    }

    .details .rightColumn {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .details .rightColumn .ageGroup {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 64px;
        height: 64px;
        border-radius: 8px;
        
        background: var(--Laranja-Claro, #FF6A00);
    }

    .description .rightColumn .title {
        color: var(--cinza-claro-2, #A5A5A5);
    }

</style>
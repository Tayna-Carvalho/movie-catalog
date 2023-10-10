<template>

    <section class="details" v-if="item === undefined"></section>
    <section class="details" v-else>

        <div class="mainDetails">

            <div class="leftColumn">

                <div class="upperDetails">

                    <h3 v-if="item.media_type === 'tv'">
                        {{item.first_air_date.substring(0, 4)}}
                    </h3>
                    <h3 v-else>
                        {{item.release_date.substring(0, 4)}}
                    </h3>
                    <div class="dot"></div>
                    <h3>{{item.duration}}</h3>
                    <div class="dot"></div>
                    <h3>Brasileiro</h3>
                </div>

                <h1 v-if="item.media_type === 'tv'">{{item.name}}</h1>
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

        </div>

        <div class="background">

            <div v-if="item.videoKey === undefined">
                <img :src="'https://image.tmdb.org/t/p/w500/' + item.backdrop_path" :alt="item.title">
            </div>
            
            <iframe v-else 
                :src="'https://www.youtube.com/embed/' + item.videoKey + '?si=PMSmpq_Om5iAGEvu&amp;autoplay=1&controls=0'" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>

        </div>

    </section>

</template>

<script>

    export default {
        name: 'details-view',

        computed: {
            item() {return this.$store.state.currentItem}
        }
    } 

</script>

<style>

    .details .mainDetails {
        display: inline-flex;
        align-items: flex-end;
        gap: 27px;

        padding: 0 64px 32px 64px;
        background: linear-gradient(180deg, rgba(27, 27, 27, 0.00) 0%, #1B1B1B 100%);

        height: 1080px;

        position: absolute;
        top: 0;
        left: 0;
    }

    .details .mainDetails .leftColumn {
        display: flex;
        flex-direction: column;
        gap: 16px;

        width: 1338px;
    }

    .details .mainDetails .leftColumn .upperDetails {
        display: flex;
        align-items: center;
        gap: 8px;

        color: var(--cinza-claro-2, #A5A5A5);
    }

    .details .mainDetails .leftColumn .upperDetails .dot {
        width: 8px;
        height: 8px;
        border-radius: 8px;
        
        background-color: var(--cinza-claro-2, #A5A5A5);
    }

    .details .mainDetails .leftColumn .rater {
        color: var(--Verde-Claro, #AAF766);
    }

    .mainDetails .rightColumn {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .details .mainDetails .rightColumn .ageGroup {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 64px;
        height: 64px;
        border-radius: 8px;
        
        background: var(--Laranja-Claro, #FF6A00);
    }

    .details .mainDetails .rightColumn .title {
        color: var(--cinza-claro-2, #A5A5A5);
    }

    .details .background img{
        width: 1920px;
        height: 1080px
    }

    .details .background iframe{
        width: 1920px;
        height: 1080px
    }

</style>
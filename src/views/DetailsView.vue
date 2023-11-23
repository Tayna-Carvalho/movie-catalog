<template>
  <section
    class="details"
    v-if="item === undefined"></section>
  <section
    class="details"
    v-else>
    <div class="mainDetails">
      <div class="leftColumn">
        <div class="upperDetails">
          <h3 v-if="item.media_type === 'tv'">
            {{ item.first_air_date.substring(0, 4) }}
          </h3>
          <h3 v-else>
            {{ item.release_date.substring(0, 4) }}
          </h3>
          <div class="dot"></div>
          <h3>{{ item.duration }}</h3>
          <div class="dot"></div>
          <h3>{{ item.country }}</h3>
        </div>
        <h1 v-if="item.media_type === 'tv'">{{ item.name }}</h1>
        <h1 v-else>{{ item.title }}</h1>
        <h2 class="rater">{{ (item.vote_average * 10).toFixed(0) }}% relevante</h2>
        <h3>{{ item.overview }}</h3>
      </div>
      <div class="rightColumn">
        <button
          v-if="watched.some((element) => element.id === item.id)"
          @click="setWatched(item)"
          class="watchedButtonSelected">
          assistido
        </button>
        <button
          v-else
          @click="setWatched(item)"
          class="watchedButton">
          assistido
        </button>
        <h3><span class="title">Gêneros:</span>{{ getGenres(item.genre_ids, genres) }}</h3>
        <h3><span class="title">Diretor:</span> {{ item.director }}</h3>
        <h3><span class="title">Produtor:</span> {{ item.producer }}</h3>
      </div>
    </div>
    <div class="background">
      <div v-if="item.videoKey === undefined">
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + item.backdrop_path"
          :alt="item.title" />
      </div>
      <iframe
        v-else
        :src="'https://www.youtube.com/embed/' + item.videoKey + '?si=PMSmpq_Om5iAGEvu&amp;autoplay=1&controls=0'"
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
    item() {
      return this.$store.state.currentItem;
    },
    genres() {
      return this.$store.state.genre;
    },
    watched() {
      return this.$store.state.watched;
    },
  },
  methods: {
    getGenres(list, genres) {
      var genreNames = '';
      list.forEach((element, index) => {
        if (index === list.length - 1) {
          genreNames += genres.find((item) => item.id === element).name.toString();
        } else {
          genreNames += genres.find((item) => item.id === element).name.toString() + ', ';
        }
      });
      genreNames.substring(0, genreNames.length - 3);
      return genreNames;
    },
    setWatched(item) {
      this.$store.dispatch('setWatched', item);
    },
  },
};
</script>

<style>
.details .mainDetails {
  display: inline-flex;
  align-items: flex-end;
  gap: 27px;
  padding: 0 64px 32px 64px;
  background: linear-gradient(180deg, rgba(27, 27, 27, 0) 0%, #1b1b1b 100%);
  width: 100%;
  height: 120%;
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
  color: var(--cinza-claro-2, #a5a5a5);
}
.details .mainDetails .leftColumn .upperDetails .dot {
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: var(--cinza-claro-2, #a5a5a5);
}
.details .mainDetails .leftColumn .rater {
  color: var(--Verde-Claro, #aaf766);
}
.mainDetails .rightColumn {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.details .mainDetails .rightColumn .watchedButton {
  display: flex;
  width: 123px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid var(--cinza-claro-2, #a5a5a5);
}
.details .mainDetails .rightColumn .watchedButtonSelected {
  display: flex;
  width: 123px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #ac4dff;
  color: white;
  border: none;
}
.details .mainDetails .rightColumn .watchedButton:hover {
  color: #ac4dff;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid var(--Roxo-Claro, #ac4dff);
}
.details .mainDetails .rightColumn .title {
  color: var(--cinza-claro-2, #a5a5a5);
}
.details .background img {
  width: 100%;
  height: auto;
}
.details .background iframe {
  width: 1920px;
  height: 1080px;
}
</style>

<template>
  <section class="filter">
    <div id="dropdown">
      <div
        class="select"
        @click="selected = !selected"
        :class="selected ? 'selected' : 'notSelected'">
        <h3>Filtrar</h3>
        <img
          src="../assets/arrow-icon.svg"
          class="arrow" />
      </div>
      <div
        class="content"
        v-if="selected">
        <div class="filterItem">
          <h4 class="title">Onde ver</h4>
        </div>
        <div class="filterItem">
          <h4 class="title">Gêneros</h4>
          <div class="genres">
            <div
              class="genre"
              v-for="(genre, index) in this.genres"
              :key="index"
              @click="setGenre(genre)"
              :class="{ genreSelected: selectedGenres.includes(genre.id) }">
              <h4>{{ genre.name }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'filter-component',
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    setGenre(genre) {
      this.$store.dispatch('setGenre', genre);
      this.$store.dispatch('setFiteredLists');
    },
  },
  computed: {
    genres() {
      return this.$store.state.genre;
    },
    selectedGenres() {
      return this.$store.state.selectedGenres;
    },
  },
};
</script>

<style>
.filter #dropdown .select {
  width: 411px;
  height: 72px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 118px;
  padding-right: 19px;
  background: var(--Cinza-escuro, #343434);
  cursor: pointer;
}
.filter #dropdown .selected {
  border-radius: 20px 20px 0 0;
}
.filter #dropdown .notSelected {
  border-radius: 20px;
}
.filter #dropdown .selected .arrow {
  transform: rotate(0deg);
}
.filter #dropdown .notSelected .arrow {
  transform: rotate(-90deg);
}
.filter #dropdown .content {
  width: 430px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-radius: 0 0 20px 20px;
  background: var(--Cinza-escuro, #343434);
  border-bottom: 32px solid var(--Cinza-escuro, #343434);
}
.filter #dropdown .content .filterItem {
  display: flex;
  flex-direction: column;
  background: var(--cinza-claro, #424141);
  width: 365px;
  padding: 16px 32px;
  gap: 16px;
}
.filter #dropdown .content .filterItem .title {
  color: var(--Roxo-Claro, #ac4dff);
}
.filter #dropdown .content .filterItem .genres {
  display: flex;
  align-items: center;
  align-content: center;
  gap: 8px;
  flex-wrap: wrap;
  cursor: pointer;
}
.filter #dropdown .content .filterItem .genres .genre {
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid var(--Cinza-escuro, #343434);
}
.filter #dropdown .content .filterItem .genres .genre:hover {
  background: var(--Cinza-escuro, #343434);
}
.filter #dropdown .content .filterItem .genres .genreSelected {
  background: var(--Roxo-Claro, #ac4dff);
}
</style>

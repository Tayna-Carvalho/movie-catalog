<template>
  <section class="sort">
    <div id="dropdown">
      <div
        class="select"
        @click="selected = !selected"
        :class="selected ? 'selected' : 'notSelected'">
        <h3>Ordenar</h3>
        <img
          src="../assets/arrow-icon.svg"
          class="arrow" />
      </div>
      <ul
        class="options"
        v-if="selected">
        <li
          @click="setSort('popularity')"
          :class="{ optionSelected: sortOption === 'popularity' }">
          <h3>Popularidade</h3>
        </li>
        <li
          @click="setSort('rating')"
          :class="{ optionSelected: sortOption === 'rating' }">
          <h3>Avaliação</h3>
        </li>
        <li
          @click="setSort('date')"
          :class="{ optionSelected: sortOption === 'date' }">
          <h3>Data de lançamento</h3>
        </li>
        <li
          @click="setSort('AZ')"
          :class="{ optionSelected: sortOption === 'AZ' }">
          <h3>Título (A-Z)</h3>
        </li>
        <li
          @click="setSort('ZA')"
          :class="{ optionSelected: sortOption === 'ZA' }">
          <h3>Título (Z-A)</h3>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'sort-component',
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    setSort(chosen) {
      this.$store.dispatch('setSortOption', chosen)
      this.$store.dispatch('sortFilteresLists');
    }
  },
  computed: {
    sortOption() {
      return this.$store.state.sortOption;
    },
  }
};
</script>

<style>
.sort #dropdown .select {
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
.selected {
  border-radius: 20px 20px 0 0;
}
.notSelected {
  border-radius: 20px;
}
.selected .arrow {
  transform: rotate(0deg);
}
.notSelected .arrow {
  transform: rotate(-90deg);
}
.sort #dropdown .options {
  display: inline-flex;
  flex-direction: column;
  gap: 0;
  border-radius: 0 0 20px 20px;
  padding: 0 0 32px 0;
  background: var(--Cinza-escuro, #343434);
  margin: 0;
  cursor: pointer;
}
.sort #dropdown .options li {
  width: 430px;
  height: 72px;
  background: var(--cinza-claro, #424141);
  display: flex;
  justify-content: center;
  align-items: center;
}
.sort #dropdown .options li:hover {
  background: var(--Cinza-escuro, #343434);
  color: var(--Roxo-Claro, #ac4dff);
}
.sort #dropdown .options .optionSelected {
  background: var(--Roxo-Escuro, #550899);
  color: white;
}
</style>

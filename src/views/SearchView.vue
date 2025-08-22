<script>
import axios from 'axios';

export default {
  data() {
    return {
      query: '', //  söksträng
      movies: [], // Resultat 
    };
  },
  methods: {
    async searchMovies() {
      if (this.query) {
        try {
          const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: '74f3ba35fcac19cda122590fa460d3a1', // api nyckel
              language: 'en-US',
              query: this.query,
              page: 1,
            },
          });
          this.movies = response.data.results;
        } catch (error) {
          console.error('Error searching for movies:', error);
        }
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>Sök filmer</h1>
    <input
      type="text"
      v-model="query"
      placeholder="Skriv en filmtitel"
      @keyup.enter="searchMovies"
    />
    <button @click="searchMovies">Sök</button>
    <div v-if="movies.length">
      <h2>Resultat</h2>
      <div v-for="movie in movies" :key="movie.id">
        <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" :alt="movie.title" />
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<style>
input {
  margin-right: 10px;
  padding: 5px;
}
button {
  padding: 5px 10px;
}
</style>

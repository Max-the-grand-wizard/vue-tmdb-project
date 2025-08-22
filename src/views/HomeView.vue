<template>
  <div class="home">
    <h1 v-if="!$route.query.search">Populära filmer</h1>
    <h1 v-else>Resultat för "{{ $route.query.search }}"</h1>

    <!-- Grid-container -->
    <div v-if="movies.length > 0" class="home__grid">
      <div
        class="home__card"
        v-for="movie in movies"
        :key="movie.id"
        @click="goToDetails(movie.id)"
      >
        <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" :alt="movie.title" />
        <div class="home__card-content">
          <h3>{{ movie.title }}</h3>
          <p>{{ movie.overview.slice(0, 100) }}...</p>
          <button @click.stop="addToFavorites(movie)">Lägg till i favoriter</button>
        </div>
      </div>
    </div>
    <p v-else class="home__empty">Inga resultat hittades för "{{ $route.query.search }}".</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      movies: [], // Lista över filmer
      favorites: JSON.parse(localStorage.getItem("favorites")) || [], // Hämta sparade favoriter
    };
  },
  watch: {
    '$route.query.search': 'fetchMovies', // Lyssna på sökquery-ändringar
  },
  async mounted() {
    await this.fetchMovies(); // Hämta filmer vid sidladdning
  },
  methods: {
    async fetchMovies() {
      const searchQuery = this.$route.query.search?.trim();

      // Logik för att hantera populära filmer och sökningar
      const url = searchQuery
        ? "https://api.themoviedb.org/3/search/movie"
        : "https://api.themoviedb.org/3/movie/popular";

      const params = {
        api_key: "74f3ba35fcac19cda122590fa460d3a1", // TMDb API-nyckel
        language: "en-US",
        page: 1,
      };

      if (searchQuery) {
        params.query = searchQuery; // Lägg till sökquery om den finns
      }

      try {
        const response = await axios.get(url, { params });
        this.movies = response.data.results || [];
      } catch (error) {
        console.error("Error fetching movies:", error);
        this.movies = []; // Återställ om det uppstår ett fel
      }
    },
    goToDetails(movieId) {
      this.$router.push(`/movie/${movieId}`);
    },
    addToFavorites(movie) {
      if (!this.favorites.some((fav) => fav.id === movie.id)) {
        this.favorites.push(movie);
        localStorage.setItem("favorites", JSON.stringify(this.favorites));
        alert(`${movie.title} har lagts till i favoriter!`);
      } else {
        alert(`${movie.title} finns redan i favoriter.`);
      }
    },
  },
};
</script>

<style>

.home {
font-family: 'Roboto', sans-serif;
  padding: 20px;
  text-align: center;
  background: linear-gradient(to bottom, #00509e, #003f8a); /* Matchar navbarens blåton */
  color: #f0f0f0; 
  min-height: 100vh;
  width: 80vw; 
  margin: 0 auto; 
  
}

.home h1 {
 font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  color: #ffcc00; 
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); 
}

.home__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  width: 100%; 
  margin: 0 auto;
}

.home__card {
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); 
  background: #ffffff; 
  cursor: pointer; 
}

.home__card:hover {
  transform: scale(1.05); 
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5); 
}

.home__card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.home__card-content {
  padding: 10px;
}

.home__card h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #333; 
}

.home__card p {
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
}

.home__card button {
  padding: 5px 10px;
  background-color: #ffcc00; 
  color: #00509e; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.home__card button:hover {
  background-color: #ffa500; 
  color: white; 
}


/* Responsiv design med media queries */
@media (max-width: 1024px) {
  .home__grid {
    grid-template-columns: repeat(3, 1fr); /* Tre kolumner på mellanstora skärmar */
  }

  .home h1 {
    font-size: 2rem; /* Mindre rubrik på mellanstora skärmar */
  }
}

@media (max-width: 768px) {
body {
    padding-top: 200px; /* Extra utrymme för navigationen vid små skärmar */
  }
  .home__grid {
    grid-template-columns: repeat(2, 1fr); /* Två kolumner på mindre skärmar */
  }

  .home h1 {
    font-size: 1.8rem; /* Anpassa rubriken för mindre skärmar */
  }
}

@media (max-width: 480px) {
  .home__grid {
    grid-template-columns: 1fr; /* En kolumn på mobiler */
  }

  .home h1 {
    font-size: 1.5rem; /* Mindre rubrik för små mobiler */
  }

  .home__card img {
    height: 200px; /* Mindre bildhöjd för små skärmar */
  }
}
</style>

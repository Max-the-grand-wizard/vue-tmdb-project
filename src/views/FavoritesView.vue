<template>
  <div class="favorites">
    <h1 class="favorites__title">Favoritfilmer</h1>
    <div v-if="favorites.length > 0" class="favorites__grid">
      <div
        class="favorites__card"
        v-for="movie in favorites"
        :key="movie.id"
        @click="goToDetails(movie.id)"
      >
        <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" :alt="movie.title" />
        <div class="favorites__card-content">
          <h3>{{ movie.title }}</h3>
          <p>{{ movie.overview.slice(0, 100) }}...</p> <!-- Beskrivning -->
          <button @click.stop="removeFavorite(movie.id)">Ta bort</button>
        </div>
      </div>
    </div>
    <p v-else class="favorites__empty">Du har inga favoritfilmer ännu.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorites: JSON.parse(localStorage.getItem('favorites')) || [], // sparade favoriter
    };
  },
  methods: {
    goToDetails(movieId) {
      this.$router.push(`/movie/${movieId}`); // detaljsidan
    },
    removeFavorite(movieId) {
      // Ta bort film från favoriter
      this.favorites = this.favorites.filter(movie => movie.id !== movieId);
      localStorage.setItem('favorites', JSON.stringify(this.favorites)); // Uppdatera localStorage
    },
  },
};
</script>

<style>

.favorites {
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  text-align: center;
  background-color: #00509e; 
  color: white;
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto; 
}

.favorites__title {
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #ffcc00; /* Guld för kontrast */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); 
}

/* Grid-layout */
.favorites__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
  justify-content: center; 
  width: 100%; 
}


.favorites__card {
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); 
  transition: transform 0.3s, box-shadow 0.3s; /* Mjuk övergång */
  background: #ffffff;
}

.favorites__card:hover {
  transform: scale(1.05); /* Zoom-effekt */
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5); 
}

.favorites__card img {
  width: 100%; 
  height: 400px; 
  object-fit: cover; 
  border-bottom: 2px solid #ffcc00; 
  transition: transform 0.3s; 
}

.favorites__card img:hover {
  transform: scale(1.1); 
}

.favorites__card-content {
  padding: 10px;
}

.favorites__card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.favorites__card p {
  font-size: 14px;
  color: #777;
  margin-bottom: 15px; 
}

.favorites__card button {
  padding: 5px 10px;
  background-color: #ff4d4d; 
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s; 
}

.favorites__card button:hover {
  background-color: #ff1a1a;
}

.favorites__empty {
  font-size: 18px;
  color: #ffcc00; /* Guld för kontrast */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); 
}

@media (max-width: 1024px) {
  .favorites__grid {
    grid-template-columns: repeat(2, 1fr); 
  }

  .favorites__title {
    font-size: 2rem; 
  }
}

@media (max-width: 768px) {
  .favorites__grid {
    grid-template-columns: 1fr; 
  }

  .favorites__title {
    font-size: 1.8rem; 
  }

  .favorites__card img {
    height: 300px; 
  }
}

@media (max-width: 480px) {
  .favorites__title {
    font-size: 1.5rem; 
  }

  .favorites__card img {
    height: 250px; 
  }

  .favorites__card h3 {
    font-size: 16px; 
  }

  .favorites__card p {
    font-size: 12px; 
  }
}
</style>

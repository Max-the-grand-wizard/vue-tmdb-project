<template>
  <div class="main-wrapper">
    <div class="movie-detail">
      <h1>{{ movie?.title }}</h1>
      <img :src="`https://image.tmdb.org/t/p/w500${movie?.poster_path}`" :alt="movie?.title" />
      <p class="movie-detail__overview">{{ movie?.overview }}</p>
      <div class="movie-detail__info">
        <p><strong>Utgivningsdatum:</strong> {{ movie?.release_date }}</p>
        <p><strong>Betyg:</strong> {{ movie?.vote_average }}/10</p>
      </div>

      <!-- Trailersektion -->
      <div v-if="trailerKey" class="movie-detail__trailer">
        
        <iframe
          :src="`https://www.youtube.com/embed/${trailerKey}`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      movie: null, 
      trailerKey: null, 
    };
  },
  async mounted() {
    const movieId = this.$route.params.id; 
    try {
      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        {
          params: {
            api_key: "74f3ba35fcac19cda122590fa460d3a1", // API-nyckel
            language: "en-US",
          },
        }
      );
      this.movie = movieResponse.data;

      // Hämta trailers
      const videoResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        {
          params: {
            api_key: "74f3ba35fcac19cda122590fa460d3a1", // API-nyckel
            language: "en-US",
          },
        }
      );

      const trailer = videoResponse.data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      if (trailer) {
        this.trailerKey = trailer.key; // Spara nyckeln till trailern
      }
    } catch (error) {
      console.error("Error fetching movie details or trailers:", error);
    }
  },
};
</script>

<style>
.movie-detail {
  text-align: center;
  padding: 20px;
  background: linear-gradient(to bottom, #00509e, #003f8a); 
  color: #f0f0f0; 
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  gap: 20px;
  width: 80vw; 
  margin: 0 auto; 
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  position: relative; 
}


.movie-detail h1 {
  font-size: 2.5rem;
  color: #ffcc00; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.movie-detail img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.movie-detail__overview {
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  text-align: justify;
}

.movie-detail__info {
  display: flex;
  gap: 20px;
  font-size: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.movie-detail__trailer {
  margin-top: 30px;
  position: relative;
  width: 100%;
  max-width: 1000px; 
  padding-top: 56.25%; /* 16:9 förhållande */
}
.movie-detail__trailer iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 20px);
  height: 100%; 
  border-radius: 10px;
  box-shadow: 0px 8px 20px rgba(255, 204, 0, 0.6), 0px 4px 15px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease-in-out; /* Mjuk övergång */
}

.movie-detail__trailer iframe:hover {
  box-shadow: 0px 8px 20px rgba(255, 204, 0, 0.8), 0px 4px 15px rgba(0, 0, 0, 0.5);
}

/* Media Queries */
@media (max-width: 768px) {
  .movie-detail {
    width: 80vw; 
  }

  .movie-detail h1 {
    font-size: 2rem; 
  }

  .movie-detail img {
    width: 100%; 
  }

  .movie-detail__trailer iframe {
    height: 250px; 
  }
}
@media (max-width: 600px) {
  .movie-detail__trailer iframe {
    height: 210px; 
  }
}

@media (max-width: 480px) {
  .movie-detail h1 {
    font-size: 1.8rem; 
  }

  .movie-detail img {
    width: 100%; 
  }

  .movie-detail__trailer iframe {
    height: 170px; 
  }

  .movie-detail__overview {
    font-size: 1rem; 
  }
}
</style>

<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar">
      <div class="navbar__links">
        <router-link to="/">Hem</router-link>
        <router-link to="/favorites">Favoriter</router-link>
        <router-link to="/about">Om oss</router-link>
      </div>
      <div class="navbar__search">
        <input
          type="text"
          v-model="query"
          placeholder="Sök efter en film..."
          @keyup.enter="searchMovies"
        />
        <button @click="searchMovies">Sök</button>
      </div>
    </nav>

    <!-- Huvudinnehåll -->
    <router-view />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue"; // Importera Footer

export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    searchMovies() {
      if (this.query) {
        this.$router.push({ path: "/", query: { search: this.query } });
      }
    },
  },
  components: {
    Footer, 
  },
};
</script>

<style>
/* Grundläggande layout */
body {
  padding-top: 100px; 
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #00509e; /* Matchar temat */
  color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar__links a {
  margin: 0 15px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s ease;
}

.navbar__links a:hover {
  color: #ffcc00; 
}

.navbar__search {
  display: flex;
  gap: 10px;
}

.navbar__search input {
  padding: 10px;
  width: 300px;
  border: 2px solid transparent;
  border-radius: 5px;
  outline: none;
  background: linear-gradient(90deg, #32cd32, #00bcd4, #32cd32);
  background-size: 300% 300%;
  animation: border-animation 4s infinite linear;
  background-clip: border-box;
}

.navbar__search button {
  padding: 10px 15px;
  background-color: #ffcc00;
  color: #00509e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.navbar__search button:hover {
  background-color: #ffa500;
  color: white;
}

@keyframes border-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


/* Media Queries */
@media (max-width: 1024px) {
  .navbar__search input {
    width: 250px; 
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column; 
    padding: 15px;
  }

  .navbar__links {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 10px;
  }

  .navbar__search input {
    width: 200px; 
  }

  .navbar__search button {
    padding: 8px 10px;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 10px;
  }

  .navbar__links a {
    font-size: 0.9rem; 
  }

  .navbar__search input {
    width: 150px; 
  }

  .navbar__search button {
    font-size: 0.8rem;
    padding: 6px 8px;
  }
}
</style>

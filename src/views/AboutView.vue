<template>
  <div class="about">
    <h1 class="about__title">Om oss</h1>
    <div class="about__content">
      <!-- Bildsektion -->
      <img
        src="@/assets/img/bye.jpg"
        alt="En beskrivning av bilden"
        class="about__image"
      />

      <!-- Textsektion -->
      <div class="about__text">
        <p>
          Välkommen till vår applikation! Här kan du hitta information om de
          senaste och mest populära filmerna, titta på trailers och spara dina
          favoritfilmer för senare.
        </p>
        <p>
          Denna applikation är byggd med Vue.js och TMDb API för att leverera
          uppdaterad och relevant information om filmer från hela världen.
        </p>
        <p>
          Syftet med projektet är att skapa en användarvänlig och responsiv
          applikation för filmälskare. Hoppas att du gillar upplevelsen!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style>
.about {
 font-family: 'Roboto', sans-serif;
  padding: 20px;
  text-align: center;
  background: linear-gradient(to bottom, #00509e, #003f8a); 
  color: #f0f0f0; 
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw; 
  margin: 0 auto; 
  border-radius: 10px; 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); 
}

.about__title {
font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  color: #ffcc00; 
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  animation: fade-in 2s ease; 
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about__content {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1000px; 
}

.about__image {
  width: 300px;
  height: auto; /* Bevara proportionerna */
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); 
  border: 2px solid #ffcc00; 
}

.about__text {
  max-width: 600px;
  text-align: left;
  font-size: 1.1rem;
  line-height: 1.6;
  background-color: rgba(255, 255, 255, 0.1); 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
}

.about__text p {
  margin-bottom: 20px;
  color: #f0f0f0; 
}

.about__text p:last-child {
  margin-bottom: 0;
}



@media (max-width: 768px) {
  .about {
    width: 80vw; 
  }

  .about__image {
    width: 250px; 
  }

  .about__text {
    font-size: 1rem; 
  }

  .about__title {
    font-size: 2rem; 
  }
}

@media (max-width: 480px) {
  .about {
    width: 80vw; 
  }

  .about__image {
    width: 200px; 
  }

  .about__text {
    font-size: 0.9rem; 
  }

  .about__title {
    font-size: 1.8rem; 
  }
}
</style>

<template>
  <footer class="footer">
    <div class="footer__content">
      <h2 class="footer__title">FilmApp</h2>
      <p class="footer__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, 
        eros vel euismod luctus, nulla arcu vehicula turpis, nec pellentesque sapien
        nulla sit amet lacus.
      </p>
      <div class="footer__links">
        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
          TMDb API
        </a>
        <router-link to="/about">Om oss</router-link>
        <router-link to="/favorites">Favoriter</router-link>
      </div>
      <p class="footer__extra">
        Vivamus dictum, nulla id hendrerit facilisis, arcu eros scelerisque nisl, 
        a volutpat ligula odio at risus. Integer feugiat pharetra neque a tempor.
      </p>
      
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  background: linear-gradient(to bottom, #003f8a, #002f6c); 
  color: #f0f0f0; 
  padding: 40px 20px; 
  text-align: center;
  border-top: 2px solid #ffcc00; 
  width: 80vw; 
  margin: 0 auto; 
}

.footer__content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.footer__title {
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
  color: #ffcc00; 
  margin: 0;
}

.footer__description, .footer__extra {
  font-size: 1rem;
  color: #f0f0f0;
  max-width: 800px;
  line-height: 1.5;
  margin: 0 auto;
}

.footer__links {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center; 
}

.footer__links a {
  color: #ffcc00; 
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.footer__links a:hover {
  color: #ffa500; 
}

.footer__copyright {
  font-size: 0.9rem;
  color: #dcdcdc; 
  margin-top: 20px;
}

/* Media Queries */
@media (max-width: 768px) {
  .footer {
    width: 80vw; 
    padding: 20px 10px; 
  }

  .footer__title {
    font-size: 1.8rem; 
  }

  .footer__description, .footer__extra {
    font-size: 0.9rem; 
  }

  .footer__links {
    gap: 20px; 
  }
}

@media (max-width: 480px) {
  .footer {
    width: 80vw; 
  }

  .footer__title {
    font-size: 1.5rem; 
  }

  .footer__description, .footer__extra {
    font-size: 0.8rem; 
  }

  .footer__links {
    flex-direction: column; 
    gap: 10px; 
  }
}
</style>

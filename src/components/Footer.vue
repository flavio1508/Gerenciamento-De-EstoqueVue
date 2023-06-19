<template>
  <footer>
    <div class="container">
      <div class="social-links">
        <a href="https://www.instagram.com/seu_instagram"><img src="../img/instagram.svg" alt="Instagram"></a>
        <a href="https://www.linkedin.com/seu_linkedin"><img src="../img/linkedin.svg" alt="LinkedIn"></a>
        <a href="mailto:seu_email@example.com"><img src="../img/github.svg" alt="E-mail"></a>
      </div>
    </div>
  </footer>
</template>

<style>
footer {
  background: #333;
  color: #fff;
  padding: 5px 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.social-links a {
  display: inline-block;
  margin-right: 10px;
}

.social-links img {
  height: 20px;
  width: 20px;
}
</style>
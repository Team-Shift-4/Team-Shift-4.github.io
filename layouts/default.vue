<template>
    <div>
      <header>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand" href="/">Shift 4 Logo</a>
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarExample01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <nuxt-link to="blog" class="nav-link">BLOG</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="portfolio" class="nav-link">PORTFOLIO</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="service" class="nav-link">SERVICE</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="wiki" class="nav-link">WIKI</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Navbar -->
  </header>
  <div>
    <nuxt />
  </div>
  
  <footer class="bg-light text-center text-lg-start">
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2023 Copyright:
      <a class="text-dark" href="https://www.shift-4.xyz">Team Shift 4</a>
    </div>
    <!-- Copyright -->
  </footer>
  </div>
  </template>
  <style scoped>
  /* Color of the links BEFORE scroll */
  .navbar-scroll .nav-link,
  .navbar-scroll .navbar-toggler .fa-bars {
    color: #fff;
  }
  
  /* Color of the links AFTER scroll */
  .navbar-scrolled .nav-link,
  .navbar-scrolled .navbar-toggler .fa-bars {
    color: #4f4f4f;
  }
  
  /* Color of the navbar AFTER scroll */
  .navbar-scrolled {
    background-color: #fff;
  }
  
  /* An optional height of the navbar AFTER scroll */
  .navbar.navbar-scroll.navbar-scrolled {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  
  </style>
  <script>
  export default {
    name: 'IndexPage',
  }
  </script>
  
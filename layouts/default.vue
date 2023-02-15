<template>
  <div>
    <header>
      <div class="gnb">
        <div class="gnb-wrapper">
          <div class="gnb-logo"><img src="@/static/shift-4-gnb-logo.png"/></div>
          <div class="gnb-nav">
            <div class="gnb-nav-item">blog</div>
            <div class="gnb-nav-item">|</div>
            <div class="gnb-nav-item">portfolio</div>
            <div class="gnb-nav-item">|</div>
            <div class="gnb-nav-item">service</div>
            <div class="gnb-nav-item">|</div>
            <div class="gnb-nav-item">wiki</div>
          </div>
        </div>
      </div>
    <!--
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand" href="/">Shift 4 LogoQ1</a>
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
    -->
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
  <!--
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
  -->
  <style scoped>
  @import url('https://webfontworld.github.io/NexonLv1Gothic/NexonLv1Gothic.css');
  .gnb {
    position: relative;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 80px;
    margin-bottom: 10px;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.3)
  }

  .gnb-wrapper {
    position: absolute;
    width: 1100px;
    height: 80px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
  .gnb-logo {
    display: inline-block;
    width: 200px;
    height: 80px;
    padding: 10px;
  }

  .gnb-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .gnb-nav {
    display: inline-block;
    width: 800px;
    height: 80px;
  }

  

  .gnb-nav-item {
    position: relative;
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-left: 42px;
    font-family: 'NexonLv1Gothic';
  }

  </style>
  <script>
  export default {
    name: 'IndexPage',
  }
  </script>
  
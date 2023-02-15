<template>
  <div>
    <header>
      <div class="gnb">
        <div class="gnb-wrapper">
          <div class="gnb-logo"><img src="@/static/shift-4-gnb-logo.png"/></div>
          <div class="gnb-nav">
            <div class="gnb-nav-item"><nuxt-link to="blog">blog</nuxt-link></div>
            <div class="gnb-nav-item">|</div>
            <div class="gnb-nav-item"><nuxt-link to="portfolio">portfolio</nuxt-link></div>
            <div class="gnb-nav-item">|</div>
            <div class="gnb-nav-item"><nuxt-link to="service">service</nuxt-link></div>
            <div class="gnb-nav-item">|</div>
            <div class="gnb-nav-item"><nuxt-link to="wiki">wiki</nuxt-link></div>
          </div>
        </div>
      </div>
    </header>
  <div>
    <nuxt />
  </div>
  
  <footer>
    <div class="fnb">
      <div class="fnb-wrapper">
        <div class="fnb-logo"><img src="@/static/shift-4-gnb-logo.png"/></div>
        <div class="fnb-info">
          Copyright 2023 SHIFT 4 All Rights Reserved.<br/>
          ShifT 4 Team leader : Jungin Kim ｜ Email : 99JunginKim@gmail.com<br/>
          TEL : 010-7008-0801｜ ADDRESS : 대구광역시 동구 신암로 16길 16
        </div>
      </div>
    </div>
  </footer>
  <!--
  <footer class="bg-light text-center text-lg-start">
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2023 Copyright:
      <a class="text-dark" href="https://www.shift-4.xyz">Team Shift 4</a>
    </div>
  </footer>
  -->
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
    position: absolute;
    left: 0px;
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
    position: absolute;
    left: calc(100% - 800px);
    width: 800px;
    height: 80px;
  }

  

  .gnb-nav-item {
    position: relative;
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 25px 21px 0px 21px;
    font-family: 'NexonLv1Gothic';
  }

  .fnb {
    position: relative;
    width: 100vw;
    height: 160px;
  }
  .fnb-wrapper{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 1100px;
    height: 160px;
    padding-top: 40px;
  }
  .fnb-logo {
    position: absolute;
    left: 0px;
    display: inline-block;
    width: 200px;
    height: 80px;
    padding: 10px;
  }
  .fnb-logo img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .fnb-info {
    position: absolute;
    top: 54px;
    left: calc(100% - 700px);
    display: inline-block;
    width: 700px;
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    font-family: 'NexonLv1Gothic';
    line-height: 21px;

  }
  </style>
  <script>
  export default {
    name: 'IndexPage',
  }
  </script>
  
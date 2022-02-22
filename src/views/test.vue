<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Headers - 7</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="styles/reset.min.css" />
      <link rel="stylesheet" href="styles/style.css" />
      <link rel="stylesheet" href="styles/header-7.css" />
    </head>
    <body>
      <!-- Header Start -->
      <header class="site-header">
        <div class="wrapper site-header__wrapper">
          <div class="site-header__start">
            <a href="#" class="brand">Brand</a>
          </div>
          <div class="site-header__middle">
            <nav class="nav">
              <button class="nav__toggle" aria-expanded="false" type="button">
                menu
              </button>
              <ul class="nav__wrapper">
                <li class="nav__item"> <router-link to="/">หน้าแรก</router-link></li>&nbsp;
                <li class="nav__item"> <router-link to="/blog">ข่าวสาร</router-link> &nbsp;</li>&nbsp;
                <li class="nav__item"><router-link to="/Mainrecipe">สูตรอาหารคลีน</router-link></li>&nbsp;
                <li class="nav__item"><router-link to="/calroriestable">ตารางพลังงานในอาหาร</router-link></li>&nbsp;
                <li class="nav__item"><router-link to="/news">ความรู้สุขภาพ</router-link></li>&nbsp;
                <li class="nav__item"><router-link to="/calculate"> สูตรคำนวณร่างกาย </router-link></li>&nbsp;
                <li class="nav__item"><router-link to="/about">ติดต่อเรา</router-link></li>&nbsp;
              </ul>
            </nav>
          </div>
          <div class="site-header__end">
            <a href="#">Sign in</a>
          </div>
        </div>
      </header>
      <!-- Header End -->
    </body>
  </html>
</template>
<script>
export default {
     src:"js/header-7.js"
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
.wrapper {
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 100px;
  margin-right: auto;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #222;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: "Roboto", sans-serif;
}

.sr-only {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}

.button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #fff;
  background-color: #2fa0f6;
  min-width: 120px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-align: center;
}

.button svg {
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  fill: #fff;
}

.button span {
  display: none;
}

@media (min-width: 600px) {
  .button span {
    display: initial;
  }
}

.button--icon {
  min-width: initial;
  padding: 0.5rem;
}
/* 
** The Header Media Queries **
** Tweak as per your needs **
*/
.brand {
  font-weight: bold;
  font-size: 20px; }

.site-header {
  position: relative;
  background-color: rgb(64, 151, 170) }

.site-header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem; }
  @media (min-width: 660px) {
    .site-header__wrapper {
      padding-top: 0;
      padding-bottom: 0; } }
@media (max-width: 659px) {
  .site-header__end {
    padding-right: 4rem; } }

@media (min-width: 660px) {
  .nav__wrapper {
    display: flex;  list-style-type: none;} }

@media (max-width: 659px) {
  .nav__wrapper {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: -1;
    background-color: #d9f0f7;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-100%);
    transition: transform 0.3s ease-out, opacity 0.3s ease-out; }
    .nav__wrapper.active {
      visibility: visible;
      opacity: 1;
      transform: translateY(0); } }
    
.nav__item a {
    font-weight: bold;
    font-size: 18px;
  display: block;
  padding: 1.5rem 2rem; 
  margin-top: 50px;
 color: #0e0e0e;
 border-radius: 20px;
  background-color: rgb(149, 180, 221);
  }
a.router-link-exact-active {
  color: #e5f5ee;
}
.navbar {
  width: min-content;
  border: 5px solid rgb(17, 127, 201);
}
:root {
  --text-color: #2c3e50;
  --background-color: white;
  --overlay-color: rgba(43, 46, 56, 0.9);
}
 .flex-end {
        background-color: rgb(20, 20, 20);
        padding: 10px 0;
        display: flex;
        justify-content: flex-end;
      }

.nav__toggle {
  display: none; }
  @media (max-width: 659px) {
    .nav__toggle {
      display: block;
      position: absolute;
      right: 1rem;
      top: 1rem; } }

</style>
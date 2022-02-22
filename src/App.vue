<template>
  <!-- navbar -->
  <div id="nav">
    <router-link to="/">หน้าแรก</router-link>&nbsp;
    <router-link to="/blog">ข่าวสาร</router-link> &nbsp;
    <router-link to="/Mainrecipe">สูตรอาหารคลีน</router-link>&nbsp;
    <router-link to="/news">ความรู้สุขภาพ</router-link> &nbsp;
    <router-link to="/calroriestable">ตารางพลังงานในอาหาร</router-link>&nbsp;
    <router-link to="/calculate"> สูตรคำนวณร่างกาย </router-link> &nbsp;
    <router-link to="/about">ติดต่อเรา</router-link> &nbsp;
  </div>
  <!-- Router view -->
  <router-view></router-view>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.custom-control-label {
  font-weight: 400;
}
#nav {
  padding: 20px;
  background-color: rgb(64, 151, 170);
  border: 1px solid rgb(74, 182, 233);
  display: flex;
  justify-content: center;
}
h1,
h3,
h4,
h5,
h6,
label,
span {
  font-weight: 500;
  font-family: sans-serif;
}
#nav a {
  font-weight: bold;
  font-size: 18px;
  padding: 15px;
  border-radius: 20px;
  color: #0e0e0e;
  background-color: rgb(149, 180, 221);
}
#nav a.router-link-exact-active {
  color: #e5f5ee;
}
.navbar {
  width: min-content;
  border: 5px solid rgb(17, 127, 201);
}
</style>
<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Bootstrap Example</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      />
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://www.w3schools.com/lib/w3-theme-black.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css"
      />
    </head>
    <div class="section">
      <div class="container">
        <div class="jumbotron">
          <h1>คำนวณค่าดัชนีในร่างกาย</h1>
          <p>Program to calculate bmi and bodyfat ley try !!</p>
        </div>
      </div>

      <div class="item">
        <div class="item-row">
          <h2>คำนวณค่า BMR</h2>
          <i class="fa fa-calculator" aria-hidden="true"></i>
          <router-link to="/bmr"> Click here </router-link> &nbsp;
        </div>
        <div class="item-row">
          <h2>คำนวณค่า BMI</h2>
          <i class="fa fa-database" aria-hidden="true"></i>
          <router-link to="/bmi"> Click here </router-link> &nbsp;
        </div>
        <div class="item-row">
          <h2>Ideal weight calculator</h2>
          <p>คำนวณน้ำหนักที่เหมาะสมของคุณ</p>
          <i class="fa fa-database" aria-hidden="true"></i>
          <router-link to="/iwc"> Click here </router-link> &nbsp;
        </div>
        <div class="item-row">
          <h2>4</h2>
          <i class="fa fa-database" aria-hidden="true"></i>
          <router-link to="/bmi"> Click here </router-link> &nbsp;
        </div>
      </div>
      <div class="footer">
      <p>
        Copyright © 2022 Edu Meeting Co., Ltd. All Rights Reserved.
        <br />Design:
        <a
          href="https://templatemo.com"
          target="_parent"
          title="free css templates"
          >TemplateMo</a
        >
      </p>
    </div>
    </div>
    
  </html>
</template>

<style scoped>
.item {
  display: grid;
  width: 1000px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 400px;
  grid-template-columns: 1fr 1fr;
}
.item-row {
  font-size: 150%;
  width: 500px;
  height: 180px;
  padding: 5rem 2rem;
  border-radius: 20px;
  margin-left: 20px;
  background-color: #d3e1ee;
  box-shadow: 0 0 5px;
  cursor: grab;
}
.h2:hover,
h2:active {
  font-size: 180%;
}

.section {
  background-image: url(../assets/meetings-bg.jpg);
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0 0 110px;
  box-shadow: 10;
}
.footer {
  text-align: center;
  margin-top: 140px;
  border-top: 1px solid rgba(250, 250, 250, 0.15);
  padding: 50px 0px;
}
.footer p {
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
}

.footer p a {
  color: #f5a425;
}
</style>
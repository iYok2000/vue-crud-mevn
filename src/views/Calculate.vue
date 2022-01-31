<template>
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  
  </head>
<body>

<div class="container">
  <div class="jumbotron">
    <h1>Calculate BMI & Body Fat</h1>
    <p>Program to calculate bmi and bodyfat ley try !!</p> 
  </div>
</div>

<div class="item">
    <div class="item-row">
        <h2>คำนวณค่า Bodyfat</h2>
        <router-link to="/bmi"> Click here </router-link> &nbsp;
    </div>
    <div class="item-row">
        <h2>คำนวณค่า BMI</h2>
       <router-link to="/bmi"> Click here </router-link> &nbsp;
        
    </div>
</div>

</body>
</html>


</template>

<style scoped>
    .item {
        display: flex ;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 300px;
    }
    .item-row{
        font-size: 150%;
        width: 400px;
        height: 180px;
        justify-content: center;
        padding: 6rem 6rem;
        border-radius: 20px;
        margin: 20px;
        background-color: #d3e1ee;
        box-shadow: 0 0 5px;
        cursor: grab;
    }
    .h2:hover, h2:active {
        font-size: 180%;
         
    }
</style>
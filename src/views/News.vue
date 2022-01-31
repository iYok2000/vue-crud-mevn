<template>
  <div class="news">
    <html>
      <title>W3.CSS</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <body>
        <div class="w3-container ">
          <h1 class="w3-xxxlarge w3-animate-bottom">
            บทความสุขภาพ
          </h1>
        </div>
        <div class="ui  "><br>
          <div class="ui center aligned container">
            <div class="ui   pointing menu compact">
                <router-link to="/createComponent" exact class="item"> 
                    <i class="plus circle icon"></i> สร้างบทความ
                </router-link>
              <router-link to="/view" exact class="item" > 
                    <i class="tasks icon"></i> ลบ / แก้ไข
               </router-link>
            </div>
          </div>
        </div>

        <div class="w3-content" v-for="task in Tasks" :key="task._id">
          <div class="w3-row w3-margin">
            <div class="w3-third">
              <img
                src="img_5terre.jpg"
                style="width: 100%; min-height: 200px"
              />
            </div>
            <div class="w3-twothird">
              <h2>{{ task.title }}</h2>
              <p>
                {{ task.subject }} <br>
              </p>
              <p> ผู้เขียน :  {{ task.aka }}</p>
            </div>
          </div>
         
        </div>
        
      </body>
      
    </html>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Tasks: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Tasks = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.w3-content{
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgb(214, 213, 230);
  background: #d1ccc0;
  margin-top: 10px ;
}
.w3-xxxlarge{
    background-color: rgb(175, 130, 100);
}
.w3-container{
    background-color: rgb(175, 130, 100);
}

</style>


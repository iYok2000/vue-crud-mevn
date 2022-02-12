<template>
  <div class="news">
    <html>
      <title>W3.CSS</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <body>
        <div class="w3-container ">
          <h1 class="w3-xxxlarge w3-animate-bottom">
            ข่าวสาร สุขภาพ
          </h1>
        </div>
        <div class="ui  "><br>
          <div class="ui center aligned container">
            <div class="ui   pointing menu compact">
                <router-link to="/blogCreate" exact class="item"> 
                    <i class="plus circle icon"></i> สร้าง Blog
                </router-link>
              <router-link to="/blogList" exact class="item" > 
                    <i class="tasks icon"></i> ลบ / แก้ไข
               </router-link>
            </div>
          </div>
        </div>

        <div class="w3-content" v-for="blog in Blogs" :key="blog._id">
          <div class="w3-row w3-margin">
            <div class="w3-third">
              <img
                src="img_5terre.jpg"
                style="width: 100%; min-height: 200px"
              />
            </div>
            <div class="w3-twothird">
              <h2>{{ blog.title }}</h2>
              <p>
                {{ blog.subject }} <br>
              </p>
              <p> ผู้เขียน :  {{ blog.author }}
              </p>
             <div class="col">
              <img src="../assets/hero-1.jpg" width="250">
            </div>
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
      Blogs: [],
    };
  },
  created() {
    let apiURL = 'http://localhost:4000/apiblog';
    axios
      .get(apiURL)
      .then((res) => {
        this.Blogs = res.data;
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


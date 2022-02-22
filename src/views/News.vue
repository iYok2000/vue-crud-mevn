<template>
  <div class="news">
    <html>
      <title>W3.CSS</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <body>
        <div class="w3-container">
          <h1 class="w3-xxxlarge w3-animate-bottom">บทความสุขภาพ</h1>
        </div>
        <div class="ui">
          <br />
          <div class="ui center aligned container">
            <div class="ui pointing menu compact">
              <router-link to="/createComponent" exact class="item">
                <i class="plus circle icon"></i> สร้างบทความ
              </router-link>
              <router-link to="/view" exact class="item">
                <i class="tasks icon"></i> ลบ / แก้ไข
              </router-link>
            </div>
          </div>
        </div>

        <div class="w3-content" v-for="task in Tasks" :key="task._id">
          <div id="ct">
            <div class="corner" id="left_top"></div>
            <div class="corner" id="left_bottom"></div>
            <div class="corner" id="right_top"></div>
            <div class="corner" id="right_bottom"></div>
            <span>{{ task.aka}}</span>
            <blockquote>
              <h3>
                <i
                  >&ldquo;{{task.title}}&rdquo;
                </i><br>
                
              </h3>
              <i
                  >{{task.subject}};
                </i>
            </blockquote>
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
/*.w3-content {
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgb(214, 213, 230);
  background: #d1ccc0;
  margin-top: 10px;
}*/
.w3-xxxlarge {
  background-color: rgb(175, 130, 100);
}
.w3-container {
  background-color: rgb(175, 130, 100);
}

body{background:#1D1F20;}
#ct{height:300px; width:900px;border:1px solid #f1c40f;margin: 100px auto;text-align:center;position:relative;color:#fff;padding:15px;}
span{
  background:#1D1F20;
  color:#f1c40f;
  padding:0 10px;
  font-size:20px;
  position:relative; 
  top:-28px;
}
.corner{height:30px;
  width:30px;
  border-radius:50%;
  border:1px solid #fff;
  transform:rotate(-45deg);  
  position:absolute;
  background:#1D1F20;
}

#left_top{
  top:-16px;
  left:-16px;
  border-color:transparent transparent #f1c40f transparent;
}
#right_top{
  top:-16px;
  right:-16px;
  border-color:transparent transparent transparent #f1c40f;
}
#left_bottom{
  bottom:-16px;
  left:-16px;
  border-color:transparent #f1c40f transparent transparent ;
}
#right_bottom{
  bottom:-16px;
  right:-16px;
  border-color:#f1c40f transparent transparent transparent;
}
p{padding-top:13px;font-size:18px}
</style>


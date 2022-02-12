<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <div class="header">
        <h1>คำนวณค่า BMI ดัชนีมวลกาย</h1>
        <p>คำนวนอัตราการเผาผลาญพลังงานของคุณ</p>
      </div>

      <div class="row">
        <section class="contact-us" id="contact">
        <div class="column side">
          <h3 class="hed3">Body Metabolic Rate</h3>
        <div class="fix">
          <p >สูตรคำนวณอัตราการเผาผลาญของร่างกายในชีวิตประจำวันคือ</p>
          <h2>สำหรับผู้ชาย</h2>
          <p >
            BMR = 66 + (13.7 x น้ำหนักตัวเป็น กก.) + (5 x ส่วนสูงเป็น ซม.) –
            (6.8 x อายุ)
          </p>
          <h2>สำหรับผู้หญิง</h2>
          <p>
            BMR = 665 + (9.6 x น้ำหนักตัวเป็น กก.) + (1.8 x ส่วนสูงเป็น ซม.) –
            (4.7 x อายุ)
          </p>
          <p>โดยตัวแปรของเราจะขึ้นอยู่กับการออกกำลังของเราดังนี้</p>
          <li>นั่งทำงานอยู่กับที่ และไม่ได้ออกกำลังกายเลย = BMR x 1.2</li>
          <li>
            ออกกำลังกายหรือเล่นกีฬาเล็กน้อย ประมาณอาทิตย์ละ 1-3 วัน = BMR x
            1.375
          </li>
          <li>
            ออกกำลังกายหรือเล่นกีฬาปานกลาง ประมาณอาทิตย์ละ 3-5 วัน = BMR x 1.55
          </li>
          <li>
            ออกกำลังกายหรือเล่นกีฬาอย่างหนักประมาณอาทิตย์ละ 6-7 วัน = BMR x 1.725
          </li>
          <li>ออกกำลังกายหรือเล่นกีฬาอย่างหนักทุกวันเช้าเย็น = BMR x 1.9</li>

         <h2 class="hed3"> BMR คืออะไร?</h2><br>
          <p align="left" class="fix">
            BMR ย่อมาจาก Basal Metabolic Rate หรือ
            อัตราการเผาผลาญพลังงานของร่างกาย “ขณะพักผ่อน”
            คือเมื่อร่างกายอยู่นิ่งๆ ไม่มีกิจกรรมอื่นๆ เป็นขณะที่ระบบย่อยพักงาน
            ซึ่งเป็นพลังงานที่ถูกใช้ไปเพียงเพื่อรักษาระดับการมีชีวิต เช่น
            หัวใจเต้น ปอด ตับ กล้ามเนื้อ ผิวหนัง และ อื่นๆ การวัดค่า BMR
            เพื่อการนำไปเป็นฐานของการคำนวณพลังงานที่ต้องการต่อวัน โดยคำนวณจาก
            กิจกรรมต่อวันของแต่ละคน โดยเฉลี่ย จะใช้ BMR คูณด้วย 1.2 ถึง 1.9
            ขึ้นอยู่กับกิจกรรมและรูปแบบชีวิตของแต่ละคน โดยคุณสามารถคำนวณ
            ปริมาณพลังงานที่เหมาะสมต่อวันได้จาก
            <a href="/"> Daily Calorie Calculator</a> หรือ สูตรปริมาณแคลอรี่ต่อวัน
            ตามกิจกรรมของคุณ
          </p>
        </div>
        </div>

        <div class="column middle">
          <h1 class="register-title">Body Metabolic Rate</h1>
          <form class="register" v-on:submit="submitForm">
            <div class="register-switch">
              <button @click="Onclick_fe"  class="register-switch-label">Female</button>
              <button @click="Onclick_m"  class="register-switch-label">Male</button>
              
            </div>
            <input
              type="number"
              class="register-input"
              v-model="Age"
              placeholder="อายุ ( ปี )"
            />
            <input
              type="number"
              class="register-input"
              v-model="Weight"
              placeholder="น้ำหนัก ( กิโลกรัม )"
            />
            <input
              type="number"
              class="register-input"
              v-model="Hight"
              placeholder="ส่วนสูง ( เซนติเมตร )"
            /><br>
            <button class="button3" @click="Onclick_calculate" > คำนวณ </button>
            <h3 class="hed3"> ค่า MBR ของคุณ คือ {{ sumBMI }}</h3>
          </form>
          
        </div>
        <div class="column side">
          
    <div class="container">
      <div class="row">
        <div class="col-lg-10 align-self-center">
          <div class="row">
            <div class="col-lg-15">
                <div class="row">
                   <!-- css !-->
                   <div class="col-lg-15">
          <div class="right-info">
            <ul>
              <li>
                <h6 >ไปที่หน้าคำนวณ BMI</h6>
               <router-link to="/bmi"> คลิ๊กที่นี่ </router-link>
              </li>
              <li>
                <h6>ไปที่หน้าคำนวณ BMR</h6>
                <router-link to="/bmr"> คลิ๊กที่นี่ </router-link>
              </li>
              <li>
                <h6>ไปที่หน้าคำนวณ IWC</h6>
                <router-link to="/iwc"> คลิ๊กที่นี่ </router-link>
              </li>
              <li>
                <h6>ไปที่หน้าคำนวณ Body Fat</h6>
                <router-link to="/bfat"> คลิ๊กที่นี่ </router-link>
              </li>
            </ul>
          </div>
        </div>
                </div>
            </div>
          </div> 
        </div> 
      </div> 
    </div> 
             

        <!-- colum side close !-->    
        </div>
        <!-- colum side close !-->   
      </section>
        <div class="topnav">
          <router-link to="/bmr"> ไปที่หน้า คำนวณค่า BMR </router-link>
          <router-link to="/bmi"> ไปที่หน้า คำนวณค่า BMI </router-link>
          <router-link to="/iwc">  ไปที่หน้า คำนวณค่า น้ำหนักที่เหมาะสมกับคุณ </router-link>
        </div>
      </div>
      
    </body>
  </html>
</template>

<script>
export default {
  data() {
    return {
      Weight: "",
      Hight: "",
      Age:"",
      sex:"",
      Male:"66",
      Female:"665",
      sumBMI:"",
    };
  },

  computed: {
    /*sumBMI() {
      if(this.Male == 66){
          return Number(this.Male)+(Number(this.Weight)*13.7) + (Number(this.Hight)*5) - (Number(this.Age)*6.8);
      }
      else 
         return Number(this.Female)+(Number(this.Weight)*9.6) + (Number(this.Hight)*1.8) - (Number(this.Age)*4.7);
    },*/
  },
  methods: {
     Onclick_m() {
         this.sex = true
     },
     Onclick_fe() {
         this.sex = false
     },
     /*
    submitForm : function(event){
            event.preventDefault(),
            
            //process...             
            event.target.reset()
        },
    */
    Onclick_calculate(){
       
      if(this.sex == true){
          return this.sumBMI = Number(this.Male)+(Number(this.Weight)*13.7) + (Number(this.Hight)*5) - (Number(this.Age)*6.8);
      }
      else 
         return this.sumBMI = Number(this.Female)+(Number(this.Weight)*9.6) + (Number(this.Hight)*1.8) - (Number(this.Age)*4.7);
    }
    
        
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

 /* test css */
section.contact-us {
  background-image: url(../assets/meetings-bg.jpg);
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0  0 110px;
  box-shadow: 10;
  
}

section.contact-us #contact {
  background-color: #fff;
  border-radius: 20px;
  padding: 40px;
}

section.contact-us #contact h2 {
  text-transform: uppercase;
  color: #1f272b;
  border-bottom: 1px solid #eee;
  margin-bottom: 40px;
  padding-bottom: 20px;
  font-size: 22px;
  font-weight: 700;
}
section.contact-us .right-info {
  background-color: #a12c2f;
  border-radius: 20px;
  padding: 40px;
  
}

section.contact-us .right-info ul li {
  display: inline-block;
  border-bottom: 1px solid rgba(250, 250, 250, 0.15);
  margin-bottom: 30px;
  padding-bottom: 30px;
}

section.contact-us .right-info ul li:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

section.contact-us .right-info ul li h6 {
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
}

section.contact-us .right-info ul li span {
  display: block;
  font-size: 18px;
  color: #fff;
  font-weight: 700;
}

/* end css test */
.button3 {
  background-color: white; 
  color: black; 
  border: 2px solid #f44336;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button3:hover {
  background-color: #f44336;
  color: white;
}
.hed3 {
  color: #0c0c0c;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgb(214, 213, 230);
  background: #d1ccc0;
  margin-top: 10px;
  text-align: center;
  font-size: 25px;
}
body {
  margin: 0;
}

/* Style the header */
.header {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: center;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  /*align-items: center;
  justify-content: center;
  justify-items: center;
  */
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Create three unequal columns that floats next to each other */
.column {
  float: left;
  padding: 10px;
}
.register-title {
  width: 270px;
  line-height: 43px;
  margin: 50px auto 20px;
  font-size: 19px;
  font-weight: 500;
  color: white;
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  background: #d7604b;
  border-radius: 3px;
  background-image: -webkit-linear-gradient(top, #dc745e, #d45742);
  background-image: -moz-linear-gradient(top, #dc745e, #d45742);
  background-image: -o-linear-gradient(top, #dc745e, #d45742);
  background-image: linear-gradient(to bottom, #dc745e, #d45742);
  -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 1px 1px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 1px 1px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3);
}
 /* register box */
.register {
  margin: 0 auto;
  width: 500px;
  height: 400px;
  padding: 20px;
  background: #e8ecde;
  border-radius: 3px;
  -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3);
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgfqJOREUVVVnnwZShIRDn9AMu43toaPgQxg&usqp=CAU")
    no-repeat center;
  background-size: cover;
}

input {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.register-input {
  display: block;
  width: 100%;
  height: 38px;
  margin-top: 2px;
  font-weight: 500;
  background: none;
  border: 0;
  border-bottom: 1px solid #d8d8d8;
}
.register-input:focus {
  border-color: #1e9ce6;
  outline: 0;
}

.register-button {
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 25px;
  font-size: 16px;
  font-weight: bold;
  color: #494d59;
  text-align: center;
  text-shadow: 0 1px rgba(255, 255, 255, 0.5);
  background: #fcfcfc;
  border: 1px solid;
  border-color: #d8d8d8 #d1d1d1 #c3c3c3;
  border-radius: 2px;
  cursor: pointer;
  background-image: -webkit-linear-gradient(top, #fefefe, #eeeeee);
  background-image: -moz-linear-gradient(top, #fefefe, #eeeeee);
  background-image: -o-linear-gradient(top, #fefefe, #eeeeee);
  background-image: linear-gradient(to bottom, #fefefe, #eeeeee);
  -webkit-box-shadow: inset 0 -1px rgba(0, 0, 0, 0.03),
    0 1px rgba(0, 0, 0, 0.04);
  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.03), 0 1px rgba(0, 0, 0, 0.04);
}
.register-button:active {
  background: #eee;
  border-color: #c3c3c3 #d1d1d1 #d8d8d8;
  background-image: -webkit-linear-gradient(top, #eeeeee, #fcfcfc);
  background-image: -moz-linear-gradient(top, #eeeeee, #fcfcfc);
  background-image: -o-linear-gradient(top, #eeeeee, #fcfcfc);
  background-image: linear-gradient(to bottom, #eeeeee, #fcfcfc);
  -webkit-box-shadow: inset 0 1px rgba(0, 0, 0, 0.03);
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.03);
}
.register-button:focus {
  outline: 0;
}

.register-switch {
  height: 50px;
  margin-bottom: 15px;
  padding: 4px 6px;
  background: #6db244;
  border-radius: 3px;
  background-image: -webkit-linear-gradient(top, #60a83a, #7dbe52);
  background-image: -moz-linear-gradient(top, #60a83a, #7dbe52);
  background-image: -o-linear-gradient(top, #60a83a, #7dbe52);
  background-image: linear-gradient(to bottom, #60a83a, #7dbe52);
  -webkit-box-shadow: inset 0 1px rgba(0, 0, 0, 0.05),
    inset 1px 0 rgba(0, 0, 0, 0.02), inset -1px 0 rgba(0, 0, 0, 0.02);
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.05), inset 1px 0 rgba(0, 0, 0, 0.02),
    inset -1px 0 rgba(0, 0, 0, 0.02);
}

.register-switch-input {
  display: none;
}

.register-switch-label {
  float: left;
  width: 50%;
  line-height: 32px;
  color: #2ab80d;
  text-align: center;
  text-shadow: 0 -1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.register-switch-label:hover, a:hover{
    color: rgb(209, 206, 49);
}


:-moz-placeholder {
  color: #aaa;
  font-weight: 300;
}

::-moz-placeholder {
  color: #aaa;
  font-weight: 300;
  opacity: 1;
}

::-webkit-input-placeholder {
  color: #aaa;
  font-weight: 300;
}

:-ms-input-placeholder {
  color: #aaa;
  font-weight: 300;
}

::-moz-focus-inner {
  border: 0;
  padding: 0;
}
/* Left and right column */
.column.side {
  width: 25%;
  text-align: left;
  margin-left: 30px;
  background: white;
  background-image: url(../assets/meetings-bg.jpg);
  
}

/* Middle column */
.column.middle {
  width: 40%;
  border-radius: 10px;
  height: 500px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
 .fix{ 
   color: white;
 }
/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column.side,
  .column.middle {
    width: 100%;
  }
}
</style>
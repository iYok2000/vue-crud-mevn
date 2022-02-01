<template>
  <!DOCTYPE html>
  <html>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    <head>
      <title>BMI form</title>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
        rel="stylesheet"
      />
    </head>
    <body>
      <div class="main-block">
        <br />
        <h1>คำนวณค่า BMI ดัชนีมวลกาย</h1>
        <br />
        <h3>ค่าดัชนีที่ใช้ชี้วัดความสมดุลของน้ำหนักตัวและส่วนสูง</h3>
        <form action="/">
          <div class="info">
            <input
              type="number"
              v-model="weight"
              name="name"
              placeholder="น้ำหนัก (กิโลกรัม)"
            />
            <input
              type="number"
              v-model="hight"
              name="name"
              placeholder="ส่วนสูง ( เมตร )"
            /><br />
            <h3>ค่า BMI ที่ได้คือ {{ sumBMI }}</h3>
          </div>
        </form>
        
      </div>
      <div class="topnav">
        <router-link to="/bmr"> ไปที่หน้า  คำนวณค่า BMR </router-link> 
        <router-link to="/bmi"> ไปที่หน้า  คำนวณค่า BMI </router-link> 
        <router-link to="/iwc"> ไปที่หน้า คำนวณค่า น้ำหนักที่เหมาะสมกับคุณ </router-link>
      </div>
      <br />
      
      <h2 align="center">ตารางรายละเอียดค่า BMI</h2>
      <br />
      
      <table align="center">
        <tr>
          <th>ค่าดัชนีมวลกาย ( BMI )</th>
          <th>อยู่ในเกณฑ์</th>
          <th>สิ่งที่ควรทำ</th>
        </tr>
        <tr>
          <td>น้อยกว่า 18.5</td>
          <td>ผอมเกินไป</td>
          <td>ควรตรวจสอบภาวะโภชนาการ ออกกำลังกาย สร้างกล้ามเนื้อ</td>
        </tr>
        <tr>
          <td>ระหว่าง 18.5-22.9</td>
          <td>น้ำหนักตัวปกติ</td>
          <td>หมั่นออกกำลังกาย พักผ่อน และดูแลโภชนาการ อย่าให้อ้วน</td>
        </tr>
        <tr>
          <td>ระหว่าง 23.0-24.9</td>
          <td>น้ำหนักเกิน เกือบอ้วน</td>
          <td>
            ดูแลร่างกายเพิ่มขึ้นจากคนน้ำหนักตัวปกติ
            โดยเฉพาะการรับประทานอาหารการออกกำลังกาย
          </td>
        </tr>
        <tr>
          <td>ระหว่าง 25.0-29.9</td>
          <td>อ้วนแล้ว</td>
          <td>
            โรคอ้วนระดับแรก เสี่ยงต่อการเป็นโรคความดันและเบาหวาน
            ต้องรีบลดน้ำหนักอย่างจริงจัง
          </td>
        </tr>
        <tr>
          <td>มากกว่า 30</td>
          <td>อ้วนมาก เสี่ยงต่อโรคต่างๆ</td>
          <td>
            โรคอ้วนระดับสอง เสี่ยงต่อการเป็นโรคที่เกี่ยวกับความอ้วนทั้งหมด
            ต้องรีบลดน้ำหนักอย่างเร่งด่วนหรือควรปรึกษาแพทย์ทันทีเพื่อตรวจร่างกาย
          </td>
        </tr>
      </table>

      <div class="w3-content">
        <div class="w3-row w3-margin">
          <div class="w3-third">
            <img
              src="data:image/jpeg;base64,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"
              style="width: 100%; min-height: 100%"
            />
          </div>
          <div class="w3-twothird">
            <h4>รายละเอียด</h4>
            <p>
              ดัชนีมวลกาย หรือ Body mass index (BMI) คิดค้นขึ้นโดย Adolphe
              Quetlet นักวิทยาศาสตร์ชาวเบลเยี่ยม
              ปัจจุบันใช้เป็นเกณฑ์เบื้องต้นในการประเมินความสมดุลของร่างกายระหว่างน้ำหนักตัวและส่วนสูง
              ทำให้ช่วยในการแยกแยะแต่ละบุคคลออกเป็น ผู้ที่อยู่ในเกณฑ์ผอม ปกติ
              อ้วนหรืออ้วนมาก เป็นต้น ค่านี้คำนวณได้จากการนำ
              “น้ำหนักตัว”(หน่วยเป็นกิโลกรัม) หารด้วย “ส่วนสูง” ยกกำลังสอง
              (หน่วยเป็นเมตร) โดยสูตรคำนวณนี้เหมาะสำหรับใช้ในผู้ที่มีอายุ 20 ปี
              ขึ้นไป โดยองค์การอนามัยโลก (WHO) ได้นำค่าที่ได้มาจัดให้อยู่ในเกณฑ์
            </p>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>


<style scoped>
html,
body {
  height: 100%;
}
body,
input,
select {
  padding: 0;
  margin: 0;
  outline: none;
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
  color: #eee;
}
h1,
h4 {
  font-size: 35px;
  color: #1c87c9;
}
p {
  color: #080505;
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

h3 {
  font-weight: 400;
}
h1 {
  font-size: 72px;
}
h3 {
  color: #0c0c0c;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgb(214, 213, 230);
  background: #d1ccc0;
  margin-top: 10px;
}
h2 {
  color: #1c87c9;
  width: 100%;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgb(214, 213, 230);
  background: #d1ccc0;
  margin-top: 10px;
  justify-content: center;
}
.main-block,
.info {
  display: flex;
  flex-direction: column;
}
.main-block {
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background: url("https://images.pexels.com/photos/50597/man-male-boy-a-person-50597.jpeg?cs=srgb&dl=pexels-pixabay-50597.jpg&fm=jpg")
    no-repeat center;
  background-size: cover;
}
form {
  width: 70%;
  padding: 150px;
  margin-bottom: 150px;
  border-radius: 60px;
  background: rgba(70, 158, 139, 0.9);
}
input,
select {
  padding: 5px;
  margin-bottom: 20px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #eee;
}
input::placeholder {
  color: #eee;
}
option {
  background: black;
  border: none;
}
.metod {
  display: flex;
}
input[type="radio"] {
  display: none;
}
label.radio {
  position: relative;
  display: inline-block;
  margin-right: 20px;
  text-indent: 32px;
  cursor: pointer;
}
label.radio:before {
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 2px solid #1c87c9;
}
label.radio:after {
  content: "";
  position: absolute;
  width: 8px;
  height: 4px;
  top: 5px;
  left: 5px;
  border-bottom: 3px solid #1c87c9;
  border-left: 3px solid #1c87c9;
  transform: rotate(-45deg);
  opacity: 0;
}
input[type="radio"]:checked + label:after {
  opacity: 1;
}
button {
  display: block;
  width: 200px;
  padding: 10px;
  margin: 20px auto 0;
  border: none;
  border-radius: 5px;
  background: #1c87c9;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}
button:hover {
  background: #095484;
}
@media (min-width: 568px) {
  .info {
    flex-flow: row wrap;
    justify-content: space-between;
  }
  input {
    width: 45%;
  }
  input.fname {
    width: 100%;
  }
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 70%;
}

td,
th {
  border: 1px solid #070202;
  text-align: left;
  padding: 8px;
  color: #0c0c0c;
}

tr:nth-child(even) {
  background-color: #5092dd;
}
</style>

<script>
export default {
  data() {
    return {
      weight: "",
      hight: "",
    };
  },

  computed: {
    sumBMI() {
      return Number(this.weight) / (Number(this.hight) * Number(this.hight));
    },
  },
};
</script>


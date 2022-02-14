<template>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
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
<div class="all">
  <div class="section">
    <div class="container">
        <h1 class="hed3">ตารางพลังงานจากอาหาร <br> Calrories Table</h1>
    </div>
  </div>
  <h1 align="center"> พลังงานในวัตถุดิบประเภทผัก </h1>
<div style="overflow-x:auto;">
   <div class="position">
    <button class="button" @click="clicktoback">Back</button>
  </div>
  <table>
    <tr>
      <th> อาหาร</th>
      <th> ปริมาณ</th>
      <th>พลังงาน (kcal)</th>
      
    </tr>
    <tr>
      <td>กระเจี๊ยบเปรี้ยว,ใบ</td>
      <td>100 g</td>
      <td>48</td>
    </tr>
    <tr>
      <td>กระเจี๊ยบมอญ,ฝักอ่อน</td>
       <td>100 g</td>
     <td>26</td>
    </tr>
    <tr>
      <td>กระชาย</td>
       <td>100 g</td>
      <td>54</td>
    </tr>
    <tr>
      <td>กระโดน(โดน),ยอด</td>
      <td>100 g</td>
      <td>96</td>
    </tr>
    <tr>
      <td>กระถิน,ยอดอ่อน</td>
      <td>100 g</td>
      <td>77</td>
    </tr>
    <tr>
      <td>กระทือขาว</td>
      <td>100 g</td>
      <td>17</td>
    </tr>
    <tr>
      <td>กระทือแดง</td>
      <td>100 g</td>
      <td>18</td>
    </tr>
    <tr>
      <td>กรุงเขมา, ใบ</td>
      <td>100 g</td>
      <td>95</td>
    </tr>
    <tr>
      <td>กรุงเขมา, น้ำคั้นจากใบ</td>
      <td>100 g</td>
      <td>3</td>
    </tr>
    <tr>
      <td>กะทกรก, ยอด</td>
      <td>100 g</td>
      <td>66</td>
    </tr>
    <tr>
      <td>กะเพราแดง,ใบ</td>
      <td>100 g</td>
      <td>46</td>
    </tr>
    <tr>
      <td>กะหล่ำ,ดอก</td>
      <td>100 g</td>
      <td>13</td>
    </tr>
    <tr>
      <td>กะหล่ำปลี</td>
      <td>100 g</td>
      <td>16</td>
    </tr>
    <tr>
      <td>กุยฉ่าย,ดอก</td>
      <td>100 g</td>
      <td>32</td>
    </tr>
    <tr>
      <td>ขจร,ดอก</td>
      <td>100 g</td>
      <td>78</td>
    </tr>
    <tr>
      <td>ขนุน,อ่อน</td>
      <td>100 g</td>
      <td>49</td>
    </tr>
    <tr>
      <td>ขมิ้นขาว</td>
      <td>100 g</td>
      <td>26</td>
    </tr>
    <tr>
      <td>ข้าวโพด,อ่อน</td>
      <td>100 g</td>
      <td>33</td>
    </tr>
    <tr>
      <td>ข้าวสาร,ดอก</td>
      <td>100 g</td>
      <td>39</td>
    </tr>
    <tr>
      <td>ข่าอ่อน,หน่อ</td>
      <td>100 g</td>
      <td>21</td>
    </tr>
    <tr>
      <td>ข่าอ่อน,หัว</td>
      <td>100 g</td>
      <td>24</td>
    </tr>
    <tr>
      <td>ขิงแก่</td>
      <td>100 g</td>
      <td>28</td>
    </tr>
    <tr>
      <td>ขิง,อ่อน</td>
      <td>100 g</td>
      <td>14</td>
    </tr>
    <tr>
      <td>ขี้เหล็ก, ยอดและใบอ่อน</td>
      <td>100 g</td>
      <td>87</td>
    </tr>
    <tr>
      <td>ขี้เหล็ก, ดอก</td>
      <td>100 g</td>
      <td>98</td>
    </tr>
    <tr>
      <td>คื่นช่าย</td>
      <td>100 g</td>
      <td>23</td>
    </tr>
    <tr>
      <td>คูน</td>
      <td>100 g</td>
      <td>12</td>
    </tr>
    <tr>
      <td>แค, ดอก</td>
      <td>100 g</td>
      <td>38</td>
    </tr>
    <tr>
      <td>แค, ยอด</td>
      <td>100 g</td>
      <td>108</td>
    </tr>
    <tr>
      <td>แครอท</td>
      <td>100 g</td>
      <td>42</td>
    </tr>
    <tr>
      <td>จำปานา</td>
      <td>100 g</td>
      <td>37</td>
    </tr>
    <tr>
      <td>จิก, ยอด</td>
      <td>100 g</td>
      <td>56</td>
    </tr>
    <tr>
      <td>ชะพลู,ใบ</td>
      <td>100 g</td>
      <td>119</td>
    </tr>
    <tr>
      <td>ชะมวง,ใบ</td>
      <td>100 g</td>
      <td>64</td>
    </tr>
    <tr>
      <td>ชะอม, ยอด</td>
      <td>100 g</td>
      <td>80</td>
    </tr>
    <tr>
      <td>ดอกงิ้วแดง, แห้ง</td>
      <td>100 g</td>
      <td>317</td>
    </tr>

  </table>
</div>
  <div class="grid-container">
    <div class="item">
        <div class="item-img">
          <img
            src="https://www.lovefitt.com/system/wp-content/themes/lovefitt/img/calories-table/icon-918.png"
            alt="พลังงานในไข่"
          />
        </div>
        <div class="item-content">
           <router-link to="/egg"> พลังงานในไข่ </router-link> &nbsp;
        </div>
    </div>
    <div class="item col-20-100 col">
        <div class="item-img">
          <img
            src="https://www.lovefitt.com/system/wp-content/themes/lovefitt/img/calories-table/icon-755.png"
            alt="พลังงานในปลา กุ้ง และสัตว์น้ำ"
          />
        </div>
        <div class="item-content">
          <router-link to="/fish"> พลังงานในกุ้งและสัตว์น้ำ </router-link>&nbsp;
        </div>
      </div>
    <div class="item col-20-100 col">
     <div class="item-img">
          <img
            src="https://www.lovefitt.com/system/wp-content/themes/lovefitt/img/calories-table/icon-754.png"
            alt="พลังงานในเนื้อสัตว์"
          />
        </div>
        <div class="item-content">
          <router-link to="/meat"> พลังงานในเนื้อสัตว์ </router-link>&nbsp;
        </div>
      </div>
    <div class="item col-20-100 col">
        <div class="item-img">
          <img
            src="https://www.lovefitt.com/system/wp-content/themes/lovefitt/img/calories-table/icon-695.png"
            alt="พลังงานในวัตถุดิบประเภทผัก"
          />
        </div>
        <div class="item-content">
         <router-link to="/veg"> พลังงานในวัตถุดิบประเภทผัก </router-link>&nbsp;
        </div>
    </div>
    <div class="item col-20-100 col">
      <div class="item-img">
          <img
            src="https://www.lovefitt.com/system/wp-content/themes/lovefitt/img/calories-table/icon-634.png"
            alt="พลังงานในอาหารจานเดียวประเภทข้าว"
          />
        </div>
        <div class="item-content">
           <router-link to="/food"> พลังงานในวัตถุดิบประเภทข้าว </router-link>&nbsp;
        </div>
    </div>
    <div class="item col-20-100 col">
       <div class="item-img">
            <img
              src="https://www.lovefitt.com/system/wp-content/themes/lovefitt/img/calories-table/icon-654.png"
              alt="พลังงานของผลไม้"
            />
          </div>
          <div class="item-content">
            <router-link to="/fruit">พลังงานในผลไม้</router-link> &nbsp;
          </div>
          <div class="clear"></div>
      </div>
    <div class="item col-20-100 col">
      <div class="item-img">
          <img
            src="https://www.lovefitt.com/system/wp-content/themes/lovefitt/img/calories-table/icon-666.png"
            alt="พลังงานอาหารประเภทนม"
          />
        </div>
        <div class="item-content">
          <router-link to="/milk">พลังงานในอาหารประเภทนม</router-link> &nbsp;
        </div>
    </div>
    <div class="item col-20-100 col">
      <div class="item-img">
          <img
            src="https://www.lovefitt.com/system/wp-content/themes/lovefitt/img/calories-table/icon-667.png"
            alt="พลังงานของถั่วและงา"
          />
        </div>
        <div class="item-content">
          <router-link to="/been">พลังงานในถั่วและงา</router-link> &nbsp;
        </div>
        <div class="clear"></div>
    </div>
  </div>
  </div>
  
</template>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 50%;
  margin-top: 2%;
  margin-left: auto;
  margin-right: auto;
  border: 5px solid #ddd;
}

th,tr:hover {
  text-align: center;
  padding: 20px;
  font-size: 25px;
}
tr:nth-child(even){background-color: #f2f2f2}
 
tr{
    font-size: 24px;
}

.tr:active {
  background-color: #4CAF50;
  box-shadow: 1px 5px #666;
  cursor: grab;
  transform: translateY(10px);
font-size: 500%;
}
.grid-container {
  display: grid;
  height: 500px;
  align-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /*background-color: #b7f2d9;
  */
  grid-gap: 8px;

  padding: 250px;
}

.grid-container > div {
  background-color: #f2f2f3;
  text-align: center;
  padding: 20px 0;
  font-size: 3\0px;
  border-radius: 20%;
  
}
.section {
  background-image: url(../../assets/he5.jpg);
  background-position: center center;
  background-origin: padding-box;
  background-size: auto;
  padding: 100px 0 70px 100px;
  box-shadow: 10;
  
}
.hed3 {
  color: #0c0c0c;
  padding: 25px;
  border-radius: 20px;
  background: #c2aa86;
  margin-top: 10px;
}
.item{
  
  padding: 10px 15px;
  font-size: 24px;
  cursor: grab;
  text-align: center;
  color: #fff;
  background-color: #4CAF50;
  border-radius: 15px;
  box-shadow: 4px 6px #999;
}
.item:hover {background-color: #b9d831}

.item:active {
  background-color: #4CAF50;
  box-shadow: 1px 5px #666;
  cursor: grab;
  transform: translateY(4px);
}
.all{
    cursor: grab;
}
.button {
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #04AA6D;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.position{
  margin-right: 60%;
}

</style>

<script>
export default {
  data() {
    return ""
  },

  methods: {
    clicktoback() {
      this.$router.push('/calroriestable');
    }
  }
}
</script>
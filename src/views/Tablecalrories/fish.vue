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
  <h1 align="center"> พลังงานในกุ้งและสัตว์น้ำ </h1>
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
      <td>กระเพาะปลา, ทอด</td>
      <td>100 g</td>
      <td>682</td>
    </tr>
    <tr>
      <td>กุ้งกุลาดำ, เนื้อ</td>
      <td>100 g</td>
     <td>92</td>
    </tr>
    <tr>
      <td>กุ้งกุลาดำ, หัว</td>
     <td>100 g</td>
      <td>120</td>
    </tr>
    <tr>
      <td>กุ้งเคย</td>
      <td>100 g</td>
      <td>61</td>
    </tr>
    <tr>
      <td>กุ้งจ่อม (กุ้งหมักข้าวคั่ว)</td>
      <td>100 g</td>
      <td>135</td>
    </tr>
     <tr>
      <td>กุ้งฝอย, สด</td>
     <td>100 g</td>
      <td>88</td>
    </tr>
     <tr>
      <td>กุ้งส้ม(กุ้งหมัก)</td>
     <td>100 g</td>
      <td>58</td>
    </tr>
     <tr>
      <td>กุ้งแห้งตัวเล็ก</td>
     <td>100 g</td>
      <td>263</td>
    </tr>
     <tr>
      <td>ไตปลากระบอก</td>
     <td>100 g</td>
      <td>90</td>
    </tr>
     <tr>
      <td>น้ำปู</td>
     <td>100 g</td>
      <td>210</td>
    </tr>
     <tr>
      <td>ปลากดทะเล, แห้ง</td>
     <td>100 g</td>
      <td>210</td>
    </tr>
     <tr>
      <td>ปลากดทะเล, แห้ง</td>
     <td>100 g</td>
      <td>219</td>
    </tr>
     <tr>
      <td>ปลากระบอก</td>
     <td>100 g</td>
      <td>98</td>
    </tr>
     <tr>
      <td>ปลากราย</td>
     <td>100 g</td>
      <td>84</td>
    </tr>
     <tr>
      <td>ปลาเจ่า</td>
     <td>100 g</td>
      <td>117</td>
    </tr>
     <tr>
      <td>ปลาช่อน</td>
     <td>100 g</td>
      <td>122</td>
    </tr>
     <tr>
      <td>ปลาช่อนทะเล, แห้ง</td>
     <td>100 g</td>
      <td>185</td>
    </tr>
     <tr>
      <td>ปลาดุก</td>
     <td>100 g</td>
      <td>114</td>
    </tr>
    <tr>
      <td>ปลาแดง, ปลาทะเล, สด</td>
     <td>100 g</td>
      <td>120</td>
    </tr>
    <tr>
      <td>ปลาตะเพียน</td>
     <td>100 g</td>
      <td>111</td>
    </tr>
    <tr>
      <td>ปลาตาเดียว (ปลาซีกเดียว)</td>
     <td>100 g</td>
      <td>89</td>
    </tr>
    <tr>
      <td>ปลาตาโต</td>
     <td>100 g</td>
      <td>117</td>
    </tr>
    <tr>
      <td>ปลานิล</td>
     <td>100 g</td>
      <td>129</td>
    </tr>
    <tr>
      <td>ปลาทู, นึ่ง</td>
     <td>100 g</td>
      <td>136</td>
    </tr>
    <tr>
      <td>ปลาทู, สด</td>
     <td>100 g</td>
      <td>140</td>
    </tr>
    <tr>
      <td>ปลาทูน่า, สด</td>
     <td>100 g</td>
      <td>110</td>
    </tr>
    <tr>
      <td>ปลาทูน่า, ในน้ำมัน</td>
     <td>100 g</td>
      <td>218</td>
    </tr>
    <tr>
      <td>ปลาทูน่า, ในน้ำสลัด</td>
     <td>100 g</td>
      <td>86</td>
    </tr>
    <tr>
      <td>ปูทะเล</td>
     <td>100 g</td>
      <td>117</td>
    </tr>
    <tr>
      <td>ปูม้า</td>
     <td>100 g</td>
      <td>79</td>
    </tr>
    <tr>
      <td>ลูกชิ้นปลา</td>
     <td>100 g</td>
      <td>38</td>
    </tr>
    <tr>
      <td>ลูกชิ้นปลา, ทอด</td>
     <td>100 g</td>
      <td>277</td>
    </tr>
    <tr>
      <td>ลูกชิ้นกุ้ง, ทอด</td>
     <td>100 g</td>
      <td>213</td>
    </tr>
    <tr>
      <td>สมันปลา</td>
     <td>100 g</td>
      <td>386</td>
    </tr>
    <tr>
      <td>หอยกะพง</td>
     <td>100 g</td>
      <td>42</td>
    </tr>
    <tr>
      <td>หอยขม</td>
     <td>100 g</td>
      <td>74</td>
    </tr>
    <tr>
      <td>หอยโข่ง</td>
     <td>100 g</td>
      <td>85</td>
    </tr>
    <tr>
      <td>หอยแครง</td>
     <td>100 g</td>
      <td>81</td>
    </tr>
    <tr>
      <td>หอยนางรม</td>
     <td>100 g</td>
      <td>71</td>
    </tr>
    <tr>
      <td>หอยจูน</td>
     <td>100 g</td>
      <td>86</td>
    </tr>
    <tr>
      <td>หอยแมลงภู่</td>
     <td>100 g</td>
      <td>53</td>
    </tr>
    <tr>
      <td>หูฉลาม, แห้ง</td>
     <td>100 g</td>
      <td>358</td>
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
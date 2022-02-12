<template>
  <section class="contact-us" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 align-self-center">
          <div class="row">
            <div class="col-lg-12">
              <form id="contact" action="" method="post">
                <div class="row">
                  <div class="col-lg-12">
                    <h2>Body Fat calculator<br />คำนวณปริมาณไขมันในร่างกาย</h2>
                  </div>
                  <div class="col-lg-4">
                    <fieldset>
                      <label class="container"
                        >ชาย
                        <input type="radio" name="radio" @click="Onclick_men" />
                      </label>
                    </fieldset>
                  </div>
                  <div class="col-lg-4">
                    <fieldset>
                      <label class="container"
                        >หญิง
                        <input
                          type="radio"
                          checked="checked"
                          name="radio"
                          @click="Onclick_women"
                        />
                      </label>
                    </fieldset>
                  </div>
                  <div class="col-5 " >
                    <input
                      type="text"
                      class="register-input"
                      v-model="weight"
                      placeholder="น้ำหนัก ( กิโลกรัม )"
                    />
                    <input
                      type="text"
                      class="register-input"
                      v-model="waistline"
                      placeholder="รอบเอว บริเวณสะดือ  ( นิ้ว )"
                    />
                    <div v-show="!c_men">
                        <input
                        
                      type="text"
                      class="register-input"
                      v-model="wrist"
                      placeholder="รอบข้อมือ ( นิ้ว )"
                    />
                     <input
                    
                      type="text"
                      class="register-input"
                      v-model="hips"
                      placeholder="รอบสะโพก ( นิ้ว )"
                    />
                     <input
                    
                      type="text"
                      class="register-input"
                      v-model="upperarm"
                      placeholder="รอบต้นแขน ( นิ้ว )"
                    />
                    </div>
                    <br />
                  </div>

                  <h3 class="hed3">ปริมาณไขมันในร่างกาย คือ {{ percend_fat }} เปอร์เซ็น</h3>
                  
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="button" @click="Onclick_sunmit">
                        คำนวณ
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="right-info">
            <ul>
              <li>
                <h6>ไปที่หน้าคำนวณ BMI</h6>
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
  </section>
</template>
<script>
export default {
  data() {
    return {
        ck: "",
        c_men: "",
        weight: "",
        r_weight: "",
        waistline:"",
        wrist:"",
        hips:"",
        upperarm:"",
        sum:"",
        weight_p:"",
        percend_fat:""
        
    };
  },
  methods: {
    Onclick_men() {
      return this.c_men = true;
    },
    Onclick_women() {
      return this.c_men = false;
    },
    Onclick_sunmit() {
      if(this.c_men == true)
        return this.percend_fat = (Number(this.bfm)*100)/Number(this.toPond)
      else 
        return this.percend_fat = (Number(this.bfm_women)*100)/Number(this.toPond)
    },
  },
  computed: {
    toPond() {
      return  Number(this.weight)*2.2
    },
    lbm() {
      return ((Number(this.toPond)*1.082)+94.42) - (Number(this.waistline)*4.15)
    },
    bfm() {
      return Number(this.toPond) - Number(this.lbm)
    },
    lbm_women(){
      return ((Number(this.toPond)*0.732)+8.987) + (Number(this.wrist)/3.14) - (Number(this.waistline)*0.157) - (Number(this.hips)*0.249) + (Number(this.upperarm)*0.434) 
    },
    bfm_women() {
      return Number(this.toPond) - Number(this.lbm_women)
    }
  }
  
};
</script>
<style scoped>
/* 
---------------------------------------------
contact us
--------------------------------------------- 
*/

section.contact-us {
  background-image: url(../assets/meetings-bg.jpg);
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 140px 0px 0px 0px;
}

section.contact-us #contact {
  background-color: #fff;
  border-radius: 20px;
  padding: 40px;
  height: 850px;
  
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

section.contact-us #contact input {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  background-color: #f7f7f7;
  outline: none;
  border: none;
  box-shadow: none;
  font-size: 13px;
  font-weight: 500;
  color: #7a7a7a;
  padding: 0px 15px;
  margin-bottom: 30px;
}

section.contact-us #contact textarea {
  width: 50%;
  min-height: 80px;
  max-height: 80px;
  border-radius: 20px;
  background-color: #f7f7f7;
  outline: none;
  border: none;
  box-shadow: 0 0 10px;
  font-size: 30px;
  font-weight: 500;
  color: #000000;
  padding: 15px;
  margin-bottom: 30px;
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
  align-content: center;
}

section.contact-us #contact button {
  font-size: 13px;
  color: #fff;
  background-color: #a12c2f;
  padding: 12px 30px;
  display: inline-block;
  border-radius: 22px;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s;
  border: none;
  outline: none;
}

section.contact-us #contact button:hover {
  opacity: 0.9;
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
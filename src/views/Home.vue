<template>
  <div class="home">
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Resto - Restaurant Bootstrap 4 Template by GetTemplates.co</title>
    <meta name="description" content="Resto" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- External CSS -->
    <link rel="stylesheet" href="vendor/bootstrap/bootstrap.min.css" />
    <link rel="stylesheet" href="vendor/select2/select2.min.css" />
    <link rel="stylesheet" href="vendor/owlcarousel/owl.carousel.min.css" />
    <link
      rel="stylesheet"
      href="https://cdn.rawgit.com/noelboss/featherlight/1.7.13/release/featherlight.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/css/tempusdominus-bootstrap-4.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/brands.css"
    />

    <!-- Fonts -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Josefin+Sans:300,400,700"
    />
    <link
      rel="stylesheet"
      href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />

    <!-- CSS -->
    <link rel="stylesheet" href="css/style.min.css" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <div class="container">
      <hr width="100%" size="50" color="770088" />

      <div class="row d-flex align-items-center">
        <div class="col-lg-6">
          <img
            alt="Vue logo"
            src="../assets/HHT_TEA_LEAF_VECTOR_480x480@2x.jpg"
          />
          <h1 class="display-4 mb-5">Welcome to <br />HealthyWeb!</h1>
          <div class="mb-2">
            <a
              class="btn btn-primary btn-shadow btn-lg"
              @click="onclickshow"
              role="button"
              >คลิ๊กเพื่อเลื่อนภาพ</a
            >
            <a
              class="btn btn-icon btn-lg"
              href="https://www.youtube.com/watch?v=vul31dDZ2EY"
              data-featherlight="iframe"
              data-featherlight-iframe-allowfullscreen="true"
            >
              <span class="lnr lnr-film-play"></span>
              Play Video
            </a>
          </div>
          <ul class="hero-info list-unstyled d-flex text-center mb-5">
            <li class="border-right">
              <span class="lnr lnr-rocket"></span>
              <h5>Fast Delivery</h5>
            </li>
            <li class="border-right">
              <span class="lnr lnr-leaf"></span>
              <h5>Fresh Food</h5>
            </li>
            <li class="border-right">
              <span class="lnr lnr-bubble"></span>
              <h5>24/7 Support</h5>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 hero-right">
          <div class="owl-carousel owl-theme hero-carousel">
            <div class="item">
              <img
                class="img-fluid"
                v-show="showpic"
                src="../assets/hero-1.jpg"
                alt=""
              />
              <img
                class="img-fluid"
                v-show="!showpic"
                src="../assets/hero-2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <html lang="th">
      <!-- START -->
      <!-- Welcome Section -->
      <section id="gtco-welcome" class="bg-white section-padding">
        <div class="container">
          <div class="section-content">
            <div class="row">
              <div
                class="
                  col-sm-5
                  img-bg
                  d-flex
                  shadow
                  justify-content-md-end
                  img-4
                "
              >
                <img class="w3-serif" src="../assets/pic6.jpg" />
              </div>
              <div class="col-sm-7 py-5 pl-md-0 pl-4">
                <div class="heading-section pl-lg-5 ml-md-5">
                  <br />
                  <h2>ความมั่งคั่งอย่างแรกคือ.. "สุขภาพ"</h2>
                </div>
                <div class="pl-lg-5 ml-md-5">
                  <div class="w3-container">
                    <h1>ความรู้เกี่ยวกับการดูแลสุขภาพที่ดี</h1>
                  </div>

                  <h3 class="mt-5">สูตรอาหารที่ทำง่าย</h3>
                  <div class="row">
                    <div class="col-4">
                      <a href="#" class="thumb-menu">
                        <img
                          class="img-fluid img-cover"
                          src="../assets/pic6.jpg"
                        />
                        <h6>Australian Organic Beef</h6>
                      </a>
                    </div>
                    <div class="col-4">
                      <a href="#" class="thumb-menu">
                        <img
                          class="img-fluid img-cover"
                          src="../assets/he5.jpg"
                        />
                        <h6>Australian Organic Beef</h6>
                      </a>
                    </div>
                    <div class="col-4">
                      <a href="#" class="thumb-menu">
                        <img
                          class="img-fluid img-cover"
                          src="../assets/hero-3.jpg"
                        />
                        <h6>Australian Organic Beef</h6>
                      </a>
                    </div>
                  </div>
                </div>
                <br />
                <a
                  class="btn btn-primary btn-shadow btn-lg"
                  @click="onclicktonews"
                  role="button"
                  >เข้าไปอ่านเลย</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /><br /><br />
      <hr width="100%" size="50" color="770088" />
      <HelloWorld class="myDIV" msg="show new fact here" />

      <div class="hide">
        <br />
        <div class="w3-panel w3-sand w3-leftbar">
          <p>
            <i class="fa fa-quote-right w3-xxlarge w3-opacity"></i><br />
            <i class="w3-serif w3-xlarge"
              >ไม่ว่าจะเป็น สุขภาพทั่วไป การออกกำลังกาย การลดน้ำหนัก
              การกินอาหารเพื่อสุขภาพ ความงาม และเคล็ดลับสุขภาพดีอีกมากมาย
              โดยมีแหล่งอ้างอิงของเนื้อหาที่เชื่อถือได้
              นอกจากนี้เรายังติดตามข่าวสารด้านสุขภาพจากทั่วโลก
              ให้ทุกคนได้อ่านกันในทุกๆวัน.</i
            >
          </p>
        </div>
      </div>
      <!-- End of Welcome Section -->

      <!-- Special Dishes Section -->
      <section id="gtco-special-dishes" class="bg-grey section">
        <div class="container">
          <div class="section-content">
            <div class="heading-section text-center">
              <br />
              <h1 class="header">Special Dishes</h1>
            </div>
            <div class="row mt-5" v-for="blog in Blogs" :key="blog._id">
              <div class="col-lg-5 col-md-6 align-self-center py-5">
                <h2 class="special-number">1</h2>
                <div class="dishes-text">
                  <h3>
                    <span>{{ blog.title }}</span
                    ><br />
                  </h3>
                  <p class="pt-3">
                    {{blog.subject}}
                  </p>
                  <h3 class="special-dishes-price">$15.00</h3>
                  <a href="#" class="btn-primary mt-3">book a table</a>
                </div>
              </div>
              <div
                class="
                  col-lg-5
                  offset-lg-2
                  col-md-6
                  align-self-center
                  mt-4 mt-md-0
                "
              >
                <img
                  v-bind:src="blog.images"
                  alt=""
                  class="img-fluid shadow w-100"
                />
              </div>
            </div>
            <div class="row mt-5">
              <div
                class="
                  col-lg-5 col-md-6
                  align-self-center
                  order-2 order-md-1
                  mt-4 mt-md-0
                "
              ></div>
            </div>
          </div>
        </div>
      </section>
      <!-- End of Special Dishes Section -->

      <!-- end -->
    </html>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "Home",
  src: "vendor/owlcarousel/owl.carousel.min.js",
  data() {
    return {
      Blogs: [],
      showpic: 0,
    };
  },
  components: {
    HelloWorld,
  },
  created() {
    let apiURL = "http://localhost:4000/apiblog";
    axios
      .get(apiURL)
      .then((res) => {
        this.Blogs = res.data;
        console.log(this.blog);
      })
      .catch((error) => {
        console.log(error);
        console.log(this.blog);
      });
  },
  methods: {
    onclickshow() {
      return (this.showpic = !this.showpic);
    },
    onclicktonews() {
      this.$router.push("/mainrecipe");
    },
  },
};
</script>

<style scoped>
.hide {
  display: none;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10px;
}

.myDIV:hover + .hide {
  display: block;
  font-size: 24px;
  padding: 50px;
  color: rgb(48, 45, 211);
  border: 1px solid #393b3d;
  border-radius: 30px;
}

/*
 *	Resto by GetTemplates.co
 *	URL: https://gettemplates.co
 */
html {
  overflow-x: hidden;
}

body {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: #000;
  background-color: #f4ede5;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
}

h1,
h2 {
  font-weight: 700;
}

.subheading {
  color: #f34949;
}

.bg-white {
  background-color: #fff;
}

.bg-grey {
  background-color: #f7f8f9;
}

a {
  color: #f34949;
}

a:focus,
button:focus {
  outline: none;
  box-shadow: none;
}

.btn:hover,
a:hover {
  text-decoration: none;
  color: #e22104;
}

.btn-icon {
  display: inline-flex;
  align-items: center;
}
.btn-icon .lnr {
  font-size: 30px;
  margin-right: 10px;
}

.img-bg {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.img-cover {
  object-fit: cover;
  object-position: center;
}
.btn {
  font-size: 14px;
  font-weight: 600;
}

.btn-primary {
  display: inline-block;
  background-color: #f34949;
  border-color: #f34949;
  color: #fff;
  border-radius: 30px;
  padding: 9px 25px;
  text-transform: capitalize;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.btn-primary:hover {
  background-color: #e22104;
  border-color: #e22104;
  color: #fff;
}

.btn-shadow {
  box-shadow: -5px 8px 20px 0px rgba(229, 16, 2, 0.15);
}

.btn-icon {
  color: #000;
}

.hero-info {
  padding-top: 60px;
}
@media (min-width: 1420px) {
  .hero-info {
    padding-left: 150px;
    padding-top: 20px;
  }
}
.hero-info li {
  align-content: center;
  align-items: center;
}
.hero-info .lnr {
  display: block;
  font-size: 32px;
  margin-bottom: 15px;
}

/*=====  End of OVERLAY  ======*/
</style>

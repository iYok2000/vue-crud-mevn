<template>
  <div class="home">
    
    <img alt="Vue logo" src="../assets/HHT_TEA_LEAF_VECTOR_480x480@2x.jpg" />
    <HelloWorld msg="Welcome to Healty Web" />
    <br /><br /><br /><br /><br /><br />

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
                  align-items-center
                  justify-content-center justify-content-md-end
                  img-2
                "
              >
                <img class="img-fluid img-cover" src="../assets/hero-1.jpg" />
              </div>
              <div class="col-sm-7 py-5 pl-md-0 pl-4">
                <div class="heading-section pl-lg-5 ml-md-5">
                  <h2>ยินดีต้อนรับเข้าสู่เว็บไซต์สุขภาพ</h2>
                </div>
                <div class="pl-lg-5 ml-md-5">
                  <p>
                    On her way she met a copy. The copy warned the Little Blind
                    Text, that where it came from it would have been rewritten a
                    thousand times and everything that was left from its origin
                    would be the word "and" and the Little Blind Text should
                    turn around and return to its own, safe country. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.
                  </p>
                  <h3 class="mt-5">Special Recipe</h3>
                  <div class="row">
                    <div class="col-4">
                      <a href="#" class="thumb-menu">
                        <img
                          class="img-fluid img-cover"
                          src="../assets/hero-1.jpg"
                        />
                        <h6>Australian Organic Beef</h6>
                      </a>
                    </div>
                    <div class="col-4">
                      <a href="#" class="thumb-menu">
                        <img
                          class="img-fluid img-cover"
                          src="../assets/hero-1.jpg"
                        />
                        <h6>Australian Organic Beef</h6>
                      </a>
                    </div>
                    <div class="col-4">
                      <a href="#" class="thumb-menu">
                        <img
                          class="img-fluid img-cover"
                          src="../assets/hero-1.jpg"
                        />
                        <h6>Australian Organic Beef</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End of Welcome Section -->

      <!-- Special Dishes Section -->
      <section id="gtco-special-dishes" class="bg-grey section-padding">
        <div class="container">
          <div class="section-content">
            <div class="heading-section text-center">
              <br />
              <h1 class="header">Special Dishes</h1>
            </div>
            <div class="row mt-5">
              <div class="col-lg-5 col-md-6 align-self-center py-5">
                <h2 class="special-number">01.</h2>
                <div class="dishes-text">
                  <h3>
                    <span>Beef</span><br />
                    Steak Sauce
                  </h3>
                  <p class="pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate, ea vero alias perferendis quas animi doloribus
                    voluptates. Atque explicabo ea nesciunt provident libero qui
                    eum, corporis esse quos excepturi soluta?
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
                  src="../assets/testi-bg.jpg"
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
              >
                <img
                  src="../assets/hero-3.jpg"
                  alt=""
                  class="img-fluid shadow w-100"
                />
              </div>
              <div
                class="
                  col-lg-5
                  offset-lg-2
                  col-md-6
                  align-self-center
                  order-1 order-md-2
                  py-5
                "
              >
                <h2 class="special-number">02.</h2>
                <div class="dishes-text">
                  <h3>
                    <span>Salmon</span><br />
                    Zucchini
                  </h3>
                  <p class="pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis, accusamus culpa quam amet ipsam odit ea
                    doloremque accusantium quo, itaque possimus eius. In a quis
                    quibusdam omnis atque vero dolores!
                  </p>
                  <h3 class="special-dishes-price">$12.00</h3>
                  <a href="#" class="btn-primary mt-3"
                    >book a table
                    <span><i class="fa fa-long-arrow-right"></i></span
                  ></a>
                </div>
              </div>
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

export default {
  
  
  name: "Home",
  src: "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js",

  components: {
    HelloWorld,
  },

  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    }
  },

  
};
</script>

<style scoped>
.header {
  color: #0c0c0c;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgb(233, 218, 88);
  background: #f3cd88;
  margin-top: 100px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
}

header {
  height: 800px;
  background: url("https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4178&q=80")
    no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

header::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

nav {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  color: #fff;
  position: relative;
  z-index: 10;
}

ul.menu {
  display: flex;
  list-style: none;
}

ul.menu li {
  margin: 0 2rem;
}
ul.menu li a {
  text-decoration: none;
  color: #fff;
  border-bottom: 2px solid transparent;
  transition: 0.3s;
}
ul.menu li a:hover {
  border-bottom: 2px solid #fff;
  padding-bottom: 0.5rem;
}

.header-wrapper {
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  height: 500px;
  margin-top: 5rem;
  position: relative;
  z-index: 10;
}

.header-info {
  color: #fff;
}
.header-info h1 {
  font-size: 5rem;
}
.header-info p {
  font-size: 1.5rem;
  color: #000;
  background: #fff;
  padding: 0.5rem;
}
</style>

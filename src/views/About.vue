<template>
  <div class="about">
    <html>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link
        rel="stylesheet"
        href="https://www.w3schools.com/lib/w3-theme-black.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css"
      />
      <!-- Header -->
      <header class="w3-container w3-theme w3-padding" id="myHeader">
        <div class="w3-center">
          <h4>Healthy Web Contract</h4>
          <h1 class="w3-xxxlarge w3-animate-bottom">ติดต่อเกี่ยวกับเว็บไซต์</h1>
         
        </div>
      </header>

      <!-- Modal -->
      <div id="id01" class="w3-modal">
        <div class="w3-modal-content w3-card-4 w3-animate-top">
          <header class="w3-container w3-theme-l1">
            <span
              onclick="document.getElementById('id01').style.display='none'"
              class="w3-button w3-display-topright"
              ></span
            >
          </header>
          <div class="w3-padding">
            <p>Cool huh? Ok, enough teasing around..</p>
            <p>
              Go to our
              <a class="w3-btn" href="/w3css/default.asp">W3.CSS Tutorial</a> to
              learn more!
            </p>
          </div>
          <footer class="w3-container w3-theme-l1">
            <p>Modal footer</p>
          </footer>
        </div>
      </div>

      <div class="w3-row-padding w3-center w3-margin-top">
        <div class="w3-third">
          <div class="w3-card w3-container" style="min-height: 460px">
            <h3>ติดต่อผู้จัดทำ</h3>
            <br />
            <i
              class="fa fa-male w3-margin-bottom w3-text-theme"
              style="font-size: 120px"
            ></i><br>
            <a href="https://www.facebook.com/profile.php?id=100001674976399">FACEBOOK : นพชัย อัตถาวงศ์</a>
            <p> เบอร์โทรติดต่อ : 0956167334</p>
            <p> Email : Noppachai2000s@gmail.com</p>
          </div>
        </div>

        <div class="w3-third">
          <div class="w3-card w3-container" style="min-height: 460px">
            <h3>เอกสารอ้างอิง</h3>
            <br />
            <i class="fa fa-newspaper-o" aria-hidden="true"></i>
            <p>Standard CSS only</p>
            <p>Easy to learn</p>
            <p>No need for jQuery</p>
            <p>No JavaScript library</p>
          </div>
        </div>

       
      </div>
    </html>
  </div>
</template>

<template>
  <h1>Hi blog</h1>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Create goes here -->
      <h1 class="h1">หน้าสำหรับสร้าง Blog</h1>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label for="name">หัวข้อเรื่อง</label>
          <br /><input
            type="text"
            class="form-control"
            v-model="blog.title"
            required
          />
        </div>
        <div class="form-group">
          <br /><label for="name">เนื้อหา</label>
          <textarea
            class="form-control"
            input
            type="text"
            rows="3"
            v-model="blog.subject"
            required
          ></textarea>
          <br />
        </div>
        <div class="form-group">
          <br /><label for="name">ผู้เขียน</label> <br /><input
            type="text"
            class="form-control"
            v-model="blog.author"
            required
          />
        </div>

        <div class="col">
              <form method="post" action="/upload" enctype="multipart/form-data">
                  <label for="firstname">Upload</label>
                  <input type="file" id="images" class="form-control" name="fileupload" @change="handleFileChange" required>
              </form>
            </div>

        <div class="form-group">
          <br />
          <button class="btn btn-success btn-block">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blog: {
        title: "",
        subject: "",
        author: "",
        images: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/apiblog/create-blog";

      axios
        .post(apiURL, this.blog)
        .then(() => {
          this.$router.push("/blogList");
          this.blog = {
            title: "",
            subject: "",
            author: "",
        
          };
          console.log('success')
        })
        .catch((error) => {
          console.log(error);
          console.log("Error es")

        });
    },
    handleFileChange(evt) {
    this.images = evt.target.files[0]
  }
    
  },
};
</script>

<style scoped>
.h1 {
  color: #0c0c0c;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgb(214, 213, 230);
  background: #d1ccc0;
  margin-top: 10px;
}
</style>
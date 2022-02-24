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
        <div class="FieldField__wrapper">
          <img
            v-bind:src="blog.images"
            class="preview-image"
            @click="openUpload"
          />
        </div>
        <div class="col">
          <form method="post" action="/upload" enctype="multipart/form-data">
            <label for="firstname">Upload</label>
            <input
              type="file"
              id="images"
              class="form-control"
              name="images"
              @change="handleFileChange"
              required
            />
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
      Tasks: []
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
            images: "",
          };
          console.log("success");
          console.log(this.images);
        })
        .catch((error) => {
          console.log(error);
          console.log("Error es");
        });
    },
    handleFileChange() {
      const file = document.querySelector('input[type=file]').files[0]
      const reader = new FileReader()

      reader.onloadend = () => {
        this.blog.images = reader.result;
        console.log(this.blog.images);
      }
      reader.readAsDataURL(file);
      console.log(file)
      },
    
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
.preview-image {
  width: 400px;
  height: 400px;
}
</style>
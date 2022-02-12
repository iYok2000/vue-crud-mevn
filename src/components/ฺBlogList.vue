<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <!-- Display goes here -->
            <h1 class="h1">หน้าสำหรับ ลบ หรือ แก้ไข  Blog </h1>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>Title</th>
                                <th>Subject</th>
                                <th>Auther</th>
                                <th>images</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="blog in Blogs" :key="blog._id">
                                <td>{{ blog.title }}</td>
                                <td>{{ blog.subject }}</td>
                                <td>{{ blog.author }}</td>
                                <td>{{ blog.images}}</td>
                                <td>
                                    <router-link :to="{name: 'blogEdit', params: {id: blog._id}}" class="btn btn-success">
                                        Edit
                                    </router-link>
                                    <button @click.prevent="deleteBlog(blog._id)" class="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            Blogs: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/apiblog';
        axios.get(apiURL).then(res => {
            this.Blogs = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        deleteBlog(id) {
            let apiURL = `http://localhost:4000/apiblog/delete-blog/${id}`;
            let indexOfArrayItem = this.Blogs.findIndex(i => i._id === id);

            if (window.confirm("Do you really want to delete ? ")){
                axios.delete(apiURL).then(() => {
                    this.Blogs.splice(indexOfArrayItem, 1)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>

<style scoped>
.h1 {
    color: #0c0c0c;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgb(214, 213, 230);
  background: #d1ccc0;
  margin-top: 10px ;
}
</style>
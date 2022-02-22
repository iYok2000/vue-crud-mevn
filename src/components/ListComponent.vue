<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <!-- Display goes here -->
            <h1 class="h1">หน้าสำหรับ ลบ หรือ แก้ไข บทความ </h1>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>Title</th>
                                <th>Subject</th>
                                <th>Auther</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="task in Tasks" :key="task._id">
                                <td>{{ task.title }}</td>
                                <td>{{ task.subject }}</td>
                                <td>{{ task.aka }}</td>
                                <td>
                                    <router-link :to="{name: 'edit', params: {id: task._id}}" class="btn btn-success">
                                        Edit
                                    </router-link>
                                    <button @click.prevent="deleteTask(task._id)" class="btn btn-danger">
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
            Tasks: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api';
        axios.get(apiURL).then(res => {
            this.Tasks = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        deleteTask(id) {
            let apiURL = `http://localhost:4000/api/delete-task/${id}`;
            let indexOfArrayItem = this.Tasks.findIndex(i => i._id === id);

            if (window.confirm("Do you really want to delete ? ")){
                axios.delete(apiURL).then(() => {
                    this.Tasks.splice(indexOfArrayItem, 1)
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
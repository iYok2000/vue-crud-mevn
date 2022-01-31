<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Edit data goes here -->
            <h1 class="h1"> หน้าสำหรับแก้ไขบทความ </h1>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label for="name">หัวข้อเรื่อง</label>
                    <br><input type="text" class="form-control" v-model="task.title" required>
                </div>
                <div class="form-group">
                    <br><label for="name">เนื้อหา</label>
                    <br><textarea class="form-control" input type="text" rows="3" v-model="task.subject" required></textarea>
                </div>
                <div class="form-group">
                    <br><label for="name">ผู้เขียน</label>
                    <br><input type="text" class="form-control" v-model="task.aka" required>
                </div>

                <div class="form-group"><br>
                    <button class="btn btn-primary btn-block"> เรียบร้อยและอัพเดท</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data () {
        return {
            task: {}
        }
    },
    created() {
         let apiURL = `http://localhost:4000/api/edit-task/${this.$route.params.id}`;
         axios.get(apiURL).then((res) => {
             this.task = res.data
         })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-task/${this.$route.params.id}`;

            axios.put(apiURL, this.task).then((res) => {
                console.log(res);
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            })
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
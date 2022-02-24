<template>
    <div class="row justify-content-center">
        
        <div class="col-md-6">
            <!-- Create goes here -->
            <h1 class="h1 ">หน้าสำหรับสร้างบทความ</h1>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label for="name">หัวข้อเรื่อง</label>
                    <br><input type="text" class="form-control" v-model="task.title" required>
                </div>
                <div class= "form-group">
                    <br><label for="name">เนื้อหา</label>
                    <textarea class="form-control" input type="text" rows="3" v-model="task.subject" required></textarea>
                    <br>
                </div>
                <div class="form-group">
                    <br><label for="name">ผู้เขียน</label>
                    <br><input type="text" class="form-control" v-model="task.aka" required>
                </div>
                <div class="form-group"><br>
                    <button class="btn btn-success btn-block"> Create</button>
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
            task:{
                title:'',
                subject:'',
                aka:''
            },
            
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:4000/api/create-task';

            axios.post(apiURL, this.task).then(() => {
                this.$router.push('/view');
                this.task = {
                    title: '',
                    subject: '',
                    aka: '',
                }
            }).catch(error => {
                console.log(error)
            })
            }
    },
   
//    computed: {
//   user() {
//    return localStorage.getItem('admin');
//   }
// },
//const user = localStorage.getItem("user");


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

<template>
    <div class="edit-form">
        <h4>Login</h4>
        <form>
            <div class="form-group">
                <label for="userName">User name:</label>
                <input type="text" class="form-control" id="user" v-model="userLoginRequest.userName"/>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" class="form-control" id="password" v-model="userLoginRequest.password"/>
            </div>
            <button type="submit" class="badge badge-success" @click="login">Login</button>
            <p>{{ message }}</p>
        </form>
    </div>
</template>

<script>
import LoginService from "../services/LoginService";
export default {
    name: "userLogin",
    data(){
        return {
            userLoginRequest: {userName: "", password: ""},
            message: ""
        };
    },
    methods:{
        login(){
            LoginService.login(this.userLoginRequest)
            .then((response) => {
                var user = response.data;
                console.log(user);
                console.log("hi");
                localStorage.setItem("name", user.userName);
            }).catch((e) => {
                this.userLoginRequest.userName="";
                this.userLoginRequest.password="";
                this.message = e.response.data.message;
            });
        },
    },
    mounted(){
        this.message = "";
    }
};
</script>

<style scoped>
.edit-form{
    max-width: 300px;
    margin: auto;
}
</style>
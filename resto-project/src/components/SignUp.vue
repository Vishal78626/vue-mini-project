<template>
    <img class="logo" src="../assets/resto-logo.png" />
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button @click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>

</template>


<script>
import axios from 'axios'
export default {
    name: 'SignUp', 
    data: () => ({
        name: '',
        email: '',
        password: ''
    }),
    methods: {
        async signUp() {
            // console.log(this.name);
            let result = await axios.post("http://localhost:3000/user", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            if(result.status == 201) {
                // alert('Sign Up Done');
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push( {name: 'HomePage'} )
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(user) {
            this.$router.push( { name: 'HomePage'});
        }
    }
}
</script>

<style>
</style>
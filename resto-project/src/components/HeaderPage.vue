<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="add">Add Restaurant</router-link>
        <a href="" v-on:click="logout">Logout</a>
    </div>
</template>

<script>
export default {
    name: "HeaderPage",
    methods: {
        logout() {
            this.$router.push({name: "HomePage"});
            localStorage.clear();
        }
    }
}
</script>

<style>
.nav a{
    float: left;
    text-align: center;
    padding: 14px 16px;
    font-size: 16px;
    color: white;
    text-decoration: none;
    margin-right: 4px;
}
.nav {
    background-color: #333;
    overflow: hidden;
}
.nav a:hover {
    color: #222;
    background-color: #ddd;
}
</style>
<template>
    <HeaderPage/>
    <h1>Welcome {{ name }}, to the Home Page</h1>
    <table border="1px">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Actions</th>
        </tr>
        <tr v-for="items in restaurant" :key="items.id">
            <td>{{items.id}}</td>
            <td>{{items.name}}</td>
            <td>{{items.address}}</td>
            <td>{{items.contact}}</td>
            <td><router-link :to="'/update/' + items.id">Update</router-link> / <button @click="deleteRestaurant(items.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
export default {
    name: "HomePage",
    data: () => ({
        name: "",
        restaurant: []
    }),
    components: {
        HeaderPage
    },
    methods: {
        async deleteRestaurant(id) {
            let result = await axios.delete("http://localhost:3000/restaurant/"+id);
            if(result.status == 200) {
                this.loadData();
            }
        },
        async loadData() {
            let user = localStorage.getItem('user-info');
            if(!user) {
                this.$router.push( { name: 'LoginPage'});
            }
            if(user) {
                this.name = JSON.parse(user).name;
                let result = await axios.get("http://localhost:3000/restaurant")
                this.restaurant = result.data;
            }

        }
    },
    mounted() {
        this.loadData()         
    }
}
</script>

<style scoped>
td {
    width: 250px;
    height: 40px;
}
</style>
<template>
    <HeaderPage/>
    <h1>Add Restaurant Page</h1>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name" />
        <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address" />
        <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact" />
        <button type="button" @click="addRestaurant"> Add Restaurant</button>

    </form>
</template>

<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
export default {
    name: "AddRestro",
    data: () => ({
        restaurant: {
            name: '',
            address: '',
            contact: ''
        }
    }),
    components: {
        HeaderPage
    },
    methods: {
        async addRestaurant() {
            let result = await axios.post("http://localhost:3000/restaurant", {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact 
            });
            if(result.status == 201) {
                this.$router.push( { name: 'HomePage'});
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(!user) {
            this.$router.push( { name: 'LoginPage'});
        }
    }
}
</script>
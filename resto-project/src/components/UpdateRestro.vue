<template>
    <HeaderPage/>
    <h1>Update Restaurant Page</h1>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name" />
        <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address" />
        <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact" />
        <button type="button" @click="updateRestaurant"> Update Restaurant</button>

    </form>
</template>

<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
export default {
    name: "UpdateRestro",
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
        async updateRestaurant() {
            let result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact 
            });
            if(result.status == 200) {
                this.$router.push( { name: 'HomePage'});
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if(!user) {
            this.$router.push( { name: 'LoginPage'});
        }

        let result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id)
        this.restaurant = result.data; 
    }
}
</script>
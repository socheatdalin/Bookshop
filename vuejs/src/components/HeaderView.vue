<script>

import { RouterLink } from 'vue-router';
import bookapi from '../libs/apis/book'
export default {
        data() {
                return {
                        books: [],
                        cartId: this.$route.params.Cid,
                        // showBooks: false
                };
        },
        components: { RouterLink },
        methods: {
                gotocart(cartId) {
                        this.$router.push({ name: 'cart', params: { Cid: cartId } })
                },
                // switchContaoner: function(){
                //         return(this.showBooks = !this.showBooks);
                // }
        },
        async mounted() {
                this.books = await bookapi.all();
               
        }
}
</script>
<template>
        <header style="background-color:#978080;">
                <div class="flex justify-between">
                        <div class="p-2">
                               <a href="/"><img src="../assets/logo.svg" alt="logo" width="80" height="70"></a> 
                                <h1 class="mx-3 text-lg font-semibold">Leorio</h1>
                        </div>
                        <div class="m-auto">
                                <nav class=" ">
                                        <RouterLink to="/" class="navs" ctive-class="active-link"
                                                exact-active-class="exact-active-link">Home</RouterLink>
                                        <RouterLink to="/product" class="navs" ctive-class="active-link"
                                                exact-active-class="exact-active-link">Product</RouterLink>
                                        <RouterLink to="/about" class="navs " ctive-class="active-link"
                                                exact-active-class="exact-active-link">About</RouterLink>
                                </nav>
                        </div>
                        <!-- <div class="my-10" >
                                <RouterLink to="/login"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-8" >
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>  
                                </RouterLink>
                        </div> -->
                        <div class="my-8 drop" >
                                <button class="dropbtn w-36">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-12 h-8">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                </button>
                                <div v-for="book in books" :key="book._id"></div>
                                <div class="dropdown-content " >
                                        <button>Profile</button>
                                        <div class="border-b border-black "></div>
                                        <button class="" @click="gotocart()">Add cart</button>
                                        <div class="border-b border-black "></div>
                                        <button class="border-b border-black">Order History</button>
                                        <!-- <RouterLink to="/login">Login</RouterLink> -->
                                        <button class="toggle w-full">
                                                <RouterLink to="/login" class="">Login</RouterLink>
                                                <!-- <a href="/login">{{ showBooks ? 'Logout' : 'Login' }}</a> -->
                                        </button>
                                </div>
                        </div>
                </div>
        
        </header>

</template>

<style>
.drop {
        display: inline-block;
        position: relative;
}

.dropdown-content {
        display: none;
        position: absolute;
        background-color: #978080;
        
}

.drop:hover .dropdown-content {
        display: block;
}

.dropdown-content button {
        display: block;
        color: #000000;
        padding: 5px;
        /* border-bottom: 1px solid black; */
        text-decoration: none;
}

nav {
        width: 100%;
        font-weight: bold;
        font-size: 1.5rem;
        text-align: center;
        /* margin-top: 2rem; */
}

.exact-active {
        color: rgb(24, 83, 165);
}

.exact-active-link {
        color: rgb(24, 83, 165);
}

.exact-active:hover {
        background-color: rgb(121, 143, 169);
}

nav a {
        padding: 0 1rem;
        border-left: 1px solid var(--color-border);
}

.navs:hover {
        color: blue;
}

nav a:first-of-type {
        border: 0;
}</style>
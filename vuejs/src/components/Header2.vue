<script>
import DropdownMenu from '@innologica/vue-dropdown-menu'
import authApi from '../libs/apis/auth'
export default {
        data() {
                return {
                        auth:[]
                }
        },
        async mounted(){
                this.auth = await authApi.getMe()
        },
        methods: {
                async onLogout() {
                        const result = await authApi.logout();
                        localStorage.clear();
                        if (result) this.$router.push({ name: "auth/login" });
                        console.log("successful")
                },

        }
}
</script>

<template>
        <header class="hearder" style="background-color:#978080;">
                <div class="flex justify-between relative">
                        <div class="p-2">
                              <a href="/home2">  <img src="../assets/logo.png" alt="logo" width="80" height="70"></a>
                                <h1 class="mx-3 text-lg font-semibold">Leorio</h1>
                        </div>
                        <div class="m-auto">
                                <nav class=" ">
                                        <RouterLink to="/home2" class="navs" ctive-class="active-link"
                                                exact-active-class="exact-active-link">Home</RouterLink>
                                        <RouterLink to="/product2" class="navs" ctive-class="active-link"
                                                exact-active-class="exact-active-link">Product</RouterLink>
                                        <RouterLink to="/about2" class="navs " ctive-class="active-link"
                                                exact-active-class="exact-active-link">About</RouterLink>
                                </nav>
                        </div>
                        <div class="my-10">
                                <RouterLink to="/cart" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                </RouterLink>
                        </div>
                        <div class="my-10 drop" >
                                <button class="dropbtn w-36"><img src="../assets/login.png" alt="" width="30"></button>
                                <div class="dropdown-content ">
                                        <a href="#">Profile</a>
                                        <RouterLink to="/orderHistory" class="text-sm">Order History</RouterLink>
                                        <a href="#" v-on:click="onLogout()">Logout</a>
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
        background-color:#978080;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 2);
}

.drop:hover .dropdown-content {
        display: block;
}

.dropdown-content a {
        display: block;
        color: #000000;
        padding: 5px;
        border-bottom: 1px solid black;
        text-decoration: none;
}

nav {
        width: 100%;
        font-weight: bold;
        font-size: 1.5rem;
        text-align: center;
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
}

</style>
<script >

import HeaderView from '../components/HeaderView.vue'
// import Header2 from '../components/Header2.vue'
import bookapi from '../libs/apis/book'
import authApi from '../libs/apis/auth'
import book from '../libs/apis/book'

export default {
        components: {
                HeaderView,
                // Header2
        },
        data(){
                return{
                        books:[],
                        auth:[],
                }
        },
        methods:{
                // async onLogout() {
                //         const result = await authApi.logout();
                //         if (result) this.$router.push({ name: "auth/login" });
                //         console.log("successful")
                // },
                gotodetail(bookId){
                        this.$router.push({name:'detail', params:{Bid:bookId}})
                }
        },
        async mounted(){
                this.books = await bookapi.all()
                this.auth = await authApi.getMe()
        }
       
}
</script>

<template>
        <HeaderView />
        <!-- <button type=" " v-on:click="onLogout()">Logout</button> -->
        <div class="p-1 md:w-full" style="background-color:#DBCECE ;">
                <div class="flex justify-center">
                        <img src="../assets/bg.svg" alt=" " >
                </div>
                <div class="border border-black text-center text-xl p-2">
                        <h3>Shop with me </h3>
                </div>
                <div class="booklist">
                        <div class="inforn   ">
                                <div class="book border border-black relative lg:h-80 md:w-64 md:h-80 sm:w-36 sm:h-60" v-for="book in books.slice(0, 9)" :key="book._id">
                                        <div>
                                                <img :src="book.imageUrl" alt="" class=" logo border rounded mx-auto lg:h-60 md:h-60 sm:h-40">
                                           </div>
                                        <h1 class="text-center mt-2 font-semibold lg:text-xl sm:text-sm ">{{ book.name }}</h1>
                                        <div class="sm:text-sm">
                                                <h4 class="price">Price:{{ book.price }}</h4>
                                                <p class="see" @click="gotodetail(book._id)">see more</p>
                                                <!-- <RouterLink to="/detail" class="see">see more</RouterLink> -->
                                        </div>
                                </div>

                        </div>
                </div>
        </div>
</template>

<style>
.inforn{
        margin: 5px;
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: space-around;
        gap: 15px;
       

}
.logo {
        width: 250px;
        height: 250px;
}
.book{
        text-align: center;
        border: 1px solid black;
        width: 350px;
        margin: 5px;
        height: 350px;
        padding: 10px;
}
.see {
        /* font-weight: bold; */
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 5px;
        cursor: pointer;
}
.price {
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 5px;
}
</style>

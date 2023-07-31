<script>

import { RouterLink } from 'vue-router';
import bookapi from '../libs/apis/book'
export default{
        data() {
                return {
                        books: [],
                        cartId: this.$route.params.Cid,
                        quantity: 1,
                        // books: [],
                        categories: [],
                        bookId: this.$route.params.Bid,
                        // cartId: this.$route.params.Cid,
                        payId:this.$route.params.Pid,
                };
        },
        components: { RouterLink },
        methods: {
                // gotocart(cartId) {
                //         this.$router.push({ name: 'cart', params: { Cid: cartId } })
                // },
                increment() {
                        this.quantity++
                },
                decrement() {
                        if (this.quantity === 1) {
                                alert('Negative quantity not allowed')
                        } else {
                                this.quantity--
                        }
                },
                gotodetail(bookId){
                        this.$router.push({name:'detail', params:{Bid:bookId}})
                },
                gotocart(cartId){
                        console.log(cartId);
                        this.$router.push({name:'cart', params:{Cid:cartId}})
                },
                gotoPayment(payId){
                        this.$router.push({name:'payment', params:{Pid:payId}})
                },
                addBookTocart(book){
                        
                }
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
                                        <button class="toggle w-full">
                                                <RouterLink to="/login" class="">Login</RouterLink>
                                        </button>
                                </div>
                        </div>
                </div>
        </header>

        <div class="" style="background-color: #DBCECE;">
                <div >
                        <h1 class="mx-2 title"><a href="/"> Home</a>> Detail</h1>
                </div>
                <div  v-for="(book, index ) in books" :key="index">
                        <div v-if="bookId == book._id" class="m-1 grid grid-cols-3 gap-56">
                                <div class="">
                                        <!-- <img alt="book logo" src="../assets/login.png" /> -->
                                        <img :src="book.imageUrl" alt="" class="logo rounded mx-auto">
                                </div>
                                <div class="">
                                        <h1>Name:{{ book.name }}</h1>
                                        <div class="">
                                                <p class="py-3">Author:{{ book.author }}</p>
                                                <p>First published:{{ book.public }}</p>
                                                <p class=" w-75 py-3"> <b>Description:</b> {{ book.desc }}
                                                </p>
                                        </div>
                                </div>
                                <div class="mx-5 justify-end">
                                        <!-- <hr class="w-25"> -->
                                        <div class=" ">
                                                <p class="text-lg font-semibold">Price: <span class="mx-5"> {{ book.price }}</span></p>
                                                <div class="quantity-toggle mt-5 mx-5">
                                                        <button @click="decrement()" class="rounded-lg">&minus;</button>
                                                        <input type="text" :value="quantity" readonly
                                                                class=" text-center num rounded">
                                                        <button @click="increment()" class="rounded-lg">&plus;</button>
                                                </div>
                                        </div>
                                        <!-- <hr class="w-75 my-5 "> -->
                                        <div class="flex gap-3 my-5">
                                                <!-- <RouterLink to="/payment"> -->
                                                        <button class="rounded-lg w-28 p-1" @click="gotoPayment(book._id)"
                                                                style="background-color: #0D99FF;">Buy Now</button>
                                                <!-- </RouterLink> -->
                                                <!-- <RouterLink to="/cart"> -->
                                                        <button class="rounded-lg px-3 w-28 p-1" @click="gotocart(book._id)" type="submit"
                                                                style="background-color: #0D99FF;">Add Cart</button>
                                                <!-- </RouterLink> -->
                                        </div>
                                </div>
                        </div>
                </div>
                <h1 class="mx-5 font-bold text-2xl my-5">Relate book</h1>
                <div class="booklist">
                        <div class="inforn   ">
                                <div class="book border border-black relative " v-for="book in books.slice(0, 3)"
                                        :key="book._id">
                                        <div>
                                                <img :src="book.imageUrl" alt="" class=" logo border rounded mx-auto">
                                        </div>
                                        <h1 class="text-center mt-5 font-semibold text-xl">{{ book.name }}</h1>
                                        <div class="text-xl">
                                                <h4 class="price">Price:{{ book.price }}</h4>
                                                <!-- <RouterLink to="/detail" class="see">see more</RouterLink> -->
                                                <p class="see" @click="gotodetail(book._id)">see more</p>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</template>

<style>
.inforn {
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: space-around;
}

.logo {
        width: 250px;
        height: 300px;
}
.book{
        height: 400px;
}
.see {
        font-weight: semibold;
        font-size: 1rem;
        position: absolute;
        bottom: 0;
        right: 0;
        color: blue;
}

.item {
        text-align: center;
        border: 1px solid black;
        width: 350px;
        margin: 5px;
        height: 350px;
        padding: 10px;
}

.genre {
        background-color: #B3A2A2;
        color: white;
        border-radius: 15px;
        border: 0;
        margin: 5px;
        width: 100px;
        height: 35px;
}

.price {
        position: absolute;
        bottom: 0;
        left: 0;
}

.quantity-toggle {
        display: flex;
}

.num {
        width: 50px;
        border: 0;
        background-color: #DBCECE;
        width: 2.5rem;
        text-align: center;
        padding: 0 .5rem;

}

.quantity-toggle button {
        width: 10%;
        border: 2px solid black;
        text-align: center;
        /* background: #f5f5f5; */
        color: #888;
        cursor: pointer;
        font-weight: bold;
}
</style>

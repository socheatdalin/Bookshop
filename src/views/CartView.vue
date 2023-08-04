<script>
import Header2 from '../components/Header2.vue';
import bookapi from '../libs/apis/book'
import FooterView from '@/components/Footerview.vue'
import CartApi from '../libs/apis/cart'
export default {
        components: {
                FooterView,
                Header2
        },
        data() {
                return {
                        books: [],
                        quantity:[],
                        carts:[],
                        cartId: this.$route.params.Cid,
                }
        },
        methods: {
                gotoPayment() {
                        this.$router.push({ name: 'payment'})
                },
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
        },
        // computed: {
        //         Total() {
        //                 let total = 0;
        //                 this.books.forEach((book, i) => {
        //                         total += this.quantity * this.price;
        //                 });
        //                 return total;
        //         },
        // },
        async mounted() {
                this.books = await bookapi.all();
                // this.books = JSON.parse(localStorage.getItem('book'));
                // this.quantity = JSON.parse(localStorage.getItem('qty'));
                this.carts = await CartApi.all()
                // console.log(this.books)
        }

}
</script>

<template>
        <div class="header">
               <Header2 /> 
        </div>
        <div class="h-screen" style="background-color: #DBCECE;">
                <h1 class="p-5 px-5 font-blod text-2xl "> <a href="/">Home</a> > My Cart</h1>
                <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                        <div class="overflow-hidden">
                                                <table class="min-w-full text-left text-lg font-light table-fixed">
                                                        <thead class="border-b border-black ">
                                                                <tr>
                                                                        <th scope="col" class="px-6 py-4">Product</th>
                                                                        <th scope="col" class="px-6 py-4">Quantity</th>
                                                                        <th scope="col" class="px-6 py-4">Price</th>
                                                                        <th scope="col" class="px-6 py-4">Total</th>
                                                                        <th scope="col" class="px-6 py-4">Action</th>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                <tr class="" v-for="cart in carts" :key="cart._id">
                                                                        <td class="whitespace-nowrap px-5 py-4 font-medium">
                                                                                <!-- <img :src="books.imageUrl" alt="" class="w-32 h-48"> -->
                                                                        </td>
                                                                      
                                                                        <!-- <td class="whitespace-nowrap px-6 py-4">${{ books.price }}</td>
                                                                        <td class="whitespace-nowrap px-6 py-4">${{books.price}}</td> -->
                                                                        <td class="whitespace-nowrap px-6 py-4" v-for="book in cart?.books"  :key="book._id" >{{ book.name}}</td>
                                                                        <td class="whitespace-nowrap px-6 py-4">{{ cart.quantity }}</td>
                                                                        <td class="whitespace-nowrap px-6 py-4">${{ cart.price }}</td>
                                                                        <td class="whitespace-nowrap px-6 py-4">${{cart.price}}</td>
                                                                        <td class=" px-6 py-4">
                                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        fill="none" viewBox="0 0 24 24"
                                                                                        stroke-width="1.5" stroke="currentColor"
                                                                                        class="w-6 h-6">
                                                                                        <path stroke-linecap="round"
                                                                                                stroke-linejoin="round"
                                                                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                                </svg>
                                                                        </td>
                                                                </tr>
                                                        </tbody>
                                                </table>
                                        </div>
                                </div>
                        </div>
                </div>
                <div>
                        <div class="flex justify-between border-t border-black m-3 my-5">
                                <h3 class="font-bold text-lg m-3">Subtotal</h3>
                                <p class="mx-5">${{books.price }}</p>
                        </div>
                        <div class="flex justify-between border-t border-black m-3 my-5">
                                <h3 class="font-bold text-lg m-3">Total</h3>
                                <p class="mx-5">${{ books.price}}</p>
                        </div>
                </div>
                <div class="flex justify-end mx-24">

                        <button class="rounded-lg w-32 text-center" style="background-color: #0D99FF;"
                                @click="gotoPayment()">Checkout </button>
                </div>
        </div>
        <FooterView />
</template>

<style>
* {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
}

h3 {
        font-weight: 400;
        font-size: 1.5rem;
}

.desc {
        width: 400px;

}
.header{
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1;
        font-size: 20px;
}
</style>


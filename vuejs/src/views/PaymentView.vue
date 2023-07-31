<script>
import Header2 from '../components/Header2.vue';
import HeaderView from '../components/HeaderView.vue'
import bookapi from '../libs/apis/book'
        export default{
                components:{
                        Header2,
                        HeaderView
                },
                data(){
                        return{
                                books:[],
                                payId:this.$route.params.Pid,
                                payments:[],
                        }
                       
                },
                methods:{
                      async onPayment(e){
                        const result = {name, title, quantity, phonenumber} ;
                        
                      }
                },
                async mounted() {
                          this.books = await bookapi.all();
                }
        }
</script>
<template>
        <HeaderView />
        <div class="h-screen pt-12" style="background-color:#DBCECE ;">
        <div class="flex justify-between  p-8 m-auto rounded-[60px]">
                <div class="w-3/5">
                        <div class="my-5"><h1 class="font-bold text-2xl">Your order</h1></div>
                        
                        <div class="flex flex-col">
                                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                                <div class="overflow-hidden">
                                                        <table class="min-w-full text-left text-lg font-light table-fixed">
                                                                <thead class="border-b border-black ">
                                                                        <tr>
                                                                                <th scope="col" class="px-6 py-4">Prodcut</th>
                                                                                <th scope="col" class="px-6 py-4">Quantity</th>
                                                                                <th scope="col" class="px-6 py-4">Price</th>
                                                                                <th scope="col" class="px-6 py-4">Total</th>
                                                                        </tr>
                                                                </thead>
                                                                <tbody v-for="(book,index) in books" :key="index">
                                                                        <tr class="" v-if="payId == book._id">
                                                                                <td class="whitespace-nowrap px-6 py-4 font-medium">{{ book.name }}</td>
                                                                                <td class="whitespace-nowrap px-6 py-4">1</td>
                                                                                <td class="whitespace-nowrap px-6 py-4">${{ book.price }}</td>
                                                                                <td class="whitespace-nowrap px-6 py-4">${{ book.price }}</td>
                                                                        </tr>
                                                                </tbody>
                                                        </table>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div class="flex justify-between border-t border-black m-3">
                                <h3 class="font-bold text-lg mx-3">Total</h3>
                                <!-- <p>10</p> -->
                        </div>

                </div>
                <div class="w-fit border border-black p-2 h-fit rounded-[50px]" style="background-color: #bba8a8;">
                        <h4 class="text-2xl text-center">Enter your card information</h4>
                        <div class="">
                                <div class="m-5">
                                        <input type="text" name="card" id="card-number" placeholder="Card number"
                                                class="m-2 rounded-lg w-72 bg-gray-100" required>
                                        <input type="text" name="" id="" placeholder="MM/YY"
                                                class="m-2 rounded-lg w-24 bg-gray-100" required>
                                        <input type="text" name="cvv" id="" placeholder="cvv"
                                                class="m-2 rounded-lg w-16 bg-gray-100" required>
                                </div>
                                <div class="m-5">
                                        <input type="text" name="" id="" placeholder="Card name"
                                                class="m-2 rounded-lg w-96 bg-gray-100" required>
                                </div>
                                <div class="m-5">
                                        <input type="text" name="" id="" placeholder="Address"
                                                class="input m-2 rounded-lg w-96 bg-gray-100" required>
                                </div>

                                <div class="m-5">
                                        <input type="text" name="" id="" placeholder="Phone number"
                                                class="m-2 rounded-lg w-96 bg-gray-100" required>
                                </div>
                                <div class="flex justify-center">
                                <button type="submit" class=" text-center bg-[#978080] p-2 rounded-full w-24  ">Paynow</button>
                        </div>
                </div>
</div>
        </div>
</div>
</template>
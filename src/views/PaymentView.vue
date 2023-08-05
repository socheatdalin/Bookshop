<script>
import Header2 from '../components/Header2.vue';
import bookapi from '../libs/apis/book'
import FooterView from '../components/FooterView.vue'
export default {
        components: {
                Header2,
                FooterView
        },
        data() {
                return {
                        books: [],
                        payId: this.$route.params.Pid,
                        payments: [],
                }

        },
        methods: {

        },
        async mounted() {
                this.books = await bookapi.all();
                this.books = JSON.parse(localStorage.getItem('book') || '[]');
        }
}
</script>
<template>
        <div class="header">
                <Header2 />
        </div>
        
        <div class="h-screen pt-12" style="background-color:#DBCECE ;">
                <div class="flex justify-between  p-8 m-auto rounded-[60px]">
                        <div class="w-3/5">
                                <div class="my-5">
                                        <h1 class="font-bold text-2xl">Your order</h1>
                                </div>

                                <div class="flex flex-col">
                                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                                        <div class="overflow-hidden">
                                                                <table
                                                                        class="min-w-full text-left text-lg font-light table-fixed">
                                                                        <thead class="border-b border-black ">
                                                                                <tr>
                                                                                        <th scope="col" class="px-6 py-4">
                                                                                                Prodcut</th>
                                                                                        <th scope="col" class="px-6 py-4">
                                                                                                Quantity</th>
                                                                                        <th scope="col" class="px-6 py-4">Price
                                                                                        </th>
                                                                                        <th scope="col" class="px-6 py-4">Total
                                                                                        </th>
                                                                                </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                                <tr class="">
                                                                                        <td
                                                                                                class="whitespace-nowrap px-6 py-4 font-medium">
                                                                                                {{ books.name }}</td>
                                                                                        <td class="whitespace-nowrap px-6 py-4">
                                                                                                1</td>
                                                                                        <td class="whitespace-nowrap px-6 py-4">
                                                                                                ${{ books.price }}</td>
                                                                                        <td class="whitespace-nowrap px-6 py-4">
                                                                                                ${{ books.price }}</td>
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
                                        <RouterLink to="/paymentstatus">
                                                <button type="submit"
                                                        class=" text-center bg-[#978080] p-2 rounded-full w-24  ">Paynow</button>
                                        </RouterLink>
                                </div>
                        </div>
                </div>
        </div>
</div>
<FooterView />
</template>

<style>
.header{
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1;
        font-size: 20px;
}
</style>
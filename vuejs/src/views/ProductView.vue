<script >
import HeaderView from '../components/HeaderView.vue'
import { RouterLink } from 'vue-router'
import bookapi from '../libs/apis/book'

export default {
        components: {
                HeaderView,
                RouterLink
        },
        data() {
                return {
                        books: [], 
                        categories:[]
                }
        },
        methods: {
                gotodetail(bookId) {
                        this.$router.push({ name: 'detail', params: { Bid: bookId } })
                }, 
                async onClick(categoryId){
                        this.books = await bookapi.getgenre(categoryId)
                }
        },
        async mounted() {
                this.books = await bookapi.all()

        }

}
</script>
<template>
        <HeaderView />
        <div class="" style="background-color: #DBCECE;">
                <div class="flex py-3 justify-between">
                        <h1 class="mx-2 title">Home > Product</h1>
                        <div class="">
                                <form action="" class="search-bar">
                                        <input type="search" name="search" required placeholder="search here " class="rounded-lg">
                                        <button class="search-btn" type="submit">
                                                <span class="mx-2">Search</span>
                                        </button>
                                </form>
                        </div>
                </div>
                <div class="d-flex mx-5 py-3" v-for="category in categories" :key="category._id">
                        <button class="genre">All</button>
                        <button class="genre" @click="onClick(category._id)">Drama</button>
                        <button class="genre">Fiction</button>
                        <button class="genre">Horror</button>
                        <RouterLink to="/product2"><button class="genre">+more</button></RouterLink>

                </div>
                <div class="booklist">
                        <div class="inforn   ">
                                <div class="book border border-black relative lg:w-80 lg:h-80 md:w-64 sm:w-48 sm:h-72"
                                        v-for="book in books" :key="book._id">
                                        <div>
                                                <img :src="book.imageUrl" alt=""
                                                        class=" logo border rounded mx-auto sm:w-36 sm:h-44 lg:w-64 lg:h-56 ">
                                        </div>
                                        <h1 class="text-center mt-5 font-semibold text-xl">{{ book.name }}</h1>
                                        <div class="text-xl">
                                                <h4 class="price">Price:</h4>
                                                <p class="see" @click="gotodetail(book._id)">see more</p>
                                                <!-- <RouterLink to="/detail" class="see">see more</RouterLink> -->
                                        </div>
                                </div>

                        </div>
                </div>
        </div>
</template>

<style>
.title {
        font-size: 1.5rem;
        font-weight: bold;
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

.genre:hover {
        background-color: #978080;
}


</style>
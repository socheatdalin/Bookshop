<script>
import  Header2 from '../components/Header2.vue';
import bookApi from "../libs/apis/book";
import categoryApi from '../libs/apis/category';

export default {
        components: {
                Header2
        },
        data() {
                return {
                        categories: [],
                        books: [],
                };
        },
        async mounted() {
                // this.categories = await categoryApi.all()
                this.books = await bookApi.all();
        }
};

</script>

<template>
        <Header2/>
        <div class="h-100" style="background-color: #DBCECE;">
                <div class="image">
                        <img src="@/assets/bg.svg" class="img-fluid " alt="Responsive image">
                </div>
                <div class="border border-dark p-2 d-flex justify-content-center">
                        <h3 class="px-2">Shop with us </h3>
                        <svg xmlns=" www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6" width="2%">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                </div>
                <div class="booklist ">
                        <div class="book">
                                <div class="inforn grid grid-cols-3 w-4/5 h-98">
                                        <div class="book" v-for="book in books" :key="book._id">
                                                <div class="w-62 border border-black m-5 p-5 h-72">
                                                        <!-- <div>{{ product.imageUrl }}</div> -->
                                                        <div class="flex justify-center"><img :src="book.imageUrl" alt=""
                                                                        style="width: 130px; height: 150px;"></div>
                                                        <div class="text-center"> {{ book.name }} </div>
                                                        <div class="m-2 mt-3">
                                                                <h2>Shop: </h2>
                                                                <p>Desc: <span class="pl-2">{{ book.desc }}</span></p>
                                                        </div>
                                                        <div></div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
    
</script>

<style>
.logo {
        width: 200px;
        height: 200px;
}

.image {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: auto;
}

.book {
        display: flex;
        justify-content: space-around;


}

.price {
        position: absolute;
        bottom: 0;
        left: 0;
}

.see {
        font-weight: bold;
        font-size: 1.5rem;
        position: absolute;
        bottom: 0;
        right: 0;
}

.item {
        text-align: center;
        border: 1px solid black;
        width: 350px;
        margin: 5px;
        height: 300px;
        padding: 10px;
}

/* @media (max-width: 1024px) {
        .image{ 
                width: 60%;
              
        }
}
@media (max-width: 750px) {
        .image{
                width: 40%;
               
        }
} */
@media (max-width:540px) {
        .item {
                height: 350px;
        }

}</style>
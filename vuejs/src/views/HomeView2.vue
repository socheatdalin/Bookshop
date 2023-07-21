<script >

// import HeaderView from '../components/HeaderView.vue'
import Header2 from '../components/Header2.vue'
import bookapi from '../libs/apis/book'

export default {
        components: {
                // HeaderView,
                Header2
        },
        data(){
                return{
                        books:[],
                        auth:[]
                }
        },
        
        async mounted(){
                this.books = await bookapi.all()

        }
       
}
</script>

<template>
        <Header2 />
        
        <div class="p-1" style="background-color:#DBCECE ;">
                <div class="flex justify-center">
                        <img src="../assets/bg.svg" alt=" ">
                </div>
                <div class="border border-black text-center text-xl p-2">
                        <h3>Shop with me </h3>
                </div>
                <div class="booklist">
                        <div class="inforn   ">
                                <div class="book border border-black relative " v-for="book in books" :key="book._id">
                                        <div>
                                                <img :src="book.imageUrl" alt="" class=" logo border rounded mx-auto">
                                           </div>
                                        <h1 class="text-center mt-5 font-semibold text-xl">{{ book.name }}</h1>
                                        <div class="">
                                                <h4 class="price">Price:</h4>
                                                <RouterLink to="/detail" class="see">see more</RouterLink>
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
}
.price {
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 5px;
}
</style>

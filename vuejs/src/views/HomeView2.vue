<script >

// import HeaderView from '../components/HeaderView.vue'
import Header2 from '../components/Header2.vue'
import bookapi from '../libs/apis/book'
import FooterView from '../components/FooterView.vue'
export default {
        components: {
                // HeaderView,
                Header2,FooterView
        },
        data(){
                return{
                        books:[],
                        auth:[],
                        bookId: this.$route.params.Bid,
                }
        },
        methods:{
                gotodetail(bookId){
                        this.$router.push({name:'detail2', params:{Bid:bookId}})
                },
        },
        
        async mounted(){
                this.books = await bookapi.all()

        }
       
}
</script>

<template>
        <div class="header"> 
                <Header2 />
       </div>
        
        <div class="p-1" style="background-color:#DBCECE ;">
                <div class="flex justify-center">
                    <img src="../assets/bg.svg" alt=" ">
                </div>
                <div class="border border-black text-center text-xl p-2">
                        <h3>Shop with me </h3>
                </div>
                <div class="booklist">
                        <div class="inforn   ">
                                <div class="book border border-black relative " v-for="book in books.slice(0, 6)" :key="book._id">
                                        <div>
                                                <img :src="book.imageUrl" alt="" class=" logo border rounded mx-auto">
                                           </div>
                                        <h1 class="text-center mt-5 font-semibold text-xl">{{ book.name }}</h1>
                                        <div class="">
                                                <h4 class="price">Price:${{ book.price }}</h4>
                                                <!-- <RouterLink to="/detail2" class="see">see more</RouterLink> -->
                                                <p class="see" @click="gotodetail(book._id)">see more</p>
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

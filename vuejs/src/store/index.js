import Veux from 'vuex'
import Vue from 'vue'

Vue.use(Veux)

new Veux.Store({
        state:{ // = data 
                books:[]
        },

        getters:{ // = computed properties
                booksCount (state, getters){
                        return state.books.filter(book =>book.category >0)
                }
        },
        actions:{
                fetchbook({commit}){    
                        return new Promise((resolve, reject)=>{
                                
                        })
                }
        },
        mutations:{
                setBooks(){
                        // update book
                }
        }
})
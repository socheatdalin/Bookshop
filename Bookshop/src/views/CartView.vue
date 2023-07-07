<script>
        import headerView from '../components/HeaderView.vue'

        export default {
                components: {
                        headerView
                }
        }
</script>

<template>
        <headerView />
        <div class="vh-100 border border-dark" style="background-color: #DBCECE;">
               <h1 class="mx-2">Home > Cart</h1>
                <h3 class="mx-5 my-3">My Cart</h3>
                <div class="inform">
                        <div class="d-flex justify-content-between mx-5 my-2">
                                <h3>Item</h3>
                                <h3>Quantity</h3>
                                <h3>Price</h3>
                        </div>
                        <div class="d-flex justify-content-between mx-5 my-3">
                                        <div class="">
                                        <img src="../assets/images/book2.jpg" alt="" width="150">
                                       
                                </div>
                                <div class="">
                                        <h2>Princess 1000 face</h2>
                                        <p>Author: Manith</p>
                                        
                                </div>
                                <div class="">
                                        <p>Price:9$</p>
                                        <p></p>
                                </div>   
                        </div>
                      <p class="desc mx-5">
                        Description: After the nuclear weapon dropped in the middle of the city and harmed thousand of people,
                                                Mocha is ready to DEAL WITH THE LIE and LIVE WITH THE LIE. The end is started, No one is really dead. You betray me, I betray you, We betray each other. 
                                                When the trust is falling apart, she can't trust anyone anymore, not even herself. No one expected that,
                                                the journey to find out who was behind the terrorism could turn out to be the journey to help the terrorist.
                        </p>
                    
                </div> 
                <div class="d-flex justify-content-end mx-5">
                           <button class="rounded-pill p-1 " style="background-color: #0D99FF;">Remove</button>
                </div>
             
               <hr> 
               <div class="d-flex justify-content-around">
                        <p>SubTotal: </p>
                        <p>9$</p>
                </div>
                <hr> 
                <div class="d-flex justify-content-around ">
                        <p>Total: </p>
                        <p>9$</p>
                </div >
                <div class="d-flex justify-content-end mx-4 ">
                           <button class="rounded-pill " style="background-color: #0D99FF;">Checkout</button>
                </div>
        </div>
       
</template>

<style>
@media (max-width: 1024px) {
        
}
.desc{
        width: 500px;
        
}

</style>
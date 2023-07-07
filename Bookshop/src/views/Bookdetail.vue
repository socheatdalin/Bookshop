<script>
        import headerView from '../components/HeaderView.vue'

        export default {
                components: {
                        headerView
                },
                mounted(){

                        function routeto(){
                                location.href = '/cart';
                        }
                }
        }
</script>
<template>
        <headerView />
        <div class="" style="background-color: #DBCECE;">
                <h3 class="p-3"> Home>novel</h3>
                <div class="d-flex justify-content-around row">
                        <div class="col m-5 d-block ">
                                <img src="../assets/images/book1.jpg" class="img-fluid" alt="one mission" width="70%" height="" />
                                <p class="desc d-block col-md-w-25 col-lg-w-25 fs-5"> <b>Description: </b> 
                                                After the nuclear weapon dropped in the middle of the city and harmed thousand of people,
                                                Mocha is ready to DEAL WITH THE LIE and LIVE WITH THE LIE. The end is started, No one is really dead. You betray me, I betray you, We betray each other. 
                                                When the trust is falling apart, she can't trust anyone anymore, not even herself. No one expected that,
                                                the journey to find out who was behind the terrorism could turn out to be the journey to help the terrorist.
                                </p>
                        </div>
                        <div class="col d-block mx-5 fs-5">
                                <h1>Name</h1>
                                <div class="mx-5">
                                        <p>Author:Manith</p>
                                        <p>First published: march 10,2017</p>
                                </div> 
                                        <hr class="w-75">
                                <div class="mx-5">
                                        <p>Price:</p>
                                        <select name="" id="" class=" rounded-pill p-1" style="background-color: #0D99FF;">
                                                <option value="">Quantity</option>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                        </select> 
                                </div>
                                       
                                
                                <hr class="w-75">
                                        <div class="d-flex"> 
                                                <div class="mx-4">
                                                        <RouterLink to="/cart"> <button class="rounded-pill" style="background-color: #0D99FF;" >Buy Now</button></RouterLink>
                                                </div>
                                               
                                                <RouterLink to="/cart"> <button class="rounded-pill " style="background-color: #0D99FF;" >Add Cart</button></RouterLink>
                                        </div>   
                                
                              
                        </div>  
                       
                </div>
                <h1 class="mx-5">Relate book</h1>
                <div class="book m-2 my-2">
                                <div class="item position-relative" id="item">
                                        <div class="object-fit-cover">
                                              <img alt="book logo" class="logo rounded mx-auto"
                                                src="@/assets/images/book15.jpg"  />
                                                <h3>កូនអុកសម្ងាត់</h3>    
                                        </div>
                                      
                                        <div class="">
                                                <h4 class="price mx-3">Price: 8$ </h4>
                                                <RouterLink to="/detail" class="see mx-3">see more</RouterLink>
                                        </div>
                                </div>
                                <div class="item position-relative">
                                        <img alt="book logo" class="logo rounded mx-auto " src="@/assets/images/book5.jpg" />
                                        <h3>ស្ដេចម៉ែស្ដេចកូន</h3>
                                        <div class="">
                                                <h4 class="price mx-3">Price: 8$</h4>
                                                <RouterLink to="/detail" class="see mx-3">see more</RouterLink>
                                        </div>
                                        
                                </div>
                                <div class="item position-relative">
                                        <img alt="book logo" class="logo rounded mx-auto " src="@/assets/images/book1.jpg"  />
                                        <h3>One mission</h3>
                                        <div class="">
                                                 <h4 class="price mx-3">Price: 6$ </h4>
                                                 <RouterLink to="/detail" class="see mx-3">see more</RouterLink>
                                        </div>
                                       
                                </div>
                        </div>
        </div>
</template>

<style>
.desc{
        margin-top:50px;
        /* margin-left:50px; */
}
</style>


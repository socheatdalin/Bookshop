
<template>
        
        <div  class="h-100" style="background-color: #DBCECE;">
                <div  class="image">
                        <img src="@/assets/bg.svg" class="img-fluid " alt="Responsive image">
                </div>
                <div class="border border-dark p-2 d-flex justify-content-center">
                        <h3 class="px-2">Shop with us </h3>
                        <svg xmlns=" www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="2%">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="2%">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg> -->

                </div>
                <div class="booklist ">
                        <div class="book">
                                <div class="item  " id="item" >
                                        <img alt="book logo" class="logo img-fluid rounded mx-auto d-block m-2" src="@/assets/images/book12.jpg" width="125" height="150"  />
                                        <h3>កូនទី៦</h3>
                                        <div class="d-flex justify-content-around pt-2">
                                                <h4>Price: 8$ </h4>
                                                <RouterLink to="/detail" class="see">see more</RouterLink>
                                        </div>
                                </div>
                                <div class="item " id="item">
                                        <img alt="book logo" class="logo img-fluid rounded mx-auto d-block m-2" src="@/assets/images/book5.jpg" width="160" height="170" />
                                        <h3>ស្ដេចម៉ែស្ដេចកូន</h3>
                                        <div class="d-flex justify-content-around pt-2">
                                                <h4>Price: 7$ </h4>
                                                <RouterLink to="/detail" class="see">see more</RouterLink>
                                        </div>
                                        
                                </div>
                                <div class="item " id="item">
                                        <img alt="book logo" class="logo img-fluid rounded mx-auto d-block m-2" src="@/assets/images/book1.jpg" width="160" height="180" />
                                        <h3>One mission</h3>
                                        <div class="d-flex justify-content-around pt-2">
                                                 <h4 >Price: 6$ </h4>
                                                 <RouterLink to="/detail" class="see">see more</RouterLink>
                                        </div>
                                       
                                </div>
                        </div>
                        <div class="book " id="item">
                                <div class="item "> 
                                        <img alt="book logo" class="logo img-fluid rounded mx-auto d-block m-2" src="@/assets/images/book2.jpg" width="150" height="180" />
                                        <h3>ព្រះនាងមុខ១០០០​និង​គ្រោះទាំង៧</h3>
                                        <div class="d-flex justify-content-around ">
                                                <h4>Price: 8$ </h4>
                                                <RouterLink to="/detail" class="see">see more</RouterLink>
                                        </div>
                                </div>
                                <div class="item" id="item"> 
                                        <img alt="book logo" class="logo img-fluid rounded mx-auto d-block m-2" src="@/assets/images/book4.jpg" width="170" height="180" />
                                        <h3>កុមុទ</h3>
                                        <div class="d-flex justify-content-around pt-2">
                                                <h4>Price: 5.5$ </h4>
                                                <RouterLink to="/detail" class="see">see more</RouterLink>
                                        </div>
                                </div>
                                <div class="item " id="item">
                                         <img alt="book logo" class="logo img-fluid rounded mx-auto d-block m-2" src="@/assets/images/book3.jpg" width="170" height="180" />
                                        <h3>កុសិនី​មាត់ទិព្វ</h3>
                                        <div class="d-flex justify-content-around pt-2">
                                                <h4>Price: 7$ </h4>
                                                <RouterLink to="/detail" class="see">see more</RouterLink>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>      
</template>

<script>
    
</script>

<style>
.logo{
        width: 150px;
}
.image{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: auto;
}
.book{
        display: flex;
        justify-content: space-around;
        
        
}
.see{
        font-weight: bold;
        font-size: larger;
}
.item{
        text-align: center;
        border: 1px solid black;
        width: 350px;
        margin: 5px;
        height: 300px;
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
        .item{
                height: 350px;
        }

}
</style>
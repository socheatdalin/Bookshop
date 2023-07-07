<script>
        export default{
                data(){
                        auths: []
                },

        }
</script>
<template>
        <header style="background-color:#978080;">
                <div class=" border border-dark">
                        <div class="row ">
                        <div class="col ">
                                <img alt="book logo" class="img-fluid"  src="@/assets/logo.svg" width="80" height="70" />
                                <h3 class="mx-1">Leorio</h3>
                        </div>
                        <div class="wrapper col m-auto">
                                <nav class="">
                                        <RouterLink to="/" class="navs">Home</RouterLink>
                                        <RouterLink to="/product" class="navs">Product</RouterLink>
                                        <RouterLink to="/about" class="navs ">About</RouterLink>
                                </nav> 
                        </div> 
                        <div class=" Login m-auto mx-2 col">
                                <div class="d-flex  justify-content-end ">
                                        <img src="../assets/login.png" alt="" style="width: 5%;">
                                        <span>Leorio</span>
                                </div>
                              
                        </div> 
                </div>
                </div>
        </header>
</template>

<script>
        
</script>

<style>



.navs{
        font-weight: bold;
        font-size: 20px;
}

nav a.router-link-exact-active {
        color: var(--color-text);
}

nav a.router-link-exact-active:hover {
        background-color: transparent; 
}

nav a {
        padding: 0 1rem;
        border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
        border: 0;
}
.login{
        font-weight: bold;
        font-size: 20px;
       
}

@media (min-width: 1024px) {
        .ALL {
                width: 100%;
                display: flex;
                justify-content: space-between;
                place-items: center;
                /* padding-right: calc(var(--section-gap) / 2); */
        }

        .logo {
                margin: 0 2rem 0 0;
        }
        .logo h2{
                margin: 0 2rem 0 0;
        }
        nav {
                /* text-align: left; */
                margin-left: -1rem;
                font-size: 1rem;
                padding: 1rem 0;
                margin-top: 1rem;
        }
}
@media (max-width:500px) {
        .wrapper{
                display: flex;
               
        }
        .item{
                height: 600px;
        }
        .navs{
                 font-size: 13px;
        }
        nav a {
                display: inline-block;
                padding: 0 5px;
                border-left: 1px solid var(--color-border);
        }
        .login{
                font-size: 13px;
        }
        .name{
                font-size: 12px;
        }
}
</style>


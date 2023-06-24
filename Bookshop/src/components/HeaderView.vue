<template>
        <header style="background-color:#978080;">
                <div class="ALL  border border-dark">
                        <div class="m-1">
                                <img alt="book logo" class=" "  src="@/assets/logo.svg" width="80" height="70" />
                                <h3 class="mx-1">Leorio</h3>
                        </div>
                        <div class="wrapper">
                                <nav >
                                        <RouterLink to="/" class="navs">Home</RouterLink>
                                        <RouterLink to="/product" class="navs">Product</RouterLink>
                                        <RouterLink to="/about" class="navs ">About</RouterLink>
                                </nav> 
                        </div> 
                        <div class=" Login">
                                <RouterLink to="/login" class="login d-flex justify-content-end mx-3" > 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" width="15%">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>  
                                </RouterLink>
                        </div> 
                </div>
        </header>
</template>

<script>
        
</script>

<style>

.ALL{
        width: 100%;
        display: flex;
        justify-content: space-between;
        
}
.logo {
        display: block;
        margin: 0px;
}
.navs{
        font-weight: bold;
        font-size: 20px;
}
.wrapper{
        margin: auto;
}
nav a.router-link-exact-active {
        color: var(--color-text);
}

nav a.router-link-exact-active:hover {
        background-color: transparent; 
}

nav a {
        display: inline-block;
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
                place-items: center;
                padding-right: calc(var(--section-gap) / 2);
        }

        .logo {
                margin: 0 2rem 0 0;
        }
        .logo h2{
                margin: 0 2rem 0 0;
        }
        nav {
                text-align: left;
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


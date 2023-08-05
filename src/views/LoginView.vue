<script >

import { RouterLink } from 'vue-router';

export default {
        setup() {
        },
        data() {
                return {
                        email: "",
                        password: "",
                        logout: true
                };
        },
        async mounted() {
                console.log("hello world");
        },
        methods: {
                async onSubmit(e) {
                        e.preventDefault();
                        try {
                                const res = await fetch("https://dalin-bookshop-api.onrender.com/auth/login", {
                                        method: "POST",
                                        headers: {
                                                "Content-type": "application/json",
                                                
                                        },
                                        body: JSON.stringify({
                                                email: this.email,
                                                password: this.password,
                                        }),
                                });
                                const result = await res.json();
                                if (!result.success) {
                                        alert(result.error);
                                        return;
                                }
                                console.log(result.error);
                        }
                        catch (err) {
                                console.log(err);
                        }
                        this.$router.push({ name: "home2" });
                },
        },
        components: { RouterLink }
};
</script>

<template>
        <div class="h-screen pt-5" style="background-color: #DBCECE;">
                <div class="bg-blue-100 border border-black m-auto md:w-3/4 sm:w-3/4" style="width: 60%; border-radius: 50px;">

                        <div class="grid grid-cols-2  ">
                                <div class="imgcontainer flex justify-center ">
                                        <p class="flex justify-end"> <a href="/"><svg xmlns="http://www.w3.org/2000/svg"
                                                                fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                        d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                                                        </svg>
                                                </a> </p>
                                        <img src="../assets/login.png" alt="Avatar" class="avatar" />
                                </div>
                                <div class=" ">
                                        <form @submit="onSubmit" method="post">
                                                <div>
                                                        <h1 class="text-center text-2xl font-bold">Sign In</h1>

                                                </div>

                                                <div class="container">
                                                        <div>
                                                                <label for="email"><b>Username</b></label><br>
                                                                <input v-model="email" type="text" placeholder="Enter email"
                                                                        name="email" class="w-96 md:w-48" required />
                                                        </div>

                                                        <div>
                                                                <label for="psw"><b>Password</b></label><br>
                                                                <input v-model="password" type="password"
                                                                        placeholder="Enter Password" class="w-96 md:w-48"
                                                                        name="psw" required />
                                                        </div>

                                                        <div class="flex justify-end ">
                                                                <button type="submit " class=""> Login</button>
                                                                <!-- <button type="buttom " class=""> <RouterLink to="/home">cancel</RouterLink> </button> -->
                                                        </div>

                                                </div>

                                                <div class="container " style="display: flex;">
                                                        <p>Create your new account here.<RouterLink to="/register" class="ml-2 "
                                                                        style=" color: #33c818;">Register Here</RouterLink>
                                                        </p>

                                                </div>
                                        </form>
                                </div>
                        </div>

                </div>
        </div>
</template>

<style scoped>
/* Bordered form */
form {
        padding: 15px;
}

/* Full-width inputs */
input[type="text"],
input[type="password"] {
        width: 100%;
        border-radius: 15px;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
}

/* Set a style for all buttons */
button {
        background-color: #04aa6d;
        color: white;
        padding: 10px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 30%;
        border-radius: 20px;
}

/* Add a hover effect for buttons */
button:hover {
        opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
        width: auto;
        padding: 10px 18px;
        background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
        width: fit-content;
        height: fit-content;
        /* text-align: center; */
        margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
        width: 70%;
        height: fit-content;
}

/* Add padding to containers */
.container {
        padding: 16px;
}

/* The "Forgot password" text */
span.psw {
        float: right;
        padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
        span.psw {
                display: block;
                float: none;
        }

        .cancelbtn {
                width: 100%;
        }
}</style>



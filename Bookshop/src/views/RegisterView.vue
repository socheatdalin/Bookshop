<script>
export default {
        
        data() {
                return {
                        email: "",
                        username: "",
                        firstName: "",
                        lastName: "",
                        pwd: "",
                        repeatPws: "",
                };
        },
        methods: {
                // async onSubmit(e) {
                //         e.preventDefault();
                //         const res = await fetch("http://127.0.0.1:3001/auth/register", {
                //                 method: "POST",
                //                 headers: {
                //                         "Content-type": "application/json",
                //                         Origin: "http://localhost:3000",
                //                 },
                //                 body: JSON.stringify({
                //                         email: this.email,
                //                         username: this.username,
                //                         firstName: this.firstName,
                //                         lastName: this.lastName,
                //                         password: this.pwd,
                //                         repeat_password: this.repeatPws,
                //                 }),
                //         });

                //         const result = await res.json();
                //         if (!result.success) {
                //                 alert(result.error);
                //                 return;
                //         }

                //         alert("Successfully registered~");
                //         this.$router.push({ name: "auth/login" });
                // },
                async onSubmit(e) {
                        e.preventDefault();
                        try{
                                const res = await fetch('http://localhost:3001/auth/register',{
                                        method: 'POST',
                                        headers: {
                                                "Content-type": "application/json",
                                                Origin: "http://localhost:3000",
                                        },
                                        body: JSON.stringify({
                                                email: this.email,
                                                username: this.username,
                                                firstName: this.firstName,
                                                lastName: this.lastName,
                                                password: this.pwd,
                                                repeat_password: this.repeatPws,
                                        }),
                                });
                                 const result = await res.json();
                                 if (!result.success) {
                                        alert(result.error);
                                        return;
                                }
                        }
                        catch(err){
                                console.log(err);
                        }
                        alert("Successfully registered~");
                        this.$router.push({ name: "auth/login" });
                },
        },
};
</script>

<template>
        <section class="vh-100 p-2" style="background-color: #DBCECE;">
                <div class="container ">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                                <div class="col col-xl-8">
                                        <div class="card " style="border-radius: 1rem;">
                                                <div class="row g-0">
                                                        <div
                                                                class=" pic col-md-5 col-lg-5 col-sm-5 d-flex justify-content-center align-items-center ">
                                                                <img src="../assets/login.png" alt="login form"
                                                                        class="img-fluid img"
                                                                        style="border-radius:1rem 0 0 1rem;" />
                                                        </div>
                                                        <div class="col-md-5 col-lg-6 d-flex align-items-center">
                                                                <div class="card-body  text-black">

                                                                        <form @submit="onSubmit">
                                                                                <h5 class="fw-bold mb-3 pb-3 fs-1" style="letter-spacing: 1px;">Sign Up
                                                                                </h5>
                                                                                <div class="form-outline mb-4">
                                                                                        <label class="form-label"
                                                                                                for="form2Example16">Username</label>
                                                                                        <input type="text" id="form2Example16"
                                                                                                class="form-control form-control-lg" />
                                                                                </div>
                                                                                <div class="form-outline mb-4">
                                                                                        <label class="form-label"
                                                                                                for="form2Example17">Email</label>
                                                                                        <input type="email" id="form2Example17"
                                                                                                class="form-control form-control-lg" />
                                                                                </div>
                                                                                <div class="form-outline mb-4">
                                                                                        <label class="form-label"
                                                                                                for="form2Example18">First Name</label>
                                                                                        <input type="text" id="form2Example18"
                                                                                                class="form-control form-control-lg" />
                                                                                </div>
                                                                                <div class="form-outline mb-4">
                                                                                        <label class="form-label"
                                                                                                for="form2Example20">Last Name</label>
                                                                                        <input type="text" id="form2Example20"
                                                                                                class="form-control form-control-lg" />
                                                                                </div>
                                                                                
                                                                                <div class="form-outline mb-4">
                                                                                        <label class="form-label" type="password"
                                                                                                for="form2Example27">Password</label>
                                                                                        <input type="password"
                                                                                                id="form2Example27"
                                                                                                class="form-control form-control-lg" />
                                                                                </div>
                                                                                <div class="form-outline mb-4">
                                                                                        <label class="form-label"
                                                                                                for="form2Example21">Repeat Password</label>
                                                                                        <input type="password"
                                                                                                id="form2Example21"
                                                                                                class="form-control form-control-lg" />
                                                                                </div>
                                                                                <div class="pt-1 mb-4 d-flex justify-content-end">
                                                                                        <button class="btn btn-primary btn-lg btn-block col-md-6" type="submit">Signup</button>
                                                                                </div>
                                                                        </form>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
</template>

<style scoped>
@media (min-width: 1024px) {
        .pic {
                width: 40%;
                gap: 15px;
        }
}

@media (max-width:540px) {
        .img {
                height: 300px;
        }

}

@media (max-width: 700px) {
        .pic {
                margin: auto;
        }
}

</style>
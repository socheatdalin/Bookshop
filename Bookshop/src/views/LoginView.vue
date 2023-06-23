<template>
        <section class="vh-100 " style="background-color: #DBCECE;">
                <div class="container h-100 ">
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
                                                                <div class="card-body p-4 p-lg-5 text-black">

                                                                        <form>
                                                                                <h5 class="fw-bold mb-3 pb-3 fs-1"
                                                                                        style="letter-spacing: 1px;">Sign Up
                                                                                </h5>

                                                                                <div class="form-outline mb-4">
                                                                                        <label class="form-label"
                                                                                                for="form2Example17">Email
                                                                                                address</label>
                                                                                        <input type="email" id="form2Example17"
                                                                                                class="form-control form-control-lg" />

                                                                                </div>

                                                                                <div class="form-outline mb-4">
                                                                                        <label class="form-label"
                                                                                                for="form2Example27">Password</label>
                                                                                        <input type="password"
                                                                                                id="form2Example27"
                                                                                                class="form-control form-control-lg" />
                                                                                </div>
                                                                                <div
                                                                                        class="pt-1 mb-4 d-flex justify-content-end">
                                                                                        <button class="btn btn-primary btn-lg btn-block col-md-6" type="button">Login</button>
                                                                                </div>

                                                                                <p class="mb-2 pb-lg-2" style="color: #393f81;">Don't have an account?
                                                                                                <RouterLink to="/signup">Register here</RouterLink>
                                                                                </p>
                                                                                <div class="text-center">
                                                                                        <p>or sign up with:</p>
                                                                                        <button type="button" class="btn btn-link btn-floating mx-1 ">
                                                                                                <i class="fab fa-facebook-f" aria-hidden="true"></i>
                                                                                        </button>

                                                                                        <button type="button" class="btn btn-link btn-floating mx-1">
                                                                                                <i class="fab fa-google"></i>
                                                                                        </button>

                                                                                        <button type="button" class="btn btn-link btn-floating mx-1">
                                                                                                <i class="fab fa-twitter"></i>
                                                                                        </button>

                                                                                        <button type="button" class="btn btn-link btn-floating mx-1">
                                                                                                <i class="fab fa-github"></i>
                                                                                        </button>
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

<style>
@media (min-width: 1024px) {
        .pic{
                width: 40%;
                gap: 15px;
        }
}
@media (max-width:540px) {
        .img{
                height: 300px;
        }

}
@media (max-width: 700px) {
        .pic{
                margin: auto;
        }
}
</style>
<script>


</script>
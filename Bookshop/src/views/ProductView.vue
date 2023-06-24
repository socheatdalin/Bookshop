<template>
        <div class="" style="background-color: #DBCECE;">
                <h1 class="mx-5">Home > Product</h1>
                <div class="d-flex mx-5">
                        <button class="genre">All</button>
                        <button class="genre">Drama</button>
                        <button class="genre">Fiction</button>
                        <button class="genre">Horror</button>
                        <button class="genre">+more</button>
                </div>
                <div>
                        <h2>New Releases</h2>
                        <div>
                                <div class="book">
                                        <div class="item position-relative" id="item">
                                                <img alt="book logo" class="logo border rounded mx-auto "
                                                        src="@/assets/images/book11.jpg"  />
                                                <h3>មឈូសកូនបង</h3>
                                                <div class="">
                                                       <h4 class="price mx-3"> Price: 9$ </h4>
                                                        <RouterLink to="/detail" class="see mx-3">see more</RouterLink>
                                                </div>
                                        </div>
                                        <div class="item position-relative" id="item">
                                                <img alt="book logo" class="logo border rounded mx-auto"
                                                        src="@/assets/images/book15.jpg"  />
                                                <h3>កូនអុកសម្ងាត់</h3>
                                                <div class="">
                                                        <h4 class="price mx-3">Price: 8$ </h4>
                                                        <RouterLink to="/detail" class="see mx-3">see more</RouterLink>
                                                </div>

                                        </div>
                                        <div class="item position-relative" id="item">
                                                <img alt="book logo" class="logo border rounded mx-auto "
                                                        src="@/assets/images/book7.jpg" />
                                                <h3>អព្ទ័</h3>
                                                <div class="">
                                                        <h4 class="price mx-3">Price: 6$ </h4>
                                                        <RouterLink to="/detail" class="see mx-3">see more</RouterLink>
                                                </div>

                                        </div>
                                </div>
                        </div>
                        <div>
                                <h2>Best Seller</h2>
                                <div>
                                        <div class="book">
                                                <div class="item  " id="item">
                                                        <img alt="book logo" class="logo border rounded mx-auto "
                                                                src="@/assets/images/book2.jpg"  />
                                                        <h3>ព្រះនាងមុខ១០០០​និង​គ្រោះទាំង៧</h3>
                                                        <div class="">
                                                                <h4 class="price mx-3">Price: 9$ </h4>
                                                                <RouterLink to="/detail" class="see mx-3">see more</RouterLink>
                                                        </div>
                                                </div>
                                                <div class="item " id="item">
                                                        <img alt="book logo" class="logo border rounded mx-auto "
                                                                src="@/assets/images/book11.jpg"  />
                                                        <h3>មឈូសកូនបង</h3>
                                                        <div class="">
                                                                <h4 class="price mx-3">Price: 9$ </h4>
                                                                <RouterLink to="/detail" class="see mx-3">see more</RouterLink>
                                                        </div>

                                                </div>
                                                <div class="item " id="item">
                                                        <img alt="book logo" class="logo border rounded mx-auto"
                                                                src="@/assets/images/book8.jpg"  />
                                                        <h3>YOU ទំព័រចុងក្រោយ</h3>
                                                        <div class="">
                                                                <h4 class="price mx-3">Price: 7$ </h4>
                                                                <RouterLink to="/detail" class="see mx-3">see more</RouterLink>
                                                        </div>

                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div>
                                <h2>Result</h2>
                                <div>
                                        <div class="book">
                                                <div class="item position-relative " id="item">
                                                        <img alt="book logo" class="logo border rounded mx-auto "
                                                                src="@/assets/images/book2.jpg"  />
                                                        <h3>ព្រះនាងមុខ១០០០​និង​គ្រោះទាំង៧</h3>
                                                        <div class="">
                                                                <h4 class="price mx-3">Price: 9$ </h4>
                                                                <RouterLink to="/detail" class="see mx-3">see more</RouterLink>
                                                        </div>
                                                </div>
                                                <div class="item position-relative" id="item">
                                                        <img alt="book logo" class="logo border rounded mx-auto "
                                                                src="@/assets/images/book11.jpg"  />
                                                        <h3>មឈូសកូនបង</h3>
                                                        <div class="">
                                                                <h4 class="price mx-3">Price: 9$ </h4>
                                                                <RouterLink to="/detail" class="see mx-3">see more</RouterLink>
                                                        </div>

                                                </div>
                                                <div class="item position-relative" id="item">
                                                        <img alt="book logo" class="logo border rounded mx-auto "
                                                                src="@/assets/images/book8.jpg" />
                                                        <h3>YOU ទំព័រចុងក្រោយ</h3>
                                                        <div class="">
                                                                <h4 class="price mx-3">Price: 7$ </h4>
                                                                <RouterLink to="/detail" class="see mx-3">see more</RouterLink>
                                                        </div>

                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</template>

<style>
.genre {
        background-color: #B3A2A2;
        color: white;
        border-radius: 15px;
        border: 0;
        margin: 5px;
        width: 100px;
        height: 35px;
}
.genre:hover{
        background-color: #978080;
}
h2{
        margin: 5px;
        margin-left: 10px;
}
</style>
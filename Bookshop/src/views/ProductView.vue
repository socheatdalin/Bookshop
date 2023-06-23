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
                                        <div class="item " id="item">
                                                <img alt="book logo" class="logo img-fluid rounded mx-auto d-block m-2"
                                                        src="@/assets/images/book11.jpg"  />
                                                <h3>មឈូសកូនបង</h3>
                                                <div class="d-flex justify-content-around detail">
                                                        <h4>Price: 9$ </h4>
                                                        <RouterLink to="/detail" class="see">see more</RouterLink>
                                                </div>
                                        </div>
                                        <div class="item " id="item">
                                                <img alt="book logo" class="logo img-fluid rounded mx-auto m-2"
                                                        src="@/assets/images/book15.jpg"  />
                                                <h3>កូនអុកសម្ងាត់</h3>
                                                <div class="d-flex justify-content-around detail">
                                                        <h4>Price: 8$ </h4>
                                                        <RouterLink to="/detail" class="see">see more</RouterLink>
                                                </div>

                                        </div>
                                        <div class="item " id="item">
                                                <img alt="book logo" class="logo img-fluid rounded mx-auto d-block m-2"
                                                        src="@/assets/images/book7.jpg" />
                                                <h3>អព្ទ័</h3>
                                                <div class="d-flex justify-content-around detail">
                                                        <h4>Price: 6$ </h4>
                                                        <RouterLink to="/detail" class="see">see more</RouterLink>
                                                </div>

                                        </div>
                                </div>
                        </div>
                        <div>
                                <h2>Best Seller</h2>
                                <div>
                                        <div class="book">
                                                <div class="item  " id="item">
                                                        <img alt="book logo" class="logo img-fluid rounded mx-auto d-block m-2"
                                                                src="@/assets/images/book2.jpg"  />
                                                        <h3>ព្រះនាងមុខ១០០០​និង​គ្រោះទាំង៧</h3>
                                                        <div class="d-flex justify-content-around detail">
                                                                <h4>Price: 9$ </h4>
                                                                <RouterLink to="/detail" class="see">see more</RouterLink>
                                                        </div>
                                                </div>
                                                <div class="item " id="item">
                                                        <img alt="book logo" class="logo img-fluid rounded mx-auto d-block m-2"
                                                                src="@/assets/images/book11.jpg"  />
                                                        <h3>មឈូសកូនបង</h3>
                                                        <div class="d-flex justify-content-around detail">
                                                                <h4>Price: 9$ </h4>
                                                                <RouterLink to="/detail" class="see">see more</RouterLink>
                                                        </div>

                                                </div>
                                                <div class="item " id="item">
                                                        <img alt="book logo" class="logo img-fluid rounded mx-auto d-block m-2"
                                                                src="@/assets/images/book8.jpg"  />
                                                        <h3>YOU ទំព័រចុងក្រោយ</h3>
                                                        <div class="d-flex justify-content-around detail">
                                                                <h4>Price: 7$ </h4>
                                                                <RouterLink to="/detail" class="see">see more</RouterLink>
                                                        </div>

                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div>
                                <h2>Result</h2>
                                <div>
                                        <div class="book">
                                                <div class="item  " id="item">
                                                        <img alt="book logo" class="logo img-fluid rounded mx-auto d-block m-2"
                                                                src="@/assets/images/book2.jpg" width="125" height="150" />
                                                        <h3>ព្រះនាងមុខ១០០០​និង​គ្រោះទាំង៧</h3>
                                                        <div class="d-flex justify-content-around detail">
                                                                <h4>Price: 9$ </h4>
                                                                <RouterLink to="/detail" class="see">see more</RouterLink>
                                                        </div>
                                                </div>
                                                <div class="item " id="item">
                                                        <img alt="book logo" class="logo img-fluid rounded mx-auto d-block m-2"
                                                                src="@/assets/images/book11.jpg" width="160" height="170" />
                                                        <h3>មឈូសកូនបង</h3>
                                                        <div class="d-flex justify-content-around detail">
                                                                <h4>Price: 9$ </h4>
                                                                <RouterLink to="/detail" class="see">see more</RouterLink>
                                                        </div>

                                                </div>
                                                <div class="item " id="item">
                                                        <img alt="book logo" class="logo img-fluid rounded mx-auto d-block m-2"
                                                                src="@/assets/images/book8.jpg" width="160" height="180" />
                                                        <h3>YOU ទំព័រចុងក្រោយ</h3>
                                                        <div class="d-flex justify-content-around detail">
                                                                <h4>Price: 7$ </h4>
                                                                <RouterLink to="/detail" class="see">see more</RouterLink>
                                                        </div>

                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</template>

<style>
.item{
        position: relative;
}
.deatil{
        position: absolute;

}
.genre {
        background-color: #B3A2A2;
        color: white;
        border-radius: 15px;
        border: 0;
        margin: 5px;
        width: 100px;
        height: 35px;
}
h2{
        margin: 5px;
        margin-left: 10px;
}
</style>
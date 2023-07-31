<script>
    import HeaderView from '../components/HeaderView.vue'
    import Header2 from '../components/Header2.vue';

        export default {
                components: {
                        HeaderView,
                        Header2
                }
        }
</script>

<template >
        <div class="h-screen overflow-hidden" >
        <HeaderView />
        <div class="contain ">
                <img src="../assets/About.jpg" alt="" class=" about">

                <div class="welcome fixed">
                        <h3>Welcome to Leorio</h3>
                        <p>We are bookshop that buy and sell a book and deliver to everyone.
                                We have many types of genre for you to choose .</p>
                </div>
                <div class="contact flex">
                        <div>
                                  <h3>Nice to meet you</h3>
                                <p>We’re here to help you and freely to contact us. </p>
                                <p>Call us.If you’d like to talk to us in person. </p>
                                <p>call us at <b class="tel">012-8585-010</b></p> 
                        </div>p
                </div>      
                        <div class="email">
                                <h2>Contact Form</h2>
                                <form action="" class="grid grid-cols-2">
                                        <div class="  ">
                                                <div class="m-3 ">
                                                        <label for="text">Name:</label> <br>
                                                        <input type="text" name="name" id="name" placeholder="name" class="input m-2">
                                                </div>
                                                <div class="m-3">
                                                        <label for="text">Email:</label><br>
                                                        <input type="email" name="" id="email" placeholder="example@gmail.com" class="input m-2">
                                                </div>
                                                <div class="m-3">
                                                        <label for="text">Phone Number:</label><br>
                                                        <input type="number" name="" id="Tel" placeholder="012-xxxx-xxx" class="input m-2">
                                                </div>
                                                <div class="text-center p-1"><button class="send p-2 ">Send</button></div>
                                                
                                        </div>
                                        <div class=" "> 
                                          <div>   <label class="form-label" for="textAreaExample">Message</label></div>
                                             
                                                <textarea class="form-control border border-black w-80" id="textAreaExample" rows="4"
                                                        style="background: #fff;"></textarea>
                                               
                                        </div>

                                </form>

                        </div>
                
                <div>

                </div>
        </div>
        </div>
</template>

<style>

.about {
        width: 100%;
}

.contain {
        position: relative; overflow: hidden;
}

.welcome {
        position: absolute;
        top: 3%;
        left: 5%;
        border-radius: 20px;
        width: 400px;
        height: 200px;
        padding: 35px;
        background-color: white;
}

.contact {
        position: absolute;
        top: 6%;
        right: 2%;
        border-radius: 20px;
        width:400;
        height: 160px;
        padding: 30px;
        background-color: white;
}
.send{
        width: 80px;
        /* margin-top: 10px; */
        border-radius: 10px;
        background-color: #0D99FF;
        
}
.email{
        position: absolute;
        top: 44%;
        left: 47%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
        width:50%;
        height: 39%;
        padding: 25px;
        background-color: white;
}
.input{
         border-radius: 10px;
         padding: 5px;
         width: 300px;
         border: 1px solid black;
}
.tel {
        color: rgb(116, 181, 159);
}</style>
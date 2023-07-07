<script>
        import headerView from '../components/HeaderView.vue'

        export default {
                components: {
                        headerView
                }
        }
</script>

<template >
        <headerView />
        <div class="contain ">
                <img src="../assets/About.jpg" alt="" class=" about">

                <div class="welcome fixed">
                        <h3>Welcome to Leorio</h3>
                        <p>We are bookshop that buy and sell a book and deliver to everyone.
                                We have many types of genre for you to choose .</p>
                </div>
                <div class="contact d-flex gap-10">
                        <div>
                                  <h3>Nice to meet you</h3>
                                <p>We’re here to help you and freely to contact us. </p>
                                <p>Call us. </p>
                                <p>If you’d like to talk to us in person.</p>
                                <p>call us at <b class="tel">012-8585-010</b></p> 
                        </div>
                </div>      
                        <div class="email">
                                <h2>Contact Form</h2>
                                <form action="" class="d-flex col">
                                        <div class="  col ">
                                                <div class="m-2 ">
                                                        <label for="text">Name:</label> <br>
                                                        <input type="text" name="name" id="name" placeholder="name" class="input">
                                                </div>
                                                <div class="m-2">
                                                        <label for="text">Email:</label><br>
                                                        <input type="email" name="" id="email" placeholder="example@gmail.com" class="input">
                                                </div>
                                                <div class="m-2">
                                                        <label for="text">Phone Number:</label><br>
                                                        <input type="number" name="" id="Tel" placeholder="012-xxxx-xxx" class="input">
                                                </div>
                                                <button class="send mx-5">Send</button>
                                        </div>
                                        <div class="form-outline w-100 col"> 
                                                <label class="form-label" for="textAreaExample">Message</label>
                                                <textarea class="form-control" id="textAreaExample" rows="4"
                                                        style="background: #fff;"></textarea>
                                               
                                        </div>

                                </form>

                        </div>
                
                <div>

                </div>
        </div>
</template>

<style>
/* * {
        overflow: hidden;
} */

.about {
        width: 100%;
        height: 90%;
        overflow: hidden;
}

.contain {
        position: relative;
}

.welcome {
        position: absolute;
        top: 5%;
        left: 5%;
        border-radius: 20px;
        width: 400px;
        height: 200px;
        padding: 35px;
        background-color: white;
}

.contact {
        position: absolute;
        top: 10%;
        right: 10%;
        border-radius: 20px;
        width:400;
        height: 250px;
        padding: 30px;
        background-color: white;
}
.send{
        width: 80px;
        border-radius: 10px;
        background-color: #0D99FF;
        
}
.email{
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
        width:50%;
        height: 40%;
        padding: 30px;
        background-color: white;
}
.input{
         border-radius: 10px;
         padding: 5px;
         width: 350px;
         border: 1px solid black;
}
.tel {
        color: rgb(116, 181, 159);
}</style>
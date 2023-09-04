<template>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <navbar></navbar>
        <section class="main">
            <div class="header section">
                <span class="display-5">Messages</span>
            </div>
        </section>

        <section>
            <div class="maincard">
                <div class="card centercard">

                    
                        
                        <div class="card notifi">
                            
                            <div class="card repeatcard">
                                <div class="image">
                                    <img src="../assets/images/TeamworkRegistration/profile.jpg" alt="" class="imgsetup">
                                </div>
                                <textarea name="" id="" cols="48" rows="4" class="comments"></textarea>
                            </div>

                            <div class="card repeatcard">
                                <div class="image">
                                    <img src="../assets/images/TeamworkRegistration/profile.jpg" alt="" class="imgsetup">
                                </div>
                                <textarea name="" id="" cols="48" rows="4" class="comments"></textarea>
                            </div>

                            <div class="card repeatcard">
                                <div class="image">
                                    <img src="../assets/images/TeamworkRegistration/profile.jpg" alt="" class="imgsetup">
                                </div>
                                <textarea name="" id="" cols="48" rows="4" class="comments"></textarea>
                            </div>

                            <div class="card repeatcard">
                                <div class="image">
                                    <img src="../assets/images/TeamworkRegistration/profile.jpg" alt="" class="imgsetup">
                                </div>
                                <textarea name="" id="" cols="48" rows="4" class="comments"></textarea>
                            </div>

                            <div class="card repeatcard">
                                <div class="image">
                                    <img src="../assets/images/TeamworkRegistration/profile.jpg" alt="" class="imgsetup">
                                </div>
                                <textarea name="" id="" cols="48" rows="4" class="comments"></textarea>
                            </div>

                            <div class="card repeatcard">
                                <div class="image">
                                    <img src="../assets/images/TeamworkRegistration/profile.jpg" alt="" class="imgsetup">
                                </div>
                                <textarea name="" id="" cols="48" rows="4" class="comments"></textarea>
                            </div>
                        </div>
                 

                    
                </div>
            </div>
        </section>
    </body>

    </html>
</template>
<script>
import navbar from '../components/navbar.vue'
export default {
    components: {
        navbar
    }
}
</script>
<style>
.repeatcard{
    display: flex;
    padding: 10px;
    flex-direction: row;
    margin:5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.247);
}
.comments{
    margin-left: 10px;
    border-radius: 15px;
}
.imgsetup{
    width: 40px;
    border-radius: 25px;
}
.display-5 {
    padding-left: 50px;
}

.bell {
    color: white;
    transform: scale(1.5);
    box-shadow: 1px 1px 5px rgba(255, 255, 255, 0);
}

.numberone {
    font-size: 4rem;
    color: white;
}

.notifi {
    padding: 10px;
    background-color: #fffffff8;
    height: 70vh;
    width: 70vh;
    box-shadow: 1px 1px 5px rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    border: none;
    overflow: auto;
}

.mess {
    background-color: #0D0101;
    height: 24vh;
    width: 60vh;
    box-shadow: 1px 1px 5px rgb(0, 0, 0);
}

.setone {
    margin-left: 25px;
    text-align: center;
    padding: 10px;
}



.centercard {
    background-color: #fcfcfc;
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: center;
    margin: 25px;
    height: 70vh;
    border: none;
}

.main {
    padding-top: 55px;
}</style>
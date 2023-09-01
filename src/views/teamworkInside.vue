<template>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <navbar></navbar>
        <div class="main">
            <section>
                <div class="row no-gutters">
                    <div class="col-md-8 one">
                        <div class="back">
                            <a href="backcls"><span class="material-symbols-outlined seedr">arrow_back</span></a>
                        </div>
                        <div class="card imagecenter">
                            <img src="../assets/images/Teamwork/robotic-car-kit.jpg" alt="lostprofileimage" class="card-img-top topimage">
                        </div>
                        <span class="projectname"><b>Robot Car Project</b></span>
                    </div>

                    <div class="col-md-4 two">
                        <a href="#" class="btn btn-success addmemberbtn">Add members</a>
                        <a href="#" class="btn btn-primary videbtn"><span class="material-symbols-outlined cam">videocam</span><span class="meetup">meetup</span></a>
                    </div>
                </div>
            </section>
        </div>
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
.videbtn{
    margin-right: 10px;
}

.addmemberbtn{
    margin-right: 10px;
}
.meetup{
    padding-left: 30px;
}
.cam{
    position: absolute;
}
.projectname{
    margin-left: 10px;
    display: flex;
    align-items: center;
    font-size: xx-large;
}
.back{
    padding: 12px 10px 0px 12px ;
}
.imagecenter{
    margin:10px;
    display: flex;
    align-items: center;
    font-size: xx-large;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    overflow: auto;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.486);
}
.one{
    background-color: rgba(255, 255, 0, 0.041);
    display: flex;
}

.two{
    padding: 15px;
    background-color: rgba(213, 213, 233, 0.192);
    align-items: center;
    display: flex;
    justify-content: right;
}

.main{
    padding-top: 55px;
}
</style>
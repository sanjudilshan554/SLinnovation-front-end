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
            <div class="row no-gutters">
                <div class="">
                    <div class="row rone">
                        <div class="col-sm">
                            <div class="back">
                                <a href="backcls"><span class="material-symbols-outlined seedr">arrow_back</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-8 one">
                    <form action="#">
                        <div class="card p-2 mt-4 cardforinput">
                            <div class="inputsection">
                                <label for="teamname">Create team name</label>
                                <input type="text" class="form-control mb-4">
                            </div>

                            <div class="inputsection">
                                <label for="projectTitle">Create project title</label>
                                <input type="text" class="form-control mb-4">
                            </div>

                            <div class="inputsection">
                                <label for="teamname">Description</label>
                                <textarea class="form-control mb-4" rows="4" ></textarea>
                            </div>

                            <div class="inputsection">
                                <label for="teamname">Time duration</label>
                                <div class="row">
                                    <div class="col mb-4">
                                        <label for="teamname">From</label>
                                        <input type="date" class="form-control">
                                    </div>
                                    <div class="col mb-4">
                                        <label for="teamname">To</label>
                                        <input type="date" class="form-control">
                                    </div>
                                </div>

                            </div>

                            <div class="inputsection">
                                <label for="teamname">Role</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </form>
                </div>

                <div class="col-md-4 two">
                    <div class="row subone">
                            <div class="col">
                                <div class="imagesetup">
                                    <div class="imagename">
                                        <span><b>Project image</b></span>
                                    </div>

                                    <div class="card imageforproject">
                                        <img src="../assets/images/Teamwork/robotic-car-kit.jpg" alt="" class="card-img-top">
                                    </div>

                                    <div class="buttoncls">
                                        <div class="addimagebutton">
                                            <a href="#" class="imagelink">
                                            <span class="material-symbols-outlined imageicon">image</span>
                                            <span class="imagetext">Add</span></a>
                                        </div>
                                    </div>

                                    <div class="submitbuttoncls">
                                        <div class="addimagebuttonforsubmit">
                                            <a href="#" class="submitText">
                                                <span class="sub">Submit</span>
                                            </a>
                                        </div>
                                    </div>

                                </div>
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

<style scoped>
.seedr:hover{
    text-shadow: 2px 2px 10px rgb(3, 253, 3);
}
.rone{
    margin-left:  15px;
    margin-top:10px;
    position: absolute;
}
.imageforproject{
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.452);
}
.cardforinput{
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.452);
}
.main {
    padding-top: 55px;
}

.one {
    background-color: rgba(127, 255, 212, 0.021);
    display: flex;
    justify-content: right;
}

.two {
    background-color: rgba(228, 224, 233, 0.027);
    padding-top: 20px;
}



.submitText{
    text-decoration: none;
    padding: 12px;
    color:white;
    
}
.submitbuttoncls{
    padding-top: 20vh;
    display: flex;
    justify-content: center;
    display: flex;
}


.addimagebuttonforsubmit{
    background-color: #127af0;
    border-radius: 15px;
    padding: 5px;
    box-shadow:1px 1px 2px #333532;
    
}

.addimagebuttonforsubmit:hover{
    background-color: #025bff;
    border-radius: 15px;
    padding: 5px;
    box-shadow:1px 1px 5px #030303;
}
.imagelink{
    display: flex-end;
}
.imagetext{
    padding:10px 10px 10px 25px;

}
.imageicon{
    position: absolute;
}
.imagelink{
    text-decoration: none;
    padding: 10px;
    color: rgb(0, 0, 0);
}
.imagelink:hover{
    color:white;
}
.buttoncls{
    padding-top: 2vh;
    display: flex;
    justify-content: center;
}

.addimagebutton{
    background-color: #599edff3;
    border-radius: 15px;
    border:none;
    box-shadow: 1px 1px 5px rgb(151, 145, 137);
}
.imageforproject{
    width: 40vh;
    height: 40vh;
    overflow: auto;
}
.addmemeberbutton {
    border-radius: 15px;
    border: none;
    box-shadow: 1px 1px 5px rgb(0, 0, 0);
    background-color: #599edff3;
    color: rgb(0, 0, 0);
}



</style>
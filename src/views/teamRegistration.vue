<template>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <navbar></navbar>

    <body>
        <section class="main">
            <div class="row rone">
                <div class="col-sm">
                    <div class="back">
                        <a href="backcls"><span class="material-symbols-outlined seedr">arrow_back</span></a>
                    </div>
                </div>
            </div>

            <section>
                <div class="row rtwo">
                    <div class="col-sm pone">
                        <form action="#">
                            <div class="card inputcard">
                                <div class="inputsection">
                                    <label for="teamname">Create new team name</label>
                                    <input type="text" class="form-control">
                                </div>

                                <div class="inputsection">
                                    <label for="projectTitle">Create new project title</label>
                                    <input type="text" class="form-control">
                                </div>

                                <div class="inputsection">
                                    <label for="teamname">project Description</label>
                                    <textarea class="form-control" rows="4"></textarea>
                                </div>

                                <div class="inputsection">
                                    <label for="teamname">Time duration</label>
                                    <div class="row">
                                        <div class="col">
                                            <label for="teamname">From</label>
                                            <input type="date" class="form-control">
                                        </div>
                                        <div class="col">
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

                    <div class="col-sm ptwo scroll">
                        <div class="card maincard">
                            <div class="repeatSetup">
                                <div class="card cardforseletions">
                                    <div class="row allitems">
                                        <div class="col profileimage">
                                            <img src="../assets/images/TeamworkRegistration/profile.jpg" alt="lostprofiile"
                                                class="profileiimage">
                                        </div>
                                        <div class="col namecenter">
                                            <span class="name">Sanju Dilshan</span>
                                        </div>
                                        <div class="col requestbutton">
                                            <input type="button" value="Add member" class="addmemeberbutton">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="repeatSetup">
                                <div class="card cardforseletions">
                                    <div class="row allitems">
                                        <div class="col profileimage">
                                            <img src="../assets/images/TeamworkRegistration/profile.jpg" alt="lostprofiile"
                                                class="profileiimage">
                                        </div>
                                        <div class="col namecenter">
                                            <span class="name">Sanju Dilshan</span>
                                        </div>
                                        <div class="col requestbutton">
                                            <input type="button" value="Add member" class="addmemeberbutton">
                                        </div>
                                    </div>
                                </div>
                            </div>

                           
                        </div>

                    </div>

                    <div class="col-sm pthree">
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

.submitText{
    text-decoration: none;
    padding: 12px;
    color:white;
}
.submitbuttoncls{
    padding-top: 25vh;
    display: flex;
    justify-content: flex-end;
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
    justify-content: right;
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

.addimagebutton:hover{
    background-color: #0084ff;
    border-radius: 15px;
    border:none;
    box-shadow: 1px 1px 5px rgb(10, 10, 9);
    color:rgb(255, 255, 255);
}
.addmemeberbutton:hover{
    background-color: #0084ff;
    color:rgb(255, 255, 255);
}
.repeatSetup {
    padding: 10px;
}

.maincard {
    align-items: center;
    height: 90%;
    overflow: auto;
}

.cardforseletions {
    width: 100%;
    background-color: rgba(127, 255, 212, 0);
    box-shadow: 1px 1px 5px black;
    padding-right: 5px;
}

.profileiimage {
    width: 50px;
    border-radius: 25px;
}

.allitems {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.name {
    font-weight: bold;
}

.form-control {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.459);
}

.inputsection {
    margin-top: 15px;
}

.textarea {
    height: 80px;
}

.inputcard {
    padding: 10px;
}

.rone {
    display: flex;
}

.pone {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
}

.pone {
    background-color: rgba(127, 255, 212, 0);
    height: 90vh;
    width: 100%;
}

.ptwo {
    background-color: rgba(127, 178, 255, 0);
    height: 90vh;
    width: 100%;
    padding-top: 20px;
}

.pthree {
    background-color: rgba(127, 255, 155, 0);
    height: 90vh;
    width: 100%;
    padding-top: 20px;
    justify-content: center;
    display: flex;
}

.main {
    padding-top: 55px;
}</style>
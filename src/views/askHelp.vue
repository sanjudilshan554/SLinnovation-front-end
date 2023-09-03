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
            <div class="headerTitle">
                <div class="display-4">Ask Help</div>
            </div>
        </section>

        <section>
            <div class="row">
                <div class="col-md-5 one">
                    <form action="" method="" class="alignment">
                        <div class="card maincard">
                            <div class="section">
                                <label for="problem title">Problem title</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="section">
                                <label for="problem title">Problem title</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="section">
                                <label for="problem title">Problem title</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="section">
                                <label for="problem title">Problem title</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="section">
                                <label for="problem title">Problem title</label>
                                <textarea class="form-control" rows="4"></textarea>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="col-md-3 two">
                    <div class="sectionForMid">
                        <label for="ifImage">If any image have</label>
                        <img src="../assets/images/AskHelp/download.png" alt="" class="card-img-top card imgcard">
                    </div>

                    <div class="buttoncls">
                        <div class="addimagebutton">
                            <a href="#" class="imagelink">
                            <span class="material-symbols-outlined imageicon">image</span>
                            <span class="imagetext">Add</span></a>
                        </div>
                    </div>

                </div>

                <div class="col-md-4 three">
                    <div class="sectionthree">
                        <div class="card bigguy">
                            <div class="card smallguy">
                                <img src="../assets/images/TeamworkRegistration/profile.jpg" alt="" class="profileimage">
                                <div class=""><span>Sanju Dilshan</span></div>
                                <div class="requestbtn">Request</div>
                            </div>

                            <div class="card smallguy">
                                <img src="../assets/images/TeamworkRegistration/profile.jpg" alt="" class="profileimage">
                                <div class=""><span>Sanju Dilshan</span></div>
                                <div class="requestbtn">Request</div>
                            </div>

                            <div class="card smallguy">
                                <img src="../assets/images/TeamworkRegistration/profile.jpg" alt="" class="profileimage">
                                <div class=""><span>Sanju Dilshan</span></div>
                                <div class="requestbtn">Request</div>
                            </div>

                            <div class="card smallguy">
                                <img src="../assets/images/TeamworkRegistration/profile.jpg" alt="" class="profileimage">
                                <div class=""><span>Sanju Dilshan</span></div>
                                <div class="requestbtn">Request</div>
                            </div>

                            <div class="card smallguy">
                                <img src="../assets/images/TeamworkRegistration/profile.jpg" alt="" class="profileimage">
                                <div class=""><span>Sanju Dilshan</span></div>
                                <div class="requestbtn">Request</div>
                            </div>

                            <div class="card smallguy">
                                <img src="../assets/images/TeamworkRegistration/profile.jpg" alt="" class="profileimage">
                                <div class=""><span>Sanju Dilshan</span></div>
                                <div class="requestbtn">Request</div>
                            </div>

                            <div class="card smallguy">
                                <img src="../assets/images/TeamworkRegistration/profile.jpg" alt="" class="profileimage">
                                <div class=""><span>Sanju Dilshan</span></div>
                                <div type="button" class="requestbtn">Request</div>
                            </div>
                        </div>

                        <div class="buttoncls">
                            <div class="submitbutton">
                                <a href="#" class="submitimage">
                                <span class="">Submit</span></a>
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
.headerTitle{
    margin-left: 100px;
}
.submitimage{
    text-decoration: none;
    background-color: rgb(3, 76, 172);
    padding: 5px 10px;
    border-radius: 15px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    color: azure;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.438);
}

.submitimage:hover{
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.671);
    text-decoration: none;
    background-color: rgb(6, 112, 252);
    padding: 5px 10px;
    border-radius: 15px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    color: azure;
    transition: 0.3s ease-in-out;
}
.requestbtn{
    background-color: greenyellow;
    padding: 5px 10px;
    border-radius: 15px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.26);
    cursor: pointer;
}

.requestbtn:hover{
    background-color: rgb(207, 255, 136);
    cursor: pointer;
    transition: 0.3s ease-in-out;
}
.bigguy{
    margin:10px 50px;
    height: 60vh;
    overflow: auto;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.418);
}
.smallguy{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    margin:10px
}
.profileimage{
    width:50px;
    border-radius: 25px;
}
.addimagebutton{
    display: flex;
    justify-content: right;
    margin-top: 10px;
    margin-right: 40px;
}

.submitbutton{
    display: flex;
    justify-content: right;
    margin-top: 15px;
    margin-right: 40px;
}
.imagelink{
    background-color: rgb(248, 255, 237);
    padding: 5px 10px;
    border-radius: 15px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.425);
    text-decoration: none;
}

.imagelink:hover{
    background-color: greenyellow;
    text-decoration: none;
    transition: 0.3s ease-in-out;
}

.imageicon{
    position: absolute;
}
.imagetext{
    padding-left: 25px;
}
.sectionForMid{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.imgcard{
    width: 300px;
    height: 300px;
    overflow: auto;
    border-radius: 15px;
}
.form-control{
    margin-top: 15px;
    width: 60vh;
    display: flex;
}
.alignment{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 10px;
}
.maincard{
    padding: 10px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.418);
}
.one{
    background-color: rgba(250, 235, 215, 0);
    height: 80vh;
}

.two{
    background-color: rgba(127, 255, 212, 0.041);
    height: 80vh;
}

.three{
    background-color: rgba(255, 235, 205, 0.021);
    height: 80vh;
}
.main{
    padding-top: 55px;
}
.headerTitle{
    display: flex;
}


</style>
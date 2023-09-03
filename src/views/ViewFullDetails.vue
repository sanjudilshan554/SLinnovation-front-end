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
            <div class="header">
                <div class="display-4">Request from sanju dilshan</div>
            </div>
        </section>

        <section>
            <div class="row">
                <div class="col">
                    <div class="card maincard">
                        <form action="" method="">
                            <div class="sections">
                                <label for="projectTitle">Project Title</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="sections">
                                <label for="projectTitle">Project Title</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="sections">
                                <label for="projectTitle">Project Title</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="sections">
                                <label for="projectTitle">Project Title</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="sections">
                                <label for="projectTitle">Project Title</label>
                                <textarea class="form-control" rows="4"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col">
                    <div class="setup">
                        <img src="../assets/images/AskHelp/download.png" alt="" class="card-img-top image">

                    </div>
                    <div class="set">
                        <textarea name="" id="" class="form-control rightarea" rows="5"></textarea>
                    </div>

                    <div class="sendbtncls">
                        <a href="" class="btn btn-primary sentbtn">
                            <span class="material-symbols-outlined sendicon">send</span><span
                                class="sendtext">send</span></a>
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
.sendbtncls{
    display: flex;
    justify-content: right;
    padding-right: 40px;
    padding-top: 10px;
    
}
.sentbtn {
    text-decoration: none;
    border-radius: 15px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.603);
}

.sendtext {
    padding-left: 25px;
}

.sendicon {
    position: absolute;
}

.rightarea {
    padding-right: 25px;
    margin-right: 25px;
}

.set {
    padding-top: 10px;
    margin-right: 50px;
}

.image {
    width: 400px;
    height: auto;
    border-radius: 15px;
}

.sections {
    padding: 10px;
}

.maincard {
    margin: 5vh 10vh 0vh 10vh;
    padding: 10px;
}

.main {
    padding-top: 55px;
}

.display-4 {
    text-align: center;
}</style>
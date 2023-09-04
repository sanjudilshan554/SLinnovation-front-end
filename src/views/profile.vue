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
            <div class="row headsection">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6 image">
                            <div class="profileimage">
                                <img src="../assets/images/TeamworkRegistration/profile.jpg" alt=""
                                    class="card-img-top directimage">
                            </div>
                        </div>
                        <div class="col-md-6 lefttext">
                            <div class="display-6 text">Sanju Dilshan</div>
                            <p>sanjudilshan554@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6 righttext">
                            <h1 class="display-1 level">LEVEL</h1>
                        </div>
                        <div class="col-md-6 levelcd">
                            <div class="card levelcard">
                                <div class="number">5</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="sectiontwo">
            <div class="row no-gutters">
                <div class="col setupdirection">
                    <div class="card immigration">
                        <div class="number">1</div>
                        <div class="name">Total group Project</div>
                        <div class="count">5</div>
                    </div>
                </div>
                <div class="col setupdirection">
                    <div class="card immigration">
                        <div class="number">1</div>
                        <div class="name">Total group Project</div>
                        <div class="count">5</div>
                    </div>
                </div>
                <div class="w-100"></div>
                <div class="col setupdirection">
                    <div class="card immigration">
                        <div class="number">1</div>
                        <div class="name">Total group Project</div>
                        <div class="count">5</div>
                    </div>
                </div>
                <div class="col setupdirection">
                    <div class="card immigration">
                        <div class="number">1</div>
                        <div class="name">Total group Project</div>
                        <div class="count">5</div>
                    </div>
                </div>
            </div>
        </section>
    </body>

    </html>
</template>
<style scoped>
.sectiontwo {
    padding-top: 40px;
}

.number {
    font-weight: bold;
}

.count {
    background-color: black;
    color: white;
    padding: 10px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    text-align: center;
    justify-content: center;
}

.setupdirection {
    display: flex;

    justify-content: center;
    align-items: center;
}

.immigration {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 300px;
    padding: 5px;
    align-items: center;
    margin: 4px;
}

.headsection {
    background-color: rgb(53, 37, 12);
}

.levelcd {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    padding-top: 30px;
}

.levelcard {
    width: 12rem;
    height: 12rem;
    text-align: center;
    justify-content: center;
    font-size: 10rem;
    border-radius: 50rem;
}

.level {
    color: white;
}

.text {
    align-items: center;
    justify-content: center;
}

.righttext {
    display: flex;
    justify-content: right;
    align-self: center;
}

.lefttext {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    color: white;
}

.image {
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 25px;
}

.directimage {
    border-radius: 150px;
    width: 200px;

}

.main {
    padding-top: 55px;
}

body {
    background-color: rgba(0, 0, 0, 0.164);
}</style>
<script>
import navbar from '../components/navbar.vue'
export default {
    components: {
        navbar
    }
}
</script>
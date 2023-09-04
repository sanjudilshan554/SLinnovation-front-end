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
                <span class="display-5">Notification</span>
            </div>
        </section>

        <section>
            <div class="maincard">
                <div class="card centercard">
                    <div class="setone">
                        <div class="message"><span>Message</span></div>
                        <div class="card notifi">
                            <div class="numberone">5</div>
                            <span class="material-symbols-outlined bell">
                                notifications
                            </span>
                        </div>
                    </div>

                    <div class="setone">
                        <div class="message"><span>Acception</span></div>
                        <div class="card mess">
                            <div class="numberone">5</div>
                            <span class="material-symbols-outlined bell">
                                notifications
                            </span>
                        </div>

                    </div>


                    <div class="setone">
                        <div class="message">
                            <div>Help needers</div>
                        </div>
                        <div class="card help">
                            <div class="numberone">5</div>
                            <span class="material-symbols-outlined bell">
                                notifications
                            </span>
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
    background-color: #0079F1;
    height: 24vh;
    width: 15vh;
    box-shadow: 1px 1px 5px rgb(0, 0, 0);
}

.mess {
    background-color: #0D0101;
    height: 24vh;
    width: 15vh;
    box-shadow: 1px 1px 5px rgb(0, 0, 0);
}

.help {
    background-color: #F10000;
    height: 24vh;
    width: 15vh;
    box-shadow: 1px 1px 5px rgb(0, 0, 0);
}

.setone {
    margin-left: 25px;
    text-align: center;
}

.centercard {
    margin: 25px;
    height: 70vh;
}

.centercard {
    background-color: #62666650;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.main {
    padding-top: 55px;
}</style>
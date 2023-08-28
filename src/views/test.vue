<template>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <section class="one">
            <img src="../assets/images/slider/mercedes-amg-g63-rear-8q.jpg" alt="">
        </section>

        <section class="two">
            <img src="../assets/images/slider/mercedes-amg-g63-rear-8q.jpg" alt="">
        </section>
    </body>
   
    </html>
</template>

<script></script>
<style>
    .one{
        background-color: rgba(0, 0, 0, 0);
        padding:0;
        margin:0;
        width:100%;
        height:400px;
        display:flex;
        flex-direction: row;
        justify-content: start;
        overflow: hidden;
    }

    .one > img{
        /* flex-basis: 60%; */
        position: relative;
        clip-path: polygon(
            20% 0%,
            60% 0,
            80% 50%,
            60% 100%,
            20% 100%,
            0% 50%
        );
    }

 
    .two{
        display: flex;
        flex-direction: row;
        margin: 0;
        padding:0;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.021);
        width: 100%;
        height: 25vh;
    }

    .two > img{
        
        clip-path: polygon(
            0% 50%,
            20% 0%,
            50% 0%,
            70% 50%,
            50% 100%,
            20% 100%
        );
    }
</style>
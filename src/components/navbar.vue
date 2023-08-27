<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <section>
   
                <div class="navigation">
                    <nav class="navigationpannel">
                        <img src="../assets/images/logo.png" alt="lost images" class="logo">
                        <p class="logoinnovation">SLinnovation</p>
                    </nav>
                </div>
   
        </section>
</template>

<style>
.navigationpannel{
    height: 8vh;
    width: 100%;
    top: 0%;
    left: 0%;
    background-color: rgba(255, 255, 255, 0.918);
    display: flex;
    text-shadow: #0a0a0a 1px 1px 2px 0.1px ;
    box-shadow: #0a0a0a 1px 1px 6px 0.1px;
    position: fixed; 
    z-index: 9999; /* Going content under the navbar */
    
}

.textlogo{
    padding: 5vh;
    text-align: center;
    font-size: small;
    color: #726a6a;
}

.logo{
    margin: 5px 0px 5px 10px ;
    height: 5vh;
    width: auto;
    align-self: flex-start;
    display: flex;
    background-position: fixed;
}

.logoinnovation{
    margin-top: 2.8vh;
    align-items: flex-start;
    font-weight: bold;
    margin-left: 0%;
    font-size: auto;
    
}

.navigation{
    width:100%;
}


</style>
<script></script>
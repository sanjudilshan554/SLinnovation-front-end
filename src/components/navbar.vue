<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
   
    <header>
        <div class=""><img src="../assets/images/logo.png" alt="logo" class="logo"></div>
        <label for="icons" class="icons"><span class="material-symbols-outlined icon">menu</span></label>
        <ul class="navbar">
            <li class="link">Home</li>
            <li class="link">Service</li>
            <li class="link">Upload</li>
            <li class="link">Contact</li>
        </ul>
        <div class="right">
            <div class="notification">ICON</div>
            <div class="user">SANJUDILSHAN</div>
            <input type="button" value="logout">
        </div>
       
    </header>

</template>

<style>
body{
    padding: 0;
    margin: 0;
}
.logo{
    margin-left: 15px;
    width:80px;
    background-color: rgba(0, 255, 255, 0);
}

.navbar{
  list-style-type: none;
   justify-content: center;
   align-items: center;
   margin:0;
   padding: 0;
}

li{
    background-color: rgb(197, 206, 214);
    justify-content: center;
    padding: 10px;
}

header{
    display: flex;
    background-color: rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content:space-between;
    width: 100%;
    box-shadow: 1px 1px 5px  black;
    z-index: 999;
    background-position: fixed;
    backdrop-filter: blur(50px);
}

.right{
    margin-right: 15px;
    display: flex;
}

.icons{
    display: none;
}
/* BREAKPOINTS */

@media (max-width: 992px){
   
}

@media(max-width: 693px){
 
    .notification{
        display: none;
    }
   
    .user{
        display: none;
    }
}

@media (max-width: 500px){
    .right{
        display: none;
    }
    .navbar{
        display: none;
    }
    .icons{
        display: block;
        padding-left: 10%;
    }
}
</style>
<script></script>
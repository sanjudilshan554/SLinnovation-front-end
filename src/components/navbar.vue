<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
   
    <header>
        <div class=""><img src="../assets/images/logo.png" alt="logo" class="logo"></div>
        <label for="icons" class="icons"><span class="material-symbols-outlined icon">menu</span></label>
        <ul class="navbar">
            <a href="">Home</a>
            <a href="">Service</a>
            <a href="">Upload</a>
            <a href="">Contact</a>
        </ul>
        <div class="right">
            <div class="notification">ICON</div>
            <div class="user">SANJUDILSHAN</div>
            <input type="button" value="logout">
        </div>
       
    </header>

</template>

<style scoped>
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

a{
    background-color: #b2b7c0;
    justify-content: center;
    padding: 15px;
    text-decoration: none;
    color:rgb(0, 0, 0);
}

a:hover{
    background-color: #001E44;
    justify-content: center;
    padding: 15px;
    text-decoration: none;
    color:white;
    transition: background-color ease-in-out 0.3s;
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
    margin: 2vh;
    cursor: pointer;
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
        position: absolute;
        background-color: #e1e5eb;
        padding: 15px;
        width: 100%;
        top: 100%;
        left: 0;
        backdrop-filter: blur(15px);
        background-position: fixed;
    }
    .icons{
        display: flex;
        padding-left: 20%;
        margin-left: 25px;
    }

     .navbar a{
        color: rgb(0, 0, 0);
        display: block;
        text-align: left;
        font-size: small;
        margin: 1vh;
    }
} 

</style>
<script></script>
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
            <div class="card notification">
                <div class="circle">
                    <sup><p class="numbernotifiy">13</p></sup> 
                </div> 
                <span class="material-symbols-outlined ">notifications</span>
            </div> 

            

            <div class="user">
                <div class="card userimagecard">
                    <img src="../assets/images/Navbar/df-removebg-preview.jpg" alt="lost user" class="card-img-center card-img userimage">
                </div>
               <p class="username">SANJUDILSHAN</p> 
            </div>

            <div class="logutbutton">
                <input type="button" value="logout" class="logout">
            </div>
        </div>   
    </header>
</template>

<style scoped>


.material-symbols-outlined{
    background-color: hsla(214, 100%, 13%, 0.007);

}
.card .numbernotifiy{
    font-size: 10px;
    background-color: rgb(223, 18, 18);
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 15px;
    color:whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    margin-left: 3px;
    margin-top: -5px;
    
} 

.notification{
    margin:5px 20px 0px 0px;
    justify-content: center;
    align-items: center;
    display:inline-flex;
    background-color: #b2b7c000;
    border: none;
}

.circle{

}


.userimagecard{
    /* border-radius: 15px; */
    background-color: greenyellow;
    border: none;
    display: flex;
    width: 35px;
    height: 35px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    margin-right: 5px;
}
.userimage{
    align-items: center;
    justify-content: center;
    width: 30px;
    border-radius: 15px;
    border: none; 
}
.logout{
    background-color: rgb(228, 16, 16);
    border-radius: 15px;
    color:white;
    padding:0px 15px;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: none;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.63) ;
    text-shadow: 1px 1px 5px rgb(255, 255, 255);
}


.user{
    display: flex;
    margin-right: 20px;
    align-items: center;
    /* margin-top: 5px; */
}
.username{
    margin: 0px 0px 0px 0px;
    justify-content: center;
    align-items: center;
}

.logout:hover{
    background-color: red;
    border-radius: 15px;
    color:white;
    padding:2px 15px;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: none;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.63) ;
    text-shadow: 1px 1px 5px rgb(255, 255, 255);
    transition: background-color, color, ease-in-out 0.3s;
}

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
    position: fixed;
    display: flex;
    background-color: rgba(255, 255, 255, 0);
    align-items: center;
    justify-content:space-between;
    width: 100%;
    box-shadow: 1px 1px 5px  black;
    z-index: 50;
    /* backdrop-filter: blur(50px);   */
    /* background-repeat: no-repeat; */
    /* background-position:fixed; */
    /* position:absolute;  */
    
}



.right{
    display: flex;
    margin-right: 15px;
    align-items: center;
    justify-content: center;
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
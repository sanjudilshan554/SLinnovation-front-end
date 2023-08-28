<template>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

    </head>
    <body>
        
        <Navbar></Navbar>
       
       <section class="content"> <!-- using for no gutters -->
        <div class="row g-0"> 
            <div class="col col-md-6">
                <div class="leftside">
                    <img src="../assets/images/login.png" alt="" class="loginpng">
                    
                    <section>
                        <div class="textlogo">
                            <p class="textlogoinput">Inventions often stem from identifying a problem or a gap in the
                            solution or an area where improvements can be made.</p>
                        </div>
                    </section>

    
                    </div>
                
            </div>

            <div class="col col-md-">
                <div class="rightside">
                    <div class="container">
            <div class="row g-0"></div>

            <form action="" class="card loginform ">
                <h2 class="display-6 onlogintext">Login</h2>
        

                <div class="form">
                    
                    
                    <div class="inset">
                        <div class="emailcontrol">
                            <div class="">
                                <label for="email">Email</label>
                            </div>
                            <div class="">
                                <input class='form-control email' type="email" placeholder="enter your email">
                            </div>
                        </div>

                        <div class="passwordcontrol">
                            <div class="">
                                <label for="Password">Password</label>
                            </div>
                            <div class="">
                                <input class='form-control password' type="password" placeholder="enter your email">
                            </div>
                        </div>


                        <div class="loginbutton">
                            <button class="loginbtn">Login</button>
                        </div>
                    </div> 
                    <div class="">
                        <label for="account not find" class="dontacc">Not have an account</label> <a href="#" class="createacc">Create account</a>
                    </div>
                </div>
                
            </form>
        </div>
                </div>
            </div>
        </div>
    </section>
    </body>
    </html>
</template>


<script>
import Navbar from '../components/navbar.vue';
export default{
    components:{
        Navbar
    }
}
      
</script>

<style scoped>


.container{
    
    justify-content: center;
    align-items: center; 
    display: flex; 
}

.dontacc{
    color:#726a6a;
    font-size: small;
}

.createacc{
    color: rgb(163, 114, 9);
    font-size: small;
}

.createacc:hover{
    color: rgb(255, 0, 0);
    transition: color 0.5s;
}

.leftside{
    width: auto;
    height: 100vh;
}

.rightside{
    width: 100%;
    height: 100vh;
    background-color: #c2dbd46b;
 
} 

.leftside{
    background-color: #08728554;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.main{
    display: block;
    /* background-color: #cadcdf; */
    background-repeat: no-repeat;
    background-position: fixed;
}
.rightside{
    display: flex;
    align-items: center;
    justify-content: center;
}

.card.loginform{
    box-shadow: rgb(189, 176, 176)  1px 1px 5px 0.5px;
    justify-content: center; 
    align-items: center; 
    height: 70vh;
    width: 50vh;
    border-radius:50px;
}

.onlogintext{
    text-shadow: 2px 2px 4px rgb(90, 81, 81) ;
    /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); */
    text-align: center;
    padding-bottom: 7vh;
}





.emailcontrol{
    margin-bottom: 2vh;
}
.passwordcontrol{
    margin-bottom: 2vh;
}

.inset{
    display: flex;
    flex-direction: column;
}

.loginbutton{
    display: flex;
    flex-direction: column;
}

.loginbtn{
    background-color: #047B6F;
    border-radius: 20px;
    color: rgb(255, 255, 255);
    border: none;
    padding: 5px 20px;
    box-shadow:1px 1px 5px #020101;
    margin-top: 1vh;
    margin-bottom: 1vh;
    align-self: flex-end;
}

.loginbtn:hover{
    background-color: #01df70;
    border-radius: 20px;
    color: rgb(255, 255, 255);
    border: none;
    padding: 5px 20px;
    box-shadow:1px 1px 5px #020101;
    transition: 0.5;
    transition: background-color 0.5s, color 0.5s;
}

.loginpng{
    width: 50%;
    height:auto;
}

.form-control{
    border: none;
    border-bottom: 1px solid rgb(22, 23, 32);
    transition: border-color 0.3s ease-in-out ;
    border-color: none;
    outline: none;
    border-radius: none;

}

.form-control:focus{
    box-shadow: none;
    border-bottom: 1px solid rgb(4, 0, 255);
    transition: border-color 0.3s ease-in-out ;
    border-radius: none;
}
</style>
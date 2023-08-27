<template>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <Navbar></Navbar>
        
    <section class="content">
        <div class="back">
            <button class="backcls"><span class="material-symbols-outlined">arrow_back</span></button>
        </div>
      
            <div class="container">
                
                <div class="card"> 
                    <form action="" target="" class="fromin">
                        <div class="">
                            <div class="textdc">
                                <label for="signup" class="display-6"><p class="signuptext">Signup</p></label>
                            </div>

                            <div class="">
                                <label for="firstname">First name</label>
                                <input type="text" class="form-control">
                            </div>

                            <div class="">
                                <label for="firstname">Last name</label>
                                <input type="text" class="form-control">
                            </div>

                            <div class="">
                                <label for="firstname">Nic number</label>
                                <input type="text" class="form-control">
                            </div>

                            <div class="">
                                <label for="firstname">Email address</label>
                                <input type="text" class="form-control">
                            </div>

                            <div class="">
                                <label for="firstname">Create new password</label>
                                <input type="text" class="form-control">
                            </div>

                            <div class="">
                                <label for="firstname">Confirm password</label>
                                <input type="text" class="form-control">
                            </div>

                            <div class="btncls">
                                <button class="signupbtn">Signup</button>
                                <button class="cancelbtn">Cancel</button>
                               
                            </div>
                        </div>
                    </form>
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

.content{
    padding-top:8vh;
   
}
.back{
    background-color: #ffffff00;
    display: inline-block;
    position: fixed;
}

.backcls{
    background-color: rgba(245, 222, 179, 0);
    padding: none;
    outline: none;
    border: none;
    margin-top:10px;
    display: inline-block;
    cursor: pointer;
} 

.material-symbols-outlined{
  color: azure;
  outline-color: #00ff4c;
}

body{
    background-color: #5cc4ab;
}

.container{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 92vh;
  flex-direction: column;
  
} 



.textdc{
    text-align: center;
}

.signuptext{
    color: rgb(0, 0, 0);
}

.card{
    position: fixed;
    padding: 10px;
    border-radius: 25px;
    width: 100%;
    max-width: 400px;
    box-shadow: 1px 1px 5px 0.1px rgb(121, 119, 119);
}

.form-control{
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 5px 0;
    font-size: small;
    transition: border-color 0.3s ease-in-out;
    outline: none;
}

.form-control:focus {
  border-bottom-color: #03e547;
  outline: none;
  box-shadow: none;
}

.btncls{
    display: flex;
    flex-direction: row-reverse;
}

.cancelbtn{
    align-self: flex-start;
    padding: 5px 15px;
    margin: 2vh;
    background-color: rgba(228, 14, 14, 0.911);
    border: none;
    border-radius: 25px;
    color:white;
    box-shadow: 1px 1px 5px black;
}

.signupbtn{
    align-self: flex-start;
    padding: 5px 15px;
    margin: 2vh;
    background-color: #03E547;
    border: none;
    border-radius: 25px;
    color:white;
    box-shadow: 1px 1px 5px black;
}

.cancelbtn:hover{
    align-self: flex-start;
    padding: 5px 15px;
    margin: 2vh;
    background-color: rgb(255, 0, 0);
    border: none;
    border-radius: 25px;
    color:white;
    box-shadow: 2px 2px 10px black;
    transition:background-color 0.2s , color 0.9s;
}

.signupbtn:hover{
    align-self: flex-start;
    padding: 5px 15px;
    margin: 2vh;
    background-color: #00ff4c;
    border: none;
    border-radius: 25px;
    color:white;
    box-shadow: 2px 2px 10px black;
    transition:background-color 0.5s , color 0.5s;
}
</style>
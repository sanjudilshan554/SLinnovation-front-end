
<template>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>

    <Navbar></Navbar>

      <section>
        <!-- <div class="container"> -->
          <div class="row leftside">
  
              <div class="col-sm">
                    <div class="bigguy">
                      <h1 class="display-3">UNLEASH POTENTIAL</h1>
                    </div>

                
                  
                    <div class="lighttext">
                      <p class="light">Innovation propels us beyond boundaries,<br> 
                      awakening our inherent curiosity and driving<br>
                      rogress. It's the spark that transforms<br>
                      challenges into opportunities and reshapes<br>
                      the world as we know it. Fueled by the<br>
                      relentless pursuit of improvement,
                      </p>
                    </div>
                    
                    <div>
                      <div class="homesecond">
                        <img src="../assets/images/homesecond.png" alt="losthome" class="homesec">
                      </div>
                    </div>

                </div>
                  
              <div class="col-sm">
                      <img src="../assets/images/homeimage.png" alt="lostBase" class="footbase">
              </div>
              
            </div>
            
        <!-- </div> -->
      </section>

      <section>
        <!-- <div class="container"> -->
          <div class="row sectiontwo">
            <div class="col-sm">
              <p class="section-two-text">Innovation propels us beyond boundaries, awakening our inherent curiosity and driving rogress. It's the spark that <br>
                  challenges into opportunities and reshapes he world as we know it. Fueled by the relentless pursuit of improvement,
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-sm">
              <div class="cardclasss">
                <div class="card cardone">
                  <img src="../assets/images/cardImage/teamwork.jpg" alt="" class="card-img-top card-img">
                </div>

                <div class="card">
                  <img src="../assets/images/cardImage/selfwork.jpg" alt="" class="card-img-top card-img">
                </div>

                <div class="card">
                  <img src="../assets/images/cardImage/givesupport.jpg" alt="" class="card-img-center card-img givesuport">
                </div>

                <div class="card">
                  <img src="../assets/images/cardImage/help.jpg" alt="" class="card-img-top card-img">
                </div>

                <div class="card">
                  <img src="../assets/images/cardImage/patent.jpg" alt="" class="card-img-top card-img">
                </div>

              </div>
            </div>
          </div>
        <!-- </div> -->
      </section>
  </body>
  </html>
</template>

<script>
import Navbar from '../components/navbar.vue'
export default{
  components:{
    Navbar
  }
}

</script>

<style>
.givesuport{
  margin-top: 20px;
}
.cardclasss{
  display: flex;
  align-items: center;
  justify-content: center;
}

.cardclasss img{
  max-width: 100%;
  height: auto;
}
.card{
  margin: 20px;
  border-radius: 25px;
  box-shadow: 1px 1px 5px;
  max-width: 200px;
  height: 200px; 
  overflow: hidden;
}


.section-two-text{
  margin-top: 5vh;
  background-color: rgba(250, 235, 215, 0.658);
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: larger;
}

.bigguy{
  text-overflow: clip;
}

.footbase{
  width:115vh;
  background-position: fixed;
}
.leftside{
  background-color: rgba(17, 2, 2, 0.233);
  height: 100%;
}

.bigguy{
  padding: 5vh 0vh 0vh 6vh;
  font-weight: bold;
}

.lighttext{
  padding-left: 6vh;
  font-size:larger;
  text-align: left;
}

.homesec{
  width:60vh;
  padding-left: 10vh;
}
</style>

